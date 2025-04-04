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
    "2b9RALfFat8QxS7nen9gy23YkGvxBE8rK5YbmiQaSmBfuJCnsEUFnTztmknQr1nwCzCAZwm5fhezRfUMgWt51qXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EUmrdBRD8Y7QEdcPw3qaaV8i8qddnGjA4djLgTyGURPuv4CdrokS756UpvVm1XXo4b2Cj4cEmzaGk6iCJauTRas",
  "key1": "rjphnSs51DHcHP2G67K8a8eZs3DQkJpMvfFnRoQHEraiRMA4ZY6vaBxzofUWDE18cgZYebxPthqJqPToSNSK3tK",
  "key2": "2UwDQMVqmqkVzSSRLM39F73RyxVGMt6UStqdmHqEtUm2ZsEiW8nS3wrZhCUPZyt4yJRRh8R3mXH7xhgc13kq8uHm",
  "key3": "5TP9UWTwhM7veYYeTTsmjQqpwitpaCjAtW3Uftw7sWGBdE3FbD18iDDgxX3dMJhyvkTe4FGvGyuxf3jEFfyebs1x",
  "key4": "4f3xKh8yHdpzQcUhzmzY2B2hsecL9yG1xfhSFp2BNsTJwSUjbG37oyCFbSmzpgwYPpGdgTTNMVr6AXXunu7tLGFp",
  "key5": "3E3aVtXriJwnMwGGN3DCEEPM9uSXK7xxxyyU9PZeM7EqByakqcgmRXadHsnuQ4x23VPWWvug5cMVDQXQM8v5Qye1",
  "key6": "2GQvTRUWP9mWNnDYtZCNYmSqz1zQQDshAh2i1XKrabrfgGgPKMfhA8p69UdFxAK1ryd9nVvkyKp1Liz54UxLWkz1",
  "key7": "5ufxqTvwpakZsuryHxTpb13tcq8MWzXWexYkeXp5piHyw1nJeC9a2QmoSWCnMJewrjdHyRBRYqAAMfEkQ4JGHm1K",
  "key8": "5Q7AUvgWNEqYhRo4TnSSJoLpLZ2XJyi6nqRNwUmtJ5aL6U9q7BEJr4jm3YzKMfWN1PayvPqpfEqYGuDvQDsajLSc",
  "key9": "2zhiSeoG1wVVfxk95xar4hCxKZGWuTVUv9rzqdSMyyJpLJeM9yQw4y36iDwKLhfGahAbdsm9wGf9GaWTdTvPtpkc",
  "key10": "2hVwJFLHYkVvVin3AXD1euAMztxJ1dRttfsxd1KMn8fSRARXeSCfDYrqc2ubnNj5azSn8Q8UrejHfWZAjKzkaqb2",
  "key11": "5UEn2T22vpMwEj75gmtazMfNdLKkUtTK9tV8YPtTERFr8KvK8DQt4ksQTz5JdXT5PFAtxjBZbt98z142d3ff8d8e",
  "key12": "32G6XUJsFiPcwpnZnPdPzXUJYrv79KtC3whfVJ1iybef8XXbSh6Aga3grKAHJi8gpVm4RqrtoKMiFe9WPFjYfaM5",
  "key13": "5yd7bxJMdtDrA5CPRMT3pHBJvsg5HKsUMCzhx1RinDxcvSKNrDAi1VbK1N21jotBEoApcGwFk83YeuhESh5LyDPh",
  "key14": "4TJBJRAQT48YE89y1j7KCJc5QAthXbuXH1doyEdrcqvHXjngC4k5Rhi3sknwWh7UWuHgG3KL5Dv8FLU6BCsBxMQv",
  "key15": "2friM1jiamrUchkch1S8L4rtiLSPgNVhRQXkkuXHqSjWkQ8DKNXvckXQjvpUDHnG7okrjUNNpap1Zqqkfg8gWCUf",
  "key16": "3GaAqGPHnt66Ni38yuukBemwwaeDSDWDz8FoEAnptwiaFSy13axZDfB1cs29X38TpNNP6ftXscJ7j2hwhobStB9i",
  "key17": "3sVWdQdG8TToAzbNtJfTMLWUWwB95WnzYHZRNmxJGMCRjZMqRAicUH9bVuCfbbSLpJAaSnHVmvvXCHKHuthBpr4H",
  "key18": "dtwWGkGbwBogQ44VZsfzfhtEqBnXHmUuxJEdEU4okGm18HiPwJiSvh8AesuV2wz4ULidS7t5RTAgEm8xxYbk9tF",
  "key19": "2NNGBib7joFJrXuF6upGPdMbhi1wonyRKKwApj2uf66GeWAYJ8RUXvMWWiCb5GgL13KXNLvCQvPsUA2CR53uqR9K",
  "key20": "3tkhf7jy3GtT581VFwe3UZEWxiDYBRHLVuEbrtLEZDfEwxBd2B9zsqp2k11UASdwQRXz9wb2p5fhAHSpR2SZqRry",
  "key21": "4msQF1oM642wMpnWGHoKFXjMhxBvMEiQJ7QWMPoVq1W5wDjPTFzSUgbqcASESt3qCgivMMzTY96EhDovou6tfYuJ",
  "key22": "55Qd9HViYi646ePfKVYQVUUDR4T8H8VXX8jUXJtyEB3jSvA8nuMXWzV7nsw43BCL2eVGNrcRggmiXBaXq1zZRu7V",
  "key23": "5mMLmbuPVP48dsMYxkvm1Z4AuM6czxXKvTPVPudYLVbpcLzazmQtSn44yExYTuREjtR7PcFah1AJNBsyj5ajQjqJ",
  "key24": "5x5DeUx8zMqFhQMc55DVGSZ3aSSFjBnQ6NC4Zy7dWvvw4jKrtRAQHB98LUiQaigq4cMByTaXkP7Mi7Ds3K3drmK5",
  "key25": "3E3UMEeomNPXbtKsJoYtUKQ2y8Xjv7sN1PmJJ78Cc4DSE4QQpyYWLmE7cYhk8KoGN9TFAJDf1oJFrnvuJcLAtozd",
  "key26": "3JWzJbYPrAkS2Vn5TdmPbPRsMWoUJ8wb3X4yxoA35qD7FRvewBogvAWQswJoErDACQ71ogyrdiJ23LBeZGDK8eBQ",
  "key27": "CgmGbpf9vwR5SD5zckKUJBbQSAgjvCgUoLdHPZ6UrBZi39xF1tDesA7vGhXY5pBSFFJb44TxhrWsvhEdAHoQfgS",
  "key28": "5x9K3Lt4nHfmM8JbZgDzxJjbeaWZWbYDHANfDa7ArWcM7rapLhrzaRYCMGhKZ7J54EzsrmtH9Tb5rfoCg57GgqGj",
  "key29": "8YomKSWvqi9EPkVptjFiKhguoBHppqJGbSsCuweaqA3tKDx2Ru3uqW1AaaW1BQinBiwC3v9nSes8XRmBnrVUogn",
  "key30": "33yHFqCtP9iXoevKE5Z13AwhR8MqVgMvc2DXbfADb1S7E7MQF92UVkxBsfvg7Fj4eEikdKhcsWFsJz9QjfQ7uqER",
  "key31": "4qsmZWZjS1mLoynzy8p9HXXUCsDQqJ1xtMwuegfNCYJGsoN5ir89HGqDMhwEWay8XbxUE35R3PmE2W97YU7TZz3P"
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
