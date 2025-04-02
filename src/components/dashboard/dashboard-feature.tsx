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
    "3E3ajy3Wvsper5HJx1RjrNjQtiZVoeQdDtq587UhCNZcAVZoxyX1UpY1XKzozPaM9SXcsMycNvJVnmVmG5tvwXSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QSqeepFLAofb4xY1SiE1vXxAfFcjvmWJucE2qePZGgPczHsZFxkNbKak7qM7BotJRtsHb1N8ypRcaDJQJoH7EMV",
  "key1": "x6JoHjK44QWzeTonJEAH4eeKRAPuiZsh2sHNB8qGiWgrxwP1HasSbcEuDsc7KLFiesrqt7R2fbFFBZnt4gqVS5p",
  "key2": "Aad75gXBsTGx7XK2A2EUfKauBSZSDA28pYBQHjTo1XFkKSurUEN7HEg5cPNqLoLfmUaVMka7bz6BfMJYqCKX4zZ",
  "key3": "PZG8PRKw1gPhDgCcRij3Tb97pgSPykcPkwvFHabaehbV8nJTAKKG6oFAY1mYhCoHEPS2fjHzzPepJcun3scy5jm",
  "key4": "3pqEpaD5ds6n2gVuuTEMr3P5VrVaU6gSctGaBLiQfPPsQGJ9HsAidwNyEmATxpcmvfWRweAv8VHDNGb5nkLHUTYx",
  "key5": "26ZKuav4Mrix22qVKDbazXCNPHkcRN6Mqq3CtnPJeuZcv93K9c1oNYez5JeTssh6jhbTX4sVc7vBkaPxfQWXoSLs",
  "key6": "2DNiAFGHUPop35dFpAzUsDsNn1yrmDaRQmsRG71GcezkndCHV1eUb3rtNGouPed1byTK1xVsYcQyYVNHLAuMaZn9",
  "key7": "62pNJQY2iVbgZvgx5hXaJULAYvFgyjBFeMCKeGqDrZDWAHzSNAPMUBgwUTm56AA7vi1SXKzcqajmdZPXai794igh",
  "key8": "55FPB7vLYjubWmvdVAFuH3vhFAEKhFcBfppnEpwDAJ8b2pqpXqJSCncEMm2a9DCfyE1yUtKK2sp2fcj6Sc7bVjEo",
  "key9": "3vW7Ljojions2fJ1HZLJYywZpvmgn7o9ifCBZ8cQmwyAqs5NPR28kP4Q8Uk2bW1BKFCQxG5QYGzB9WRPc5kGT3V5",
  "key10": "5Apu4BHeg8cwXEr5drtDH2XNRyQph9AFsCUPP2gF1GyZZHuSohiBVnKzWuPb1FXEt4Ddif9PGsMCMvEhkvCgJXXv",
  "key11": "57tbN4HkT7mG4omRQGRWqHVYZAJNSphr2JQE2zRfmMtKrwxb4PZckMXpdZjKU2q2GYWX4ABUs3EsKgKnPJvnR8Pm",
  "key12": "3abpHfeg6NBzHPGEyNqCwvkUkFPtmQiY1KX2DPuQbqfvnPbHju9GwKYmP6SYBjZ85oW7yCds2nGFHyPRBV8bUWoF",
  "key13": "4US3vKLyrjjU4rXPLGgQYMRfq7t8rC9BVJJGdezsismDJHqCsTTVbKtwvbkddsGAhWfkxcZd1FLgDYCKppc2cxC",
  "key14": "ut9wQP16RDfyBb3mAFy7HkGNETxNCd5cNjAtQUM2Emep84h8j624C9eW4w7Fov1yY7e5ndeGrAV5QhtQUjqJiia",
  "key15": "CZuyXMbxqGWm2eeMCfYHxw24vxehkMSNtzLSYmTaKtS8wNARx7dtJTNDRaLKzXYqrvo4sDZg2rE6vpo83eTpiFA",
  "key16": "28mpXzgFucNyTR5GJbJuPVSZbBEyrGdco2V4ZkjtajxuRfFQLRtuASngxTAtyAs1NsFXqmsueJbtZXHbAw59A1Lw",
  "key17": "4R475BKacfUyyhfF4VM9HBq8GRYgCN8Gy5vEfMw244T2oX6xuchs15UaUwvL6Fs1usA9QAnSycaM9AoiKeGhXnaz",
  "key18": "42bR4Vbbx6xstaEbNE7Feu4JVR6kzYuu6j1ZCUMTjSpj6VkdY9Wwgzqr3S5pUr49E4jLDpqJqY9FkrTBwFq4vhyT",
  "key19": "2GSq8DKZfSXmPmcdGVjDskE9jqcvZQ158SecitrpcdfiSrMoehMAEXEVW5vpSCJUkqJ24PWHrfFHgmgQKCbPiM4o",
  "key20": "1tQ6AaUWj84amokMRhXa12HPyJrEzEmoS1SkDL9yEcU9QKPy4Z6ENeFByLvzzKq89MzaCQJvXQvchwMbjPTUABv",
  "key21": "3tpYaeP8eQWbpTkdEvF63EyrX1vsQR4d7TQ34Zo9mCuEZusccVmeBkiGbQY35MTRUxVSa8MuD4WjiKb7cbP324ph",
  "key22": "2EdSMN7ncvtA8sD1G5fLSqhkMFPmzsbKdNs8NDvL5jiAuVK4hhupNyyqNkAaUDVwsb5c9byTToaetVKyUaqpqjhE",
  "key23": "wLEX2L686gUSG3GwR5ey7z6C4AT7wBMb7CAvKZbcmw3pzPrMWTsYaoirtFC3oBx1ibNxan3fHU4RS9rBxzXqGyT",
  "key24": "222EAgBuHikmdkpHirBYBsJk3QYb4TUmuZ95VDCLFzDmc5Zak6owhqbLCEDQc9BPgsoJnfeYSgCydcqVZwtXwHvW",
  "key25": "5KBh2uKMTJ64ju7eGVzPQNMBjB1QuWUeRNMKfvPfUN6bjZ2HqYP24o469itjfvwVdLuaf4LvdYitPMy5CVmRWQ9W",
  "key26": "2PoDsQ9LNkLyppDS7HAx6qzv1QpqDQy9jrUYaUc5YGHNA4rcTKdfVFWgtHkEcc1ZKbKvMq5AWQz5GFP9pPbApQes",
  "key27": "2c6RhPRPB27UaQ4SWYu6176kTitpYPrraabFDxR4QNCxdNHLkEqe1RvJHto4YqsL6QzfxV9EWVS78mCCvrXv4FCs",
  "key28": "hNGQhkczywydibHWWcjbU4QBRim72LJRWWzRk3FVWup8tFTcyB7ETmzAmLFfCzuagAcoRoEPKoFx5qrj2nyaLbr",
  "key29": "2J7tHTZYPiUffV5eNZ2pGeHRANafKGhLUbYLNoBkGqdyy2tq3mnwSb7buec1bpARt1HdmTG9gs7ygPV2UwNpWZAQ",
  "key30": "3v1bGEqSkisWqK9ngQaFnkZw8pHLUuaRFPP2G3iu2uS2ad8HirKu356dTcALwWz6x9TbbpGiUyRSJ5hSSkSpQDiB",
  "key31": "5XenwWDwBoX4nWxNJEMEQBSWsannoMuSNRsoEx2qRft1Fhg4rDKsmhSFk4pHLAPqoCXEabcZs4mCeyaa74W8V4qd",
  "key32": "4NkXrcCiP3DFJygTkmqcy7ohMDD9aD7R5cUF6kfBbv8KLY7sjZfx94Vm3gZnjEty792vuaZq4Cvs66GTPcHPJaGH",
  "key33": "2fogMXE7vzn2P81xPhYYNdzWKfg9kwocLVzwbq2GsisD8k9ezJipPNknbtDkwNyWUuyi8CGJPd2Q9W44Fa1LSCLB",
  "key34": "2J9zfYF9iqq65rZTFY1wGFJpzzsUCdyMe8yGN1fkk6QUTN2ixPLdKpbEPTPttSbcBx7EeZiLdDRQw6dH7hEeb1NA",
  "key35": "2ZvLUx7ak1c6u3wf3DoNnHvoHKpr6Q1rpFdjBfSvPov8t2bR6YFfX4nbSoQ7cMJLnSLzrZoDWwk3oZqfJ3yJfGhs",
  "key36": "46MkBZNB1dPwgwwBk5Q3RqCozBeDWAdZQVGsnZPY9xb448jTxoVfwydkbanTi3Tp9nXKzowArag1oNUFzwepKaBV",
  "key37": "3k5duAfPuWSf9qRQo4r7ycyTAF48dp7kWopexqfAZqpqJhZrxZZHTJCajyfpdkFf7hnsc2pPAdhTCqwzawd1XuUN",
  "key38": "4XitwFrpnFnB8EXrhNV8xqcnG5VKnPSYngUgmKpMdi86heFU9a9sCyg1vLHyWn4fa7ztze9psmGe8TttRktEAgVH",
  "key39": "4221nfdYJzB9XSGTK58iS4E9Mu1MpptLSDPFYJvK2zMUZqwVFqZKGtMfM8H66yn9cFwUYn4VPBieMxM2AcM8zvw5",
  "key40": "2g4MaLp9uVSgPz5CZwbPbD4HYze6MTbFgk5NqRs6GEiPWdUw9dV2qW4jfq8gzx7b3WgiXKfUzpmRo2nai6DPBgHz",
  "key41": "2HQa48VCrDNfTtfCegwmH5hwBrRngd2TKJMM5AFkHWqAmJyBqzqqdxw9pFuarvt7T6LuJQhJjhZ3KP53YbD25YAp",
  "key42": "5u5ANDELpGwVqQsPkMXSv1kuEj6VHaEEzyd7FQurZo3f2jiHdbBkkUSVLZhgkMZQSVEJrGUQzR2AqxzX8fkSx6Xg",
  "key43": "211mz32Nx516pbMFKEFSvcUWtngp9efJbkcvE5x7J6N6r47RLuKgzwt8BTngn6LePCwAAURGmfkCC7HnuRF5rq8r",
  "key44": "4fNZ3Fu8JuHJ7z5gLJPB2a7TkXJMNGZ3dZi43RMVRQoy842wKwz37TUpxS3vgYFnwZRxs8WgayY718fPdoN1pMK",
  "key45": "54JwJgHZq3Qqhpa8Rp3n9ZP9TBBCPPbkGgNeNDgeutbx3ZKs37SNBQAxTCDAGzJmPjQH2GDWKg1orbUuSMk2r6G"
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
