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
    "5AvoPv22aUDgShNtqX6ReuWoWuZJvLxvBTDsNV85EawDPBW8bs5mNa1kCLwqjgPFGYhQANfXdeMkXP7iQ4eqmCJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "psbT7atRaVG1ADDGJiRCaHr7qPbvuHpYey8hkQKXt2EWCzHYw3Xzrrk6v3higXsB3UGVQthLFwcstGyr6UEeb6c",
  "key1": "4QDLCZuWyMxTtxpRvtb4affFEQFa4sGA8MWQbRC24CUDcz8G7VfdPCBQ8qRaG84gsXAcMeKvGRoRQWa5qCTw3Ass",
  "key2": "rKGicpHUUQbFxaTeinsnYe7sRyjT1MkQNq66GKuATvscmyxZyhb1RRgypz38kKAstLhhq11gPuKVLqYeezHqHZY",
  "key3": "4pej71tsysExCmHnTb48abY9EPmhcKr3riZxjBhH1QisSKpabpC3HMQvwg1DntnL9UKuMzLC237yxL1YxGCT4Ttq",
  "key4": "2hbrWL27YBghpbp5mynrTxW5VTZQmYGQkM9dw9ZgLqwKXUCZUN6jMfcvJUejzABqAJ3ykMSWG7Ju3Ev18xhWKSXE",
  "key5": "2kMFf1u7sxbseVgP9iptcKj7GECnBV5w7VgV8BL61nLVpFUvpAQS7dfiFteThkT3EPudaeLoPsqSL1rfwNfyo7GM",
  "key6": "2qXAtaiSibveSw3JBtijcgJpoH4LQYKr1gUNi5NTW14SodqcodZGNQoVKFSKtqVpZTLt7igsKHmowrkAZqR5sWbV",
  "key7": "2NnSJ4eMkVZrvnzRUbHee2TtQuTiV8HybfNWJJjYre5voQWxFXyJ1j63iLJjKnkyMq3dKGfVZnSTZsJBcKee7YED",
  "key8": "658JxqhwBa2iMpfkgQKPJLphF3knYPK1mGd5v2AoE1PSAzanQmEcwAExVpHGBBjzB8jFRFkGCBJVXwscJJA7sTZ6",
  "key9": "vddF7qVzrvnBoE7mnDjiYXHUWYhUcyCTTMKTTGtvsHCmwn531XQuwbD4MeSBnEAZy97kXLhrKRmuETVDhgu94R3",
  "key10": "3BGszpxr5WibnHAPjKPZCb7FsXM7FDRSQThbBkLeZqnghj6Wv6YS6NXHpixVxUHWwSLzDPufF6Q6MUTADERKoy7x",
  "key11": "2QMmNS9fi5atTXP42LSNpDtUUevuDDUqgiUV2dk2FdKXwMXBsVfi2KBvhzmMkAGEsEvj5zHWX2qsGTEj5PYMJFzN",
  "key12": "XZ4FeFGYPjaK2HgvFn9nXCVuNKi7HHmEWqgHCzDk43P26sN9XyyT8JFcGq1taRpEo2gswVhx1fqgBtJhnYti2Q5",
  "key13": "5RSXcNSkemjkNFroCTNGyBddFk2UDAwBYTRCGKRoosSUbet9BrhRJ7qJqGwzVsDT8Tos7ExBtPLfJNQgct1X3BKt",
  "key14": "egTwzaX7ssamLmwqckWzdbjMBFz5HSVatdffBtzqoNuky5ZX4vZRkJiFHzzuFrtc7yhgrUiW841qcK2cPsW4HaL",
  "key15": "5ERbp77LBoJAdxsCrysBJrcgFRrijcJFyW7rof3UroJ8Mo4L5TngJM5mtH4oHWzKYAxPGDh9trMrcdSmmAXim23j",
  "key16": "652PgE1zkUXpXrsh3ysFNZbAmSbDdwLUxE63JuFECFkdBtmiyJRSZVVqV5drRVSiFoJYaDSvwiq24rn1dYQhYA8p",
  "key17": "5KY1Ri5e7Lk4rAK1mDLUJhBhaDyB7Vn4hj2mHka7hrbWx8Z783xjUnMUdYZMQaAtmWaQTDkE1TQXeUPCJBbzEjwp",
  "key18": "3NYxvVobfusKSFp53a7nXE2c5juPLieEWvfrJEgg4fUZRHe2c2DKVFeURxJppH5jtvpsEZ9iUZChNRxXEm4vbQqT",
  "key19": "2Nh5AQUG6xd2DwxZsFa5THowN3TkakCLzPVWdm3Mr5fS87n7w5CWXLAQ3tokjXtyP4jdTkp2sNMN34jLnaACNt84",
  "key20": "27uw5fPrFhMs5rfvqtKdZFApUF5yHmMvnCK34UMnBYQXPvznNDkipf3gYNTMK81feBicH9DHLDG5HnHDoD55BxZp",
  "key21": "5aBiWEieydMC6vTu7e7vNDFihW9Rt2AfoQrNdf1c225oNWtCirhQYaovB5ogUVBRkUQB8v9BsXaE8XxgzdYdVbTs",
  "key22": "5B2fHFmoYHETrSNWtzj4m2YbE4XN5SfwxqFx9s6EzPCP5dzN97fQjJ4v44F3GNcQt3GjRB8RoiFNQaMXTeeFtV2t",
  "key23": "4GUqADsCN1VEae3P1r3BaUZowY1xsnbhWtGFwy2yMsQwA9PCEQE4wqkzEsiUyrrP7A1qzSKFJ5kCnE8vEWLb3EB5",
  "key24": "5DfMDWzJ52jcPMV41UmerSq7FCzsjddtk5wfNJ8GqdSXSECSMpRwPW6tB6be3NLWN9bBDK8dZRbEniGYUg7SidrX",
  "key25": "4Untk8HGkQ7cP3qiRerGfnrZEhHNick9mhPyNuXtsy3oVjNhHfgJYVoVu9QU89wAEtvx76DpySb53Gj1w2h5sxu8",
  "key26": "3Lcixr4dCeuyQ4PNpwsX3JSxR9WW6nqJUZRivXe9sd2t3nj3vAJVZcNy2KKBVup6jxcViNc1gSpSPtrUXTeSbNuu",
  "key27": "4GPQm1C4LXwunueSxwGREm9Q7Kzx2SXb2rgmUDbKD2h7Bvmn1A2KWS5KKkXvrER2NgjYZb2T72vrpKHoruSFX2Ks",
  "key28": "5hCtSTGwLqVavcmUvCEKV7EotiZwk7jgGrM21QZ8GvjQ1FzTr6f1R22CPzKcMTVHWfs6Mpm97gnoLKCVg1rBwMoS",
  "key29": "xE4ACCmZGZwBVjNPomiiPV537JTHSwWHMweDR3MtNxf3J1nVpFaHokzy3JCMmTq3QRPoiLr3KQrGLEnTZJT47iR",
  "key30": "5UQjYyLPmp7gn9g82P5qF8sdfG7FmPgdqQ4bBcCEnheB1Yykc2NQLWTwHh6whCPa6Y5SPjUrgsZDWoW74Ddcw2WH",
  "key31": "4X5U94g57KcCqq3z9ZyXyqaogtojCCyzo4A5D3pogFpy5J6HDsPsnF4FGZ8rFgH5P56qiFxG8VgN3ZtTzaN16XiQ",
  "key32": "obmU7hqzv4z1LRGCCfS1pnwiAMcBeQJjYzATaDamCYXaJU2vpvjUNW1W1GpF3xtGwr43gQMXguWaQpvjuRZHrwm",
  "key33": "3TspPvYPre6eyNSvt6Aq6Uz4vRKy1vFQFnnhnAa1rqdPs9oW53Zq7fGjnQ19G225zKC9SnbC9EZ1ZSE7DbPJPT2w",
  "key34": "5Ktjb9RFo95wSZnBYbApxg3ozc4VBthgkejT5adebujCrPYQqEEYpaTGujFnx9R2EMnFk29aJp2mciA3eh8DtLZ6",
  "key35": "N5aRcZ3rBGm8duYMeSx3e4BQX5GurtTzYUo8DzGv6WXP15LCzRHUiLEgTMj2ds1RuCStMdJ1RaJLgH86nuiNwRc",
  "key36": "2BmGH1bHP14HkW3yn6D3DaGcHnFGE3y8aMJJTEQXSFJips4NP5sCrL8xuoGAZSGtu5Lvih3pqEGEVj3FoLLc8xn7",
  "key37": "snEdzDYdqWeynHuW4bdP9DEcf1aKXWNXBTVHc26g6YHHiepopnt2Fvx538o7aNBbHhzZrkDF3rm5cGgcqBmjQmz",
  "key38": "3rp8Wd7UaC7RAzbAGADNmx9cnJML1LP5z5op3zrHiLiuSCknTGqgC5BSQ6jBFVCLURhSPZ58wy4mMaoWAijb7dch",
  "key39": "4VVhnRPWKYRN5HyDu6hufQmnMNNhddZgnUDrdaCEwCfnWMPvFayXbLwxQbvePjaKqZTsno4i5S51GaYKjsJRReMo",
  "key40": "4geqGnnhrS6ByqqPyrd8w2FJd4pHCVqvbDwyxBmEPBpX6dF4gbyYmHCb4xAy5WPS56JnDGhsfy51ECAwr58VFtnz",
  "key41": "52BhvrJJJ6QV9RKb8KqVnfR4eRu85gxMsfsGqF19oshXfX7pTbEGZsrrhqax8xRhQ5eVR2YziPtC2fG9A7t1jpaX",
  "key42": "nM6BTNQuXYN3gMkHdpeYzG4gh9ENsHy7pkGh8eRPskk4dMt1ZPSypor5b89gqyMCXdNbbyjvj9aic5UK4jUjRD8",
  "key43": "4XMTi1saG8CanXz68Ek9ytWhJbdJnQQxiWMiXBTCz5hBUnbiuosbzfCb29eozyisTN4qQsBJVPWbJxYkkN4TYJax",
  "key44": "39zMGZbfw6c8xuey9fAPSkQPww2bAMnRm4dWWaLkpCEkG7Qasux3UjNEAin41Mqa8FNh5EttzDjdQivVZ9oJkKSt",
  "key45": "4U3k3vSPBBxaPjrGmfj1pwLam2QT6KLY1gFVthDBKWupKdC8pe1yPwwET5aKXHqVZeShfp9joZyDhNXPi6xWkPxy"
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
