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
    "3U2EVJLR4YFh7xXB47brqYvkBvDNGe4b2BZiWLwW6R1ozRMNvR5nMzh6iUSYhJqES5SwLSrWzoHeruejRAJPRzDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42z5xP6AUE5dsepEq5fcpWiTA7E1CiSvcnb1DXmE6WdLT3qXMCQgwrTt6GjEjyrJ4Dbaz59iUjm3VzRSn1JNshYq",
  "key1": "41JzyVLyAY1yoqJv7FjApMbuz48RufgPgYPQ1e7LKwD418SbwDNo6itC1CvhPwN6voE1TDtvXffacnZno7SRoj96",
  "key2": "66o6eArvGLzNMMQd4yXwvPvEUsn2Wx7CKqg3n8EGmhJS6PBs2tEENaNdvq1yLizqCXfwM8jxghLJjXaUBWLTQWg8",
  "key3": "43SSfnGiu4zAdSBXHhnSUxgMP6CYitJ1GiWqAEwUNYvg4Jot4hdAXpS9Gn1MkC38tL6CNzsbAycBMz6oE3XpVtw",
  "key4": "2c4T6ros8E1f6bV6d1AdJQ2HLcaxCm1wcym1wWyuqeLS6fkPFboTTcZoVmJdPHGPs34f6haf7PzYVzdgoLewcmjN",
  "key5": "uWKUKDCrmqJNPjcsez3cbrF8NAhLYdSXxp6G7FUkctfJf3tKiN1ssJSBivmzzJchbuXzkuwQVwgKD48URiUMTyu",
  "key6": "3o23mZ8sgqYjrSQpb86runUMHE85mAd4hpWTJj9dXYcPUUhb8d7SXtWDbwRvFBVr5gntFRoJYJruFFS6Q8SaNkKP",
  "key7": "2YRBMZotBZSaKkaRQ4VytQtKVWqLtcbP4BoAdWrTBrPvsZQpDmLVhT3AtJru454Sfg6nDekkArseiAcpD4EPwGc5",
  "key8": "41afAcV3La2skJLkajDyApFH4vp31CegfxGsj1QaKRLAgCcNMeHSZb4SiMDv4haLZe4QZB2YC7Wh4BhjjXiN1W5G",
  "key9": "2esRFdLJhBS8h43bscixM79j8da3SMtBzc9GpKFbTbNcjoKmcazg8xcQAdADEqkdHy4pJNZizBmBaQzy1TxRQbC1",
  "key10": "5DM3hkWYPjQFqNoWc87kknr2rsZzY5cefmsg5u2cUBgpnhRp6K9Mf3Hz676KS6GGakpNjXef5799uVz7ap9LhEs1",
  "key11": "421P47WCPmaUEVLHCE4VskDgpaPhZHpzeuFEnX8XXHsEE5mu8QZ9HUMzMqcHQutfb3THoGnjicoykEDFBJ3dA8s8",
  "key12": "2BRZu3WWXgAj9X836az78CCndN9WxEmurcmskZUWxEWgRi2RSBR7zbVXjLSY3mbUr9UeRYkw2DaagCECzA82NZgA",
  "key13": "BPoZfwsJx5jT3PPFFiHCgnvR1H88eXSN67Gpwt8gwzenhBjRMXsLRJqKd1L2k8fQd4mGgio6kktsHmD6y1kCjjz",
  "key14": "MwKrZtBhNbSrYyrD5o4oWDaAzf5E9Vb9e8uoiS1cvtf575pwdgb5xiubdtjK9Ej3spvps9WTdJD7tSnY8268Bt3",
  "key15": "c4Nyc6ViEvT5mfscDMzTwrtq2wrthdxE9LAYdNy6HFe8ykPdVvGtH23LXg6XWqqpUQDoEyMrW3JYi66VU6pXf9w",
  "key16": "36Fd2Kj9RzazaynVxqfA9yqo38cZerKcpWWRjVcQhUsfoc3V97RMArqQ3tQuebiY6rM1izkjAB2hi9BNZyGkyJpH",
  "key17": "2TBbfrTMUp22HpbVj7dQCyHd9HqwBbZYhjaHafDBu6FtvmpstoHmHuipr8LtW4UJWMQJmEwNFv6Ho7k6XehRSuv2",
  "key18": "4E9wTkSLgo8SaGMGP3c4wWnZgFkv9UE9djdtRYvrgBjaYUxbAfwooePw1CVTWuUz97Y1kifbKEbQEPX1wJ2EBArs",
  "key19": "3W6hwfBftnKe25bdtUFzviJarjiCrMArVJcoRmReSunT7uanaRLB5jtikWLWQawRVP3uXdQ6F1f9zTQbZrhLtX3G",
  "key20": "4rxaRYpu2pbh6jCRUBDyatbtRJbdvhmfCBRiofyY4qAoeoAB29esLAdpcVdHvY4VX8FHGhxMowWT5M5j121cXt1r",
  "key21": "4kwc1MpoiTtQ5MG79kgyCzs8f6iwAJALThtFXdFuY8wugxo2ezi25aAxGi4Pt2DhFa1c5SJsqpV4qU2S7QQLHsxZ",
  "key22": "yA8k5UwxPainxZM59FHwuS2pd3R2KigELuAmoXgYYhjt7QGsbYPWcFE3iCz63eW6o1Us4r7oKcpoBQ5buipV7Vg",
  "key23": "66BitZpqsWj3cWVBc5eyN7Mp4jPAw6da3RWs489fzfYSpCjpkSLwc2xiEKvQk83dETiL1a1nbqEfNXqsDWPHCojA",
  "key24": "5KKYb299dnyekrSNtRabmhfRwAusY8Zb8RLPKw6PGCTHAhwH9MVJZxmmMnKasW4JmFtw2ani4rau4jwyGX12Kgxb",
  "key25": "2zGECrRo1XyAHgAz7ivWzp875AhRFhv7Kn22238c3enaroS6H9npShqSZMN3hhh7akkUzb3kA7w5KfzJDM8JBtG8",
  "key26": "3SoR4mCCfomYaiz2RCjff9hewx9vMjiumF87ybQQzyo43zKBLke3qwjmn6VX6JBfan7V7qQwSHNsAVCLa14QEJZJ",
  "key27": "57tjEa9DyeyQHF4ehzGT54obd9b4SX2LXzgpczZHzeZcGK613Zx2ydaN8qPUY82aj25vSaf1U72DSCf6NUsJJMVy",
  "key28": "4jJkuZsGFfcJJcAvWXHwskYBmQczqRNbtCJXSgNHWJgG5i5MDWyrZeyq1MKuT4reoVehmicDPUR5TKWw88QW6wZR",
  "key29": "23c5SAaCbuzA8k1vfGNTMVLs1gSucKBkNBzUeSMJKoahcueEsvU6G5wEqzDc4XwArGxUG3pLspg8aLcoYndLqmAz",
  "key30": "2czkjBctN43GrVWMdRX6Qj8dJfD7rL6ym8iTSnmk4LAS2g4s4Du7KdPqPbGYFFWgkQ2q9ZeBJ9Xo9Ehy5wu78b2e",
  "key31": "61ey7cD8hev5KtZDdUNe1NxbsqEonRja1dCfe1GJkXgfdY8jESKUV5ZMeKuEJuBjTat1n7JuHACZ4B3nSzgqomfq",
  "key32": "5X861YbkoVmJWp7764aoS3wjWEZn6dMBFAzT6Pep9AHZkU9fYV7ggm1JwyhiYywoDWRrwunvMWc6LALs64uwLZVT",
  "key33": "ZQf65PscD4Tmez2rNszbgAJJBzbHqnQ3Uu9TqEWEQNX66pLMZpcxTaXAzMaHJMwXFVExgwWR1MrxVZFmbNudLk6",
  "key34": "2C8b3NQDDpiZ4oujNoXM2y5gMLwnZ9bcomR97C2aF3ddU7t5eUQX5Q2wLsqhmvWuZZQGEyLBaS9266SswMJhtKry",
  "key35": "UemFkJriDSUWi3cLSzhaU3xmmGLRZJQpXKJVF76qZbPvhwPEcesWFQuzAuK6QB7T9aTiFc4AzPcQq757d2SMDNU",
  "key36": "3prSDY1Uy6yfDvFKFJpFKP7PeXYaiEv7pADzXt92zfDE2UuATRYkGgw31qzYkHnDRArUc8xKW24m8t79TsprZjWm",
  "key37": "3HPCNMKh87bhrMttDhRndMoqo22ResJ1TyFhPTksAszV182AMnALHYLJuyo1BpxoMHsLZUDZoWUMGA1FBMr3jUeV",
  "key38": "57p8gvhR4gz9Xv54BFw26gjLphE73W2H2TcCjSQjutc6ouKbBfFEF9DKx5dKMwvRsKegigbTBnHjiRikxCva3hh5",
  "key39": "4GEyZBUAmph95xmDyN9a3K5vgv7CsZ8d8KQr8nfTddqzTuCMvVq8MgE7siqs6iCEFaFqxz43wCCLN7gWdfifw9fN",
  "key40": "2D9sJbJX6ivsrTU1BpjArPqkfFHzPkGtbasbwqX2RyB7ZXaBSgiY66PNcbDWoTn2Cumxw7GiQq1n9UUyrQKNSmJC",
  "key41": "2j4YGrcjwRQ74WPKLiwGUaauD58WXPGAHgwQcpgwjM9HMyKE4msg6Tuj8zWnvJZuSx2ga3VKChGAhC4NGUGvhkAo",
  "key42": "61KMnSBgK2XBQJ6PAa9nSGN516Pgo8W6v3u47PregGGjDyKJaGycPKYae3cXue4x9KZrJH6Af8RX38zVK5afTGQf",
  "key43": "2JuvPGVzxacZiYsX1w3EnwCKyncjp298eb8Qcx2rZStBquaP3adozqJyWaTQDPw1Am8XKwV46SkajmPL9s4Pydej",
  "key44": "2ZBobNZK54M4dNHtDeG6HapoS2mCJM3SpQYho3AbKPemypfnaJRSStJyyCqE5EyaQcpANq7LF1ePRFoJG7hf7SNL"
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
