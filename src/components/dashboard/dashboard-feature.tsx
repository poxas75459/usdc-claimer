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
    "EgHKmoJUi7JWDJhspuY24Wj7VqADu9Cc59vAGD6WL9onucuDgmadeNqB5Cz1Gw6hCxX8uVdcW9kFDEUv7Q1qjRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xDAFAHJ3SzRHr1yxxHR2pPmoyQ1zEgsjGHRTNaMLJDtHoUDpnwGZY3mxBrmKbJ7zJHXMYGFWLUwMdKDms68gn9N",
  "key1": "4xCZPfTxqYGhLwzL2buLx1ytVFTgb5h4oqPx2zCU5bHcQJ3GHe7D93YsnqikXoyWgFcWZYZGzZ9HVkHP1sPGrUj4",
  "key2": "22EhAegJfJXzFpaC6B3xe8YWhSuJDVxTRM8m3hwu7sbog5tMTDHLgV1rNivynHLSxG88YVYCSUMxSi7mfa3gFxAX",
  "key3": "5EKFcYVGjCoppkiFn8WtuzJUgbLySYuZQHccC1tH89BXZAtS5fgaRLERKVh6DBaquzeje2h6nfD2VWroFHgm1qgR",
  "key4": "4CWScHaQw9HPBCJYU38DFsAv1G7nq5idZ4exsAe545ieyEm9bti9FLusJkXFeyx8UybDudyP8nqxPdScAMXAvGFB",
  "key5": "nwRhPG3GDP6wNDyfQZwYRaLqNyGFtjhsgdEGW45v4R4QLikAM1jNdm9bvKGLFw3UDiUpTW8vAqQHSBxq7SvYLyX",
  "key6": "2ZiZPm3AvLdMWEPyvbC4Arvka5KgaSqYpa5Zq8Q9nYhw5hnKdJEoNUDd7Ad2dPmccHbntkxzHfKuVzq9w8NDHb7y",
  "key7": "2PgLubav1mL5Yv9iFbXbQv6J5QhUEz14CaW6s9axpFFQEfpYUrXHxHDozbUc1zoLko3jnAbqF8YQFypd25C7sjCQ",
  "key8": "4WtQWBXbM9j7S5BFjoB5F7cZwyAmV6qqf9DRMwDSEP8RenGRxZmB5C3ugsfYt2S9JAUKZXEqjLwCQzmR7jmdbnS4",
  "key9": "53LYue8bSkJbwtT2MqNdMeRaH22SibeFd3iWp8GuThMr8qaTeSEJe6oGGgFoSyDk2zpLhQ9VTejNX6okA7vrN8uH",
  "key10": "rxkfc668Y4NXPmsUqRKAJmFw5BgnkX12c7GKa8Ja8v5xMabZy65fuacKbe3E3ufSPL6waswTwKNx6gaq1Xd7BrY",
  "key11": "5sfdjtKSZU55K2ky8rChmxA9oGt2mhJvh1d81RbXwzyyBFy9713VRYZ4ND1P3bgUxHnX9sXru8u2p3VYCV56zZTZ",
  "key12": "YauCspbnbwPLGe5ix5cv9Zfsf7D9fsBcQxWgyncoCM8tQE5TCrgKb7tLrgDktVdbjQ9FNzhVfGSRj8qTPxb9x71",
  "key13": "5any9dLE1T5vW1ARtVV743Pdws6DC9CfQxqFSxb932ohqxNC11B2ex7DuDBCuXiZvfprHXrvKia5PHfZhwyYPE3r",
  "key14": "2WUBNd5d2wjEFrPLNoeoMN8jP74iLeTeR2tib2amcVsf3qMExQguh63wFse4Uyz9RezkQaREsYKwmoD9RhudeYU6",
  "key15": "2X7qdqNCZ2HGuvTYBDgTiYpahXZPCm8Rv3VXHKPSDaR8DT3ErttMdfX3CQ25BjgLqHfYEag97YPVMh5cNQh4rm9P",
  "key16": "5zECbggWVUFJ2JmR1h33hUKnZYZMdVsk4a4THP27KS5qYJxei4YhsWJCgU6y66QBX1Fqb8eheHYPu3maNLn9977B",
  "key17": "3SjkbycpTRYLDNwbymR2QDXHfR2KirZ88pWDDC8PQSkrkJtzoxcgBP24eVyhZhqNr7KiVfiUQNhxnzAmTdhoveJq",
  "key18": "2DWUWvXhk97sDzULEczAhngCoZmvZCZ43uoAgHQujgbgMfp3JhE1zD5t22ziqRVP3QFMwWvW4YuzykJ9FGXiCmwF",
  "key19": "57dY85ruunQ4SC4rLBr4GxwDGefDW2Nax5GeT2aV6Ai1Em4o9pFHgmyPfRuft7i9aDjPmST3BRfKuRhEX6Y4cF5a",
  "key20": "5cPMg4wrzLxP4bbtVguJoyQhhgNZDp3cGKwystxLt5xG6ao7zBqsqTMHFeSLgTPYD4aCMHWezacG8oFo7xxYNBqg",
  "key21": "5VW2dH2ggo3F7RLFtqPLBqNbz227CBXES2uU69bdgCZK3JPUTauSiZ9TamPbgCYjxadTBFXe5QnJj84U6geX3Yve",
  "key22": "5oQDFnne52zMywvg2qhnCUPMWZTNMP9gYAbCLoZhuoTTF2GjxHhqNm82YERPTUNP46TnVLrTLVa7sgJ88A26ZFf9",
  "key23": "5YMGHXFQCDMVYXCgjmQqrQH79BJ4TBtQZDFJmaGNujeZ9dXXCHMHmibF5amQZCFvP6z44dxAfB9YmCc8p8NajMjJ",
  "key24": "2yVk4L3mWzBbE22U6VKVF6cpm9Bn1Zbvk9nWetFcJoqc5koihBjVR8NcwSGSgJadtTUiwjwtFLBXyYwAVrSrrKZw"
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
