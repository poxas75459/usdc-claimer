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
    "3jHYg77PK9JSRT21XnMChDZSCMUzf1qJyT7ap7TiKJdxNb14Xa3MtX3SZEdRvD1Az3Rf1vrvGEhzBN3aRt5znjre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J8b6jDEt7SzCL1jWj9NfYdVL1w1UmjCX9cSoKY36ts6VAAaf8cgk3jCsF6WxyisM5Ea9vBiqS247zahfiG5WJAj",
  "key1": "3tMK4txXjxjHhtdGgWaWXvaSidSqchFrAhrmfyMxduq2x37poJVKgutyUmn6ZWTGR9N1jDGYRKWSoV1xgud8twNU",
  "key2": "4C1TKHvJtK88bsSA3ZgA6ARL9LCZqh3GoUSFMY2fdk9XabbmqTnMQkcYHdrS3xkzF33VQCamMRUwCLn17MYgk5if",
  "key3": "53F99zoGYQa5g5LM251nTmEuzZAbVBuundvoBLdDWciyfri6aFrF4CEqXFjgwy8oateiFbG41NamJVLtD1AckTzz",
  "key4": "6182X65M3crHL3dUQdZxnfwrMZsjMBDwnJGxj7BjScPrzeSPh2Bb33H4HhRgPnCmBUPxo286su4fP95Z736LDqpP",
  "key5": "5cETwtKgTQowghDAJpy5SyNKsfeLVdecfbbjENoitkxUkCJxpXjx2iEEbC3qMKa47xjfVKQgJdYpWuqTUxMywoC7",
  "key6": "XVkLKFHE7d4kwzzGjLBLygBkxM33UHeM6WCNVm7QBDCARitmxGztCES6qPCLkd7qw769JAqLwX3B43kLKviVAET",
  "key7": "3aLt5WDWPEvbNUPsXFNEXboZzdddsVRCVKE2dnEpeK8LRwSnADePhQDfQ8JZFoAsUQRpfjbNbjFYyzNjQ6aSuRUL",
  "key8": "5FipwL2BWMkCGPgfbA5QfntBeJnq7tgznkqYNxQ7orYrmujbypYZqR6dCP7nmxr3UNKqAGsKbEcUkRJrVhL3mHzf",
  "key9": "63rVGm48CBG3KYgmBFErfjQhz73KqgRt68TY7PTh5Vi9txsJcCw5bAWP3ezuPecNdWyacDryY1fBcRmWJMznS4DQ",
  "key10": "5jbRAZQJTg7SyWVMXFkriGkJss84awuG28ATq41AjNhEPWF3c5ETtoPCeeCFDSRCNugWtFNN64tRc4uFRDvanFDb",
  "key11": "4BEM12ZMUQkrmQboc9CqeM1qv9k1q2PZALqfXYGUmP6GuUSyFNqLTqdyppre9YYjzBRyBchp4TxaY7bVSqimCZy",
  "key12": "3SZGQJJWKfhaEMzMLkHbCHNoyi9ewvJhrEmgDeBWWmcQTQh8TY7UKYZUU96PZyuvUibAg6jPa1u6fkxVAMx7VFDj",
  "key13": "2i6kYe1jGQTGbSwnpdMauHvCEurksTZEViX2htm5a4wm8rswTBr7WbRdYMSWWu5dbq4QXHrbAXiPRABgCYyNSaPb",
  "key14": "4ABhaGf7QERdE9DFjnx7D8z7AVyCjZeYYGm9PZonkVWawgyBtFqQM28Ltxjo3HJZD8HhBvWNAEj4hjXwxpJGVeaa",
  "key15": "2dwQpyPT6T8AyR8kS5GZJZ8ue7mTme45hmcQXzkiM4p7ZHG6pN8nEH6WyBzVeRYGhGVppsNrcKPZA2Dm3FN3ThpX",
  "key16": "328ZHHvXDFyeHjKHLDowvoV8k26pmJQgsSQXfQEDnFTA3XXsbPh3KhH9yYVnui4uuETEPBhTfeYSM5pcctrR6o7s",
  "key17": "4Aad7RQf2THrsguZv44siqD8HC1GMLrnjcBj6opKkyEa8FbBSjasUH5D32uaBNZyrJfqAM6fQQKvvHGtJs5g2QK",
  "key18": "51eYULYx1zNq3NtUXkecMDxGrRiJVaF99LqqXCRySoBXgDRQ9kiZbScqncQD4DgCF2hjjoRkviw1QYit5WePRpNY",
  "key19": "3MoYVN4k9uJuwtecr8K8BK5Yk8cHqf41yytm51BbQjz4wMhzyS2Z2gfQZk5xt4iiD3E8nXhExgYUrRZTJKNsnGZa",
  "key20": "3C1DJzMYHzuy3wAkEsENLw8S3qz5BR722hnKQdFBEbS5pV44Bvaz2HvS2jZNNe2kxx9upphFanmptz7CncSmpxBh",
  "key21": "XvSfHDLq2jCQ4uzL7q5uUvxFfv4c13eqgZADkBo9B2fcUmLdpUb4buETsDFk3A5fK34tAz61cSdXHFLRbYcVfor",
  "key22": "2btTKb49XgymdT5uMFcPDgcNGgGaEbEDNzUQr5DN1nySxnzh9jkscqTKKoCWyZJ2gjThodWP2TyAEhy9hzG51gbC",
  "key23": "67Bgg4HM1Bf7JT9TomFkYeVVph1NgU52YHucY4fym5bCvSdqLBwFaoUd2vGXkMQqzYvJE1rszkVhRdasv335HJe",
  "key24": "5MLiroxreeBoQZo9WRdpBGhoikzQ3SvYiqqaspdtFhtE1Ny8UnfNFAHhqZZrn6WSDnkW1UCqBfL9rSjGZ8Yb6jsP",
  "key25": "35mkXfSu1NsEku2Y1dXxjvRrpVU5zoJi14BAbXuv4Q8aREYV7gZKRYoCk2THFSEgXHaRtmY3Tz1D4GZJPsfRmLpJ",
  "key26": "wdNFYJjSZAEqTu5CXg4xM1q3PkFAS6fT9Jz7v8ezW95uD2LvFDQa4uZQBCQhedniLCkj1HC2BoQN573vt3R6itu",
  "key27": "3noUsVkShJxybY5oZSAbsaUSpz26dDF9Mmhd7VT8QLuhgdqrFX3Cp3yAMD5bZv4YiGqRpgzJgR5fecDiY7qpKJGN",
  "key28": "4Ye71wa1ZVD4PRQcLkCuMDiRhQZjcqUu3knp18VeGF9xQW87FLuFGL3wdy7vdc6TNj7Bihi5h37MeBoUd1ixCNNB",
  "key29": "2bRJZDqs69Se9M68UHPcTtZ1uDHTKZQLBkDskoew5DSM6wwSzUS6u4ntq9nc5eNjfvDLfCzKRNkB9VPv4Pv2qhQK",
  "key30": "3uGdAo3Mg5Bg36JJnw6Y6PiNKBp12NGSrtQjfrZhKCYry9jsX8Rp3hVeYYZH5e5yZ5LBLWhnNQJLcweCwbGTX1tc",
  "key31": "54uc2NGDJj6PpuejcRgFBTNwY18b1xdnQLJid5kYugbdXK3fC6DrqtnT8ZuHncUsWk5xNaTVdZsMtgcyb4ywBSeq",
  "key32": "3c5uWXXoJznAw8jCQ3A3bCzQZrY4gSL57LdyLEzzrxcDRuXv3xiu7jjHKbvgR7FX8tiuHrahaQG9bmhNdMvSzrms",
  "key33": "5xjbrZSrxssTNntk9kbRhXwhsbty6ApySsKsYAsUNCR9sUM3uug8bmvUamdb5d5bwBoCgEpGWw1BBq45RrRF48UX",
  "key34": "3ZwRF3QbrQzNbsn4qk4m8bVtZY4DqRFJvfQURsxKGhzMpv9vJ5rBAhQiZsCRPE82b7h8qV5gjNvYV1UZVegEYAFj"
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
