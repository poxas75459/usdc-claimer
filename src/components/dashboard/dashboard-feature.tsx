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
    "5EGQRsPnWadqTbaApWZwSf27SDqN1RP9FSvF9Tm2ZhzaSW8av6MxYv8Ex1urZ4GEUH4nugXEro1kzfu6XJoPa38S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hn82XsnGHcy5pbiFBbAKaewnDWSCoRSC8bwPquwKM9AVgBaxH5Jz5KM2qx6aYosym76U6eXk3krmhYZ9hdrnSgh",
  "key1": "5XDrhN2ZHfyLTwqbESKXWgG5g1A8cGSgTR9HNxxH4mVoKmbCHRj38eZQL2oeDmEMZhwVgrsooeWHZVdVDxUBQD1K",
  "key2": "4975A76XDv3YGYYMjxkYqrq1KpRC8cqzPP6pdyP1oZwqpzzK2JTDGZfNGfqqcNPCXSkuFi4U56t4kccUWUQw8bSQ",
  "key3": "4N9GCKruAMZon7eKBYSP3PbBbFPBT2Q2GLUsnnSNoeih9oJDHa9tDvaex9hebyuiiMR7DpLfCHJCMBNznkjPH6jt",
  "key4": "35H2xXayUnbKwvSdAyVbefvemZm1ETTjJkEj252QXoJ5jvJyyRXamUwSNszAX4pVAnpQHjiiQnD6q71sqoSkYd5y",
  "key5": "4rq6FRXJtKZpZPT8dErd9KiTfvb4Ge7YHkLVjrMPaA7xwepQYqNhuvNQNGzG3TDAfH98yLVm6fxBh5eJdpGukhbK",
  "key6": "3fVd2WYWwSqNP6Ma96ZmG2NBRue9HvYp4naKPMJDUZBAvTzYq8Mr3EZZD8CrgcBcVnk5vyfdUmp3gQWuU22RcuzW",
  "key7": "XAEiWBtLHiNupNh6P5DZwgC7GKuZMnUfmy5Tvgm769tR2Et7SHUAgrcpHx15WsZT9AGnHyDYQCCeyJYM45xGacp",
  "key8": "2tSXojBFHuWWXj5K33WNSGU7Z8dk5wPjQ7fg2VrUEVntRMtAb8fw8GQR4VUeRB3HeGDrRifCv2ZWCLa5xU3HKoVW",
  "key9": "3RXwURRA4BfoTiVmXYcGzzqTfYnpDeBtggopLnn7PoawyZ9q6P21Q3aRChAcDgETZcZygUvU2Rg4dbsdeCkbZjU3",
  "key10": "5xMHpZrptEHrJuRKuk1GuVkP2cVqdLrAadzp3W4XVEDRMbtt38w94or1Vy5SXw9GMFcdC5z682nEXSPKnuvjWfDV",
  "key11": "5Yr7i7UCrsT7jizVfcbVY38QqkQreVwmXL4E9nv1SN6aiYbQVizPWJbJudMZBGW2ZvhcSPTsuZceD5dy6FyuDGeB",
  "key12": "2tZBdP4XV2DmQHSe1QwoM96VyWm5nE4YJkudArtmgkS4LJfuYvw1tG2NNWKmRU4QR5obMehjuPtmpax3LWFJGx3D",
  "key13": "2YnrYcEaMKipKZVjStjAQ4xQQba1JgAjhF1Dnncx9Ki5neZAGfHQPLvPtSj5BSfJ5niHjYRCYAyMPVdsRRzCYtrw",
  "key14": "6sUDPGruEZLL9ZLBfxmT65rmcn56pC4q91BY7PeTnxo9Ae4v6RxEWYrG3qPMRMGzrnHH1qnUapqGwJC6qoxBBar",
  "key15": "4TanHcqkw6Qhxc79cCWzuFy8qdSXHW4uHJ8JntnRhgGAQxXXGeByhk4AHhQm1KaKeH7NunoMkEeR7Dc2MgqMpUiA",
  "key16": "MS3N7V8cYafs359oSrbtyqDkQ6dJfRCW5JLRE3jXotujt9VhyhFmVXvkMdN4Rmxx9Et7TGu1ajXiM3GEabZnr6w",
  "key17": "4R3Ytd8NXvPhGv7ZGKPtEFMGtCUR7mQw8eayGo5nNHQyThKSbS6j6WqkoRw9seeU2SogM8jFsJuVbHfM1U98XVUb",
  "key18": "j8QcPRUUtBy3wkP462LceZydzPDk7sSFjHXCgEza2s4RND7r2Du8WVd7zc3JLZWN8hiEwigskhvJubdYJReytms",
  "key19": "kVhERsPQnR4DfDynV6vgqWs1GKAXU9ZqFDdx4r2GTvq4cPC6BdKu4uZkZKfAGM6Pn2KEt47rXAFst9mj8MyoiHB",
  "key20": "2Y6tev9vFWL1PgMYgAWmJpNggoNRN3i5SYvPDJ4uHzDzPfwU4NeWFGXvPL8zUY6Jt5DQdgMVvgY37LwMYPnNPXZ3",
  "key21": "5QDaYxmy19WRqz8oHBN3W4ykRL45XC2G97T2NuwfVH4WrXZNxorzP88C8715PqB5caNT6sMRfqWaVy1FUVuUbbAP",
  "key22": "23sw5pvCgSmDn9L2b4mQf5UG6wMUMY7ZyZ1sYZeJdCnvVsthaYRFmPiVCTeJmDHMiB6ebqkQSU3zUikxUdY8RFrE",
  "key23": "123vBbrRz5REyjnhiZ34vTjDDd5ikjwe65GCLNLwhKEg61UeCUR6Be6avm9op9ZRTeyN62TafZbTpUj6Q2hqSaVv",
  "key24": "4Qgjsd6eqmphAzXuAoFdomGySRoEv9HYJnpd2MubXU1dv5QRwAuDq13hegm2X1c4cTZHDzy2mNy3AySSivgC3TAL",
  "key25": "RLedAx4SNgYBSupxAawGmwgDp8pG6J9xzzekvc39zaLKAQphuSX3Uf5fLf6MraGRNkapNJCuW37KCAZ9he3ENFR",
  "key26": "2fres78w65upbfuPHMA9GonEuJx9iKfeGwRXGRVZh9oZNg6PaTKtAjN6FJ9sXjGaaEgpXFYrmDw6FCBVMs3i8wF2"
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
