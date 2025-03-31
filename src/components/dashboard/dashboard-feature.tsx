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
    "34xhUQPU5Fe11jcC22efmDuXDPtVUc8rznPWqKRLCPk6TqMRf4zo5Fybh4Gv47HioheMkzkk8w9MAhwDrZpuqR5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DDGocMwWgoTS5irzH4RXPgiTpS1Yt65Br9SEqAq1U4hVJZdgpQE1BqcDN8JBpKZpMvKbCss2e7enTfE5nKg1gtG",
  "key1": "5HahJ8C8pdxdQAjN5nceYCLBWU17HFumX18S9fHiE5qDX3nxZs3NXYZKSPWDgZ6EQsvt3SnWjXQBvi3sZp7jups4",
  "key2": "u13AD2wD2XLXRit7DnWvSp4b1Lbfgmg8Y2CWx2XwENsgbYVuhicBXk1zZuvMKQzrka3EuMbmz4Zh7yP7Uq2RLVd",
  "key3": "5NRtGiUsP3dPZQS4zz4bYpFD7YXrR6ydM3mzeXMxXLiQVArr9YbQK4ANgEbBbDtxtuT6ZuptbnDEHX75V9yHi3Wt",
  "key4": "2gb3Hu34hyZuHMYdSZPF9wZbeSSBgQmbLBpRbyjctHBE9ZrK9JWvADPvC5Ka3sH6VeRcd6j6RjfpWcrGFjPk9yM3",
  "key5": "4x4A1qb6SUdiH7SnQqxpRDgNPuGu6SNAnnEZJdSxoNfzjEov3mGHGnXmvxEoVNYt4z1LYpeuZH5vBZvf8DDVesu7",
  "key6": "2nw7ZZSopPfP4krm8QfczN8k8C9WosKzSHrNCakupXmZbJG15gTtiwrZjS74DXmU8D8F1cVp9cnTJs5xzCMc8amR",
  "key7": "5biWkf9X6XTKPfuiU46bkzdHhynVaWMjD9cyCFjKnzosJBax83h9R8jDaK4EwGyzV5TW64rq6Spro4ieBuPQekxK",
  "key8": "45GKaUS7gzt7ZnaLraiMvGrbRszatQJnyLefQQ2tFAtZ8z43AS7cbCYFZgRhdXVFrYcyNDzBR8WqR2KiJnPNLEup",
  "key9": "3HMuwL4uPPmkLqccdEwR3AFTF72WbpYCyWLdhYEjkh14pXLsFrXPRsgcrHAhPDLRVnqB127LxWJsMcrWxvsZ9PmP",
  "key10": "3R3wG5dcSNtUES5HGQNerzE8WJZjMSxmxfooSbmj66npC3u8jBWiTBgK26MsoopGAPvgqQPE6Jzb4GV1o3vQwehP",
  "key11": "2wyWEdppd14NYSiN9o4qr5VVZxTGPHpmFucvJScMCrZDRnisM4ZQPbzL59dUqwRM7CK7yu6SxLuonxvfUFbDC4ys",
  "key12": "kYqLvqGXsun49BEDGWUVknKcSepJjgup6bTHauJsHFZkYhjrrXeyJEKMwchEAzQPG9kPbxZ9z9D9wnbuVZm3zfr",
  "key13": "4AKPsmM9nKnpLCkcZzsENUecNgt3YSdTGeFjm5rMEKq2QrrgqZ8QnG1XUyWbKzvsbabknJXyjneQXB3dATPjX6qa",
  "key14": "647USTMXwum5473wHEGTC5stL6Dg55s98XYd4EzDpwaFeRv3wf2hGhaamju2YhPcSzG58yWSiD9Mxs3e2f4NeKKW",
  "key15": "5Pd4KcVVWi72UfnAaSxpnxVdTG7RNQTdo9oKCHvE1jHmcirn8f3KWBHkWvBDZDWztZAqUmm5vCADBMM6NxEGDVHR",
  "key16": "66Ey26WDtszqwZGsdBD2PR7Yg6KPahrpyZ28jC7u1UKa3iayENuMvbGLHxoHNf2zNHKTy7AbNKRep6xEAP9rjKTh",
  "key17": "37gtgcPFMc54MrwSevbmT7UXByN8cTzV9XYZLZWSKcmofELivpYVEwtQYiWZp29jf2XTuws6iVPvgTHAKmzr1Fe",
  "key18": "ELyFCCiAVsohTPh2mrGbPAygiQgMb4BBEY64jtFPEqpGbmjAHWCWKBdjKBrXCJj1fFsuF1tri776bnr44wCJGVC",
  "key19": "57AkLhTfof2FxnHJdpYtzjqLqt6X3vP5Nh7JuEeNYqVEkKowvQzMmkyMaZN6aT2LWHkFdm2Kiiday36mn2uGP3ZT",
  "key20": "4saQX9scBE9XAekzUwfxPQRq89NQ2trzTZRP9uVsiboxPsjujRZnEVGq1BiHLw33bVUrT9vP9GskZvZGHBUC6Neu",
  "key21": "4cQ5JxfkLsuUc8UG3PPYK6ASrb6gqHBLiBbY942DdrMZUNiedpAT6B19gX37oHBQCbnBKXEco87rt5UPdUYDqBUk",
  "key22": "2RdLzb2XL2DodGGLdZBqb5dw6CvySAFUc71A8VqZwRSk2i42kUPY2ST7ud7UUC2tEYevw7xDspDoB3XLVrQ8VuhB",
  "key23": "Db8gyLhwJMbx4GLCAXMkKg27sR96d4R2rmU8s28wkbd4ZhoKWtCZrcawLekqnQiErC3JfMZAWLc4PP7WRk9HTS2",
  "key24": "3nkisW3kCqTXpYsk4rT4tLnkj8cXn28K41GSPEFxtoqvnFXoZdqpGDn4MyjLUA8JYZv8wUPNWoiAJjMpjxVipRke",
  "key25": "3wyk4DhGiMVFeSr8HJVk8PTQn5K6qFkEMGcopJKDs5aDufKs8y3hGwX1M5V4vSNQosHMFgycrLPQTrH86xTcvrW3"
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
