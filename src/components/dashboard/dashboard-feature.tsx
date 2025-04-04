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
    "31Wk2EejiwVxxVMKAmvpa1eVLuUuivCyQxA4QAaSRSy2wYejNSNrDhh7UBdMS1Hpv3QQx7k4MVY7Ezx7tToiSRaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xUnKw2gYk6sqsAfLthmQiS1dYQrawtAEE9YqZFr3K4W5RqSz5Rh8w78zCUh1fAZVq66nKxZY3U1Ly8r77qaHaHm",
  "key1": "kpjDejziwzjpD3bzvg3p3LLhCSHhjEBaoPa9w5AobUpoiSiJRtdjfPE4WWNLSk5iWHGXbXkkC9AEeUaMTbhrLUZ",
  "key2": "3qEXKAi4ufbx861y7TDgSRUUD9QgGA7Z8fC3YdE1BL2pkwcice6qJok5mzNVAvB1PCH4GqgW4vQ2GG9vSGrYp2Bj",
  "key3": "2ei38kaXD6FMEAD1EzruwQ9dZL2cPUquf8guLTEshrzPakS6C2U7JLm7DQemm2snGQPSPQtKdhBjqJQJrErT6RbS",
  "key4": "54cPjV7inWqQuwUt2EVpGMK7a7BdXk3gMxJsKpFTaetm55FqBCTSbGk36MPdmypqKH3v1DBYeAHGDFbGL7qTLycG",
  "key5": "57RDyNBH4stVfqFLr4vT2sdBPDrCRBP8vGRkmrJ3jnz53FvCQijnsGLToEEZ7fr7hzKnkDhV6ayrYhyVHEbJrd7u",
  "key6": "3BbJfdSgjCFrwEL3kVXkG4uTv6hFeDBUxqki9FA76XgbYXRTfvZk3rWyskved3a3QJZiTCAHYByHsBg9hr47S31S",
  "key7": "3AE1Z95xyn18nCB7b8vc19j6JCbXdnnwoJWAUPVFGWe4M9PAhxkay9F4TNMAQYE7Pjtx71r4CW5an3TF8BRV1DdQ",
  "key8": "4vXYRs3RXaqmpBVF499VbE6sSdXfRWevhniurz18RoiRkX9XVfNL4sTJNdakxxiuaYvNFic9UQXP971DgjPtksov",
  "key9": "5Jqbq8cbqmth99qGEVJZC2XQJTAUs9LimipiyZPRT6XmcE8cshT4CNErHKdydkktp8EXHCDVkk2VbKp6fcLwCEuV",
  "key10": "9mUnyt9H9P3v7Q5qUu9sLuDZnCgbUMxsKDREqAU5ew1Wy5HT4QWyniJaUGzMGiAfmW2UwmSBekeSfytwWjpbArm",
  "key11": "65GaASafiyhDHMnK81tiwBdo2jGjeEFdwbTv8qthjFpoex1Z5Xkm3xVFKgFbrBcoLnweTmgS6ZJtUs4WJFFEymwB",
  "key12": "4MZHjwMjrEuvkkMUaX78uhUMy4Bum1393CMkErxkRavB74DaMo5qsqk6F3JDckiQNBWBzDfR2cVocxsJheZcZcEB",
  "key13": "5dyVud4a4QX9nUeSoTZKJeVMQSG6euhtapHdqEvh3jRDjphhWxVqkNinHipSMBXDsyrVCPB1ex2eQVfuvbff93Yn",
  "key14": "2iNrqZpbQsyrm1jEsAf1WyqDCLLkRru68zno7GNxwditUPqQ488qJAuEBiXSJLSnjtknhguXaowx2miuqgzStNyt",
  "key15": "xpsZz3dJfAJ5vrBfcXaPHqKT25itNXGFQfyTbFkKVesEf7TKe8YP4tSMFR6nnrzWsuC8U7wKyhazC6YmgmvKvxw",
  "key16": "UTTGjfyauXeGQQ2HUP57vPsJPHJs2rn8jTxRUB5mqkpsGesKjTYmeKiS8kVf6YvzQxc8vuqFdenEWTBovirm6qu",
  "key17": "ckBm1b6zioT851nQtdVwzJQuP6SNA4oe4kUBUf6XjugioWFe9anhMYqT4Juzb1ZdaUxJUxTZjnBSHVVHJ2odHzF",
  "key18": "3gs34KFHWiPXrE9DVbdnJUgnHzg4hKp1CJBZRg3NriSd2ncvBnqJ112tWzVujs4wwYKu1diwgyvNAeyFdSUiuvV8",
  "key19": "5qtTWoqU3kWB37Fic15Q4MVXuXHAF9TEM5Uw3qsgNnoWEV42dbmgWHeGD3TgR3d3FwRSkdwVVN41X8weXq5tagNa",
  "key20": "DeGfyeTXdFT9qf27MdaCvgcy2tXc1HCECxyQ38ZLwZCuuvWoNgbVpJFDtG6GTHt53RXgxMQWYzuuQdUT7KwdBhH",
  "key21": "5otvprmD3WPwcVsaFz9mywPKjjxqH3TfLJDLztCTxvSvgGz8b377susxdpCHnuGe3b7UAsyhU75B7LjSkFtdTpYs",
  "key22": "5ob4zspsukZs8Mn3CmSFzQnW9MMS4c6J7xgFSKJfgqq7wJzLHMSmhSNr6Nq8o52kp53LjZKoxGRAoPnuDhy3Et6e",
  "key23": "5hYGDXjpyCpaNMpfDVQH4vcB74oDfSaitVy94zyPcdVJjDJfe3hgohS6wjaAGXozH2MuL48s3KjRryCbdAv4Pmuq",
  "key24": "4ZSi29iT7pUh7kiMKtFusfPWyxXTCyT4nWsXiftNFsFiaGJJV6ewA1e8gKEr243xwvPC8PBf5QBBKyXanR9iMKx3",
  "key25": "3q7QnRQgzULWgJPBEp3c9Sz4ceaRqCuawZk8YFSWu1AWLERooqxzg1hurEhj2YPDDZWDLAjx8GfrziTEZNYsemB1",
  "key26": "3DnMvkGD3FvkW5KHRr7GPXVsaMZX3my1vyCo1LaoweLZEGsaYFytvsAKS4wi2A8ziwq8oJRWpdeZ9YLPUgcMTSmV",
  "key27": "AG4asHydYWsomvyLWgcjT5F9NoaRPJS7kZmhKSwmBE4X16h95r5R17Sjia2yxvtrzsGDT8dUUgqk1rSC7MVBtuB",
  "key28": "3EiTT78JuDnCHpRuU8dbhtVhP6VF1s5ZykztWsFraJp5km23XQBAbRtpzQQRaHuRuxoXjY3v8iHHLkMk1YjAEyd8",
  "key29": "2fgjNanPyksRDx27Qdd6xcv6xdxCyEZrYh6ndhn78YyzkjhGz6iLK1SczD6rVQjjq6LMjw9272j6ujJMXBfWgBrC",
  "key30": "4ECb9d7c4T12teiKR9tWh5LWX78Xobp1hMyLtXDXksHk9hMEqL8Q6wSDCt2haPpYA99aQbSD4o2m5BFAZM1tvWff",
  "key31": "3JxecUaN3Hojnvi5nCmrHxpQWv6dEjbQubxfRj5a3ma32MW47xzbXD7G28My9HDhbaPUKxTAE1r3qmjrBG7fYdHk",
  "key32": "282bpMc8AfNp9vVv1HNfHjmSMK9phu9HzmYQDwG9si1ogfZ57reapHtr5jvdxomWtYzcWQcsxhWnPKjzt9TqkAMy"
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
