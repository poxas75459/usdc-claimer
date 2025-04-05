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
    "29KXESirdEXptToTQEayVJHySz3jjw5Ect364qnbV5ZGTmxhUs2Fm95fayNCqyfmmaSbrekybn49GroQLPYUVMUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EWuFP1KnBS7xf2opGuCgC8bNktwApqQhTY5URgBU71ypDEomCAGfMbJtVG4KPmBLk7JgHKwoCUWmeSqaGUcEozs",
  "key1": "5hGWrDmw8CSMWwupxeTAXuenSKU6FcczcJFFBeskWryoapBjDMW1ddEaLzKJatLQvNYdpLzpV4cVNcyXoVwfsjH2",
  "key2": "5bS2pZMhrU4LFKFZvbSbTSFhQ29vy8MRpeEsHDHC7tmbbbmgQf1j3AEiLPWP8kzSXvdoKFrmzfRSdaGWQ7cis1jC",
  "key3": "jz8df7GiVMbXRyQPoXmH9oZnG78gb7ZkHv8Dy39HdPBvAwGmgQL3r2yrZc8fnuFmjnqtgN9KD799eDKFiU9Q33f",
  "key4": "3rv8qkvZXYx1ZnrPakWtRM7aXjgExidfsNxQBKNZkLZRGqwbMpg9ReimD7eE1Y2ds1GYvtHbEZqbVEc6JE6KTL2Y",
  "key5": "2FN68YpZnJ8qtTyetScjgnJX3FwKG1tdbYu8z9sjReYu2hckydFWCjkDdw5x5QCGnSUi4b5i3HQagE7JXNVrVdtF",
  "key6": "5zr9o3Mzh3gxcnGMCYuzC9er1jQPqaGj9rX8Ms6bTSLRjeeiCPT9UjD36kBxHXPbo9z8gc6gqzxKp75bX9KtATMJ",
  "key7": "4vqyg8S9TCGvc2gDQ7hRk21GN6VQWeUSUyC7PJMwgA3TxpKfNMJLGFoYRgoBXKryXT2qzG8g4WFBteU5sGA9y7PS",
  "key8": "3DSgzug7JFU2uqdxMgv5Ub1doTAjK8VJaoJVGKwTzyVjkEiX6VNc5osvBVXErVtFX3d8SrjrL81k52NdG8an6WN3",
  "key9": "4xE5TYj83DFAN7vgpytAAzDVpc4pBDDw3Qm5CaLUaXMJEBBVcbzbNDF9PYn2G5cgiJpvBDLNzSfyfPS2RpwVB5Vn",
  "key10": "b6584bFXBxGS3NcJecyEdVUVnLUQDBeFKCe2kjqGzobpw4UfLR7aqWpUkcBjnZHWFQg8F194xeJfVhpSnTMiNg9",
  "key11": "2TBBz1ZydwUjoBjpRBkZNffbiLFphTQRFhQvxAk9Ui9yaJzaoNShHvMPcnYmweEwPDb1oJ3Q3wLei3yZZxkFrKkq",
  "key12": "LEqTvSHUngzEUdxW9YWJm92UEg3p18aieMrS9jj62zorsywnc2PuEZAzBAEYWNr8eVSF14HrMJzATXxgedaXXuk",
  "key13": "g1ASMU1yUJ3Yquo6M8QnshvFTgG9YoBycvoHTK3XDvKYQvhtAnMWAkc2PWi32Ja8BoGgcBucfgZAsdbGdbApaYe",
  "key14": "2M5bQcwd6DZviKee5G8Ggbjbx53aeT4uyZkEn5ZopzjLxD5fTSiNaycZVuMT7nFSrW529ekoF7drXwg2q3Pq3WRA",
  "key15": "2S1FavkmpYGNmEcqDD5qNrpAdtt4m6YsmQxjWtzvpp56yJJ56sXWgZ9wSS97yVPbVFixxEsUxR8vJ4zr5qLv2AFu",
  "key16": "3G4dbsvBShLTrVCakmcGFxJwtnDQKYjXMScWbPrgtceMu9iwYN9jkM8tqJXFEhhfPcRuc6SaMfHfJ8rvydmmEDNz",
  "key17": "2QmmgWwRN9SVdBtbMt4B8UKrCcFHywtZ9qbAM1nQv5e6gF3qEthgKf9LpvAqK129fpBdNaz7Tx4u5oJh9CYXhFVZ",
  "key18": "55EbAMVPSWXEhMCoMtaLbMMUcpfomHdWD4tvbWGL8Zon8JMTzPtH6hr1x3T6F6atYLssZK9THgWwiaEsCSDsqs6o",
  "key19": "3GdVyGD3SU1M4YA6dZjZt3Wu8qDm3Jkn9pfLyWmzKVVNRKkKbQtQfGFfLAoyHEHcfVSGwqx75EsxYfdYcQmNHSEG",
  "key20": "3RWuuv3KmgN7oiZLXPoCNuX5fagZtVKzrx7d2rwYCuv7vDockJCkGDY5NniLzTsQc3F2doExgtfrCazML1nMc5d7",
  "key21": "4VmhgrtGCq95tr6NYH5HbfYqm1Jv1QY594n6y1tyL423MSBqjL6tB7bkWe85YRaKfjsDkj242uVygvKGuAmsgYeu",
  "key22": "4zAwomE7kTSDtrPsnKqFDDgU5x1S5xPwGKoJuvChQYzJ83yudDh8LEtc7ZKGjbB9s825dS1haTC3n8zzJwXheDQ7",
  "key23": "DDftvQ5yQrot73rFEvoHhU3RaY7weucHvsmY2arXeTj9cjY1uRBX5usDgUzUabKipmqyfzdU2FCE1dRV2KiwbCx",
  "key24": "HT4ftwhKE6X6MmqDHPNquRE387DJyyL2c3weHL9nqV9qBRmy2DKrJ4bSkDtYKufid3visjuLhAoVkDdYFz1p6qm",
  "key25": "3W8vTQb3BJF7BvvthcaqNvRdVNipEPJrbUtM1oxHq5cApdg2CiwtHCFo7vrLzaLmLLjd2EEAo2NXRgR5JjgGKG9",
  "key26": "k5knwuuF8WenNkHcYjruuRLwpRtXBND8Z2CjD3XzbPSqo8WCJKNb7VRc6PXipkH2v4rS9xg7Q7oAqmsKosW8zfR",
  "key27": "5M8M7EKhmVcS6WckBAcRZ2dpurRwPQM7Qr7vwnGqq2Rj6C3qBBRU1YFR7KFeSvbn1zq3ss99VrEkhP7tpxTjTDfC",
  "key28": "5HNrhCnbUzedwzB8xwonAKErsBkeBr6evDEddu7uaH2Z81LsYCHck8TFcUaa75ixWKtvKbXG3dUR7qfxnh25dWAh",
  "key29": "3h4YLku8bJUp98bErgcBxq9UwYgdWXgCLJhvZGsuvgypVp7SFn7ATUGZVr9WvTpMpkhpDnM4ucfhhxXdbVDgh3cj"
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
