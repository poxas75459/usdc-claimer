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
    "2gjxZBaPSrWQSxeBfRbGE43SVktQ7xyritUz2fRApDrgAWgeJGy1asKkim2KyMK2vtJRKsfiXeAdYpD1pGf8PiPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5djYVgfvhkkNiXxyXBE5rCH3fHrVy9dvACeK6F64Hwxt1FtMcPAfq4pUVH8w7AupK7fCpTfrP5bTvfET7QnMAtfy",
  "key1": "4b4fuDkFN3YP8kYyYA185tVyvEMecB5Q1euruK6F2e9EpuFmV19Kw6aSXovRMJcP1RLiz8brpQ1dRGWdTXG9tgHT",
  "key2": "4dtZjPzUErGdh93Lc6YNtHihYfsxX5kGmKDXRc88ByJo5BLD5ieWSqhujofSejcJEgHa7mrXdnrEYtwpiUPMsCJ8",
  "key3": "2GTDWFFFp3WgCc6mUA6W448r5GbctWXHfkosb47spmNb8oCMFQrxHg1NE3E5KQYAWmCYimd7fwSWZ4UV21PTz2aC",
  "key4": "4aneVNVzQsZ4m9GcVUdnzdPHFtL9b1cxQCQ45gjDcKUUC5SCykd2EMAGz4h39XwaZukq1YaCgVMVPh3yT5rMPoLD",
  "key5": "2EPmEV621eBYjd4QLji4RRfth51GjAT8yqan9EvwbBZXY9SSsDvuAML74ZFNSrfzcwQUuHGnFRMuSbaZ3KePqP9b",
  "key6": "39eEpSvfG14hnJD3GqanLUj1LnBinugNf9ijv1mG4B2V8hY6ztzdRFq6BZ63ZKgLRZVuAeBjFgsVr2V9UDDNJDQT",
  "key7": "4BSsdKsko95RkWC6q4Pnwkzdxbipr11jT5SDsQtm39UKs4293D9vgevoj8fgWwyA1BACkGmvaaHY5PEFmv7TWpG7",
  "key8": "tdCwUGsS319zXnFDSf8SpLRdAoDu48owYkq5NYVPa3X3dQPy6fLW2XG31vpti2wbfGG6hQYTdeaNNRSdrfyqYAu",
  "key9": "41EigRBd9Ai68zySLW9iXnVo9jqRfG8b72HKu6Ffxs7qTEozhsyyv4YaC19mgd23Zv1Disq8pkV2fx5n8fSoBuAT",
  "key10": "5aj2SUxJ1okgUAjceN8dqj5ak19bzJLby6kMjmzcy5kGbLapBe3CcG4bmFjNxADqDaCeKtXYQPNnVZwrhCzsYvbk",
  "key11": "QSNvzXayRcJWQ67NygDVYmYKXTrpHei6V46Q7dW7Jgs4C1yhn1i38pTgudYi5TtBuSFW7mMkFtCM2FTP7eQvsE7",
  "key12": "nhBsMhwcJKJu51urbWYb7ka8Kb11dWCZWGhVg2ns7eE4bsQ1X8iFX2t6onV4mWKcKcyiXBeSV7sqswEDkTVgkCx",
  "key13": "3TiFvTnz1jAhdQ49uxJZkSSGmNkFhxGU3SLDs2btpYs6XuzpJLUZESwzoZcSghxXnSBJQcvuCnT8VrTZsnDrM26L",
  "key14": "2kScVXEeHNK6ECDQzVmsAD3ypNG9YDQVY1QZRc4Dhg7qXPovReFVZRVsuP2PSWm3tPNGTsB2iGMtpmhpnkVTTvdY",
  "key15": "2uWrwXNs45YYXLepNxirRNTTacFnaZREXV7XhhbPpkSxSxKFRWhNjnK5ACs6aqznmA31p3A14YjEw48tVXN6dZ1W",
  "key16": "hiQgdZDJxp3t47rZ2VzY5DyU6e3tchWZtmgpWWvP3DyAjNdn61W9odGHC3d9zRD51oe5ki2A8Yzjx7AUZT5S9Ud",
  "key17": "4Wks7iEch8PBBuEZ2LprLt7Uab5spF7FAz1KZz5xwdGCQP29AFDUbpLVP64bHYP3mw484prRFsLTeJvTNLzihVFD",
  "key18": "21YG9T3dRaJHGXEkmaPVMPtcvaLXRTx6rAL3WGkotaxfHvMkseDqMubsuB39sxr1nr6iVqjj7BeE3Y1LV7BRCqLF",
  "key19": "3CGK5ermpB7fo7YNwzFZaE3riP4Ju2oyJKbzp7ViKghEL9CWAoqEVHxLQRmQ2awjdcMBDDY14tqtbkvK1VyWS2Dt",
  "key20": "5xVSrGeEUrJy8cbPSC5P36hQJCG4HapGo55Af49nLfe7Qzhe4gYw5gWgxLyb1aEJjHNTd7oGWZnTdP2c72LDGFQc",
  "key21": "4FHo2Y9NC63qMjdYiEm69v6h7rtKU6E6q1Q2YMG5wtBcvLXaHdqCgweB4ybRomvG3MnrKT5kanPdWW7drHtLHq51",
  "key22": "34Ju9R9GvfCmfWbi3MJrvSsXsgnKtQ87Mg7Ly4pyu6tpw9mtP7ZamrMtb97Q8L5g6jCDAoyAXsV1xwe5RpFzdQCz",
  "key23": "5nqoEM4LpyG8q1RhEYjE1KAZBc8Qdn63HVVSJq6mYuFdescQHAQYokqo5frBpSe45d5qgVZJXcrcPA6Ji9ePSqAb",
  "key24": "4zWNGJ2GE7fFrJqDhP17t6FzGfvTWNuCSKxvJwhpMZC9Q5rsHhn7wmFWrSMiTBoj7UZbro6hWwyGXLYT6LKfcVCh",
  "key25": "uRZ7aPF2VHpUuii69fAQPYTjE75KeWceoBjTso1zXTJG7vyhUC5qbiYMcJjwF1UVfteEiuvivDDXuBc56TLHdDA",
  "key26": "62ZBiheTCq3vY2vW2f1pPNFc6BNW4QxsAHpFFZLb5vv8zBZM3KyqPYWD5szzAWhH6DrLbyNFKfmFPnLneqM5henU",
  "key27": "5R6yDMs8nUEksi5Roagh3g8X9ZL8TtwDbd1R1bMpVDwU8aTvLs26SzDRNEo4rXyrEBHFJLmeqtoELj9KWyNyiKVG",
  "key28": "47Vm1gGLKiXrCJD9mQ3Xsp4tfifTDvpZXnqgyiqWKs5MipqBp63cA1eZPKkpe1qYdjfVQZVWx5e19ttg6aamb2ZT",
  "key29": "2iQi4VfSufNQNdX3L4R4ePnqkXsRuu6VrzJ5Aq4au6oz9W5swJZxmpNZXxAizqMtgpN7JHBY3ZXLrZ4yE8j9SPW4"
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
