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
    "2rL9PVHSKP6mZkotz5kGW3DX1P5zfrSNgaGWG8owyu8jYDyhTafxd8o1A35vg8kVnCrVE4puiBMc22bXo1bY8EuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jN9Nt6cbGirGGoLzMa7Ng8kqhsjcmUCS1qWrsrjBjNiSDQFUugAiBidRatwW7x1RXKNVCWg5XjAyvYd2woJqTr3",
  "key1": "2ehEkwMHB3uBVuNXLiNTXMQxPofthrNHEhWSH8k3nfLJPNk5vzLTTJoeGqWjHfF2M1814ysjB5bAJPwt8Ys4BXJ9",
  "key2": "3jYe7bXdq67uK4iDgJ4GtkyB8gogHw9tFSJuh3NpyHq97TAJujTRqBdLjfAHoNZ6u8TFpmKsfkHNoAGYj18B9Cvc",
  "key3": "5EN9DRqL2eW6nQU5hWYPUMFSFz592NzF2Jbc9Ry61iXe6VJNW4X9vGRdfwtxaKiYKKwHxg7HzfaxdrEy84M7yGLS",
  "key4": "WEZNADJ5RR7YkYrU9iRuUHKZxYocCvvrGuSPA4hrLgEktRFUQJTvoVxDknE25YYHAjZ29VGgekaBuXVsSV9nb5d",
  "key5": "RFX28vo75RqZxaHuTPDmHFVSdswbb2cPoZ4FuDRuQ6vsUqUf5FrszmKRgNF2JaLHVDRBbNGCJyTaJZ4uBXPeXx5",
  "key6": "39LfBPsDCQF757ULSBLcd3uZM6iFWqy3wLPc3armyWuJuPfByaf7EG43huckCJiA7REnyx4iyJahHrKnpbWEfMLM",
  "key7": "4HRnEgeyj7J8fRwwEj8zzDwf6VxnbuzisGCQBTkGe4ow3jaVwG2ZfmBAGGL3drBMcoV6pVqqzR8UAghXjVJ4xKUE",
  "key8": "5GVPfwM532RHDVNhLSDhWHeqYi5aWbqjEHTS4QPABg6RGevJrzcJSqetW31VPnHv1n4nuYGTrzj1mjvuZAyqLqHy",
  "key9": "5vLVuAYQUZUoij2KZoGbeMYu4TzUPMdZAagHgUPbEHHG4a3L8BKc2EQvx562LMgqfmf3PwN6iXktz8w4HRYbiK18",
  "key10": "5QjwM4Y6TqPHBHtDuHNfLWpyDWrGzYtVeLo6bQweueRH32zhv9CUPV2m9wzmRLJs1UPJArkTpNQkjWaNoxawp8b2",
  "key11": "2Y8QMjmrHFPt5hRRku2Qn94MzCGoExCcGH87HPY4xBdTbtKwh7YKE7DUjCXnkPRJ2RebkwyzWPuei1wVpiNCr1YP",
  "key12": "3M3QTcqMNMvYn35fySmJeGuM3tTS6ePwQT5MsFABZE8gicm1BdghQMVoDo5iD5BfD9Y2oXxsYn1Nvx9VjcBDUbEm",
  "key13": "2JnsafdUoPPpchmnXEophTqrdcwX7zejEG5QpKvUjJtwkKvnkhfdvxdaq6XdAaRWeTSrANEYgrDfZ9p3NoQyz8BV",
  "key14": "58GYdDi7URYmFhYfe2XGP53yyifnptKZj4ABpoGJcgvAZt1UgJFFtNCoXSwUVYDKMR7dk8CVA4W6uoiCczgJPSHx",
  "key15": "Ar21spH26SpxbSAKwaL5aWJB46bfpN9HRfgKa7NnmHsxTKtDZUfzrpyM6SXYjcpfASUDXB9RSMiR3o5wkcdxDJs",
  "key16": "cJeZAqniWXJHgimqCr8apEbLznChJmQoVbmTeiQSBVcbx9MSvoJ4pLbNFUaJohh1YpL9wkx2wiYuhin62FXGroj",
  "key17": "4d258WqczxNtUkLpCpfdQyTkLMkP43UgB6hQpw33g3yofF4u4XPJmWV7KyfZ78CsxaNc3a4Zu73BLsXGwohg8krA",
  "key18": "24E8jgSZGepL8W73vYPjgczeKyWAShfCzqgPubdrv6NePRTQ5DtiUzubdraZ9fEDcnqwT9dJ6vf9YzxRgb3t5Wge",
  "key19": "5QsG6uHaHoyUJs4Mr8oAyR8tSetM1pVivKJxuEUJB5JR5h41tAw4FGUdUxyP2YNiPk8jX4u5m1UJdU2iTLCrG1gs",
  "key20": "5GJCKnrrUi3HiVP9F9o5zB6e3zbwZigwgxXFotJqYdenLinjDkVGGcX8zrq7Kz6srNcGjUSXzQYE93HCMPVrJcLo",
  "key21": "34ESAhrx1tgVCvLStNCeWq8dng1BXea1WmwGEjQbHxWtaPr5KkTyPyR2P5ARWCV1XEU1DGr6RaK9jHkw34YEMbPX",
  "key22": "5wRKjT9RqLBXhcs9VyuPhf5Q4prmVoFmif3tfeCLNhQjSUWErTfT3GeVzR5PH1FQe2g1Bby4NvgvymLzbAZaDc24",
  "key23": "Va471DkUN1zVAXAum2k6JKovxa6PNLMbhHvdbiJ4pWUmWPp93amyEKmuWBukQjwi6fPAXDxuSRvx2f3SbEJ7LJX",
  "key24": "5pN6Cv28UUXhYEc284WttEUD4aXg3deAwkirxCh9EdTihmzxTtDZWu545KUHjRGq8wSk9PWT4PcvbhLPpF63QZ2k",
  "key25": "2nwd922UDQJVdfNSjasT1JTyVSRU32k43QSsaAfePU394nqDRSgxGd8iKWWxpeBmePhMGFFm7Ah3zEzCmvidqJzY",
  "key26": "44DDJhqkiVfsh2CStMxVFkuR5RmwY8MR9SRVBNkby62GVCyjKSf3AAQ3ZQyEJCPRk6LEBAbgd5fb6AdBV6eRFGoR",
  "key27": "4W4L2SVQmUz7nySP7w9HrqbPMyFy34tSo73N254i1QAfywHpS1hmMRxTuFfZGwsksX5MNr9YvuNLHsVQc1VZqDtb",
  "key28": "4fSaWXac1RArNaDb84ftxhX6FFLVHSQzVKWC9VYV5sUyVgHfKuk9prAfppYsyfAGZRqELFF3C67Cio3TFNZwM4KR",
  "key29": "5LDVnR9et2tRFTnWttSiPFBjEH1w82f7AC4xDJRGnAos9hofdk5VSGxk7uEr5YZKA59TEm8sdHr8DXVk3ZNZ2ssF"
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
