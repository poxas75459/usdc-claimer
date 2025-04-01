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
    "k3KhUx29JJhx3CSnLgaN553gqw5HHHVUZjQGSbjhaKL2YJEKnWQE3Uu78dhFwcBc7egyLUsFy9Ax9AWWZjPF3aN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KQvHBkZ33wVtTitUUgDqksbQjJ4k5K5N9MSYKTej2VpqQs1QkVUDPKKyorUq3VE7EpxMUKRU1YZQ9kW1v4VU3c",
  "key1": "2HKXNsbidu5g7435xhi7cFEVXsQdaa81h6umjE9oxh77h75YzhcbfdmAwMaRiU8dpn39DXhQQ6Uv51rDX8NgeKtq",
  "key2": "397CSzHf22Y3WNsxrHqfvijvJuCmSrNvhuU9GphzLBULWBdwySvWtfyFJXxNRURnQegVmUYL6xoNgFb8TpF2SR13",
  "key3": "2nH6qAMneHbSwJ4DEDz24UdGAQyXkPxeBPBrkFEi2y1ac1cvfXna2gkZe9RifQoHd9M3xFxgjsZBYrxxir8rnqbD",
  "key4": "3iC1s5Fg2B1sm8wPXHDDVLssRDzdSZCidNPYpQbYHdwgNsETTjG1JkfwBxnaEimtKz37BCD2FrxHzVmqawbCLdSr",
  "key5": "5TaGPTNqJoYPtj8ynHjz6pC7wNPHBR9ai9P6MEt4qwpngYPJjQ6fVZDcGW3S66dCE9PZhj4Kn1QDd7RJaHFLY7ok",
  "key6": "2re3oHhgNVAd4rv2CMyvk2kzhy5aiir8hWgADjsb5EgdEWFcyvcvUY4hBMyDWmNNz4jy9mJzJuv1nJHE2DjHM5LX",
  "key7": "3GZYiDnbnCM9ZnmMguAnB3R7ooQsNq4ncMp8xm257hSiibNnvxwSboTdTMwLEgRRKuUwpZwMXCvuH2QCPJ6mMLaR",
  "key8": "2NjqXGugsp2Qjnw7ZjsRTzvc2wYBuYxjwvZpmEEU9daLfnzEDvvuCd5aKzAVjnDvzFhURPP2SsfMkJdSxE2Y4TEY",
  "key9": "42JwdJWJYSvo6Jy2kd4YQzJUEkwRc5CRTvDvo1nM4EKuvia2pPbYXYixNycuGxBc6rV5up7iDfTAuE7EnCtCybqP",
  "key10": "4TqKUzFmrVquQDzk59ujBtQXgDRh3kEpf8hcjmaaFJLjtPiKVhJeU2VgrLFcoA8CsHv3xBZ4kH3MYjLrzWdRgQPC",
  "key11": "3MyNk4uQxN2gFMZERWK7E1isms9zvKZfRTuofCw28EHLh89ruHPnJYdHoLJKgR7PaQx12g1nEGK62CcWkmaywYtn",
  "key12": "4unQBcyWzX7KT7fkc17X9GdtF8jnRZFd4REoiymzkLta6SpW1UwaN9C58oUizYD9AKV59viTgSwa61wGiXMR4iSK",
  "key13": "EzjPUirrpyb7ty7zxUpHZfky3r7pQqXzNccCSD9hVAaK6aL1aKNpMuRj5v2yh2xQjLEFg8wA4iog6xAvNQsha5T",
  "key14": "3rPrQcEQ96SN4Hd8Va6yBiDAedSz5m1y7qMW9vaKPpWLa3TZEiBUXyUifXcZBd82JPWkxkrTQkEoqkubqZ49GogC",
  "key15": "3kC1vPnsySG1LENtMRF1LDHm7ds41adXzFRULYuuiPJJSBVdFCqNctG9nNNqa3mNgmoqBvXnH7RAD9JdyfkB9JMR",
  "key16": "3njZc5JF9rQRBQQGppS7oXpwLvDAAvByffC9nfACxYfJQA8RfMhFwGj1tFq3CHh4tgcpaUmCNZQJSzhyDLLzqnMN",
  "key17": "ciEPYkeCaMmsdszM7eSCQauVLFD43nfNf8RD2sf3n8rW1nssUMsPf7cpV5ofEnN4KrdGgES8Gozka4drjRDYySY",
  "key18": "o2jrcDJuz4cJ7744Lx3BhiSZsTXFZ54jiFiFVXXLQfS1F3Br5RZhJUV8Sq7BADQwx1QrbRLznnXQ3tJ56Thg46a",
  "key19": "4Vb1gBZA2Lh26mX6EPHQL5rdfF8GbT1BkLBh3UrmDs9M8EADejUrcy8f7boeTPgcXQNq1Nf8nXwCqMuBj1Ydcj35",
  "key20": "5CR5hAJCXZZrAYce2i4WfKwU7hMZPDZsXiPcwDqoYmfDoPrUx4n4ZK7DJEi9kCP4S6GgdAA8CvJrRxPLZAGVQqh3",
  "key21": "XgGByAuKyBhjoHhWDey1pLDDMwuSucthxWRQQa8MnmJsYsWgZx7SDe1faV4xkestCJ4Ai39hixRceq8JYaC36DL",
  "key22": "5fKKvdQo1B58p9f5eoCoJv6BM1z6aNSYQD1a6mBGJPcrPmoYx6dySPRhkq6e8L33oZsa6Ues4dUhK4UXYiL2xmLb",
  "key23": "5tANqBCb2SRb4wDASAtGahZnNHyiGv9c879HAfK7PkNkfpwDjCecsBaXt1FTgon4yr8NTevQXnDrku5DmMNGzL3g",
  "key24": "2A3pV8Pzb4cEdgrVcMV3htQq4prAbLNBMRpRZ4ZzkU9btAhveDBwD5Tqrq49JuUHERjDGT4N47E2gyysMKZKfdC2",
  "key25": "667mvoyatzMgRgg2YuBf2a6UM4sx2fJA9jpEqXdspA3gfVKKwLTair6up5XNGBqW6ji7SZtLmUA2vEnnZBpjnZLF",
  "key26": "4TEutt9qFCSNDqvJ3yQih3AmqzuoVk1V7LkaePhVhtEZWj8YUzLD1exWLBe4d3PvXPDMCwC8YR18YAT2jAybH7j7",
  "key27": "s15jHWyb7r4iDRAiBEjZi1rWeZbE7xkz8nf6x17sPLDZh6jue4dGQh7tKepVmyWN36nmzNQisy5vsP44zgC3VkR",
  "key28": "2Qk4n3rf7neUqMA2k9ZQzTNu9hBjHoABbExHEwWubBVALyJ2dEnLpMmwTphjy5e7itkH8qZE8uohtJYWGwWXqyzw",
  "key29": "3iD8x4M9QebT6xafbgpfB8adSUxkBBtv3BrW1eUtA2LMjFSPAsZzHmqfoGWunqZei4WNUDALeUYqytB1dqkyyAcP",
  "key30": "44fNBGAGrzHxqtq8mYE7HVnpDXZpJQb9A6UYFCy5voaoTRdimY16uau792tLJZrDeGbeCdvKm1CKTueDVjpQz9mQ",
  "key31": "2ZRkibf7434fSeULcr3gC6kYXm1kVisX9adYDxdME1UbYubonPti34qet93kd3Ssh4jaU6DsNbkz3LjMj36nAoeM",
  "key32": "4VDM4Wr5F9kXsQTJ1r9mKUqCfbABu29DHK7r5Xzz5fybnZPncX1figXjs8xprPHFJGxu1g7n2gCzoJfpCuJ7zDXp",
  "key33": "4CGQofeHXCY3SZENqA9bzf4m3R8MJ7mefkwYsYu6Rp3mxDkzsDTBadcv6Ex5kxFn7fn9kLCSSfwSAva63xNL4umq",
  "key34": "2pYMjAJUi4U1xfiFfduQsUyQZK3dp2mB9ffKyLJUagHa9fTEK9F6PDkgrPwDFK2cdSBqxiMNCeoBwxtag4XppcaW",
  "key35": "4zwZABXNXFwjd38vR6BK9hysuQHLRjsq3zmUHjuau1EgrJQ3K9F7vPnibkec7Npo5iPPrpSrGwurd1LmgheyXXGp"
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
