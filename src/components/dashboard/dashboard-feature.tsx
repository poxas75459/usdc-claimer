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
    "2BtG7Z1khVmxR9fBEarhrRr3qPdY7kgjpRvwpvFy4vab3JUnVaKAr99i3Mxix8kEUoVfxBuAVymdtLjQPZUZCjQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j46PpxvxetN6wERkWsy3xNHM76rsJ7HMcfWbJ4f5t4FAuTWipPpMvtBZZApNmswrNWZcmDY1Tx25nNByCjmS9WL",
  "key1": "2pb7LWdkjSgTXyD1RsBhCji3kaYS8kNWmGAXKsW4K3Xd3jP6VdujTLJLtGbd4cMiswfsZEMoG6hwoLPS3Wdapk5B",
  "key2": "59mGKuaS8JUtuszZt3Pk8bhkQXLbWbRamHHsyHy296iRteKCYx44XaBPb2HuG4JfZFN893p5rWfiBufp1FxpEZuQ",
  "key3": "49jkzSrrPY51pFrFpyg8faDTNYCpnHrNXCas4ZXUGkxqMG9zRkw9uWWBKbde9eurWjkfTVUgbZZGKqjRGNRVq8Cm",
  "key4": "4KmM1N7yQUUgaB9zqo7DFMhVTqo45MwFm5on4yNfUMMFmGauRyHThkdwKWQB1BCcAoTvtaatuRFytfWp82qHBxNB",
  "key5": "3E8TNTK4WrhhsKjwUpj3y21FTL4cdxpmXiPfnTBoXFMg9Q9rvMM7UzsEZtdRLWqLLub5M3sRkfxyAWG6FD7hP3gC",
  "key6": "UZ6ii4uBnQoS7TUoyjUWFpwStyBgC7MP4hb5Fw16ASDvANzEfnScZhRDP9HYx4Pyt7sEG81C3ubDQUkxDuAMToF",
  "key7": "UVMagD6RqPMHxDiUUs1ZfgUPDorPmTKJYEfYxqbQV1ehN8jDFgoi6PcLBfcqpNP7facF5Go9xfzF2bX1UWdBjMv",
  "key8": "2Nib7DYKaqhis9Wra5CKb7Q1KVJxHKHEyxMfHcnHdpHLhgYxYXykq6yn6erhignTNzuwV3Bq6X8mPHpte4qido9V",
  "key9": "3kUdCrqjTcgdsvKZE2ojzxkixDH9B7TgA8wscQRhXFueCwXJKNG4bAd5opsrkJpFdVNJ4VgNc8JUZ7g8Px1e7iDz",
  "key10": "4rTJ6sPMWfFaTbsCiXwm2932rwks38fZzgHGu8NBmPnpAAGUq9cfssCifn17wLTndKNwN5cqudq1ELu2W5S1abuo",
  "key11": "3Dcq9ftTf4a1xkgFroTPAZhGsfiUUsCLgFXGS3YynFo1Fk47CLqbtbLD2ftMhaDATJ3d8DHU29XxmEohrR8g7aN7",
  "key12": "5HG5bgifg3ndjv9vZEkiVNkp1qSu2VNcvCq81tu7jS6U8Xnpq4A74qFxwCKXPbCjte5eRhn9Lt17rgW1444sTSD1",
  "key13": "3vdfiqmDES32QHaZ8RwDBH5r3BTR3Nqr28DkxB8fMrsJwB6tzHgkjF8nXmkEXj7GH8VJGMmCq9QoBT29WS9av87h",
  "key14": "2VmDPotghesGMDpownXLPkrS4vpMmfiB6M8UGVxCFwAQnBHZAFcEksik5P4Xj5qA6rPZv9as7cMhVXba45qkgMk9",
  "key15": "55aSnY1ZyMCe2HYksVKibpB3BmuU8KsBwJ7WJz6CgGbcFyrCpLEihKrUoaL1oTQcZKtJZVe39HcYruyhurXYsbtb",
  "key16": "uKpU78tQHeDQ3JUra6d6YRDEANhFETW9GE5WskhN6fvJwg6WRKSbPNhTGPEsuhRLGG7TVh52G8zCGNviLtigii4",
  "key17": "jS2SzK6dr8RLRSWLkzWBaKaZAy6x6K256HBVf4HHazXudQXRLfQ1DDYX3D9EhVqxkVbSZjEMq3BJdL9V9xCXFnS",
  "key18": "3qUU5WAiRVokgwnT9gfXcKbGTdksM1TkYftc2b3cqtxKHybJZyNACYgmSp84P2gEdNgQFUGBSGfU4Csxo5uPx1X1",
  "key19": "3q2KF8erELN3yvc42cztRJB14MCMLA2hxUWuJzqHWbLgNRdPmRtvHzZ4gBkQfjP43ab7m44eAKoy75dcTwdjbuHu",
  "key20": "2jo94GoajApeyTPdSe2RSsxzY2jiM9KZixUfx83eXnPRQNuHFvnxjm5h9KrWXst3enVfjf2jF9zNJXc6r6qHBpDj",
  "key21": "4DGMotnsY24cy2SNQKyVvwedwXimubffphLw57gALvRL5SmFdk5WSagMcbrNWNGtxCBChiSa7KtBdUcwqtEfBYdn",
  "key22": "5dWnj5u8uUrBW8F1vz9p7hLcELWndvgzSdtqhgTZ2mLobyfKzU4vBoMkRZ11A2h9GgdhjNfWuDAm4meYhSeau7FL",
  "key23": "5wpyUYyQigfDyn6wZw7PKECoapb4qNFM1UEr3L8uxUnUCZ5FXXpk7QWyMz8zaBX9SGj548EYQzR2xd2amzTtcvPr",
  "key24": "65hkFNjsMuxBpUsVWcDzf8dmNWL653sNgkqojge3mLF3P57cqbYy69qFUJ9j762kiuzMBChiD1FMdLjYVUK5UK5f",
  "key25": "3y2KWXtMsFVdXkeA6oU5B6dJtTuZJVudrV2gmJ4YupfDrrgb7AEmKxBmTR2BmGxn9n3LtCEq4dWV3WPtJoDBezGT",
  "key26": "2PPDXUGCRLpkLxaqubNC7DBAmrkpetNGDXr7fuvtZXV3CLcDx9LQxaEvk6hxkBWGLks57zRK364Vz5AwV3jNrMAT",
  "key27": "4roBVHHsaTUCRzst8dc72rPQWDR7XmyF6cVdHr57dwbkTNgde2z2znmoyNVQ8Kx2qm4Lvxb8gQfxh2RucbYSNJiQ",
  "key28": "fdDniDVvUaYCRgJ1jXbtJmZhMeagJ6oMt674YP2spAWeRM5xivTfg7rjToPtkkGwRobwU1w93HY1hrnoSLKDePT",
  "key29": "4JNvhrC3FhnhfMUgjZuQ9n7LNTK8JKVo62jvQkqjgrup2Z54BpL3a88xH2M1fWGCXmskmcarszFv5nqRUamQyfGp",
  "key30": "5V4BmP4K9rdGwCVLmFkiWJE5ppH58gHpEMXyZQ24LAki8mNdMS9NHjTcPuW3L21LyQQg28zeKB4nPMw84STzqyip",
  "key31": "4BAeyYKdE8eXq5X9cFufBFzQ3jjQSjZy2yXsJRb7CChX91JkSBYA8KFUAfM2DtuqkpbEHC7Zj3wgz2cs6DzUpcWh",
  "key32": "2c86zu9hMHm7nSawg5zwPm3CFmM1Qkuu9WLwmG6bTjdLMFPB4B9ar5UV9npkAtSee1DKUACYKHEBt8rYCawwnizN",
  "key33": "39gb31FT63R3ksb5hVkRXbuzyw1WWHmSReUpW2tGBsCamErbN4hhkM9didE7rYREB4CqQ2WogSbJXUqpjczCu9Ba",
  "key34": "3LVconWbw54Uh34bVaD8u6y2eu77qXAzcp3mTg2zX18pUagTBDSipmuVR31HTPAWSSQqHFuQ5ZBNdVsi7h2siRBK",
  "key35": "4brAoBTkPVJBUm9tCqXiNJptzyXYaeWwxRhLDy1eSGZ6M696KDxcB28LK3mWr6o8nbdgPQw9NfMdnCuGer5x2SJG",
  "key36": "5nyuNSY2T2Mi5mGgXvgPjie7k9PBAakJdRGzvPCjFJdUU3UGmp4UBJFaBcQdvnHSLnYhxWHVSzmxPfvwT2agMd5B",
  "key37": "5xKU9z2QGCNu1VLnjZgFj1X4oS1vkaAk4iyWePUjvp2ToEQi29Dv8KHb6LNUsHmz5SemjnNCmzZXFRXhAUrrkiTr",
  "key38": "PrFzjYfE99mfk9Pvod5LuAb7Xx3zJJMrWYrgGC5v8bZrXnZ6r8z4MDKqEVjF7LzetnhqvaoybDZBMUviZLbVfRu",
  "key39": "3AFiDkYnzr1BPFfzXd8KAt8RFjsz23rqUj3hCpS1GHWJeaJegpuJPUXHwPRvVMJcsM3pBQ6Mai4SPCL59vSGGsxq",
  "key40": "4pcY721g5dsNjNLzX773YXecgUmNvdJ7EYXJjDWEzC3PtU6kzq2bRk8GyVPdzh22nyrfSJMrx8WkUPHswJmYeVPj",
  "key41": "Z6ef6KsyCrp4iq31KU1ZUBPjfKZuqxhuMTwvYNdeAFPPFNqFLwpXoSmpAMSFfjo4WKkL4t7p7z2FAwKzdN6LAxU",
  "key42": "4aa9pwSzpoXWSFS93LdvHyFWHe2V1jhHZgiwmsdvVriLoCm2z5A7mMbg1r6Nrde5kCZH16eoR5j28PLynzXjBrJt",
  "key43": "tCoYDjfRTmM589ugm7BFXfeSppbZx3kUJCJqaiidXoS3HNPYLCcTgbBNDvneJwnzqj2Q7poCSAu1XeVrsuKUXgB",
  "key44": "5TJeUn7bg2AVPz5n6pabPYXLi1mZozZr4sTJjY3rTEmJyvLsk7WXwYSe78iAVuuHtZGg2V3K4kHKFtVHqQA79aXr"
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
