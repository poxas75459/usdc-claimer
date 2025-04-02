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
    "3ZhG7bE1aJMUbYY2v6KPyNt2u1RhQ8XpX6JHgEe2VaM4iR98sqhaoCK4Jh15tiUBEBt5TWsp9ykShy9zA94vKsbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UAPeyeLX95SpKsp8cHDPvh5VADYv9GbejHP8jGGMDHd3eUTgymPHMUovPq6oVKFvir2ugSG3UZrfd83j2yP7T3r",
  "key1": "5pjTNFbhjgNFb6wYS8xqXq5QG6JV96xi8ju7mdVPKtpVmYGtHkFLkQvSsWA1NYPM9jkqKiefDQb5YVLwiGu1govr",
  "key2": "35UCrGfAGaxU6zYpaS8CB2Wa91fHgXS3XFjZEMGtTAKr9DDvqAvEjWMPYtfVcZJnnEsQC9tj84DQMZc5TmshEg6F",
  "key3": "KnidmcnC4Tmj5C2TdkggVk8JkH1mMtxALE1GJ2BhwowcUmsywANiAaVs82tPc7ik8vpP5epwV78kMekHsex8gXW",
  "key4": "4xvxaChws6Kzm6VGNEMyaCye7UzhXtcC1J16inieUBbQjxaZsgnYeviV8z2hpcGj3VnHyz9EAe9kHPNP3LhpjBDN",
  "key5": "55631RiHYqNQitHuwEhBRrc57zjGSxobz2eQeJGTSrsqhSFrRRpox1ZmvYbNPpwZ9BXpWrcEQqSbf4iW6nQjVxpk",
  "key6": "bWN9J6UDgnts9f4p7Doa2XLmsSfPxYbgLEqw6FA4XBvFP9DF9x26S4pSZSqF4dBAeSr9dzTqd1BhaGEoTri8AnZ",
  "key7": "5dod6CLMr3uUQnYhgfigApkHFV8WJexSbTuVvnkNSojSifzQke79KSKRT5A9K2DHzd6upksge8cw7FU7osxCbtRi",
  "key8": "5mQSXuPUqeZK2fh5WWyCam2Nw8rcDmXGpyFzDytksiQLmdYzMwX5dkknaYZUzhjXNQvZ5VnKSkcS5ZNcqxuwf1t4",
  "key9": "2zWrNeE4dmELsbmsGe8ZbUwMJ5tGDySvzRt5amCYJ6EBvDSdZUpZ5yxCQrwr1fqH4eao1yY9bLexnacZXLkHjdrh",
  "key10": "4yYXJTs2Hm56H3yGcvsfztXvdL3gHenEzTwgntaThJgv3J7b2YDmnynXD2RHR1AXBAeBDyxbWNkgiy8jDQEDCzof",
  "key11": "4YgqHcw8cy1aN7rYii7tAaDySsMLbHGey3EWeY5J2vAo8vsL9ybr1vKZ2LtKf2YQJURjpHW6qkJkkfZGwHHeGsKY",
  "key12": "6yD4WP1RjD4D9jxZdZ6jVJWcXi722GUR2GGGtC8YAydjV5d5wa24kSyYwR9YpamTHnLwtM2aUivhxLjxTyLUTvC",
  "key13": "26SdVjeHkPdcZBrCzWhnyZxHPxVsRoirnSrrwxchwjR1G6A14xgwPrFcQLUwzqwNmpW4JaGdykQDKECnt5oX9vYo",
  "key14": "4AakN3vk3JeFxukyz2iC4urLfyWfPFZzqUyb2mbSkmFXVDM95vv6wa9PhDxvQ3dEDaMusNtoiyJJ8nMfC1VMuoq9",
  "key15": "67GDxGZPmESbdRFgAWMYfMSu9E3mc7eY5d4TpwsMNYAsfxTHdsnk7393MPhK7B6PJgTXj9GuwdzQxzaWCDJGm6Zz",
  "key16": "4noCDyvx9GytEjUP5sTz7nwwmWYmn6g8kJ5RzbeKxqEsmyPi2kfXEp77ChcyQkW6bCY8VZaTxMLTAFRmcfp6qqXr",
  "key17": "2kjXG1EH8jQMHHffk2eCsAk9bQxZf4Vhp9Jdq8MyqXKGvafjQqcRxEBEjfv9qMLqRr64WSAJvUQx9svEV9M58kLt",
  "key18": "5DcuhzQYwrSKN4uQTsaFRQGLGNTiDW1wu39sY2EezBvfJVdej6MF1Brhz1mQmeZnpj5upq2ekJfpbEBFnKW8Q2iB",
  "key19": "2hYSUDiwUz2M2j9iQTc83hyTkEqvUxrtco7JPTMaDA9NJd7uBNs22DKT3ZLPK3XiLBpEmWEmEcmx9YWjtk6XVf32",
  "key20": "5pgGDLzSgPWWqmQ5PMEBEV4Jc7ixd7zkmgZcKVQU5jMRqEH8nCeooPFR2hW2LQVnPrv3byGEZHKWh87qpTdivGST",
  "key21": "4xwXo3DW4kJ21u1haiNQscihzBGwAhxoCMcpk8eikkjyiCw9tMoyJZYqwxGkBaZvHiM4Ajw6T2v86wPfdcUYRPb4",
  "key22": "2nsYTH7zimMRSox7jx2c3h3sPpPT4fHW4HRKEUhqfLzof2N2uWdtH4VWSEwoCGoTisBSB3jeZKrDUpNVWJVKos6M",
  "key23": "jUgHFze1DrB5PuYQSDvaAPhmdEMkyn95PzgDpEwPqi54AAUhQUo7YxuPxVDSbHE5AsJH4dYqcpNg2t4k9UtWQLZ",
  "key24": "HSXJ34bF77ixQg1zsey1Fc9L8vZeyyexofrBrc98vjkPfPH2T27qaaCk4Z7HjagsqaRddQkSUvampq5AJLsgtJS",
  "key25": "LGPAQuRL5sFcFenUKVZfi6GXUak1TZtqTNMg1QFUQRy2QASu7mhckYNY85exC4BB5gNMd88kHNToTf8SsCLTMuL",
  "key26": "HEGTUHw1kUoBcxJebA13oUWAgggMo3PVhpNWXAeUuKa8X6tiPThSSDuQ4MofT77KZ7BuSEPxNp5fXSdW2qAQFMU",
  "key27": "33otUvtHXLmEny5WVPYXgpUiFy2CbtGQT4R6mULXekNJVjLnq99WGFGdPA68e27mp3bZSdo3nkxvyRGPxKUnMEr7",
  "key28": "3qoikjQLhaDQVi8K3dAhhjVQz1KTMdFFaye9b7GuVhL5L8KPD6n7ExXL6N1G7KVQAyKfRYg4RjZKhAaPMQy45K6k",
  "key29": "2JtPg4VbE8y1pmzcJgSiTRv7V8G4bFT1Awcc4vJ3ur1GgFYXCfRu2RoWw3KUjsf29zwsveDpDZmWZUjEUYGH4HvM",
  "key30": "4EFceDtACMzCJiyh1qGVeqnKK3GnRJa1b1sZoXnpR4PErRPCVMAXZRHvvrsdkjA3iobsvd5W5F5iPwoLcWVNcETM",
  "key31": "4Aj6RCY5o9dXKccErdET4gduc1ic6y77g5gqXKMfAHNscck23yUVHSAKBiYLDjgQYegAhAGVxSb3HpK6v5XBmmJ6",
  "key32": "5W8AArZiL2fN1tikchYjqRaTf1qbbbPZQQA9dHWxqdmHKBS6j42ALCed2enRezhqCsWp7hKbtqUCkXWLZsZbtfA3",
  "key33": "pah7jaaKdWW759NMUNfhXAgatLvdEnuHnW9WUn4PmYagi1DJT77ajyrTbLoFU79sHfXz81UT2uBNJ9Vz1bdLcYG",
  "key34": "3HX6PoAFFdsvHJYr9TiGp4BaAS3jcNoc3fNJYLJ9ZtCgHtCYkRK2rQzydKi4DQYgcVAn1PvHMppgoqxz2nvjFXCS",
  "key35": "3rivF8wr3YF6G3zWvGGLVVBEEZCuj23CwnGpTGkyL8aEL1jKtDrHNhLnuu5sAQ5guQ2Ynd3NnKFhgNdjGaH7LxKM",
  "key36": "5yNRZUrafQfbR7L3xea9aGq5XQXXeZd13Hq9anHShfF79MMnPY6gwFi8VWpVHq1dUPt3nPBK49HQVrGbRUsFnQYm",
  "key37": "22k8GSg6AtJ9KYwSxCg6q9XkC1su25hExJcEDHzo55MxyHzpNRR9wHg7kDEfGNBcQB5Ep3X6F4WtEfw4BQjRGhRi",
  "key38": "3WnuA3oJqPrWJotE27YY3qrJmkqdm1Vjs28krKqsuRqgQjQSSyTgXmwXzTm5GH71N6RgJAngj6boBWDFR48iq3Co",
  "key39": "5a6LkEXKwrFZRrzukUspwYFNw4SHXnToFJBiooV5HzfiNjcEZK1MxqyncvMjceSCzz5Ww1dtJmFcffcSvRAuwjSs"
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
