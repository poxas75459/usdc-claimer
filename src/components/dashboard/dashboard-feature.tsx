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
    "98UpnvcDJmJc53G3U42ZMoS5Ts7868c5jKVNyJJ3EP76ax4TCMAUEHfNGBgCf3dZPKb1dUX8pMm3vzwEw9dBdJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24BTYXRSxD8TgED8Hs7kex27GR8xYZ95oKdjZU5KZF2caPTJg4zT8KgYw5vcgbwQgLN2dKwe6Drdgy4FvA8T9ZsT",
  "key1": "2vYzwxM1W7fdriin7HQ3eztmVxjiZ7TtrbRG8WtEnuUnmGCegBQg9CcqUumBRypxtX7swENRyH856aQqiCmAy3T",
  "key2": "2TBF5jELKgjmfKKSP75g73ie54Nujq17Y5ABgX8nvNWfGTh4znkzFDJ2qQ7CocxN5Suw5X7bMHdVYZnB6pWRZwvC",
  "key3": "5TzrSXNxaSQ6q4wmzfAYtdfodUURKvfZdnKH1FovSUUaX14siXRtxkrV1QhLxDPsj1SuEgc5qZcQ7YzLtxEAdy3V",
  "key4": "2GUZjiFN5D4m3krt9T2hNizmL5szYny5h1vvQmmcwb48hqr5tkzRTg1Ksft5CUDysGFccjaBz6Y4djmuxzYF7e98",
  "key5": "3zR9XtAz8y4mdF6JrbqtJc1MeJcefRy7WJUHT6thsnvW3RK9FkiQTrVmSnCVrqtH3KhqcFwrur1JjVTbMtpFPyn8",
  "key6": "58vg9B2VVNLWzB8R7Sp2eSSM3Qr5rvM1n7bnMKhAKbZc4HThx3NxwxmRtVV1enHYCeMHfvBHuHMbEZA2GrecRF7o",
  "key7": "2VhNdNTjFuJejMyQ9A7rCC1yQubUtzqFnxptg1MUEF9fxCV63g8PNcErhPJ8RXsX6m3Vr9WmRGEB9xdxMMsW32Si",
  "key8": "Wn4UUHscuUcXwFo8Zr33naj3yYoG6fDLWCHcL5QVnr6HQDaHPHHoXJSgRu22N7kG4KGbQSNhQXk8mBSwL2Yuhgm",
  "key9": "49KXcyEL9U6e56EW1o9mCvMETcBznTgXzMu1gXgTeTSsfZcF5H5uZHcm3ntZuuzEEh5rThaLZ4Ho6cRc8tS2YFUu",
  "key10": "4uFgUZB9eh6saRVSDy6AfZdBnRB9gJxDRQVGxUjpo3N65kaWsiKMRKPxM57y82ujDQSJ5CCJ8P9xBQ2JCUuafHy3",
  "key11": "5QiNdpmzFREtuDwceg1vgnpmQJpuQzyeBV2zvZcsivaQpUgbj4ALzaXzggTAw4Z8F5RxMNHqSWDeUXE2XcW1zqEi",
  "key12": "3UB2CWrnWu2rEjaZ8Zrrzkax4ZtueuBpn8VtF26THK3of8pA6rq5TkN18aeTDdGF5K8NKRskKot2WgQYXT4229Dd",
  "key13": "2njfRxvvEPoT7nrDwzyYcgMYAofy7wgpZ6QBJVBnkUkpSXdhtKhLUjgaWeWktqN73v7W23Z31ubebp75cyefM4fU",
  "key14": "QzxZZEXDjgwBMehDLvLFXzr9ts7DVW7WpYbqXqpgDPFkodsbDsCiQM6hmu3otT14XKvb6VmqEykU9Wts85myEV3",
  "key15": "XC572qqKEhzQAv391RqHrQUaQHr1C7yDYm3qSZn6oUyQcN8FB3XRXREWGNHPcQXFCKEs68iRXcYoT8HmSxuF2RN",
  "key16": "3hCme7aiGHgM1owJkvXhvpXKszyiRypKfe9FgbAudnzXwhCzbG5XaDBifKa1a5ZEYT572oQkRQtR5NthQtjcnyFe",
  "key17": "gTrkD3jRtNG2BpCNkReMF691ujWGRKMH2wuKGo8v71CTTadv5FcPtjyCCseJXChbwQPsURTpMJnXi5ypSVS4Tpv",
  "key18": "5cd6an12KYcYAaj2HttTdcGAZyaJdnMYEnM3pcN5iGH6maRTm6FDEuNg6LKssuYQhYCy497RgN7s8GZjR54Xr423",
  "key19": "5ApUkL4dwvxn9q77bwk2WAY7ruhiMhwfZKchL2kN4FkiVzo3DGVZK9fpK1UVsg72uopY9XsnPWzPdoVvJ8SMxK9s",
  "key20": "4oGgRuBPTUF4ku6mx1sxMskoc3QwoicYxeiSKDBNHuiWJtU1Vra17rDTeGYSXBX5PVy2PM9UoGmLjc7juvWwWvEu",
  "key21": "4QmZ5KayaSTBRtigVHpz66NPBaKYcXEPppV1bQ1XkHNXPMzPwoUiNAeKmcbacuAAfaS9vUr5Vk9LzxGLKqRk7ozX",
  "key22": "5zdPdwTaHSHfuAMipG16quNjatin79mq61ZVxoaWzNiabNXUvUXn47cEQXwV29rD2DfzZRDfqpizBm9mCrzVUQLe",
  "key23": "3pxvAThNVb1thFXdNpdaFcqL79kC9J2tyLvBzdgoSMjL6pQQQtrZax7DZqEBTvnusytofSMqp4gUisa126KcouH2",
  "key24": "65qDgUKMnm3cEEZFsByqxBfYNjXUxRC7o2jZRx4rdKnRGFLmSTcGtpcRc9K1kUVwFVn1V8L6DjvXab6wuG29M6x5",
  "key25": "3s5U6pmB6qHjZeLhD26EKa95WgTWqUFn1gdURY2U8QfdTU19JeZNLNoc1GETjtz1GaczAfqHEBeH4h38hKaWVr71",
  "key26": "45jFehw7WFqYwKN4rqze6kfZPj24NQPHbaiiMGeMcxFKufqQgy3JksEJxUCtCiZG9xgn9mMPLru7pF5KL1t2qZtH",
  "key27": "5zWhggdRmy9bryZArLkecGko9dTkPibBqtsFBdPcaQ1Hj32PtADRg2Wobb8s7nnyVYsPka3niq5SUH6wjrQhkGLe",
  "key28": "3y5G2EQAWamH5qEnwu7zFFHy11mcS33TDunSMDGTWEMuAUL3D89PAR4HYEe44FbqQChZR3xq5ELLo2ReHvQAYEr1"
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
