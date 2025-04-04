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
    "2NPFLxzRmC12L7wmQpXjtfRYosFzzx4BJK5NjtdN6KD6vvhv6BPe2KUbHU415KaYHGC4pRptHryuos6gSvtqVNDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67jHoG375oy4Qg3s9Ysu16ABjDSQ5VdQ6axorSu6rrd4xJeJAreW4frxWk82QMdU5Y9rAomkw8qSQg4zgzFBEfNn",
  "key1": "4ZMXe2wg1ztkgqoC1nbQFE1ZDmVLu5QCq3D4k6AMAiTMTRCf7btexi4Rupf3WhLFKsVf1zZ1mMAAKnSeEcM7UXKE",
  "key2": "4vkf52EFBBAu9MmYcKX3hat2NbxSUnAnpWSc7Rov8DTwKgRXJhcxNmXD4L2MNuKMQ6rtFpnWxwZvszfukPf6KszG",
  "key3": "3GddkX6pk7QyfuAL6PGfZ8m1qeFYjmXHDAzpGwRkAtrt9qHEK2paB5oRHED7F1rWVKoMXNwxRn4ZfPGN5S1FrwZt",
  "key4": "3wjahnx1GepKxBw3CSQo99pmRyQ8kvnoH34nnTvnkUY6KRPZiJDpYmD6zU1HH6CgUsggSqabMi3rFp8MuY3abu3S",
  "key5": "3q17oW14LfB8JCEQheapgWF8nnpEyaPD1x34tiijaywpVaWzbpeCeopugCdcoLVp2qifUUFiWj5YUUmDjW7SyZiP",
  "key6": "4r6dkxCNPdu3tqGMgk7nFQKnZoxDSrNnHVhCxNstxprjTiQwE5RtRLBwJ37n1ijofZjhCQvxQXKp9bGbePzLz6yX",
  "key7": "3jpnUZFwqTVRYmgF2XsyDqpCXN7cnidQtGhsi6vhi55rt8nToQ9TK91cN1vkmMWmiGfQ2dh58nYfUkewp8VqKA5i",
  "key8": "3Q5S3qpb2sy5jgcLd6RFU4TsdqgDNp8xe5UxpzwTkBpwg6RZWbN7ZpwcSeqAPzt25AkoWUACqPyEqU3HQVnquepW",
  "key9": "7VUR3vrYu5wCTdENB4Tm6etHcyNrrHVPb7YrTZUGXaKNjosdeQ2WkACRBE9TyEa8qdDB6Gobv9BQjLrVxLPPBXa",
  "key10": "3r7ZWt6tsASXW9E8E6WXjf8qTrZgWEcQdvEHZbo5SB4HgefP1XKk8DxozfFiBmyfa7Da466241RGFDS8xJ47AFtA",
  "key11": "T9YWhcPvSUKT3PXxba5jyLzTSqoatF8JmeHGNmcZnZ3sQkHrDrwbNbjUozKbN6uxtE5tDdQH5VZ8EwijttFvs9B",
  "key12": "4bMD7FQZBYSLYg1Sii9jhjXshvRqnhD4r2DSN9abm6cL8oQjey5v4B6QbuSm3FgACHTKhZy3H54rxynge2jFvn5r",
  "key13": "3uKSWqruSaRPTqnNWuSxghfEykqTixstonZrRhWHKcwTM2iGcCesf5LBP6eBrej68XDoGhZuqcmEUzgymAmeCyBL",
  "key14": "55YP5E8b33CCtAgzaP8vYYfctRDV2S7QC2vXj8NUHVS9rHhu48LPTxKjL375C7y94K4aXupKQmXXj5LbFMwtGqY1",
  "key15": "3z9E2YurPffzZEserXZaEq4kUGzTcMucjHRqtqGeiRMsvcdCfbsk9rvj71W7TjnopnFAvXcmBYb59Y2HWhxmAwAX",
  "key16": "2SegDVEH1h517eLtPABZgX7nRsSHqSrKbvhoZPWztoYtQBWMU3hKuRU6fPkMAmaUtGoRNzfejSt2Bz5qGtjsxiLm",
  "key17": "4MCQTRBD6Pb15jvse6QpiVgHiASo4mfABcwbQrvD9AYo5sjrr7ypfFWt39eBbBEjoCZRQ4JLU1acj8K39xphVMpz",
  "key18": "5MmyPWFiMDhpRA16mwW2ipFqk9pgNzEuwHsadDsS4UXSdSya8ku1ngp5Bnr3H4qNm8w4wuTrowzA1cA9N3G7mgjY",
  "key19": "3ZCSAW2N8YePcK1fB892kzRNNHqBHgRXzCQt2dYiPR8SHcKewQh3p43E47RPPm9qMhfRA2RcKhf26jdw8jxafKPQ",
  "key20": "LJXHQveZvsSRYNtKT7AAMZrCnHpsq7FSKkeJsLK2CQ8M49nhBfRbKd8B1cPZnopt3j2bVBgud74fJCnWuEh4Jbt",
  "key21": "2vpzz4QBS6rRPnGV15Nn6dNKiwc16CMVigpJrmKLo3ezvg72YCVcJcUAL8cND3AizFxymMShUhV3n5FSHog2GCzj",
  "key22": "5FB4JKk9tVB3LHGmjLrjPgGnCstzpsXnt9K4F1NBdxibPt5tNJ5h7qUGmCyiDTY8M95v4Mt6p9HBLZmmVq7ttnQG",
  "key23": "5S4H5kwWbnzSNJfW3BYQbiPW72nRHtf3aHsLo2HoNvgS4Pu7DTVajidi7cuJex5EToN27Jvp4PBesm61ynUjvxp2",
  "key24": "3ynZBSNNVQySjLbbbDvbwgCWBbE5JQnxqArSvfS2UYZvQahqf5LL1ah6Vbvz49fkUNQx3QRAzqQwGXxeAxfxjNDQ",
  "key25": "4guYtouDP1wfcW2zpE2uiaFGt8Z3t9i5JjQ5r1CDMhcgNNfNmyzQtFpkNMFcmDUktKvJreEmgx5SMQcQyTwhiU9F",
  "key26": "5zksWUQhKq3TMMibMfp2cgc7gNYpJh53zHpveLfobkgCgE4tmMZPfjvwR3WMSRvXSzmm4UUkYZ3q5vkxE8XAx8KF",
  "key27": "4CtYzftSzW6UVP882rj275P4qWFqwZEZzSFPKbLXHgAXmjZ8sbAkFCdBUM87v36FRAVR4RBL4A9Sz8ky1qC2c3zL",
  "key28": "2QJkS9LUs96mtMAJkq39hUSG8CEgQrv1jgoCDQg961zwAnxqKPoTnjrEHHqQUsWnV2BQfKdudevn4NvWMZ9GEDQB",
  "key29": "aMq9LqJtYSfvBLwxJN7U1dBg9EEPe5oe2GS9Pk2ovHiw3CA4AP9nV8DJx1xn4kuUbRERUR57Sd51EdojqJUprAv"
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
