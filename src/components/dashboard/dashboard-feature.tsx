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
    "9H2gQXHN1E2DL3WavUnGdL5MwGKq9z63P4xqcxPpaCfAr1yd2LmS8eTU5xxU6URL1cbHNJFqyM7BFuEpBXSPzGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fiq7t16i18hwZCodPuUTr9Lq9c95Qnu33j4kMHc43uEKjg3yb6mWcuu7bkWh8KviU9bGSs1gmWSyZUAm9VEUSgn",
  "key1": "xu1vKrw8hh1JMXKnr9nsu7xSJxzXoBNXuNNqT4HSq7M4TSMtqFutuAXKCRnB2B49ntcy63eiCwH7kXGyiSy7F4j",
  "key2": "2LscYCcroWYTkmJmRKAP3j71JckNTVZbXbhKGY8uZu9Gfd8t2CFVjRJxwhn14sz8CNEbVBkaNcywEFqdTvsy2KPC",
  "key3": "3fWVLBFEt8oU8zkgdDVsj4B3wYin1QrfUZQksysjUf9bLVWKXZgCPssZbv85vYsh8Xfzt1pW2GFF3WtVwnjwS8go",
  "key4": "2TWBJRZGaBT81M2cfk7kx2HhA7tMPRkH3ftPXnAfrMvKLuAZsbY7gYx499tLW4X57o6UMc22dP6FXA6tnKU2whfv",
  "key5": "5xcY7DREnqng5KTNVf1za4REKCb6GEsqw3Y6dCxVWMSUasMUW569kRpyTk1HYePvGobL6FAe7Rg36ZCT5hcnfAXM",
  "key6": "2L2Ki4GAi72THC9dbVchujVAukbtRaLCLXpiP8TX4yffynrCndR2fficrBZuWbdTwP35a4cDm9diUjiRX8eL9now",
  "key7": "55jtpprtGkbBaTukSXFeQphVQyPCJtZTUCxR3ZByFHcxeLhjUQjSfPUBs4wUc666FnWfEHLjPzu6exZUiRRBFUqC",
  "key8": "4Eh1mu6bQmqSS6unQdPy1PNQ7u5RBMBRzadT9Ac5SUrXKZzwCccokXCrbDGXcgn1GXgXkC7EQdRjtbThWhyfs6vV",
  "key9": "2LfYcRpEqok5SUgQQRenVft5W71yrC1ECRH7aa7bwjCH2CX9pkpS9NCD1RT2aGUUaAUQPqH2Jt2gyLty1mS7Exct",
  "key10": "2v5BgfDdTndEangRzAezv9bXivzsqGb6terWC8g8abMRJqAHCEGLeq3jSVXfxJmnV87iWKtMXpAUgShoGqjLPpFo",
  "key11": "29fR55P3E3cKajwWGigLTzKE7iobq86u33k4oNjtj3WRq6Vt8YsA7ToWZEp3VV4Q6kDVYFCVZ8BJdaNpkaFRLRMx",
  "key12": "DLhYk9aXRmDYSE5yBKPeJZugPr7jLXciSsfeui1L8DmuJpSv6YZjk6H3Bo6gep6SkL9TYpPic8PmNismZuZz2qT",
  "key13": "1vQPHyYrgJsUMjbe5gLtpuCyqTAm2KazpixaunN7oNUoRfcXTPJ3JLDu2dxqYo2xysZfywXicW7FLRcPuigJSY5",
  "key14": "44fGZZErGWGeriajiuVv8nVzWnFRMCcru8UrA4wAXLQCSBaZdYBZajiWufkLM65EPq6k42mqmEfAi6qVVKCiBn6X",
  "key15": "4fU4edPMM8pNswG5Dm6VXYBL3J5gk22TpfQM1B8WzpcRHDqQNBw7ixMjhvuUY153CveHX7s6sjdzeJpDPKRoFGSV",
  "key16": "5wHJUwvqqbGPXCtDDZdehcKhFzq3wDQHSpSBb9ujkh82z5o47kgD7SDNBR2a1QGVjTRXkgreN91CXh6p4UEGGi7p",
  "key17": "3Pz7oLwYDmBE58WCsQpbR8jQ6HoTZu2SRcDp5E1HoUFiwfamDbkQBXEf4MsKpVpaimX1bE47jmfw81Jiu2ZTyHgJ",
  "key18": "4LE3xd9SpNhmq5yZBmeKrvqHrHhZvDBNdZ22VcecvPrBHgBF4Wdf7W6dBd8BRrdKEcTjp29MzBDKuhhDF8uqRySS",
  "key19": "3f5FGRgwySx5gEFsqFpnf63dT89xrJXZ5nK7rzpvfpSmWpS8S8J9gXqv4KtPDwgZ2c775Rw2tPRVUYmkQ4qzbqXj",
  "key20": "2iFX6EP3AJC4kNDWikhCebkz6MF6FWfMR84swiatTZmGWnKtjdECRMUyBuXT4oMDxGXm3NqC1LTV9J8ufxpWNRiy",
  "key21": "RyvhK1w4kVs6pAya4Kqj6441QLoQg3jDoXXs6bPXJoGabUCdckGAaxCip9Vh3KkMHfrbQ9TqH5FZ6G6R9wunDY4",
  "key22": "2BmNTd2Vbz1QbmVzkqLGmU3RYMgdv6dE6ZifPynMyeZFE8L1sui46hNN4VsrdoQbQjTpiLBWyYM6SEsxw831uqwR",
  "key23": "rSmsJ6GTwqaeLYbqpALpcahR2gfng7ocVzuupRovXBZvrnm2EuEs3tjQDjd27yEd11pKVTm7Cz6d2xDmRFoWhy1",
  "key24": "wT6vrvacCk7R6N45zM3LR3jMuhq6C5EDiybhUZFA2XtB5JQkPUMX8oGfbvY1NEf4PkJLJ3gWuk8hMrydk7Q9hHg",
  "key25": "ZxjvNneWyt4cfxtMggn8vEk4NckshMD2Q5TkS6VwYBgGfVmf5E1B154Hb9gpp6jFDHhTnUTQvM4gPpYCkSUAk21",
  "key26": "jKUbKppoAqy77HXp2T1f4EiciTpxwytYPzQYr5pZqDCn6UeGJ6KpN1Tud1t8padK3zZP4Wgh391jumPWEAV8rjm",
  "key27": "39fEm4aka5xW7LWaoXYGN3ufxoZEsMazMqAteKA1JWyjCE9fPYukJmMyzzuCyHmweM5nRWxCaSRWaSfdN5xzGzr4"
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
