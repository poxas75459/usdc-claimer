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
    "2fT5h7QeUJAA1M3KuHtPPDirBWBMBgCyBN1tUNA7RoiAhXyjVbyAjKFq713qzwyUaPH1giB8TTJEY3k7oNSMFxfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GUG4aprPgbJpJ7BHBpomoPCi7dcdFcA9F7u7Y81oRkkHib9T5kHTFLtrFFKTsdWF31t3BpuxJ4vmzo6MipBn3Ue",
  "key1": "3kPbY2hmzDe9Gijq2tvdQBznbYyyv1nPohGhCESAnZEeHM6vRPneVzKZhUkt8kvYPXF7PVPPTsuZkxLvDU6btPiq",
  "key2": "36EzEdWnjzpb9xEgZ1ikePWUVAzpm5FUVS3TD5CXkgkKi5vuEhxoZTv1YgVip7WD6Ruodsebzyz5QdnhTZM4yPiA",
  "key3": "5aKW3KikhgjWpcfuKmds9WEkgHn2jZuCXof9q3Sy8rvq4YHbHWz7yxwM6HYL6Ex89j2iHefV75neTYfrimLBpBhU",
  "key4": "5XcwFxFreDqUVwy8b12zjLaGCbuGmgWpaeuamgfyfG3br5nxwnM5t78SWpvqUxDEaT8bRXCDVSmcJpeqtpqMM5Ua",
  "key5": "5cuaCAWeq8QKZZVb3LzfUkMaB6fbPHxiQ1XhxLxfscj1esef9dr2jgejHsNqJ42yRANX1bJBez4hDN9NF2ibFLQM",
  "key6": "2cA6AuLXxLbTZgBbTRky6Z99Y3vZeH5NRqJwnbyUXGw59JpETAT3tDygjTYoXrodQck3L4NFdaE4pqJepYCpUZbh",
  "key7": "4szJaTZBFmgEP8yhvkh4bcapvKNL1YFgpFwkSCiKarCBCR4xWuq3j9XJ4mUNHwLVhJp2xZsrLJvKXkCNeywHsvNT",
  "key8": "5xNrvcR5AGhzJCA3QBZBPPn9F2LgT9rHdj8VfwXJKC2aP6ac4g56cFZpyYXU4xfhZcNPCSCRnj3P6ihe1V6TMusW",
  "key9": "4W7ZVoFyxe543HUt22w5Yqpw4GBeG21fMH5DJCfE5CCfqUZ8hSei1gT6Zo85yLRF7k3kce1jEid6RDmMPfswSjdE",
  "key10": "4jQDGpTbZa6HWk8rdMsSP356VfnUstkcAPiPUxHckopQZDaBptJmAUSJXHvYMRVqUgtwaC3SNGAxBaF228VGBxT4",
  "key11": "5zatkUg61Vrxqge7PTXTV7dWcSZdydD2CdB3cPifYXrbWSf2uaucViHXs5fskyRyxHzN4CY38swCUzBYGNJSrLpG",
  "key12": "5wJiqNNfoVqjG3sedbzYLwGLWJ1Cu1WHMb1PKzNa86iC7CBZZnu2559RpuAA6dqFjLkspZyJfXkmdo2wCV5vzh51",
  "key13": "dVNqNtUBQipZAsiSfBcXCo8ThF2tTrN3uQwJDTMdTn53Zu2hVndtrYsrQximujqqGfthCG7kH9pyLqfLXb8JjcR",
  "key14": "4HC7mRgTLZa3b9WFEhfLMhCLQ5xbjeBrSGfbvrUwBA9X6pcz58nQBeXRbAcWwLVhDK1iGyzxaBj2SHRDcryhYo1L",
  "key15": "25bifQx8BnFF79dZVfuCe2rS9fsbP5eGyBKPjigiwC1xujZXCvg3zLnzsZGrxFe496wdMRiSY1XWeSMum5H9jE7c",
  "key16": "4Tu81NfMH2RnwQeSCKWDLHxSSrtNMzXNVZtPFuhQSVDr2rgGSuKQYFCKsuGtyB8ccKpn2JufEzieBqaG978GYZrn",
  "key17": "2iH5dSN4JXut6waDgn71ejtyXZWPetbgjMMW4o3MgHrUkD4hCCKrvfCX9tMC1ZPEz8MMHZBmqFoBJmhwN58dErbc",
  "key18": "37Ay94w5ei2CejbEpRibQz9poFUSNkyZXqERsdF4sYksLk3SXZhbFVBbvQjvL7j9T8WYUVJ9EdZTfwiGunLefPuT",
  "key19": "5cRH4swZky253dipkdp8cQc3YtP93MSe4um653yTkVhbeRGFcH5nHNsjU8jjq2GAmAoc5s3MnNFVh7QR73iuN4if",
  "key20": "3UnsNzVw72wg77gVznGXJiKvRdoAK7qn1nZmHDzJpgfGnmkCPvL2G3aJnkcTEqe9JaaWzwevvMoABZJcAwgTfXNy",
  "key21": "2XkkgawcvaK7u183o2pRpzXJRBCSVLz6SF4JsesFAQLjrRXvsHifcnAq5tPbcM7AC8THVnKyLJ3bvRadgeYzUmie",
  "key22": "JuPbeny4XhQLLoGRvuxioFUk5NLZzCbApq2hbCFg4yrzYwdrZAmFaaQAssU91Ceucbhs9zDa6vQwD4b1jkPUQLu",
  "key23": "4X8M1JFmRDTBN6T1XEjtdG37SuaptierjXxEAzVzV9Bu5KvKpdoixTmpEaJNQvgueqPuRMZ3j28cwBEudypVCNvM",
  "key24": "2axXmtombj8umhQtyaAyojmDu8JAnLGJXdZYCDHDL5U1c2sBSY2o14twUZ1VG1Axy4MQjvJDnYUsKzTbuyuqkJx1"
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
