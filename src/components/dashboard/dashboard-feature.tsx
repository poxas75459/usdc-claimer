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
    "JMFBo4tTzorL1W7eAbRyHhSoCTbnXfbpse6N2Ns9zNbGzfq77sQHSXgZVcihnnB4bdLZgMeFnr7HP9psDSbs1uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49oyMrmjyvFaHBT8wnZodYTasdW3o5b73ZY84NmGLrBRSV4EV2Ba26eJxoefXmXCE6oABGBKont2Tex6f7m1MWft",
  "key1": "5z9Vg4Yc6b9LGPnmU8vBEVjWJ4cfMp1fb9UFvea9GinAN8hx3dJJiJm7beCPf55EZtHYVwfXBFgKPAK8u8EcGY3q",
  "key2": "4xuCTrmai7WsAZJcXf1EB1HTsyZuRPiP2PG61QXX3X4HE91FeXmUiQ45Ag8PXCq4BwRhxmBryz7r9mrrTtmpgEJJ",
  "key3": "VrLP6XyxCGZYckRAcAUT3kgUuceA1z3KHy15BFbrnvFdbWPsV6FGpJYYXuCJ7B4byGQfxr9u1vbeaNSn3JfhwdN",
  "key4": "56VDQHYZuEhbQfWHN1djYooD1CnRBuy2Pb9XDCtHfuib6eCRcXjW7gZm7w4iTWhSjzuufNYrQVovFojG63f2YdWk",
  "key5": "mxgxXH4Bg2UmgXWxLZgNdSzbW4o69GB1G9ZSf1yzvpXs2Xqvp83RpWhctNSJGmZiA3bHJLwT4W4W8dngzbdSENr",
  "key6": "5JBycv1oxt25ZwfPhS41MUKp2hbmAzzgbJaMjVw5uJd58L47SYDDHf9pGHmgjzznzM485C3VH9uMutBvijmrEVoV",
  "key7": "51VejXQ7RoiRZym8WjQKBrk4PDHoQV8z7KycAZnv9w5Lqb7rnTui2GjWpeVv3snpmc5mGG4LsgSKEJnh7v7EMWJ3",
  "key8": "3bViG1CPh5cRFbi5uUVLgcJfdEp5PzGca7p4JKF8NMFWazuV6uVhZj4fqRJfNfnForQnZY9wRnHzwDUtHVct4Peo",
  "key9": "64KXmSFyLSm4WjWKEWL9YRMmpzsV2w7pZsizko1zr9JMhPdRYLurVy69F4GY346BJr6dVdFBny14KgCsUziQg3wn",
  "key10": "2RYhbgNoD8ZirG9ZgDRpoemDiUrYEB4nKmgCmqtYBXAb45mzckXbDfccLLZJA4Jzp8LzEEQ4LbRpBQh7iS5GnDvW",
  "key11": "2bXRMrEatVyxEHUqxqf7UGydb15W2rjVj2ww7aEj8dYvex5EdmY1kKKHa1gAw7VjtVcAArvfGtQA84tXXF9m3RD5",
  "key12": "24Wth34cDyttnRsjUdfDMQGBnqoM4b3nBehPQkLc8jFxmdt3p4YxoxiEVVzmjFph9tf6dxVsMmpr15zEg96Fm1QF",
  "key13": "4V6WrVeYymJrratL3dBh3ADR5ERzKoY9yacy11pYnZKBTjUhZBYWrc7SLCRDmhfRz46ujQLeMWKrbphavRCWDMRd",
  "key14": "2SMjgeQ967RK14gNvBgBXXR12DJK78Gr7GaP6gYqa6wbaNBk37fjHe5rgNLhwek6eMgBdiyB2CvzeNbYV8xTmEFe",
  "key15": "4gqgWmHSBdupbV4BQSpDs6FzcfAzss7QAgFaBuQEh6G3aAkrLEqPurKGgQJLZYEv1Bpxmy4RcJ1KpewQuUWoVmYQ",
  "key16": "34LnpWcU11fs91VJC9CxyMJnoPu3psPm51yD9Kr8eCVFBZ3JHAZDb7irgkUBH3kuvVKnECEMKqCtSoLPgSQzuBNv",
  "key17": "4UV31FiWUPaUBoH9gdCU8nsfefkWPANjUiwwmN4Hzn75RpYnUDuQVfDecxcqwK4vBjrv8yQoySMAw2q4hCLX8bzz",
  "key18": "6678KRHSrVBQzjoM4m7CLmefDhXVVfK4QFm9rQAZT9HRZV3wLLNQUtPNvH5tkg9hYSj9B8ckD5HCKBub1kN9HEg3",
  "key19": "3LPwQpKa5wUYvEqWHRtAsXmSSQBmpV96fGVPsrQU2QHMUz6PBixKYQKKaAa4wacXaufXmM4rpe8K3c8Wq3EKypYw",
  "key20": "4DRV1b7vYms4QZFTtzvnwjZHq1ypmPhR8A16AfJHCVmhEFPQDxTxUwp3upKham3MnFep8sRxGr4DiVMEcS6M675Q",
  "key21": "3uNjRit1y9RMf45MRxvF4YJ7PSRijLEXtzcvZj8dCFKmYZkRcPWAecyt7CyN629MFJFwexR5omAEeFrLLcd9YKp3",
  "key22": "43UiCKDva9GaN5LoUGUig5QH5kpBck1NH8k8eX4YFW5qCvdHvhFombgNDx7Y3EaHgL4SqRrj3CZGQiJv4LRvkQ77",
  "key23": "25u4NGzdfhku4DtitU8XPgdE54QuoRTUXPTGCdbxcMUeXnhoM5suekUz49zqTsMhQWq4oikXqejyWVPTcnEqRDRf",
  "key24": "33RWrZkGN9VBZXPk6zUMyBoXXLnL6WPUDfUu4jW6BYdjggC9o59819oPDcypkMBQfJEAbzfoySf7yagKxL68teiZ",
  "key25": "5YED8TXqj6yMbNrMAJ4vtnHW3HHNTqUFt1VDmwgCyyHH59XTwyttWQMyWs5UcMqDb9RBKmSnMug1b3THneEYrpxK",
  "key26": "5jmGLD7ALepZRB4ZCVbsUjh1AnyaPFnfky1bUJksgAQMZievSVXQexvQTLrbpTLpx7XYA18YaUdEdChagrEF8sPB",
  "key27": "4jGUoT87mXwuxdjpNnA9RCJMR48vhQrvNT1CfPHpza15s6Qbge12CdNbVuoirD88TTAa8rd3c1WvQNcnnGGwvpgJ",
  "key28": "FSe9CedcbpKxYKD8uhPRVuLgEnmPXTi5whdzgDkDq5cz6SSrvSsCknYg4MyDyMbBVXPMYhyibxkvW2nffPdqJKL",
  "key29": "5cudaWqtZBJ7KvNUahCnSh3MNCvobFLedBvnRSMoA1mfoDSiZ7Js9voFnMc5Eo2tw8eefSts35DiSV6oo6cV16zX",
  "key30": "xkJ8fkQofd4zT4JFAbkpbVQ9wKSmuNtFyoWEUXxs6a9XNGjyVDGhPpG2wEX13Lbsdxbd2cRaideWUf8mspS5bmz",
  "key31": "4QaYfkqYtjq7K3ezRwh3ypKCoJGUg9JvRiSZE16yT7ny5oCQXAS5NRxeuyZoDqYeNd3nVEs3bowW56EA9CeAgTNW",
  "key32": "2fWbGhC17UvZjLTAjW8btopUVCoyHW7YkmcPdp7YZ52rpTP9J9Rz3JxNJt4ixKMqpuwNLJGJBxAt1CNfaQVFR7Ds",
  "key33": "J2ZGrvVJAAqBzG48uqu4U3LESSwRTbycahHhCCD4XrMYxqm95rpCR1TBzEhwaxhEnmMf8CY5vDkFanrYT5mcPKq",
  "key34": "RMcE9tkFpUVcBy97giZMzSaipsBBk4kbNabtcf4i33Lm7WbDLDP2tJfcogaKYBQqmg2XA5WD3ppuowrCoKRt4JT",
  "key35": "uBQqpb38WcHzjJ2H7eaVtcLqSMqKrBjLbggQZohSTXsF92tvUbnfY9pUB6AFdGze1Jbsj6d22FbQArvSGLuRsoh",
  "key36": "66G8npuiHhCJbjjKek6HW87A1P1fQ7WPvbJU47LidKFPnFUY5Fo9e8aja2NKRDRUBMAZ2vn8VsZmRese5jqaj3Ye",
  "key37": "23y6BZUjFZd5LHbiGbrWXoZBNqae3ansgBDfoKctfUGRbQohD7t8BEEUa5RB8FR5mHTKB4LqyCwXX3uMHtYZeLwc",
  "key38": "66d2UjpgNhcAcqnbMxpzqFFRcEkKLLEJt3EjimzFfiVfZgEWu7vva1b9JuMM67We2oAQDhp14KtZLRiWJtktrFNg",
  "key39": "4kqcSCQYtVphQnzKHBZ5m5VdrNa3fGjYis4C8EtCN2Wwg7dQeF5CDo53jXjqfhJ3QYrD5Fdn3fTXtoarH1Q4GFws",
  "key40": "4N9fdJNZD8aNTwfvoo5ujE1baycbCxVUFDobMRaHxRZpVgb6PswzEzBhZqmZwKGcmxTmmsGxbpLXSVeCFxZCxufM",
  "key41": "4RurR2AgSi1qPtDQATKNRY7Wjvt29mvbLwkNvZPoysXkdzAHhFUL2ENviyk1qad39JKEFLNiaAJGQGkGJRp4Rfpv",
  "key42": "4n683GnjtRMLjg6XxnB426usUzrcgKPB3r7m9iJe2Cpj18G5G7voXfTGzJZnZrDJsvjHFQGgcqyvmX9fhtg4n6bZ",
  "key43": "28bUojSn86iP4cbbxL6Httcw3evufVKnhmU1zJp7873kHWW575DxTmcDkmMadZhs4UHaTDUFwoAUEPs26Yc9SRG4",
  "key44": "eCXnGyGXLbTa9LuUcGpbpBjXwgpc1Lxj3vgLcmHBB5N6GoE4SNWcJASeWNTqWWDcUovLGxvxtYW55be1gPcWgaC",
  "key45": "5siStYM6K55eosYwQBqki1MPYLdnTrhfS8pQUJEzFxs5X7tJucAz3FnihLeyDw9gk74RbNTrD8HedeAg371SoHdW",
  "key46": "jdoDRqbBcV6dJu8gd9YjCzWELkt77qGt6DDSUayjRCgUgX9RhUTrKNF78SqxrXLyFdkh7gZ3ihPCvZtAFEMdq9k",
  "key47": "3HHyMFr8v46cf59nMDoi5V3gKAyeUpYLFvCViN3e8BQfs6XVpk3bfgYSZHSkqsTmygzQwHDyhFVBFTJugqSK53Y4",
  "key48": "2dNGfyC4JrmChzB3zq7rsJmJqwkqcJkFJs9jRpZb2TyM1TcGxXURBqWD3NdLp91NMKtAKq3eNb6eZZ6NLZq1m9Hb",
  "key49": "56i7kqw29ea2DSfZnpCftNSXv5FHzvKF352pQjgykGDy1yam2BSgzqQCtsLrD2xv8bhNry5JMTLKMFSJZsiuzYPk"
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
