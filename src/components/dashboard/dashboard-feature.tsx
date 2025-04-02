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
    "5cQz2ptEgEu6yhcVDtxJFn7bdNahBxQCvDn4A5c113iPsogVqgHL7EgFN1BkBivYxXUaNiMosuXnDTj9WpteQGqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zbk7riXQFfAW9hgyC9LjDJVjzY6439E9Nwyz5K3WNVUo72xZERRDPAVGtEM39U1H5rfqmEAo1r1KFxhd4tkVgzP",
  "key1": "126pYCLmPuhKKobSggWEDngyR3obfmGkYnob6KeGGoHE9Qi2vZe89TMrraR9RuVWorcTwncZzAeEeGKGHqZhabRM",
  "key2": "Ufe2W2gtqqqaQsgRqUPRd1DS6XcpR5ENTVuXuEixTnwDfofbkuruDvMkJEuQGXZjKwNuZZmxQrSaWRkY7Ui1wKG",
  "key3": "34nxo4S3g9nDAMFYzNqqshQMjoXpCt1pDGxtam5fiKAZzuqnPTyRVxgkmZGF71mvkU2RvWwmNTyKTo6mYUcEH1AB",
  "key4": "3yKyQsNUpJnVcv8AQ8Mvw82Kkjpi4giiFAUJHUhMybCySPfMk7eXM6HUGzRv1ymYZ5qL2x85SsDcNAwEP3sHckoe",
  "key5": "3w9xGBMWrXF34e3z8i5ep79WJrjRFZV1Uh8mZhuYvuHcfNqQphKeYoGd9pyff52bgpd8sykcN8xM6r9B6SpsUitQ",
  "key6": "5Bknsj2W1wuD8RySWxrF7uMY4nnn813TGJj9aKtShnxkAXdjSAKgihuARsX443P5qJGcoAzdZ3kN6JEa8GMCPWJp",
  "key7": "3Y4b4vNqfRQRYjbkDk7HYfNF2hXqKNNsv59uTVHmbrKL8oUv7XJMkCd3UGBWWs2yQChrUbqZBpSqBKBUbW92Uffu",
  "key8": "5CVkQunJJURxN726mQBCdHG4VAJamRzHGjTq45zbN9BK368N7cN1G5sLPhfd5DQcKV8V5QTgkoCnDjTxbKwgUc5M",
  "key9": "65DL8WBu69DKHEM9GiPGzb48eUZQmbkMcvBtEW57LAKMBzxsNjhuXPvob7bU1uKHqi8bivryFLkL9feWEru3pNhZ",
  "key10": "3XFXpBA8n1XFL4uWmb5jC2Gj2sd62xxWLvMMs7eUHu1YDCB1FLHFrmPp1ZSwp28XuXUKtkCGu32YaBPvTX1ikz3n",
  "key11": "5YZLhfjT1ok34sdi44nnMHepBtWwsMeUoWoz4zvZvkEBw6UhHZyS68z1ipETe4aAZHP2U4qKrmXLTevexL8t5nWx",
  "key12": "3PXzemgy7TrgaYjuSX8tAwwRyLmQQ8fUayuJUya3ehqBQsM1L6uz3MTGhj4Zs3zcAnHrd9r1uFdNiCPE8fkjnBcC",
  "key13": "QfJSk5pXRRrFuyHWq3C6EduLmjBtvTTqezoFZS3f2rxPcQNHiz2MToiKPj5hEDyo17GLyGfzFFt2AACEaMSEXFs",
  "key14": "32NM4eM1dPd7FJjcHXtzRsrZhh4YvmGsSbBdPVgHFhRYscso82aW9G4VuvNMion1LY5rxemZbYBtbWcXmHyyPpBB",
  "key15": "2mXiBX6uc4kAShA6mnLpbMHKFq5iRREHS8pS7gF11BrMtXEuywr5Se5sFKCnEtq5MaiNLoHp8MSDddMt8PwXSMhR",
  "key16": "5ULpTuY3h6PqTRAaVPTTx8cdSYZPRLYCJnDorRTMc3rtXJ9iFESAsNP7m2mUveAZNQni988uiiDLUfTfGEhppKr6",
  "key17": "4iH7cDoe7mTT5ejxcXahPp4QMusNeQxJPzTBzWs9mXpCA6b7c2TYpHfTvmPpCu5mYEtRCqERNwUGwWxbHm4nqY1y",
  "key18": "FByREExcTcXQofcHs7RK5uDCBZVegoYhnpRUVpndGw4LDqmyL9xtBv3Ve8ifqV6PHyN5x81AitkiihrteGRufVM",
  "key19": "DxUQwzEG5niYhwvukQJzXSV2xh6xmS4irFL2cFanbbJaCdwidD1QzDssvb4BPL2GeoWMrTFWLbdhQoc13Pra1vF",
  "key20": "3LXr8uxxU8WwEqNeduZSrjiH9P7aC8FQKLhWz59ZExCM6WKa7ZcwcCBdcm4H9CmUMyRutjzYkNizTM4Z5iMp4skV",
  "key21": "2FdJVsy86t7akV1TdFq7wUK7uS3K1UFjL5TR5JEoWM4zaQfmaeZpt6QrqTQDSpbNa6yYY5iFGCqLGF81gZApfdu9",
  "key22": "3cKnyKqbbFsBamBv7gPF1g4z7dP4kPti3xqSW3rJJgMZySUxscCEHeNvoiJPC2Dgwg4bjYLJSkor3BFRLSeLxAG",
  "key23": "2KVKmdZJVS8zZFDQ3ZPFnAkq4Qbk5crZa2GsKsDv9xDTeUrdyF1pGgFkwUowZSXqHLPG7VV4nHVsPXHhz2rVy3vz",
  "key24": "2ktvBCda8Ejz3akwg8xURqbpCBkmKhGFx3t6N4VWXkb6kSZ7uxQjm7DP5RjrLRp4B6qDkTgPJtEFPCFNEeNoqAdP",
  "key25": "3RPLrTDRJVr3A4E9ZdNtPGugMoMMbJ2uU4ccRj7DgAod9tanVcx1Fo12UrFkr429pMahudDhDM6biFv1E7vPrDg2",
  "key26": "4hKfoDZugiBxcBj1YNQitDYoKXYRHNj3HCYByjW9QMu5qVhwVKSDbmUmKDg1FYh45HMKjQKpLWZY5poCZP5zn4og",
  "key27": "MNzJyMQgve1xRhnFZDFVEMYvujohL8tPeSXUdXUvzpVBbhRAA9hNjri3KY2tqMdYyUBS6xHKeyt2xXvBuTFS7Q8"
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
