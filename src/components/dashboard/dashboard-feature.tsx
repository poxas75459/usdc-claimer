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
    "2LpWxbW68VBTaYyzJANPB9P14JsdWYAWRMvwYNXutuFJKvtE7BDUTFnqxnrQKiAuqGT4qSUNtacrD9LcPGmQbUTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wNxzs4hkYHjmxRqrfpAvHkrr3hvTMc4C651FjahUer69oCtN6ofbsmi7MKV2nAQMLJRBSiQwpZJHcXpEwaEV1p2",
  "key1": "67mEN8KrPFYxw6CfRBDqNDo4fdyY8HhfbRi8VXoDje9AiLJ5nXw3Dn9ncJRJNC6orcvUEenL7MqzhEf7VmprcmNe",
  "key2": "NR8zBgAQR6qT5cdv4sgEVdS7p1bvCXqPwdJkLvGKjx4y5RWaTP6QVpDcJejrpMeK3euV4gmZo2ztAFr3k4ieGgh",
  "key3": "4bainbXgrxuPb9uaa3nsHKyfZVb9yRe5dQZb4Ki7crvbYXDzygskepDqKHFFsGFvpu3Qs1t585W4gRPTSbZ4FRSx",
  "key4": "SuvDhWtKuVkFCRBo5nxqnwxxJt62R8QBS4Z4uFxuAGnqYiXYQ9QvSdRk9f9rxujNEWxBdUNRoic1bQWQ4VmbJdg",
  "key5": "66CaYWC9uKsTSPVjcSjN5uFHe6Gfd2uqrSACnaUMr2KHX3iJXVZuPorAJUBzuvN2gNXRY3r4EuC58nQzwHHDE6gf",
  "key6": "4PS5XQUtKjYRbmPwh1inU687NEhEwFionuqmyM36qQL3vC5kska6GGa7mEBdF4G8dhYobRd3sQdwesGiJAgW8dRf",
  "key7": "EdCdCZRyX7f9SxK1UhvGHZ7qdv2wMDR52GXwjyPDhZoHFP1TN74YKsDR7Rk941WMb4maWiypdiRNUGDZk3Csqkh",
  "key8": "2Kr1NsZnBvUtb8diWszo9WSgnPpjmmi1Yntxc1bP8ctN7vFm6B5XNdZAjJvSzxx9rZthwvpLYug3KFsCtDUR9sbp",
  "key9": "4dZc2HCZW1z2N2xwFeqjH3nBnxMRfkxGwNYThc1wk4mASYGbkcdRE4XtipJjEwNK9VdY9UnBQGTZqoPRX7WiRP7s",
  "key10": "65QgG2Cagro7aX42fFGwVMRnj8YYiA7WVvG9muy1Yd6MfytdcRFuiyWMkcc1a1sf3aqpvbZRvnFT5nJRAkoUp2mJ",
  "key11": "tK9CawYZGt2JTmuUCtrZeqz14gC2VBAN6SVgiQo1QVCEVMuExo5gbEyZ9EMRbNPbmPf62Tknf2Wswc3oyRUeS9j",
  "key12": "2hqN5XQnK5rXBfiTzTUkQ6bBFnoM4exBcYy1M2uE8ksNHomyuFtfXBxR1zTM93ceNqZiKxjeVoHeg3CoC4BMf1ZU",
  "key13": "362ncZsLkuT9NYYu1N27jbtg8fgH98LXU8iZdqXxMTzDjMQoT4EzqdKL2VpA4nmiDqeoUbbBoLsVwXcw4kqBwqDK",
  "key14": "4Beg37Szch2Bg51Cpizm2E5gsofXNCV7emehx3cWDJQGcyCEH1NhdrpnhFppF6gBAdCPLSNSayQwwgSuKZXY44fx",
  "key15": "VYe3QFbnnYwMz99D1mGsCH2G4koFVsXJTpT6dHiNVrRJtv7x5VwzExsvfi5qK3eBE34qvjWeJaz7qd8oeDwfqir",
  "key16": "2ouZD29aNUDnJQ5xDJAv9CGrVGPEp3Lwg7DcRzdoAbmFR1nPXoQ8anG9wJPBskSifCaj7cskm3pTKRBVcaazTGbN",
  "key17": "4dQb1mF5NYH2bww1dCwCa1n1VJb5yD1NowP7Ca6BK14xYLKHLCownsZG7m2uaEyXdKTdq7XniddsRhAUSdUuYnk8",
  "key18": "2NJKpfeEJ27AbdeNM29bNoCZ39UG42a2T7jgiDqFWLSQ24VEqhCA5ToqpLJEpX6FGWrC4do9qX9WZUxqvEhWgLiw",
  "key19": "3UVymUrsJewzprg4PfoNreHCJLD2iS7zmvf7CWmQ81Lbh7426iC8FY9qJh38PP1fsfJgdiRVmz7JVkY7RAzwaXsj",
  "key20": "4MALLgZA7Lx4ghEsFHEsakbtE2U8GQ8Vkp1Zh42wVAUQV5V5ymyXPEhNcT93hxy2fk3ZTvgLfzfyy2XSSh39NB3D",
  "key21": "49TfpXUd9RS5vSSbUL77jiTDqeCKJY2Zu7PvujwQZbVMS2ByEMxS8Bkw6RM9miVpUbvdPbkHWyx743JTXRiH7t4U",
  "key22": "56MqmuMYu8kr4sVJmvTzLBkNWCKSAuam1uFAsVQFd6hLsADuiapnrTCVzrRNEV2CoqsPRQ43gCzcT4w8wKUX2BV9",
  "key23": "sJKVRx3ivgz6xzuCBw343ZZC1m6yFCHaGKhfuXTKs2paFDZpr1cRA7Qfo4DVshTGFunNDGQqStxEQhDkKVBEo1L",
  "key24": "4WsgYBUedpbAVAinKQ324jrEjWwocrdAnhhqZH39SXPy3eYHMrstcSaQ3kzCTmkWJfQMWzpdxgL88BsrNPH5LDXq"
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
