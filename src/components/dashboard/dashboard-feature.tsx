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
    "3kC5yuQuErbtqq6RonFBWDXGs77yckQaJvmppBehExRQpyC7EJuwhkSj3jc3M7adsoTZEUEeutM4Uh39LSxaLoy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uz6aqGQdWJCceWRLA9eGPzFiVk8DEZuVzK5JirQ8RgN3oyNLBUop97TZZupa7u8sKtMTZFX8UehsVvMgw3f65kW",
  "key1": "2wwKf4UWN9eB3PcM4Y9YyPn4xaXr2v2qCXSPbf7Vmfwfge8jusyXnofbwVU3HjrzmDGLxAg633s3TLmqz13dUYvJ",
  "key2": "6ZwtcHJLtcsqpu6uyt7L3JCMMydD91rc4Lob8MfAZcFxo2VuM6VYDFzhFfneuZMjCETrL8aiaPKycxeD1PNjh2n",
  "key3": "5wGozawsijQefXS9ABeYtDa3q5kVPTQnN66DJvxo7sUfjt6uNcQgeZqiFh8HJrMuizDFJDETeFndxNq3LmPSLCi9",
  "key4": "NBPqkxJGTQajafCqeSXrVCJJh31KcLtw86GbthXbM9n5doiaBH7xG4nS6JEv3rFSUZz44bYjrr3gGcDZHcJ6S8f",
  "key5": "Y8dvc963DRneVDVEyM9WtrC3pydUacXLiu5RGDctwr1cUMVbqPPFMBweirfdd6Tda2Dprk1RrQvXr9E4PQGucBf",
  "key6": "4JpBQYS7ejsgrPzeUVEjoS1nXdwc3Z7Sx1svZV1XNBagn85pSCcoeEZiotW2DLTCLYVJ71Np9bbDK54vYn2M4Pm1",
  "key7": "51vqL3SZgWVQofFToWWUUUoXfp2qaJpW3zavkpPxVSoGqUhvc79D34cZKzF4J4CWafXmbhXNd1VKd3hkyyw678HH",
  "key8": "41do43tVBPSS4XTiBjrXkd1Q2ERRDM2qNaLJvaegk18KH3kfGdXvDnTavF9kWegUSujx2cY3dBMHP2SasxurVg2P",
  "key9": "HgmEBax23RDo5LrpduBSHMy5ZGpmqza6o8VCuKH5crnenvfoHYnBPwUPS9NJh6mcQ2WkFyDdnMrar88VGjDfvJf",
  "key10": "3QZz9GVwGpUdDUVh5mMWeurHMDru9Ddzggr4bMBgjDtYRqEaGnzuL7wPdVPwVmzPJB2hzj571GwEBNtAZAJb3D7L",
  "key11": "5MP2TLG2KwxpemFe8XS5GRassnRruQcWmedZ1Z1UmeBkb1hFjJj1po2tFRTNMV6KdXoBLQMvEQytgoQVND4dVoYR",
  "key12": "2bzbSgR82SZWR81tXF2ntuvjNbgFTv2dS3xqedzgi2fkSEtnMcbnvzxeskutVXMsDwb59B7X6eDCp3pUza3puWAy",
  "key13": "354EWeGEwMFAY1yD4pjVSCUDdkHS6kAcffkpiN5tUNjVQEJwWwMxHsD8tQsNmV957GD6znwzMFB3K7e4vLJhGSqn",
  "key14": "3yxuDZRDCbrvMpjMNRyob5erm3bpESqFJmj4hRcJSqa97rtwXh6kYwDrHytuKDs271o4HfCa8p8n3QwUZyRwoKm4",
  "key15": "3Qm8Yw7Pq9GpgyjxAG2sFiZRMQjUkCbeKTJSzvQeszz1LbeBRHYeDkZoapcWRhrUEo19pHhg6xA1aQLe4gvAghAk",
  "key16": "3Bagd7a87Npg7yPpP8GSXxV32JZJTZ1jjTcuEN5SSCfn7JugBRzbXzbHk1nZtY6a6SmHHSVvmbtALqDHWwep9tjW",
  "key17": "3jkw1SjgAsm3bfyx9oTwz4jWvSyMwE9K34rod2pNJNPmLwktjwwXqfznpAtjJudVXGawjmbtYhLGYMFU2MkNk53m",
  "key18": "4NEYDbXPtxmGU9gyMTRYa5zpbjeXRx8Nz3rL5EbKajD1rKDTWvqK9yM2Re7yB7NeN2xAQDGZJ8hC5UeZEeeDjkuq",
  "key19": "2G5siw8f2KSoH7TxQNSA5Wt3gGkWpWeTRtDgyG7T3Y3JGsvBpmow9BerzAyMYWEoS7R12uMJit4KZXcL3YJA6Zby",
  "key20": "5zTPJ8e6gzcN2ATGMoC33geGgEiPkztpMdPDQuJaA2tes5dqnVH19MceBXWcPbL3NTmusK56jDWnk5pLaJB67s3B",
  "key21": "2sgRJEDNM2CtHpGmPeA1gQy6znUsv29n57BDeVgJuYsXGVC8tR4A4fkcy12exX51BSFK1NM4WaR1i1gTPkt8jjJz",
  "key22": "4g5eWXmNBuCHjx7wkYAskuLtH35gwvNTVdHLgwJWmviLF1eh73Vt3QvtCoUahhz1mhdGia5fgjVmv9jG9Viq9nmX",
  "key23": "2Ur5Wjb6q1vN8REgPXRKPYpp5mWM9i8YRHo1QcXWXsiqUmGrEkZAu33u8HxCA6c21GmL5up1b43Uorr45d5rALJn",
  "key24": "55tsLv6zGYMH4HJWh2te5ufPFRKiZ2PCcARzou1RrxmUL6R9B9rE6mAc8oc3pKqUvhqX3SZ6pYbb7odTk9idsci8",
  "key25": "5XamRxwnCbUmJZ4TCkZwe7qwZyqhaiUZiBkU7sqh9WaDr3Vn8uq78aBf8szDustRj1tLYhDzVzTUfKjKBqR76qN9",
  "key26": "TSsu96fsW4vuQ8KqqFk1ZTTTFEb763AqD2bEBCwq2UASbFLdym6AbiK43RrtJ1YZmynPRFGpCrp8MLo22JL2jXD"
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
