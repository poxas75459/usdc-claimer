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
    "HQ3G3MGs7RG9q9ZddbuY2UqjbS5qUgbWUWeAAA4LP12zctj9X56nNwrZ53x25DcFXYpimMyo1gnM2LJsmCtic8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h1iqAgWBW13Rqic9M7auULakB9JcEm68BiSN9ZXdAsze9fXPs1mbAut5sTukfn4rgvs2Mkf4wdr2cCkt5sj4Jrn",
  "key1": "6s6SFzb12RTvup1w5QMm1UWkBJkBd3XhHLHdYiNePoh7b7srebmHdVJEMGgrFVrSR3vnjtwmW9dEGsQCmLBkGSx",
  "key2": "5ZjtM1knZhRvENBrC4ngVsHj8jikJ8U7W1APaq3yzvHXDGAqgm3yWbeDyw9Jxxc4x31h7ECoHrTVbmejKaQpsU2R",
  "key3": "4H7eAYW5nbpyd9uWRhbqjVa8318YL8ZNA4Jt1V4PC94pCmQCZ1sZceTezN8B3VAhBH1DYwBAwBYXc9W5tazuzzs2",
  "key4": "FbwbCBwwv4BURdMRV1aLyXzQUP78ZnfNsWFBbS5jBbozw1meg65K9bLZ3o5HM5DzoaSZEvLaio9NQD7Dn6ExYVY",
  "key5": "2iC8QVkKsYPH75EoDbhQPDRQTQecpkPydvuhKRipR8mNRGCpXSg8ugHwRpgqcEG5LZZjA7PRNQheKhRVhF5ozMN6",
  "key6": "2nhhjLyiJvnQXfNJGJcCnqZWg2mcZ92VsQDCo7VutPCj8Mi92wf9s5THLpav3TifZ8XEP45Rq6FWocy6QTB1V2fA",
  "key7": "4sGX7TAEKRFoUxGo2Ze5duqY6n2RFDBNsGE1WwZdowZCPpWepRrc8QFvbokDDs1QDjs65QMUAEknQa66HoiKgU1f",
  "key8": "2N8CStz1pHMuPEzE6eZgKCQyhv32fRP31TW9dEhmt3kzQNpPMbnZB2B1Hyz7X9B1mYppijv72ErevPDbMZfyM4CL",
  "key9": "3KgzogUWP9DWwvboefup9FmgkVmmLKUXJseu76qSMRV8qNRdEeb5S7L6vu7T3RXwdoS4ruysq2BZAUcGZ24CwU96",
  "key10": "3jB6wjZ4UKWj2AGRWJZ1tdHuWSDZ4vX9NLoVjBv6zz2qh7vZaqRY9JEBFVQtJ3zxuP8MNg1JBJkoqgg8tSxrZRNp",
  "key11": "2yht9J69PccV4mLG1QoVA4HHNp4X49KWsm74bQ6oTm1uXx1PU28zVgDNRZrDXnRkKLnZBtTgSg2eWkcdpJkZmkT6",
  "key12": "5va5DZpN6ESWitGnNUqJSqqCEanuvWUQH8RyVenfmbLEx8KQ12twgDz2SRnFpSWrMfTKZLRhVVoR8ytuQFg3SoUL",
  "key13": "5mP4gMBWMyUVVnqYU7aDH52dQj3AFQBAVcDD6swcW3nvkJ7vKdDvngRchbUWNA4CEQwprZv7Lhkb4jmnT9ubVNub",
  "key14": "4vXbK7ytQnWAPkKgrqwqfr9NH5CVZizZDxUzhGkxKZQgCC4Y9XvLCLEWn4nxs8YRHFhMS5pnMh4jbGJdBTwVfq5E",
  "key15": "4RJer2DvrfhKfE12mZUUtegCghJbsWvzNiBAEztRuekk5V7R4GzP3GJgsVjYeEMCQiehndxj1zPbj5qPVw2zAZq9",
  "key16": "3gyxo8Vb81Nnyk63rTTENrqyoCTSrCDQANeRYRQGwq3ka11xDbsHrWX38zYBDf893TyAY6sgA1VPKdP4c5xz6iRh",
  "key17": "3wsNA7tnXHCPRRFJ3usUQLXJCPzUSrQdXUdiERULdYqnKzkNsBxEJv2uK3W3pTiguB1MhLLSH9FUJW8d6hcNjLE2",
  "key18": "3WY5AdNxgEebeqZAqbSCEt1ff43vKzoPjEckxeXSyWPoRgdALKwtUgDnfHKeD9RgmfvHsetefz6xXmBTyppAZpFD",
  "key19": "3vE49DAXTDJxxRH3Y5w3VkXugKzh1PuCQxKo4iSGLWAuZeqpt173nPsXgHHCQ4YVHAUXVnoPnxCX4Serv2MiydHG",
  "key20": "5kmP4XpNAg9a68qD8trjGd2Wifw63aTboMjFQCFQjemsY6ptga9HDSR2XSKcRRYQ4UmhgK1mqsM1N9RFduDRKP5p",
  "key21": "5ThPM8mJa5sKvF7mBbZUyAyoTmBFPqc5FvrfbTDZNaVZevg4t93oeDvaJCxarTUF8isRCWRb1sRMFW7Yr6PkRqu2",
  "key22": "4ybY5gfNVS7xSgpsEcxFjW1CH8VQ9wuWmU2TgP2xC9TiYFWrRQsQxLHPPVSTAG9LdjHKGNB1SmCeB4MqR4b8hK7C",
  "key23": "4Efy1ptpCYBXTnMG8S6frBssqrX9xx51jnMwoueCbAob8TcaUKaL5F8tVaDUvSuSepXqH9oSAGFyBA5zsY45WaNY",
  "key24": "3uqPxarwbD5TzucAiYDH7RLSxXaukB6vwdJVshBWaFFXi2RYqwdDiZwmHRWMDeaUeYpQmeK4uG8C4cSa2CVhczdM",
  "key25": "2kmTyRJ7g3WP49MfWhNzGMzZvjeRavLg12hCsoszFu1prTAFcfqUhjZ7CSy42bMZJFEFexaa6xtwhfNBSMFqYVBg",
  "key26": "43FDo6hunTzHFz8mpjGGSZX9XqSXQPFXKL9ZD2JFnHzj3Xx2HAYb1jL8XhdtFDRpfDzxJpu7n1357gYjcwSnQznR",
  "key27": "4p5U2MpHWBHgfXgnZYFdpawjjNLeHkkdcYPNWuRhkMC7P1SrsPH9KHnCbE6XQgCHgnLTziacZ6Tfd9VYZUkBwBkZ"
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
