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
    "52eSoTb6owfbfYLUaie8NXRxgJxV8H66TCkPw5XktQ13MLvCqbzdEUHSQfyiLFnppa2EpspDPAEXs2cNi6MJJyJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ytNotLhieThvLeKeEJVyYMnXFVxUdSBBKa2UYxFkUu1fR95Ki6rzkzpUBRbCamterDFELJeWPJxMuLa1i8XU8eH",
  "key1": "4KKChRbMmpBSMiAbxeDxt9LtQJcHzkfq9nxqcwpYpLMCRaaGyNbKTgdQx6qCjZQNvSmFryCngT8CZahEtLhc3dpw",
  "key2": "5LBPpZQwuQFAhd7W1e2UTUqBTvkfVgF3vaAhrs21JPUTCaY2fz5WXV62HdoFZCpwFkUSmNyNF4nYHDwvLUQFFFmE",
  "key3": "ymayb6ydksEAV1r3FAyCoKSoHMB55iz9tkYq8iwvKtiVN72YBj7vK4s4kBgjd8FmDYyxaGDF3vTnToxW1fC2LnC",
  "key4": "2yEPiv7RdnxRVE89RoGW7Tc2KPuTrMymwezpDmhhhJDqa8vWZtso7bidiqfrXpN3aRyHgVtudkpcZ81TEQgfjd32",
  "key5": "5j9aJmRukqBHP3zG48h5NtcdjcHzg2yznBeMs4oX3VaW2FnKFxFMK3pJv7Pk5qifQqEyQX8dHCUxQVQ4HhaiYaSG",
  "key6": "2rF8sayFiNTWXbyEWmm7GDaG73KoSGm2svg3FTEBXct4Dv2icDh7Uw5SKJAQY8ijH9VTbhTwPqn47S3gKUU4VAZm",
  "key7": "45oEQMu7NMbH1gTUwQou8AohQLi5TVwYhug8rSjWB4NyoJPQVtAR8DYLM4uiUeq2aLzSnAwG18kEzt552CRWcPdX",
  "key8": "R7kWaEwQjjhXbZcdxDRvU2Djj7FRAQBSaeWxYP74L22PE8bQyZMRp15VZdKQg6HQbKkc3sjvZiFn9QAWqPWpWF3",
  "key9": "ztvA2JS54w7T8q7preFqLQwWZXxy3nTDpyKrsovaTEi3SMUVBYNWZPaNX8SZnXhJRpnim93Ror3LQSkS2aVKgj1",
  "key10": "3awyWR6VhfHnc6wCTohL6UofWLSuPM2RjHhEGibWKN2UuMNNuntqLfDod5MgW7H9KZwdAeqVuGerG1hZqkzaqS7n",
  "key11": "3uK7g4SP1ma74bPYzESiV9LtcwDZm88HL6TXdvz5DNh51mfs7W5GSfpDmiVJB9xPzduwWaXVCSMHgGiU5ZKn9suG",
  "key12": "2xqV6okPi4HnqWShcNDj2WCZDDzcsHJxpm8S5Zr9V3577ZrD2H5ZGjtovjHYW7UDYHVwghJb3dY9b9bvusyGJccV",
  "key13": "3TGimdwBF3w7ssjGtwzQZctd6FJ9vWsyK7sfzjiYmKWSAArtJYi1cwVgs9M1aKZM71wvCHKrHm9zHGeRNNhhhvEn",
  "key14": "2X7NNFu4A3q5VT3PAqyxmU1U3y2AzV1R2PaxA48UoekDyTeGeq6dwJ8X72LPi7JDbwZfuKW1JHkvqiETZgtZ9htF",
  "key15": "3TQxZpii48HybjjBVvAVXTLCoi5EahhuJtabArMLWkWEXtYTvMxBdywbLx89irQRJXvj8AZBHJXSoT7N7E7yDZPU",
  "key16": "5pUNspjzhWBMZz24XDwep4vGBq5cnK3w4nQcFfTTRXZjdhGfs9x8a33ScAxV8FPDYC9ts1m3XVxtF7gaWHKRppbw",
  "key17": "5Sg9BDjcVJrEPUHude1yvL7vAx53bHiyXeZUiSRjbm8gVsLyfb6sfvQ32hv3Ro2wMdX5CvEnUp3xuQPqDxV73Ytf",
  "key18": "4eT2pEnrvv3yURwadkm5gKsVMxdKa8EvF8WFKQwjgar3ijReS9rAfq3Qw9MMFxrPQCiHxSHa4DeJLsAtYjGEvgcY",
  "key19": "5YJkMRmFdmBUpMUY12MvxpTe3bRtBqPEW2VFH9gyCkYRSNhTb652ckuxmMqe9gLwEXfy8GvgKJSiaN2JrB2C9oTt",
  "key20": "9R9w9D6RdWB9vxK8rjumDSBR55763QE8EcHQbWBFSQj7ayjxNBjM7d4ByMCePErkWTahuqS24Cw2LHmprErVd8X",
  "key21": "5Vr7NX67sDGEM9SRXCv4hSDVoUvWW49xRUqWbz81Q2ZqyahwCMikzhSWbiKKtxaMQN4hrCYRhgot8aCRRsjmjA1x",
  "key22": "3PLxoS4ciJzERL2TKzkFxXR31jMiZnZfam5gcrZhkHTek8LYwh1hPoQPzYYBzgvgM3kC1RJfQt3UicrW3UXYYEtH",
  "key23": "4SuVLzQYts8NB3K5YsWWnomecHvkvSHSLWEzaSrbcaEgwdjoBs8RvEwz1BmVuEW6jBu6HKbRY2U3daEkLdqHt88U",
  "key24": "5aP7T4stW38iouokrxqTQdTgSf4YKnA1EBuxmAnQpLKMbHDMZzz9EE4FPFwWX5QJSUqx4MNfY7ksbWtJ9vXvEQG7",
  "key25": "2oXWWmbTACZdcbCrMrUVCycsLTcnditFpoSCk6TEgcV9oCxihkCUAsC6QH4avfzNscvoLWdwWkhfTKhKQj4mw1ju",
  "key26": "ejhJnWLWUTarSBozcqP1z6vR822mR65hqrwBXPrFav4g281XneHx3U5xYDLCLaViemFCxbuMZWYdkjH8KqkxbZM",
  "key27": "5D8ZzqieRebx2y8o3Qu6AtZUoZoBwh7MpKv35uvSEogf6UwMQRCrzCqYQ12aG5zRBynBDGU3j66e6Wm1dbSddDGN"
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
