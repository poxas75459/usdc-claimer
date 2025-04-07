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
    "HZyDhErsEWomPLMrrHYS3bNYTuPYE5S7iJEbWzZsEZ9PGsm5gP9iQDQxF88syFwk9zj1VYrxmx8eeUwyjDmyCpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zbg4uWmKmZpmdAkBDvYa3oBQ5bWpYoBpTLRBAm6aPZFMaszdFTtjPLu9T4JZpNjGArX65Poz1sjHEu5KUFeqmi2",
  "key1": "24Poe6WieBWLhnFUVRpi1FA6FjE5DSnZHkHD3yC5V4eetyf3P6RipuDWMtX9qhg1WenKmvwNksqjAmqP9u9weMSW",
  "key2": "658kZ7KiU5xe7Rhwi9rt2CL1dCmDG4cmUkuu1r7ztiRVSAbGzW2Mu6W9JhxJxAYsjgSn1xpB9HB8ArdXYwrBrHch",
  "key3": "4FE4VHn8d6pgdNaLMTNyzSm1m2kxNdVUgAnn5qzJHrJeusKM1z41M1kwo4XMgPLGKuJseY3ifQbd4S8wYWp9DdWh",
  "key4": "4pjGuYp6C3gXWSHWoD8Ka2NnoLWhva941ZrjZowhvepxzYcPXgqGbkVL63L6mKJqBf5KbGcSNZ3Mqi4F7U8f8Nv3",
  "key5": "5TBq9YGGJhyBiWiEFkAEFJHpxqK5zeau25wtzY8zHLp5eQ7xL6jce6VZ5QQJ99Qf9XENm3FL2e43T4TdNADzhePc",
  "key6": "kW9vp1vBGEKWdEKLkDS1SLmGMQwxkiU8DwwC2pqiUSCmm4EabB9aDJaJHziP5WdtpvbLifQYh9or7DvB7DbxTjV",
  "key7": "nxCHWaJHTJrrAVzuHo7Ab3vtSquisQUBPDto9Wb24MzMYE5VkSkB7BLGS2NEm2WokTsPxuXiJwm6GXyjcM5frow",
  "key8": "KqtwxtZxRuRhhujr99Y2xKkeQoM7cpA2K42VEv2XmyVvcMojkUM8FXnPXFBxdJvH2kekhXfGpSiLQNmqWY4payA",
  "key9": "3yqkmT34ET1WzPgzKWvKAhxG7NAfoD4cxobCnuqe3H4TLFwstGuhcWxrBrrvvbs7d3XvLYF5MtKNX7hCxN1kEUBH",
  "key10": "3WE61tVFztwkpxrA8dFXaBr29J6v97AUngXCmhE7xArCubDrQWJxZPzoEm3zgadCgrHZBBVHxctP5ULG16mceWSJ",
  "key11": "2YnXbQN5Kj6VEZn2fcRT37B8K1BNTKNwzyd9xxtvDDA7ZtfQgwkp892mcC9oPUkSPj96ePGyqgF1mCCAmHaR21Jk",
  "key12": "kSA5PmpoVG35VNaJymsHa3ky9eGk68qyu1Bhyw8eBpHAgxjHrq343gesDjX4Br4u4sb5yihPeE4NB5oqmPxfWzL",
  "key13": "oeUB1kw3FVNY4GVyfENGHHp2o8HZBgvLDLFeRvcjWwAkKRnPTdmdNheHpQW24X8seU67GML7SnZLz9J1JGKPoBT",
  "key14": "3SXVMQqNxc633Nisee5FWDs5CvrZwPdRDetvFg39TL3krgZWynVsGZAqcbJS3Kdcv6eZr91TadXSRHe4ZsN6t9wL",
  "key15": "4xgRto6oQj6o665d3KtzEA6Zd4abV3JmL8jUYMBExr66UAxryJWfpadNEBjJN2WXQuig7RoHHkwqubhVLFs31kRz",
  "key16": "jryjp3oBTzUvLchgs55bZQGzUfrAYyE5w7BKszunA9Nw3Ef6HijKEp7pYAVfgSLYhJByhizJRD9u1fCXY6TNyzh",
  "key17": "4JFg2gJuTPhFPBGSQ1XSbuzzfm7D912XFVR7QuhRDGXEeWswXY4nHuZt39Yw5UWRjBtsBJRvwscmdLjuwrLoTnXA",
  "key18": "cGDk14PuuYb7QtPfYWYQSj9Zepm6AEQZww3ouQQZQC3WYYrNd7w2Q3YTM89jDTMdbrJE58HPKCuh4NxNB3SrGWF",
  "key19": "5ukR2RaepZTM6T7irUXpg4qdArjqmhUdSCTXwoowx6To91UKsy57eE1RGd9wJhrHXQmyZV1MvYkbcyBJ54G6957S",
  "key20": "2G51ws6sjnTvQZgaCnRYjqVjHr2tCGZ24ycNQxzurT7XRRivL8Qt3kRrZK6tmfw3x9RAYEWmB72G9axMXs7QQqr4",
  "key21": "4GAXDebcRvWAxpRFWbYhpCnMLJPoLcwXw26CrYHKGTLNrooaZzfcCAvZPhMpASAbyuBJW2xCfVvxtVXv4kSqGDD2",
  "key22": "3n1GHrMUBRTUbe3AeqcmhWZF3SaXrnyJ2Uy1YZEMoZBWqbsVHzbkSFLF3yPgQhy5NhxJhfxjY9fHUak48g3uBUv6",
  "key23": "CL6dVinUosPyVEoBx3XsqELnMcfqbVtR6JWeoSR6jud8Ra1gqK9FyajhNkb8Bcp2mvRXanJG2maqSwv8hyPCxvy",
  "key24": "5J14RZ2BgucXC8VxAShzF5RreNoYtXFFxbNLuHXPdY8sDeQLo5mc5EU5m8FtPi4fqB9DGqvKmPYd4yLfyDB8Doyw",
  "key25": "352yAN3pUxj66qvpF89rusStC6szn2RuaAicYBLh3urDZwbQacDLXtzdLcFNVN4Dr5icAvseedWG38BpZvDxWHsX",
  "key26": "63p71HeyZYraqF1fFRjgcSL97TFXSJcFytiA1D3bz6H5meCrEXqMoT3eHQr7VdDVMUVDMNtVyfib692xpVCfRRQP",
  "key27": "2UKrTtKzT2iemSj1q2d1KPb9FwbLB6RijXqi81XFbtgAScUVWN32wiZXXGLYvU3HHG5W8JYsDdEXVmV1kHFuTsa6",
  "key28": "36xzSWM4FL1HXGtfP3nKdxe6z4ZQUgJXuCz7GQw3FafrKUsjki2ofk4Xvr8x9BaacqQ6LqmDHneCtsFP4aiDjfD9",
  "key29": "2Pzu8pn88j2cUE5aYjZAwrx5oJSYUrDLrn3bYpyXGVpFfoXsJb7qwpdUnVAyiRRVUUBQRUANt5xfdXehdxPehFHq",
  "key30": "5MJfMqFCqYsPGCYizt3AujPJdPsZNUaDh1WfhRsFd26zwkHDtx9ryaZ9YmH8L3VeedeJuRrgTXXiCng7SguCaa5u"
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
