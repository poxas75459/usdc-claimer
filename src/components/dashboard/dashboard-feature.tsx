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
    "2CXpCU3fDb8beZCnMLWMrjvaDzCvr3cJJ24EXxFodhBHyME5TEA8SFE4qDjkuLRJ6sqtfhKxZg1jKuzE64tJ8z1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EYJpNqvPafRJ1pME3aWvR6LHjoWAwh2RjPrMA7CoLrz6zCckjzLDS5gA4ZbsadDTCRYkrqbKbC8EfFv2sLeXojQ",
  "key1": "HkVRXZn3aHoW6J32on3v3VpDbCn6Lf6tA6SHty891yjKaQsHUhUmzXKmR3ZHGgNoL54SqbRS4nXSZiBFSDk47jn",
  "key2": "4DQSnPF412jFQcWq9MxMoRHChjxXdkNETQfyNrLsvVJ2ZZX2znFFtdjggt3kMJo3pidrnBxXanAYDYkpfMUCd62q",
  "key3": "4Jotv8kEkv9cVX4uvLZFaL3FQ3s1fWcPGmDDrsSjz7bVfEaJpBrVBUvQFjsCV6FeMoT7zUKjNaBvQAx263xoU2bg",
  "key4": "W2ror5HnpnE7T4ciJP76h5yaAKBW3hK6tTycHipirbNtvJNkDHsmkr3YeGxj75c4MogPh2fzrDeWso44S76K3qH",
  "key5": "54ooS3xbfqL1FWdGVrchV8NtVps7PvFCLzo2uF6Ec9fVyLs5vcZEx2PutNYxKDotEjNFsCzJC4LE7PL9pU8CoZyh",
  "key6": "366aknDWeqdqyWh8cA55dSBqv4qr1yrpe55wiekk54gh6QrtjTDi6imraJk5v1CF6cmuUPAMF5W7pn6QDcnw11bn",
  "key7": "3ty3WVx95eybBrQq6GmMBRzQszXNBSTqjPKXwczgXMfRxSGMULEWomXUaeqNoek7G5cdJQ9kmP5JcKxk4KeCpnhC",
  "key8": "4iyMyShyv4ttmShrE6ynskMLNthAfFgjNy3RZkgckw9azkk56NntxbmDb1CEh2V3Seit1eW9qRVi9HsCqcY787YX",
  "key9": "2oytLcHgvzXXVcaXS7CbBVUvitbExHC8hbXdCZ62BNv6hzZ3NU4emAmodiYXqLKyeJ8jCvUZgept1SiSejyjusZH",
  "key10": "BtdBiTu7SSo27YP8C2CeNcwFSTTzRj2hCCJ7Hr7gSBcoJeHBCrx669eM4ptdi6jXBeaLtq9pHxzUAaHNyCRaHze",
  "key11": "4YQU2ziCYvmYoZHpuSXWLfemH5VHfWFyoKrrnSrC5ZZd5ZxhWCnWqEeCji3Twk5tFQom1GVebLKehPgKCeuTUG7W",
  "key12": "3zTQEVu6eEzCo7pnfw5h5jcwVFBJKmKGjPw6xZnNrGkLze28PJx2kZm6AMcuQt43bNgU9PJrewbqHBkjt32oMTxD",
  "key13": "4ffwR16Nhy8n5hQ6m2xP64ZLPCFk9A3kcu1hSc2kNXW8hgLmf9mJFyi1udZTvLwx4XpvTKX1n4K23NJNagADkg4V",
  "key14": "35e3KMKfcn4Q8higxLYEbsfrmDyZAzg6JddvKzJ8vaNyzFiFWzQ5MqVZBaZtrmJLDJYsDf82YuUjchSNy2SVBSd",
  "key15": "3nTymuvZ4xA4et3ufbtnDfk3vqXdjN1w8LgaTvqrnEeQDd7Q2Zu8FdPF6A8nwvLghX5VNDfKmaLu6ttncRgcgrsb",
  "key16": "uhXpSCqBaaZYZfx7PXLqcr8EweFAmVTbrdabx9LP86J6SEr7xafPgwZnEjpdr6gx7XdfEwxqpMpTP2PopQnNSrn",
  "key17": "zff1ZiZKYXKzNUCYvaZ5WXcUPkVgxZg1nEq8kL6cCtQUM3JiRWhPBC8p8XQxeseVBJGHcybSxaFzQKUHzrbNB6t",
  "key18": "25qw6qsN2dAdfJGLjpn9DNa64CB6egXZViThanA5exdPvmKgnc1ZiQTnvTty4rt8ceNXttYcSnxD46S58ArDmNvZ",
  "key19": "5XhsV36PhAQhsMV7nyJeb14r715Zmge9autjcYw1VrV9RaWKpqcQsN7B6ifQSLcZJp7pJWP3JJ47YNWtbUcHNEBK",
  "key20": "4H6jN9LXw3rNbJiGAuTSsDJnUVZhQgq3MzcABvh6ZfAv6gBztbkd1srxjtezrTwqKtvDVDgU9WLSshw7gJPyctrS",
  "key21": "4GZwLdm7x2yjUxbngR7XxKbFBqTrs8m6n8hKjG7TsMc5VFxrdxB6C5DUEmY1CFsAafJsA4iod6JywjvYnyEEkCeX",
  "key22": "24JAiqiPwnaBzGs1co4q5hZ6Z2nZ86JMyokY3SFaLwmmpfQ4Aqn68CVbvAV5cyhSaMDK8n2jMCRKhwAURi6BVp4p",
  "key23": "3RXgopHsrtjdchf9nrkLppf65jHayWSWxX7pgcJH7ARGyBrU9xbMKnrxPibuZvZkSswd5Xmd1MrWv3HEt8J5zjkW",
  "key24": "WfJwy9ePhDMxyGFqfTypiTGJFEmipRKTyH7GZRRR5FAfRoutbZq5VanYf7p4ZvJemk44HyrFzQT9c3D74uBsX1X",
  "key25": "3u9mZioenAVBRd9F6ewUrTaFGYxAgzexHzcNF9Yujd6CMhTn9CseLzoAV8N6qcEL3MzFEoeLvHwxHhFFup1AbpvL",
  "key26": "3jKoP1b9EpW6xa5FswEyc1atpXijKSMrvd32pEhB1pdYyHNtKQcm3TDMkC5Mz3hETbaFrTQ63YCC6yMCn9Ad5swG",
  "key27": "24G8m18JJFUgFDvdZweUr1tR5BZ18Gem9F7Y9j1QZffnYWgJ6o8CaXojG2qX6dGiqpyiVuAtvjjCRdGa5bDVtii7",
  "key28": "3EZznyQuMvetSC1pnucCRp9cpXzDa9hRcZoAw7xrgENf4EJ28fAQiMTqhvurNS5NoXG6C65cmWkrRwL8kEnwPc16",
  "key29": "2LJ66Js47dbdiviSwDvpVqDNurAfJAG4Muvd5HaMKTrX5Uo8DSyNqT4ArqmdsNZVce9qp1qCBGuJaXdZ5uWKMLBa",
  "key30": "4dKdzNi4YYz9N56nDPwCLBPVB4QcpDck8PoJiigDFgxqyJetija8x293gN2GgKQRad7wVSU11BFy4ZiubM9GoHTE",
  "key31": "2h6J2wZNQTSqYgFhwHtddATD3eq9TocQGQVTLp8h11mfF9pXXnimX6XL1zrBCtscVm68gjW3NzcuHwSiUMYF9ff",
  "key32": "43er8uENXEkU3wE99gBRdV6hbENs1vCMiVD8VynzoVZEdXK9JPeukJ8JsqA2KmcsT5nwcWbow8zx4uVDbH8oAiLZ",
  "key33": "3EGe2NkDrnd6ogSJkzU1XCerCtCmo6NC2tX4oWo1VhYgJG4AhQrMWksxSP4JWhaX4cR6cfjEPAzysdiNWwuMy3Qx"
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
