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
    "5ZrQz2tKFrcwnmrmRw9kVfqpc9TjpNeZSZZ7ZxgsD3Q4gRt1uEmxg2tHTQj7AUg6fwNrJuExzEwnuZeTpqnn4LuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WRX9Fj6L22Wh4DSn9zeAZucahdN3Tpv2SX3tSKZ67hocXciDuqSX8UhhQ7cSHXEr9XUjECtq9VSGbWtG9g8RSNF",
  "key1": "5LyoLdYWBaM2WSry4LoQ9ATTVxD5PXgiGLspbtZgSFqvRQT1is578RBqKtZHhe6KRqnbg8jXaDxY2wfXwAZ9Gpab",
  "key2": "5UtBA8xSYSUrE2mfFK4EVRxYLvTZnDtE61wFT3HtNhfqGTiKUFgTB4CNYJGEj8qN6k2MDVHZ2MsW2RkGBLTvg6gZ",
  "key3": "Fav2y7MPoCNqkG6YAhHRnDzgq12JWWjNMEqSgHXubQLXq8kKQhKEs6R9JWtsa1LAWgnd5EBv3s8h9JU7vfRcAXY",
  "key4": "4GcVWcrBbLeeUVJ1XD8iui5ahJVhx5Vi4kyErQb3gPS15TG11d8uquwnUbN4SsnsfM6nEri4rGGkSsnd4FAS67RP",
  "key5": "5ff2DfN2P42B3XQwiWVoPiDu9eTahge5Qn8vNkwWyCrxjizfibcX1AAdAwNDYvA9CAjS1VE5CmzJtxugTrZ4jB3W",
  "key6": "5nsYE6KMNQfvmxmELqevKFmn6eyfY7t1VpGPZNFj6L9r7rZPo9xzFjALaYwhrQ9f1VcnNvbBzJeUq71f4ZJK6hy9",
  "key7": "4jzoaX6vS8YoTKEYSfPCDRDiakgYdTznB1S1CZHQKUgoXm1C9h2Zih1ho23mhvQCwrBMrWcG6Ho22EQp4BuzocHY",
  "key8": "5e9XW8CtC1jTustJ2sWYhed2J7WymqjxYaU9EHddUb64doQJ6teSo6ev4Vc51ABP9W4sEx9F9ry5pZUqxoKWmErT",
  "key9": "2vjU6ZuBdhnnZ83fgtyQRvcCEjofiTfNNLWpgNyUyTGoiqApSNQxnVzkYxJkoT654pVju2LpuqH9wYqh153eLntq",
  "key10": "9rTH9YuJCVE5wXN4h7VAW2K2Q7gZcwiSDpLHSA28hfgA1EgqrKSiUaxLbs251nR3fUunJAQY7QMQzbo8isEBVjA",
  "key11": "2tQrjkWEc6WcpDwxoPBukXCEB3w4TT7QdEDAoefAhRhMiVGpqbT7tyA8MXcUXCwpUrhVfCY9435MGjPMpVZfg2Nr",
  "key12": "qDh4GK2RpeBHWPu2L29B2JaiUaH2rmziRnKe411LgrLaG9VR1Zx88VGCPuFErwTAjVio1oeFCEwB1LqfdmzeBEY",
  "key13": "4gByAPAGY9WGSLUXUv9kdd6fC2a4giD8j225DAzy5frUWd1qzqZUBRoo6DnPCg4Z3qAMzorbdztNNS57J183ZVRh",
  "key14": "5guDCFkE5GjKduMhxc3aJud6H1DPjWGunpKwPKxqbSNaq73QCQ4oFFPGEWqReNep6TYkwK6WBegJVSLYbZZhKVYq",
  "key15": "39yfsrMgs9PpyjK4GiyBAAaPDHfHsg85ipehfL9tvnjb1EQZFCjH7riKdANyhYQ9nkNK2gRkpgQmefk2PYLeFiQy",
  "key16": "31NDY2qALvreK1k5QR9Z6mi8HD97oc2CjA7SpT8GHwPR9YktJFzsZ4RYK9xXJTpmtmdqyBjZH1QbZRvxuZdtEd5p",
  "key17": "3GhmW8GfGbfexN8pZqpucDr9Q9hWKQg4yTfobsTEh29gu76uURKArncmhK7JwXaqKcga9bSP3QKJgZRGuUrcgZyE",
  "key18": "2eraN8reJd61Ynn1FxWHuM1X1sfU1yKdX7xrfVmwfdHa44RngwQtUdPREumdkbidEF1mNtZavbbpWbd4mzfQQsy9",
  "key19": "2k6uqJEyrhsvpFUcmFhBXqL6wNk8Zukqx2TZCTmAZMdJN8SFs3i1xKpyGXonyqDkrFjxKQp9sic3NLFjCTHTPEqc",
  "key20": "34jtRokMR4SJyw8dHDcDdFD2djRePD9kxs97LaXG1FCGscJEwrC6jtHEZddqHimPDP3ZRL8JHVEStBpmpSW2iaBs",
  "key21": "3oK6vxJAazFjRRnNns8mmxGHuXQsiH8stkSyo82Jg4U9uCLfHXxxqJqspK7dhoyqN7nezS5UtcJcrzvyU8Ca1YVe",
  "key22": "23SLGRf9YLAZQ5iPkFSLNNMzA5r2GQU37wuM7ZBcZQ9HvUb8p5F5BwXjuWvbeWTn7AewfkNZBL3HpwZKeQRtvNRw",
  "key23": "3UzNBXASwCSUebdFEEoJ7MNFCjUhtVgpa347qoVs1jYfHirX98ik4WebFUKJKZ5MSSmRipTAjjyizQGcrSzncuXa",
  "key24": "4ddZkjiqznEZkWqLU6GRgafHnrDxWUfzx9BNhuoM5Tk6keKV4eTdnwkcNYkyW9nQX2TPsv6oc1qtSmqNkGMcAGhU",
  "key25": "2Y4cqVdKEAFY7bQy9cyZDU9XhfqxphPPPQPNZgMnYQV5DuRQgiJXjvtCVzP95AoudQ9FgAypbxqaDE7NQ3MzVPL6",
  "key26": "592drRikwFZLhtU6SiUfJovKUKpsZnnhbRWHWn5SZrPp9JLEE9sa84PY2WShuDbwPrbpQiAx1qDtUufSUT8ncTac",
  "key27": "58gv49Wfm5o4MrUMKE9qqsmpd5Z3fi2yqbsSzRsVzRHD69aqN7TRkmYZ1XeD2UPW4v7dHezDM4kxazHUvXx9Xeae",
  "key28": "PDwAJir6Zk3orged6nV9LrfWdr6yGYeo5kMbanTZNpDPNgCCf4PC2kMFtpcrQ7dPCXbCeydbfgzruhHp25xgvbp"
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
