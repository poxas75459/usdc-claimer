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
    "2bUw9uZUFMBLQCLrjog8oXAxqQhVvS9gDhjJcbXZcFynvgV9LxxngXzntPSMYDcDqTL8F2JWvZW2qAYQw5hmwmUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B5nrfNmbQaPV2TJV6xhEXwY5C67fY5SJEtN6H7bEFcDDFJbDyiBxxRkizds7kMxkT24GWgADhbwhFvgJKDUpxxi",
  "key1": "2Hc9SmaaQZFqWm8Ax7wsWE8LCVbuYQBFirNq62SpiEfVa6mPjdqN3Yuxqhg5rDeKXEz3nt39WFRwXVashb3jW3J6",
  "key2": "3dL2vDxqDAYSJzozN2R89cW9LkPse9hktYoPrA36uXqFqNXPMU6fCMXnRGRF8yCdwNpZDEAMua9PebsmipsHuAfk",
  "key3": "7YNXfxEwoFM3atLen658Bw5EmdZYdMsfEf5Ff4kC4cfzPjoUJy3STkEsMcpMMWKEUAKkcweFwNXPzCw7e6eq6pC",
  "key4": "5DtMHJanr9TpDnbq7us3Heo8wZbUFZhjpy13wxApwC7jppJ27pGfdBwv2gDroLvJqatHivPzY9Bzy7zkGxUpbr7p",
  "key5": "4utsUAFT4kd7gRnGfuwGMdzuqJZyToMK5usQ23kAmtsox4zamRYghdbGMidbpyJsszBpfynpB5Y5ApZyNLwyg8kR",
  "key6": "46VV4ov7RGt9GfzxLHyHtYFE38R2ogZcoU5LNnRAZxNnUFQ7bfxFxkHHuVFvjpZ26GkCoEBncqSycQfBWk882E1h",
  "key7": "4EZp2tF6tPWECXqAq3J5QcD4RCP5zAzDKM6Ac5MTyaFa4gBWNpei2u2JMdYqYrpPCYdQCaAtDEsSm59AxZVgsxzf",
  "key8": "5Uud1dR5yLaqphBYtVo7FUtq1WgLP7GUAL19Wqqh4mDx3EFxBof3QJN171Gig2GFBugeYmHHL6asY9pMf8NdgRY",
  "key9": "537KCpme3g1jUNzZ45P44dFeJLVeEkR6ywL9iMFsHnteJAdufXfRCZpkr2eFLKwnQfoMrsPjyF8kAe7CTZF8qB7w",
  "key10": "Hq7MppBcEE2dvJ8bhwpzj6CvAXXygPpbeTT6BhsTARPsNP52J7zxnaAdrV4KzZjVNHH4QXNJytPfPhP6xVA7JZd",
  "key11": "5CXLCDMnwCFf5knqzebJ9vw84NDyBRaSve1tLi7vdZGWvBPiLE5DL4LnoidGz3zETmkfM3kAAXCShNPgHQTAzupW",
  "key12": "5JofYysoFBgCnUVvsgeHmY3pHYMAdXuQbxTes24vE5JzxSzhWr9uBaVBg9wqCoXJw8LGhPMjfnBQxMRefVWBLuy6",
  "key13": "Bvva28abiF1CbRMJCCUt53kEhwuMtqnXNThLFfmULC3jjSbFuybHC3PM9aH9qAY66zk5KdrPSqbfG4MHwedbAyk",
  "key14": "5CZwmrC5dun7dZuBg331osumhP1m7B1xrhbbsUMLyMNU1zGPQsqFggf97SrhV6m6WoBXczLCnMstXAFiA98y7gkL",
  "key15": "2pDEmbUkwdovUMho5tuG1pxG7Gd51qHPyqYQbecGuSSPzdxrGtAx5a1REZmBDJAJxTZFFSRAU6bunoFihfda9D6y",
  "key16": "iSGdgKUmNxhy6yjgCa7so5rPDHerhekokPELyxb1f72HAUEeCdMH8YtA9v7JVG5zraAfufVoqbSCfPak4BPqXd7",
  "key17": "2rCckX8qpj8ezZG68YY12s6zvWcrURmM8FXRiKWbGA3yXw75AexWgQ8WnD3PAztHNN7At6qGVnPdFvmawKKBJRvL",
  "key18": "2FJ3Y4vUNJ3gpYz2kHyb4qNMfuq9DqRNPQuGUKgMaXXYrtKa2vWFFHj67FwBL4UxtsNhSmmmeY5KCMi4HRuDeJvM",
  "key19": "47GxrFNwiupC4YzznHgWW1v48cnXfCgXXhmq6cUXqbPjsrgQWm9sGgcBWpiCqnfnRfb36MBqGaCxEoNyhxgvpwAS",
  "key20": "5mYBFGn7KzDq4XPTU9XjjfuvXCSJakyhwgrmLsTqU9YGA4xbQyi8AsTyR9Ru53oTvNRP5fq7n1M9DqJCXQJN9XhS",
  "key21": "4hscoM1CACE8hPPwiHhFkps1a9GtAWkzQdCh8e7nGADofXUirNJ3jQtE1JHUessBhk4oWjPKhcj5B1NNiQLgpnUd",
  "key22": "2BxbNjvjKghARxHKRqLxyaa4LjBBruVDrjhKEN9oBhDyChLa3eMWReCn9WM4aNzvbXSaGjMUcQjXDNgZVBqj61hg",
  "key23": "3jf5jhDWsUaiLHeQygLG9sJHn2FpcUqY8tB9U2WT2ZAu9RD7oP3kr9MdbmGeHmcDqhTFuSEPQfDsE2h7iBKfF5N2",
  "key24": "KtSBNYXuSi8aT4fo6ruYAoMYGi97wbXtX9oLz8j22gC1Fbcj7aNkugX4R9Y3hUSpBXmp6BaBMcho7FZ5ojLtkJ5",
  "key25": "38RQaSvBH7gALD5gc9xQGPq9Nj33stwqPBpPKugu7ESqPr3EF2NqdRhnJLUFZ2wAFp2DSqgNdqQVtL7hkUy8gwvS",
  "key26": "NLnqhZDJ8TBiB8QEiH4q6MUySsPtzgYtCAud4coz4PUXJxS3hSumVXZN7zV8VjdM3X7PbkDae8G9H58Ukh6xsBP",
  "key27": "2RwCLiej1yUV5wZVk2kFc6SPzyz8aFqQ6Er8iFVEe4VRH6uKAfXXZvXHNuZJP1tmn4F985LC5wwkhL8Lr3giMJda",
  "key28": "dgvUtFE2YgTq7hLFoNTKeTECmxmbdRrBEyqq2Q3rbsSGiby3niE4ytq7ppKijUYUHmtiEiDcLUTAmWQWejpbp3s",
  "key29": "3XaRmXsYxKdmWaz1oC2cCGTvgArhVdJJW7aLpSZAkMSr3nmp5YmDAp4CxgfR2WdDPd9UNQ1Kapa1sTxK6K6Ty7ok",
  "key30": "2Avqtuo33wzpaZRrqJScS5bf6uHgz4UbhwNJmBpYP2n9jD4wwVErJ4DVhJn6ScbX1V9RPKnfRXR3HCjPrW923KUp",
  "key31": "434KnSXWjAn5Wotm4VuuFGQPPJi6SVmJdfv8Fm97h7vQBnMuN84Diqy3uDuBRubi5F6g6CtPGDFAW2vYQAJdPA5w",
  "key32": "23AmtF4HsbDb16CTPZuQxuvYWBCnARk88vu4rjKXwqGLeAJH4fMGv45WmHK7x5qdrJu87tPFzEww9YR79AS5yAnM",
  "key33": "5PwhMWyBtqLzZJAwq55ZsB5ksingyLqm2WVmbvW86i75DrZBfc29HK9srxtP43TJPncvU5Ra4XWVAWbPXNi8R6Wd",
  "key34": "4fnYiSswjDyb4C6ibdAnefdqVrFzA116LDE7WJF5MqzMXenjTgkwPmhmWUmJ21XXoZKBuuPEL6cG2WFyZDtZy2CG",
  "key35": "4qTH5979Wf7tdxdJemiMuNMkAyiPj7seoJo3qw1o8dASv1mRyV5YcQcfkYCqzyAzEcTdzeeLTMpkKyP7Wnxj2NCs",
  "key36": "5QRRJjpU8BdLh7vS5kuQd9RNFLn4qP585jZcZcxM1CshbCdPzXa7i3aVuRgekkkuNYa5nKRtacn8xNzLGTZyJdE2"
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
