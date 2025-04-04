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
    "4icAu6nm1RjZ6LXmcaUZqUPPcKCsGyfEULbebdZaepemoEEafC7eQbCFB6xfVMgAf7YUWK5MwLwHenc4T2gYfjuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ar51jLCnZoNYnNMBQnzAisE6pJTCpLsjnSM6PaZPr6LvCSCQGZFubAFqBPUs6YeRpynnigS3A4WQW4j5zp5a8Qd",
  "key1": "3ZtaGVKk4a1PaifPdZ6aZVvj4QsFtJYoAXGtUo3X4WLGWStSBt7WY2sFb6MEs6v4VGoM9tqaesUwaNMgTByEBbSq",
  "key2": "3q84CWktE2tWajUUaoPUys3i1DYsNpP3Tsb6AbTM8wFinjLC6q5cw7ArzgUkEso3S1MTQ4s9wKHfoXMxBjkHiYk8",
  "key3": "4cRnUjXBHKDwsP9hhVAGGfDVn9yGy4VjKgtxKJhyaxnJns1VFzfvwMWt8MAt2Sop9J4nTzMAqmRiHeLMV29WGTbk",
  "key4": "2vAeZSkivJ8z6y5juZF6JLt4kiFdwVofJcshx8HwbAS8S7tFndAETBZCTHoLKiqUCbrNKqiPFS69ZuS4YjDZ8rNn",
  "key5": "3pVR6GMUpS1icoJEXPX1Fo74DJLE4jJbEtsyri61SzD4UJmLC6q85TL128noFxakRH647ok5Q3Xb9aMZvZam6q67",
  "key6": "22DG6raZ7A14vxM53hXSBWwuTMQFuE2vd1HWJmSns9iH3Vi2gj1AknC4DYDJrgTFTTCRgwdDY2zZqdrtE3u4fuCg",
  "key7": "2agkcqykTg146RheToB8hRz3X6hMS8iNCs8KwnmNi9H8CBvzWAFMxvBnkoJjTGcPug3T5XpJzFUURGMKkJyRac16",
  "key8": "thhoonD88ShCYL7dtNbNBZFkwPHQ77qWLBp2zUjqErFxnTfXKEPDkqbDcDksDm1smCJLdUvaUFMsxJVJNNktqfp",
  "key9": "34PemMbtgpRzF1DCZB1VVEa4sC6KKCW11NfLvUdxvwuVfdvoVZ2U8zESPT7c3TTdJcNQ5YxEXCRg1zJnL9tdPBJS",
  "key10": "5CKsMixPQbNpjsRDn8LfpvgGVrHyWjcPkDndcnNa7c1oKY5S1rZXwsxPBZv3uGdJU7en8eW5ssnosqErtrP97RXd",
  "key11": "27oYs8qgVqA8PAwoNhgWQ9aSjeeUddu5HJZJB3S6MoLaBtDCZiv7ZpmS9pc7TquYE8SnHuRSuZi7jLUSnn4btYF1",
  "key12": "3RH3Rx2hnaCZuvT9G7f4rdpWvyBoTu4HMn7nQiXaLsYenHcYPQpv6363kSNf5sq4XhL3xn78fugbyohd6WiVC56d",
  "key13": "46o4ik5xGcMi7Pra2qiXp1raQuGwDmzqDRdHTcSZvLZkS8kFfA51VehqRoA3PEnJxhbYD5XYH1uz7QqdTJnj9epw",
  "key14": "5JwRe8q3DKnm6Nwi776zCDFAQDLuEBk1K5VqziqXvknKw6KLU264DK4niWEFDGBNzJBDLDeB4oTyRDtqVA77mPhz",
  "key15": "3yJgh3nEhBwSAK6JAyAEPapJL71jWaDtPBpX8Ef5rGVVpmtXvYCJPMjdp3X6y2ypiLzdJ4X4hW3Vjvw3PFufzsD1",
  "key16": "5HctPdaRQHKyqy2TWHg2D7HmjtHXiDPK3q3qe7TaSEJThQHz99gNvn3jXvgy9Ek5iMQHPaz7tNENUcVsyE7kpgZo",
  "key17": "3366DXVuWAeiGZwmB9webzSm4iAaVbdvjx8MptSvjSXWQKkWUS3Z4k3YMnNKLJdWG2rrqqsd2YH1zM8s1NPHwqG",
  "key18": "GBDvSSobLiKUNsjHAdwsmP1DXTGUM3HD3XgNCotr9i57GaFhP9Z61acnL4c34etpKuepX79KFK2L9jSwoNqXWW5",
  "key19": "59fJNuGaSqVPEWSPrSvmtirUGUJvdNats4x2379chpWCSq8z3KmvwSfHAWRoqYLkMQUc1h6XZvxvobgAWyjDJGBi",
  "key20": "3dyvVZKFxbD91rQEEHn7Vbpv7bMgwUnBQwFSLU5tfpCNJWfAVqBatfp2MnDZJuJDWWVo7URWYE66PCTuc9wJHm46",
  "key21": "2tmNDchvMaqND4HNSgeW8iumAbZDC3X4qpuvh6nnce9QMS7VB3a2WyaoVHfYkPHr9FY4DE2EUpThg49xP35yJdat",
  "key22": "3AuWYCxs63gV5z8bD2dETkRg9zifiv9BCkRQtHVUdi7WyDvJr7PGjfW3zRceg6ZDs41nVKbM2qH83zRJpqqLB2C",
  "key23": "4m6hCjxtjX7j6GnV38MKcoHvZx7rPjF3KesRR6wR8kD2iiGv7RKgHUcwLdPvuAeUd7WtDPEYTXWgRpULwZbsUeBR",
  "key24": "4w25a7yPAPJYHcLVMvp6t7oKMzUF8VQbnjknFh9jk8XMKGXytghxE6bWoUnoCaYCyY5QAQCfho1bAPzkn6HrdoxC",
  "key25": "2F76eHNb2WAyFfWxGorcpC2QNG4M87GJPagU9GgfYdfcHt2jw3Uxpce9NXbRFR5pXrV8CVg6o1hgjNg9YqRj2Cjo",
  "key26": "2bBFbg935CSP7h4DgEkWvg3YLBu6YLh2WDhvbujesNTMdUNejSEt5aJGP81bbpMdSHbJCA5eskewBM4PmccxKhvf",
  "key27": "2gHvFM8zdJBSa422mbbZXMhDBWNrBDShH7vyVQz8315SyYfJJT66Pb15h9AtkpL39MAEDuk3dymYMa78w86zmj71",
  "key28": "fJvpqm1sqYKjpHCur3rbvUVFRejDoTNSof2LyhMF8aXjPjiWZ9ffzzQfNL3DHjuxGaAwhGpH7GQH8W6n1nfQGoE",
  "key29": "2VoG5TGSx4M6Tz1W4kaAG7tNtX9NeZAitvoXMhQGDkQvvi3FyzS3hBLGgWezVWoYHBoygnbmDJawb1stfb2J9aA6",
  "key30": "5rFuRbrCpbG8927zAYfY5YHJW8a1hTnb1YHH8gHXgf7hT1f1ndecra63N7G2E15p8w4XZq4YgPfjeMnZBtAbJkU1",
  "key31": "3C4rRgtbB7CwW2Ex1iUC5PSSmVyVUKdWo8LY3UQ2SHuWaqz8yT1wFdeT5nzmQC49dYuXLtFBoJ8qVwMpUkpiCFES"
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
