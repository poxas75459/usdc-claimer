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
    "34eGHXtmxQtWhacspnz33xff7wQSwc2ejJai2bK7Ag8uZnTA6njVVGFP7qKdNcsv5X1wyaBptexm4BJLpvvRYSTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p66hcX7U9NWtVeH79vQKFA96ukg4T3XrzVQF3SRJdejKUdKWGeg3joXU8EZdU3UqVqncuXq8TrmoW4d4exxGzcm",
  "key1": "54TvgDiP8PiUec3K51Azk2FHTpFeHzmhSxdgg9eDqN6HhwA9AAqhg5fyTtqmawf9WZgcVoK2WLknWH9186rCRnv7",
  "key2": "2zbh75qkh72Ju75pmMxdGJZmMTt9eRFJrZwSuLdjcahKFKKq2zKnmAoW2zQN3xs6vqK3XxbaRVdQnPCQxtAvreZP",
  "key3": "L8AcjT66hroS7bRDqEjbXcuTp7MwAF83Q3jBXn5BCDobNkRomfJkrmPZ1AweFdmLqdaKnJxE2uoSae7gkB7FgvA",
  "key4": "ZE5ESC3Mu7P8Y3khqTk3z53xzdwUXo37muCjRbnFMmQ4Y2EetTUK6awcS1bK7fWH6ZLTLWti5enydGZWgt7ixEN",
  "key5": "4DqYs9x8DYSRYEBY4VszwA7zdgMMcPsW6pUpHBKN4e7wkeSSHzFPs2u31aieW12cEZTNxKfZrdf8ysYNRbL13cPC",
  "key6": "4Tw7V9yLejpzwneWChxbNviKfBaVRASpdED5jVBAZam48ra1aAatFsgG2mxxbo7R4KyfBiWhqEEPvBY2e6thBx82",
  "key7": "De8o3yuvsNJeroCX55TqU99eAmhCgtYjEmAQhZXzXGQJgUAENokMzk4tqvSjDeDaFid2PjJPpjHCCbkSMo1rZn6",
  "key8": "2mpwqrQ535mFXHqvrsUfrFySvTK5bskxP4DUobGy49qm1kJLMwtAj4TgYSq2uvDFKJvr1DFEZ3sTNdTJ94kpVtvf",
  "key9": "5UGfDdwNzSQDdbpBcQkh9D3Q9gRyggHkrnzvAXbfLjLMgH8HzLgJae7oUGRxDvmeJSs9QixyiymeX3e8CWTQ2MDu",
  "key10": "39QGmUwkNKgCzcwfDxcdkg81p8wA5hxTcrXy2SdVCvGFXN9H7VWDKySd3m7175H7JCuwa9etd53zPdJbQpssirAH",
  "key11": "2XnpW4PgMiPiztU3hkpoxVd3EdpYMoEwUUaqGGmtjy7wXeaGyVUzw2jGocXpMDkR7CZS8G2QgXivaQR3PurBDMP7",
  "key12": "4oTBEzfzFgYJSrobAejYFu9bQuhZg8kGP5oWVDkPi9WGrokcZUw4KshuHZhoxvPTE8WP3W4Qm87g3zrkTFbskGzm",
  "key13": "5ptzazF3Yt5BdF9FsuMHkznFimGAtaVDAamF1ssHSftYUz8aLYcykCQTnytZL16Q3sDZQYG5gu8oEEkUFbDbUMj4",
  "key14": "32UZChAYfRDxGzFyfmzEyFv1vrZSPpkDymYzk9JsgjJ8Qy621JSSoooM28skSYzWTcdwVWqn2iUw1qphakpfTawB",
  "key15": "3XKRXkS18HVtpWs75i3E6PzkM5bfHsf667ZohWSB3Miv8XG96JYYLProv9tJs5nsJybuj9aB8HYa8GZGySz1G7Jt",
  "key16": "3pxNDumdXKvFZuTTrhAZ7qbqjv87DSCRtsL6cnUouGCHfYT7FR52xT5Tuf6kAa5fxCAy1JbZY55NAUJ47gP2hSdD",
  "key17": "5G8MFgNoSDTKKSXTEnp9pKsLDxRo6c9dHBXEEhcKfbKqZHtwkFvUpZXymsB3Tr4UyjnS3T4in3iQcybqafzbzFfR",
  "key18": "47Rdw9awCv4sjaqv6KF3A5smb77QMvzgcKyyLv4Z8Ceb9ztdeANFwzQaWF4W13Fk5bNrRqsCqdxv4h3QzPpt33Mn",
  "key19": "RhDxoGf2qmhqEntpcVRc57YAvomdXqq44GPG3iyo3ArkwDHxmrGj7QGscXEKMhz2eQeAWnz9qWovkrJvUTUeNAh",
  "key20": "47jZrzpyAzszrNu8xkSZ2sbezKet2TFAnJDqgcGBJPL3FiM53C8g7mNzMtr12K4aziPeT2hwHvQxzuTy1GY4MRdR",
  "key21": "2LszLj56yVNYb5T4qGEmzc12q2s6E7WJpaUe2ZX7aykBcmGSwm7274YXWX95kZBDrA4QAxoaeVSXeDQhbgZdvSom",
  "key22": "31QaFXL6nW82B58Vj98mrYrfBprQvkVX4ESfvZLQrwuPWbLLfB1KHfewQ6SABkx7dUcm3bTutBd8wuPjcX5v1t7K",
  "key23": "4bwSzruwkuJu1K5BS7fGNsKC1YKJFvCcFa4EXgawB3k3aX8CPhDmHV43amaFGsnyzvDP6uHJMefvAvxFTrhKW6kn",
  "key24": "3qBY5a7nw1Hs94Dm3w28GQTeWtVUziwNMbFrwZUdbuB14S8v5ox3FMWxpUepjBzts6xN2MEDvBLP9jVRkPLhbAhn",
  "key25": "3VwcumtLJWE6PoC7VCRBSmdNvfYd7Y2gecf5Ksbo1auvCySSastNYxSk2a1RL2LmXY5AjwoLmb9Y5S9owmPp41aJ",
  "key26": "4KgZak25HvPQapKY5jTyVK1d5C7pZ42onBcy7kWjRXsRbAAFCVZzhGqAt6qShiSPJrQGYzuj9ELypB1N6yJLjjKF",
  "key27": "3CEDKpa9TWbum1F526DLE3LcKkPwgQzQea46itDQ9Tw8hQjDL8i6H3KKKemwswhuuMDLQUtH2f9isuGegkyGt2xi",
  "key28": "26ueEdzcTBn6bcBHixuzEq9EfUq3y7cyUK1Y79nk2trSUCyN4se473T7T9ev1QqrcYKasqka88vXBEjwMCqzZdYx",
  "key29": "5QtWZWp2HMKwjGk3uEsEeocrDNhTZ2vjsmNkVnQATtnPnDgNqgjfyUDJwjbLn3RyYiUPi42bpGGhotC9wCrX3f6o",
  "key30": "GANSbJZWaxQhVM2vGo7jTzqVQegAgZC3nedveyPVs2TEgUQadxxRqeqLE9peEAE8NMKweVxKWdfbXjeBinLrgMP",
  "key31": "dbtVNHrXXYjwwthrFgRYJuMHXS11TjXPrhH8uzz7CUyJTg4pNFXpnZNjug9v5ryrBzgoAyfb6naexJyP9TtamSZ",
  "key32": "62LDhQF5PP3iWtJ1J2rQ16mvgPZYFsubhLjHLLMFQP5r5QRFQVVKPtTjxberFV57MHPyvchK6z6cBDJPUG6FQsMU",
  "key33": "cRdFhsReQ684kjhmvU9GsTEJAMCKvt1QZgKFXhprY9TMYrdqWPiibMGe4XQtTt5AZK9Hxvo4GSiMkNSvjYJkV5C",
  "key34": "2MuwNCR7qWzmsBGXcwQ6ssaq25j1z6e2wuc9tEoMtcu1Nbh4cfTWoZwc8zRMJnVYbL8hGuuJWCXqbgouRBz5yBcT",
  "key35": "44QzkmrbhPfvpTcRmu4cyHRdPUKy58sJXe9CBQpY3HA7SiWvyfdGLvZpocYFKcbRe9M2MNcex2ttvB8riCqDNro7",
  "key36": "5dNJySEWRArg2cmY4xAijn7nNkdLXvDGG9krk5cUiJituVo4Ecz1axyzZB7VcqdavPDzsKip2AK3J36XupgpnjDm",
  "key37": "3qizjHW1W9HkEWLdCWPxmA8nkepvnVB6RTF7HuRVTJEzoyaMKSS47Fom6qjRVYfKwwFN9c84AzrqSy6MVeph4jYt",
  "key38": "5p8CmPYCs9De61y7YTV6ndNmK9DXZdHhRjQfDGjuJrRZEsPWf3mqUpb3Qwx3H9AmczYGSqAoHfCuGiePoQGi97K2",
  "key39": "58BFf7zvcJsZP66PqBMuHPmPWe4DPBf9m5hibr3Kk5H9rcfevXCZbgtwa3eQGDaiGcYqLC25JzNgPSx8SsXMypgp",
  "key40": "3AFBHxixUXVFSRehzeoTZKKsU1kfQ7ntkhKNHfasiL2jGWqK5FK7Qa2GGZwHd14MxQNVk4JzFYf4NFB6gA4XPhFm",
  "key41": "b6zBKezJZXtb7EQM4EV2jrLWVYM1zob1gzCV16v1EcKbu7gwNJmgtauWUgcWLeC66XSNUK1jtbVq8VEUEE7ken6",
  "key42": "KFUgeh2ws8bdynXL95PxUDyzxR6odDZCdHojm69CeQoyFwAvwRTK9LtLfZY2b7NCPqjxdaB938bDRPge31gwLu8",
  "key43": "S3wXzeswJURseQQvLxuF89UJWniJkcPtvgPt39VQP8RLmgmKhbi5YzUso4NUWYJ6RrTBVmH36B6p5bYPRimYMQG",
  "key44": "5F5UGphSetyb3N8GTdKSKudb9kxEcw34txJRapFEc1zJz9Tm1KVsZ9jh4fmuacNkPpQosxD1wUQ61AK4tXfaYT5p",
  "key45": "R5Sdpxyw7byG8CRJnjBpgaVbZyaUeGAJqNcmJ48nK4Qc6vrCCNjYMn4gBbrbK9Q9t7UJbbjCx8nEtPe5krPntbv",
  "key46": "4f36vVCeQU8PnsEwb2YAiQUJxfboF5biSv4BiiBfmHFC39eugkwmiLBx1mbL5kW96FAkMAMBX2kJmnXyusVezQcC",
  "key47": "476fg2ooR96vbtiSBJixZGArRvdHwtonpqimS4ziu9uLeSUhAsD9kcLfPM3ncW5wdPcEwmZoRS7RhLhQXBucLojn",
  "key48": "yCm8VXadpNCizC6PAjLYau7QzUvyEs6wBmk8jM2BCRm8pkv31qnST8p2fKZMhVP4gVGuB91wbbJwCEKNs2NXk9f"
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
