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
    "5AQQT6ym9XSpyZJc6oJYGxV9j9vRQGxr2KeoMYWzgr1ncSTrrNauEXwm6zT5XksSqkys77rQmoPqPKtQFALDWPCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PCzr5BEHJH8LbctK29Kin4hxCRUdNiuxPw2pdMVKBRAd9czSsgQBm7Lv23jKMtTnkfr2sZMr69HjwZMfbkDDvKq",
  "key1": "ZhSSH3PriteWFYsDKLTEcVuSaRKSstDiLwgCAfmpCdZoW9y9JVW7yGLPi5ah9YVFw9NFJGnZtKsRRHYwDH74MPW",
  "key2": "26KcNemPw2taLu65Sfbua6T2pp7aFYQXDwsLFA1SFSitJrvu3nkzrvL6ToTNLDkHQRYgtMkSfH3HmNNxPMqJF4Zo",
  "key3": "4DjPfgGLWcARU3RCpSg57weehhZZ7bJWZjdXSgjassBvKhThFwMjzC2fHDCbmjEEazkivUPcdAi4epCNp125yLnH",
  "key4": "jWA7fkYjSg2nKaucptyUGnTPCjeCZaFVk4xuvtzppi8z91RcmLVAq5bm5MZgKS2W1nYgkEsG7qNaZu8TkhYrgit",
  "key5": "Efxquev2TXgBaaKm9McrThA1TFaGcxVMH9NYrb28QGFXBfjgDA5xcjApVkbtnjDggYnF91wNkJXPhcgpW9GVXkH",
  "key6": "4dJgr7s43nwffD6PBNpAWB73nApxE5duoVRyheq9PhpAtXdkMYePFYYjvwJhakSdmYsTX22VWTNBiRBCpPnbKRn2",
  "key7": "Rgn4Z5bsr4AUQRpxXeHwoHHACbk3ySkLLg1Y9FAqVqkAiUxyxzQ24aZ7oA4kqdiSzYL4YbiP8PkpBXVcsTexmyk",
  "key8": "3Yb9uDbL6TTgT8pEjxs61P2VtTxRuU7vw2LMhxzs6nDzEVEipKq4KE7iiWLfsc7ikr8kJxHtfUGGj4buwAy5S76A",
  "key9": "4VZ9iBNSf28aMb94jEXytDhZp62xz7HaTQV26qKqTeAN9Aqi3tT9jZ4ukXiNGPH3wBnXaH8G8o1BUiztUkDj4iEM",
  "key10": "61nRk1zi1o78RAjyFPsCtB4jv7KwkcBxybo2HoxwJfadsmLZqTwmvsdNiPfnvpszcGEsEpTJqzHATGkCkCtfFfRw",
  "key11": "6432o25PHb1SCjzdn9i63A9S3iDX1ZnV9QryJvSkeX4EEQCWBTZXijXfnZHosYxo2RNzSK3vC7PYGcyYSdVHGLRj",
  "key12": "5JSTqaJkSfiiYnbQPFgVLCVaMXs2Ymw5inu81XkfYkrTh7gGkqCmh8R8Qeor9xDCZMUfHsmEK8w383Jc2hynqk1Z",
  "key13": "3TjimakMcRT3Dy6Eb2it7ULeya9HvekhPLXu62wNZaqSMMvHSJz9wLQKUAtvABUZs3FN5EVGu8ccegtBmByQT6Xy",
  "key14": "3JyhuNKKYWu6H53HgKzthKLZNJFTxjEBnTP8rpaFYmYLNB9KXSay1UGqUAxeKuj8i1gp4ibXb9Dm9zXxgPuxsiiQ",
  "key15": "5eH7Ha9G1XmVA2qyVQqvh8ECtoKUvN41Y6Tc6xcomCzdqBcHL1mwt8VQsVCh9urgJfD2MKzhRoUpPcecWDyc3okV",
  "key16": "4zpZXLLTskx68VGKhArHhRQvbSmFGVzuiDt54SWAbGzpmBXrZjeGF1tUKhofUYehTeSkgLNv9YFE1PpPyADutuoN",
  "key17": "32gS7ho9VurXGw9asha21E2oigPT9QyZxUt5KsSvhyY9bKp7AY4BjSzmejR7KNf7TrHsf6wfxLr9mbaGSzJvtfEu",
  "key18": "2iK8tLFAhAq5zYk8T7ZuHnycxqibFHfZkNUWVRquL4aqbcnLMcpNbWcxu1ob596Ue9dePvRSM8rNoarZvfxUo5sE",
  "key19": "3K8qxfVEGGbnUsNGkhdZqcSeadminKju1oPiB6SRViwYQJdgadanJYVKvgUUtwXvBzXgtQPyrk7HS2cfScv5j61q",
  "key20": "3NmbPFs4BaTHn8FqDSw7xobKBPidSYsWYDzJEbT9CxDHcER7DRQiZ3P6rZVHUZSM4zUAdfJGCDw5Vh4Gc7jZdtmt",
  "key21": "2snPcUSKEk3W5r9QEaDJ2S9XZ12ZGj28doi3KSdAZm5UEH1weF8vUdJm9b3qCvrdFEmHH9RbyRk3eEkyH7ym8fpu",
  "key22": "2fcDKx621ovfi9vzNkP3sdWD6iMm4XiZCBHLeVMG2vc4NEAehe9aouoWpiVh73UgDWELBFg7Yntwy97xGdYWWAWG",
  "key23": "5qmttqEhVJ7XR7AbQAPVehrbg8CbfG1KG5Gvb1oawS7g1P3xrJGXEvcsqLZfv45Zp2EpwkvwtxVg1ziLcekXJXQQ",
  "key24": "ufSJE7QsBirTLxkuviXredzC81KvxArKsMeSR37aAJuSiriYqucU8hKqdoij4Xpq5uk3TCssQjtRa3ZprKMBeBX",
  "key25": "6PzNBxMsRLc48JiEYkrPGBLMjhQQg1KJrPDHaKdRqkxgXKv15zFkDudHMZaX9BQTbiMG3k3fr1dB6GyRrZ1zaDf",
  "key26": "QXACv5V6xMDSJ2FtKie1qj3xDD8uJhPJjAcDREq3UWNzXU81o1Ks5JMLu5Cz9R5t3mbB8qfbup1JxidddokVfSU",
  "key27": "4okrMFiYsuebKL691gu29ZupErCnbcVfs6zEGppmLLk8M5KmjUM9uozQkzNBwSgVi89mwjL4E3bAUeg6zDw1Ch57",
  "key28": "2Mn8kgwGcfdP3xZHHYjk3eV2cvRG5kiketSxeadjbATYbYPyFPy7yWEumAAe4dFznTwz8RCkApv8hipW7jBSDdAZ",
  "key29": "2sXY2VjhWuXTgcXcXGg53LshoSLQ2wJA7HJdz4MuaqZRRXAbGNxRLbqDeG7mvp21f9dxmA72N6PmZA3uYrU89U6t"
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
