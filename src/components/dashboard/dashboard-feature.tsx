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
    "4VkvKvM4mgPW4veEUDTfreM7d9KwS8yavmMpEPRAbMubJxYMYgYQLND6CbT6F2C4KPMYa5xUBxhs3tqzC5bKg6b3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mB8BWCoVFVR75x5z2cVnK2b9Njvgd9XpXCt3t5d4szaqK8aN8jEJwrn2ec7t1cvgBpPE6SZh6FdRiMw4Ws65P1z",
  "key1": "2SekgmvtjmUzhQZsqXSgCcbaJgbgH8XZ2e1o1Vv9onwHDuPwAQEnKJUnuMCeNrQUu6yjEeKFGqNJwMRcoYHosMLr",
  "key2": "3TmhCoQTUtbrVgb71qU3KhwJXJ9SvchpLB7G7tjPnkpa6ykZnLoGDGpfDz4S95RvhBnTJj3axqiwNVWrs2JnWHn",
  "key3": "8ogLXQDvRTMtcDR1YT69ES89DAc1SHX7VDNSZaez65dZRWdyL4nnDhCyo33WyMbQDmq4Gfkz1VXXrs7zf4hFhA3",
  "key4": "4jkfL6fiQCncsrf2cYUm7AKysPjYg1oPkevtupTWVhWyuFRR2u6FtxWnaCpMMoo3e46SfxXhgHd4LE2cNnZxynPK",
  "key5": "5tozbC4mKteZhZxQYepn1gV48xPsvM4hR2yeAVL3q1hvMLtARsEcKrmFKzUfbAUarvXE9FkUWtJ9CNgoDhDq8jz4",
  "key6": "5BUWZDeXpUK67FeashvSoJmd3Lf5b8qSQPKbeaqFVFGEBQFneEGH7SkQxNmcaJ7tV5QB8w2cqFzKbTjjiUV8Qtc7",
  "key7": "5YxYmoJCmRw1RixNFAdaoht5nr9FgsqJcQuixdrHovgFAnUPHjYc1FfwEXS577QLRDQH36rJ6yADEHiDtVwL7ZKf",
  "key8": "36daDjvQU54qcqSH5n6VbXQmJ8wmLQo3sVsGg4gL2joToc2MLapQYn6Fwc3pbuVmRPCyb6Qnkhj8Jtu24coA5CC",
  "key9": "GRWamwYJxAyzi1zYBEBGHuZiRVtk272BKDK2vVVa4g41rfgsKHYskeaT8KXtZKqHUuBAEiFCKMHPwK7aVbzU8ym",
  "key10": "25FVfEwJAp4NxVwcDXhQZ18wCRYf2xRNcmU5dUTgMy1eSC7ErZa9g5CveYPxpBwA8XMi7DuFJ9BLJ5YjijCEAETz",
  "key11": "P6ioa1qyMavfYv4JqdCHaYgb4d8G3TAgTFtZaqFLpeREmeRQXtLK2dnCVHEJ8UTGmA7XJxoney7HshxrwMj3tMS",
  "key12": "2zSpnp4x7qkPm2GAhA8MXz4tXcJGartW1jeMZvzaXiCVZLb5smpVHoKLcc8ep7TEgZxmsXqaBpV5zuPzSDfUDKjT",
  "key13": "2ogN1KkvVuk8vDfKbw9PVmTuwT3dVfBWMMiHHmMRHPEj45gAXQ5BApv5BqyfMZAEptuKWDBWMoeabQNNj5h9AVbJ",
  "key14": "3WjYiYm9j92z5BufGBYMHeMcxrehnaoD8J2nysmrk5GqP69PAYhtdsQ6BJyPAaX2SRrferURxjkbevSNifyecR5e",
  "key15": "5hiUqxijNWLvpvisTUpjhcsw6qbWCFFYro47cUVQ6bKgkgtvYbfuVAutua5UuBV5QYSkqf23wbryJVRs5ygfmgHm",
  "key16": "64FhhGqxiHNDwunrBzbcEhciHCpZSkZkfv9bpXywz3jQ4WoqquC5Vbx4xuCijDUeHpVoJMVTYpaQMQwYSyCZ7NGT",
  "key17": "2YbaVprwoMnKmzajwGMRtKYfPLNwhujLXwM3qKzbP1fxrRTAVpfEWCBKELtqAkZtWyL8SdvZoq2H9XR2FUJ2vuY4",
  "key18": "34ud6B15Vcx6zKMeUfJSZs9v72U6Za9kj9GV6hk2qeXFadAhVzAbkBZSkaE4R2iz3jCYh5tsvzqn1BUu7JsHNf6n",
  "key19": "4NFMgsWruebjV7eekca6BQr4y64LADMkxyfZ1g9MRkytdZYSXSyc4EbqKzespqKs8xUXUg6UzNVyANtKuetYZdpn",
  "key20": "urLGUJcecopBLC4Y8pVEfNMUXDZNqmNRD6Ly1dyQ8ZMcPG9EeDMCDicQoyCj9v7i9yF97VsWYXncBpVsDMgRPNX",
  "key21": "3kSURyUTy9Hb1FEwrM2MyRJ37zCcpuin6Bo81CGNxZkDJoCjkThakeju6yEptSJW95XjEadaVJzTx5J9iWjMGzXF",
  "key22": "4ccYQecGHEMcFwDCGGBThnLXiaVJkpX9XaF5KkTZH9xadLDy6BhvhAobtPGgXHoZnxacwLrndWFzQgybgdpW8ZcU",
  "key23": "2DAuM5XJKt1BGTesEgYtvLYKuteyas5x188jy8gyAbk75Cmp9HwPmk4Rw9SkqXrVeqWWLF4oDJvTa8dAQa2b2qxi",
  "key24": "amQHhE9SvsvYo2sCKUoEH6FBnCqqo7sQBBsfwNukTfJTg3g8Lmrp4h6iRwE2a8ibATLNKpceWFAoWdyT8J8znoL",
  "key25": "5nbvsZ2FpzfHrkMtvDymUKHdH7Uf8WSCVx8C3mQmPJH64BQKTyJPENJ5MdiFuQ4oBFrVnD7d4bNrZSwQjuhnrt5e",
  "key26": "3Wu3oKKbxuBenyef9KzPVrcDvwz1QCawuhFAtiMfXd4nYKsVcGz9fgghBGGY2VXtPBuDruNVkXivV3gjWzgtHF3s",
  "key27": "3MLH2x42uSfKsKymVqQeNP9Qh973xzpwqurs3MYymkMQ6DgdHugzEZaCteBFhehdsgjQUtNiPr1BsiPs8Qu4uuSB",
  "key28": "2tLHr2uPay7kmo6zmZUBPpaWe4khdTTqNVc278jE5Tik5pCwtHtmzS4fBTUUcxJML9HU6LYeG87Cdq8kACuj54uH",
  "key29": "5GbmP7hkBdoZmDFTa1mjrUycUTmQee5RJbgj1QBkY8nJaL9mVmKJYzok2MQsPoChn4r17s8tfprs1Yd9tNA5211u",
  "key30": "2uF1Bq3xrD3zU8XgraRTit9HEMBHPziZeEcU1GvG6xbGzD5e4HpPcVqDEnQHrYN2vZ8tNHgTSNs1Kv1boLGfuXyy"
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
