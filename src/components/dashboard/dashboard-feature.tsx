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
    "2tYnvRnstDR1ATMK5u4jnT4GEYyPb95gVQCPrwr3ujXgnH6eVytW1hpc7yMMD7caBQd9GR1aCu3MKyYCP5zmGdpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gAS7fVUeirrXqN67XQBor4epTQsVuxttsj1K2TDaBN8GTYn7cnoS5zVVXhBQhkwQyfzeSTgP1ZxqaPhL14mN9A8",
  "key1": "wVjPRnsUhpv7auUjtPTwe4TChYryP3qZFMbp8jiZG2XVbLrCbibkSpvtYKJPidC7TFyPLaiiY6WyAEjrvWfdHzK",
  "key2": "3Rfx1ZxL7swgfP7gBfera2EtPfxUJv9M8bksYfAhqEKBUpRnc11tyrxHSJK9yjUXZp66wKpYdwTHmihEEf2zmdSS",
  "key3": "2CRci3uYgB4Ew6rRX9vBvacWwH6qJAgTHzwwE72xU4yKQsToMvqtp4RxQBjp1ZCgznVnA2o298hoE3uvH8j6NcR4",
  "key4": "2yr9feX2sByi5xndzQzsk1Uc4AutRDsUvjKD8zeW2SWbzA7MiuJHyUxWAdUNYWSWfbbGQFEHBcBN4fFRaFZ53JNE",
  "key5": "LMt46cR2yN54jzwv8kmxhtErnFA4gwDYBW3k95x9Gj8Xomhvp5QUnYdkevnMvLoqqs6AspunDGQcjnt1L6Xfb4k",
  "key6": "3iqevz94GpDjrVcYzCFnE6od9L933VCXHGi8RWRFdnyzihJe9vd2evv9R17NQCKAXnm5hWyyYXeC1rHXuCeKUP2W",
  "key7": "DqEAbEpeo8a9RGVwHtFDFtdix661t7Qzx8dVpExANn6N5ZkJ8nYmttqskztESxKQeNLANhwScic2Bc35vf33d1F",
  "key8": "3iJTPMpe5GvFiQegPjUf6Nb8oubfd6D2Ki7DA255tzgGQyjSmyEpNqYYuScMiUrrLCJWVQ4AhS8zWZGKHz3i8qjZ",
  "key9": "zzjcCtvnzd1uMhVDUrh8zrCmp5Xxrf5iECeNyuYiKVEZweimt8B7wHFDbzNrUc2fBYT6vU6fbebY8PsCn1bWrBh",
  "key10": "Zx4gcDtoMck51RRGPxXNmJwXws6YxuDpa92RcQc9F2nTMMHHyBM9naaAkE3nsfthg6EaQRYqSZoeieGBFPa4DhL",
  "key11": "Dob8ggSAdpPHb72vbv8mmiKWKj9o8TBFYnXwfBsysJC8qRAghPSb63SRrctp78zHU6NkM64x8NDz9yFBBgAeMNr",
  "key12": "2J49Mz4iDWCcHMXxsfdSG5W9fqsqGmWojAsmLLqonTFgbbp4hAQCdCcCYsnpYdPSjHKmNbXHyXxwVyf1aMz5R4uu",
  "key13": "2znmzXgYP8bCBPCrMFs3Mr5Tado2srxm3HcJ9KLivEoxpg8e9WQmQA1AjsLZnkhnweSSAgYufttf1Qo6d4UeLfJ9",
  "key14": "62J7AtZMrwpEt53tneToeHUzkbyP8zN9vLEdxMkP3pR56nfPd4TcQqtFbPfxXTLAfk58Ce4JhrcjRKActsKSZtgk",
  "key15": "YcmdJ5vmFMgnbC62GH4GaDXhhBdddnSjPncHg1EXAkFK6sqp9hcqBXkCqHGwynquh68vb4AQmFRqHnFpf2nNVW5",
  "key16": "iDTn8B7MJSMEV6pxZedTHcuMQgkKZMShU556FcUPmEx9T5b3VDxZode4aX2RjpXQeFE32XEZSafCXdN3vfzVj1J",
  "key17": "4niHVEbTYKh2gxzTTFhegj7MMpi5ji7Wf1zMvmtdVx38HsMHUZhNXEtoip1bhpA8JA4f2RNkbeYWdiziijBQGC2M",
  "key18": "seYt16VxA7exxNfUXLrWKCFTKTQzjBXnn6kbp4tgVgtFQajidrdnd5Np6XyrqwtVsXTXXXrvDuWDVjSwdjzUCo3",
  "key19": "5SbG1pVGiv4gBqDgnKKLrNNVVxRP8kpeGN4tPN4qxGmNYfvyMfWbtMCRkkzxjCLY5eBHwcmat4GyFB85vuT9LasG",
  "key20": "3fP8ST8gcm3syBMUQDbEXTqqgsBKT1fb6teJPRodQkrFUM54vyVgPZtXgR4NLWuM44pZgnyoLmmGyaGFk3tZXdJT",
  "key21": "4p5iX9s6gYwwF3sPGwLzRmQKEmLhGrxjtCwEiwHKEzv4xJL5yBQ9WxWFQFvV7ywMnTsiHZkqWEWKHoG1VFx5nmtD",
  "key22": "2JQ37YGiRXfqfAckEmF6kX4tNMjPfEsDJ47aWrh1sr6XEQsRYHhbXzk7YMJFogLjm9X5wp18tBVjo6A3ckoUon5w",
  "key23": "4xwLejfjeeS9tdbQpzhtF6mC1KtsUZ2srdv4QRw3ugLbKxezv4qmKbj1VifrkFin1P7bE7CDptE52b37k5H76sWJ",
  "key24": "2T13XKskeyUN6wcnuhYXowaRPZX1o6MJ2hCj1XwQiyKvvj4uPfhekzJwBJ4yFxf1MxngnHLrjMWCAfhLr5dxfvuW",
  "key25": "3qvhrkt1CMqCqyGJz6YYyqxNUjBobyDkBadrjBSETKxjDJQztSdvpSLCCSChsiKxXzd7CUzri2Ysmbyo89oUc12E",
  "key26": "BbrpGiWX4okjE5aX77qbMb3PzDBYSDGqRvpiMWgvNBKTXez9mCYc4vmiEkr7R7vABL83xj4nztUfcfVghWkbyRp",
  "key27": "4Y3FaHnv2JwNydQnAJq8e8h4bfq2c4iAvjTXuA6VMGxN4dKG3XHMrycCmR5Vv1oEoBX8ehisTVXBZBVuMNbYgKZ",
  "key28": "5VBmtUU6R9h3DDePpTGN4er1LwVA5gNLyfdpR5WGc5W51PLCAL3vUXiFBEnNKycMtRnXvhQYa8SCNLbBVmPzgHdt",
  "key29": "4V3J5HPHtHpQwjyNY7sSsnTCoFyvFoEt6QaKHLi4adddmmMnGgBSbNTiwXnCQx1dv45Vnuc7YuyEkKKVwh5RPQnv",
  "key30": "4ADfVMQZxZeSZRE9RxmHehsiuLRtFxkbgeoC9kfoWH1yNdHyFh89tfqLQ4wwXJPaJ7MwT46H3bkUZxz3DMMMsQD5",
  "key31": "2GtajLSmuPG4Fv495nt3QiJUY6fjuaQpNm8HLNFj4eDUmMHNfm2RpedoCsVhuLnCWSrbWxgiGzrPH3eEXeLveXZk",
  "key32": "3JoFURsV2E14f8wn8wcFqZyhFHGpbhmw8fqMiyoUqa41rgGFPMgf1JDmoa4pnc1J9wKNJuS79FaK2Sb4BipS1xAh",
  "key33": "53bWqzh1UVebwzdDf4SRvX8BvstCXLPXpDfika6V2HUSmrCvhkW2VkA9HBHKGKgdhQdwibinQN6xdz62juTPpGRq"
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
