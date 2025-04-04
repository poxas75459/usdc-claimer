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
    "2DdEhzUZfQKre7DZjf6wcbNJhnXXRezqqDobm6L636qLogzVGecoHJbrrhEjacjxkUsBxZarJTMgRjkqJfdhtr6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BuKZez1QZ5NXyL9JTnj5cXU3wxPwCinGBmcQ4ZNCCmt64CEyn9wiJEmG3b9MfvSib6KYMqxViL1zd3uGqxTdqDV",
  "key1": "5AHjaKLSYXysprXmUvTUDLUfG6D4fZ8jeq1R74m4C4Xajnn5L2K8inGkf8MoXuPtsBgBLQgHbvYaeXUdLdCgfvvP",
  "key2": "3nBkGtKxbUUqeuo41RQiRhaSGSGT6FyheMjh3bKeV11h85N8Xre5pLD5G6TfFAuSMuR4ZR2SYGZvKxGNWY5UZs7A",
  "key3": "2rxQBNpcg2Qk2AdTXY8TYBRdHPNGLrCMcMb5sWzYLKdSyLPyk6XF5WmzEmtokFrYiUD3Vm5Leb5Sp3EkYLgL4WGU",
  "key4": "zqou3rjaXhEWffWpPonL8c9ukxKv7LprbxDKyk3kNk1ZXUntp8k9bZbnQusqJTX8jAGxmxNwNze5n9Yb5HZqNSY",
  "key5": "2tHD8NNQHsWLmPSAcduSLtJeP9CSkrjxWrVWsot53uVdkRbbjcbiwutwwQLXUSfbpV3AkbX3TKTTyEHUZhzVC5Tc",
  "key6": "2kuPiF6vAtCe17UAThRoMofBgXs9c6uHD7fdadcch5aJp34GpJbdd9sS6txqfU8XBeoa8uxbh8qhqzYdbpeyhW2j",
  "key7": "3u3BvrDJehz6vrsuVB5vn4r9PsAbyHBQsqZ7VevSy8fLz4KHSgqoPFgdbnY3GQwr282X5zf2xmYzKmkN41z4LwBc",
  "key8": "5MGZBaV8gEzwPcMk2Nh8mQLZWs7DFMjndivV3tKBGpPR31piTuYgLZ4YWw8ZP67x2ANnZjK8YduoyXWxfU2rjcRh",
  "key9": "4sz6bfLTxk9ju9N1Yq7huzBkXZwZo2TpZj2XuFf5SoW3pjYY1JVtuA9eh4pYQ8BKNwk4272YxMhi8rdKFjA3MLHH",
  "key10": "gw7YQxihBm6FoNb1Kk1wUr1DARCyuiiaQYUy9JMTFmU518gPqEKKYoHc82pmYixZSTbCvjn2EMHEdnNnEuaQhVf",
  "key11": "51Wn5SBoSktP6jH23VYWmRa3qDvzMT4kYxBbmU2CUsdbzvPiCXAcXVSBgK4pt98GFXjHtktM1UZwu9kVyrLxxBMK",
  "key12": "24VZrSRf3JFASTY7Fd7iuGZ2r5VUFYhq74s3Xs6tkMVf9JAcZtfm3TV53Ks9jqxo3P92vA5T6eveeiPziH8Bc3Gw",
  "key13": "3TcTrFHH9cKusdkKT31Wh6Yzj9M2CXSVrVy6GFQ5quVJKHNvR1FgRAMwEdyvFnRLYEz4TutAtX24McnB2gyUKfWy",
  "key14": "41zpxzaCpuufT5gnpvdZde78GAeqKzHeNiVC8ng8zVRgqkvb9XUKdtCo2Ph5m9kKuofn1voSvTvfQ1kiip2qFZT2",
  "key15": "4p1Qtn7P7EvjQE3U9bBBze9e9qKCaTYZXUReCzyquspTXGgnwjxpPKJ8dzCyKrL6Xx2evtQzAvys3MtyRJjGTVdb",
  "key16": "2KNyp1Mm2zk9Jgs5uAuyXWbV5VVg1Tod4ZBoNad2PWRqLNYD32FDxiLWbfPEirKiJxv6dN4Ya9KFYQ95tRUjKath",
  "key17": "58eiRUTm3tXY9CQoUQUkvWLo1evJzhnCiVyBCrd5WrpVxUGCrKek7UjAKXaUEBMii6UmNEzvBi4ixRN2qrNxYZhQ",
  "key18": "NUr1tkqJBoE9PWqp1ZMAP3wWxDXJ1yDMipUYudpMPKCYEk2hq6qk3cqqvUsLAF1N9KbeX75SNBFruq8tsdrkbyn",
  "key19": "3jLHWnffD4gH3Z4eWFoixyDov3sQ3N8B9xxHTCD2qdYCmjs4s5QzugJ3Gz62HdjHj56R83dqUQnH8Mkbqy3PC2Bw",
  "key20": "52Wd8Q8uuutAGcEkPhVzgCp8z1JMM6ox77KybUPxmJnhqUaMsCG4uUv8QUkKVzSdMPP22cT66HqsJJoVHfaFSdYa",
  "key21": "3vj2MXfaVihmv7G2uWTCZbdb8Wbf7YhsvMhsNz2VeF6UioMTVrfMcYaRDjuSWMDttU7Y79xUhH8p3AkGUuLbMm7X",
  "key22": "39bikLcCjNCRoPwPfEUV6ZBMP7AEz2f6WgtTscsHWDXAwGkhAPaDBxLXhrxovoA3bo8f6LBiZHEnmJhzMXgCdagS",
  "key23": "2dQYiybk4nS4nNyQCAYPygVnscY7CkN2QcZqTp7mVLmB5dtfyvkEg98ET2wo4Ff7Ys8xtp3eqKYnhhSYMBfCN147",
  "key24": "6QsNotkexraKuL4SZk3oMeGoDQH6z1sqajJWZ83byUoxkqP2SMjyxdDnzow48xkBo7oeoxPhH1U7FAgpf3qUQeY",
  "key25": "4e5D4GT7we6JTm55SHFie4XYNzzqyKDrdcUdgNrCe8ysgh31axJzXGHf9kBhyN4xDmKZVsRhd72WZMYmoFa7jNYs",
  "key26": "5m5His8uT7s4e2Ty2JEVjBKxC2MHMZGwfFxuyTzNjftreHd8SkNDkQ1G6NHRVkEz8GtFBzC9cBgvuMVnzr1JvQVk",
  "key27": "3R6UwnBExHhM2VmhjWrbK2ZwDmYdB8ttTB7FFyq16x29FtYKt2Ybsk8WV4ftAs2yradHUYsoAQwKLyKUL5Rp4Wh5",
  "key28": "2vWF9kQAtFtQCY4GBCZeHNvok1G8nvKoL5UEdqa8hdQVEjC8HphyGMcqKDPVhUBHeBCJPtc1fkXpdZ6LwUcbD36S",
  "key29": "8kqxYHBXFbwEVmeP8S2v1opzE6Gk7qsyunr9wBvLAXcUQxaaSA1YupSGi89R8N86HxfvNJdCofYNwLwqhsqWLdY"
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
