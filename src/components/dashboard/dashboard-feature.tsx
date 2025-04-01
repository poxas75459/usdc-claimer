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
    "5c6Z8E8rY5srhVHz92bkPpyLFmcJ1uuhpxdzASgWkUcNgG8gaqT5YnHykK3kyAiZRR7UYEjiUYHd1opzTbD3XtsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pyufhgYGCaaGdYQV4CzGXXu6TASPFLrQHJcAF3DHjVFZfy8vFxngdwEjzvSTb4prVJ3ttxUemKAHTL1hHogkqUs",
  "key1": "4WgbfMVdnGu3NCZpzVS7enj7aWpxJrqkHUScXf34SstSLrtYRJbA2fCZU9FRtNi7XnuyuRCfTSWV2VwjcX7rQyuX",
  "key2": "4d5KWqQjQJEYnjhjPDRKw1Avuz4uRmh1UPNPGadxzNbUsku5D7Zete3wTYWXVi4XAR7emNvDkgQX8JyWNgJCQvjZ",
  "key3": "38dejxyFjkPW4VHTCaNcbPMUKmR2kZhjZHzvty9RrtczUZ4w5ANL3yobfAJ52SAe8KVZ7XDCGKbLGt1P2Aap2mDx",
  "key4": "5nuA8BTfkj9wiKCDLYu9Q3rk77URqfJSvJWmA2LRbMiHU8P3nexERz1JcMZqvgqXTHMJ85q4TYXvgMRnXMguGHyJ",
  "key5": "Z7LdUonb2H7sDSSrQGca4EguYd1qqeEh1TPkx5NeriwruL5dm2iAECVAfmdoxNsHtSQ1mp2psEeLjDnpTRkmDad",
  "key6": "2PjY32oKxduP1umXHKvYfwyrTG7Upp96v7Zt4Ux87YvneM6Y7jM73ttVCwt23iwFomYHtjwx6e7Kg8uot7kYc5dw",
  "key7": "5apGLMhv81XPVpCyb4YSw1Uet1oHa9Rtwp7e5jquqQwUPu6xuBsqbqgxLZk9LHvLxPyLwFzvPNoEuavN4z5GtaUb",
  "key8": "53tRAMkTmrNFxAHTgFFaKvjE9sa91oV17oxjRJcnS19jEWzekQENNUQ7MFTxnoVZM5dtvjs8nyNFTs32fdH2YVvE",
  "key9": "n9vTAXCmfGLvETZ8mjtCBBfVPVYHSNdPr79FUHoTsC9qisvWWoqFhDJs8AChKsv9HJtfGaaFeAGDVwdxHUuR2iA",
  "key10": "2JdSR25ucH9jBRX12KUa5bVztjbwyws5xXw3YCjgGfycLprYTgKLxoawv9Bu9dzfs9gxScRsiAASzJAdVkyCdr6A",
  "key11": "2q8cqcvcPujZqmfkxZmdPGg3tDHgJjpPmNvhxEKUtSGwRc93WgmG2nsoJqfXusUr8iJU7wncv5JdBSHgA4wSr1z3",
  "key12": "5UEjJpdpvsnZaTnhbRSMG8d3Eooe4nAXfXwHbdUwLRDn6xvx1MLNTKJ6zXaNWLbNq6v6UYz4GGP47YX8gRPiD9Be",
  "key13": "WXnHLexiUNgDX5okYBg74skX9HHpeoeTvYDsJWZHdvD8ddFrA5PPyaVwft66j3BK7mg4Azf4LJadt8q6zvuConR",
  "key14": "3FoKTBZHEebAjXUKTqAwDZGhUnDkMYgUAAxRqQig61pTUba7Y4AzsdYnKrKsLQ37GwL5TxEx4sJDxPqCZE5NTw1y",
  "key15": "4CdEo3B2T62ce2pKzBC6owdyZcK4JBHx5P7sctfGrG2QRfArF98seiSTCPZS1jJEEGVSxtvMiYNqcj79BP7Qipup",
  "key16": "fhz55Q9G13CULTpap8WpVDfKknAWWKtz2v6fBX7wosW8H3BS5WMeXY41i4z8r4nCUS4GBc7rfh7GMrafjpmw3sp",
  "key17": "57gDuyUefzovT4yNVLEq2cR9o3kk1U3yMQPQvyJYvq1dYodz8qgqMzBW88BQuijzBGrnbby4jbrHNhqaWK5guCkF",
  "key18": "22btWwp1wkahSftKBjNtmCLHM6dRUP9HezRX6su56CLfi4KsioJ6M7WyeZbJbcGLhDwbGkdqiHgYpcGV4QJ6mwHT",
  "key19": "4gPFfKkpLiGT4QNjB9xhdLt1mvTPBy28G1apLZ5tcztbm1zRs1j6G9sTo1bxUVEweN8zu5agenKifFTSHhFUhdAu",
  "key20": "3QUsA7hEsArPKoHUTea5uBoVo1FEYpWcAVpBQxLyKHeKj1q7eUR8EAfHgBVRdB3t6WKeSFCi1rSxQTg8naMHfDZj",
  "key21": "UdY6A23FjTSHZ8posXdn7S5AqfsfWxCUNCjHjd9bjroRC8xLP3WzbAPxEsWMtQzBmwVyqAn6THhZcPuEDMHHSAV",
  "key22": "QPRXYUNwxZav2DMVxQ5jdEc1i4cxURM5pfNoT9zz5LWxf6UJG17A2PAS6jtd5A1W5RnegKsMAax7CCJpn9HWTyR",
  "key23": "XEbizn36hnidG8XG3BcgWyjBHoTaExB7VBGnE8x9xQGfnR1LTejYMbxqDV5Jtmh8y1iP7pJkCUeSgfKeh6Crrzj",
  "key24": "5wZ1sAND8QCfr8M3j3abw5QX6jfDmsmDeyjSwfwQm3jfv9ur6g5nGp7KY4qCP3djPdyBJC71F2Ee4dcb1jKUEQGi",
  "key25": "4fGAbaasZ4T6D9mnoGiCgb6dRvxg6EANxLuGiw4j3qcukw8ZGArSGyrt97eejYbnFaVQs33H9C2ckyJ2ZsiYgxRj"
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
