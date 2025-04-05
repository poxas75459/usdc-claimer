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
    "WhoorH9NCSaAH8rHuvjA4ar6ZkGqyuktgv5LRJ33H5THv2skRdRFhDtyKsNM1ipyhzmZFxeTi6z14KoqhqGhpyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XnzBRLZn9zS3Lw8EvULsTapM2MAeXLVtJXxHwPgGkhoXfhkqmAjfHPKwPJc4FVrjgZpGuQZWi6FrFrRqU7MaxDZ",
  "key1": "2XtbPERbmDchT6masXhoBoB4ZsHyhNwUTtWfWVdua4xwv335Lu8h4ymzLPsLCwjjAms3ACmSbsbo4qnjKdE3kcqQ",
  "key2": "5EdEwmxRYdWWZZBUDRzyX7BUtDwBAhW2TKZ8nBwgdB4UDm7pXHVVHFn7QF3AecUCrchS8sjPi1duM252Kzb3TCQF",
  "key3": "5h4LF8s27Q3LgrMwZp5pbqEq88mGrvfjPT5omSMzVTsP4p6KWV1QZt6Y1XXJr47RCU5NTFXecaBQrUXpQZLUofpw",
  "key4": "4nndbpswktvBCt6uq9LhuG82eYPBTg61Rh1bbEU8eb6pmny8LTVM9gEqy3eHFSMrQAcwyDEA5Awhbr5Z5BEbeMqe",
  "key5": "2SEoUaPTfstUYzhGFT2drAraiPpjm1aaKsgzFaeb5aki11iSxWWwib6ofyX92sxuTkc2P3ggNJGSRL5oiMpmWoFw",
  "key6": "5smh7X667bGAd1gu6ssnb3NGHGvH7Ze4mMWp8BxwnvkmudVU8LunFqXaMxUGnuuxd6hFgmaQw8iHUhqEYQRyVvRb",
  "key7": "51Xnoec6BWGXG7nzHBpdM7dYfzCdvgLcHss7vCfM2oSmb7uDcjfZenw5tLvRDXBx8Lw4AnJAk2DzwM5GdCPzJWv4",
  "key8": "4QKy9Eb4jpaWeJLMr9cxb4e6uggwbsmZVzyLKHPtZXrcPW3bSHd9qrmmYYjSPat5BFiP9vQBCnqEv8YjSZZBhGLw",
  "key9": "e74rni6YTT7BHr6PNL1Eu31rftS5vtqfPso3qfE2iz4yvLev3u6MRfUWuH7ADqbjj6TuDyuhxa1kDZdibycKKPK",
  "key10": "3knH1RihwaJfo4mNFsmoai1yvDDMPd8z6U5VR9DrVgQdGFJX3AU3VmMTcqVapK5CKSt4w4p1zGqwoWx8DDwYX1DS",
  "key11": "4br4X2VrtApvDgg5AHbSYC1YW4nw9MV8HnyEv5m2VfkDfCqUkZRAbAfNvSDf7QJgHioFLGdvbktBXxxVuUvdCrkG",
  "key12": "5Yi1Umbhh9mqfoiPVQDn71m2G5Tk2Dv8H8wyVVyjnKWyafuMoQBMjou2djWmJz2cP9M46k7nTTKBQvDhaPL2sRai",
  "key13": "38hGLm1PxAPpLtoJyxcad73gS5MCkcgjwK2pAzWaRSk8EBqritNSn9QKWZfDdVsi1dBaTutFSf4oUGixv9mksGT7",
  "key14": "5DWsrwJEw5tD2ZviBVsheWqJ4NwUapdmHkJgNsip9jPKkGsJH93T8yoU62ZovhzzLUV727ofe8KvU85NKghXHEDn",
  "key15": "2UdN9rFBYKSTiB8BARPsKchnxV3rbcRaDvErYGMo2Z2828CVK6sLQWV15xk8QLEyqHzmLANPiCJcZ1fDNGmJ7aW4",
  "key16": "7RNkpfooLSQs5aFHyw1M4FpNzUz2oba7AuMSoAv6nT4hH2CpbxZ9RZuVnSWLFRqoWdexGFMXRE1EUuq1tLLsnrM",
  "key17": "5sUP7xwfUzNwbkkiFkLu311sbaGGgMPhbxmJAYTjmzj3ZvpVsdRAN8pBDkJGujKBivjDtPLN5JR4k3xWA5KK2M3Y",
  "key18": "3dw9LJeSAcsXtVkTBV1Sq5faBuijfhPAtPEPDshJMvZeMV5C6unYKUDDExKq2VoFEJ4HWRuqNdovxtCPKvkkaCtg",
  "key19": "2yRNaDtQZDPefJ3xp7t1ndrGZawCNxu8yHN1HBHPL7mirwW7bFoGHm4ejbLYHKrUme5TayDC5TBUcgjoCxXwSeFn",
  "key20": "3dZrTCSC2WUx4qYa1sgnpeHQXnJyVUWb7Z2KyszCopfsN66PVKKLVZRwJZsm2dwNudkRJ7QvFksm1qLPsWW8uzBP",
  "key21": "5whvMnngd25YUiXGe2oZRzCqeZX7n2WZySRnerYsLSvqJyvF3NextFq248HtFRnEbWmCXNaNpsCi1oHrABaN5KmQ",
  "key22": "4YgZHDm7ZH94youyhLJv7pVv5DEd8DTMjsUqSc3JXXLqc9MgCR6orsfjdoz3tHipw9rob3VkKMiTQd2EJFEMwVyY",
  "key23": "64CE3dEfo8vWnrPxtKUo1uSnrJprqBuwEpE5Hm741zmZ3TBbufzDXaNLKv5nMnWfVYZLALTmdVqGCKDam6ZmDexa",
  "key24": "5r9bGCaDUUn9y5Kd9pM67DpA3YqM3spWXtwBHUsf2h9UUmU196bo1igR6zU1Ga52zA2oYgnV82j6JZBtuJwKd2h",
  "key25": "EvHLhuUZMM2hN6dLv399Y5WMdt4jdUgtDHKEyrQherST3L6j5dTkwmLB3XnsCWEvJpCxVYwKVMPL1KQCGRbM8Mh",
  "key26": "2EohoC2R8pTc997zfntxRjkCCjPqZGX98TkhdSLE998CMBxW4o3KFj176gCZJ9fqPrvk6qgKzdnBR5fU14mXU6K1",
  "key27": "KD3xBGQuMcQxGE7WcPSYQZZMLyTaU7hASNYmNqSXb37nxmn2VbkdqKHDqu93YJq1XXdBJNPtGLzeRSHbmYr5PHp",
  "key28": "75XTy8k2VPejUiVuvbBd7J28ofGoX7QLQrbEPaSmzEXe5guXhydFS2e49EMYse6n6DrzyZDRBoKAwW6emSKEoqE",
  "key29": "3Nkj3pCwkJseJrirRWFB3Xu7sR54QK1X5y7g58oc4QP6jHEv42JvuF2ZCjUa463kaF3CWs5JKFFsjFD7rpvXXtEb",
  "key30": "2fbbXSd5wQdACnTaB6iNRJz8L9Mhrv1iz3qWzrUwceMP66hEyYHUVyJPJjNq3qNbchP5LMbNipuGkAwJivmgjxYN",
  "key31": "3UrrZq7faptct3pByQS7pZ6nq2WxsanAvQVRCeE3UCrnA2EvhNTdQNx66SHFPDeKzgpoCGtxHqbPBeWWiJMiq4Ho",
  "key32": "3rW6PSETfLatpCJypirX96QZ5FRoMtbKaFXcTqz2aGfrA2rHd7gAk62F7whC43jWFKRtsvA6AhYdW12dTEpwHuXe",
  "key33": "2Q94xs37fNqrq3SfYfpHjJMGQCfxm6qomYiwEHdrZ8h3ZHKTJgyx8wCBR44jQt1eKZy98KZhL8yoViEgMBnGCBLf",
  "key34": "4zm5rGAGWVA1WfKQzckRJnH9wWAuucbExfMm1b9iPotKQiKE4actkoMPCTeZ4JcAeY75Zxs58Zr2PTCyG9UyzJf9",
  "key35": "2NUE5AFLZFfd91EDkcebmQ1HiW5xLpYy72kWrdDxVoDEKrwghkgphGup8L5kDgGqyoEwSBcmBnQ7VvTQgjjJcsVW",
  "key36": "5T9TRVoPnjQiazqoJc286yRu3KRU3itHFGJL9kz6L1Lu5iESfaNXaQAGcd7zD41UFYyieMNjFNHd3wUT24dLkuBk",
  "key37": "3Pdnbz9pJfCtigmGF5dcjLtv5FXWUZX4esJNhU1GahJGnSJbasRzeGuM6UQgSvESXkYsFE5gmicuCn3rLM1Axb5s",
  "key38": "5T1DH2hxn68unnyhFkm7hxQMSosE8yBCjhiwpX9hc8RjFcDSGNq7VDcRRM7Xck11gjftLkHTZeodMmqFGrQPAxE4",
  "key39": "5QaiWyuMz2XWrBaTr4mnJoFqMDtTBYbH2Br7DQV4cdb41VrFq3amdWfJFf5nwkzPVN5XyVFLDG7GZyZ4gN9fT6Qs",
  "key40": "3Z9Wdz5ubScuaznq4JeeVd7hCm4wGrSgWx8ihAE2xboLCRVHV2ux3SpnwE9fBjRRMkewhfEeZYo23dMYMurnwgc1"
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
