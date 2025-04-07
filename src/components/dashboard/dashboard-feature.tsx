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
    "5EsPqnME194bYnQaAg6mvqx8brDCjRxUbnpVsHd3EmFa1rcy4MCZDh5GJc4ozoNZam8yxkDW1uUWnHV5oB3hM3NF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UvCNZ9kGajR5BWVpZP4z6or8U4q9QUXf7AW5hkv2wwDxTynLXBZwrwUAmqZRVNvugvKfmMPoTWm9bK8SkH6uYm7",
  "key1": "3H5vBso35Xi3WZdFLM38JXwtef3Kge3gxrMB8uFftBBMToNeab8jT2WrzXq4muHP4fMB9wPmPhaPeTaYhksVEbup",
  "key2": "56KbXuxYrS6ySrJXdq5CA79oMwJoA5RjArVC6mnZo634XBtQDM87f3RhTkD6sNJZKZyQb6WGtpizNCTHiM6WgHpQ",
  "key3": "5toNVNXC8PuKVLmA56V4ikNtdFjG72yTbpLWiXr3HnvHDKRM1vZMvCKYfvh4p4WvoSmEsMAEFNk5cVdMA9Btkzn1",
  "key4": "4gDBexwhVatoZSeF98sutMsux1EXd5pLxZZeXViV2gAQrk4w2qNdfbJPD64UNmHegFxiLHekvyusHVCFTHgHHapS",
  "key5": "5wdapKhYfz3axmte1ZnzXcUB1kC63rUeXhVxYKLqD2v48dWWJ4qtFrJi82bHxTt6rF8ueSYBLwmQ5cVtxZrTdPTD",
  "key6": "3kC5eLqL6ZmAiNBWKLikomo6kTEyY6dMBqQqMvx8BsdtR16Uxtj2nyo2jcJDkQDJ6ZUanx6e4rFij57Nty1Rh2SP",
  "key7": "2cdzgscD1Qj1Le88kYBYpeuYLPo4g2D7feMUdgqsKMLgqqYiFm4CdbpRCv2nx35DbAWXhGs8dMneq3SvieNA5WcQ",
  "key8": "JxPbJ1CBwkp83ETvi5GrWXpSXLzX1zpf1DbJs24LHZTu2JwyZXXALowhwhArSXtTt6NvBHr4WwYXyofKdjXiPEW",
  "key9": "vNzKPzMQUjX84PzeHVikUH8n2tD2tSTbvdv94uSUJbf3DnQSyRJe9aRyNSzoJsLemDq3NS24CbmLRqcxubqYJ3f",
  "key10": "2KkKAERBKUG5WQzGPrdhdz4VafUcuouBtpsQ9qHA8WfqfDJAtnDVc4YCWw7XqrAvvDa1DTorGxTYHWhsR8f68LSX",
  "key11": "5VoMUSg6ENc1C7PW5fLM3Gd4bpksie3xw5K2U89A47ZoNFRjYQiSkqeNZ4T1nfseGTg2JJHDGmr8EhLwvHF6rMNS",
  "key12": "3R8kDtaeTVFHafSkpmywQybnTXHtfTumin7fXMccMYG6BaMBeGHKF2zLCXgyK5Bqi5RYQfjQncPFKMyxPXCwgL8",
  "key13": "zQeDfGCLi8KRWNbZVsrgShQmgjkiNJfYzCtSv7k87knTvaKZTXAgmXkfFJ4oxd3fn1AUUKKdtuuam9CF218iqRy",
  "key14": "5yG8XxAuh8pNPCmZtnuzfqMMPmX6DXLhMNW8GZth1QPBiX6mCvJaZK3DzYDYpp63jJYAcgkVWyJk7Zag7oJw5eqH",
  "key15": "3w2ZWXdmdsGfiTRMXZKDjCxz1GQyUBGGbCya6ahUrf7CW3mvNBtXZbLkyZazjnCCtDgyq5ugW9gkn9LLrUNwRM6p",
  "key16": "3egUHMEZxPh1XR1aoBxRrbsjN6zwKHTh3DweiEtXxQ8tdTNX5KFSXGLqLWdZdgUZYXZd6B6uTuhzmdpu2BW4YZdr",
  "key17": "3sMU2yLS9kkJHYCvNaeq322HFTm3Tou6g2ki4MiM9vHh73nmMaswBjf5e1udReJ77iwwMjSjb2mxMsfepHWLqBxa",
  "key18": "g9N8NhwZKC3v9cpM9ReYoevogSFSUbf8KoUvn76YGvBSmrCXqMiF9wX4LAXfdRVBWBatDHwCzYunqZnkF4NmvUX",
  "key19": "3WYvqa5GG755jssRDBgLVYfk1JdEC4SuLwVGboSf7pYz6JpfXSWHHR57QYpKB6rfKUyNb7UTzasCrpvwaQ2taaYs",
  "key20": "129y4UmHTABzaKRqHcT7yhCMaDVUKGJHPvky24Weo1ZPqo2o294iLXdwd47CA6fqnJv1r4phLgKSDugetCGLzcFE",
  "key21": "7iNpdu8xHjeGYPJXm7h8BCYDmEpqdJYoKZs2ZJcWBbgAmMgxeBbWuRRZwvPrpJ2gQTvk3hXtKWWbYwuA8TRQEsg",
  "key22": "2bop9tcgKBGedzsDkFGCvParvd6GpQ2e5nrhaRyGvwAqNMYi1pFPMHWfk7W46nfJnRxFCz98sRcKKVqBstQZcWEp",
  "key23": "2t6b74nNDXTss711SNYdwYEzwLzRuvEumK3hoarhw5i9VaXeJtHrYzNY3z7f5HkVKvmxEUFazSaTgoSTWS6g2QqS",
  "key24": "25YBaDHTHC1FpyWrmBoXuAsT7Ft4JDYgxiPMDXcBZ395zq8F7TyvUWc79y9XBtBRVbRh2onoZfFuCNZbzVBiafHF",
  "key25": "5cJAfa1WQKzdN7ThmsdRHJD64L9fBz1rPT3nEn1u1VuzjDe5yeryLRDKvWX9UuYL4rvsfuFTJL5xxnkdZmX1EbPU"
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
