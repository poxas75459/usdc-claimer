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
    "5tsrCLQjg4WYjDUcYMgikYNpbbfWjTAwuzdPV6PqM9w6419pouU2Qj2rXmiBGdxYqjShRperbHj4sXyPkD4z2ZGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t3qrwcLKE3ybrBMfkAgxEu1zcJyMLrhrXfNrcxDu937yKc7wFKUJsiiPwgeX7eZhoWdkoBRwuhq5zDwXymnryLF",
  "key1": "2Myk9E62VFX3idmTo691NbdT33VJcQCbRQg1LUM9gFn9QejfZx4ixLfBnr8nywN7241iVjfd916CxEh7N8RQnLdx",
  "key2": "4YJsjTeSSaj9mpMiLtJUcBjYM7mBSGzNhQanVtfJprFiWdbr2RM3cyZgMd8r9PCZ95GdN1Fjga5TTbhKEN2bmCBv",
  "key3": "4bkPzXsk19JRia591QrLZAnUp7zKsE4AYJgy99c1f1Voj6AW8zmmZxwyvFubfWPdwcBeu463S3wNvFmgakCTsHc1",
  "key4": "Z9KnQd6KVTKEpzF99gUbZP66od855XVkSR8JrytW6ibaKSPXU7vVipddAMD9AKBZuVjtazojNhTdP1hFmggPqFz",
  "key5": "4TGQi2PdPAQk2dUstvDor32PXRoEdeLgdqfEv7ZqhdrbPzbFV9TP1TUrrkj5Em8EHW3UfqJFqgjDU7MMfDL8CNgm",
  "key6": "5kDUpWXhofUs6M5k7xpSzjbtoqRRyirH1qunT8seAWoZMk3wGE724gtPM3anmPn8iMzgCTSGEhBTEpuC4EJwyvvN",
  "key7": "61u9iYdfmKv9ZcPTHtt8hSQXrGcF7R6HQh9oEBy1RCKTqWBuzXWcgWsc3L5L3gGQbB8jE9PGXQ1u6DbEPMXpUmVU",
  "key8": "2vhqJoiGQo4JWBEkYzYrJ3ySPRUayXvw3jya5jdvWhbyGaMyeX6KW5nBwJ5UGnxTfH2ZkDonFF3t1TbF3hGjHBgR",
  "key9": "bHpeHrZYfqTtYdiiJSC1v4kvV5ZVWphrV1aM9ALqwHsWSumnfSx2hdmsUk1ZY2idGqkqU5tiWw3JaGW7n5u3dmb",
  "key10": "8cqpgzPEa8zqrj4GobYkzyvKyJr889pHUiQb5fTLFuHs6dU7Miy8jAfXT7aDtkhPYrcfYS3DtyuzDW7yNfKRT3Z",
  "key11": "22X1PH3nZrB3oCkCJPHU3TdvJTUvryCFsweVwiu86rPVJc28t46Km33QSaiTFJgTZRC2Naek3cmJg3ohyZqNUc1b",
  "key12": "1Y3tMzFkRhNGX1EEzYUfB6vvV5c52pRjbyEynoM4FMET6gyFBBKBUrDnm9UrHV9qorWod48wR15xLv2K1hoMspM",
  "key13": "5rkpwbesihjShEGsPB36sRyfyJEsJdwa5K8q4t8ceJR2YsdAuUTksyfpWqR5GMSnrGH7QaCQwuSkkLCGKUmsaJvY",
  "key14": "3JnNkn7N9QGPhBWZcUJrcrEdV7WtsV7wBMcmdoyAqBebz8RnYMntJCbJiMgTSBbWT6hQ8b3o9YYFn3tzZaS1aRRa",
  "key15": "4FnSE2yj21KR39tZ9b1sbAYhR76qL2tmwUaMfj5QygphdGt6vFF1oGBDVaaeZimE1GroF1dpnK71q2nEXWQAMSMR",
  "key16": "3ADhoqq3q47MptV8wCRgvyJ35KXtjft2bvy8fe9WVTStYoKiyKSaL5PB6ZK26h9Qw4t4CXKMymzv7DgLxTmWQNvM",
  "key17": "2CiUk8b55kZbDizkyQWSotrRp2XXMZbwMoAK7KTYBsdivM743gjQWNs3Fc4szCLCmLK29pJFckUuPd3RWVDWV9KC",
  "key18": "5sVSgPXugexmXvGKXsJ2CMYwWG9FCpc3UK7pSwNUhNoRSK39JyafPpHWcFSwGpEAb9UuzDgHKVskUVLYk96EvXmA",
  "key19": "5smnGg5Wjf71Ssmza43RZMGQxYig9Qh53V98YbMCrGhYBXiD21iQnLJhWaRMhSMcwTLu527EvrNd6KRd5LgVP4Mt",
  "key20": "2XKxcWmMG5HwknTW89JsbFronNdXYV7x3N4z6SH3PNrv6L9VdfhqYV1tKUXKBom4SUwBj99MBg2BAwRqU8K1RKxz",
  "key21": "Pyg1LzJgtvhz9juud3mMSNFVFJG5K33opoKpPJ3uupzTtG4FZRVdf21QtC8bHBCyRZCY84on2cCGq8pzZHVkd1b",
  "key22": "2ErftBiQaQXLPoyT6BHptUTpRTcCWTMBAQG4zH7x7JfHwN2jvPjXa2BA7xmNdqE3VpCrgxAGjEBXDcRGBJg1reB1",
  "key23": "3qLf5qUgugcRyeHAnyYWAfgXoAdwuV1fgT8VsRZ5CKt3icGNUL34Ryom7JfiPFzCkbw5j1dD6PrLKUFmwfTbAcvy",
  "key24": "53z9nNoAetdfHy81iHSgiaBQ9jkLiTYXuoAN44hXeUDTqBdMLPpLRoWtksypp5KpB2a85xfXQnpaDiu1nG2FojmC",
  "key25": "qYUSRNKuPx7VfwjpW7gHkzKNfJKcmTWuyv8D33997SYoRm6UH2r3tBRPGUq6nEndhHtSkDpm2AyihcofyAvaDTm",
  "key26": "4N77ZtEhdmC1SajiSTsFcQuscPFHjKLqk6wkYAGsf19cS6YxCWH3x98gAUXnBCHmfGLRnenk1aDgN8id5AzmLNhU",
  "key27": "4RQuR4Y34aCAamGTH41e34ENyHmx7Jv5Cdx1Kf4sskuCfUJj3NLnFphKpvpHkXVQTgvyb2Fgv6bjv4FrrWZ7qxti",
  "key28": "5rPjEV8EPqH46vVEUQeZimJ18f4JMvVH7SjaS1oR38NsQvCn9LjCEfnNrV4AK1XCTjhtqSznUa1rp2eHn1ydx5MJ",
  "key29": "6aKGSTn4s5gGmAgN7P18sDWrksAinUt3pNmwLnRTf1QN38bUQ8VfEuzgvbdhAVttq1hwbP3czYvewQXvpSTKDeh",
  "key30": "4qoKQpqDqPhPSyZtnAnAnpkf8zdX1oSNToN1qJTfxMRjzxSqfTjjeJSMmzmKi8pbFp4L6HmgeduKzLG71FdBxBDV",
  "key31": "66VE1F82rSsaqiSYzF58SBnzE2yKGCB8FmvkxGUQD7E2j5xdd26pAKnMCH15F7MxGcGRSHERQnChoJHCBDBCkEop",
  "key32": "qCaxxXrSGoFNCwoy6XUZ3n6bG9fXRFQGMyBasQmxAeD2CowYWLHXFjVqTncrJsTQpokvFX44RrbPNkTVBDKcMZb",
  "key33": "qsKaLw66UXgok9xqYM6dfFhwjeRQWwxnpwSQ26Wk3Fg9NgzFWhfnNkcc6unNont6GGMGtnN46nNpEkjqievbBzN",
  "key34": "24SP4nE6PJHviFt1kQWw8RCaXUxzxz9i8X2WHYoQH7MmCdjnnz4XSHGnAMSViJs3Hd66VUz7H4sd5mxTvy1s5pLB",
  "key35": "3f5Ljzivfd8fw1LKtMtTY7W8rLh3xwpryKPGht2agJDMRXhAN8wQuNz7drmcX2BNG9Lufh3Qg9tnT7nb2W7NQ8ta",
  "key36": "4J3NhyMQBaXZLPcxJqYmpmXwjYg4wydTUhBbQXTBRWk6QU4djKD9vtwBQzixmaqQQjA1VEEGesM2AvG5Ukhi8StU",
  "key37": "4ccNPsz42f6zJhyPxMLU1AUByvnz573WYonuuSUZycSDKrjMaQ9FSdCv3Ua8ZRuVCYzpXweFjuJdBUZsURyy17fk",
  "key38": "5XYiUjtG6pRcKofHFp3Gn2esF7dHFts7su7gPFLqRWevLngFk7Xraoh4w6gxVZbPZm7r5Ujvfzz5Xxf7cwnK6Hoe",
  "key39": "4urQ8sQHjuSy8L6RTZSrbD8tGinkuoMgtqtFTKT1ArHvvmT8d8KiTH4EyXeXsdo7uZSWATuZBxM8G3iW9BzoJZ1B",
  "key40": "YpVRernpHm4bWTnWyG3wZdJaUmHawou7EPVK8QdtJLhfecBhKEx4duP8dDG7yaQ97LWbUJ8YokE2mEe74tzt9ma",
  "key41": "5pHCneny7aubiEQ8DA8UkShSjArsdAd4Fg4S6mShjrLfyzCdkoiRdRLAo3bQfT24bxfkseMo4ADrnpoSAr6zcgq3",
  "key42": "5MENDKYwd1vNVLcnhheixyZePZ3DnnHE9edSWF5NvbmcFA7fWaxenN2gMjQBanCsQqsRkzBGWJnfPn5RyUMiUtWz",
  "key43": "5rPxn2eXZ1ue94Gg9AmJQpo4QzPv4vpWfW9RL78c8W8nduFmxJvxHh9mn1HAK2jvCBAcfj8HkoX3sax4s7rGfqNY",
  "key44": "5XrFiT8erMHgAeemzps7NCaaX3itzoYWoD2ab7YoXj8oGJzbP8w7Ubd6ze98knMykE6QzjYNVxQZU3Gx1zedAeAg"
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
