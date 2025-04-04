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
    "cfbSetdrbZCFuvMR6rLfNFWsqiMzgthwSPR9gyACKpRDcktrabtLHCaT4uvkJr588fLLTQqb5wa85kBAtJewPnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pcwhzhgvf3ys3qRCNjAh8A6185LQGBXbKEwFhoQud8eb2v8yw5qvmXJYX3NxFKh8U3UbY9xLjqaVV72U9cVjdRA",
  "key1": "2DrgTiQNosR3aHAEGf8nzyiZue7ot69zgNCQP59TYDVoLQZPpY5sqf6mHsSn9DnAzGf1iYYUFXTWTEaC9CvDVJpU",
  "key2": "4qtqNvEGWwvd6GNRS3kcATJKBqirFGJvdz7zJa9yyxgkJM9rhvyFnzy5ArePywAKogrMqJ7kSukBeb4AqhG9Ukwt",
  "key3": "3YVLaqL8ehb7CSCh6NmgapG3MnFVZZ17WuUj7UPPTdSEjHbBX6mzXftXeqfpDiv7WjzKZW7LQ4Uf88J4xy7f3RU1",
  "key4": "541jfgVdFExj9AcXJYesQJvtfLz6DEww9rvpCRsRpBVyWs6u5eXDjGQRicxptk9RSRJrkrXLqya2D23UB6VGR5x",
  "key5": "2jNMFCKZ6hRn6wf5RsmMmsJF3h8jdNCyGxAujY2fcm7JY43egDrCwpVGfnG7uWraBwjHihvr27Z9fv6gZVzH4p8H",
  "key6": "62q5r4ra8Lr9zkUR2FQhHdxe6FKuo57sHLH7HPWQZSn684PE8xCxYJZX8DfuTNCxPB9E4CsUxcSE39E81YRnMjxK",
  "key7": "4kbcAUdyu2B5bKx6Mr8rEPbSaXgP5KeMyiCysotiZsjpdSnEXmzoW5Tc52vbWoDE3R66BFvqxzxfw3sNRb4BZ51k",
  "key8": "22nLnWFiSRLNaXMioCJ6Wyq95CMcMvu6qfwNkdfSEKR3BKzMpbu77eQFGzwLrr8FCrRpZwr3YMiUXDChegCyCWyv",
  "key9": "MK4oKZvpSRc9Hz7PKd9RSBCCQkg5qQjR4ZuTjnaomhm6hJyov3HmuvvvB34wzJqds2A8L159hBZHzcYFMDc3qUr",
  "key10": "497aVdGCdyN7jrqo4MMxGJuhTtaewS315nbdVqTwmScRc9zFThVbbDTgjMKmRqYbxrAdBhduTVC6HrnRzFaxynnj",
  "key11": "5aTTKneR49Epuj1YQtg5qjZrNNk3kGRqEm8de66ouK2J6XqeutJLJHnRUFGSMvtCxWMryPytMYYZC3ZnrgsmaJ9k",
  "key12": "2wE8B28ujj3kFdW9nCBrPfmE7b2ZrNj47zBWCrssg24nVPSZW7BqC5EPUhz22MNBK2qZ53znxXEGezE9vtodDmU8",
  "key13": "gjYwshr1jeh7jNQfkPhNva8MZv3UH2XbsUocXTZ8XnLCgEJpNWLYhXwD3vwBgFcdu8TrwVL8RGMN8ayyAPCwmc7",
  "key14": "2xnm2ar7KJDeS5ZgcuhTjW1XKCdLFcaRkKKwQWnNiW4G3gnBeA2Nqxoh8pz5VxWRDZ9nJqKaoeo5AZPbUPBSMmMa",
  "key15": "2wMuozeryiCPsC7f3qYwBpa7EtTBUMYcFM6LBfN9taGQYpy5X2LUUg5JFW4VuREjuTZDac51RmxrJxb4v2yHQ36X",
  "key16": "3vA85itqR56Ksr75jBg7NmtCVNKyeynRuUy7fERfeZXARQFpMgtLQUsk9CTe1BU8QwwoAysXx95yQVXU1XdM6fe5",
  "key17": "659vD2SQt4cdaSDuRp47JDDd1cuF3pDVXZMdLd4xzrr9YoNyLn45urkfeZf5Ao26dwCU8biWnkGkfjeJtp6rrw2g",
  "key18": "2B4oExdEhxbuEFrdNvxVHkCyai1TkbAgTT5L9H5f1yW7scXNx8u89M7fExcw4XriCYpDPpBoCHHEX9QTm8mKPkzo",
  "key19": "5YhFWuFEZsV81VRqdfTCg6GqB7z8FuFXxPDa3D9VVXP4F2mwAYJ5sGbFm9ZYRmXB8D7EnEFnMuPkcHcoAxyKD5an",
  "key20": "57XCDtz8X3KDNfWwdoN3JxxUYfmfSUxhQvwDPwjdptrUw4ABkqazk7oUmH23WZf2fUv1doEMuJvbHPrn46hqXwu5",
  "key21": "4EJGggWEP25cXA5rJe78h211LiGiwctcMoFeH8VqPaXCwpuJjwBCLkDy2HNvsPYa7u1kkaTNaf28MW3AqAYn7s9x",
  "key22": "21bJA6XsRKtYKKc49JmBzSKCazPu7VFpM9ibHN2wDjAn8ZTKzEPRVJhkqGJJVGY2gq5P5nkXXNKwxuyZvMtFpz8k",
  "key23": "42BuXsruheaGTa91A7ey1gJvxyr7rxC34GEMa4AUKhwTgYMmcRtZHNoBq1oXAzAHt2buJVKimKw9xYA8z6w2BPu9",
  "key24": "5MYdfGtRyLy2Q4TVqP6Z4SEw32h3eUvxusWdZ1D6Eys8xvdrY7NqTutZWYKfVhwEwpcyBezhupwozUggkijoDmWq",
  "key25": "3wgLvQcdXrPPPHXGsbFYKYnX1ueee3VjscTuXBPHCVSB7rU5DS7rYPFtM2SwLmSr92pzVZJTbTRBhq7NgKu6t7PV",
  "key26": "25aLJn41RL2wtzawj7PW4XAwqStFQfja8r1idU1b42bkGa9nG4cjYjqPAVwbwUiHoBdQ7CTFanytqZHe91qEEzgx",
  "key27": "5BqNyS1upunjoaNMfDGkpxq5mDv3DRMu92AMQoEG2cL1Mwi8cGrmeRGsqETDNYwN2NQ5wXRXLSKeS7EPxjfBsFwx",
  "key28": "2PUZr1o2LAEcSZiF6mySps6Zqy3CdMAevB2QFwRSdnfqhaHVBjqD1uxoWBBsZHmzyupNbYYYrbGCjDz1UbPqM7WR",
  "key29": "3XrNxGwXjStX6KGJM2oCLh8LU7BREAyc8PzehxPmLnbcAHi3gDKiM3VGABKtc23waa51BuUaLdgxRLB7MtdJwz2P",
  "key30": "5GW1WapdFrTZ8Y5zuTDGLxKPipJKatgJtyC62cBCW1BAeodVgFzve7sUJFgZXgqoPonmmxUXtswrYfB2TdyqUF91",
  "key31": "24bXrupxaj1G4tAaBPp6WrTVhjFCS66H3cVXLfbWCkR2H3RZqAei9dPSsDwSqrEeZkvBEVcm6r6iWVjyhVp76RKo",
  "key32": "5cHiBjFYCraVDjJ1Btosz7w3qFxcPNQFFtFcfHKp9bWLzVJQmfMTfoGUkhJjWvjpb3yRKqhdbG4dLrspdASjtX22",
  "key33": "3wgN3FnyCVfp9rExEQPXVZwBVuN3wPHC3ekiKFiAbo6iWqcvpUcr9ez6ZsCbrYw5TZRsiVR7BUwY27Ln6Siyg4xu",
  "key34": "phHYaKTQcKuf1bsytyJ9Y8uDgabN5HPxATQZtSJbTqjwPc6oPgx4eGRRBXZREdp668u4nG9CiehF1xGameDTN1Z",
  "key35": "5poeMzpgeYbf76MjsmCVszGq1HBcsBUfwm7XhHrx26hsgVSQcuWA7h52ZUNyGVaTiSZ8kjLnzDT8g2w8jJwQnie7",
  "key36": "4UTNsE93nzSSS6B3vntxBoQDdC57NNuDBJt6my1NM5J6UwPQwRmtVmp8ySW7XURqVPiuW9poFxuQ65Yq3H4YVyYX",
  "key37": "1mmo8QVCFmQGPfFse3KzoLqM5Q5D5ePxuA7L81WoudvBDEVicPo5zaEGn5WpATjoFrtkht16a5eTwyx9cp3zLkY",
  "key38": "5rUTNjsMUbhLhhNksXmod2hJURaQNqJLNy1kVuh4ZDdwwPtWQpeKr9AkACYJqSZhcNJM8nxLyFUhzLac6xqcJxHc",
  "key39": "2P6GohmyhG4V8S5tPXk3dCmgP2MBUnV9w2vwgdPfLzGQD5bbiYJ3CdQWPH3s12dVsmkb9QDJ9bp5ZgtbPQLbhc7w",
  "key40": "5QDmtjSkTQTVhrphSHt8MwMim6uwSKJ1wXyf3pNEzF7z1bTBJMiyxGyLD6MxBmXGjiYjxNABZUqzFu9cg5JTAMLc",
  "key41": "e7rZDzVHwUshNCg4znspxKdsQ2r6a4AZb1xqjSFMxGj7RbPi9uPiUUUi53Q8oh5ScgCfGf7LMfUYWiqQiuAWSEf",
  "key42": "LJUFtUFFhY7diaCWNBZiZ6SPDaqAf3jRefFeBrHj8Udb6r1eCjpDZaYdoJ4CWFQXvkCyN3Qe5XDp5C6CnmV4KTx",
  "key43": "4VGq6eujeRbRHC6qpCVZtHfYUixZPTjVqJJf6tiWP22H22JZnBY15R9MBQXkSxVgshEWUdbeQWy5wJhPr4iyk9xi",
  "key44": "jWZMNAfxx1GxBw5LphjE3P4gqNXdQ2XYjnW76Zi6DPz3Yc9zao8wjJH3vzgjqT9rzzx3EeBpgYRgfQJ4FrzAcL2"
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
