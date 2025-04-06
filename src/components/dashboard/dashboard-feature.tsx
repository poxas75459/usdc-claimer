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
    "oiKih7s6BnbYEGBG2x2gWabbmcRVgVccs7CB2tFsiEghEaPtV7bx9Z5Jv57hyusfMvZ2Me6UJkiDHhFjLD5B7wY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cjUxTCUpbwReXCJCMZCrrGsL1KmNQKc9LK5YB9SHNwzFNbXJo8ngQCX8s1HL4G73oh82NMf1kqbq67b6hHQqb66",
  "key1": "wLmAaEsZDuXpwPNPoqXfj4y8EPt6oZpFEmhRXob3uCgL4UManKnoJhVmmeuTMWSs4Ki6vvBkzuigfkvk9Ns6Ehm",
  "key2": "4n6sSVBVwWuB5T1XWnZt5wzaMhrAar3vHMrAbP6MdXNsNCRuDqxauq5BZ7fBmdp1stmnPi7EYk3YUX3rUQFKrbnc",
  "key3": "3vLcP2nhXwF5tzkiGdYA6v9TnSzRYUdCmkzT23m9CwhQLMDNHdJBzk472uDNn8CbjQcnWbsc9BZvATkVSWRQaGRy",
  "key4": "4ijcZ9dqy2tP8EMuoAbiuo6TaSQWgRUvuoSAoSgsdmB8MdXEG4SRM6FCXV4vxw3aM7h4XgFiuY1W8aPuT8MBuzah",
  "key5": "21qQhX6D6hmTzjraojNwfxptHVQreZyzG8N8BRVKbgSQ4yL4erJMtnHERAZh8pkMaseMN1hQvtR6ivpE1ZUC3S4N",
  "key6": "8BTTomywtVkPJQtuc9TLALKg8Q8QmnDEEq6NRUsazZsVQinE2Q3GGCviqNAgLCf3tezRj4EUJm1ziFQUkn5pAJR",
  "key7": "24Q4Kk7btZjycBaXKyqom64jqpG6sKGQ2UwxycNtkyQp6UNZpeqUqbajfkcdvcEHMCxrkYuV5Xz6LGHpCaa2aMGZ",
  "key8": "HHCPipnDeHijcor91215RoWuiC8F8wczmbyX7jKuJZX29yyVgWw9ZgceMu68tbwkLFJMCdve4MMTFf5Mpn3JaMo",
  "key9": "23hmeeX9n3ZUBQsp1mL48g4mjFkmp1YYHjkFxJVgmEHA65wft5v5LBKFuMe6efutYAfW37oVMA8d1dU72ujNPXTm",
  "key10": "5bgeqTHk1id36TJaUieRcV2J4erPVY12JQnFYAo5Y5bQrCQGMAtEAuAYNGpMKcErJiDUcdvZQrBVv39EvFCMJfnj",
  "key11": "4dYD9gigyjq4Ksdy9XZQrNgnW71qX2269KYf8Fxo5wEK1NsqXWkiEbGUbokN4euUun1qrQwmXYydgjR883rxDkY7",
  "key12": "2LiKTrkrSfFhmnZ73eCFEpsC5f964H2SwjQfYhfEpf5eirz48gRdS3apkzPcv84En8dd8kQnn6SNJ8vsxRCmngYr",
  "key13": "4De4RJRoP1BXiBUCKea6DFFYEskSUcpToxsuA8vernbyV8sArjt7r52MpHZtxkpPpGcpHjzoHuYrAhj2iB81L4b8",
  "key14": "53nyxB9BKnnWEEp4SfdzS9GdEdMoSb9uBthWV8EqNGLJcUoqpNeFNd78YUChXHse9p49nHU54hT2pqngBHsHX2WS",
  "key15": "44QuiKoABdipnWtyxfxaBpwFdkxTvWofWFSGMEMyfGs5t3BQYFY8ruDEUWnarA8VUsGqs8DKCGA3nHJqasBuGMGz",
  "key16": "5HjGG9Pj9UYJG4annAdidTXYgVNt3mnSA5kK4FxJxqbeqaGvyzWFVzP19BBsy8vis62jbstMUF54XdwBsvc9zbzv",
  "key17": "44Qdx7jqVyiEx2KnBzo5BZ5WZdYWgSPjYHcLRVMDeT8tbx4yuLGiw6uhdg9NJQ2biCZEeg52ft5EKb2MeRgCzsVB",
  "key18": "PwUy38gNFkj6VEeceiaDo8qxwHhfBqiHaGuy4wdGFVhwm8pX4EiifmMVnyf35KSEL4b6WXQ4kRyusxk4mvE4wp7",
  "key19": "4d6SSPJswq17FmK8fVHL1hvqRVfMNPFZFcYjJLdnFvsd1n3ce3j4pVonAVB4rkYCw96tqrVTpMC1uXz1myxMLcY5",
  "key20": "4unndhYuTqzxtNsfBj4R8aiR56sXPPwftMAeZ9xwdvTMJAqRhwRqz6kZjYrr82nNKE2CcvBQKdsMsGyzrmJZyxtA",
  "key21": "2hJQdZaWhjS98WU1snAoD5wE7BgmbUr3vdtdFYFd6cLd92R1mbJ9vne1aSBsHookDynFqXk9Tq5WPbNhgAdBf2oU",
  "key22": "3HJ4rg8W9bsS9y251PHUmBLdSeJzTi7PqM4A8gJH1M1MPTmFZJ62AUEwgt4QNBFHMoyD657VVoHQG3tch1eE7Gax",
  "key23": "jrsKNkazAr94PhnmngDSrgXPLmhR4LPKpU4cKwgecXbRDGCLy3gztAQBVCjdAEj8K7T35LYPBRZwYAHxxc8Ugbb",
  "key24": "S3oS1YCc6WkAM8Z49wMSmMWxY1ePGREATKsRo3fNxQj5ahCaM37zd9Q3q4NT1QoZmQ9iiPJmCAo6aHA1T1My1cL",
  "key25": "3eFQikcqog9mJsCMCSpjzmZuE2at5HQfEsuRDBdf388MpHi5Xth5uCKjZERiTiHghmKDuQhqCWW8vQ6xMENfjqCx",
  "key26": "4LwuyoLUhxRwtCcEhxEsb8BbNAgSsL4HWwWoshfCndrCCU4NdPzj1g9scpsnJio8QQpseMnLncCurqRwPKZYw5iX",
  "key27": "3kArqSyEd3KjskAi5Vkr23oCzFRV6r8xxkBR57TiybG7oudVKuBeSerwPe8YqjzzxLo7oPeshn1vqNn1Fvpv8ToY"
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
