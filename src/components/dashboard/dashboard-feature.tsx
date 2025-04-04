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
    "7VTeGfAcifv4vY7GHcdMx3V4YCZYpScZUwE2pmtpcYfV4jENozRBv3xfxgXG69v9iBFrXh8joHWxy7HehBvtVZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EW2TS5UhPMpABvf7UH6veDAg4QLSmB7xPC5uAQELCNsHGkuuFXDaWd25hn4rspgVEGmaEqNL4XprHKPzKNdbLFa",
  "key1": "27rfEdJZ5p5evVnqhGEW1UdBKhy1P1Um4g57HsuCkuoj686mGvjEhLBKkza8ENAavz8W5xGNyhXBgpMKLkb1yQf9",
  "key2": "QVqfoHgMJF9JTCgwdseYDiYoEozHTkjz3tzN6myoUeBDjVubb5FQKM3FVnnz7Jdj2Zo79gVwrusThXcKvdKCqs2",
  "key3": "3zDe8UTPpddFbWSqa7LVzkdn9nC68UMPJLLsFKupmL7TG18mqmMpHgDuXdL8HVRqWeQFeSrw2gLk7oLuwEGkwSd7",
  "key4": "4HzJCDpbvv2fHAzGHAF6BkTfBPJzFzgcMeiySedJcMQVVesv8YPksVFGCQz4rT6aJqcANxj52tLazNfdRT3G7oFc",
  "key5": "tMXA8oQgbappB4FXm7V7ojnB93SiwZwowkfRE2QonuAy6JjBYViYg9KKhTZxN6tn7bX4Y19g8MpGRUKuHEnqZwx",
  "key6": "2pHJhvh4PdATw7iYZh9GwZvtvfL4RYzcregaQWpBqHByaxy2K5aXK4wwSVUjxaKeUguSXhPFMGrbRMMTss88oxJJ",
  "key7": "4UWxqN4XZA6yBPi3Z69B9GJGvGew43hq3VUxGc4S333kBuHdLyPuZaaSWL73iYfb9kuvZNBgUYu6Jfee95aTLUAM",
  "key8": "6722oxFCuDr13Lvj9sRTStDC7RAXDxom9k8fWLfMtZVj1sBEHbttW3dNLSsHoJJChhkEQvvKkYuLjMUBk7amAewL",
  "key9": "FFUAY1dTyvJKmNbd6XHAi9GAa9wSk9mn1hXZfrW8DeNdqCpukcrHCYhvb5JmJLQJuxe3NeLzC98RX3Crf5HzYot",
  "key10": "58R6ASPEbURC3VujX3qzBusxPgMNcUcKpJaLKFcuUcApGVq8P3fARWE7Ss9HV65BErNhWCGH8obFRT8G2ui7iKLz",
  "key11": "2CYAcRcmiDiSo46L5y9BQfnhLY3Ec6bBZMYAjgL3Z9LqGsuV8WVkQ8digjjovEZQCXTSqgnjcvvkT4yzQatwLixj",
  "key12": "4rG7d9jLSJpEUxX8EtugiLvRR9ESMJuEBWLicGUG2YDTzwg15mBjtnvUzPRdCE2B563atQaR43WYZ8eQA16BEh9i",
  "key13": "j9Hddh7Y5mxBRbiRdyGt3pftWMsh4qFpKSL6Yc5oJt1drEZ7iNhHR27spE2VUAkCyEufX63LuosCWEQa7qLQySC",
  "key14": "2FjCgGfrWv6yfQqQHFW8oaJqLh4ZvLmQ3np8zepjCpBFh78EtQ5FXsUA682v41jbtwWyasANJQdUBTfrDEdXBrtY",
  "key15": "5pq8iGLbQitqeYqQdL5k97qGq9mxAjfHYU1K91No6kNeGdzS5FVqc3RWbcxS41JzCvQvkYufuayKZDWUkA5JH6Fr",
  "key16": "2qQxs9Mf6qt9KnUB5p2qhmoWXKF4qKG4vy4D53CsQthRpr59FeLbjTJpfMs5CDCMWepn6NEpt8nWWXVRzs6Uu7Fi",
  "key17": "4Doq6Jw5RpG1Vsruka81KC6Je2zr8vNrvLKy3FneYppb7fqpbZe5KvZBmh9V23UX5QosrCZfaB3EBSscVLePsi1j",
  "key18": "2P5RAqXSTu5APLUjUoRg21SDixv7ix6ydxorSc4RG91Lfvmr4k3LEsEeEGZs3kLTuLtevf543oTsXVKMUhwUf1Av",
  "key19": "Ecd6ff5g7k8ceuSUjqEuFVN3PQ9okCHiJkzTnXMkyHUiQmoKHm6ydvPe13S3KM96RAERtBsLJwXaqHsfiHhge4n",
  "key20": "5K261Jej15wKoLD3azqx3cHFstKaaSKSejWFm9FMtSPjfxkZVDechForodBnjMKe8FkqxTMZxzRMsQq5uASjUAYP",
  "key21": "3tnSLcjsGNB5cGBLYKebTaf1YzPRr2XjdvUaSv4ZTUgsecMDrScaquHsY48X6HjNPVRr83vMfRPpTN8W6RDqfsh1",
  "key22": "qTbuDmYNJVB44yy7mQwJq2LBu1wNFXKnwSAc8SqUWeZof7pVzJKZyc6t1PajoCsmxwPjDeAxn57hY44Ns9psUkj",
  "key23": "3a7DzXprTpRhhKujSkB5CF5cGyq93NxbPJmpqgnUMxT5MuDYAsAx1Ynoi1VfTZKZrT71x6GW3aqH7vVZHF8g49UD",
  "key24": "KwVZybuxb6Sqv6UarRdddLKqbnwLQCEJ9Ay1Q5E7h86aTXsLW79aKDTeegWroofLxCsidTLf5XRWJ9X6xKhJQjw",
  "key25": "3TpvPiyTgCmkXo1td19HLQxrxdnReNWujabMvv7PqfybVJ7Khga8niQzTA9P33mgCqfSJAWBZS1swznScSXxH9UE",
  "key26": "27BSBQT4o35dcoLs4yE1woPVWtbtxvZgYqpsMA9YSr3FH9fiEbm9sra14uFkzGogbjG2ZntAahPUYTefoMqqc5Nb",
  "key27": "2W8R6pmjscZ1WGxLV9pHhjXPqX3qVEJrJa6mVi3gPQZGDTzvfFuJxyCz5LF2cniBMxAUg5CsMHcUeVjUsxDNwfBX",
  "key28": "t2WUK3tYwZxjyW4RSdEjDgZZWyv4QxMhxAE1MGYAoJnGM5yqB56hryUdhUBqyZ8woa5ndroPiXRxcTZNHuij7F2",
  "key29": "45WfM9G5TgtDG2H1sJmi4B8AxfqvUAyiR2eDtAqkgayMR4MfD5S1v4AoiSfY7Va64NGxnd6K6AZKUsUCVvNWjBjN",
  "key30": "3jb5LToR2sNReTTDaDFnWMLBYYL4cxUW9aFgamR7LEYNk1digjuibFbm9e4drbwwkno5sSX71PVPTM3YNmBsCiiK",
  "key31": "5397KZqjbWwF4u2x5Vga6zVQ2fCCqmViLo8LtmsYTC9T8sHj2hKGvwZo79UDoh3XtA7PcpNDBCed6PE1mU7v4YNn",
  "key32": "4CYTvLRnDRM73EJUdYkou4JH9yeVth5c7ZNrsnxu4vgXrD7uAbTT5zotNssMGabFP6xham9igs5TmgynSfJXPP3L",
  "key33": "5TwbjxCnFcw4DuSiPCxDXWgqUXrzM1KK3uwFXPzf8b4WfSFo1NC6frUqTPvYcmDaiDgVbg2pq1mRh1bNWpE2kZVT",
  "key34": "opFnQkTkCeft9aqiuBWDj1R54AX6z7DxoBCtvn7zY5CfsErtxYnVmP5p9KuNizebHdrWADeyQGJ1m6rtvrPGPBi",
  "key35": "5qe1cJ5iC8LWidDtWZixqfbxboBn85FGYER4HpSUWT7WXJ2pZ964PeZgEDBhhtvya9q6ghALvdWq17XnSX1MkBkt",
  "key36": "3jy3HqhMEV6nRwacVBqZMc4o4GEYogVbGcqzM8yVzFtj64HUunWqucMvJJd29AqPa8adTM1vALkbtyYTsQo3ENnf",
  "key37": "W8tMZKX79mxXUs5WnPCJMorZx6VTjmHrNDV4xnMnSwzZkxqdfkxJtSLVpdbaNC7DD4uMPTT6SGyL4NEVLd3qvr1",
  "key38": "EyycNUfg2GoMpEp6uLdmszjVVjPCNK8gPY1be52oxRxmuKGibfb72D7vTZG1rGcHRm6F39LDC3TMdacC667A5EF",
  "key39": "3hZAXJJHKsobt6xZHZBuWG56mh7w3dYmEAuJfBis3umy2Yqt9sFPaaDdspHFvQ9uh6NywxAWWBm4pmRxniu17UWZ",
  "key40": "3qfxRhVyWdQbj2mVpepcmYnp56TK2uRnvQAGiYCSEdLtPySNzf87PSjSgp9irGTbM2vgPd91gDtdjKJREVqrrBMe",
  "key41": "SdzJ6cybiRpXMj5GxdHJtbxuSFdmCoaZbNrEgDwzzv4S2fisao831dbAfHdQHkpWGnhwYYF9fQChwDE7JQM1JKJ",
  "key42": "zRsGXWr7xPMoEGncmJBAHm6dPBfdm1Dh4ebKxQc1uQNPWsfxiP12h6duVcsjbx61HYpcVq6Kcj9cLPfDHSeZNzQ",
  "key43": "LtvfRC2jodtYdxkj4tvJW1vkmmTZqwPNEL1haZiQZ1Y8tovY1fmyYQND1SeN7z1yPTuPLND1HHvhf8jwmFN8FXH",
  "key44": "2GFZwMrX5EDHKPPoJkZdmuP2azQgtidZ9FSn2i7Wn4CiHK5CoBhG1te3vtaiSYJ8VZ9LrTBuTYjrfYYszHdNbDya",
  "key45": "5h1vUbHRxEDjWppWoLQR2zYZniU5qYzxUBwmt6jZut7imnX4hzd5VULyqBWUw7JMHoouZ79sdCjBysZuZZhRbBtk",
  "key46": "61zvrdjpsbWphExR2aEHptqffDXJECjPhAbkucHwHqwmQhGp9s2WvpHydqStt5CN9pCS7AX3LfFXhuS7emwMeT9S",
  "key47": "NV6WbX9Qx7hLfv31EsZVnauGMjck3WH3gJyH8ZyPa92LP8rnzB1tzEAw23ibtWA9S67oT8w18CHGMB1CLEHLQub",
  "key48": "3dUacMBb98EMEVh3DCkQPYgLuACLru2qtR3K48mPWpJuKvqqYbR9J7Byb6Qtu3W6V8ixL6AJC6ApPZMHYgH7jps9"
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
