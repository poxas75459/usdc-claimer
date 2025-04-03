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
    "Ni6UBarJ9Vam8sSeTmUe5QCwheSS2K18toeq7Vf8D39LLP24Cirbm81U7coPJnUqQrJ5L7vqesgenjsQLGF69uG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fQ71yicwsC3wcjbbapwKZrKnnatSsWgpx6WgHsLD1D2FtNGu8gHu4LaWnb1Bd8g6kVA4fRqab36fS4mQbo4PJnF",
  "key1": "5f9nqU985cetGDpmRRbkWbVTCfrWisuqUAU9bMbeYodqTfZtzwXom3CwEPJvuWera6TAbn7Brwtre8JK4g2pvyLS",
  "key2": "5vGNjTGe87YQt49os6biinph2Wvdh3W3ZneiojBPySVXBB18mvKN4GDKjy6vX8HUr8uFF599tbeYfyRybhFhaDx2",
  "key3": "5KDE6Zi23HSL7DLexMxxsZ1tzz3V3BhdzfHVS9WT2n5QPgkuU3SToxrZx9nogAr5QTnnwV4Ja3Ct4G28GdjYRirb",
  "key4": "2BZeLfb9pWgerqeeHwmekRRggwpXGBC1z4REECioWAYNU6CRszJ4khNQgPaQMQFubNGrS44Jg7bXesRTkvS7gtbw",
  "key5": "3dNE56ARgt8FwZTtmCXp7RsBBxAWNAQ6ffHBai75Jp3T4aCf5ufCgA647Hiwz8eydd5LkZ5JhFJ8NLo8pX27v4Px",
  "key6": "26117bTrcTKgWt9KfhTdqTkfJyrkNfneEJgLxLK2Yi2dytLvi1QKCKJJRXSmSFCKv6yNM4SUwNXZjZQyLCbvyZcC",
  "key7": "MhBpt3C4WfFxmtJEa6eKQNKykr4KyFwGTJuJX4FF4fEqK9yaMNSgqwZ9MTGRX6J2kJYGBAw6LW9tWoV8cJNthVn",
  "key8": "2v8W2kztnUvdzUc23hZppRzXTHvyvBaqrtUrKgHbGPHAibq2VQMmNGFZ2AA1vdpkhsU11W2yAeU558iSbdnoxJ7U",
  "key9": "2CqAeBnNRRJmyX9v7QRYoGviRV3QER3MvZa7hKxWFjzrEXa4RP4mFaFYRw6f8Ru2mdie7pvVSDpLBKuqQ2te7QZu",
  "key10": "655cDfevhaxK6T5AWvAL3dbpgrjUjQiBrpaQj5Q9W84pRhmAPoYX7FeDeHQKoBswu2RoRbf2YrBYhFukGLfyHHXj",
  "key11": "4wbii283XDTxHneF9nHVfDPmBauhiYyWpoGg4uNnyQ1bWR2JNvJqdzUaggdHxx4p9K3TzuiPEVupLS3kXqdVhPjD",
  "key12": "Get4t9v2w2KchHcgceevT1GBsUfx6HhhLxuZAvbxBG7NYByFdkQbrw53F3M6ZY96rZZT4443GBDAbANgUTUZ8Dh",
  "key13": "5A7TDrW5zLjcF6nmEmDiseyrGkaRtPNu6VVZpHUPTYovLMbtXpiegZfkzDJUYxyDqV6U5CWU4weqdzZqW2UKoXqK",
  "key14": "2Wey2Ma3iyYwysZFrxEJwMTMNwcRLXipmdeZTnmBKyfa8MBSMxT5NKKCjRfSTcZiAm3YcEnSMSyUKZyVT9iEg7T9",
  "key15": "5rDnmQC37eZKGhDmTqko5fts13j3uEcGZXaFSweore52RC8bQDsKUcWXgxgnjiGJ89EG61JVt4ueutgUCArYsiAK",
  "key16": "5QtJunUF1mkUDsaMbfo5dc7yPdT13etc1NZNzXZj5BPuy1XqhyfQiyY5fLsHvL2TnZQC8u43gX3YFcUCKhkFasFG",
  "key17": "4ErEdB45oufyLmD1LDpda2VdVRX9KCPFM7ZGRKEREr1QMtg5dXHWXRCwJjjzqvs4CxknnUD3LG1Po79aHzY1uhGa",
  "key18": "2Th7c7dpY47hswBfJ2z9ohf8RY5XiV18i9wG2enCFJWmnTHVVXkPd225a9KazYgupB6puz1hUX2PLwNGm6UxYd22",
  "key19": "TuSCDKPZMYvowvD5XHYezFRSEshQaWgCAbuysZ7ReiugRdBetYVe2rbCUvndxM15MgHd4Tux1Si4cV1RJajAmuu",
  "key20": "5XGaZ6kqoYsMaBJnRMukSpUEGWYusBdaTSZQxZvrBZgiv3MHW2yJ3pcK9SkKuKEGKaoizDYGkdtaTsevbevmtMNp",
  "key21": "JLAaNufpDmiSCrf6vH6q6UXHntxWPXphekzWoKKxm5yY8kKqHLNoG1ga5ZnNkyDRijjYeu38BC1NTVAVLKPP95p",
  "key22": "CpL4Z3bzzdsogG8Zo23SUGnYJJJt9SNaVwcvK1HWCSTHutTYz8uGcTpg6kiiawvkfjhatjPe2ox2wxxJT79od21",
  "key23": "2de5JuFabibnzoV9QfGfhv4u3txPvo8MbM9GhV7gg5GbZwJLBZ3sLxSFVqfvd8kZCczicqsiX3Jg2MFAJHXoQePz",
  "key24": "3GieoPNkPVDUGCBXe6bDFgKNm2d6SdRkZ82xMhBeBFKbtCyXgwuyUKJK5CVVMAzR3VNmDgdGP7QAz73oAa6xp3bg",
  "key25": "4qdVg3h8ASSAeyiupCZT7aUUWwcv1WV1Xmn695poqv8XZ44dxgcjFWTdLtcWsRTSgnxhn3xqLEJyc5UhmSN7ENp",
  "key26": "3PjGv3ansTkTL2oWsD79fEACrRuCSgJt3qqMA1pjmMq6Duj6k5KPBhRLPSVTdte3CS6UKY3vhTWGi6Mtqz5ePfSJ",
  "key27": "2ftAMjqCZPWY5iFevF5gvmBtMzQ6avSAWxqQX3izQ1JCHqCrBZjXQhoSvfF4mPMRJBf1d3JEjhnXgaeC85R5T4Lb",
  "key28": "4MRr49nsEQ5CWcaWJZ7bdH1De26tSUJVYsMaH9gDxQ7sWXLoU6gkzbFLk6UUd8thiRtRVHvYeoQFXHzApm4W9X39",
  "key29": "5tWCDUav1yP4fw3XbCNLz3bU6cV8o1Mv7nt1De22yvVzke6PVXrWaoqHKivuQuXaMEpQpBThqxQQtRiiVPPwHnZc",
  "key30": "3NakmbgcYTVF427xPDZ9r1zFBZp5ea55i9A8WokDnKuKvHpTwBFc2iFXNbRUjuUv2Q2BcV2facN5NAxDwArJaVtE",
  "key31": "62SJeYKt1cRU973XfDtgXoqZLFXAwcJkwxLk46y14gMKSPT6EPgVDXJr527f6eExGNfeftsWVNPvpAUKxyBDXn8o",
  "key32": "2iHC9UN3XaeMQY6xUmT2UGvX2A68cAjytzd5Nn85fGvh75xVm1ikvC1Pe4cQV6uMSrd8yPmDH1GsqsKoDeVB9W55",
  "key33": "5zAWqcnDwZUcZvX9GtayrqN6cLRZBaTFSBHS38BnMXP4u6RKfFeNSKzbuFQHX4czEExkinQuU5i13AvK3rUWGeWM",
  "key34": "5dRtkP2Q2DAm3LsrGq63bieCZAiYzHrv581cppNgdD9XL34EkPtf4CgFpAdbtoKc4WDkMG8vhWuMNrBu6X8TrXQX",
  "key35": "LcQAUk1Ztn5cbGDxG4YERgGSqVw4xJKnaMTxpPN7mvE3pdUFNewE8qjHxtyDvofJt3rGAdinKaVdwXQVuDLTaoU",
  "key36": "4PFEgckhLrkpXKd68Sry96UCWmjwXxsRT7nHYniaATUbUZLgLt1TW3SnMLkmyrnk5vNS5vrWPBYfUb6ifnTWWwEE",
  "key37": "3Kozw2bv9sqZVHDxayy811YxFdY6WPB8h5KbknoiSmQdNqhmWATvaysgpEawYs88o1XKBuwfKvTHdAgDMuKEP7em"
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
