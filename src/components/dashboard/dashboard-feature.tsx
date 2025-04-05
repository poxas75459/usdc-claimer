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
    "oLTtqaQSneTiSVsoGttHqycsDk7JBXhDR4zBWor78trvDgNjfKtdFYyQR7pDZbD5sf8sWTCnUTCkopcwu5A7tth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ff7vXBB4wf2RYMB4ps2sKJRgLjYJ8Mxsw12NFkuuf9665qqDwB3HUDvi6owp1h4rUKUAVWJ3ShaUEnWkRQNRuu",
  "key1": "3HKSLDbNVomYVyWDJxMymjMFkVYNRCN3KZJaz9XGTHz5JfKgRBdSy83AphHH4iphJZVVNtXbsiTC4oiiUdYwCy3v",
  "key2": "5p7ssd4u75v3SUgP122P89JnDqG5CqwhiKhqLPdPVfDm8Rhr9qLzqvsVXsg2MVpbrpeThSSJLEcp3AVCZpprPhPc",
  "key3": "51apLThLwVYaU9FgWWK87UCwHk4UGFUTi2QzPgSgwZTUdZG2B5WBTXwcVzUzmgcGp3ynCcqWh5CWMioNptZeCgr9",
  "key4": "2mpGgBNyuses1VEwDoQQSr1X2RUbsaNPNA1mMoPAhehuqeRcyqHgepd7oDRrGrShADPGJh3AdquEQ2U6vJgpaCZu",
  "key5": "4pZkmb1tkHh8FHMZ6a79zBSnWXqozjHM8LgWrv5yhVPw89Px8W4Pt4Cme3p3sv7zTiBS9BhTgpSBcyoNRGtcRAMM",
  "key6": "BEEhrRcJSE3NAGEnVGFDZhohTvt7WvLvhTvWv9CYf343T6Q17z1BPNLmBgL8gaojuAB5Lz4nNkhchmY7P7DfWP4",
  "key7": "3vEGEHxiiKabefUedE23zUcFazFYC9aSSJ8qGfAGXRYJDPTzUC75P6m8tTGYSqdz6i6HtE559ofEzDB4XjTgmm13",
  "key8": "3vtD9BSBpKtC8tF3yzs8wTJVhapd8bD6gWfkt4FXq12rRJC8iK5rc3LSuJ5CQQXfjrXLVL7hjWsKyHKCGjpWYD5H",
  "key9": "5VgNzHgRZpgbMKgeyHEjGsMkysgZz383adKkTFaE38BBa8uzqTJh8Tbn1SLwxSnPgXg3bUdHNjS5amk5hDW3JfPk",
  "key10": "2yiGTg4EPJdqkQTZqwgNwnYgXrzNZWbhpBQtJceSCHnqqzFnnjHRFneLMcB7NchL9azUWk4Qe77ebjHqohKYpX8A",
  "key11": "5Qxc11ReeTaNFp6Z7MYMkV9E3KhSpzSvCnQahkVeNVnTkXjTVvNpa74hM56fr998CyfFMkPicpdy4pHF7aUjYXMK",
  "key12": "59MpQayFDBhLqb98MJST3PscqimuuBrNK3cGeuKaMKMXtaAvAJ51pw5C8ZCULZyXQUxrRhkbSgGNMiGLWGXiys6u",
  "key13": "WwPFSooE6NR9WBWZ2bniQ1j34wvdHWfskJiPCrjFPB75n5efmoX8dd5sP1L5SAdiAuZAyS9XvWjL5EUSEGzNQxj",
  "key14": "5Lk8sFtmyTWLPoq2FoU4nSej1JYtFnrytMcfj5Hi37BDYmxEhfBKtsNVKtXJwcUhUmUpXTChDGDrVBTz9Hyf48em",
  "key15": "4soy6di4JWsZ36Me4Hzn4QkbtET4jRfpoj2DMykzGnWvu15wXmkhqb9kKSDszHA8D1DUSb1tD9wStNHXvGuo27Fg",
  "key16": "615xrszqwJj8TGsAPEvmMQRjCJgvSSeMNPZScwTkwx8RK4B6vFwpxpSzQtMuPcQ9W8MkjFgsBCqhkACP3dXHM1j3",
  "key17": "3TQG3o3kJNmckpuHkEyP1YoLz2dpaV1AQkULAs1xGhvUuQsSqiBwSzporAzUMqKxrrgyAF1z9UR8Y6RRJY6NsYUW",
  "key18": "2LX2eYw7mw1iBBk9ksCKY1Q3ru2EXzpkWzD9LEVjyhXp6XmnT8jhQ3WywdfoYJ9jWmxjjwHnj5DVvwB1xKt2vwwA",
  "key19": "5KjttWveZHiQiA7b3337pbjigVHA6p11SW9RfsWagon6RVKtTf5ARVNZmdKEzoJpvyuwm6F68NY5f5wT2t2Rg8XL",
  "key20": "4E6dLsw2dBnPzHeiTd2id9EwPnFikYNzMf1a9TvSTnhLnpaa8h4JDdy7D3NhwADECd5wkhN6zVuHaD4q2RMHBDEh",
  "key21": "3f5GZB9uRugCxfGjbdk5tx6Jffj6iDr5HWJ2mujrTeUGGidLDihShQCh6gRLDcHsqAArxx8gDYwhc38CzjwNzXdZ",
  "key22": "3G2ViRoZ36e3a3SbhppBjEfbjaEzosqj7Crd8R3vAUhPpEQD6WaxnqXjyscxq4hUEBRGjpJfejQ88Cbp2bAqCBeH",
  "key23": "5RF237JTyfGpE619EVsKiQ32aNW7ep6pZqe5dDBRtvEshRJcckKw4rTkKrhbYw1c9EXFQeCbEdyevYgBccJmn49W",
  "key24": "3QK7EJtFAYyGc7p2JSJsUQswECDFcqCog1BHSCVZJkwGpu8cchuUFMrJ8vapL1bt6vUQwDaZdqVCHKuCKdGLYToL",
  "key25": "M4pJ5fJQXp1zrV5zAoWzfKfx3N9UUDMmzZ5fyfz1nsW4DNNK8jez5g4FfuetmGWdx1o4FB8HUV95QgtjkuyQFXu",
  "key26": "3x5H1PMMDU4xKeN7xcxAt75ZHu9oZwRA7cYy6G6bgK6EucM3iPSEGipvpgfBMn3PzdbUCxbZd8K8CiFvSzaXWabG",
  "key27": "4AA38kqU7SZcfesgRVnv8Pg58HHADKeLmHaHRmhmD8jf5NXVoVqJkxVrK87feggD3k9YTtEEFWZRbgGZaN8prR6m",
  "key28": "3NjVNMhyM6nMDGLWs5J6xaaGGHfkb7MDb2wHD28nz5DLRW83BzUkHmthvg2nXMpktDWK3svUsaSV1fg59TvPQsW5"
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
