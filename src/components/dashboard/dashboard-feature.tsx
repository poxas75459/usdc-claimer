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
    "QFjEHYx6Rjiz9dMQbBEoQL25JmhvHNvR4X3jabn2PZV6MAQW8VJVuLfmMb3S8sDccPDFWhBc8v9KYTFN8WJqTwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CZ4hK6B2DJEMCPtw6dhgGrSLJskuNZx6KtPujWuvM7zZrGXbx9RNZZnY1wMHU24ao2DjSdFaRzdf6mbY8vLn4KJ",
  "key1": "1wZDaSPoyWeBhk7gUPCbJsodUDe75ftp4A1xwyZiGpLiEnbYyVyZJw26oBc4zfBgPjSWfhfgMJ39dXa5FQChdin",
  "key2": "2Q9gwHquQ9dRiZdnbMrnRthLxmzQneVYWsr3sshRSXRvjo6LjbnANgh67mSN7uxKbPtNbPk9kDafB4Nb6pBTctAA",
  "key3": "3KWVWYBk5o8aH2joLLuekDXje7vmUnc4PgH2K9b6YiHs1E82qiNkTrWjCVu9iS7y1DgAZEHkb236pGEXhnnBh7T7",
  "key4": "4TQ6vWnaqxwgnpwx2Zw1BeXxt5tDxF5N7c9G8zhBKrgsK2UX8YubvUjdRM5zkQ45Fp2wjGoshZQY19PvMbfA1MQ4",
  "key5": "4s8bFHK4A8yupjfYJbHbk3XC7T5ncpzmqvY192MF8FohN5aK3FmFRkdL88YdTBFFr8VZVeHLy1EY7NpGRs6bvAoY",
  "key6": "2eb39zTgrbmyvHE24zrQX92Z9unnuHA5VZ1DKgNAPS3Ca5eTbg6yVz7JVGzhzvYoc6sng8WjWm1ydomkAeAY3cvQ",
  "key7": "24RQoFE9T5PRJkBsoexbfsq74myDQEYz1H3WXthp7xrAwK51FVzUBqLwN7sdxPSLesVL4jqytiMqvkMYvQY9aeh5",
  "key8": "4racMSzPeJ4J3XUpmQfwCMZSBaqAHYfbQV6iDQRYBWdLs7ywfsoBM8DfkDwxeyWxD9nmz8PovjjKi4eRXumAYHow",
  "key9": "2YekcuErXSFfJKqif8xVqzxR9JpCbLqdiToBn7sPzV3ax2ZJLXmKddESXzKSErcpAR4RYxjq5n1RUTWKo3JVGrQu",
  "key10": "5cmn2iQYDeJSDb2EJ1a3jkZ5cp5e6rq11UGxeg2RmFKA8vgXQPGUgWxwLdVxz4vxbdYeH8K1ZJj9ykP9WkbizJDp",
  "key11": "4jHCYwnNEUNd3ForW8EPcuNw2bFjLdPq8G7Yo6ehBvbLo5K3ZMdWBCHhZQbue4iXi9FddmpJoR9LH5J4wiudBG7c",
  "key12": "2KhRot76YxgujEyNDESXD8Md5xt6PLzqzVQoA2R2Nq6cusQGXViugTz6WvT3ypCEF3pAGXVAxzgQWnAgUW8Sx9ez",
  "key13": "37wPHvtefcGYtNKdaH5afEhpXwAce9iqKmsFT7UBssejChgpY8NysRjT8FMUxqt1eKewcp29FmEUNsds5T11WXDv",
  "key14": "2TKhcFcd68d9DgfaBA5c1aL9ZvSHSMCo5XdBTjkYxGmEJ65ASpoDiZpVkcU9zmpgnA2y5PsnSgiDfRCY1L2bgMtd",
  "key15": "2FVG17BVuiy7ZPzp6aPucdkeLbg72L9fff6nm1wPjp9zzVDD3Lny21D3jLcxZD4ZYwsuqGjMSoKig7aabhFc1AtV",
  "key16": "61Wn2XnMdXD33C3Gn6iHmjGpvi3RxwFcJXDZeL3vmBsC4cXGQBGYsxi5uUZrEqjzTKnUwBMBvjoLYtSVxUbwUdm8",
  "key17": "4zVYu4SKxKwBezFsTUmSzjAPuVWU4hkTsxXcDES8jDqvapL5ao2HDNJkVUMV81v9vk64Nsmw1tP9NnqnExcXFnHM",
  "key18": "3TyZH2c2fA9W1Wfby3Zur5ASunyP2sjTAdc8VTT4XkKV96xZJQBMEsefk6V6Nf4yU5QjZkwohS6MRb11r2gfnz7u",
  "key19": "4YxfQxB7s73pV3fPubwE3gh5xHW5XbL848L9AMc9xHadJZmN2zqdiRnYjTJo2EBEkUxK1RTLuf9wH13SgBMSdiGq",
  "key20": "AcFAKagZP9Et5UabeZ9gaJ7j7B9hafhqfn66Qh5vPytVnYMYgohBK9g8MZtFcyAF7fZvAGzpQnfokBDtv5WAfnu",
  "key21": "3DPeJQgT7NJoPZzcm7EzPjjvBW3UrqmSNFYMxPTGCK9PriaAeXnCvuFA9efM7iLAoAXTYBL3ALzz5Yh9CMy8GcB2",
  "key22": "WvCtJyhH8pScfaVDSWdKwXwp1Zy8NrhcQ4EAVzCSjygGRDQ1CRMNsomDbGrGREdSeMvvu1JWazEAtGCpbaJd5qE",
  "key23": "5q9WA8zomonpVUBKcoJez5WCutuPdg9zELJeK1ZQouPRWgwLgDiQigowVy3B2K1pGUKfBWzSW3qvcozJDXXXqdqG",
  "key24": "cuU3jCZ1PrbZF2iafxkMnucG3KWaeB4mhyQJze4FYZYtUS3BHVx2reTMXWLQhHHKNeVZEABNDH2rox2LnPinMbf",
  "key25": "4wSbVHHB3HYvXXamrYDHvLLdzay431oNzPmPo9X4YF48zmsBodgckfxxYeC53pTXBzqk7gc7kearbaqRZVSvPHhm",
  "key26": "64khKq9nsDuq9i29sbvfksDi4PfPqGs1M2FxoqjMBinroFKJin99RTTHz7LT6FTB8QosRN6oqa2qSvjQsaP1fMxp",
  "key27": "qCh8WwiExq5vY9hzeHyhn4fAngi8kPFbMtPjekD83tSwCSoatiTwqnK3Wcu3sVpWGkLpxoBpxBbJYwHGUVErPch",
  "key28": "3zDNnSwq9y3Gex5EnPGrCxWU2nG8wBm87pU574473NyiSBDbJYSjeUfb4hSgWDLL9RN6ZLBvw5GShucQ3dVKL1qQ",
  "key29": "QvAu9HfdqPLWUs1HrFGqtiDPqfUjGjtHMnx76qfeVjkVGhtgqx13JcGKbzpQp3UVaZLWguFGm9oyY596cKBVqCT",
  "key30": "TwcVaec9EhkAYmawRf25KbrLkVPWm3iEJDA45h3fum3gvhNBTb1eaBBoi5xoFz23Ciqf2ogZxocFbjiDa2nkjoE",
  "key31": "3WXYf9gG25HEjfwJjGxXDqwu2JrbAXufMBLw1F1iTT9WXzj9adFoFK7CLGyThxcgeAcK6EWAkM2ZdWxzaqchWcCi",
  "key32": "2JC4y55MmP3sXuqrE2hhdiG8UmgQF1xp4A9ecHH2fdy64DFx1ChNnyBe9G5iom5Z9r58P2EghuBp871q5jaUjVh1",
  "key33": "5gJCWr3DcZqBTnFMBfVcrNNShHJnRNaTc9Loxtv1y4XGRUDQmx2djJ3PWqdcNiQCfxZkZKBj8g4qqZGzNQDFMKvT",
  "key34": "Frz9GzJKtZdoXD8CyvirTf2Hfg7L7sMBgAeiwnao7amQ56gcMX8aeASqyJ5a9QeGLu5xgLpYGn3GnV1wnPvL1s4",
  "key35": "nzSMEKZU9DHMVQKvE9twLg2ytQMnjTe7AvJ5W1bdTS1YuVKwosEkcS6DvcNS2ZjdnUapwKeakaoriqfV3YV4Rnf",
  "key36": "2NtcJd2gcW3URGj8Um4T5GL87jgD69Pg1ossyQ3iCYm5d2xuXn4oWR86nfZJZvNFAK4c87gCjGijqrFLa9opfPYT",
  "key37": "4uRGTb9mEJwxK5S2spbxaFyLoA2uUfBE5N54Spv87bKopw7GcrwVoTBY3TGejwmPJ5YkxXyjpXEtBZnYGbmb1miM",
  "key38": "5KnMnTNZ9fHC2Er8acSTEJTYiBrESgSq19XvzJ3JvQoZJegZNCUtLbnwWdfu1x2imaNdMB1q2sbiCj5yyYfYVwa3",
  "key39": "3MnWG7q8ZHSbaQpmudqcEu7jZZtS2wngkdG4dMv2GpdvtnxX6YtyWwXshLSwTfCvVUWAcmqN8WaBWCsazm7VivdM",
  "key40": "4QDZkEVbEQ4dc1YVQ8RkP2d9uxpCFT71BNjPWf48rPEcmdqEXjDuk5mwznJRLamVK9w2pKDKgwvFuP5XbodjMbqy",
  "key41": "67WebZ6iu2RcqyMxfZktRGjStgm2nvAwvtUKmU7yrcJNikK1Vv3PTEbmrpc79Rt62BDygAnE8o4w8ePKx5EG7iQ8",
  "key42": "5wpqheUU6Y2DJaKZgxqMnRnuUsTuLnEZXds743LvHHNKt6Gz5tz5yWh4H4WR7s1bgt1SsWNDLFt1dnyxZiHKHiC",
  "key43": "27PNnEx4GMkiA1FVASpfx7rbpsngUvSWuK9nZqqVKGwDFnLQjeJRSSxoimJoBwVjpGQF2vMch7o23WoGN8nxicYv",
  "key44": "4CwLCzn1exUYWppEcHYRjw1CRQRr8LkxAkCjwpYSms95i5cc6jnBkw9ScoMzxVhFAq4TD9jNVEyBAmBYeDQ2Gwo5",
  "key45": "423uSknpd8aRzQnY3C1RjL52G5myYJtwbF84gZH9BQ1r5qP2yn4UCVTc6U172vSgtgCnwxNMEc2MYXRQx9GQhVwR"
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
