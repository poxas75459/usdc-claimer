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
    "DWYYZfACmis33fYjxDRo5RZi4xYXGzzpxSX1gSKAHYp23b423qyzFTZTUHvXWKmBS2X1zscgZ6RSZAfd1YEZ16Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Li5NsMArSrJ9VhEPjQkWrc4HgQUxUfFdVSwfRiKECZXUakVktXeWvuKXWrfP9RY7zugbhARQeNPDNs1S22fDeyB",
  "key1": "ZFJiGzQ3A8cJN3BMXLwRZDTRksm2aYYiUNWSYqhtRkFXeQTFGaPo8HU5UuEh5JsC1bhxPAYC7YzW3rzp1d9QxtG",
  "key2": "43ruzpon5Z2mE8qYVsqu545T9B9tXDdTyPVKvsjRZuWjPzhJXPeC2QqJaxPexzaPA4cYjKiZmd4K1u9BpCUx9KtA",
  "key3": "2DBkjrh8DsSP4mXttMCSW6RsYL48sQPQ45xCGz3da7JjQWFiqoDXofwaAW99m6se8CXxujsnYMDr7fcEv2WcJZR4",
  "key4": "cb64YUuDvyx3ZoprgYraKG5GJPh953Macy9uuUGmg9LJaA9YSJsU7EiGFDvgbThtUeDDCPivDeCiCJx7sdmKpc1",
  "key5": "4ZjzpUZTHpetsM9exm4m1ypmaF1pB3RM3kfbyY7ZTZXsXoA9SUW1dWosWFhQoC996onbYyXMbTKyJjsMDDtf7UNe",
  "key6": "2MRhRX2gG7xfEUaStgjfVzQvf9AZjdPWaaU4jNMmPEi9tUFkKBcyY9Gut9AUd3cuZcAetX5jF9bWQebF6VJMMXCm",
  "key7": "4RzSCKGtxGmJLHpYB1Ya8bY1YqqjdtoCqqH2YekDn52bZ4AdmjBq4AnYjCt2moEZmwy7ReNkCnDHEjW3Wv7zKRFb",
  "key8": "3mYNrymC8MVxF28QEqXaYRZXsJ5vp479SknqS1L8HxrR7cgm8XPoHUFDyEB1jb8ZLfzEdEGdKKjPaYDpLZeTjLYi",
  "key9": "2DRuCmCvUW39qJ3SodFZ52emjenyuon8FEE5PpL35Zx1fTbMhcxvSZVfkBPcyVDeWToAom6Jsf76bDLwa5VTExYJ",
  "key10": "4G54Dcf7vgqaaPZUe8Mtn14hYEUb258yxuSioFbweDRi2gBPqaKyycP4t1nv79hj1rijDmNsRxf5Nd797BNnjNh7",
  "key11": "4TJSHqwoCqgT3MfJ4xGrB47Sf3nGEQyA6mzYa72hpCtxpMdpaUX498osDyDL4usmPWr8Ce18vrp9WWTLYFAn2939",
  "key12": "4K67Jqqz6M5R6fZnngiVaSgWGckGAyDwwy61cRhjXQZX5KuYjjkYEASVLENyrvxjYFiUjatefwZXnSVHvMxa9xXG",
  "key13": "4F1GqahinaaFAYVJYfKGZu2FNAveCm9vkXrRpEs47sfwBh41zHQSGDasDt9w2MRWHmaB81ARXthgLM2BMJY9vm1m",
  "key14": "3YYvgnySoGHfoN3eS44poPQtSaQ8jQja1fNEzFnM3R4BB6xZkx3NuCLUoENPnub1SQVhDkyAYp6D1AMGTgU571Dj",
  "key15": "2NfvEeDGq5PWdqhWuWe4n4G5EQAQPKLQpqDD2rE5St9Tezq2wQ8cF6sphnYEnU5stsZmzHvqBoAZ4hpfZNjUvqjw",
  "key16": "z1kLxTUhaDqgk5z8vV69zNEc2xU9FUjy3a63XGpHm2o2UhEUGDDY3Uf26r4MnzKPEyTqrQhk1G9fazMuTc7mp4V",
  "key17": "GaR6qjqNExXkqjhJT1sQSNuYnKCpMyFthxQmJJxEFDSZjPK4dYjvf6T3Q8BYdUXEM5frMSVPEBZd4uAe4VHyFGk",
  "key18": "66HDoLySDcdXrLKQXn1kHr2frbk45g9we2Z8kDukbD9cH9A3xYBcMfnmEag2WtobNwkgCCfnnz5SDGWB22fCk2qZ",
  "key19": "3RGvrmDgtGknAC82E6598fAtNEnTTC5dBtwHH1cm2VWF4xDWaY4ARjeqh311poFtoXWk1F76b9DzACBcEWRNnaRv",
  "key20": "5BBNvvtvTfrjxtyjDUK5nr5LYNPaDoenddHsAWUtbGncdcMTRQmLqUEASxuBDnp7HzLyBvSjirHezWMhfvZBYPxu",
  "key21": "XSLECLs4KcdkChoWhu2s5Xyu46LP7tmHPRBtTWC5u2iReGFxvFZTrtMoKHWeXJeRX4dV82AD2JcPFbSDS3f9oMs",
  "key22": "rfrWgtUyvuy7i3s1sJ4rQgMLsBoZjHbjfTVoJRAvh7vBVp4at1LXRaKx2nsHwc3qnrUS9Hz6iJVXJXd88TgSAXr",
  "key23": "3BHGdNtHEHsreynnV47bkfyJdgA1mj5SLvLETks59Za7XNgE4ADReZ9jD9uNwJGBhgH5WfwwAskSgQ4WwBXhXKi2",
  "key24": "59o5tY8MnMbLD8aWtkZ3g3uuQtCqEYmmkkvrvaZhUjQ7bSexAqWvjb79zNnL6HpCTgAAgcPBUaCNGt6pwDyu7LrC",
  "key25": "4pqjqv2j3uzYftytKZAjojgBB6AqdepNXQUsfumSzYHVggnFTXeSVzR2wiGHREGyXNQ7gjwa4aP1T9RRcCB45uuz",
  "key26": "53ofXXJxWF2hnoex33MYjTkcdhybcxuFyCrNg9f7MuaCXFUzcsTq6FjXudHMzFfvU82TZMQxwZtFfgv2iyiM1bAj"
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
