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
    "5JCr5Yp95S4BuC3JBywdbYdH4UdPrcJ3hw7PNokY4c7oNzojxVhprubju6NS6ZhXz3NDJAV7eVJq57Mh7DPFnVKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VCzPCR6nztUGomu7SGD7NSddnqoGHfEBVX4qKTehLDoQMP3d294PTofvodo1y13oz7avVLnK23HiGH1n3rsMQ87",
  "key1": "eD6ukXgu93PyZmcxUYTVMt35NQJQWEFnEkgbdbGo3DPPKwzh9P821jzqdmGV7vwnkV3zouKu9AMVtxwvoTatVG8",
  "key2": "5eGNX6RFMVpr6JWBPtZeiQ87ZEV5QEaLNhvr2Q7BZxjkckgDNFgvGMXnFo8zr9coAb4auwSEK42swAV5WRVCAUzJ",
  "key3": "254r52Xbwzs2Qoi8vb2bPDSqq3GQHuGqCLewgMuLepCWkmTvfthHA77FnxxQwJqxtiSBCbZGhGch6MNAWyWTzcEk",
  "key4": "QYSq3cVP54M6NxBqgbcReTJXsb1b3EqgJnHBp3YeJJWtVK5Rkeo9XZd59fEYNHxjbpbMPLozhWgSs2QPVpY8MmK",
  "key5": "cUSPuyUVqLZG2wcWgkDQ3bXxzCB3QkgyDdGmQDyG47HX9eZFaCV1ZSszqkdgiGEUv54DT2vPEFQKEVYBLMBV7fX",
  "key6": "3kbrdT9qw6wh2fyGFkVSw1H85ooKW2fCvNxLK8H1a2SpfssDkCLPX2GvMo9xB72c8MJMvAi2SrN4ohAheyfcdsH8",
  "key7": "2kgoKEvJiYJr847vV9VFFcwvoQQBL3VqYXHse6rAwLRriEZPGFBcXpEPWCsekYYNKMGUSEhgnSg6E2KqYjxQZV3f",
  "key8": "5FGNfxN7RoFCxaeJeGcuRXgsZ8FYp5HpsveW4FoSYFagdjz1wM8U8SKrKnq1ayy6B3BT47qcSRjhPiF9Nx4vKPn2",
  "key9": "2kRbvB38H9YJeQfJX1r3gEN7kt7YyEU9TPv8kHaVBX5X2kqGqHWbSs7VY5dSQn7j5HDyub7YWb6rSroL4t4MRfkL",
  "key10": "4HyTDAPKnQmsCXuSKzEriVtDXa2EcfKzs3RLbzjuk4ZsRMZVMvipr9DUuLd98CNiiT7qgU7pqtW6ryoVE7mPzouH",
  "key11": "2NGhj1bngWVipQdbBo2aaUxn9E6EBLP6Gko5AhQSX9byiTxwXPVTc41rFzhsNMyHwXbhKudAEKN3pD92YtPX1Yx2",
  "key12": "3vTohTz2gDKkxSUpjrhH4ZzVqpu6neZPJpBE846v8zu4LPxQFp1khsnnbNg5NnV5CR8znzFjyTsyENPeNcBLqSKF",
  "key13": "woeWERvuTjU6Em9ysQVv2VVSWYtKH7GakqKuxvM2NpoxeQEueEkLGwCxPuv6HfSBP67Yj8oZetnkG9vtaustypM",
  "key14": "4nsZixNtXcNhb3J1mHeWj4VWsgMWWMDvZ8kEt5uy63czKaLHdaPnJxEkStiWZ7GfHv3aTLo7R3sfdNyezSTN26r9",
  "key15": "29AXDqG8M2jEofKctYJ8VseP7TQVmcvHUeEpHPRBNUcgcgKtYquvGJC9hnnvTa2Jq56zxaRNaL62vhDph31mtwDY",
  "key16": "NhSM3bMvNkySBXMLC9pV6uzpiyaDahp4E9ZnhPxMVXVao5PC4KLprr4KSCkfdqdorTpswpcQGupxkfUxMMb8RFj",
  "key17": "4akGoN51jKyPPviKbNxCMLEFXpBGWDNZQWQJLe3TCHLPkEG4iwHrV3mDZ8eZ8ATfTgrkGZQanxECXfJhdWL8sz9B",
  "key18": "46hfFBabUtwcpqXr2h1vrRLiVbnMqejzhnRLeZyVMLMkk98BDcmWrPsVA8DHqm96fXfa6TrHX2L6pcdjduk8Y4Dh",
  "key19": "3RQ2JSpLdYRBUbzmN5ud5fThFBpdA6bnz7xQLu7XdS3XihokuijQhzAGyxzrj1vD4VyNVXEFxiN61Lvq7aA38ykf",
  "key20": "DDAV3RpQXsvBCpU7Z9MgG75vKovii98Uzzi35gdLqaNC4eV9s1gDMz1vgU4WWRijogLLuxqcWRhA1LvvcPSKBAP",
  "key21": "gus5yvX1SkFFGxLfdeLLDc9VgYMjiNRzgUcD8ojpH8tHQf2cKiZd2GzfEBDic6gVrSUQDSZXTKwueooU1TB6kAZ",
  "key22": "4SxFV49MLs7Zk8zWkVx8dJCXGubBXx66Vo53EZZh1PmUJPKWtLBfCP3c32HmnGg2G8QY8DkpEBVjgNn8S97eKVCe",
  "key23": "Pe6gdBiyZQKkwkybDjaVyFTFMFzhA7rFdRZh7Y95pSUSfvF8zp8kvyQ9NiNmDHwH2XEUg2kxtYXejbqyxMsxt54",
  "key24": "DDHkNBAQdpAaUFXXRBzAxhho9TdtX7DGQcGcxiLrRcUfmKyXNAvPq1QzCqMHmWCAWwH6csxCBwEVSPmdd4sZG9N",
  "key25": "4PfpPQFkat94W2trSBVNaSQDMhA7tPsNhfz4K1RBu2YjBRTLDpYDz6C44YMdz1xbdimUouKmgAtbfbLyQJxHatyw",
  "key26": "3CJG31Aeyp7up4xd1gcVE2cWkKxWq6cXirVqA2yJE43CJWkeXY1U7ZwRSUPbf3R43uZakThLvwVvY1DEcB7AjP4v",
  "key27": "5mycFFkgJTLcPnvVbc5mLETkAyfYQU9x57zM2ZHApPr1if7Cb7uiwN1m87gMF14svU3pVB5rzaKkV33MX5kfd1R2"
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
