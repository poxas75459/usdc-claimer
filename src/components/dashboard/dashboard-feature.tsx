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
    "5Zs2AZEygFBHRP3GjUnJgt59W45EACWMMHttEmzqWDReqzoYJreei4MnB5Q4QchbY3NYLp8uuDbrTcedKHNh9Gnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uk8gR3u3KHaMAY3T26iqA3iyxS8u6zbZZFoazkxXjsuYZSRMTQ7TfGpKSbEzNCnB8nEYFN8sEj4vERyFpg1aPLY",
  "key1": "4PQyY8Dt89f6gMw5jiheGKA3tdeNwpWjpgYMFaGFwPXkzVSFquSynewxUPjLMutNuioxkPABuABbMopiYuYVMLaV",
  "key2": "pTPTbTiUp2nHjNYdXVEqLehQPCFR9HB2QDs7jV5Q4MZmC9n3oPDQ2cdNpiHMyoz6yrZQTdThXUejPxGTGS4eFYX",
  "key3": "5W8GfN4U6ne4ZeY9hfzdUALfaMKBcQYJ8T1pno4ufmErVJKtZ3H5ApFpXKTbcWpCayVSoJbqNhpg7b5ujyLcy5zi",
  "key4": "2YS8BLLrmTaDpWk6hLNonnvYAxifcJ2yqtAw9S29jcC6hwFqgDuADgX9yjvG8Y7pAkbeT78LyXG7hjuVEf9GLA8x",
  "key5": "5B3tFQpxvKhVbmidh8tW7KLuNUwzdyPvqhwMwWqcWmY1Dgrb4zuouC4fXaWvFdCiP4HSDjgZwrEgE5Yf7Xt5xM69",
  "key6": "4JsFmbxPYaEzh5TvVXrLDfyb1XNu1fzypjLDAjxrrH8eW9QGUsVrtfmjp4vWAvq8NusrGdgX7aHdRtremzTQt13Q",
  "key7": "3GUWPARXHcGeugqzq7H7PYGm6JDTfAFeWezto8bb4WJTFwQ7fy8YUCidGyyiYr5fnfo9WZVNcwy98sA5BSzbe2p9",
  "key8": "Koe26gyk5DPkdqbTYm1ZLbW3i3FE9fkZG65fBgSUQjqJjogcCN5umZRHbqnzZfDL6pftfPWTbRKyoYKRRdjypHn",
  "key9": "DDfVrfioHHpC2XLcp1SSHsiHYdNv3nyxj3KNATyGYZH7dq6ExtHHEE1neadvfCWvKb2G79j3pk1L87LBHSogis7",
  "key10": "3q3KZQP6hJ58n2DZ58f3iN4kp29mQ6kwPP1Fc2VE3Auchho7t9qMfAcPPJ4npJD2BSPgjnj36cz2xdXbvt1uooTw",
  "key11": "5xAbiHyMuPhY4tUABrLTu3EUeLUcD5dmpvDjgtwDrWauRFw8yAdnjkdxtbdQJdagwYwXkCqrWQanY8XdtdwEHPCu",
  "key12": "4t5wTeeri64MUwoQFw6r9eA9ybtUM4kRGM9BTtrksFPM2zVgHJ5nbRYyQ16RUVYsSr2bjwAa3dkKadUp2sL4MkV3",
  "key13": "5JFkDVLwc6xy8853VCx2q4auioQBNUggvZCTPsZrm3LW2mkCeU5TgqYkbYgMwGX3QJArLwEJUMocrstAsGo25YVs",
  "key14": "5NVK3CaMqg1Pt73WUxW2sfavJVCkx5AjgXSjJLTNrGHX7RmyQyhou9nwYB5zZXySXdGCBHH3eDAR8GzRPuQhENne",
  "key15": "XpGUL1L3BpWBX6dZsoNSpY97UaYYEP1qErMWGFGYdTrRVBQ4ufpa7mTn47rcrV9kVFzfCSHPDdBSwrELXgYz3uh",
  "key16": "4vLvJeyPuDD4mh232MJyUZjRKrXrzg5DoeAYHBWyAcx9X8pf6s6W44ceHtthuXjxMDvGrLD57tvgA11C24Cc3iPd",
  "key17": "b1tr654HQdnmiXruqf7GCXKY4ubiwCDzdqC8CVXqn2mmvGu8BQZpZ8oVmiehLE7m9dWdCHSej45GMNY7jjDBsox",
  "key18": "5x9S6XxkCNteZGtYYa7ENENvPysEDc2DgfPbqwfhEkZStFPoVkd7z1WiXvqiro477uuxuv5gxACPcGWYkixAed3V",
  "key19": "4yceQ3HwkSsHP1CBrwR983eMSbJEz4aRxQX5937W6GbuwJPEZyDiduQnZBeUjoub4DjVcbXpPQnr5xPJrswxwiwv",
  "key20": "3GtEcF78yxzTNg1fcRXNCrKxV8sfi34DYXQY37eN4Pz1B8GoiwQ8ZQoR4gRsrFnDSouXNtJMFi7zVL6iX4yvdZHd",
  "key21": "HivjZgaRdrWjnBqQeV8Z5FgK7wv5fpV4Bu8p9z7cJTVBphhhv6hwJap7JvGEWfF7rszaT4DVMc4tWvmGuWeBbPb",
  "key22": "FhLod4fj73wXfx7K24hL915tLngSUEvr9psLiuAhijzrcwNicPzryXKeM8kDibgxBVQD4Ckcs9siA4SFRTgaPRx",
  "key23": "nWfRKPhH2PMW5LLFWvdGhN3ijejNRmKrJ4xaGJrm7svpUfZgQwRSZEXjbJD69Eyjxr1RnvpTbCR52FhyEn1tvU7",
  "key24": "2PRqnXBVjGGtMAYrZusTqmk4Xrr3n36S97atVAhzbr813Bnq5PiTPmRuk8mTcLAa5FaSheXzTgs4GDKxUTaByU5i",
  "key25": "3gqbtgMvhm9MEpqkRo1G8DcE7UNvmgyj53Cin9EijwjC2SNhRWZ4b62mZY2cSWvPeFQh3VNCnXCQZJbWZiWG3a1p",
  "key26": "S1LDSyz2YfT5QSMP1XnC7ANE3pJMF6JFihYTU2ymgLkdJYJPDjcKuhUFFqFieWcvdKqRZ7fJotSrDdnXuWDfztA",
  "key27": "2QWREFJqya5z9NL7J2W4gbJ4JMUchPb9F2fy2yG27FGXGwzkkme23wrHPUUESSm1cpfmFPoFX5RVxm7a914ZKJUv",
  "key28": "uswmCpEvpLD8u18Nse29ADDdhNuvhf3fLR6aUPy3f9GLXdZMKGrdnT1Fv4EaH2Xy7oLPhbPPY5gTGdNBksFiN8S",
  "key29": "3b5hDiVGaPemLKJTETHv3H4Pq6YRmLUSN6LxzJb63xJq2oW3Ax5kyU9iJHzdibcBsSQScFdaLeGepsWuEvixBTy",
  "key30": "oZzX6nRBB8MqjMfwmBQWYzYLuP6yZhXGMJxbvhuzvUz86aXcXynZPioH1AifoTjUrqpfXdWQX9jJcCnBYcofBvb",
  "key31": "tjY9CRDhwSuZ4pa8YMXWTCEHyNfEb6heK83NR7xQUHNgJ1amf8wZHbhPf1ZLNiA5uVSrJsNZwcTHMnPSXUEgBcD"
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
