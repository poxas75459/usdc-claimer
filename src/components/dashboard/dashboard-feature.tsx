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
    "31StLv8kxPYFpbvjds9Ypb4VVoayqZArzN4SSqdgbUt8SiPDCBjN9ruTuJw94QhH2nLSCtXDsU6uSWH2U1gHEUpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h9vx5XSgsX1yizFJbXDGUHjsBc8abuYkQSfD1SY6Di1YQ3iTt8RMgbFeedoyz6ggHWdNJaqgNEYj9tYibnu2AZC",
  "key1": "4qywbpc1VvZ8EjTj7scddevXxDL7gEjnJHiDukPTKRn9W1BtgRrgsL6b9URuAJiSUZWRd2hmbVbYQypzbT2yTb12",
  "key2": "3Vv9nStD8t9TfdgHXeAkQtgLL3MkpeGakFHkAi2XjKcPmfHd9GFxjWpsPUuCSABRwkWdJmhoPRbSPJnYcWyk7nkX",
  "key3": "2SxmLV5GVB1UogmmRyV9AsZBb7q23pFQRESu9ysQCz7TfKZcTHAuC3eKjrntFA7TTUriv4iWq75Q8sHeY29zXYCw",
  "key4": "oCn8LWh3CuT4xEMWp2GRDUNmgcq4ZwTmr1U8X3GU7LJtQCVaEY355GNWfPNzzzZ3mZryUhMpMq4aV8YqwXkzbRU",
  "key5": "3RNukz2QraieVLK9cMttEMXa6oBV188T3aJYFsob7hEnh3buB84yWQNCMzuyGQR2MoL68JEiCT7G4fTt3LPWQD8",
  "key6": "2uordJur6djaVUTTiKf9Z55UxNAxhjnh36wUViYNEMhVsu1etzGj1kosZUFoTKTHijgMnEAkuuN5qdUgtzqMmjdN",
  "key7": "5q5JRZ7SkQyW471QtQHBB5i63EHfGfFQPqHxR6Gm8mP5bQAHHWwHTu9Zp7edVsVsLHpVWZddfYTRmYvDaGNBYZc",
  "key8": "2jmKE7BGwjBVvhzu8CcUbuvdBY4zHvH6dG4TRqAHTdBg2ttE6S2ZHRxHTh53Qg7Q4UJYL5Me1nuD9qCToehJux7o",
  "key9": "5jBHAsJ1tp91vKALnZqNsxrZ3PcwKCVhi6njr1CSFmKkTcL5x341Go7VYfKqYFfHPgGzTrdsUXkPE9FV6tZJ9wL",
  "key10": "5bFTTG2PgMM7FieA26kPhZT3bDrQjftVJQmWLpZWCL6FHGw3QSBLJZqBk1CJsP2Uhp5KzRbFjH9rc65r7DpnwXpm",
  "key11": "363g8Ez3Ss11ZVV5jzMcNdNcU9KMVBYV7oBDBRzjoNumCeLA5giFqeVWho9hPCE5Ars5oj8No1dpyJ71TAkctvzP",
  "key12": "2oayDNC1VC9BZSdcDML5vyBUQUYoNjvEEVn6Fb6Gqob1duVjvgLPgX1wzUc7sj7wjuuJesx9mLoyFWmPUdwcviGi",
  "key13": "ra68H56vu2JkgxY53rHyRkMQ68mZL8Tgt2ebT26Y2T7Lpswh5gY74HgYHPXHVFQCREJaSDZz8dkk7XbNzF1e3ds",
  "key14": "2tkCJ1XgMxHuAzhpeyuArPWyPZiKKUH1Axe8XqMkiv9aMwagRU68PxgSp69tiZkU9DctBRDQgEt4waC4BfPkd8ea",
  "key15": "3BeeMPXsFf4vSRADUr5Kv5N1pZ1WHFeHNEmqJXjsJUiBUgvDt1H1TxCUAGjLcq95kmG58LQze4AUvHPLEnXx85Uh",
  "key16": "4vSvQ1GWLpbB2Fb9oR7wduiRWcFXucv2LLsnzV4HG1MZ3SfUsc3vhhiMQ51fQA9aV7A2QG6coVyBUQC1n5cTEty5",
  "key17": "3yJykF7jdvzvbYNGmCPU15ufeL9tsmh1XgcAtiedrVrQFbdWjCZTCoUaBRAPK192ZZEmjFtgh98Asheu4rxMmahN",
  "key18": "3gVB4wJVBGMSp1c2Ym9UaMyKvcMJF1MkayubVEbsfgiN9pciU2YaV3AVeGyHpWEYGxVxPKSjFw5F8eLfL2yG4zRB",
  "key19": "31Mpx8D54h6itK9bErKLc8D5qyGjzbKdcmwVkdpQE16VpudkE59LR3ZGEZyYDAXA6TKWPG4tmEFgyDNpaoP6kzQ1",
  "key20": "NrFPPNiMvpuyx8VPRd5xnc1pqqZr61j6EWpQf6ZsAdBTChhC6UgTxhHsTBk1FJ7xYm7qwsuTBxnRGAdJhu8VB5t",
  "key21": "3zW5SqxxcdTX4vA8KVPLUjJTTZj1fVybqLY4uHSoGmQXvfrkSuvgCRJV47Z9fuBZmXyoWBnnEPxwD6Jkfkc3HLtN",
  "key22": "J9rSUKFHG9gEfiujyrcs3hi2vAxLZAZfivXfXCM7bsTxdTW6oaWTSjrgrCKg6VYEdVsA5Qo2wU9sNZLA76YsFRL",
  "key23": "2HxU7LogYkkJcdvGP5Td6tsfAAkzEqVPCNFTtKpkktqEbk5YK9De5mksm9Er3mE2vwzMa3ZgX8Qr7tjMhDaP7ACF",
  "key24": "nudZ1e37WHdCxWUZBz2uFGKUjY8Z9rF9kUGiJ5oaRxZDNAgCBYqVGAMJUrq4q1kPQBAEdDnX5hE5ukY87CMNwdh",
  "key25": "4gP7rVAmXGHQowdcvtjZDXsPR3QG6jQSQoExdwh9ypj7wF6snMvxK3ga1wq9eWz57fdTXq5XXPtZkhiutoYS8KKb",
  "key26": "3AHBb5Q5AEtC8aQmRfBRSTkcmgLs8S1ibdtV4NcMTbiyLXjHwRf4RQUgeQMbEQCEyGnWj7MQtfJd9tNjZEEV3j5e",
  "key27": "2zMvnKkGHERDFiJCjyXTnPx7fxQznwhG8CxsmE8jeJVL8iXsCTcNzKDxNXMD1zsudS66goiGkXBYb1UfHxD9KnKG",
  "key28": "52DpCmHrTALgXdkVKoSEcxCrNAKkor3mJ7EDBW2gui67ygzfwwwWF5XgATaSZHio2m1VGe8obY6gbGMasya5APFx"
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
