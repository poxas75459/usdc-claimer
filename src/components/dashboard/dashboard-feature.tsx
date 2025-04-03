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
    "59LfKQx39JMjDd7qUiVq2gbEHDxWxtXKrACDgrns3wbMfTGBvLaV4vFp9iPWdapqhrqmjiNTPEgJHbyF7NF5ruCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S68tigjXXcuZVCnMqrW8yirYrcYfLnHpAghTr6qEDYE8CDAeTHbdAcQS8TTMQ3WgDsybXAd3XivGRbPhuvLbqM1",
  "key1": "4WTQucEEh6DbgoKycbbny2RMYpFHyqhzfY2jbUJ84kj2dvxncjxU8hoVkGNYMkDqwJ7WSHmssFw3TsttuwuJALFN",
  "key2": "rd64G92hWrWa4ieBCUBR287FEwaVT8ewqKHV7cpvAtj7kje3UaMWzLpbmsGCqx8aGLpScBpYP5US2cVE85Nuytf",
  "key3": "2nvR4ZuDck8jmt7dPbWNhox7rb6UFxxVPmHiBhUSxNGPz1bmYsVejWLYfb3oWdyStsEgsQoibvePbiG6kmNtv6d7",
  "key4": "4N8oPP5uVLoqzmKi3jhyve6UGuCaVWekNQN18cFQACDw8dMk72mgwwFHQuL4ist1sMpNnXkiJnaSzTDbiVocWS2P",
  "key5": "RR7S66nos4kaTbxa2bq2NWrFpdj22K2rD9nfCbjQ2apdBreNhXCKC45SyuQfDtfGBb5eSFAY2pLzGfeNrbEvySv",
  "key6": "2tmUSRtck12B8qFmCsjuQz3yZudJAFfvDAqjiC6jzqWn9h6dpBQHMtv9dMMbJk3nTpWuRBNLxxM46RBWpM1rzSKg",
  "key7": "LBb5JMuh8kFZuWdet4fjepGJbbHFSTgxfVrW99c3pm7dUayER5UH2hRKpjqnYz2gJAErqG4bkY8kH7EP4ErddJH",
  "key8": "WFR4Uj7y8rsojr2mEMmmLfGscWMtMeKhqKQHjgFaE7MY4Hkiw7Ujhn5A4NzEMRbxQbya5nvd1z6H6i33NpjqWXS",
  "key9": "iUTwzZySLPG3A29ycWdbknhVFkju8EjDYwmMNodfGEgvSPtXtYJts53B7jvdDyN6hWAjxhh6UNHUdh2ddXqe5iB",
  "key10": "5Ukssxd81npex6LYU6iVCQzGKGMgpeZ7jYjU5QvgKixoVnVS78D32snwopcLqrEPk2bfjxg3d3hydaTXysb5abWN",
  "key11": "27jSmqqdP1zTBJoxTKhsLKvbY1uvSPihPuX7Wkxo4piQ5H9oCkKT78jcqA7XamwWfuBHWrzGGEES5zhePkgkVTch",
  "key12": "3fLrN4HbUQKfrTUwzq2tmVFSSXVDTMJRHrqwAeoSBpwVU1Jgc3KMpxQgTwKHP3h28dKzGVk5yYctSRkfck9gpg2N",
  "key13": "eknsvhbLsu7CJmKufDCYPz18SHB3HLK8jyKZcQnSpSora4XrbsmGG2TmQF9mtnXSo4vMhqbSAGegdjVA2qYd3ty",
  "key14": "5bZVmD9PPMmanLTRCV1jHy1aFhdX5oMW2fkRYke21AoALK4TqBLN5mYidEXphcV435tkavhV6AZi6CofPyBqJ5iW",
  "key15": "4FLd7UF1WaT6F5rBueKNC73DSueTVZ8zQMLJkWLTJea3AbXHiy369YVakqbeCGaiJGgkExv2CobEQ5SCiTZnvJA6",
  "key16": "5VFCGY3UZdEzHvVATudG34NHcYh9pVG3LEJzziKLzAN6GVa8kcfrJ5fz6PhDR5AhKZQKC6SJ1WW4qw5hVrTro6Uc",
  "key17": "2JquaF7h5cHpMkz1k8Tf7SzgXmDowgnfYXQbrXp2nUZiNfmUPxPzjmiBg9brHeX6nBF4K765vqVYboa2HunCtG92",
  "key18": "GpkHmoWMSi3HMYNhzgtLgydWGRvKxvCKD3ppBnGCwrGXzq9KFmhZ8XY7mE7JfyPJez27p1wdEzJ39CNt5zNLwxp",
  "key19": "36aJx6j8DvHutk94eAgojsC95Bz8UyHoZLQ2CzjBS2hX3v5JXmncvJcTfstgmDQdaqPjYozsP8LUoAA4gqSeAJSa",
  "key20": "3WRosD2wm8ojG8xRk9VWS2zKpHLHx4h8E1ZKXkis1hk6X9GgQaVYoeKuwgPPHYsEy7ECvF8BwyDVwngppW8PtT6M",
  "key21": "5CL5KYopupWSkujs5J4TLcX1rojj7Pm9sdoT42i5waRXTSfxnY1kwhnVR4gjisbNjUaasgojnE785vTaovdnBFg6",
  "key22": "5k3GvpUJiVDBJAgEpdZg9iuwaDmQ4Q77xdJa91wwLuGbqMa8yHSzp6JadzvPQzKve2ob6KQvdSSPNPUucpjk3YkN",
  "key23": "2JGwcc2VYhhGGvX2SjdYSh8od9VtZc1wAQmieWuEYZeFBUFLM7cb2B7Ai755X3ACqdPKzbR3MBRZ44pCPEjgY83h",
  "key24": "cyV9LrJMKQ4KAGoozjg4fuAjxfRNQDtjQCzEmoEMZKxeqUW15d6GzYeqoPEA9mNdepqrTNERwqikPE3BfXUB7wF",
  "key25": "28NW4hueuxo1kfR8yzpsNGXT8Pprwkwjsw9XPxVaR5mfzdKZZgP3rQGqs1u92JVTn1GeUUahmHFDqUgzLXMs266f",
  "key26": "3jV5px83oA7DytCp3egscrqbnTpMnX72ANL49pouHwggxMGv2nqsS9b6oZR8g4PASCrmSgTRGjAQpjAWeGxLFZfV"
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
