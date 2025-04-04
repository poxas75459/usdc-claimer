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
    "41RbuJ6jFKdr8pqAtun5x2hx8LgX6EkcxDwDVHM49XfUKkxHwh29x6gV7Ymd5hRgTuHhmEi299NKUmdjisdpDq1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VaoCPBC2Hhdm8GqM6CBpSYv2xdQHhr5YjQub52AvZwRkaQQSaojB9v2T5geZ3nV4K77nL2pjC4mZSr59niZ8xnu",
  "key1": "47CprwmFc3y5J9Gqc29sQUf8oSkBoKwzQDCPzj1rfdJ6FCuhToiNjPmxUE5gbNrMTsXknCJpQDjB6Y5a3i5mpw83",
  "key2": "3DsVsAzConFDU6a4ZD4ZTdahLkZYiE7C5AnT3xQYadTKM6YrU2UTFdZfGDBvtH9uh5nVNbQWrMwUG7SCkJCbnLWY",
  "key3": "2vUmnKWENuLqSoeDYJh7WJ7FKUicSY2pKWsYyN5pCiipbkdoRECMzmrL6WFKgs74jCjTEQ7fyrN9KARLRDB2CUBM",
  "key4": "5c4PQHix36Aa9RC5NXZzyT224uCn2nc3VAjyjDRr5AxszKBfTudzmhvs2RaguCoQdPvTXF1cnVAETPPKS2Q76vui",
  "key5": "TpfYuE84R2Um5DpuZTnaMU6dRxryqfZyh1aFtLCEmXDmCXDb7nEnNaT9J7K9sVZf1bKXDUdYQdZLTe54rKoWXHq",
  "key6": "5gguwpH1vhdSD8qE6d2LQX7G2GbPdxkd6Wqn3atJBLJVk92ddAtZ7Hfhrcgzvtk1QkVwx59fxfAtbvnY4gbqDH86",
  "key7": "54sbNidJHdr5oEsftWE5ehbZD3Ys9U6PYSTPvTpCBxi5N6aJ8MaToatW4hYFXbxh1Q51q9MAb4tPF94wvgEMLwAH",
  "key8": "5RzZHRDC1gbvG8XZhkuWaeGvocsZ8g3yxV5aso27WDoC4kPDc5aCdnzBosybL9JFtuwfXwDiLNUAjpSu1cN1awoQ",
  "key9": "4PFYoctUZSajoiG6ZUdKKDApaZVs92i8jRu3VhQhW5HiHADbVTGnyQQvXsn2B8KUHB44H9Xq3ZMQBtL3smP1ELSZ",
  "key10": "5XWcejNx5kGKGvHD28UCLxAjt4DFaSatHpxFHjksVDfVp4Hefikxp3gZkov8BeoCgTaNVizaJLHcGnmkJpyQeitj",
  "key11": "4nPD7STioartwuwyechLS3yh8scBuQDW6SxFFhCL3v8oSRkRsZujVrDNyXqtRPhsskBybgJ2hRRzJu1kjWjVMtJL",
  "key12": "bnRep2rwhnWPyqQ7xnSRDnjPM7RdQLpdnpinGCyfBcb9wyKxdbPKdy4ZQKjkJGk8BJpupWAjcvYXcYeymXxLV21",
  "key13": "CD8soXHkhzphHE6kvW1NRguHe6GQcPAFuDgWAszQ36zEcfWBFvBdnxqX85QRHCpRV3DzZQJwXaV8B1ojBdicQ5u",
  "key14": "4sCkU38XdQvfJnGE9p3QKDLVFJ8g5ngvfUe3UVTyXUzG3jbWitmQV9TWpUtHqV6RvKCQigELwhKQU6tFjcZGLFkS",
  "key15": "5mhXfj9CTr3Gn835rWomRRuHDXZJSi1jbmPz3NaK77ydpkDd4N9pYgBwEFZzsGj6Ksv9SywcCP6KTVsDs785ky3i",
  "key16": "2PavqubgK5KNU1unJUJVe5ye1z72eSBCQE9rVGe9LszJwtcEdQ3N9DVPU9zAvbWFicj77NyuQC1euGGeTaPemzuJ",
  "key17": "5ncs7rEJarpJsqVEnoQb9gH4Z2yNScD7oLNYJb5GaUMJ5sk1qw1fjBeQGmVGDoZ6hYuGjhyJwrYC9ZZi3Q38kGFY",
  "key18": "FN12hReCuUtcaQW955MaywDMzQxc7wBDBmKdRmLbaFrdZeWv1zh2MVLHZLELe1JMhqJX1y3Uvhfmcruinx2FktQ",
  "key19": "3Z3UDKSPXAn8JA8bkoHGiKknt5keYhB6KUHz1hGDnGwQbdAhbcbFGR9Uhhdfq5XL78mLRPE6uzLtTAupwyQ2bf9d",
  "key20": "4oaHX1rzJLyBSHYhYZVmk3GF7XP4ZPkFep4GLbQ9ecQFXigBr7UqJiDKQyW2KiAdmAYL1DbBZZZkSbVEDACaT6vj",
  "key21": "BiY9jE1RcdUegwSh58dW9Kj3UJCwfVYAV9WQnSKbGrTQ2Jskszbgv5yfXupfUs213LvDv9fhM7GqQjrBxR51wXy",
  "key22": "3pEHqanhC1fHKW4SrGPtxVwsYcYiNhAiwK3tdQceyR3Y6Y8L19JMD69NfAFtkUPosDAe1U61yHmX3LG8JsY8EArW",
  "key23": "3LmS3jLM9Yuhgv7S9VQfyDvjFQSQCdwcRzs7ViX7bsBZnDvudSYGZFF6ytS8pKPuBzxLn1t3VCDAGHu25GBhgDV2",
  "key24": "4TjZLMu2pLbP3WX5PgUU8H8gJF3zWk5CBvPd96f5qjVFGVniYinMLk4iJ3jt2Lx859bKX3szwvMouCvifEnkBQgN",
  "key25": "3ZwrpE2fnvLSG9eq5bDF54saiQ32TtJpQirSN2kLMoHyZSekMcLRk9BMmNnY6c5rGNaP98k4GXoyLHnbiPkheQRB",
  "key26": "4uM91Mowj4pUiGVZbzpwqVs7xcDVE5kjTNFwKBjhopFNutFqydsnczzycRDTGqj3xSkQH7EUXwFV2TdwxNFcrkbb",
  "key27": "53fYUuaFQXu2VQAmcNkG4ALxEkoxisxpqgvWvWkKiAeYk85ws4Btfrr3A1gqVaS6Z1anDfGHwGCjsb5YyAB5RwUV",
  "key28": "2WXQYacECxAftC4MpzSy75EhgdWNx6svQWHEAZBUSPBrmV5CwxCVnEbK1ExeefPCRaitsuYDgdxRgwp5UrfsCfSf",
  "key29": "2KiYXjGaRSjzBf9pbwQwgeWoucGUBZAbPnboNYM4XL2FwYDhKXRMovxYuAZnYJTMU3vinobJuu1qKaJNtXEyRp9w",
  "key30": "3MSqcxFBP2aK3wLkHDDuBtqVTnDD1wZQy1pF5PkKDTDkKc8PCKFNQdrbsQeFXaNKyqgBUoEiYyrP8a1YBBi9R6aN",
  "key31": "2EsRMPfdv41cx1hKNeehqj2n5SDmkBhzZg1QbU6ftbMPcnTB7g2sph1UMamY3ZamtH8p1q4SiZ29Cx3tg9RzpSeH",
  "key32": "4GMqnzCvLAtprQkmFZE7PXXCVWsbBe3nGMZ8mtZrJH522MkwBWA9gKK8aASySCq4ogrwTxJnNkY1snga4KezN67j",
  "key33": "BymPjnb6FyPUAuxsm6UwoS3EkQG6cXiXJPADzWE9kw7LR4D2WzGrmGYeWUcFyCPMF8RNHvj4QkkrUF3iCo4kC4u",
  "key34": "45GpkqaHQGPgxvPv1UvCmYYgLtfsLQ4rFxfYkZDUnjNeiX5nNAH7bLniXZFJVXtvS7dCUpSJLffeDSJzwGgursZM",
  "key35": "3gtxR1drfnpDEBuNFRh8QG5mXi3BJkzRufALZAeNA38GxYhdwkH4WuEhfUNrwyFnjS1bJpzyeUeWytKziF2THrGz",
  "key36": "2kKX5sgBYxhMqfy4nZHzjnFBVVXyfPFYNCCsAHUVkk6eRiQdbUeYNZmYfssEjoj6DznMn8MUwUg3Q5oQ7cafHEzm",
  "key37": "aSS4xij1Q3KwoE9cqVfCYLi6QuhCWvfyqfRkEarTgC9vL3YbPjfxTpvaiXdkfKqSu689u5cYo3T9tnpkQSpm2F9",
  "key38": "8sVRdt25ccejSCKUajJMNHNQULXDm7QtN4iw1vVGS7g8VkoQWyiHFffqqpXNUUMji81AERd2X4kHwVJCgxm9eCk",
  "key39": "2Qv9rUiVei5SZcNiUmFfveCPP5b6UzPxVYyioVfmJCRSJXcRHS5SQiFQMic85CJ2R9RS7upLEdUsvLjFLmLnnL4y",
  "key40": "bQtC9wxeZSjgiEDVHyV8a1EiBPXmBunwnyeVvcY6cWdgeJ8ZfY7aeBxNuEbXzn9BAnYHBwbQhCDddHi7uvx7xPy",
  "key41": "JopoD2f1Zdoygh8QuAuPZHQSSnVZHo1fZg9ZQJD9EAcXWFz29ax91m5zxT149n729WYqo5UG1PwRDqLv84B3Udu",
  "key42": "2cDhCPqhZKybTdFL5nD3kVNyxGAxzUEyNVyPUfAofcHpaRxeeVQMiPXRcWFRcNUaH9CSr6H2mUiLXoqDXDzfKeBh",
  "key43": "5gNeZzMFwQmbDdPbnqkT1BNcaSTAAquATpgiDefo24Rpghdw9rv7ChPayzyhPM9ZdPTH3DXbWoTf4u1jNFLJcMzF",
  "key44": "2VqEGedi1kU4q1wmEYnGY24J4DVY633GuLRzHjqFSBm4osBofgLB5zpWtoFTHVqqk7y74cDvmMKARnmsUemPJfK8",
  "key45": "2dFekD26okPP4ytqa5PjtgJfNhVfowSwLJWBKqSzRdcoSepF13W2MQsiZurwTGb55FsbEzSnhLEwpLz2wngRxhe5",
  "key46": "3cnjcXSVdHQbE5LjC5MGTpKUbVPNv7GEYfmTsjAfpm3wqtidMe7or7bwiHCYZzmE3zckPQTPLWa7pJHJAVtEmGMV",
  "key47": "39xUNoKgSUnR7CAjaBXn6ffkhkfiSuQqtfHuA8KTE9mdQez546TUD68GMCwyDpBnrkZuH8oXPjJCCesbEkWbGM9R"
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
