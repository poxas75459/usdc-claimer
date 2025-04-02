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
    "25SrUZqJKQZzWCvSVtW7up4QoyKf7xRWCbbFRWbt5KKth77Vevbf3XaJmwFD6ZoGcVfT2uQVgcmTEsLmRKfj4c5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DEgkJqwDxshCYgvZ4u3j8239eAYMsP4PYqM4A2uPtCUMU3F79waQt4iwAQbVYRmvoxy9yNSNkFSG9GqQJYax9BY",
  "key1": "5Gkkz5oDD4PPLk9RLxLNhQ1tLfVtft4R6AUsKX1KSpLzFgo1rkxhdSCY4uoFmWJpSs2Smx7bsvkCrmdz2ufdgzUy",
  "key2": "3mDXE6qcsWVLYqHBVi1uw7oChepSvkSuMg2uiSLZYePu8AzmPMP4CgE1MqiUXDuLCxvmQsHi64QfT397CUMkN8pc",
  "key3": "3vCcVhkXdQAEqYp78aUnc26zuS78UPo1w4X5VrPkmN7CizohvpsFmQTXNLwXeVoqTrhJeecehcsnxVyXmfMJ5jAb",
  "key4": "38SsMKFmDAywBiJvjdyVMyszRWjeK1wjVcNdGpFZzVxx2JL3CniHX6ufrspJomsnK1Wgu8Qs65LEhoAezaCoFEa8",
  "key5": "34C5hApFqBh33M4LaXGFDffnFKgK8p6tNfcoWuL5CngJix6y1s4UWgs15kCKNQzkJKAhizLRsA4zD5XrzZkNsACT",
  "key6": "yjK9Wx9b3oZ2fKYXntRQvLYEprewJHHMMtdVuY7mGtVUmYRPFGBx4akqTQo6B9JcFsDjLX1j3ub5PKD3Bgdxtgs",
  "key7": "3BT47D4D41ejpse6QUd7FRuYkS6jgnb9Nhh7FLrJgwmJR1yPsGj7NYEhHCV4LVZKK3xm7cF7D21K7EmFUdSSfQF2",
  "key8": "2rPQD3LCGRuLtzEyaAbdbb9iKKfhYm4G7dWEB1wyFvfzxPfspse4hAut1NhfwfFSjR9V5rpi3hz5HgEby41avjjM",
  "key9": "4HiMvMtZJg2nuKeN4CFRZ16VspfMwrhkr1dGLshtQWZKkd6iHKeiBnuWhfJVRVJT86kxYD2UTWHwU3GUMpZRjDd9",
  "key10": "2DSkZukUxC5fTJZgYUbyiDTGesWtbBb8QskqNaEZfTiKm4dZw7wqKUu5mCFTVAU77hmKA1WLNJ6wc1ZTRvtXsenC",
  "key11": "411SZ7hxGbGvuHhrZxhbvY9ikpp9hATun8AHb53C7ABEpB37JwPFHbWthiXZqPdey11vh71gtvwNcAVaW67PrBes",
  "key12": "5rXXa2jNMw3fgcUsU8MpuCoC6Js2aCt4ydoqu2azNCzzwkDciUdeGE8mBR3UGnTrzyAMWs1216zoRafUpjRnF1Tn",
  "key13": "WBkY5zyAeFpjrgJhj2kaad6asAyKc5apT42boycsgRP4QEp3gcHRz172wqazgZ8hKnvUheXRiENZ4zreqQmFMkx",
  "key14": "3qK6tGKeaWx5UY2iikXtDjE35xTygJEA97NrcPnhdjjdtvRvRLw1sY8basXPcP3DszfvZ7jsNwFLZXmvgrvPUuU2",
  "key15": "4Lzmj2vuApUV2yCH18pw9qH42swUWgg57dxRwgqbgKJWFQXMixb5pDLXzAE9mucPTPB3jsjTxNvyVnSPDVH719EU",
  "key16": "3WXGX3VnEFC4WjBX1bVjsRb99pfLn5oBqtPNrGeLRHw1YWL9iTvUYeuuwXMvYuviicjRN4kodQyQQY5n9egsqXVd",
  "key17": "57PT1Wdpb7cTCtjEqK1QYEdrg7WvGTFpf9JAupFDtQWiiUMibKHMvj3BisfBPiY6Dp5JLAGWfkwBmVGSpgXtGCw4",
  "key18": "VNdQr7Td14DbsPspMvozZwm4beFoLWdTEnxRhK8CYuyAfUwD7VWF5zbdD4aCepoEB7dGBQa1pA1pvmcH4ENXTXo",
  "key19": "2VEYrHAnyJYngS5M7MQmDTsrj2FYYPHes3ULg8559DvEVXVzcU1n12DQAv641ByVSwLizwQDb1xv1zohU5gHiY75",
  "key20": "2uTVNFof4nDBTYNaQ665G4aaUGpHUApRJDCTW2sCCLYEhKP7HCLbip2KVFBV9kLxk1BRGtXhCzCszHn3SeLkEuWb",
  "key21": "9TWF6X86hRHWbM7D8cLhp7zjVpe3qP5uhw426XpJkjH1bWeCkRwSa55DQ8eSfN44YLEnURCszY6E2VPsn9oMXJn",
  "key22": "3hMpEnFexQdKLu4oboeikEGUG4c7dTny8AoBYJpBQKZfNiiMNFSAtb831Fic8vnvuNbMRE4M6viGXovUTebRGyTF",
  "key23": "4ZH8vjqzYKU7qJwACAJUYA4toZJiLtGVQX3HoaR2br8hJqsBspTNQco7ZB74sNjaWs7U58mhNj56MZ6CFnTWZGck",
  "key24": "6yK2QrJyHxRjdnj5ANGrrwVCpJM228sioiU4ZyLuFw5vcZvg6a9MEoP8LYTLqJhk66Do4pXbupobQD7Ze7TSP2j",
  "key25": "4MBU65LHaDLe7NUHohk86X1KSrL5VeSKeCKSdURxM3pMYwBAyUZ6vhG16m9fE5xXFqpzhSxQVzZM9CtDw6oXTCCn",
  "key26": "2VbuxFrPcfTEeeRN4oSDgGELEHML8dwsQ11CsWJNrMbBAjyCbG8GVSZNboA4hVTgbsTyLSD3Vh5Z2tStTdckXTFx",
  "key27": "5743K6EgYXiwuxKz3K2LL4ZqgvZZxrQL6HU9GxKmmA9jFhnsRywP4r8jBapr3hvRGJCpnthyCHp6CAiLZec2jVWS",
  "key28": "5FeKf4vMcRoNkDT3jSHVeeSotuDBBt4KXYHMnzsjfr6psNFTo7a98Y6V9pTJA8NA1UUpVxsbxcG2wAXFGrDjayPz",
  "key29": "iNf7TywdoyJAMknvrYJ4EKTDT8wNoHxXM1SaJ7tNupn6HqvnBmu7yWw5HKykHNkJ5kY2XrKengsGQomWrHsgaYs",
  "key30": "9pjuYWNuyPftYgQ4VmbbsqNv2aPSeAMCXJ9WcjUhwwBswTEjpvwKpZssS7PcJjgc3BXAT7Nsv9cMKSnXtci2Equ",
  "key31": "3gAXpk7NMryUeMCGFkXrJ7qa7vtp9jRiK9AA7Q2kuYBXkiqeeXnr66aFVdbwDnXVkgLMEh1qmfMruG2MHRwpKEfZ",
  "key32": "5xuxyybWfkfCCVaw9H2uuu4aMMjgbv7C8xmN1hZwb43ttJkNW7uGJXSqzXRsjufjw93QaimwaxSspSVTxCAxgMBt",
  "key33": "4syhESmVtujvqGw5zkkUNatRJX6AqwFTQmFUdkFB4JrwZ4m3Lwxm2FPbGLjerQXkRD9KZyMUzRYmxzT2Asuk9tvX",
  "key34": "3tm484ngvEdLygxf2XJgS96GPVWC17Q3EVGrtBn7Hntg2C3eN6h2QBdqF52VFQ4phPMckwpJ8izbvX8nPnPBrS77",
  "key35": "u5F6yV8p5PLoLhfXPCb5KNiQ9Ldz15mXpAGexCrvRdkme2JBdmRuCAeEeJKyKGYwd4QCrxRpVPpskhgHibL8duY",
  "key36": "2sNyHjPVbB2XZSi8YoiRDtMDVrHhYWJXVQgk6JWavx9URKicCGtjrYqs17b5gMrVMsgoekz1r2vNfTQSYUF4SKwd",
  "key37": "58rDXvYdqkyyqCZxPmddfeUgPtVByDiE6cjwHvnaN9P2k7gQ47NMabadnDqXj5YzuxUdYgBQkfDusQwoJ4mN1SAn",
  "key38": "2KefxjjSXT7CVqP6L8fQBqKtn5qgHPvLwfkbkmkcdhh9wq77gwpB3qdhBuBnqDBJ9pAw4pmY7giMZFfeG6he7Mx7"
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
