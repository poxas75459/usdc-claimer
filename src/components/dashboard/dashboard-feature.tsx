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
    "27aeFsiTdGDF7kr545rk45KTRhbKhZguEsTqfuCBmA2rCDz6ZY8CHftubrK2vBcNwCp6R7zRQYiPDS55HX9WravH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i3vZu1JHYeH794MGcy6xySeZ86Ae47MfxHspwHnMGDc2MD2hf9WHo3CJGjCXmUfJ2MWp2dzEBS9AucygjPhhu51",
  "key1": "2FZG4s4vNqEUXqBaC3qeWU36YYwz3faY5VYbtDMnnMFTn8oWDjPNigWFpLHWDdhh9byfbdvuT6ryYzfZHQFTNbX4",
  "key2": "4Fbg29dfynTg5wsds4wqkUMAxwwzBAMuhbRWhtyZm37UzY4GpdWwQmGUgGbcaq2NgiHufGZZiHqBMTvw5aQBTyL3",
  "key3": "32KtBTEyK5LfZo6KyTnNzpi9XdipSpAD4aMQN5Eo9eb2hVfSkXxXZtbg4RFcqJTNx7798ZtMErBhYFms4Hrjge7u",
  "key4": "2YYqAwx3ELtkAiNBMNwfRTxCYHmMPMVAHbYSrVH8Gpe4rW1maXpHv96mhti8HBgXHQL7rCrzCWMV4kvE9g461Kp3",
  "key5": "2RpQFc5xY7wQtT2KDX9sr2qAVvUufAxevBpUVxsz1X8d9LgEJ2vECKKAKG4d9kvpLCdrRKxSBfBn73DqbmiiG5Xw",
  "key6": "2fYJ7h6Nq5QdCLELz9fks5T9dXYZ5vikTgN4L8rzR14jqahLYb8xCMGwv5bzh4neDMxXSs69jzxtY1pDcVJERoXN",
  "key7": "2MhQP3mpJop62PZhhfNYGpHGazYWi1v2wNDf1HcWqUKB2XRsgsj5qykRtyicwUU7cv9wkHnAePHUDjd9kxPLpa2F",
  "key8": "5QXYz24AguUB1ZphpAsVKK7okEQmvXmbdoDYSMRvKwTRkJBZPkvm2LrD2ZDy1NgaaorbrbVfjqvCBeN6MThUcSbx",
  "key9": "2DYUhHDjB2V7Vc4C8noun6HFmVU7WSLSueDXkwF1PsMbmwwegNLugZYSxinQsHcp8ALPkDoSuSDfJXwvxz4KEQTU",
  "key10": "4pUh6Szy5pdVnc8AT4gUKTrdkoGh4jhsfSRr2bYqLmCPtjHeei7Dt5xeM3PxqHdWKgb6FYGuR18HhcsB57dbYbEq",
  "key11": "3Fqa5LrEbsnksUnzXj25i9hnAj4JqsywUWuWjTNqdcuRLF4TNak9bQ93ehNZmyjzDNGmVzddmfRTkKUMsvzEUNNo",
  "key12": "57g8z7KP1QArVpvFjrvDMWJ1uY4yeJGEk28tvrpsXd4n5XdqyveUpps7gzVSqqeNkm6M496hZne7VPxekjXN4o7D",
  "key13": "4Ue96iDzpQpJLvuXx2j4jaNvEYpAmW15anfpDb233iAcwuCsucveHgYGQCwPPYDC8zqCKz9TNpLK6SMNuMdueLdW",
  "key14": "5JtQEySLCZGkMuFS9QvUm1npyEAozCUQBTwvQi3fmhfzvcBSoU44RVeNSDCFLVoNGnVoSSgvjzjuJurvTF9JjJoa",
  "key15": "KAhs4AJut2ijGEqBt2eoLFmtgkyUjMARqNCS2oMbWQt5vP2TZxoTAhdJcyBAuc6T9jvZgUpEXcNmqLEFvhsXCmp",
  "key16": "2ydxbwBQNghKCCYrD6vMumjZy3HqvoLZrKUre3XUTLJ9D55cK3KViqBucE5HNULtLJjPhHwXVJUA8Vp8fa59YdSe",
  "key17": "2qyBiN7mbFf48cMcyjV7iWjb7VoQKrcyrHCmgZsoKYurvspRkJfr7eDq64RBLLjTHkmi73zNviWEsCq1dficQsCu",
  "key18": "oxXc3tv4fo2cjFAAmjhyr8zipsU6RcJgBYLLgHttJNmJ45q9xNTupNrReCEZe3RzCABhuM2cbPPdcqb6XxF91yJ",
  "key19": "4EsMoGLTZ6vjQChdFdh2wr9Y7ayBz7S1ycK7LSkoqKzmtSawv7e3aD58KYtdxgN4mFThdK9EgR5RzqMXwr4VLP5a",
  "key20": "F18Cvubmh8JMum3YccexvRQiL1YFCxLfk9fUJgPN5H3W3RZrHuTpLXqV8nziWUZ6GNCziAGmJSGrThQHyJ2hc3o",
  "key21": "5XmYT8VbJHhs9px3ofAu72qf8zw5X7pTgtATSzm2neVYXVz9t4QSWDF7eLA88k995nQ3pbVZw1Qsbbsq4PB2hbR7",
  "key22": "51rVDg9bAbNDhtUrXp9rNubboqocswN2WVbjnzv6HGuXHpkv1vD9ZcR5aHQGVv6Pfwzm4xDX3vjw9hERosedoKe4",
  "key23": "3PyQLQDx9sAixUNyCbvEcWx5VrXv2imuezE38P1xsnvYuTwkZVqiHAFFKh3CUqw7wUFL8gNkw28yYmo34TBfVmLF",
  "key24": "62jKGmxY6saURDxztc8haVKHWGNxMBzASFuwTR6qudxjaYiMKgHzS1JpjJdJvK1DQYVVwqcPDXXBJLgm7RbgiffP",
  "key25": "23otzXRGa46kkZyFcNv1qm8oBkSFupvymi8CebYN9ktophpVzjPJt8yM3XTg8Su8dHZ4XUaHrvyh5MkysYn2Af2S",
  "key26": "2s6yvshemm9C7yFgpjDAPck97V4zpREDCgNpA5dnjspFKSuC7wRtsHAxu3rnNn38huk6vjJkt5PiM1nwCaVb4VBZ",
  "key27": "41nSkXaZ2PmbnmpDhC6kRkkVvaDjYFvLJdScfKBN61u4nRkudk5VURPbCbB3zxEZXw9T92TTc6orcHgM7iAJhYri",
  "key28": "D2B5pHxekzX6k8ywnyQb5Ju4SJfSmbdyR1DR3UWTdeFT8UY1uKVwKFMrzxrAvkXna8ZCKkFkWcRQfKCSTpy6Ree",
  "key29": "5HEhcUUQjHbwVpqQMnDL5cHBR62qT4mP2PdB7LX6ziNvpHQ36R8RTBNPZ8Nx8w2TrBQ6NbAKqEB1h11phSJAwJPQ",
  "key30": "4SW1a4gJTf3VWxWrWvpKQb2musF61ZbiXYFerCJf6teNLGkXtEZfptCWbmxXNtpiRe4W5c7YYQwzKYXbBJfsnup8",
  "key31": "274GJ33V46uf6PwCZjLJ3GPaBJiH7VVcRnm53mmfVW4gkdzXjQjQKsn39i1fEYwjcVs2Hmo16JBrD4J4nEdNNdCJ",
  "key32": "3SbMjNtDGN5kDFysxa4T9cT32ATkhjetHtpLp85AHFPDbRev1ea6DKqzocdgJBbe83VFg73bShKKs654JdrJECtL",
  "key33": "2qh3c8KVzhrrSzR3HBiiF4Y8env1UMRBaDYqJN2my8Werp3cLxsL5VCxxMMQVg9ivrykeF5LuqVTwXCbaj65f4Ms",
  "key34": "JQD27PA7iBFyYcd5oQgAYaiyWxNtWaEPKKk5nJFspHHG9Lrmx8YuoerdKHWRDKA62F9RmdU7T6rAJXHqNFuNUDj",
  "key35": "5r4E2fYDaojNqHqkJm8H7UGvQw66Sm74PDTPB7d31eGc9UjS4u3wYCRxjsJMvADbmyBm4cTTuALHHcwhmacB4Fbb",
  "key36": "55X3T3Lot4vXD8VeZyXZvbLGjyenAuCqGj6wn5S33Mi7kF2a8iy8pui6CjrHjVtGp8ekPHT63hsXCrTFsLTbk2cP",
  "key37": "WCe8yvQcCaThuYGf4yyM78PaBDEo23gT1BYW7R6Q9XDESvbpQ1V9UKKpjrEuzPDpHgB2rgeVKQFSQqPqLtCY4t5",
  "key38": "56pt3cpWteXw81qaHom1UsuGfxZXcXEFVzwLVj3f72dKCQwAV7QBRFfcEfQromkuT8mtt9L7qHWxDiJY2Ngsb17K",
  "key39": "nhTruoaaFWgXNdtro4RPP9AbCtwM4q6PPy1tEgJomm9f3Kucenbw1kyv3nv4edj76Lp5CcnCnpdAfGjKhCdZqY7",
  "key40": "3LnLzryxrYRGgY3mHGg91MPzfNsSr433dp69VAU8t3x4CtjU5Q3EzcVsoUmwU7HfuHzyUzfLErCX8shuJF9Rh4TG",
  "key41": "67GazwU6qTSz8nM4fLMC9ggUawUV2ifLQC8xGxt1EJ29aZVQnR1dyd9kdKXkHfypyFs4JmQufwKrjigsGRG7EgST",
  "key42": "4dD4srHQQPWv7cYY2fCMHC4TmxD7h2uBX3oBKmvgAXvMzNFX66ar6deS2UXodbBvsAEPgJJpjzG9WhkiGxEEBYFz",
  "key43": "54Tth2ARK2nTWvifBdpiZzWCUAMocwrrg2GXiXc4LjXYkABoqyUmWELcnozaMZJBTyfrVPDQ3xp9vfVgmgBkbsDd",
  "key44": "2kPGQExKwCfFSGWtEtNwY3jsuU6wTA2NoErS5jy8G377pQ3JwwJaC9wfaAF4ETvsWLYQkmk1qhVJD74yWaS7TfaE",
  "key45": "4pwExiPC3kXQBHm18AGr7R1nBaAdA2C9tuN3QbeGVZUoeNgL79J1Z7Bjg94mjMmETA6oVtqSKw9u3JhnTFRzZBuU",
  "key46": "2SfcmLuUmoGkNKkdGZrpjyiuJaVyymyckQ2FjsSyyXcic2khkQaVBmQ7XDpJpdBUDrXjjwpbJiq8aPGm7iDwM2gL",
  "key47": "9gwpF7isykxZizMvArBZ66keQpLqsHz3mKJd114Wj17R3cqj7H27VgseKrv5WSbJMDA2mvB2a4Lqd2j4FCNY5Mz"
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
