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
    "9YikSwTq7VFVDoWNsKqEgXHUnrc1cKpia6o3Mivgjt6kwb528hyd8nXeEigS1hzgSx9me6nRhmdUC3S1tqq8wb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U8BdHGZ29TwUrPVEN6wkjbJsPk49zgXhTWPsCmjasqmKrfPrLchcTFo5B6MMcmuYmstqFgPfT47CUiG5PtaM71d",
  "key1": "B3rUn8vXyQKiXiPHYRtykMLUmve5VuXQYN1Jbr4ZmV7XyvLLKKkLjoRnBFTtffDTNpaXqBAEDs4eHLqtFrGqLjC",
  "key2": "4XV28HWSxzwSM5hTcDLf6LrLY9rBQqNB3W7FrqhLaZ7Seoqjtb3TiSQFf67CwS1VD5tzcTwX4TwS1Pp7PapTxWUr",
  "key3": "5GK28nKGACraMeLx79M6oNc81KaaUqmg1CUEVMQWiaPi9t2y4hCcN8CyVRbgANfkK6MBqXudqXNn1UYTxieKxLXZ",
  "key4": "2oMN1XTPpuTwuvbQvDQ5WmLN81K4HaooRDhGjvAQJJRUHsG1Dw8M67oJEsx4cdpNruJCuwjz5Kd3y66sBY3YnYz1",
  "key5": "3PXnwxgrZFngXWWTXq6twVPP9tctFtLRVH34Xnj3qtLMNXj1FidhKazr1agpwtaE5jACdRfpQp4K6gzVY2wvF6Wu",
  "key6": "b4rtw8BgiDRqdehHMvUnkV2NzVvLNCGDwfDhUuDSwaAMcbkqHWGqcJ8jUMQSrqUKtqZcJMvNFJzB2SU4aGoCiKx",
  "key7": "3B8n56r1W9AJgbRd8h75pdQwnuKqV7NvbvLxatUKYXvAEWL3uehKWKmNQJruvG4voPPT58HnBynxrF4MUyzvCwwJ",
  "key8": "4ETpSGxEjJdapP9JcdK6ZvbzAm3bAeaWfDH5hgzdCHaVbbgJ7Dk2PG3qJQM9YX2Tu1insikvZPmxKwQMiTdE4cZC",
  "key9": "2jyEyP4dRZYHQNK17h4eEkCnbnEbNy3vmLSNyXJPorHJ8iuPBwqs78a5SU9iK2ADCrAgCdFXjsT6bWxmaBtgmUsR",
  "key10": "5sDGLwr94FMrtJhzfncTqLmvu3dEefWGbUWoaG7vUyXMeFxaRKSGQi9vdNq869hc4NjFftdwq9LCoqQTD9Y5yB8d",
  "key11": "3irgwpv27VDQUUYyv9c66tBkMHRVSVPVF4QvJH3qoWWRg629iSwacRp6hhyaKkRumPvZrPoM34cy3d3PwGXbPs4K",
  "key12": "8GeFMUqA6KSW3XWSzMCWpGJ9rj8hQ6cUGWauBSa4JFiE9AWYPL7xxsT3xwGGrTtL6JxPMSzYsmE2vVatERcfmhy",
  "key13": "2efyzyCkTcjEhAyzzhgrj77r43SRoVP2Q4qLNgp7bfW4b6i5E7dM4jDWopHqvQECcLxdqz9XYZgGtB24Es4FS5RJ",
  "key14": "2ayvHU52fJVhftAaPXdZQgFGYjgzTiHTGiJjrZtDvhnUf1jvxx2BxDpev6p8jHQPZJ7wS93aeXZxQNRFmXdErTHt",
  "key15": "5CzMBTrKqvvQB8ozXCgD9oNH7nVZDbuepoF95xUiGpRT6rkNkb4zFrA5UcSMw8UxydmjU3oTbG7fM2gBRwNHRUpt",
  "key16": "2qYBMtymzfjmg3g3QBMxT39ZTYnYPznb5VDuDJsPQtiKuKSnteXExSEJz5utBSd7T7HnLVkewWG7UBBWRkzFYcau",
  "key17": "2CqfHjW8uyDVa3tgxM4eSXSj1x7p4dGVsoWVoC3fFndtLnBai3nYeB8R9WW7Sqy6BiDjCQfGKpzQHAwrLTTAPVZh",
  "key18": "2YULUPm4WF2F5SFrt25pohfWBQ3E1pFmE1SJ9PgT85iHwrB2HoT2wYiRHPCyrU5JY1QY6AXfeF4tJ4pM1oQUWhE1",
  "key19": "5BZ7RceT1WKmphbai3s1tdmFhsCqSH3x1orNr5vTQaKmAJ8A8u7Cb11JLqvMXcvKCrPNs9fGK3P7nkzGcm9ho7n7",
  "key20": "2okBeT7LzZMTbeVrRr7mAK5FNDY4ppWrcQXkysE8MSB86Q56PaWXuVF95Ah14ckmrFGNaAXVDs9UYDcKXA1tnVgo",
  "key21": "25zwo7GHidoJuDLQ5952yBQgYGnBrY9nH93Prq3mEEyE5WinuNEkpwVEhEfbuSFYx6e3rvrXZ7YQJf9jC9n6FBQM",
  "key22": "4EbQTmdpd4YscUXpwFkCiVukasbqQmD4TNa8tWFbXkVNEJf92JZDPf1agiHyjS9rGGfi7WUhV78mtDnuNWw9BSSp",
  "key23": "4CkGNcDvsoJcXEDxzdT8E5kYk4thqZfhS7YDjyGQigzeeEEz5t3vz4gWbXoqxm7Fx2pQaT6pPhbmq9cCNf5JBMq2",
  "key24": "4J64whqeA2MAUvLB1HfsCcCDqK47wbEL7VRCz6GP14wKkJ5KrPtf4Hhe535jFdyaRtVbsmRMiofsZpmUzLcUwSHQ",
  "key25": "sxzNbHDUfbQQyL9hRUvEewkp3FWNi5Y5GZ3jG3WhUbPdGPn92YCkXtVyw8HZFM3rYnhvHRpBAofMN2T3YXWCtAW",
  "key26": "47wtorVRJPUv1BL9fR6omTdpUKMVsRr8g1bYuew5qjFNEeDa7nWjg5hHn9WSmeir2iXKD3ETFDMuhTfH4y5SuQoT",
  "key27": "3gESARsuyqzef8Jx1q9zdkDeBcR6ePaApC5YybLzR3f1qVBKq7AAH26JmssmMnintvkC4VBFfatV4dJiLPaBLMZB",
  "key28": "5cL7PFJjX4sdQ7HRxWCpgLtY6u86pR5mZqdEyRaiQBCHAg32oyi3MW92cXtNC6EehWN6ahe7EJ5ja4PAeZMBJjKn",
  "key29": "2rvYU1LbnW82H5sKwVLzQmwPuoXaiNVzArW53Vyuk7uyNLXkpVSmuo7Dij161EBebXtsEZAQAJpMGtrdAMNCrySW",
  "key30": "3w4pKd1XZTaVzmdhssMmCeNffwuudBJKY4Lns8FuMvk5YG9pr6fX61A6av9PQVwXMxFzeBuyHiYSav53mQngjXbr"
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
