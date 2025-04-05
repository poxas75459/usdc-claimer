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
    "3NWhjSwYrAyRt8f2YkJPrTH1trbbKyWsNpcjtQcSCaPUD6vpAYw8CExQqPQe6gjiDWP2Xtck2RDD6FMRAaYt9zV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26QzBzyxyGGna6Qo5wqbXBZaEPQ4WTBteNqqthNab8QxuEcNKdUt7shSMmLoDwR8HKETgA2zZDgGoyiYGpCSZhsn",
  "key1": "5XnTAev6DCBjajPqzKpMDgpcgid4WyJEf94QY1tJgQ7Caxjm68kNvYT1GKyBGMRwbC2nmadAKn15zYda7Kc3Dj8d",
  "key2": "3s1Fc2kE3AK35JmuMnKT6za8cKTMinzpX7dDKQBumaXs8gXHGpe3wSCu2RrXyiQbmg2JXmJiwMm2BY7v8uWK8mZt",
  "key3": "2KF4stMy7Dgvvq7ztfK4xbkdwAYiSDULJjm1i36rKqk6qXhGderAbrNZa8T6QAV8n15MpnTpvtx2CRMs5bJSUhUV",
  "key4": "5UNw2hi4YtJTnkvbN6Xo6TfdZqHEo31eNVH2eQqYKwtCx3Fp9ZG6SLKj3xhNZcPhDJQ52B4r6PKfsiiBS2zYYHSa",
  "key5": "5F5QWz9xUgYFSGGbuGDTXRnDLwXZ1FL68TYM6xH41h8x6WHYufwvnPQHHMkxX1Uruoneu8CYnGKRU4qw5MA1zL3e",
  "key6": "4L49t9FE1bWA5GHM6w7ExryTpJ7fJTrBWUBQUbkKtjtR6h7QesnHESfENUcC9meFQj8BTc4vMqFsXFBkYUFRmfNx",
  "key7": "1TQohUbZhHN97hj3c5567ttJFcoDHhuYe8qfDLRdw3BxVewbdtgJAdE8TNg6CbUxH4BVCnBy3GKU1pihvbztRpD",
  "key8": "4x3Bob4dL1joPeETFayAJWZeMWJWN4dnT7GkebCUzaemGFXVDUVereU4tLjzaHR2vfeo68dPSdYCPkK9sE4U85ns",
  "key9": "4zww9cfQN7owUGe3Hcnb2fmaMXk6H7phnA3ez1wzHmRetZSVMeeUYtjU9dFNWYSXbNn8SMKJ44LKm2pFSVugqByd",
  "key10": "7i1PYCthYggHxmvT1bkY4MULoqTPyXjR4JU4SzgqJN9thvdcDra5EwbJpe4BaMxotgRQFgf2aYAvrDRMoETD6Gc",
  "key11": "4Lqt7nTHybyZ94F5kGxaUxJadRtojLeHyNaf5UPU4NS9BbirsnWBzCDniKqmshpS5Ry7i7sjKMafRK4Lwp9SPDPm",
  "key12": "4Wzo4RmoCHB9Tm4f6Lgni1Z9mH8Gv7b93Kr7uy9uSTDkHcLgsKWzZ5FnfeoZDjgp89qkhc2gygfvfJMQz5vZ6MD",
  "key13": "3huNZRbBXvYz62HjNtd9hwL7MNKU2N9Ad5rqqc18K5Tx36dfcWVSzqE7Hw5j489k4WoiYzi9euoAsMd1p2EGzmMG",
  "key14": "9CJWP4e3LMi8DXv2DYxVHmBCmnFWWuVE4uDicVCd2gbMTXNY5amNjVZuVNHKp7KSKkoxbHP5WZewVoHTHQbM8mv",
  "key15": "5FB2by1LhEya7YkAFpco18XBRYxS3KgpBfCKDF1gTa8jT1EgAUKd86FryDqbwWfJi11Wbt992VPT1eeiGaBtq2Eu",
  "key16": "3rtjfc7zth4AUJ7Cef1oAq3CBXpJU8ZHsiWnCFzTXhM2MHs9QieX27Pc2vuxaTeKmjfWUa5vKLSSfb2KoCZoGdYc",
  "key17": "gQeQkxt32MNXrWPy4BbSejB4DV4o2SPYM1axYufuang64MVk1MxCQwiprCqCaU6rUryN8EFr2T66UjWAYHjLnwT",
  "key18": "z7Cx7T5Q5wN8ToZvKdNRe7d6CWZtpBd2dRoTUh6kaEia5c7XYMTB8bczkyaDxQ8SGGFNXUZs1EoHoqMjrCndX44",
  "key19": "4tTdJgFcKurS996ZJwVVxnU7vBcyyTNo5FWqyhen932pHswbXX8Fza7YsLew6NebEDoLBrx8XUuYU353nhEh44fP",
  "key20": "4kbf4SV2GqzHjeuVdgJvZZJkgbASZp7eUMUjXhPSemFfYnbWjaQZhFtLXVghPec5PrB1A1tXMaBE5tndQ4BrPxz8",
  "key21": "g1kxq7GfVMsPrfSmgKFwMx4nAJy7CqGHTHw981EEzpLv2H6Gt8r9zF8sf9eSa5CcsQCy5TFhnjgd7ok8uZa5zym",
  "key22": "2ej8TiB9dWuXnbmsf2TEAzrLwMv3DJ7275kXJ7cTqxABzP8qTARagTeN14nU6rTrfm9PvGdoC1Qf6b9mk4fBUYjw",
  "key23": "3mafriAn5paLGEtPMGHjR8gLeAcs8iRP3oLjsy7dRe5kdtJWceE31aNiGb8BhCevirE2ryA86rMnHAC2JefHDo9S",
  "key24": "31HwQxyNsHM1sx9txFvFDTZMxQmEPvzapSN9Nf1iQV8U1RLe2i3WDnfo7JLKLFeaS1AofqgXtWD2rCVZ9cU338To",
  "key25": "41qMPXGL6jpS2F3AWaJDvvfEFoxj7RuiMuTP9cSD7fnJNkkNGDrFZ5swHxg5pHr3m61fHQUBTwPoX8tiJi2aUBdM",
  "key26": "5ZfJYNpQ2jpdE36A332bTHiFrEtgc9XfxZEEN8b2pk3dT9n1UsMCXp1AfbWGuwmDtsnHRaDGgpXoPGQ89ixUAeq7",
  "key27": "y5CHpgz8usPxHNNEr6aHktJ5sUhUbbGgQuRN9ZZo9vEjBxgJ4jykLCcu6NHe8NmdkrCV1hCdWQU9B8h9FUPDT1X",
  "key28": "4Bt8D5vKLcf7oNsHZD4fd3TnWz9PEZc5PmB8eCPSCkRXWmAw2xdNg92KgAPz2ZeiLwkczwRqhgBYnf2L3GeTZfjV",
  "key29": "js3JPr2HkCUWc9KUi8ruKH6zwbvkwtE9GdSsTRG4QkmVFv7uWo7qqeeaccU3jp2uBEPZT7xeF9Q18zKKqE5wy6g",
  "key30": "57UTW9NjVqzurCiraF5Hs1q4dsQtXj83KS2rWXhdgmRp485SCMPJK37SuVSpE75xJd145Ad69ASZp4ciqTpCT1hW",
  "key31": "2EVmwHenrJwzKt69jH4PL4FG5F6rBWdE5891LnSWvEkpVYa2MccCNyyBA6N6eLruXZ3B5C5hJAq96pKw11Qdoe15",
  "key32": "1M4L4XEcCEn9JXppWNZ4HsK13Q87c3EELpPrdYJM44Ciu4BxfGXC9678wosVPV3QH471C1qJapiyRx5auHSs2bf",
  "key33": "5hAuDojV34EuoLxDC6f1jRJ9gCuqHW61rDAeLevpvSBsdVX3mEpC6UwG2Vme3C9vz5mJPmD1QbNdV4xGmSvntEhd",
  "key34": "R8PKYpVbC2m7iHL2RVhWoXZxSYNmPE3GvWDuHidmuYsP9TJR74mJSM14GWD2gje1Niahc9yuM5JjopzcYeVysee",
  "key35": "52UkkzbBnqwW6VRVXrRStxiJg6ysLrBNBX9QbiYZYVtTrA7NYjeqRPjeHnbQ5a23XAffEyA8XoqP2fPMLt8ha6dv",
  "key36": "2wiGnREHK3MhkwmGbPYznFdR4A5PSrZv91A5jsqgEYpVNfioyj3oeFJMXkXUrqMZxuEyBx9S9CWWM5hLrkPDRw6w",
  "key37": "5QpykoTejf6JhnxHJTrRd7Qn4QDyJBQnQQ3TrKRFRHyATqJ3quSXSWMiF6XF5J9QZLQmhvDzckZUcM3uP2opmMq9",
  "key38": "3h5ib32wFMBxc25DCYDkTsVYxUVL8Rujj8n8jb6PykpYYs28q2ZhQjDzk5LmWvA9M1nmL2pGdNtjDQwmQDjezjA7",
  "key39": "2svGYKEFJ3cJJrQP3DaxNppRE3jVZZv2tvvo5wDqL1CAydYmxccVzwAyQsjSuXRav7ubdTp4wSdLmwdESWTBffnB",
  "key40": "3cgiG4qHEfryHgymvnMFyQjpd7NbPksiAWaCefkaWTNpA3zmYEfFcAnwYa7XrBfJ6nHxS4ugGozHyA2kLLPEYaW1"
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
