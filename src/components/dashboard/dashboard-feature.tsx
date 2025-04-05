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
    "5Hr2aCCCk1PbMGhsq5pZ1b9WmU1csNjB5dZCzcVKWa9E4ZXwgPGE5q6U3B1SWv1TCDJmp2uFXE84eTvJqMc195FF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y7TyY2tBB8x6h7pafBvbaaMujwT63J7jsiNXXgk9LP2U6kXVgeDSokNpexcuZQzs8oEYsWcvRFgcyqngd8Qryyp",
  "key1": "NggqihbC1WGYzFdooPriJaoK2qsetdLStMuMNenscWhNUCAb9Aqn1yqpBUMaFgjrfRzGYiCXLidCp16SfEhQw8H",
  "key2": "iz4tWpT2qQPoWwYxuncVeHmyyzpHB8sB6W7t4J9VHDJbYJAkUDyJ4DvYx3e4bBZZYUprkssDx2VKQvWXSJe35Pr",
  "key3": "2h3nQT3NVUytaNdma3KdKJZTUtp1cHXu8QAE3nmMNys1s6kxmdk5yTnFuQD5F4eE72GTjXJJBMFHhEJ4vycsoUey",
  "key4": "5hW13aiWyReuiEztUobmrdewzdABBAkKJBAqB49PTzGJeB97wZqDvkXs95eDhMk9scYWB8PZ5Modx1fULEfqsyYp",
  "key5": "4bAWbRjLuRKBM5TUbfiszaBvYbAyMWXUoWnGJpn2V917V1XJjcZyKxQ9Bztod42S4qDubHA69C5Bh6CfDCZGeCcR",
  "key6": "vXKcuLgXW6R6py5ciQnn4nDHLhWwUxnD6VxrZHQVTnnhFWnmQ6tvsWzYbYVuHvRsvJNTYYMdHzDKvAXvmnBbbrV",
  "key7": "ias52u9JmgocuqrZ4gwTnb3gvghMm5eaamw8hYCheRpeQzvUptNSy1VzUNSrtgn5S6qZf528oc2fwcGhJ1TTVo2",
  "key8": "eeiMuLCqFPjLVh2vQhjDXWiPeMd9pTZQ5d7x28Hr6E51Xn1Q6Zb8jp1jpdY77RmPtexe816VA5W8SPHPJ98nH5x",
  "key9": "3P9NFWURBgJuY5cG1UXt3bfiUqZkML4ApXzHhwP3N1n8x2x8LofC1wJgtBjFjiSexBeSsi38F5GWUR4JpYSAiZ7q",
  "key10": "2uoD3z2CH4yXzz8uj39GF1Ekckuw57MNV1YRvTsr26EFc72sGk8io4j9gxADDhMLQzLuLxveMXYYaqZayhP93XAQ",
  "key11": "2wVQrSF2AWpALUr71o23ExEh8UsEFN2gVh4Fh9zaKv964UGwBMAC5yiuGU53SMjxDN3dnfhvmKzZSW3zUT8X4NSK",
  "key12": "5tAw5wdABC7VE2teNfGpQtmjrzKycBNBdLjncg54Q6EAN29ZvvQ2W8yMaPLRAAtuGuQCZbK64foH8WXRU3YaK5ea",
  "key13": "3KGRQYpcRxyf4xcyzHSGbTwNGkpPT5oEySfo2krEGhjbSWNKzaFMV18L6CGpRqpsnoKe4Sum6firmRFjhJP3hXyG",
  "key14": "3dffhfgGZSoTX2WmNc5KDkrG9iimnLUJAN27u2fvvYC9V3MugHJ1XPpR2rMDgyv9sknYJUeBbjFHeYvRXHwcasCh",
  "key15": "Mtamji3HQwrWKBLH1QcgrHTFfXvoJkJhMC6FpQWT8YVjo4xLeGTz1JkUo1CR121KTUXZRQ97VEPQeGqLjLxKjat",
  "key16": "65RpwL1bHThtMk6saoSPPLpdW1x78aLZ2nin1Sk4pKPK4H6VfPYjmKyM32LTyNxhanBLtG2RQqeq3aLMLn5CQXtG",
  "key17": "xnG8nWx9b7d1MjHjwpbGph1xkixYvj2nobzG6GhSazp1BnSumnaZUdaXpHdZvqKRPSQnMKkzHgzPKY4XM48xEvh",
  "key18": "4UYuzf4dNqF4mNMSJZEpSuzTMvc4G27KRBSG9D2kPExLe4S5zA92Y9k8Y65X3rnivD62Bz6KB4PaNJDNhE4usWQt",
  "key19": "4GoY5fx2WffmvjQLbYuuLdWHuXx956yyLvyM6nMfPxATDDcqNusPpaYDW4FjZPBNHhzGCdsGPVJ1q5dfy9JmEZAd",
  "key20": "4dDha4oyHkpNVwwH94a1xJhTSQBeYCAb5k9WqajnKRudr3caZcJNR9rFudAx3aT44jGerQAkszN1NJXZR5q7why9",
  "key21": "2GWoBuNvFrfGo6b2uoxhgphwvGQ1NS2km7ykRgVv3BLtDxy8zCaiD8toKLxYAi44j55JRk3ZF6UzhBnYoPLgbaFg",
  "key22": "3SJPd8ms5KWVpMfcLunqXnuVpRFT9JM2UxWEJ4SkL1EvgDAaPhzcEJh7uFj8ezjWTBq75D6yoHagC2DudCWz5CRi",
  "key23": "5Zcbrc7gBu3RJVTX2AhSPWP9EqN4zysmrkZmeq2jdvBhov1Vj5xnn9H8HUpg12uSh3jU2QarndzuahxZqCHpFoFA",
  "key24": "CwxUp8UFsPtgV12ZfjWKGKtTv82cNmwZT3ynYo3QEdpoaDj9XiDSaW5P5r2fPm2yG4ee9AmQVoSmVjE92yGjp1q",
  "key25": "4LyV3WkmYuydcg6uShR9EgvHYrWJHcxpKA3e6SVJJQJDfiCaCkGHbGk6BUCfoJZw16gwkxm7KJUZeMAbrhWwFZ4j",
  "key26": "46rG44ringEQjFcJLQL3ZykucN7W3TPMvWN6MkDG5mPRtCQ3biRZhP3uQLZJauZZU9QUsh7HwuSobwT14Exw3uMe",
  "key27": "5L9HZ1jhtQgxS2n3a1k5iJweS8GzB1AbCgefdaJaBvwRZKncL9AxEFZxYmmYRVSZRVuuqy8HYkt3TpNCK4mM5exu"
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
