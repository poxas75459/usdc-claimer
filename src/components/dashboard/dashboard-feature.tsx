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
    "KXiUwujNEyNoY7Cj9co56ChmbB4RDnMZsmh1Ym1VBxpjNfHc4cRGaveXVxSCFALmA9jjfGiMHQyi2XrVw3iLtqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21zZqc4vXTnp624KJUAmECzYCMMJVoXnt5wnk6VCs4N3Akeqo5b7d1nYtpKtrErR8yTLx695R53GGPagAKDppN66",
  "key1": "3fBe8fDpztVvQ5vjZf6g5hNeuNn5gdxbhHpJeZLwkZk66KpCQuxhomPVBTvdojPWdAA4Y4REUCeDsnCfDGtRqnkG",
  "key2": "4m97tHENYea1hbSRDGKMbZCfYgJKbjNQutUvNwwxTHeiCV66Gx9yxQHW4RYHPd8Uvu5pGF94ezzUamXyTV6RYess",
  "key3": "mgArEBP86LqY3V6xcTieAY2QP6vtJ8neBZQ1edR4221Zv8Vw7vzXvUtvnHBQQEw7o2bVehxQfZgKFuDqVqRjtC7",
  "key4": "3TGdTtavE5dsqS8aPewHJRD9AmJAiu6RL9q2cM6zaEiBGCHEjYUEpFeej3MCrzmW9PUH5xSPgEHGVbzgNAazPMdy",
  "key5": "5b46gvLdCXViJLzsTfVyTcbSVNJCymoTSeVCi6L1mRn9hhfepSyi8L2yjspMbCWw1LrsKEC9b6iJLh9Jfrk7W7vS",
  "key6": "RTD5jZYtS3R2GuvuXvoQdrWkPdLB3Lv8fpnkEv4aLVdvv8ZLjJBsM4fPVrimMYFd3v3W1skjcdFDfP7umAUbo1x",
  "key7": "58ehZ4npSSMREpEmvtcxy3kf4r79Y44Z9j7ZJoVqRSMap11W4kSYkS68MFsSLtcWwheAnnxHacQqR1cDSrdJcJ5V",
  "key8": "5ohFFpjZNtzyiDiyHPjzcCKG5udHedp6tXkX5zj5R5MVWL6JFnbc9KF5m6j35Q9k4vTDb9YuEFR7RRsW59a8LQkV",
  "key9": "5QkQeyByE9HCuzV8iAPgfevnADXoi4Dm41UACZGDXGXVLBZv7xxpTXyD71hU8PQKw9D25e3E65NHBdCVAjEWsbMZ",
  "key10": "4t8tgTrMHfi9qtkijDonp657CP2wXhmXUvYfALhgcMqMCpWrJrNxHJVRBX2gdVxgX37uLbQF5Th81ezLsP9omDBD",
  "key11": "4mGM6TUrUFDi88wic8CrUxazSSkSwNmRzJLjX3acTJzf9qdXs8JhvduHzX19R1Jq5fEbn1eRXdMLW6F39TiCSCPN",
  "key12": "3R3WTxU81jkfaC3TXpRyHFaPSuhPNAWakZhH8dvKz1sYjU2LWdkFJwERF91MYbneRRvpy9uU4mmYwV6kEJWj6ZvA",
  "key13": "TjAn8fSHUn9YYMAijbtKTF1w8WNR1ZrP9r1pU1sHYP9jqexTjJjwogcfEQv5KREDJnaxNDf4rMe1goQEw6BwA6E",
  "key14": "5ZK2cHArhVmQutRp2Aq1kNWqrNFfPSYzvUCwk8M6bmyZhXW8u2fpXEePSkRbFCyLsf6m2vkiofbC2Qupz2PccHF",
  "key15": "4BKiwuxZdybFREwVdVvt3b5SfvzhBkRuwQriWWdCSuQpb1b9cEhj2EAHXAbaV2eQAj1RtByETMf9dpX8ksGdFf8j",
  "key16": "5QsRtCLafuvEjqg4AExCs1hGysJgWRUReqBtJT5sYERCqTfWdC2kzZdaJ45B8kdUqboBsxcN8WYgNQDNFhc3UoP7",
  "key17": "4WsUvWyu72NqxP8Go2XuJp8c3F33keJhryH5uwK1uWeKkWfzHGQfM3tByahn6MZ9Nkyvh7ydy99ypmjg85mk976k",
  "key18": "2WpoVMwCtZKeBhjcSYAiehmespeypnuaZHDFrmKDY3Qm4mWf2YBPDu27RtfPQ7TEVLBXaW9AHzAR3abnqY1exrao",
  "key19": "2uNyaKTcgmBNwNmmhQnxvXru1nGk4zigg6mnbrwK2MoST2tjQh2UFynqV8TTkhL4Esdv75c4Es2YqUwP3b9ttdyH",
  "key20": "3rtzJEd9SjQxXM29GoAVk63fy8FPkmdbmJhMSpuPNHCiUi1M9ZmBW7G9S6BAeLy5TefZK2cDWgvJVT8aHskCmyvA",
  "key21": "5TLHBDf4SvZqyzmLNHuVQmxjyCqUCinsT3JgN2cJaTmVt8mAfhymdcHZLu5LnHFHPJaJnSrXBgXNJwNrGaDMxK56",
  "key22": "56BkJNVdMfH2KxmApos3vaYLPcUFHvsmwKdkuuLfrepWVBZGSFXWdgF7xmFVAAgfUVeDTwyp7aRn9DvX12E7ka9R",
  "key23": "4CEu4HPzfxFjyMSC6tqSE5EEKhMsZvWdYbKMmuPk2CrWMNf2UFFCyKBQVSz2FhCDqkrxfVLiHQy6CuyV4fSFLujd",
  "key24": "3f5xt4WoU9PzbyV9HtJodLQLR8qujxuDnZiYy2ue98KU4xULorznApmmojwctgSuLbm6gPieFDrxtMtaUtYpn8cJ",
  "key25": "2mVVLqCZgoQkY4Mu6spWrAahZAXs7Qu8V9tgYSs45evBdPjxekYbdWXMk4Fwwq4z4g28D3AEAM956uSJrjiL9etF",
  "key26": "4L82kp8SKLKMzpGo2rqkiAcWCcZnJ1VwmfA3yAmtbTUoKaeQF7eGyxqQYKDyQSCXY9wKZ9gMjqZheAV2W9ivd7Au",
  "key27": "2ypiwRPmj5Myvxbn3CS3kyngrSWHyzr346j4mg6jQGvCraNGc1UVcFopXXMJAh8vLdJgpWQMrwVsTC1RNMQ4YSbi",
  "key28": "24R6VL6McDAPPpm67vTSVC3KKcmAUs3nX5vfvCjyxTGPTVhEn48HYetzF8y8HaWnQvU2GFNw19GvPDYkpzWwhaH1"
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
