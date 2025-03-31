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
    "5ecEyDhnmuuwVUnX6GEjWrvSoDY1h3qnjn2T87T61uo5vqW791nqhRBSnpoHNK5HwnDua4q62MPCbkfNE4TQVd3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MerLHAfMtfSamuWk9QceJzbEY7QUNErhuQS1mpbij6Q51rpH2WbWhznsKVLFi9F5B6HMyWE67ErtB3b2g4yqh6x",
  "key1": "2SLwhbxyyfizqgErJLen4e3J3HVDEtrLid3AfXDRcVWwbGk7cZ9uwq774NCmuhQk9g2tSnojEwGVPcyi7k2RbszM",
  "key2": "3hiSG2yZqdXSMAP2h7kE6yemXoeeaTmuxZxz7ypi6RkS97jFGtPvL86cHTputMBDBmGHJNAxVZitZy8g87yuqX1E",
  "key3": "5K8nm4hxsNtk7zRr27MKrWJPDnVVocMsUV8FxNbz7SBSwsbYwbUumy3YRHcRJiNRwFabPAk96Gg5vFnMuSSgDSPv",
  "key4": "2CZVNDr9hzzWZVoXUbEf37exnBMALJD1734JyUgk63KWXyXjhvW8snddWmXR44qnhV7deDnt3pV4sBHDLeeFD5Rc",
  "key5": "3LHXm124JGXEzWC5kJksPuvzMKwiz9WwPk1hquX46t6XnvQiiMui7hxAER6EK4AzJh8MVcCKQq2pSV7xi5mBFVH",
  "key6": "4hKxueEEk7HT3BkNAjNH9fZwdj6dEcxLPERTFyEu2KCYht12S4ApLdTkKCEaTAd5F978bhKfW5yF7Yg12PXPmQCG",
  "key7": "4qnk6RvTSJYHqnqRqdyUAyA3ByoVotYFoq7Ee7eXd2fgZVpxbvmngXbqFoShMdTjjoKXtqEEpCY31tCo5DpJhfC8",
  "key8": "5WWftSsLrEKAGbh3e6p1YWXq9aYjyPM258BRDSqssCQVrNFV3cMroaqiMoep6HDweynSqff8ucT1Ndeow4Qg8EvY",
  "key9": "63kduVASXPvgZVaXrTwEvUUhHAQQWAhYNrSKtXv4QkkMDz1f4UMFHdDACYzGczs5LyfgjhMug7bzcAiTRzgerWrw",
  "key10": "4m9q8qsqVu5V8ksfCWNKHubqYLwLxqLP96fGgqszcTief2Rj7ae3mNVPPpBkQp3efBGLpwK4FfDoqx8K9PMvCTxG",
  "key11": "2T6VzLP6hGzcYzPK5C6F9Ya1esXN3GRh74E2KEvDwJ1ddFnug2LWqu4ps9kDRzYVv7fPthf249MqFvce158Ufp9W",
  "key12": "4V85jsfaWk4hHp6Mxz7uPGE831oYDmmNcrYZCUytGb7UrcYVhD7GnDauACRYwiFemQwUAGZoYrkmSfqVngjW9Y3s",
  "key13": "38n8cjF3bS8bK9H9a4FhqbZ7JAXzv6BFMV8yp45VwEk6xfRjdaveuk4mqMGxTkMj8QaLYXk9NfS4hqLdrRG2cNb1",
  "key14": "2P9N3QaJvTmvrsH5chEZBHScFbSKQzJr1E7pWzhyKckbKsVGrdQbcZWAikYjpLpm38wxXtRM23v51habxqgnC4DL",
  "key15": "HdUAajvRnEfZcBbMXj6uyfrtFD2CfZjCNVDbGEhq9XX9LemtGu3JyKZgrV317gb1QTDzZqKWKZNoeWPRsQsC6Zx",
  "key16": "JXCeaTSLSWfgVHSS6X44RoEaWCuCqgpbNsnsu6VLe5mAp1kTY6dsQrHL9TnsGoUCALEeTCRdzpWNyxgStK66d9X",
  "key17": "2nsetpFHvxaZkYw8JFqQ98GKQ688JKx7vWrGufz1X1cAPascgZJ4DsQnMWYdJ1BULLKvdrbPxi4y2j2rWz8d3h4t",
  "key18": "4cG1ib2iTCETZxcduaFUXkHDnG8PE2GkAVFBLbLhTSmo1n4AdoBrdGxnh73vv12Gp9nES8spWWzUBxPHL51yY7uc",
  "key19": "5xqei7u7xazy2zno2ZFSMZ6AqQeBA6wRfDE7VLGmwmD7hTSCJMPTRLdVDL2wEDC566ipQC1ewSH2JcsfxB1VTscc",
  "key20": "vCRJrkin5xhQ8da3YiYnT2KCAt1J8PYo4ReTMFWUMpu3xJkvyGytRGwC6J7R6snHXD1iAP4fJqE7miJFJ8kpy85",
  "key21": "4bzy4okkT1PcCtE8Nv1stXQtG2JvkevkHcwSanev4gcxwApBr2iZPSrTxzE3dnuXobPDgaBkdTVgbMyK8GtwZN2N",
  "key22": "2pLMifncYPnGHMvK5eUhSADxJUnaFAm6XBYRFarsvGzwyqiRAART5Sp87Y372WVA6855zku5jHBaDgy9rHgepMTZ",
  "key23": "5ibAR7zNrXTdfwyfdmmZ2McTKKA74X36kaEoQjxtwBAC2wBnZvqXXkPD9dEGrKV3sqxXNC2iLf5KQFGh6mnsVRay",
  "key24": "dhP3ExUgKe17mkrsFhNzfuZSPn3KvPFsGRM5ntwsXxHsP9brZQhhsz9MjbQNsEW3w8Xi684zKDHYcyGUDco1obg",
  "key25": "3hVfiwP2dKwjMk3eVN3fHmndk8ZRbdkzHhANQ6EJuYAKHUvxBgwLh8Rwnboc9dEoQ2PriA7wLe5nmvkMLk6TGc3q",
  "key26": "3xZpUCNX21wP8eMwSB3TYi9XarzJE2Jau9TALSuceVcFLtfW7Uz1zsQa5XBLEMgDpYWDMCkN5shhs8ULo55w6pkZ",
  "key27": "3Cr6VBLbt3P6LesSc8UQTcpkeYFK4p6XDfRB1HuGgGVEkXWEkbC8a7BPqTnFPPepzi4NM1YQhDAk6JogdFNJB3hE",
  "key28": "2e9Pou3V6e7scD6224E9M6ZTav2fDDYCLwLjEyXravUKsGjmiizMuanEoFmbERZtWynwPntDoFR3PCWo46AoxrcD",
  "key29": "4fvDU42gaoHsxtmmqznhcEHeDjZotS6BSmZfaiyZyihmtB5V1ArZkED46X6ks2XixGtUWedJJ6SyUJrVuvmks3Ej",
  "key30": "5YfcqPsokqjeUwP7ejDpP8JLBBBjR3MDo9BTds8UcXNopyywmQDARLhbJjuLMULLxLrxWuJeofMsMnrAADgofEKZ",
  "key31": "31w1Ct1LgyvdAQSqNchPubkHYf51gKxK899qRyjXAWWtfKVSZShvHRtZoqnsPtSDAiaAJnUqeaeyiSS4aM9mppD4",
  "key32": "X1BYCXCLHw2bVC6mXwxWNQxTJkyGViF4toBvrHYaXXod7dFPWWeZeFXvo5zUoJ8Y7FyZ5qAcKvNKT49RuHkhVfm",
  "key33": "3WLDTDGL8XGb9Y8WoqtnAsguSVGeENzGmtbi93sYrYWkyhGMbTVV83LHm64Y9fMhhJUdyvVUQTnKzQNXdwJ1N6HH",
  "key34": "4PJUnoGS7tGen4QjXLDfFZrQU6nTTdL36iugT6Rc9roUBAisCVGkRBM18CEV76zT8Am9QAp11JkhF9woPZC8JHMu",
  "key35": "2QEYHtwsHtqz3seEj864Pt4zJ31rZhzkdhXx8qrCmehG8krNVMBs4PuZYYLEJDaG2Hbukg6jS7E1EL6GsTXomjoz",
  "key36": "2tmPubswQ18NGKPRLVKNLS22HAkoFmZgYs7z49FwbkkDz9uSbxxc2er5YHPUhGW3XBCPywHpPeZGBcZQ9UJmoLXz",
  "key37": "3mrkpyb3iuMJ4fkuwHBzHNn4mgS1KiFbhBcVSgCnWvh41TwMshNScRStmSU8mAqnhRHE4BjNXAMJ3YFJv2rcG5JU",
  "key38": "mTsafYPt7pJLBhg2FUXCEAiT2b7y5h4z1dKYANmpXtzkX5VF3CStYoyxLoQ3yLvnFESZngECvSW4YHhCG3CviAG",
  "key39": "27vYS5YXcnvHf15zrdxoa3kqriAMua76etQEXWeyrG3icE3q89zoj3B44nVhUiUSTPmjLs4j2RADpETDdxr6eTu2"
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
