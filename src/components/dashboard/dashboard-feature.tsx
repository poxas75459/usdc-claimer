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
    "2rcj1zmjKQKwQZLC5UtbD2U5k5myMiorHRNPL6C6hrDWdAH9tL5WSMvhVCoUNyZvgKCVcyBgGDkrErWp5BXxe3pD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mH2rdMjSuQ2TcUSuZfbWM8DMQ6vYDGzJxsXYhy1fJ3grybhuXzvGnzCDYxKSkdB5jb4xUbFUWfZpUD5ar9hCLtT",
  "key1": "4KSeUsLUda6SxKaFqeJpydggsX2afWJ5QBoB9sYZxtxR5iG3tNXZviaXaW6W6DDVc5W2H1V52VAZpchZwRst8WiF",
  "key2": "QgVypzxvDDBiewZSqoxkAxxBgiFpNQgxwkQBnjdN9dK9um6hGrxS32eSAcWunTpVjY69oXc7iumTKBJuSy77dAy",
  "key3": "5SvJhjQYmo53maDYc1C8wLJkHya2pNHKgnqcgMcPcnYx8aXVj3W2ibifJw5eHXxEeqPG7zz5HWpHHKNoNss4rywG",
  "key4": "fVYid1iEgdznqQMRR826N9r7A2GBBFdKz7mytEFV9XQzvaH6sjipa7QBYwPnV9QPp8iECUcDJaLsSfSFShUpX4o",
  "key5": "63kVuzBjM4hTwbCFevubb1jyW93BHx5kXAtQqqcF22cVMjvhy4SWreFJzg2v6v4ZQLFAtJ22Y5eUy2pYkQvqTZ28",
  "key6": "33ygB8kGkkPTj4oS597GkuzPwyRjkRV3Tr9LwfFCvBPXKhcJDWWVu4nLG4EmwZy2k5kHfCFQqUp9MgYbq9kXgahs",
  "key7": "5KgzpFStUZJ5N4NBFgNxsWEf5QB9GSNxa8gGCP5HEmzW15HHfu9mL4ANa9dh9VtdF58YUn1vu2pxbVtabCdqYd4X",
  "key8": "PQjT3uzfyQm6hePY3GfjbjLgipycwoJaAjUFWMBUqzqy3DyFHCYoFPczEaCd5rJ8Q32B27EfTac21H6sS4uZVf8",
  "key9": "4RmBswttS3GE4mBwQR8jraF7oVJPJp1jD5zk9hPiwNWVzphjf61RPVcssjhXCdptn1jyYEGk7CwUdmUeD2gaaewz",
  "key10": "2Bwtf2yaUXCYZyjsit6BEuBfHdNYQDgf8YyxV9EDi3PkNBPFxpsQZqrtbDZUj1Pbczt3rMri4PncSWk3brKRB9oV",
  "key11": "3tKqMkQW3ANib52BpmuGTUwaK73xtQKRokUB6f4qqSzn5BJT8CqeJXxb1QQ4hEacHj3KJP6xJMbeqVr8LWuasEPJ",
  "key12": "3EL6tKzxt7MNVoJYSavzNfqwoxaFRup2235utqEF8SxRVJe3pMFXAwNqL3met3UtyfwZZ2xLy72fhBnANtizzs35",
  "key13": "2GEEsNFfvrHwXbsnHjo63dwMQSb73rG8fnHae9ND2TkeRiCNG7tFrgweSEabm2AhWuokqrJGrXnbhBPdwXZU2tKS",
  "key14": "4WSvNvgc2WRyYatuTrFxXUXEaPe5GU2mHNow8K3rqPme7ew6viTYFzNnXrKa4ZBJBCXgfWLbR6mYqdCtMjG5ZQQt",
  "key15": "nmAn8CMQGmczLw7N2K31Er7CWjPyNWdEnnpTZT2XZcy1hZx2emvD9PsN1DuxsgJts45aGZqv8VXr1iXrX8z8r9i",
  "key16": "4TNNUAzRstqNAfVT8GEMUWYJ6G6kvR1TrT63uCLRHiejHhNRE941AKyentGjSpGwzkWdtTAj9UM6UHNBuRCj6fVU",
  "key17": "2qwezNazyd6JPoZQwTH3SJ4VV6KJkRhvV8mqKRhF1hWNUFCqoTaeFUhj7YnDJAbh1RLgYdTjthgJaJjWhbC1SKG1",
  "key18": "5SjRscS18WEkbCuhZD5HUjkQi2Vm1CT2G62GKgBEJqqboWse8YVy4d2JpKezRL6EL7dEx7k8ifzKZT1M14LX9Jne",
  "key19": "4FcEuWgikL36covBu5vrEfxm2X1ggZ5bjs7z9m8aavE2S3r93SMv2Hd2aN2kZH5bQfCeLQ9nRfVsXsRueCK12ME7",
  "key20": "5mED4nD6jXjyhZSu4aoTww8eLYmdZk7iX6FW2YEeiCcc4o59CjmQHHaw6N7ESPAcUqb6QCV6JFbrYGDUKbo4ncGC",
  "key21": "5gX3ERmPDp8RBq28dWfyUNGawAErMKuU1KFTxPUFrFDMCU6S19MQvf6XEkPGBhopaXT5pLngGRwRTxKKUaJccx1U",
  "key22": "2Z2nB5tjNPTxcSk3dhygtqR8arg7VdBvfeRneQeexvQwRqFFwhH839sXfvhv28SWk7cUr3q9tu8nAPmTWt6wXr25",
  "key23": "32X3prsHdTLmgeJEMwH5fuZUTtms5ckGWwGxADwuy1gKiDwf32bbmk5CmQ2B4J7m9N3ykk65o2s1K8F43y3b4f9i",
  "key24": "3bykLnjrtir7qrkfb9UkrMKdMpqFASqmfTx4rqJaeDCeSj15gSSj369uxLfdrRwedkFPDQ1qPiMMuSQsA18bVrKr",
  "key25": "5CAHbXMejrhscHjkL73rhKbNDmckYB1FzNHhX5YZ4Tp4SkcG2pFjz3wjWuaJULsECLu96RZqbDKieW15XAWeeuhs",
  "key26": "587EwutTgc465orxtT5Xcgk2AjpfgAQKKt3V3RVfG6hQWq5qxGdh66mBcdfyy1BXzyRAdWKaHtmuXBZR9pUd5hbP",
  "key27": "2FGNSramfeAeP7VZAfFXQVtTZFGyUcAhZbdpeDu392Zuge6nX3wz2SquJ1oboxJ5RYSY6DZGRH6nH54G5S7vvvj9",
  "key28": "4hjYa45nnrgmai9Fn32MDyWuoV5YzTiemHFFS3wMjtajwzfsUVzrcmb2ThRsUXBjMmPxEv28Yt1QcBAgDAs2RTBR",
  "key29": "PJMJrLj9YQFDPqtdAiysxQKRWDizagHLWznyeijUYYM8XNvVdNWrom4jRHckhFqmSkf79ghUEoZ99ujbUdbx8dA",
  "key30": "5WtYgmxF2PLBc7zCcjMy9zNK9mssyX2o3pnxMSbnvmxsac4hdbRUJBZ8RMVt6kDxrBNxNkPjq3YxmCuP2RP8SbGE",
  "key31": "SUGjpnji4wS7hFwpPBssSAFVyBaNKkb6hafNqhmfSmPhRviVeQzExLnE5N11Wn3yBFFijNhKPwxPgsnthisxzHn",
  "key32": "3FFXCokEMmTL7qa2hkcHDsEL5C3yvbMmd4iJ7nW5JUap1ykr8zD9csW2CcLWK4FeS9ULbibt55cQPjmiB7Dtjqpw",
  "key33": "5irzupxc3azGv7ofuHhpi22qn4YtAKGQ3utKeLRNzuy16w9uP7igNeubt2dKeV6gxDkuRKedNiRUWqsdg45tbYav",
  "key34": "4aooQbUmaza5Lbr2PSTgbr2adqDXxeg6waJii1VyujK7gigBVAkxZB98qyg9AC8LVZWnhafiX4e24sjhXjRPsofr",
  "key35": "2iMhbvR3EiX9yvzNAYsLrpRoUQMHutpGNHvKa6pS3Kaf7uJYpg4rV2xgPwZcDPPvUpuid9gZwTEeEE2nbEybapC3",
  "key36": "53xGm7Ln1kX2UZKbiobJN16b7jB7JA2M54X2JJwAGwYsy1WNEMwN5GxXU6TgM7R1eQ9FejokpkkyiYUBhHdMoUeE"
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
