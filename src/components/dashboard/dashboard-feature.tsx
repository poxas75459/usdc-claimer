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
    "28znhNnmjSo8DRFJXHpbsRnFCnh53FSzkdJqFeZwQMaXJ5diuomqySKrbyc6me9GzF4WwQQg7z4dULz9pKPdEoK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dswijeJw4nNvcEpXTeRKGVna58zYdFaQvENTKFCy7BbPgwmJN9kemsJSrgBDZz5x8VcmQiiSAa8BbrHKo3p7Sev",
  "key1": "5E8Jy4EhgRenv6u6d3Dxx1gPATftwZqjaTogBu6oM2G2jrwRBdsaeWGbzjp7HvHLSMEonSfGtVaJT3yXqjLhUa3k",
  "key2": "65sd62Dy1j1uT2p6AV8aSaZqJ7EBDqHFst3BtrXeUhUjRxB23LPZtRjdJd7wicNmoqYLroLMYFLkHu1UN3MU9AZv",
  "key3": "1WGLjGmeZhE6o8SQkWUMGSLdvHXVHdJNhJ4mK3r31dt7Tqkz3CbS3YisvZMk9mBjBNuEemsvDK2EUDH32PkXvW7",
  "key4": "3Tjzx3kvaX6k2B4L3vmDeGQU2nXMB87BARh6McwaUDPWzbpsfoCDGm6sn59Z8G3FSXBwEgpVzvRp1eerHgG6nAVf",
  "key5": "5U9aVRnJCcvesfwf7QqAdoc4Ycy66CZ2jAMmJqdBB5eFMrag8vrVjg4DGk25kN3owwEd5yUTYRUF483kDzWUFFA6",
  "key6": "5HyH9iw7ETcKZfSQfRiQSdMH1tMsJNkg2r6TXS91tBPd6T9hhawM5PkLzYSNuuYCY6CPnmDETjR6HZAjNfPRGHXk",
  "key7": "sy21Kc9bwgtZSZaXxWLQgZ8wXQ3WEcoVAeW497bceBHsBiE3ATsXZodKdNx9vLjpzZantRU9YekAiuS6BEadhq3",
  "key8": "3AL8Xj2Gzxu1DqTP5Pcjc6qGrsCeVTkb29N44NTABGFWMbULvUzNQJxTcobpiexMF5ywcqVHj6XRagLhyXfcP8c4",
  "key9": "5wzoioEmnvmtaQVEU8tDN5Qx98qvGWLoyaWYb7MxFrHxWtAhQq8HjwL6CTtDQXDuvEqNn7KJvx5NUNPtLLrzPNJP",
  "key10": "5TwBbJKfjsQxvcQD4oP79vSvs9J45FFyD7ZSHBDit1hBjdWh1bfCaSqXDXR72zuitReFmpoMuSXq5iHxbzJJYnNs",
  "key11": "2CdAgN6tpYzPyHCWH5TG7GUcmsJVvxFHVLhrHqHauQiPBkm3T6ZurqGWjg3W3U2xX4NtumDyk6Qjm2Qu7wa2Frvv",
  "key12": "36WyBFbMNqS9YUepgXTncQsjBMt7zn2riwdsFphr9Pk1ZCqk5TqMZ5LL823C1g2s2HEZh35FPvUVFnXQ9aWwDkM1",
  "key13": "4avNqfoHxszaXvJbMnEA33ri9BGjJeNgxyCTkzE1JP2rwDKxVra6XRidD7PpHjTkzMx2B3cStNFnppyg9jx2fd1Q",
  "key14": "2GMaQaZyq4jmYZA7M2bhUzA9RfmS6ftcc2mbRnJXMsJH2cMh6CBCoYEeRLv65U2iyoRfS1hNoiPhGmugQeLkBBRb",
  "key15": "21XBSvKn58VYQZWotwwhz64vLEt54mWdEHSoygVzEhY8TkagM8UBQqxK45KexeMmZPHVjZ1cFMfNctvX7HgvNaF2",
  "key16": "489MrDXepYBpm9jGxxVyuGREKVXG1kYF4yauPsiP6pQA8zuaDUMhzrdxYrYaNyvJkUPndSyWvPMqAcHzP8aqPbGT",
  "key17": "2Z48WE1QnZoa3dwPC3MoKnRXiCSeSHoYHzBXDKS8yVeiqoaQpcmuiE9B3AvDZcGBa66euHANCtfQqz7n1v1cwFjA",
  "key18": "5NVbBYgA979FThpuQ1fBFCfXdC5qspPGcWcRKQtB1136jvAhPKuv7CJVDBdy9M4dVopDDEDZ9b8qudAi6CaXdBBJ",
  "key19": "bqunifgdD5SEJixqF3wtEamVq2Ud8yjkrqR2M7ywxfUyNmgqmyjdLi3sFsxoxWAkzrs4G3KVzKynoLhBQqLHeNV",
  "key20": "2NaxncEZL5v5iezy1C3LNvYb6hQS3au3xYLmB6JwExtfKaK9GPh9nLNxMXfSAfmdQKxSV2Dk1xi6J9wCarn6zCVr",
  "key21": "xVL4MyE7Z5tJJx6w2eMhd7qKHEzzths4ZF6ur9uXRSsqbnm4gduMJZj4xiLH2gihWen4rkJKVG1VbFQNLLhVJsx",
  "key22": "4JbJJgfkgs5vDjhmNSDwfDw4eqpoWZXditZymqCBSKGBzvuTBSwfAuCt5SqdguTJjmT1QyEiKSWJH34ad7nXKnPt",
  "key23": "FdrNNAuTHrqJyr9qhR4ZsjkENXZGLCWfs2LBLYfF667Cfxo3148dqRVMeWvHdeNWc975MZmhSa3Pgg1NgkQ1Av3",
  "key24": "2V23LWa2TbWbFVgAGMpVg8s49XeCKdGiQbzzesHzPH668oZikpquM1LfZiXQpteCHCLEEeSpPoj6ijNyqyo2dMH",
  "key25": "3NLaJGFiZ8ktQvLpy16rTUcwhekuAqartQNKe1XK4dEMB7qomB9BismWxmM5gK7akwKd5PaiFoEyhtgRFS1Hj5NK",
  "key26": "QCHLGCz5UiZ8TRoVj5kPLH5cv3euzuE4X41nHTVYrnpkqYVNkcKb26muywiNqU2j8QF4VFmxtEkesf7KNvoPw5g",
  "key27": "25oUHC3cf2DkkoDSBFn8NsA8GxRhv4gPot5qj1bxN5CzCQnrYf2T2zJZqmos69W6jtJExRfUM84kEoWg5mUoWcnT",
  "key28": "3yKeWbGKAiF4wQLDMasx4Xo7SHW7XXrEdzyKtp4TgqKNcefJ9nnhpJR7PuktjQeQQFevWnE1771HmG4PrPnkVgcg",
  "key29": "4T7ESjXDMfBST219UZL7ShpVRULjHMfRD8Gre4cfdKuT7WwAobH3PQ3vNFcaKQ7nMJYDBkqudNRzK4BVfvPDRbzc",
  "key30": "55YYv7cZiag741DeMPcgihUftjfDN6W7mnhPrcaboXksM3AwQtsSKFqpqtsKkffVKQqThW3pPcfEFo9RNZ6ayXTs",
  "key31": "5zVWBmL9H8xFkn4ztBXTsC27Xsy64ZuNuhMUaUotpUAZYe2uND1mhA5h2SjZXn4VvVaJry8YQr8BmHLapKwiJE9M",
  "key32": "62Cm5X2SVoZwHUsQ6jfy6nSewFhUKMoniYtkTWCTwG6dHodNZVYsvrJxcdCcfSxvYqvGwXFTnQ2JfUGv95pyxAqU"
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
