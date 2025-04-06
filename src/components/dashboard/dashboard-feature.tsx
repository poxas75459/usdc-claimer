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
    "2aY3GAtuQSBfPtHdwnpPuNvQYV9jxRG93q2xyWj3QNAihL7B1TDZSvJ8C3bSiPM995S4687S59aDG1gmUky9u5bz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AzwmUe9feSUpXDG31u79g6yEngirCd1SWQhuJcUxLcCfSPhGeqUk7SivbVtkAg47vkadwE62DnqsCAZdsPdBgL7",
  "key1": "66fa3NqbqijtzJEM2CqacfrwKsZSwSygaU78S8Vtf4wPTBxX8GcSVpSAusTDX4YzdL5H6ksLqU7GSAyuP2CKGy3v",
  "key2": "4n27syXKSXR3Fce2MGP9aMv1MatbVfqgNbokCTyzEG3GNaom8B9HgCFFk5XWLHBuubQfSPBJT3qLUhAUVZRr7Pa",
  "key3": "5bdhCNAGXBZxQGeffUVQxGFJvvq5gZfcVUThJxfnq5SWmyhxdmhUTLtw7fHqACL72H5iWJaBkNn9XVrwjxEEgu7b",
  "key4": "5KaVFby5GMsqoJM2GZ99W1gadfUBvsxjegHpa7zqs3nEtArZ1rbEt8FwheX4jbobb521ZJn6VinRpr9uddGJ7xWz",
  "key5": "4C9hVz4gUY1cL7egnPD7mmt1N1VHsubo6LvrvH7Nncvpp7rKgjkyM5udvUi3WhXdvhRAQbHywm4Uq1wXTHwj1qSR",
  "key6": "4333i8MReds1NfeW1wizispawysFMuay8mSFJvj5bJjLtMmraTAwEXPjzwrudPC2j5TZLZYHenrPGDXrUmrFfKaX",
  "key7": "53g25C5VQVqGKTd2B6SVZq3NgYr3WVjcJYUV5QMzhu7ckki7dSLX8XukqZjQtVXtDYxqXwLt1dcxrQTWVejTQ5wU",
  "key8": "4NnHdfKL8PAhTYBVax8uA46BL12k9faQBvzXUiw1TqX6VjcbbSpChWbrWoSwPs3XRME3E3RzX5H1yGZj8b2VWVdL",
  "key9": "4E5VTQT1SFenX9v8VCnw5A4B42m2azxjMftYXJ6X9ra2uSiJR56omdpUbJ9ccmhqVfCFqkMHfMHPunxLEDtAG4MH",
  "key10": "2vC8diidzfTb6zEPbStcH9bdSKVuWLqGyq1bsVRgigtna6XCScBzMNtrL6JjKb3KhpWhidqX1dhUn4c55U1GqfX8",
  "key11": "cvJGC2ifrb58Kxnz6mwJhNjX6SP4BBdtnYChumG8R4MxEVTdQa8q7CNr1TGAmveXuAaFC2k6rnqaJ6wH1fuq6GP",
  "key12": "2vhDSddhCAHDjiyLVSck3FoAgzqHdi64EDuQ45gvV1dNxPvp7wSNDb8LZfQbCaE6rnXgHg7qF6JuTyCiPosq2PRD",
  "key13": "374zCBVHxp6RWH48HkTa7kk4N7M3aN8UwjUg2T9ZjDoteGFABpQ5sSgSeWpyS9qntVfhA9Px6dPSN8EoWfSJXYpT",
  "key14": "4aZ2TzfbY32omY548N4dRC7Vs44cNzWu4cDHSLfFu75MC5ZjG6SdqJQYVfEzoPukTjbKrBMBPCnA4BTvEr5rQRrT",
  "key15": "3QBinfmg4gKRzJ3ta1DnbQ3jxa7ixGrNFK4B6FGBPJgx5wWW4CAtnpoUUZF6wRCxaxkgr6dsxrgANrkLt2m3hPZg",
  "key16": "58Wqp3AYTULe6p6vL1Ucwg346HygQHRda1Pas7nq7BpSV7rC4sT9RzaWC66BR6UXmYoWFxoCNFw8hHt81PFsZbfn",
  "key17": "5qP46QeUtdXPRQBuX1pZpic6KdqP1ZZNX6Xgvz2GRM3DSAoQ8z58NuvQmLSef8Fh5xMTW4hyiFHPYTdEmnLNnt4q",
  "key18": "5fZAupDUXM84GtqgNEPJakzEv1B3fe5gnJdTS7VeAn59RccXv23AiEjoAQxLX1faCvnRg26sgxWJaV9sQhuV3hE5",
  "key19": "4RmSaYd1i7oefgYt5APvBHnQ29BQxEav2aSDWjaksL8rXbrgDLzNZ3uEjarR8aNf1bDKLNHsy7suNyFEpJ1VTAgn",
  "key20": "3pEeBnqCHJB2fvCSzb4Vx8cnnErpaTXjWRbUgXxipeJ7xFRTL3ZMgCEFR6rRNVYwRwMZSjUN3nphnTVdCf7s83dd",
  "key21": "1uaH99syfuUakEPRR5kqCdgGs7iuzCqTz2wC7vUvjvQTh7LNk8ZzVBG4mM2z93veQd2Soz7Q4rZzVbdd21xjiKM",
  "key22": "2JcZiETx3n4fWWwXRuW5KZyzW5F8jr9cavZg3AHchFUns59aBEYicdm4ZnAbuhpQBts9sDDuY13wegfoPAmTaXNo",
  "key23": "3p9D3FTzf4UVdbCSg93d3pPksGRzewuSGcy6GJZxvFi8BCt7wAE69MTiLCEyuJ8ckFR9wMQ67VG98qt7YpZ9yubW",
  "key24": "4bNUvUFTzFSWBfeU8m6hzc57z7Vc26TH6gpWLZXsusWdWjvLxLV7JqB6BLeWRtkwsbWH3fDsStx25isNpemEwXmK",
  "key25": "3sxGMMGzYfqanH4bWqnECEq8C4x2DL7KhpTzPhHWa6Ki4oW3mybBobxQCsTn24UkPtimjgXqfd2GoT9Cv2wzX5Hx",
  "key26": "23vSZg35GoyQd2VsvRFkSKVzCT9x9K4iNv82P1DFFV66m1aqqXQzuSo9ETzChfNVC91oACFdfnaCopdDkVzS6Le1",
  "key27": "27AU5Re6Yw1WXZKizXDAj3L5F5ZUvfpRCVffRgEUpd4AhwAhWbEndiThY9Be7S7sqbzok6dhxYgJBgE4HjdQmQPG",
  "key28": "43QCRohTUsNxH874WMJKNsUcj3x12jf6VmuhBVMhvev5iC4Hpb2E1MbYaF5SnVUGmeAABMBB3ZWxG1SPGktwcPT4",
  "key29": "38zEebB4CnENppsMSe3LzFqqPNyjcsinvDgjbzYcEGP2tkxqdZgEq2yj6LhESsc297eKQRZTqy33Hr8BpP2sFNFy",
  "key30": "2QFkiwhToQ5qf13UpskNcuzJ5ErdYmnvdEfQvX7wh76pXGvYJzvfR6fUWDsGTgXZ9J54ArDyFAmcXoY1pGavPtPF",
  "key31": "5WKkAvZV9jhPHrqpsazLk7GJue3G3RghaMZRMMtnqbUppDNwMevjekC9m1eY2jJfgDGYfEVco6XqCwM9hY2VBWza",
  "key32": "2juhspNWs3vCguKfbfceA23ZDKYN3BH1ut7y4Y5pydmNHgCX77fBv39hT1FmT65LSdKPiVTtq3zgdjhiUG4u16oi"
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
