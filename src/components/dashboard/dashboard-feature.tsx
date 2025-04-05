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
    "5GuoVY9QshazLJnFR97crRqUe43bgE9t7ZERzqiCmE7SV9DPRmFkenJi7K9KJQGzZFfVypZybQzvmnkjrCShxiuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L5px7UzTf8niGiuVZkEQKeCZdKDqf7JWk2zwZECsxVTdUrJnt4HWr2gWQnzfbt5yb8HeBUB8oZ87DYLVYk43fLy",
  "key1": "f7FCRXu6Y1eH7YWez9VDLeTa1fp31G153BAnbEiGbA7mLrGQiJQi2LQQKF9X3mMLJHuNGtNPu2EYzXAFSBwpQuR",
  "key2": "4UATf4x8ECrVcBkN1HVow6QKwtokGWRnkE7q9oPGEo5xkmUyS8XkWkX3LXZK2R81SY3hn296MGVH6cqUL7Kn3Moa",
  "key3": "3jpnUEtfvrerzszXm1LyhgdEon9XhHpBZkMUatb29MCWtKnji2ANbDkkSaGahJaCMVGceZJKYvKfe7GpspoNTvfA",
  "key4": "4HFLtMGKmKLGmxNNQNZtxX2qdU7kaTvNezmbbRBKdPVFfcpMKYgBWRJ7oFxtt9ZEfWYhbRWnj8obygWdTxgNhrTP",
  "key5": "MHUiUQ93hKuZccjoxeqEeJB6mTbakxxCqbu4AQv9sndSkjKcMb2Q9eVJbSPaquwx85gdDPESaayZ7DbovWMHs3g",
  "key6": "2u7Jhwa7N5KUGTfcngZxeKFe3dEAxxvVhfTieN6FNxuhHZ3NMFj5ACUbgH2VW9AqL4x99L7UCdhEaBYiDktpK2FG",
  "key7": "3m3zxpBLbhXJsrUYmJyt1rYHwwYPv2s7uYTmEfkpGyqYtWtBX1hi5wRmMgw8s5H3iGzVpRXKib5fGKYTAxDDEZEw",
  "key8": "2aVSDa8jmz4vis43mEJs3gZ3tCS9D4Q3iaY5VeRjGT78TUhSz1XBx8DFsTYELemBwahkZDJhfLWtwBTDkTkebML7",
  "key9": "596YSzooXWdgxHN5eUKfQuLeNHnbhWzhSmYaVnskPDYu3UZnPditrM988PbiACgjitduBkfYrns9X2P9vfBRke56",
  "key10": "3yQjJ9pvY83vpfAZvakQrR3XXWryU8C9svGCYKTwh6jBgBK6znbVAx9GoAKFhjdAoyX9V5FMimig2XQFdSRq73j6",
  "key11": "5w3yEpJzCkU5UcCyydxk72MbyYJTj9rmcbYzVDueDjVt1THHWezVjAVSektsGcatLKkRehpBJT7HSDTbCawQ8KNk",
  "key12": "Ut3vpWmMrq96sZJUNi8cSvHp4LBaBKPfLZFxvH3hbth4XVEaiKJYn3dqdnE52QTTA7WGeJFaMk8kcQLfP6aaUBN",
  "key13": "4JLZ3EfHUddSako2SU9cqk7FJocc8Tmtdv3EvvjfVj5zAJ86p2iMW6fA3U3fAT8wGTJiFrTDAbD4oJyMGr7HAZ4X",
  "key14": "FdKdEsZgQ4XbzKf8sJoDbzsEAkLaSgfx1RVcSwpCDePbb3jGxtxd5vA5GkcM8UbwgfqQRgW9dCXJGKDdSKEh5am",
  "key15": "A487up4SmAXLzRyyKCmjHnEQthsKnhExuChXAhirzroG7YaWwNf97nSyFrwe4Bt2w6EkmyCMog4KaHMseEj3dwn",
  "key16": "63tgx47mN8BnfU19SieanHCc6UG7nZZavMzpJsMe7rXdbPE7NKGjF1cnqRBX3oGFrbZbbh17NAJQtFgyytkAbqyc",
  "key17": "5d2SwZfE7L3W3DeMQmB6rcNh3EKNn4fzTBLD2eSGLRb99Kai9Zxq55xDi4yLhUo5YwcZHUG11z7VbrQPdk1umUvc",
  "key18": "g3TnXCcErWkH7dNdMJumN3ks5npjzUv2v4JCRNf8sPdXdR7bQbLsnd2ThL8BQjwThrVzg8ztv6wEYxboaoCBNRR",
  "key19": "38rXdedJBpLDUsf1gxhV5F8UneExzSDjqw3FGXoENdUAZyxbmxWJW4CEyuyawok3Pz4HiVTztaHnTGGfkGDpc71S",
  "key20": "2ZaJTV1U7n3o7a7oeBf22ZEYrAporiG3D7o2wR3SsiUw3rRkRjoSxBQZpuxhzwMEfCRMSJ2rQho5E3uvEQNDTW82",
  "key21": "ifwrmjybrjeRrbUw8ZnLETf3uutWCdXZpHhmRr8VNUYBnEzo9QACqDaM1ufp5KrjsqjiwePRYLse5tUokaGjmwA",
  "key22": "27X2guffTMXmNWvDYVAtsKwU4tfrksH5zuvR1vBgozc2mzvLvyoQbtSW9uh9w4KVK3QL44Lj9AYTNVB6fmkaL7mF",
  "key23": "fG3EHnizHtiA5TRLNyFdV1pS9vnWExoAJGTcU463hzKCM5CSvKqCVEc3xRq2Pef67J7cs6qhMNYYC68LuAZMEH1",
  "key24": "4qZAuNXf5baTdBiACV4mAWq7GzT9RLWCkymARp5qycYBCuDrsqvH7cVgqejuXPpZ84sdRtCPr1kPj3KiKWKbB42x",
  "key25": "jLsVdQnNdTn2riigkVvZ8ZmBJ2GN8LNTJjQHQnW23GfbMZ1ogEWf3B8mdFavL3vPKn96aopnFYVSX2aYd2innu5",
  "key26": "3369XLKDtwo3Ao3fRkzZFYs6xtcXisYooqzTasAcE26SK3Md9PPHuq39Trc42QQXbx859YGnFW34za59HX15Pmor",
  "key27": "KJDHg91stvckAhe9bZHRDXfDBjQFwaUGSWuhCXB1jrmxXwCriR2GGqQCspqrkBKbAmx91sF6VsbNbrcmfckAQS1",
  "key28": "5KFhpJoKPWZnt8ctUsDNix7aYehYTJf72PTjAXAGkkNGkbrZcUJnsGG6AfGL28tBFsWMTmYqY2fqkSttjKUu9hGv",
  "key29": "PNpbqFvbTaqcVi1BhcMJcobioPFRu9cMtNz4J6DybdPsPD3YRVgq6bBWzydRrpZfKD7GWi5AWQkhDsWorAhCsrm"
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
