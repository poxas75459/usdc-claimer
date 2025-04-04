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
    "2i9czuurH9wFWsh3KirV27NVBqrWa7KhJeKW8UXDb3TxqcKBWN37cvsR4mrmcUsYVyb4HFxjNtFucFTUnMH2jGQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6tFreaFdYP4gcfgkX8s5qJ7zppmG9Rax3zRU7oWVYtYLeJpgeKkeA22r2Jf13Di3o9tme1J2f4pEdrzSaL7Nro5",
  "key1": "3AnR7aTGE8eKaTamhqPUnVKrSe5JqsEP7ZCGyCTTzUTjE6mSP8WgT8PYRtyitx7CvKjiNkybMXvqdNCd1YZ1eetk",
  "key2": "2aTRY6WwivG75Nsi1KfY4yzX9S6upKKoY4MvBWTwzPTxTpUDNhpcHDGJmakbiPFgecsfgEjWgXkdNS8ToSKZ7ayc",
  "key3": "3tp3pTyc9DWogad4PsTiGvBJr8xAzX1NeYpduXqWYkRn8SzaDaWDtNtC3A7Xrz7nmNEsMSSyGtsPjvDjeTx6Js8s",
  "key4": "3d4kfMYv8DzxLBUwXUmr6CD3X5nrdDXK4pXr4DiExRVvHi7YEmBQeqtfbS2NYSV7LMbxpRKQ2BHcpVk6mQrQNxcK",
  "key5": "3mwmGWQtyqbCjzf3xASvzNYqH3H37QRo1G2vz6WbGXzPnvj89cHsyoukPUWYTnuS1znh1Yr2adqGSDEvo3E8mftG",
  "key6": "5BnVg8oPVATN6PogFt7bWS4JrvrxEfYoPUnRr9BeKpvgxrPfXadY7wA1UYswcZ7PxCNP59YJfB1bNCbqy1Prh5Zd",
  "key7": "3HaaPd4NJF31j8HcCEh5CewrjgLTVjVoXbdDYzWyjPgUdp1Jj7yvSYfvG4cYJvJ2RGFMFft5DCxmGYQNuYcZS1y5",
  "key8": "5MnEsBiFPYokuHtYDXpqYEYSiUCrvsdyVg6smU7VeNSdq5KpNuVeLhRTH1Pt6e1i5zPFCDs3naLobeVVYwkHUrSn",
  "key9": "dGoCXhDEBhzUG9kGrQwLG7qRntEHhTVrE8jnnRnyxKpxC8TTa9NLxwmbSJWjzq7Gt4cpGu2y5j4xzrnLH53Txgg",
  "key10": "5GgHM8ohxVVLYftd92ybSkqV5dDY5hPrU2Qq6nVRkFmExEADJX83QeVqNGNVSJ6LH9jf7kSQwTfPpNmqgkcsGV5L",
  "key11": "4jrhsWE97RKAVywUcB2TRqgzK2A2AyCCMoyq5gMfhRs56RgKzqodKDWrGnqStKrSQZ1gmdU6ogDdqGt2gSZxoUbG",
  "key12": "5fjgXkJQ5tux4xRYCqBgnGZpeY39Skdvcjr5vzAtAkbipJYaJo9g9H5cmiY4XypWNoXuwJUE44dfChRESDTVeYgA",
  "key13": "3gKK3Z3kmoe4a3C6QiNTDU5cyBM17iAF41DRfzDjbX39wc7Ase1VewRPLRbXDbND8FYvjuGYA58MTTZjn8F4AbSh",
  "key14": "iRnEqMDYbc59SrzyhWqkoA6quy9ukYcTSzycxtP9ojvCkDVAv2PfCi5YX3z6tkKWzXHnb85gbVQJsoU2RucmDWJ",
  "key15": "5KcSGcLeR8xYGx8S6Px8zqLGoBHef7ePxLkx5zsHp24epsaNzgAUpiR3dJscsrum7q9wvMkTTFfJoQdYtWfC3HHA",
  "key16": "4xLSB3aMmcWebTPVSwkYAr6XwwHFgJeVHXZAdVssX26guZ5uF4xn9cF9a7jiDfxehH2jHdwXEd1r5zcLtdpZgtd",
  "key17": "2pB95rfj8E3GNPxyTGwqZysBq8kDhLMgs5VRf46kDTr3odwuEmEhLVbq82LB3sGvzuLmTK1agHGbYSFeMcGgqSJb",
  "key18": "3yvXh6pM8VFh9oTTACCZBMwXJbCShFNpfPN4XYA7YmujbqmNPmHfYTgi4oCEmk1k6qxBnohoXZiyMvpxztdT6i7Z",
  "key19": "484iaMgAG6fpkVgLUK4eC7a3o78CLcrwR3BE5qeoZocoXQJizNNVHHnNdhmDS94yrURx9QFc487uCbh4T75PMYti",
  "key20": "4huHaK6rM38cviQJKrppbXWY64BVYo4iygux1knWzw4tqAU4p5WNQSXKiQqFxSHCHSf1qzyzHzS5pv6gMkGVA8pQ",
  "key21": "1UvwhQhraToB6RTNLmN1vWTL6XroLLcyTVsryWFbhWV7eCFMzW1MzrBxPHAfAfiPFDjE1x9tmKkFSztCqqJinvX",
  "key22": "427jPB6r9cYat6xH7QMnGdahfoXvasVWWfT8YetKZvZfwANgnCAMzdr4hwkDtnbMjtTEXviVE6GaD8Sea2UFLRmU",
  "key23": "5bbWE7VQRPhXzJRrkTSYJbMSjpeNjsgzpXn5gpLu2ke1xeRry8rM8T31vfZ6PLwjaQRdGMBMbyeBXktiTBRTwSYu",
  "key24": "4mMDVeVB1REFg8e8tGgVK5JK3a3CqozGkSPHQ1Vdid58cCAo6peGtqLA4FD5guQ8PXqcfufXp8bLNgVn7xAUvjzG",
  "key25": "5DGbTaTg3iEqtPmMQ1hezF8Yek2mmq3rT3itEG7usWBgqnPg8V3Y4usY4TTEz6X5jeVgwwufWgsLKEUuLdmAhKx4",
  "key26": "4Xu3wiJgxgdzTwuCN8EswQ2WJbJHBx3vnCAvyTXcswUx97VuPjok5AYFPFmcyHbAkvWU59Pc4ZrkGhhWugVo5A7U",
  "key27": "3jEmc8ueWkgAgVbpCEtenLeULEgeiFAY19U9frd2itJRGPn1sigK24gcq9ZUWyfRqY3hQLFoeYw7ecaWVbemJFPZ",
  "key28": "z87WnjvKGZqHaowhs61ZQVbbjYZ4bxt1URFRsg41pdaHe8BvPxSkTuTxJCcQ6xAVo74F7X6qDc26UVpze2XTEA4",
  "key29": "2hPZLoQnkfCR2zxb2gTFoWn9EVAUCMxLNKCqKJixeRFWyyCNwowmbQrWPLUiniU88bh1kuAQ4dCt95USpGuencNm",
  "key30": "2Y33cXs5ncMoBw6z7P88cUGf1x1CAfodf8NERksYuF4sWoEgdrTnvh5T8CpZvoJcJpvJxJEuAayFmJbFjfG3CXta",
  "key31": "4X84ZBQuGPaQkBCFAvMsqvGJthf2gNyfQTRwhSvb755dETicb4D7y9UMko4JyyWVZxNiAC9J4r8RYDpALMiuAGZv",
  "key32": "2K9M2bsdPShpf7XsCrCcs9Bpn6S3LRm1Gy31WPdYANx22s7XmB9HeHjY1wppKnox795Pn8qn1iFkirFMRgqzWhge",
  "key33": "46TDDb2wqa38At7SWwxmNHgUxUJvwiuiWGcFyWi1cdeE6EDctYP7nU6VpVS6Uhe5C7MpjZU7hrxSsNpDyk3PwjhS"
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
