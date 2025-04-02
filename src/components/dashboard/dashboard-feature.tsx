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
    "3nyVXv7dUjE3zWBxxj4LXaitLtML4pAw9Dc1wG2gQoaYSdig2bVAmo7UzW5zmMkk1yDAVK1yva7Nkp8x9ENEAdwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28NLT6iiShJJemihyk1W5Gk53ZV5EpPLm1mrCcyFLzDjNGGHoCM3pfC7FxMnDiLDLjxxo2dB8dbMnpn6wKDLQc8A",
  "key1": "2kfHPSfD7XWT4ru1Ztu2nhfbs6KXnbA65JxWBbGSCaewq1vJyUwQkFpPcZohh3h9NpR8ak4WATjuDVg1pC33kYfh",
  "key2": "3x6LMscF7QGDvgg4UbB27s5TtGo927jghqqy1va5LmhatSkVCsVfzXSQBduaxo7JyREFFpf6NXSZQZ64feZKWZk8",
  "key3": "AWbv5hMNK5kdJU5HpbDd36n84fQyqsM4RuSyh7dhFk9QqwAxsoXKTB7myxcJod7pbeKtNjBDnNYeJ5G1HeULFJP",
  "key4": "2xsbRfHKLd3EWuURTE6rTctmvUJRZugLT8zRqYuJoKEGgdrHSBiepoDuWHDRZiQfNzrD86t3VJZ2NHKVmsGQvqST",
  "key5": "4dJppH1QUmF8WJzotvXR2pUpDPj6yXPeY6qhdBSmgxBbPK4A9DFJP9xvzjBJEmb6rq5RCUAA72p6coSt4enu8FDy",
  "key6": "5aajtLZ5mBKUhzZN5u7gJf9XMr8JQ7mmQzeQfQQCxWWGCkCzNx5WVKYg33WWY9We67DZUBfMBje4jKkgef6vwQf5",
  "key7": "mKStvku9wiFWQSSiRRbGHDVhYkykPjky2BC9kzJLcKmHurA6ExqmMHqicCNZxbwoQTUiC8UgpGFNFvQXV8fbX3S",
  "key8": "3T2qwPMPNQWwd9YQwHEZgyVQZQ6c4u2HPX9AKafJtvz5C4SVXy6Af9SPnrWMGuQcN69tzL8tZUm8D8JyPAkTN8sG",
  "key9": "3hvb6kwESPH4SXeMYRsm2Y7bhrgXQ3GQZ7F3xxwFrP91sYX9YQm4DMimZxTgVwhmkybB5Lg6pAJurhscSav9KpLm",
  "key10": "3urMoVyCkbNiSCXetCyJU7TiLGwqRtCMnF6V9F5wXVch5a6YycMzctpPe8uPyJFnCZSuLugaJXZ1PxrYjFQgaKsV",
  "key11": "i7QrWJYs7eYgLGPGZVjT9TZDWkVr23WxKDN1wSZuMRwCo5vFPY3MvsyFRBJxjQAytTrtumAqWZCnnyGpx2eZZHv",
  "key12": "MFtwVCDMEe1ea3GWfwdUgUfy4J3aiaRg6eKxWwpnWm47enSakRepvobRLfBvjRpQ9f4GKbcp7qEJkLvEjnoFjJ6",
  "key13": "3PuG5QT3VnEtjzurVaUMnn4gZfJFjW3MwJzxjzn843obdA68KZcDtS3ScnYg4mcFyZ6LfGNZyXDLEt5acruiiLHa",
  "key14": "3hA1UGsjYzKcPtsaWPHkeYkuyRcJjRJKz2DJUao8xrm3uZ3AjR6gDUE8wUYUPDDy3uKbxj1uZ8mxSabj3GcuJptC",
  "key15": "35Gj6g66gVddZudny6AxNFkDz5VgV4cCKGkFauKcN5m7QQc4ntYyR4yFbRSjDyWoH51CUqTutG3zVjKtE316oWVk",
  "key16": "DxymgbKPemo4Mi625xfwoCLwUPb7C5SPtCtAkNaFsZryBf5Gc7u2ockyDXiUf7yrveqzCm135jTdiBzUv32bDwf",
  "key17": "3Ta7z7cQPW4dwwmhRXMauqXGSD1vcF3wRLdQZWgDpD1QRwotqv7A9ftoMMCPrDToQMNQHPeD77Bi7yn31KFrRLWW",
  "key18": "2FTs6omLbiTyGg4HzPkKCrv3pEJUhNBbyQp9b5KqEfUJnpLxEnRA7TwfvRkNxCWQjV4Fgvw2ZEwCFFtLN5ae4aBP",
  "key19": "4keBrxRojoCHpR9ipU9PDHiETGMHP63JBtSZZeKx1nkncUTGhwpxdKfUdpCLPzW44HovpSKNfSARoTGtXtNVfHMr",
  "key20": "2UtHvog1jKAbTuTdyxMb6M8QNDDBzFTQC5omFoaPztXXkxKnf6ifjXzrbe1YMo7quhZCrXXrstsszHbwCc34gYMm",
  "key21": "35tV3DZL64Atcjvocfqf3ANtfjSioiWjDDPkCA1xMobnDJMruZJBDTGoGSByyvJKoSUNqXUksWo9pYCeMTddx5CF",
  "key22": "2Nuqa6P9JJ8Tdv9SRtnrmyH1BTkXPCUnW21wdLwuhetZuTVMhf2SmCLtVujs6W9kxymeyLit73gVm3qJceKc1o1F",
  "key23": "Z8BF8wUq5La5nf7eKyPFqswnfjnWcFQ3N6qoUwqnXUPiUicMz2vnjaFx2CbNaCNmh5KtPjY7pFYi4kHxhzpW8Xt",
  "key24": "3xPsfWdwjSMNw2FdeUsBPnQn8DdFiV4vpTJWKnzZLhgFwKir7LbQ6JtYewT3KkJY4GvqMEdLEuoQ4ypQ4Eia1yoQ",
  "key25": "TecrHcaKDr5xB2GJ28i6J9S3HKCQN9qmWmhDNVr9Y4d6bcf98D2wvXaULJa4DokdEx2THfkCKgoGaDuwsQgPign",
  "key26": "Zar62ZKumftdTPVSK9aVXu1jpUGRf4P4cb1DRdxATzNAB12uGCsiQQHYsAxpCdBQA3XnYgoSuDBpSf3Ci6wENLL",
  "key27": "taUFVoBnmG77N2qA4JiPLSXjXca1pJ2fsJQhyPmZ6oHdaq38Cys9h5BfiTuodCgctRgzfJPivY8VZpQDw1yxCsg"
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
