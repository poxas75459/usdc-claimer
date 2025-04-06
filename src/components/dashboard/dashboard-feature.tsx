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
    "2K7fXvXAKK5xDiuDkcupU1XFLpaGoMjMuzo3FchqKC263xpLuSy55b37Vgd7JcHRVK6aMWPGWboHmpVp3dVwyDXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZNs5nc8AmvEenRxmNcBYvh2CdiEeDymdETgZmWrUSqfrmstPYMX7k3bEfow2hn7Z6mHZTE9LrXAuoVeGny8DK7H",
  "key1": "2Cx81VcHZZVKHS4xyrHVscgexkD46QhmnLBaAFGwKNFUfCM5KC6EA7beUAzkGxSUo6Mnt7JMNNdTZkWqmg1qj4um",
  "key2": "4hc9LSgG2kiChnd5zN26dGKy8TscAL9i2vH3KzfCiFqcFu92Rq6MN53M6DqsyYeh4EPNVTBLUDzf7dHsyNdhYuHY",
  "key3": "5Fd7dbhzkwjsqpUC6RJrVbfkoeaqniJpvacy6ndanthGdBpkWR7j1FsczhGLrQqLkdFCQ7rpgt1s7cVXerfbiTdY",
  "key4": "3b4e3Niu4jh4ZnuSpBcBYGMSdLWkFcZLt3oVPZweYEBnaWbcYkgZQ6umf9L32Ej4y2KpVt5atTYHoBMTpt5XE2i2",
  "key5": "4KNvxeWEGWC5X4ydHiRSg1XWgquMUhb3JeFqanvp23TetHNYvzGpiRz6i1bbCS8MdG2Uo5DUzoXnQVXSdoHKNdei",
  "key6": "3Yf6r5Thego52cS1ESB8DvrGTLU9UkVx5pUszUjWwAbViMk9cxy3Mdwubv6ETh3wFbnKH8CLSD2fhBimzv4xsFHf",
  "key7": "48Vx4zmmyW245ZpV42Yz85rdG3dit2GTGjjX3UkWgyNmBKLPPfdCVHJCyLdNqTB6R4pBcmhXrf7VkWh3ZG5t1dyz",
  "key8": "3YUkPadRMq9nfst6rTGMDuAGz1vPuJPNFudbkZ7iZRtMJNecPwGm91SZQzSr61XKweh4RbUt8SWZYmhdjr3BHNHW",
  "key9": "36fSrBL3KthvK5gsc23wmNFLAgjUs7xRocyFrUg6KwtcZJej49SXv3z6XmuuaKCaNGFZ71EgR9T6KZd8mmLzSKV3",
  "key10": "3nzDuHHb9zgshcrv4o83QmdW7ugEFXsUmsLagdAV4o2SgG5awANcxV88yrGrXMczssQDVEeR38iW3vmTkTTjtEDm",
  "key11": "4GexPvtsy4cGttM2MWh9Pnc7QVxucXZiBiBdY5MSFKJQsmF6KhvCZGDjXY8UQVLMGAskuPXdPQdypgp9Ap6sx9wc",
  "key12": "5Tpj13jnhNLFvLqkdzwpBeePGcpfSapabF1TejnabR2uUrHgbiyDhzMBLMiGL1LESUZxtfEFWWXzSeLAYP14iBuK",
  "key13": "3y8kXUc4u5mvicb9XUu6pXpejxRUrVHMWqCL4mRHQHE9xU1mbvGPt1wkcooPu8fxdzANUNRjudtSae7FMhRmfPTJ",
  "key14": "43UdWbVrRESuTeureK6XpeWLS8xugH8fFrc8Xf3aiM3smGF2LDzm3q7eniQD59vcUt6oaU6YUzNnLi5syAoJqf8x",
  "key15": "4NdC9pur5xCUZneiDtMUcstEeSmUz6CxcHyBmqKKPK8hLJsc4xP1nn6R4JePkphxoGThY1ynB24nE4EsVuMGj5rj",
  "key16": "5TmVmfbZgqPphtcaC2A5eX9Dm7tidpbEiyLqMeuoJvoqmC5ahzCGcgArnbCKBMFN2BLq2feGp9niWf4Qy9WfXoDU",
  "key17": "5W9SvKsVdDMga7aFCKV727KhMNd8rX8GAM2dqVqBMS53M3Jn9AN6HrRQGWcyDVia4eJ4L1L1pyLEFu94rf3zRpvf",
  "key18": "4wX6PKRat6hXjPd24iULZ6d88UpfZVQcrr7wtUR8HABsyuHDq8SqK31NyX8EgQWZagYCP7bLJwa2NGxprdhwgiNP",
  "key19": "3fX3TxxwHyAvECWXWjYMVXmCAYjZuvztYZAV8ka16QxxYRFT41Pk2ofpTDLVSfZvenKJrfHXSkmbWjgkjrhLR1zw",
  "key20": "2a7K1vqebrND8VDMkcszJrqhPP45Kf6xyGRtvQVD63h4sgJivfWSGXZmnKG1pMXmtwNmNrRoJJEZPMx8QNF9tcsU",
  "key21": "4fZqfums9u1wxpXibdZbsdamLhJTPsuwniYqD4jUtfdry2SUw8eWajwRBu5YPUwuySpUS3WULUzrqrUPhBHgqSFs",
  "key22": "5Nb95ts5ZVzxiDrmuNaL8W8eBog5tK8r6sZ9Gmfy6W3AGRWUDTtgH9zmu7k1q4xhGCw6fBDeMDAEPJkfx8k2yytD",
  "key23": "UH7sNRN4oeBpN1QDrcfRs9NVfzmToajs8pYrjiXzd77pGdwTYEXTAtuZ65h2sXZ4mEf8kQ7TjNrxnHxWDAGUjwn",
  "key24": "XHBcaVDqcR5Gfs262x62JW72W1pgqHfmDPSj5fryJPnLCmDMd6XqeD12nPWhckXpGotWM7KJrBh1HE7TJzBZXtG",
  "key25": "52ntoz6pJygivrxtQvDZR6EDAjYqAhwToXohzZvJ4JTQAU4w3TLbcDZDFoShwcwpvjoQHpyAQB118ZtPsHmxm4ct",
  "key26": "2VBdtKfzRXwR5Gh3nH4ZWYnfWPbn1vfeup9MkdvyCBceoT12wVqBnoaKhSqDWo1JZq2D65fFUv2J9DNQ5vMau9M1",
  "key27": "5xsyg6YH1yPAL9a82Wep73WgkBZXfcTSbeqSnQv7329EAL865e2UmXUQBbcBtwBCqa52goNrofPAZA9xTCYMggC5",
  "key28": "46SA87qHVQRKLNPccDgksanPZgSB7m6HDuJKMaebsp94LwsXSVEA8KJVhzsAqTdcwxQyVmEb2HoMyZhcUvTocRUs",
  "key29": "4kZ5gBva6shkBsgjjk1qZfdrUJBKhhGNKMWUAAx7QdJEUWQXX4oNjcDWg2QoCrwSxZeHFpTaWAg43kH4ujd18x1C"
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
