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
    "4Mg6NEjjuSvXrovp8xVnxbfkDn2cRPneYcQyGE1BRY2aVcBXHdqQ5nt6YPKQVj4T6ieqbrjobgBwrHNRkUHXqaAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p1hNr4EWxfhDbwwo7Uy6RVc3fuX7UWG8zgY3dSSMv3YJgaSQRBYJQuTQhCmrceH43BmLaduHC5JBW1ZA9iufr6m",
  "key1": "57e6EizHTE6gdLCJj2BfgAMoxjT1vx78B5jgBp9ZHnH96haW783r5RnnSGnxS89KFx4G8tddgkdhCgrCCWMef6Mt",
  "key2": "4yxhbwyGd7vCwjH6VeY1wtfp3TfgXH7TA95jTvWHCHiFYKeAw1Cv7V8Z6X3cAM4zctb9rwZSd5gFz7n2EBre5V9a",
  "key3": "3DhV83vhHatsVNdUdzXoCjZpupka16iUxMD6cdbwunoEyeDR3cHPsvEQUrxNZKQDTagKoDJ9Sw3jT6gpnVVZmLAP",
  "key4": "5MhgoBG8fpeTYJArv56MQBYt5ua3KexMozPFd3aZnNEi9hMv2ZNGWr5ZTbUGm1CRZ3fm1HBcAaEpj6f1J1oAhv9r",
  "key5": "umn3dgwvxrschm8rqAR5X5CZFaMiawuSsHpgZmrKTQRNWtsky6KZQjuDMXj3uuqrikmPqhqBWGHzPew9fS4tHtg",
  "key6": "26FNfQRLKqqAnN96Fds7jii2Q1J7trkXC5vbh2wJj9yUKyZE8bo3JDcSFY76zGgVnJGZ2Set6zP4XF89QPRZfC62",
  "key7": "29EEdkHGWP1TD2yFVLggPofoXAiB4aegY4bttV82cK5zwKCcKCq79YGCVFyGmpvYx3L7rmmTvhb9YmMoNE7MUnvW",
  "key8": "5tDhkQ6VYaekvqPnk7KpqdpMJnLni9hsSPXGk3YGgLwaFKvAPVtvZH2B353HxB1wtLaHbZVLxFqWkWuWXq6sxFG",
  "key9": "2AxhVcecUVn2vHZXkHGB2C8XNFzSZctpdi1eEjQRU2eUWVXQXdhB6dfJyCY9tZ6j3HvWJs1dDnnx7Xpt4YFiK4Ev",
  "key10": "3CYaL4dz1pwchtbMryv7eDhqvEVZBtDXkMefx6dgEoQRzps9vFKnofnxWaicjygn3jHN8sRE2korhL4D42XWzajs",
  "key11": "2L9bRwLBj3t3gdYhy6TLzuDK1DsWLVGAQERHFfr6f4gTcaXdfPgQ2mbCSP6jvJsbjWSgCBgxAUqwcPJu4cXJLvm8",
  "key12": "2CbohzjdnxKpaeewtDdNzHkoR4yvzHXaVtdWCumQDFDFiTGS9bg7e8BNAGSU1oYiqV2EFKbcQaNFpEdrVLwCx1NP",
  "key13": "3qwJjkWH8b9dEqBLLjQJdhGgman6EJJ3QGJ3f3fohnHtu5szENiQGBanJa5ah8nVoV4GdhqtRcoposem8qTjSQWm",
  "key14": "yqPNyisUBUZ7bQRfw41Yxr7EY68aKvFMje4rocP2uZosJ4UYFq62qUbGiTRQ6dawoMEvZtfPWEfdvRhdNRy6B9c",
  "key15": "2fmjCjsTHXvRnjAE61tUo8yfgyJbrtqSLUxDQ6APKm4XP7Te4gsogMAxwg6qRhxRtJbV3HMfwWWWAzTUxBB24WcP",
  "key16": "2x77yBeCu8oiJTuAaZC5iUoeGHANifQUsbiwPKBLox4rynd7gTbwg12wf5tM62qF5BHwfcoQU5SQmbJSGvvuc9vm",
  "key17": "2pUoLJpggkZYKkiV2VVBfS7mfxNxa2hEz32ydhrY2bVhrPs3iWNnUnzAQjwRJhMSs51qgFHrBnVN1sf5f26EDEmt",
  "key18": "4MyvncCEpLEkAGL7BvuA57xLJJrT65La5qdba3bqKfx4JenhPNJdFp2NLYaeRoArVAkopDABvBLiUSGXZN3ZsHi8",
  "key19": "4PEPMX2RTyBHRKiEsRc37rXu4WdUFPu6HBrziNe7EecxTCWgEKRQanAoHxTg1JR7gCXzmYMby8nQoNBPuAMdy6zh",
  "key20": "295y8BXwWr83NLb95TAZb3qEYw5xsJTqbyFgziMza1zRZZCwUE7XJiu1UmY3MfooeifNBhAFjHDF3hswjvfNfMeT",
  "key21": "4gdTvV2dPK9Q3rmeMUsPpwMy2fRU15EGydamCyf5fUMAHB4qvfREBmkKQjPAdXLdBeHtzEkbRqu24PYVa9D5y2yc",
  "key22": "4Sv9sJn7fcWCfBFjVcF1Yhf9JNFbRhbbTT2M6duScQtgyJ33BpXcquhKNfbNDcDaT4wT7HJCMCRfGyX2p3KD4Nyp",
  "key23": "2gZ3Ye1kxhNwGZi6uDCMx4i7f4BStd83z6xoF5NarJSFsUTbDoyCsYHDwBSHqbnNMP8qsJj1xuACUpCNRjK897yJ",
  "key24": "34W88Qd6KAfseXeiRfVDcEf5mhBrKKMKEfFDmh3JeXzuhdJrYSERMWjPFBWjPfWiMFDcyiPz7MQZpTBMxCHZt2p9"
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
