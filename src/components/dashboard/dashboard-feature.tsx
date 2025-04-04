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
    "4cEcfmwkJsb63RAg9hMxgH64fLuAb7Vps9o2FfvvpmbX7M5nthoPRE2GSqxwBnMJLjFYmt1D1W9EVXLhH44beNn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gr6js2MPG3bKffEpniV1pNy3JrCvLfMN12gAumNh2FbQdMHKSxGUMZuoJrRVo6nozAmTXByvLNxw33HS6fh6g3o",
  "key1": "2j6t61yVy2eSkCh7KmtGwXvurF8yG7cZzFGME1vDM4dBRYGUkNG7fH5Mg2PcKxVcoGs9XwdTHKLPYA8oa9qUwrZg",
  "key2": "4UpiTAYyPSGfuKW2wUfZiDjz8nLnMrbimhBPjBecRJwNYqgBsULrdvRuGBvu5P7GpqPKNynyArPyPzLft2PFNb9A",
  "key3": "2Y4EaeZd9pyiqBvwVoMdCfkUp2mzfV9zzXSBAEaNt3mbehszZybuzD2cQjsMwb8c3qXmRWMq1NA3i1NYwqhrrrq5",
  "key4": "5LCPeNeKKBw5SyvBhiYF2H2KAoyoGJtisMxE1BPPNYyWGdUSHeLhCX1BJmayCJ4ikrypv6VqAbYXhKNyLjtN6TjN",
  "key5": "2eJ3k6M16J17pfVLP73vd7SYYbHMUmKJ8eLs5zhttMHYE5V6QZTgTjaXJyGaWRTpQ5A9DYMJRk4fLmczU7pnmNun",
  "key6": "2KYt65v6832QSzxR2ZkpRvwnpAhjJczdCRwZsetgFcZkVX9u134HnNazEbhZ5dMkwLBY8e85iidQV5Lks4qRjGKD",
  "key7": "4AAmiihPDvBPGuEm7dWJ8WrqQcBumjxY21As2rrD1vXjuJdUZUsJ9z4oURwmtbJS8oNBA8gHBTjZ8z7ZqgtGoCAR",
  "key8": "61bXBcD3XVXv9xhvgZiyc1KnTeNhrm2euRFmCpRPyo9CCAD96uqWVjaZzroTzXmmqg73UEtTbPb6XqJScENNrYQV",
  "key9": "3yxangWgvYzh3sgciuoyyecvF5RxNSmqLvZ3hzENuiizLTWSfHZAxbcfQeNiM4fD2YfngXtXD6Zo6LNT1S39hhGM",
  "key10": "4FvVUhE1r8CnBy9ufiZ8CQvo4X4SnErRAPmmm3FHa5WxTvwx4GN9Y1iBuRsCdjDpu19pGN2WAFVuggFSZvqNiEtL",
  "key11": "3TpiA6xUtXcKwA5RJFbfXjLd8eMLk6UjbJmujYTbmEDFmvRLZ1Uk8ZhM7MBbEjKqPLeyGWMcdM1FY1B6bHMrVTTU",
  "key12": "3KJsiKvzQa79qXEdjZFRFUnskXrJVvC39ie2EGvPkcL4oJEEbvQy1Z5CDyN2XM6jW5j8Hevq18MJaZRbdhQrQYuk",
  "key13": "NNdPaLB2j9MzhREadGQyT45cf2vQC6wBNyuS5iisP1FLam8yut5E5dEDyk2EaaidyVjw8zF3ZVuW5i1t5JRZ7Hj",
  "key14": "58UM2CRYiaquXx9EcWv6DWbaN1TFxcypVxLb8yMRMfswGSoF6mMX6TbF3TgHWX8yDPfxQYBU9bgrVG7WanCPJQ5R",
  "key15": "2ASApfsuVnCunGzRUBJxeRjKixTsoMqta6c6QXDVuGaZbDNCtsMFXbydXyQjUQ9baDPEg6YnKHkgDWzoHW4FwdUL",
  "key16": "2vxGEGpKE3QyaugM1LHZsYWsomvQxvQwdZvXrALBnR584W6Q61GCPkuieuZRCwmF1HKHzp2sUZBEuZeh9PM1pRtX",
  "key17": "JLgNhKKwwSNPTUi8oSwTZsb3Em7GuW7LruiwMAcx8JrgKkNuscZtzPxboU8NorG1eoavPSon1n3LXw2ZsidmHUs",
  "key18": "36SDmo7Eq8wkRGE8a1Nm2qtCy3fkCCH9nW5qsjPNqhMoY7hDu7CUw337Zg9MaLpHgMJyuYFXHM52maTZHMPPiFiA",
  "key19": "5mYcRG2u1UpcSkVttLBUxoW6nxiaCwgbUaaqABc94YZ7H6x7NAdMEtsVyQLUa2pfhQhARpS7ShcocWvQRwncPYDN",
  "key20": "AN9Prj9347yy9fsdqkGQwj7zuZ6CtyvYUZKqxjQM1pxVYX2waC1rtScB7Cu5yxVizpQV1gLfLuZijQHrJE82dPc",
  "key21": "5FvkfcuSTocyXBtNCxttTRuUTBY1uzGShMChEiTgA7PgdpzXAr2m6B69hMdNfAGRn7bdaSSYQU2d2f5LBpkq2gVR",
  "key22": "5rGK42j1tj5BVMvSWS26d6uxY6YmsVm2mfqVLy3UEKxnkqJ4hBVdmSNbot1VvgWvws6ChrM1YwxWgD4bxZJU1Asq",
  "key23": "4niWJgUQYaN5iESphZKLi9X66JscxsAAg3LzzMMqC3tWfz7fR27tbzqFrzooVbjvHCeKUwAEBw2QTZejSoZ9f9p1",
  "key24": "2LzTdDfYfARGJQW5R2wqZ8GeEYEGdLFJrtp225dgcj8tZMQbwjxbmazEn9h6RuS4a5ptsgWudyn9Gbp274zyniZw",
  "key25": "3JXG62S1inZ9pbLKnE7YRMWzqnfpvDqrKAWY5SuLjGRtXYu8WKf6A8nBYyMoXusTXXNz82HMPYEBS44WVRzFrH79",
  "key26": "5uauGeS5wGUS7ZR9MVBNcVJaWewFJgenpP5TaZcjEbfKJF39mZq8SWPs9LDSBUoYzsBSwSgKMejXvNA4wXPBqphL",
  "key27": "29PLeEyYHw7eEFbmEYXH9LuJUUNYsTUCMAhC7EGzqr9hZjqGdTrrT4pj7EuE5CHLdckaf7tSAdaTYTSxJJXneg9g",
  "key28": "3RWywggfToFiYLLUtYabZKfZRLnGumrmGcQR5BmMaTLrBpm6JxQuNAx7QXAijK9iwy88MKBHmkQQah14SUszSa7G",
  "key29": "PMn7toGkvvuq4BWhdvpHgnstLwu9tcbi3rJV1ZffAAUSbQwPoGtSsxGEuhTjvdVBAFLA3kPT6V6VyDEps3crSVk"
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
