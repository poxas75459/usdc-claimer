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
    "2JBTJW191avgGiUcGVB8gPRyTua5wqW6GHBw4gSn2GnuqRrR72EPux13ZuPms9vqGkc2BEqZ7jd6KU3FJ77tNNNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BepX1dFdkpDSBDWUjadFjXRza89oeHDtvY4KSLxjLpwyRtMyrPw2hFcaBQ4SsE4CcLwHwsKAsfZDEvTDjnFn2g8",
  "key1": "33SnsSNGe2mF7QCk23R4F3kw5zNMvr76WkzMP2HGy7h4qPSsiJKhj744TrXsddVUqy3hTLUsaVcp5AT3Hv3sFZEw",
  "key2": "4vgpHcUkpPfNJT8eQniRokzNdEfbbcEKN3w1942C6FNMn3811ybDPABCJHFUwCrUd81sQ7t4eqExF1wN6i3sMWZM",
  "key3": "3kU3T8ts1ng1X9QTfbkXTxC77mFmp2X49XbuFxfXbicCPJU14jZ6vi18Jmu8YNazsxAkjs5CkHJQnkS4PNwnzi8d",
  "key4": "3QyBDgf5WeJWreJygPwuj7PiewZUsUJgMN7Cv8CjiHrtQYFbzmjAku6cFL2Qhb5q3Yq4LNcK2JrXv5qTZTjLAkJZ",
  "key5": "4VV3CV9mYbGuvC6nuBeAmA73T5M6MiURMeZaPFCi2vSbr5LhHpjVP2jDBbWbdZTx9T2FSDiyTRKxFhisKopEd6Ko",
  "key6": "4dLF7b1FitysWgc41bP4Sf3UzoDARpgjPMcwvzML92kZP4P22GXQ6S5bLS3wt82JqtssHiNzSXuGqBq6CehMWopv",
  "key7": "2ZG4DmFacTo944dpoRGz9suai9e1WPE5qbPVhuJgkhusdCxF6vLPfDquZTmFGpLV13ZTMfUhQt2y2AMpucL3JTHB",
  "key8": "2VS4WgXrNkhuaRd2c9eakVJkfFf6etFxMLGU3St9Ps2dfR4HQRAA8ApiDKJQBfLTx5TJeBbfsH6ry19cXAyw5ckn",
  "key9": "2pTdEexSxYhCKKbnEuhtbWUXamDVQLZ2c1fPD6o7CoUJ5LnSgLty87f2BR7zGn6wWopGpTGp65UmEumeZrvuaeEy",
  "key10": "49i3T5dpP2LMeEqnZe2MUFToQ2EwkJbsTZAiwUTyJUtpx9fUu7f6HDEHF2qqJ7C5pc8SNcvpV3CpfkNM4Gty3Lpz",
  "key11": "5RBoDazqasNzzhQkFTbE897UcbdgzGVp8eNFdD6di9yF3izChVX8hFkexrtuExXppvQucrEEk21i3FqRrpGGABWb",
  "key12": "4MvvtaSDZGBzoiUQVdPv9opkh23S1JipHNsxkDP2PrB49wyLteUUPUx27frdz1EMGBBs4a7BQ6b1pQ4w3qmm4TMR",
  "key13": "4nY1188EWDeq126zruwNGEh26ogUpyP9P6R4E7PXnLgLkemDziwEitV3DEvKwTi5C5Pg1PoVj1RHNG778GHHyWkV",
  "key14": "3cFkh8G3EUygfxBGFr8FmH883vZsUsdVD8dGjwHSDkfZrBAnQZDDAXbsqq1MXLXV9xaJ2YpiDYKgS1cL7bffNRUj",
  "key15": "5KGqidr2Abp4qBg27h1q9rt8QgBemNuGHp4dqMYoA7vYYdDDscmJ6NHagGdsofomD9PfHTyNhZTUsqgcqmT5vQ3g",
  "key16": "stChsP2XsQyX3AwkTqj9h22p3NDsGQyFz6euYZvsecJpsGK8dNXS22xCYxrdsc4s1WB2QGrnbVbdiNVZjXEQJUf",
  "key17": "5LgzqmEUAaWn6eaaR52c5KzvXEZMXAJKEUcTBNg65hziLCDNZ43r32WQEvtcZAbGgBTk1GbwMVnVGbbhq9YG1GQb",
  "key18": "3wbLJeF82swWdimjJdXCQkwAP6KbqJDuLNgDDgvMVDTjG3dYvGNfCeh8mSXk9amUEcc28KJayC82wq5kxHsqeNPF",
  "key19": "2GBr1vVFdVB7BfHikSrTw43fZfGxuGwaqr2hqbuD9d8RaBekK95abA5SYQqsF69s2KyBGsMndgcMr5sd3rdLeCC3",
  "key20": "5ntub2xzbDaAPniwUmS3KioZ265dTLYRUPEG2mw3VrnobcdTn9VFtfPKjpakvupM2NthQcF2Ab9nAWaRB3u7FU9A",
  "key21": "3qcF3biuyf9GWH8vCyY2UDTc6A8PdTERGJ2qTdx9Tp4ZJuhhahaUyf3zePNVarQjviw1NNRWhZx4XW5hExbsdo5J",
  "key22": "3G54SdBRrkjcpj6y9T5qzHfQTuQfnVPKexP5MXgBa5J5VT6TKpiMHQttLyX9JLiJkDPcvio6dKAmFPVpyKB7s7Yq",
  "key23": "2e6CoiqZXDbiRPuVMaT42ryQSqoKz12Kx5g4mJMdt2T7KyTTUQCggjZ1RkpriahaNtu2ezBVPZ6cjtPzJHVeLmx7",
  "key24": "bY4FsWdWKH5cKg7wfEMUZ7296SJiXa9PfNgD8w6W2kc2FwctGEZ1ojSZddpWFaHEeq3B9uPLvHTAwsLtZ4xi7ne",
  "key25": "5dWpNoYNfa4wVQG8nmaHQzDGtsDo9uSw6kevzM2HLzJMmtBZdBPuXTQceVHUtbXDF5NHbmegintzXyhYiK4BUDXU",
  "key26": "3Tc5bWXv7yzZHcyiWgE4pLAahWrAD9bPJXUY78LcXq4Cq1bfh6t4wmr6W6TSBKWvLAzT1xMBZXjm9CpjuoG2277S",
  "key27": "in6KrD4rDT61z4CEH5TYQGxbHtcbdbzyc4trkxtU5s5BwWzpf2equUJpsBXniurLS2B5SbnJofRTH8V2XeaP2dh",
  "key28": "wEvSfbSbgQLHwMi2wsnrkUN3F6SNMozJRo98QrSV6XvwM1q6edQTax1rhfXH2fywHcvVg7NZkkuoUFs6mNtdFcW",
  "key29": "5mGxQNNx8mQQbKaPdP6RqvzcbpY5MXERbEnPP4kqSrfarPzDMK22Wjb3gz53fNK6pt4nJ6obzNVULgCB3FM3yk19",
  "key30": "4FiS3Ttp1DaLCPBfLa72atQcdiQzhtMp4Z6JEhtohDETMBYAJRjJRSfZKoJiNzMhDHUaRUQsh3B94rsobQRDSk3g",
  "key31": "AtssqhozVz7GuSDAfhoPGTnpseJ4cQoaS89ELPZESHL6rs5HPMGwLXhmXxQiGvvHdkRwMPGgJow4oUFJseEuZqt",
  "key32": "4SrEEs7odEr3atRWALypqDq3qLYLq93n5NjNUW8A4szDKVndQXZg6Pk3ZRccrUn595g8JTXomHj4SVtqHPqAaw9E",
  "key33": "3J2ipFkLx4zMQyStiABUihKqJ3a6V3jgrS7WWuT1PZZW7ifPJek5dFCSarUDouHmsSa5T9jD6WnPvHDFdYnxhkRg"
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
