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
    "tEHhFwEWMUNA8mg4iHWrTUUKbMAZWG2XpfZjG9Tbidiv2QbKcqrLxy1yDsXSmwxsoDYWVZZG9h3BgicGvmzknj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MB2h5RqbFAnbMfNQY4naLwbU1RwpxJNx1x9cfFMHqTZBHhnBwwNcufS2X8VJTJuWYNHZxGHd25XL7MD7DYa1LvU",
  "key1": "4d36uey9PX738ffmtM1xDDvrKBttbkPa7wCrpM8G4AZ8jECP8eRdvWKDFpHpjgsBQxpyxEMSMhsWY3uz6Y7XFkPe",
  "key2": "TQjhZsHpnDqZWS29aZNjZFy1x99WdkZXNmaDkb7cvfZ2T6jEHmdc2QUvXXH7z657qSVuiLwhuV7iHf2vd2myxua",
  "key3": "5VDmhvy2sg9oiUZPgNDtxhv8dHGhnvkxwMYdtDpish7mLTkVh8n7RAPYz2m2C2ariBa3Pke5Xgg5o6zLRdX6BmJ6",
  "key4": "8ntcKvWe2hsUm32MmCuucP8TnEUBwf6JSaWiptjtBvh5zjd9nAr8Qs3VdVFFYUAmFA8ju3XinDpVybXSJLjRRDo",
  "key5": "4aVN31k1jVh5Q5XrX3R25LpvwYXjrCcQ21H1vWwFq8XtfxkSiEEaN9Y5sbmsT356vvevoyjYw5AHMsYjVqjVZYtS",
  "key6": "s2PUXxsLWLzKUxdNKfKrbVaSbZDDtnt8krAWn8yiMdTHQn3bneYNEqWvtSPiRTLDsSJhxntcM15wLcC5UUPCUYX",
  "key7": "5njLtjsPP5X4hdM6QXLyFyg8MQW6kfWngh8BZWK3uC4wP5Gqq9Wh8yvLaMeSBZaViH8m2dNTy8gypCbHbfTsdp6G",
  "key8": "4N9vUoqGieh6ZRDU7bCGdoUrAuHsRBo2iLZokKqCPmdcoiUGBG3wnJgBjDrsj4mKXpDuoqqRdFHJXVZH4feNrRp5",
  "key9": "TCDJYBjufhUzgQZSyAP4hoVviGKwj47XUVSB9VzHouNuNDFNhadGMtuH6CU4EdtaLUpwConTwM6xf6KWf49oAQc",
  "key10": "p95wDSEg4Scvijo5djUS4XMKgk9UXRLTUVqsXLiPqWU4eCEPiofYRgahqbBj2HPNMTCzA9fNo7uywiSbWWUY9N2",
  "key11": "59mic7WK3k3NGScf8BnBKcSjJySvAmev9NRh48M6PfW9opXocgLqyVCfc9vD1Y55wQm1Pfo6dsDUpFNpwvmfU5YV",
  "key12": "47BGVcPn16LFAWe8n6dfYkMF8RRm1gpK5Zo68cSxLG8P5PWqcRZRLWQEeYKuArXwUmuTrKk8ekrrm4EJVp18KAxp",
  "key13": "utoNsyw29zApNyAc9ZTTaRCGwMBs5Coptv1un1QswTWpnnaTcL71yScmgEyyk6pcya1vHPNyvwfzDSJCnwCPLqt",
  "key14": "5uVH4zgxHqGAuHic2UyuC7oJdNML838zDPwpxvWbgwe7nGm4fNgtHYWvCC7CotM6J6tX7oJm67yiXEefyrptjYH4",
  "key15": "2wAraPTv5qiyTxXE4sm5TYRqtbAvcmirhz1gq9VxoNnyoqK9DXNFMuDrXXjDsyDdc8msSF5s8jxzRWpizSMMgbF4",
  "key16": "4xVHrdtwtCLvuY6dyWKK21HHnNpXzBuDSh68kzs47kTQ7qNyp7QWgX8NpSa7ZqkXeBsvNUV6H3pH7bcqzaad45Ps",
  "key17": "6cnrbetxYkFMkjK8RiTBj84oZrqCRz27TubEUJUiQ2CtiJyPPdAjoPtMUNLumuhU3s6ky7B6SfkNMRXf9DgLzAM",
  "key18": "5aWTdTLBFr2yx3bKDiA5FhTnBStroEmAu73CcCJFFbxcisjypVQfycXwrhasayn34ggfHxVVzCggGvfBwwynLCGZ",
  "key19": "2vbP1YXHFnzRh8c2CEk8tPc8NJz73Bw9YDTKyXG12hDSP6Qgkzfi7rRTCZE7kw7x4g35DziBLAJ4nkyuBriCPXEF",
  "key20": "5XV7KBnhgugaSapNoZKKegiunAWEw6BUDiZaWMxhFpbsQ795S9vqJBYq5Ns3ejzd7VswCTguS3RTkYM3HygetJw1",
  "key21": "47hev3F7a335Fos6aPjkoSXCMY1TWDB2HgkBGBxW154eiWenUBCKyXs4BoUxpEzbaB72rakTAMscYs9iwXucywcS",
  "key22": "47sDRrRwgY4rpwys3wA5iHWDDnsrcqfGUDpJ3nrQiAFbo5eb6DqdkyzzX2W4pF1LvmBtYzNEgd8n3jyU8cUywSfc",
  "key23": "kft88tJS9ykjAc4yKHdvN3gBfhWAbs4BZFsRQ94Vk9VSzStzq771ZXCAtu1kdJusUKXETnmiTi3TUbD3ZhLZdzY",
  "key24": "3wUJHNvPSDbjSuYxGKKbHn82D2cgKWm2UVrSK62A3BtPEDcFHqPwBg9YYe2x1qUNQ6fmiujuDgyvAoXd5qCyC7ba",
  "key25": "4mCgdW5SCQ49eipMC8gffq764itBjENDtCJfNgq7R7ucXdSU2qkTHviDBkKEqLTytgNHQaEWWRR7N8v93tiMta1c",
  "key26": "2k8oY17zpzLWs6WSdDPk5qZsZrnyYDvVcFcAs4pZNZpJroASFRV1rHFXS4LJD4YnkFZWmrq79WZ6mZxEa6bSqbte",
  "key27": "5gHeZEfQFfgAEzCkbK4r7fEZYxP3WTKdfbD7YqkTTXtV6ZSZz2cih7uH2zQAEA32kSTwaDDDWk7trchcrVGKvT5q",
  "key28": "2HRN9PhfBuFpka4Yokm25JauLL5vffCWy1gW2n73tnArZNiJtZYMp5TCNkJVmKYCusr6W15JXgGY96c352h2ZWhT",
  "key29": "2a3KVGfomzD4yVCeqDbccEGCzNPB2vrtJN7eCBYdYuGRzhEFXhbuhAcTmWSX1rLbfG54dVcfnpyitPuvC86yeoHC",
  "key30": "3jqvvyxg6HKYX3G3UQG3JhLuU1F8VSJuCXAgw4ZKJSSnNropFqk51Yjf4sai24CZEM1xPgnVVda9z9UovvJJXBzF",
  "key31": "62Pz427XX1FXuVgLYzVyTNv9uevdqjuoGkG1ThGtGEuWkymAGfCF8ksJRiKQrJzwbfWYPyC41S4eec4YWYu9xMto",
  "key32": "CKtvwdaeETWbrThfseUJv8JwD4B7MYH3rHbFAzdimfEVfFCDrDKzik7riN1oqdXST7XiD4A3jBuZFDEMgYS1yy3",
  "key33": "5rEGGPwkk8rp5ZUVvKz7hrTpdCJks6Sz7jheW9MYJdyXp3jPMvkZexBvRDqztfpmepBpVgHGb7cvn3bb8WLhBDRZ",
  "key34": "4MNt89yrFRs9Fxi8SxfitpfR3XnGQMuK1Sf5KTrDfuzXXUh59hFRnSdnV3SnAJztQqmtdD5A5ekv8ZDAYb3owza5",
  "key35": "31SzSftyZ9k1Y8LXENUENvDGvmT6yJC8kQVFLjcB6fVrTPkcMvViJG2vbvZ7SfzXcRD8mxy69bwekkPA6W391FTA",
  "key36": "3BZpirr9EMBjAr3LEDoDbXbtCXpG6CwnxAAfuYR58QRDGFb2bjNR1BSf6gCi16MFhhZZ3LFBGvfU2U9GdznjpFwB",
  "key37": "3DH1kj2nYqQnoXDDZm8yEh6mRbkRZTtBdhwsYzTo5cGgrUieMcoiZUUsbX8JeVtctSim58zrNP5se1jv9QzzDhxX",
  "key38": "5uTMDMLu1yWQ2FAp3VRrceM8pnxxyV2AYyXyBRVyFfnTzvZ92sfiGhSZDyEoxT4qq7YvnoVojZ1iQNEtzWWPcntq",
  "key39": "2gdeSGLxzErNQ4uMo94uYr8uiuiuXjRZTD6qFFsdzTB7DLoc3T6VfZUfBys6uMra29fQdD3n5eLFHLVRs3FjoVcG"
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
