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
    "4muWxe8bmC8sEMofWw8QNdgeDzsJZXBNr3w9q7zFpZqtBSMpcV6WWhgAhqNRjAEaDhx2AEcFZUmzjLAi2yEzrDoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WLxUw5grQTwLt4RNr3U6FFn5TkNzJCARxJv5FQnTn3hkDDwxGTUyrmAimQwUiJVUUUe6ikcpkA1HfjEbseuB9EX",
  "key1": "3x6sFohbS7PhQFMV2g2w86AUc3rD9gJMAReEaWe8jYYJmSy1WLTSZxaayxBTe6gPkEp3JSCghs2Stao9y7a15JHX",
  "key2": "HXJhtN9ueYryMUNfLcb2pzuAK9rY1aNfvfZtLVQKkRb4HiCTUWLCDHm7RTm9UXnrMWzqsaxXnaQXYzPw1UmkB6q",
  "key3": "Yj47Z7qcsQB1kfAPs7up1C8QgfBTfYjAs5nukpdHR8wPhR6Qt9i6xweSGmyxubyMBzZH6z4GM57kQLQnDgdUx2B",
  "key4": "42tYtzZA8c94h6vRPSx6qtpCEmUeE3nitesdQHsss4Ckn6GytVWr5JLQHS7TqLJcMQRXKAqmLSE5dR5U7i6PStij",
  "key5": "5AdVXg4UkGDDBwLEuAm74Li5wSj34dafSkhkyg6s3dU71ptbiVYzsbKYtuK5BAF5ivJaLwWpd4vHA9fk91hEe4ku",
  "key6": "3haXUt2Ws3rb2Nzb9z3odSiMcFnpSm8XsbGtGEUq45PM1xRzCCMvVB3S2yPPoBLdTVHAf82CH7U4AZTfQPUcKpVU",
  "key7": "e45A1dhh9rphaXd3ZyyCzg2FtQkY3EPY1E1216Sez7NDTywiB12HV9ND8n59P1Seb3PE1uZ1TggLjRP33o1unX5",
  "key8": "3yeYdvnDhPmdk98U4myYKsY31hSA5NTpVzmvvBAtCBxyCiosJay71tzZQXd5hgBmzfFayQhVzjkK2A3WbkaQNbU5",
  "key9": "57GkxGNMrmCJxQWYySmn6WLqKDM9dzNhZoTFKPL63KErxYzCDLRbwMbD1jNHBMDgxSs3ng3aMtJpmKw1ePVYbfyg",
  "key10": "3YjwSGJb1C6v9ps3AQGM3aaTKHWGbb9PQHuxRmfqq18dPnVF9r26KtssHNGtiXx7DZFaywwoBGpYbUZRyNbFTvxR",
  "key11": "4JDuHiShkRYkizLEakhU22SX826Xm2pjGn9i7enFr22dVGJSdLVgiaAaM7dvQEWhQwgQZVsYRxKeVr3JkDc9zcJx",
  "key12": "eo1jRtmGJtt27bNUThz8gD7krWrBjk3bu5ckqfwNkRb8RWn4z1RdvpfhRvwFUfnmUkAS3ha7U1Kc5ewZE7Uo319",
  "key13": "3XmyLRtk39h6kaSjWHDdWd3vNo2YaJJjGiGh63n4cHs8Fx22YCNLBSY2fJbigkC92xg3Eq2WkpYLiCzW3ngJFX7f",
  "key14": "4JWXhj2eD7AUvWwPDRLMfeHxyPC1xmZUD1dEWFnkkHd3FZjk8jxzgLCLq85C8vdUnHKmnMJANrqMN5mSRingHRAf",
  "key15": "3PfuhTwTG8u9utgSRDx1XMMjA4CGNyrcH3iXAnQ8RsMeTjVwvDPAauWTbNtrvTPqVuEVkjBMsEmuSstchfhyKoyH",
  "key16": "2Kcoq5TYpu7n9aNL2K87G9xSDtsjymf46pT4LjA7ApPYnByDr2wZYF9TfNkh2JwgFPQf4KmyyUHVHp3SAGtapb7h",
  "key17": "3shGYVSUjY1sHjipnfcjJ5PquTnEFZTG33jUE91SgfW6kLqoLbf7BTnBSnStRmhEPLNkLP5mGyPWD1bV4ud2DWq6",
  "key18": "24JrGthGLmY5tU5ZKPkbVB3TdvTuvHpHdxKNz6x9DgKpiEJEGe5ow6xooFBnhW1Bi8RV7tDmzvfkHhzDNKdhhv6c",
  "key19": "5Xe2xoQEyFddLjWKFYnFvswWcrtWMR89PTF2nWW25CBFi4KmAzeEvPuS7ezY1BKRzsU4VQYUCMVWtTt1Lpjmv8at",
  "key20": "5DEKELtN6wGsidNVZsvpi4ZWAt6chM1Fuf91viRSLi5yUu78229Lcx7rFJ8HtHM43vRmPft5nADArfxeDTaL4TC8",
  "key21": "4e4LH6w4iHhJeov8UteymNTLt798uhdK82jbZHjyp3Nne13jGmzsKQ6sgDBLQZHezgGv48zC894ATm9QMehtrzJb",
  "key22": "2yFfzh2uHJUdsVT1VvDuL6sbZn352SCDGbzeUC5wbz9DWUz3hJbX1iJCE5r6w4EwEcQrE1KBPaojek8zhzgun717",
  "key23": "549hGRdmRHQS7AGrpaUNtN4eYoWunMCvZzjWW3NP2zUz6Y9TELWq6kLP5JqzYsFA1HjL4Ts39tzCZF3N6SYd7LZF",
  "key24": "2CcwepbwHk9NTwvi6N2HVLL4UxcnXBzXAhfpmtyDGNDWc1a3BoMLhnRV2vPU4arWVvPZsu6CUJwyRQ3uKpZ8BjtG"
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
