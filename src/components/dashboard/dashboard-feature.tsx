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
    "vEGG1PCYe8PKcLyFwDE3MqtuW7rqkAH894MsuRu4dK9UnXV1vzrnSVJB3knDd9M3aG9xF8nBbLFG1Skwj8sWLLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N42GfgEqTNqnzFLTwR3QJuYPJHNH7cQSmx6czfcZnTECUVrepV4UExY7sdcLtqBYyjVyWDQaVyYV5vtr56kcdbf",
  "key1": "5BK6UWSHJG2VbP4HFBroz3J6QgwkbyMEbyXKVCx4jfTfypMBMZZFEnPFiyGjiyKTGLzgjB5Qkr8h4yN8CkiNmRP7",
  "key2": "23Ypq2mYyuQ7i6fLqidgxJ2sGq7GrQD98niohmZeEDRp5PyybPPv7jSj91jUq5hjGvcM3gFyhDaLyuPk2XLxqzs1",
  "key3": "3x22EDCSLJTT8JvtRNdU8sfSWHCKsgASeuzvYdcdVmxd7ca7ved52B2iGp2UXFFEXBniT6oDdmCkpxuJhENj7mx6",
  "key4": "2DbnQGSY4iJoGGcfJHM8HwtEUb9YB4mvcsjhGmUmYuxAUgipE2t9dVHT2axZxCUuqcqB3kAknjf3S1sjJ6LLwcRw",
  "key5": "T2Y8D1T2oaA1mdmhMj5ebuzi2uSw8iNHtcPdVHuUvuzzowLbzrYB36EYi4rG116RdCESVNEzSjDyXhbbcwzM8cx",
  "key6": "3usEVdt4ngKyAYSd4HS1BBzB9pH5VYAHS7ZMboq7QPp3yCBpstHDNt3RSa4S2usSJkS5VL5dYrVHMvQhkiWqipHR",
  "key7": "2vom92FVH12n3mRY5b5sF8nGmgjaBSNUV2qS6KNKtHVz3S93TEf31Xaf4QTxeR5PWgM3y4zNtcXGUn58u314Puib",
  "key8": "29fjN7jJh8DNFVcmCgkZLJ7rLqG7o5XiehKLn8DxRXggdSPPX8dQDJWT4BkZszNuFQpu5qEQmoxBcbTnSboa1geA",
  "key9": "3okMVyytBuojRxP2WdsNuAy2zbW2rKgXzmxjtmjecQJXrWrYH2z8RxaDGDNVYdM7MLkZLW1ELZFD6JwRF9oDB3zU",
  "key10": "3eAe2tz8exFH18WtpqP6pKrG2f9NsF6qceWYDX8uXBDzEoRBqioQidZ74TsXbD8pyJJn1yxcB2kFCuGLjWxn9eaw",
  "key11": "4D13uqBxL9jQGgbsJCbwQktq7TJ9zhBEp28XTAtMUdxsBYjJH8NCu5idNjAJEDWpBw8ePxdbKR2ie5BCBF8cC6FP",
  "key12": "2VAvkRrL9onxM4zZURdf7oakXdjfVeF6bgiYDBciZh5ccw2X15iZ3zGE2bLyPmT7Yz3SEkKWsvsAsTndXYRWH1Zb",
  "key13": "2ka6ka9dq2iXuoNeN5ujAnE4x5n9xUJ2HypGyiXWHjCWipu1FJ34EEBqeD2jfg93rdQeTyXFg4xvX9zniHPpoDJw",
  "key14": "5C1nrPaPzcnayJ9NCduBn5H7BWj2P5VLvWQUZkbGUXdSdc8X79fX9XQLg2BTECqNJ9Pp4BQmfzMztGCUvoFXU8nQ",
  "key15": "2pqr8B5RopKZgVAJLQMvBMce8MPa6YAYJjNu6Gnbx6YpUdkU4HYapKVsoJCpqXvUcZwct45ZAWjXe8nFCbRFFEht",
  "key16": "4fhX8pUjv69doH29gj61ChZ2thkH2vEfxypUiXGRddAzaULTMZ2nBcfnamuqdN76DmqgTs8BrFLGLRPoQanEwk5v",
  "key17": "5Rqu2QJxgSQcFGorJi3g2Yzk17EnGgS8wrVVBeJcwi5tQNGenk27a5cm43Q1XFCRA7LqDbcRCh3rYyjeCWBpEQYu",
  "key18": "2Bz4H4uWJgxmh9sKm96EUx3riaz3qBoDBNbULYUiaVhzbfXFP9ETrPncYfT1WxyQGaU98MHSACb6k8EFCb3y2p2N",
  "key19": "5uKEMoEm52p8XiMxh51qqF2QhJHP9YP11gRBBjPVkeQF637CFbwdFbx8vYEpLkVV3VudiZSeQ8QX8R79Vvz5mDd6",
  "key20": "2r59YoYKhMN1unhn2Jpb3Dpy29T6jcxqcTHyzaq7adaeyxhrV4Gm6ENSPtzPPmbuYDLNVr3mkvFTcocbhHHrVQMH",
  "key21": "2ykBmQuJK6g73SmwXiRnQthx26snyc9wWLn4VFE176dr7PrVcFMHcyiV6VmYJManPLzDQU3zgLCbEqXjzHYJ5whb",
  "key22": "EEdX8rExphTCeZxshWArT8XosoHNbtQrZW1FejAc6EqFX7hY78pxGXLhu3cYsMq232ZpsW7ggBbi6FirbsXNaM7",
  "key23": "4MAPzFfvNHtLxXofDJUYdAPi8972LKKcn6VpmJb55i84NwjcHjiWEkVzTJFp3xBmR7Cd5Z8k1mZ9gph5GeAaPzDc",
  "key24": "3A8oTKteJHQRcTsYcs2mFqrET6q2XkPQit3T1pSx432nXbU7Z6sG5QUUWmvGPrnGhm4gYeVaqtuAw9x5BSfNHygP",
  "key25": "45DHHMh767ZUAAu5JJqgMB36ABRy44KysdgYNZPaoUGHcSehkSFfpHvDJbfY7to877XnR4YAgWRL3QBfFaag6Gr1"
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
