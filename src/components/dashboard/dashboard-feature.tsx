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
    "NYSVp8kf3a7MPpy4nk6wdeFV1gP9U3ET2kqx9i8Ubv9v1gBi56SwhmxrxJ65xmLyqqQfFN1W7WAMDCPpTgrmpSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MXN6AeDXydTDY9tS57S5kU9ERkF4mxiMnbQVEPYyd1GAh65QY6BxP6MJqLKa7YhZjrcvqrTfUn9TYRoB3u2bBY3",
  "key1": "3LTpDX1cBvsh7XfiTnsEi85ETsQwCkMAzLw5dKXUA5eFZaVKDDyt5sRWX5dWxq1Ct1zQWDPTphhCV1ovuAoBimf9",
  "key2": "4FA9ZdfQUAe9hiHAtFABZfjBZ75813qPgpdWSYbnyVJbcXpjMJPcES2XsjvZnqA3PZDkR6NE6L5EU2cmkSdyoRNi",
  "key3": "2J2xfYjAvSbm3ejurDqEz2B75QUqtwZ5mQwrYL3JcUsfn9pERq6Ewo7ruR76qkwFSDEg4V4aXuxXamZ1Ns6zYNAH",
  "key4": "4nQk6LY3SjozKJ3UByPwJtLDhMXvevn3QRUgipwWr5EeQvkK1QFC9YLUDwRac5G9h1ys1HefEhzMRM6wxpG5TZUk",
  "key5": "huXxDsqLVw4rx7aiHHDQU8Fr72nwAzrwnFBAKjCEDkhspUCSri9ErJHP7PMUHvqBCoAerF5S3vtt8KnvbhUiGYT",
  "key6": "5FAJ6HbaRnKpcFejYEYBgHa5DhSMFX9ewiifoCrkSJGFXSNiHzgS6rW4NUyRTneWsNBv6nt4p3NStuKYDDu4aDZT",
  "key7": "4MA4FvoopyVvYXuo3KvJEYHi5bXwgyTByiBGj6xMrKepns6ZmzvbxvdsAKhonNQQNy7r9rCy5dDbVUgqr4W7qWAJ",
  "key8": "4FmdGCZR45RxSmEC9441NhVqPahzYs84QR6eca95iDZWYWW9FqQ7N6BK7KRxtKkaUzbPoZAACMro2p5n2h8FJy4",
  "key9": "4acuiAK2b9YdppE2RyLKpdLKWjotJMG1QyDvwGcxxwuvqGKUhov2rjYrYvR9cZtQQseMvopEt1TVJW7JrXTwPRT5",
  "key10": "4eTZiPGumiw5cnkd4gDJBvsiYYJ6z35EUCkWvhfLvUr3bfw5jtjde1ADPt7AStx4fzyBYa2VkPNqUiKmPsdfKcXX",
  "key11": "5czuDwk1LEcyP7AsdaSP3mxqjkCMVZBdZir7niQRJFdXYABoDKxbQipN2ExU3m69ezVvEBoFgydPEMmyrDQ9V5tN",
  "key12": "5zPkFU6mo74CAStZkwQTB3qgZVbko9YoGrzRaa9TEBZX4HYE5gyhjJ2qLxJi5RCD9GiLcRn39rSNezmKYtqELcUq",
  "key13": "4B9ssJmtpPPnWomxkVSuHAEPGERUpD6hwYZ2JgHF47ukXUEAz33smeZkL5qMutNHGLAJisbKnbAkVEbVWBdf5Jfz",
  "key14": "MSyhTmxYtpATaV3wmrcet469nFLDXiWg9EvrXEbsSruz4hmognNpS1emf8ST1RpGkmvHY5SeZLb3xcj7ivSNTSi",
  "key15": "3wEHq6GwWCR7JFdsiP3e2hVRMbGhBLnh1wrNfVqLjvpXa25VRNyM2UBLxeezpTmWPkGb1e86ZEDgqDiU5qZPJBqT",
  "key16": "v1xNyATgEbESSmSyVLq9Qju1rjqSApSjzPnL6Lfor3D8cwMxfe4qiVpPk46fUNoeVejWdpXEwabGfCvciQXgNkt",
  "key17": "4U34g9BmUFs99w4G7zNH7vLqTPzvCtwFgqk7F3oGjFZcL84a28dwAzYAdmcpsNE1tYwpwkgvW6jB9vr64gfeGXMa",
  "key18": "4EYtTwgTtbWqjEqFoddLorhidZ7hgzhMdtmvpbXMNu7REfRgXfJXzMJWzPiJTY8Qxfgd3hgRX5nE2kma2SpZEztC",
  "key19": "gdqiSxwJFmfGRNcRxWRc9yYRqX4DmAxbUsaYqXexnuV8AwDP4bu9KisYE7diwT5L6S7U29dwNLTkvM5RKPAt9Br",
  "key20": "NjkPBq2H8cAX4enDXZCVAmdX1PGewRC5yBeiZ39rJLTnDUwsu5XJCsnz57pj9vU7LLEyHAwWYukPJy6D9tGEMAr",
  "key21": "4CRR6dDocQ6wUpdHgkfX6nE26hCyAqp1iN83wMNLo2sR1fNZDqSZR2jZpiSaZuZDNjiQ3Du4FRKwxdVyh3XB9VDZ",
  "key22": "5q74CNXwBc8nPsEC3yxK7AxwodWho7PMMqYgkyYYrHDepfyT1gdeAMA6g1f3Vv7ni5FX9SpHRxNx5TnTUQnRAoJa",
  "key23": "5UD8urST4D21pKL49CZQr8ZWctZkKNEfzUjaMiHmcYJCrPCzDPWAMzjhhJdXVo173sE2wqgF1MRx8MJzyiBiieRr",
  "key24": "dPJ83rMBsHt8jf9pp6MoEFp6So65w3YCRbtzbNuKpaBKXsreGwqiD5XFaqshQqM1DmwejZ7YdGMdE7Mza6ZX1wa",
  "key25": "4oahzEW4MSrbTh9Xe5mi2111QaCCNF7HkPtTV3Zvptii1QKBb13XcoKoTDkmt5U4VCfE4fPJvDhTtZRbG4c1GVF1",
  "key26": "5tSPMueSoTU3XYD9Yijs8vY3PAjicwVit4jvz8hsdwfiMGN1hTASBtFsSrWHMQew4rjwcEfsqmFtAtiwSkMMuCt6",
  "key27": "4974EHsPtxr6cCKNyPHEf8vwttArsqWG4g33NJgBcdrjJteFWjCFVmWdJsmxGLqyywwFFuvCEZRx8ysR19bgLFQv",
  "key28": "4a4TyZMPTCSw2kqUfttTM4YnfDYhKfTnpTFDE8HBDqS631W2fZWEMELLKNbu4WYgkYXjwRseNJnxEhN5WuvFQ3Sj",
  "key29": "2eaCtZzFpsEdeV3KJUCGXQfLXgWyQtQ93oRCnjAt1JynAfEB7szWPMWFVHsY31L8FUPnJ2H4kYzHPq3ruKc3aCik",
  "key30": "25WT79jLWjLjHye397mpPW3SR6fKUbowHagr1wrSiqfN1d2fQSKSpftmPhhtAtau68Gj9KqTBHpke7UDZDYSoaSS",
  "key31": "3isyuosWqdBjPx5S5NQn7cevWcbdPPr9w8qQgXq16s7ms63Xf1au5jvtMF6hLXkxgL7uJFmesUFTPtx3f7YphyYv"
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
