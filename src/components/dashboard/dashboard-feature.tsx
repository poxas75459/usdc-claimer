/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "1TvZzwzMfXk6VXWC7nT36kCqeVNuwhypQ5Si1YSmrcjFQYHZYBwHQdryHfXWXtk3m5L3ir158mq7GdEBSk9pGLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H19mNBtk4Nyo66wwe8mueCHxTBRz5kUsgFfYSfz9dqk4iUAxw42cnZJJemWAH3JJGgzwfKQJDwbHw9ikprW2bDv",
  "key1": "64mCeutsbRaP13AVCXfW2aBQo3P4UzdTF9v4s4j2e5SP9THJUUnchzDY1ZycStMpmGAcuQaJMP7VQjdS5Zo2emDo",
  "key2": "3FKcxV5w46d5JTZdFbjY9CsMznxoGR6TX1PTaadzw3aSMUGeBtcAVH4gMjHz8uLZHcwjeBxrC43RHxctyySKoYfr",
  "key3": "4koDHjSqcTYMePn9coqktnL9QDLnMyPtgKRJsqWatW5WCjFdpUSHwgsiHuBh2uCyZRTgXMyA7H4R1F85RfPnyLm6",
  "key4": "5oPJVuHNAPHqwQCcaxcifVzd5e7kcBapiTvvomvQ1ntv9kUXuERGm6ZQKBgTk11gjcezWPAbfr5bePLybyW38fyn",
  "key5": "55QkN7qHFV5qPMwCAfnYuBTz9X4WA95Lvptz5u4h82xdxfJTzeibyP8q1ytGKc1e4qHWRyZetCqhk8USDaRxtqP2",
  "key6": "385vzkjg7GwbT28dGL2y6kuhnbSkrxbyk22nE9P2xJmHgBmhr2DSxZXh9x6eEQp93k7in1PTsWsngmqb7TA8xgQZ",
  "key7": "QfbXnhUqnAHTA8hAM22a8DgRH5nEJiV8XneyTU8MUL84hAEbyoc9PtRYouBt91M4WTu5fXBzhXymfcEi4jonZvP",
  "key8": "5tedVVQDLJp6AwiCuTmsZUgRSfbWJkPNxGm9xJkX9HBjGzMsQVYFPq1BivWTZKYgSQ3zed7kKsb5FcNUyG6shT2d",
  "key9": "4wfyxjE1vhEz4AmR4cZn5KCNquk6fzzrXAMMDmi17M1MMpv2gLDDwAHQPTTezepiRkrAzeBbCr71hz9v34dagqXZ",
  "key10": "5YE1PZj71DiH1GFQmKBds73aUzfmUAynJs8BCHY78DgCU2A9KnMruVqHehzNAja2ysKYEAEe552RQeHTvtwDzk5u",
  "key11": "2emo6F1Ug5BvAYKd2u9P4r6MdgjE5XwE7KgZxrX1M3PXn2YjrMQBAzSS659jvoNsWz66fiW8fk9wr1pDHMc6MGky",
  "key12": "2EUa76zE7HDFQaGwYCM8b449NRwX6dPus7WDChh3wTXGjjnMdsffpeQr2Y1K4To5SYnoJ437ztiU1mgpfLXAC6Cs",
  "key13": "3gb5iR1Ghxar1oAWSvzsg1iVhCRDwb9dbs44UQWGTwL9VA8wDQo47mVujRdRNtpcPwwCLH32aLJZ6ZqBMDe3CMkZ",
  "key14": "4TFHSqsN1zutisWbjFe7xjmR6So3LdSSheuLwaowzYmGavyBB3BTgfeFKYFwN5yHECVfryDZUEx2uNMMnHgaX5Co",
  "key15": "Lgi9kJAQj5r4MvThYmT8jBFrmdEYpRLA6ZD5up2Ptnog15xB2Bu9d3kYb4REhGFnyaFNGRPDAokDfMvMbYksiQD",
  "key16": "53XDqS3xhRTLcYyzAR7X2xmfZahuG3jxhvqX5zdTWvBecKKHjYRd9UYAecUM9jCMCCpsUrJLbaLtgP2uap1AWEmA",
  "key17": "5s6cJw5a6BYemjdrt1nhNcsUZ8wEAkpYAvcVFRQGrGyucsyjRbWnMAXqNsirM9o17Z1hjuvLmkaiEaFakTbo2Xtn",
  "key18": "2Eqzz9Em8jbxfT85kci5nYsKAzhGn5XKZN3YBKovHR1ZViAoxZCxtghp5kRsaytkmtspmSEebpjDvmn1PdsPVgL3",
  "key19": "4RPbmsyx34rzJES3tfsgfVSVQp8BFCRD6cPh8yWTYakKXhFN7gbNEqv3x817Zdc3rbTuSzZeyiRum7riNVPF5Cy1",
  "key20": "3e1PZJx1hk2MRTruUpHkFFYSxisWXRJN7bggzdpzwtVNLDgmevUTzddbnGD1PvuWU4wMPt6eXK7gsf2Ffue94raR",
  "key21": "5rbYw6yPZAPhtw194koweXQrPy9hhEuDne9H4wjJSYBzBHYyRpX63yZQ4iKDUkwoGzfr6ef8Yzt9KmPdykBrVuHy",
  "key22": "4Ri3TCzjJta82HwvtoDkxFDr8RVPdXfAuRTPPrPsfnTK2pmHFdXTtJf3MxWyGaGMMj5yFmjydPM95NabDT98t2M3",
  "key23": "4QaSTEuxjGg5RV3FtB7TeMvEVDG3pX6m8pBRM9C4qGxgSs1aDtKdbbj41zMQd5Xw5gExDUqAKsMQK7GghgLzSCBe",
  "key24": "3VrJ7VZw5fdXXYSXqfwY4rmJpWZbbRrcL1YeXqNPudwcecVLSAsFFyjFaJaryVqmCo6cW7ciKVsy1F1RtLhgN2Rk",
  "key25": "2L5RdZ2o3pvgqgAgftHKuacUmTHA3c6pLEKPpQaV6nFtZCHsUtZrEgKtxPdhWpfDwcqr4gKmAJPMcjiiCavddiaa",
  "key26": "5a6gACkUmZd3uuX2Pu9KkJU4c6zUqSff3PCg41kndjetPrB8cnfewPQfaVjJ434yNC3bmseEfARR4WfzJgLWDRyc",
  "key27": "3NKbErwrjcxoJRBFZvWxETpymVJEy9VYc6AWzSwHH7fgFSCGnD1mL3SuGyy6y9VBWuLiTnojcugDYf2JtGQCuuAB"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
