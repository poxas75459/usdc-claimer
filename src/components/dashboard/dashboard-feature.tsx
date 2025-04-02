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
    "2LBK3PhHKKkAphGKgbYBng2WRTn9vRWbsjfkN38PSguceowD11BAAMFJKpaE4Zb6xrHj4Hr94zBnvLfVkwNkWYAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NjhgtD2jxVEcxcELu8VcqFP62TuqkuD8fgSFHPmTdM1UHnMMSttgLyVNMixGeTiYxZf6gbcLxNSo8VHpHfkKwMV",
  "key1": "3HDxji2eAC2sBe3b6kV5TArja5o5nT4hk4Fc4qhhbJoa8AVUwoRzdoedxuWy7pwo2LyEse8MmFcqSbcLQbnnVNhF",
  "key2": "4vUYrqG7mZiTa1A1psmqVjq3DiDtNczFEb8PfR7f5MV8JRh5vuWmJiZU8NjbVKtJ2qt2czZAda2QwbcUs3993B6H",
  "key3": "5pjHPusqtKNtpXNMB2ZPuEL151QzTBFGpcGWyGgVX7An1a3Eo7amx68VvXpJHDdkJe82ZZAX8SSpjVQ7icyH8FjE",
  "key4": "3JrdgUneVRFEtzJD4UMS2swSW6Gqz2hmbd6dAScGpzUA8p68BuWc6vQVTTfpqNqQXshV4FY4PHdDZNLrMiFy15tf",
  "key5": "3EtXERa4zpE9tjTet1z5HJsiahQ4vTZjR5HZdkAKkWiNAizzGZnTZ3WbWop6dJ3qQd4xik9qkUshXwhyxCxuzv5N",
  "key6": "4dfTYzbvcWjwEHkAftai2UEctz1Etn3JGgtDfRAfJbvcUEHZLiE8k7Q68GtXZSoUXS6SadGFqh4jSqhqcAXvqgtM",
  "key7": "hZ1Ro8Ba6rYwomqrnDwErdYyGkQaYM3K7u1iyUNXgBFpdmhwuxJEHHVy1f2GkssYdKVEGX8WwtKELJZZjWi1xHV",
  "key8": "VUomxrU5qw65S27gx2XkQUon3aztvCuHh7NjMmd2iaVPrhNVxVp5bHSHm8q3KnAkW2XNRbbdnKjHnR3PNjQNCHL",
  "key9": "bVo3cU6UMNmYvqXkoWhztRwMRrh1VSjpHMaa47cpWw4i28zPwT43bkkxf6Akmkhra9zruMpBj5EMAN7CMjqwDE7",
  "key10": "5MvM4xbuRiWJCTJPJn1k8S2dQziFLQkAc4vDhGWCFoaFXbCtP2kAyzQg6SZsWtM19byFAgaB5DmNxYLGtfb6H6Gd",
  "key11": "54AzqdQnUF8rVxPU5hHLSXRxPds9foKjg8Bby1ptgLNoavrRzSjcqZB5BJso9pyUa7FZHo3MPkTy9U6gMx34g5N7",
  "key12": "3xfxsu641RmHfd3xEU74Yvc93GtAHrsJehtumGg1EiBzWAWWgdjJzvsa7QBYqFVVBnv1xZKS26MJFgkapVh624wj",
  "key13": "Ne37Mb6coSKsT4pvHFNLjqWzCA422JVUV9m8VFPfJyA8rnCorUFTGW6VM7K9SNb84djfHqvBv9ypajNtMD5DBBW",
  "key14": "4nmzfsZpWpqCT5hfiB62BNfMZryaHNcUCadNntpErcEpfpr8hsazspkXPzsCkKLEptZhaMhnpxB9c6LoZUj39YjU",
  "key15": "4ySgpcjMtUA8h2Ypjn644jKhjHisVySN1nr2zNdXLrFU2zhXBJBhozDbYVZ5sdoaefbSM2Zu35UVVGJyjqMM9h3v",
  "key16": "RWL4upFA7KJ9NVdjhCsfcsGMGkzcmfJYrg7bX395C6soa5XMGU2b93r7UeFzHD8NTeMC72KgPnW1REd7NoZJzXq",
  "key17": "486X8QnAyqwcBdhWRrmQeFdmaF2hoe4VcZtdg8CqG5DaVfLKwxA62bMATRcC8GbQFnpgcARULcn4BkMeny51a4Mr",
  "key18": "mNeeLBbB3L8weswNNAVzzXNYToU3UxaxXvPqxUZJsbVJhdvYjoRrLUTyfH1qM6EVaDhX8Yc7ZCe93zUjBNZkgxx",
  "key19": "3hZ3E1U1HdfWGtkcTSSLUKJ9uPdk5yTyrKzwAzNgjSjmhBedGiz9BE6fshm87mjduER7hZ37Ww5dicYLAR1X4ViM",
  "key20": "58FUDQ8rc1U77fNFiYhJLrm59y3ALsmKsWc6eC5Nqhysjf7Me3a3YMi1U7YJFmeFpzcs7kDZMjbrR8U2eyh3P49W",
  "key21": "2sN48Di9Tdam1crgpBbqw1oJiq9R4BQYhAqncUJ8ZC6fFGcrATbvaXWFPfji4MYhCGbYs3saiwyhyZuQjteFAGTT",
  "key22": "2FbvWRtcos97oHiiMv7qqJNVpmM83UHJjPycJ5jrdhr9XvN2eWKLF7dEUCkpDRCKyV9mDrELHGJCaZzEyqh4XfiW",
  "key23": "5vtuqk3ryrJfRyo5eNS3eFM5YrqcYz4d51rMdBCziZHLu6jobp2H1H6LBz9ChwJKGPdpmmmsDGFAVBq1USqz1HHS",
  "key24": "3m659tobz7PwGqbLK63swYAgSe2pNMBqwWVwSqhgYg7ma6kfqqyEFQedsRuzxS1QDE17ePBkZQi4BuotrC7yfYEU",
  "key25": "3icHPpeXFaaJm3jzZQ3yixiDjutESsN3YUVMZQwwpsCj32b8FR3fHBgaNhN8ksShyhv8PgxCxsvTjVaidQ2uk6ZK",
  "key26": "2mzGgTYX26c66AaNiZsC9kJSBLCVeJpcAtTXxB3Y6QDRvguuFRM4qxT9VwQ2GbdcN1tyhBCqwFYJRp7oxkifPzF9",
  "key27": "4CFnvEsQRWQLams36XsoyNgjX2dgLz1ZiyEkBdYXPJQATwoQCw9zNCW8GYKxkDaBztrZehRpsmvxzJXDyUd97ati",
  "key28": "5xamAXUTPv7HUDZ2y8sihK8mLbZAxJj5pxW5gcyqc5L8jwnfjUdmu6cEL934xtLWzDwZH56xUNox8WW4gpE99Rf5"
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
