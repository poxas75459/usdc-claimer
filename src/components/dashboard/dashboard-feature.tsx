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
    "4pfWaiwYijZ8BD9rMQWKhhZe1Pa8wjzYmPSyBYac17KTxzcaVZPnpMu1U7SzJG7pejCMonfJCPMxkXAJJYcpcAXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kJAs4qtpvnpksFa7kVNNr33edy4pV62rQ2tAfvyubnoZEt7uTcrYSVGZU7HDGWczcLMJ2GtqHSvxG9AXdH3Jop7",
  "key1": "5uSXSegcZUJqTFiF1BFgv69LU4FYfML1HWXDXJ4rCysjUtiWxMSs4qoPv2EN3dPGhPs3y1Us3UjmcVLXwHednye3",
  "key2": "4G89HtLoAf1SapxRZVpUDLoFmQDmxeXen77CUL1GqKmjrx4EmroeVgAd5hVXZmYwLogKrvgBWE6PzaYnvRQeQVwT",
  "key3": "5yn3b53hvXbmuY9Ax9oir9qqXL6fwWkXvKkrnZxJ2g7sf2rb8cqE487QdudGDFevve8VTaQF8MPUd3xuC3pYiU1T",
  "key4": "3j6cGTs2msNWwe7jvbDJn8iQtRuB4xs5UKZuJGAGCVNFZKmzNXXy8EdktgqrDuNMa41nQdCs2R2Dir1DXZ88Z1JZ",
  "key5": "4UjYEAPP3GocLaBNuXSQ1rP7jndDpRML5J3n2w4i3evNTvnFExJDBdVBfFd9sxjwjHZ7mHw5GRQyDg6UWHA7LEYA",
  "key6": "5VyRtFcgRe7eK2G7E6FVPE3cDvFZGikezuvAnC9Gvo5G317GyWkXmjwdT6RMP2PqJrVnLtHzbjwT7wtQ39xypRQP",
  "key7": "GRFQBC6MWVfQ9RzJdv4EdH2J9csuhkXUkmwQk15oGCtHFhTTenAQqPHVELVELcvpTjnoBsZiKQxFfdpGSw5xzW8",
  "key8": "7Np8mWCXnvsEpgqZHk7gzNmN81HnSpW4Vp4FVDSdNNKrZDFUgny63SkResUYkXGwGdwzsk8NwTvRPcQ7Fra4zph",
  "key9": "4mFQ8uaaid6asotrUV4Bba7ydcfsuup1ieSCtR8BWB9poPnzky6JiyWUN3Ba8KLyWKVH11yvZiqKTDqtyDEb5Qsz",
  "key10": "PgkKDQnHH7t4s6dn8kPKPs91eEcXmzAN9eCcvxrr5bcjP6iY5oiVFE9SCTSFYtk93dmqmqeAJdELJU17mrqSsY8",
  "key11": "5D5Dn5NVLZjTX7GDnxeLgGWQ9EySF6vbZWCie4HUPhFfXrWK3oqHydFVMB2tqnPpa7QUPvPQhcbabq7TSHeu4isZ",
  "key12": "2LNmHKo8XtbRMzwPNKCtkikYFvbuaen1HTXnJsy7bi5uC7ERUtJUDnKibjQbw1MRYf8ggf5eq2XTurWnfamvBa35",
  "key13": "5MSzfZiosxfQEmB86C9Ky7ha1SKUnJQDBjG6conbHo71EFvigiCvaB6PMVTk6ZiuzA2AVLWzSnA5ZNVZAM2hjAaz",
  "key14": "4jYFwcQUibYcmh9RvH9NKdQdNCcnQRiyhDK2VqGbZ2qphwjFSPhtzRHAifU4utNesUKDFx63zT6ke41LDqGT2c7M",
  "key15": "53WZfnqv7hzosJBUGE1WVRtcgeZuAcNaxYfqHXaY1e8WsvzBx6XUNCmT47qLoq7DJF2Q3hugqDGiVBzRT7pmnTpV",
  "key16": "2cAN5WhYtwvjHfgvUoTfiaAoaV6JfheWgyVGR3kk2jiCoZ51ZWiY96io2bNDLeYxLjS4Q1yxqtsBcZVVj5qWVcDG",
  "key17": "24eurP5Ti9W34iQj6ZE2nSkVFFVPwfETP3mdW7R7AiDYbBvAG7b7mx4jnfRKtp2aTdcMkaVSKrvMxQ8Rcrf2heLy",
  "key18": "vU5U34ZmJPqjLUgg52pkiYMtefrUuTez4WgQiq9zfJCv4M6vbHNNRDcLkoyvtALnobTnxSK6of5qJnYwUVRLoNe",
  "key19": "KEDCTiveXdLnKjmogwiBzPLF1PvC55yepMsC8YjUvawQoEMfyEtzTCp7W8k1fyq6VZGa7ohPLEoPjmTXpZyN3DM",
  "key20": "31g8P5XrVQsJbLrC8JkiRgEKiDYuG9vKgBMJVHsEU8yAFaaDixqTFwBDYD9Ya4F3yNUW1nncZv23Abpxx4BGmxac",
  "key21": "2q1V7ukmmDec1khtufYeZW7YXrf7ZKvY6YkAzcMQ473jZwEoVAN5BK5B88mH6VwPmDDQbfXg9eUPd38pnMWFBMDc",
  "key22": "5A1QVVuRCW8Q8bHmg2XWu5rxSpH7aP4V41w4ZGgQCHLMfDUqqnbedmUhGp5HFBrvWFfakiWZ4emgwfX4az85stLd",
  "key23": "48n49HdwiCArojGL2siJR8Pm7PdKboSTkuo4UeeEMgqzknjK4n5kpEV5UraPPcqcXTikYjfTXGMbz2WzmCMii2Zx",
  "key24": "2z1JLZU9qgheMQvdbYHafhxZMam6jfF94v7QovvrP8v3SxS2vYyzDuK33bnZnTANtkjW721okpu1C2tkUubC7qqv",
  "key25": "59JN9MH6ZfYdGQL3zyJ38imZrfThgu8BvgL3Gud3C9dcE38z4irTj7QNLug7sh5ahUERwZQUWFKygPkp7REhwVMU",
  "key26": "GLVZ1wXh9ozSWpXJUgMghaYfc3QaEgpvpNLTu6eAyCFw5UisJxQFWsgJVtihcRt1vewaERrNcgmhoUFMzXrZxxp",
  "key27": "4UbE2qBHpZFVLA5odKqkuFj8p28DZazrWMKBVx9AfXzKXZGLvZtMgGWb1PwM4fT5mvRtEvCbLS7CxxAx3oiAntfr",
  "key28": "3PrKtkpwN8ow7rKrmS5Erhc2G1v4JsbZapcrZvBTdjE9EuY87L23abRwbPPMUsgCiRGUv43rb4mZ2PcYBJCFEQ5R",
  "key29": "58QmRshb5HfG8fqYifJtCcQfWCCLLqzGex24yuYyi6wpthv4S8AUfMyok5xd7kBKtPoHRF6JiKBjtGwJgAo6dmTF",
  "key30": "4WNgvQxzgmdQLiM9FsD4GgQjFWSpwMVphPHNQmYXgvMzPgWx33ygUZoR7DXwj1s1gnk5FZgcrdPENY6tovZ2XwCU",
  "key31": "3S5s6JAQdeYk32kM17rPWMr1LJpF5T7cxkYTDD2Bzk3HiWCsbJ3yCvPktFLyMyuAQ4j6E7MufBZRd16hnEFjteEX",
  "key32": "5ECcgxXaXhFt1Ri5tKKDrY4uLXgMBzzgYYZg3tX3U3U7N2qgUoDqK7WREpbyX6JD6hsBqhNriPmwmfvptW6tkYx8",
  "key33": "26vN8Xwpp4YbgJN5seKMrMKgnwXRniW6u65tYoC2E5UWboRb127TL38e83CFkxJS89wYuFiEduH8Eu3mAvYJQPqd",
  "key34": "5Uk8B5yLNjmLoXNUGRWpfPU8yQ3oZwcWVdoutHA7G61nFvQajZyfSokoYNyhvxbUH2Y3Za9NNz66bLdTkSvnEqgo",
  "key35": "5fAF9ypC4rx5kFMi717prNh7oU9dmVZn1izT2Ch7u1HNjKiASUBCzCYzg1PYaZu1qn1zwnMDb3Yhh6WAr9qutgxX",
  "key36": "3G5eayztRE5vKHgAz5phcovd45hcbTumZrm4i9FrNZezaDXmrxPwwgrnZardV28qwsdaoBEEyshmyiMWDgFno4FA",
  "key37": "3USFHi7qFgwMhpz27KLobHU6N9qVxUek8F9Cbkav3GBg47PEn6ya9zhXUidmKrwJ9JaU82i5KADjzBSAq6EB6Yey",
  "key38": "7VoXEen6mYGYDa3st6oDBkfbmbKRNzLpJ17wahW2anFyC24So5awtpJbBAJDeBjDqfd9B2TGg9e6w3s7dQ699LF",
  "key39": "3pw7kEM5nWasYhwREmoPjEbEETneVmb8HythmqcrSTZuoWZR9FMp6HXdSfobGmXun4SU4HfZ6a5bXqBbfWrCpUS4",
  "key40": "4u4n6Cni3EAPGpqZaYLt9SiyNga1mAtrW8HvD8buHrRFA9YkzL1iLVsHGMDjCe3axNP6TuLLSTwRz46SetdrjZBR",
  "key41": "5py98bcXt3Apkarc1cKAb8qFMjuCRHokyiELF3zQTVKTtECYEf3Mj3NGA5n34khjddn3EyYWMgBCKCs6fdGifYTS",
  "key42": "4B2bXU8UQt5TLzqXBGj4kooyNGMa8Czj6uUrSg5DhBJvqmoGzzYULABCTg1cDBrsRmR9Fbqug9xJ31KTSt8vqozP",
  "key43": "4rVtRXps9z8bmYAJcYF22xaSR9buZYefZn3xJpvshrBvRiJGKGfujmDGukdcEr2YbyUsfzj6jeRqfX5qud37gRZe",
  "key44": "37ZogjdNoVkxqNWLDVCNzmuiHqzfUoYq33daezgvYYTRNzBNneBSmAhZ5J7Vp27MNTUeadLNaXD5bzWmSQuziiTC",
  "key45": "2XwYP64S23VNqnFnVcFjfkC8scL6Z6gQHxQUTMHjeLtrPLGLDY3gdF18GVowTzqptrjwenLebN6ztKyxZGPoavHq",
  "key46": "5haxdQGRk12UH4B3zNhXTPRVr1aKGK7sHiRACmJ6eUb3AkqKYxcdrBHngsg8h2NsKT6UmYzFQByW2YMatk5XUT3R",
  "key47": "4FkvoL1BwoYjyZiWaHGrjokZ1sZ4vAH71tCohUKRD4R64Dm6dixPn4XNUADR4YqJxDDU8twabNgCAUkTqwe87z2u",
  "key48": "uYTf79Y1ur3Fu3pnX9EHkfvEEk4GvR11cL7nthxRuxd7mdgJ5Ayg2VENpVMyhfvp8YmBA16AjDLzYozDc5gQ7mF",
  "key49": "52RhMsFL8FJ6phFgRfKtwGzQLT8QM5H37VGfAuAdZAupGKWK6zLW9SYshQ5mr8tDxCKEcfGPxWKDLxoFZwzvztsQ"
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
