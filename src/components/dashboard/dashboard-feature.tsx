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
    "62uemfGuhzMvRVeM5Zp3PA2Kkvfx6rqhrBA5wzCRaUdaVh7acKk5mSoaUa9jnguDzj4YopTVeC8nnbrqAqkrmhY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28DQpScFoZdyUXEtk1CpFwTv4E4PJ4ZV4tkNPzmMdMmteVjUk6AmBJeKDrW9okmNUybeKMUnKNYX4MN8bR7jeVGi",
  "key1": "5Ay3gq1VkSbU8pGGKNKju5YXfwR6YANnVMTo5LCEgXDkSr4zzen8cWUtyc4gCFyedD3CwFYB7mHJ4ztgRHcwAXvx",
  "key2": "34YCd8K8iVShUXAT6mmGbbCdpgvx4F3QTDfMbEECU8ux18541XPnnLLw3F4JaY9mh4VmWhWGUDYehtXfYnreEd1N",
  "key3": "2enswSdzxwBAfi1pa8tgCvu4V61uayLsxqHFPr7NtbagquF1LF4sKtnRNPWbBhgyBZB4a8mz5VLW5iBw46SH6SdA",
  "key4": "3NL23Zrqp1ypfWM6FKhn52vncxZtUmvQ3pV4tU3k2xsPUy532N9UanLTrJtoSdsGsdaiqRKbtNzCyXpBB3Q1pWhQ",
  "key5": "2ow7nHwFr6PqoAm1UQL7ezKvJ53tMx7HtM5nonCtfD67EZFpfv7dbLm27qVRhBqyCXFnqgt5XnppKUeqiqdVB5ey",
  "key6": "6265pNjxctn1K74Hi7Ei2dKpSdP6XB9h8p4VrQEsMNpbvPPZ9Q8iZSVawLdsuukhUginJj2NqejdyP6jaffwrG8y",
  "key7": "53EajXtwe3i79oY8EFuJTcKQpBcZqFiuVd9aSrgNFXBbKTiMxtGS5CgsjrANKLJNKEEyivRvbYwXsT1EpPns3atw",
  "key8": "2y4ApLa8fo2hDb9qyvXnk78Q2CqfseQAaGxGazjSQvF62pZ5KTS6A7TzMdHprCo6cymYuL1kNSxjDFitxD4eBWJQ",
  "key9": "3UYWmnTkqMEe1LBdjHJtC16gabx7VWhBoTGQocShyFjWBJVXFNbt3MvhLTv9H4pKBtQKyEDvYQFiQN9YpCjMmADw",
  "key10": "3fU884fhWztr9XtzHMLcZWDnSWXxihyhu7HYyhpLry9BGc9A2t6wmj5aVBJZCeGBbNezKWv6kyUqqXkvMZbMKdkW",
  "key11": "3XjTWez3bn1d8ER8Jq5SLKTPKjMdUEsoxESn83a3BZnZERXMWHgfPdYWoN5r6uBQPmeXWNo1a8kiEYHGhJUWeoHp",
  "key12": "2j5Cu78D4cAGcohbLbwvkZrKAsmYGep7RMpHvXdjoDiUvfhjDsjRSyhnynyGfUwb3cxCx7yAyinCnDBP6xpYcgwp",
  "key13": "4Yc1D3TGuaBeb4uHMSq6SqA6jQ268MStPRiBWyEJ3acP4ucFygdgriysLXtQtm5fyLGFaAUkcDPFEaX2cDzjmrbm",
  "key14": "eVhY1C1PkuvKMgxdbiYXH3MncTWN7XPiwgsA4MBtd5dk5AG4e6a7YBFdKHvWa1b6W5KU51KKnSrL5unNyDzRNmM",
  "key15": "3AJKD8zvvsCNbiUTCjibPCjMD1ko8p5ts3et5LtumZXQ76FhaDx4Ym5WMPsAshT4xHTy7Uxnr5vEy2tHpLwAx4mS",
  "key16": "3J7toWBY4jnySNRWx4jUeXnqUTqzeZenTizLz9qyn6TrVE7Eowijv6BsPt2dG3AnRqQrHFdyoWWrtTFcKZ4SxBmt",
  "key17": "NeB653byTWPfJVuNRV8P9L6hDfe3d9HAcC82QR1K5W2ooMbYpkrQQ6opcyFEQYVAWHMLXhiATQ2KjQ5YsZ9hy35",
  "key18": "56ENuZ3zmqGRaRjL1T3GML4rzLUoaiiHmYGS6tgtY2SaEf6bmw6awJdkrV5QgSkHRjovwYhBSxjiGcQksLRWrd1R",
  "key19": "5xZGrmtaqh8rhQa57ecfsc6R7xhQkoWwTWdBKCbTqtpHAjSjdMhnTDDKsaxRremguUBEvzzGPRYypKQf9DoydvdD",
  "key20": "3Xc2vN7XMByD5SSyVhPkAnu52wNMWSCPjKccoH5L2EgAdUMTT2MwAcJBTD7yur8d3mpZYmfSMee9LodygNmyHdv5",
  "key21": "4jKb6os5v4YyD5kQz7NKvkaFP9PyDi1UBpWdXowgfM1ZCi4gK1iNMfbZGQiSoKvjNnA7YUVKFUeVPdhes3QkJyRw",
  "key22": "5eP5sCLiKh6Pf372CxvwTt8V2KAgXnch6PRRqzx6BYWM61m9NvJgTRxRtUWgrDRq6T12aLdSYcVWae6KxvDNFDVs",
  "key23": "3n8NRFwTZFDmymge4e2P1FxACqDS1t3z1xQBWxNtZcAN33BkuwoX5xPEnucWKS83oLMTSMuMwcygiRRWbcVhNhwP",
  "key24": "49sTrp1rSJjdynxM8mS1eDzgfv8Yt8RTshqcVCTCgKL2UdyDMAdydDc4CUFUCCm6RaE5eJ9AxDytQMDRiyUQYdGM",
  "key25": "5g13orUD1YeZaRDwvXNXAHB1TTtPCXRqNgtDcuwRzp7SNC4548i1sk4DP9G8GncuYUT6UtwhuTTr2xs79JQRQoZp",
  "key26": "5oYnWj7PNHCAcsm56PdDRo6KbNRTorh2u6r4J5qzVnwAWScoxfji8wQpPkmiF88nDH3wwtrhcVivyJJm8uvD6Cja",
  "key27": "4shTjfV27BKygCPuVNxHynFb9NiFuZYrKERFunqVoMxkFmrJA8XKaV5vFuz5bbo49tAKLwKShPKFLDNCzz7fZqwP",
  "key28": "KwNPdfbv6Kgr1gnspbKHriUUdUNcN9KuHVRC3dHCXPDtHyNVVggJYNVtCmmo8fcrGu8twcBxb4UEbfHFqDznxKz",
  "key29": "2fTEm7TXAbXejPRTvhewiHpTiAUL6QojHNUygKr1BbXrLxdoThKHU93XtHS81zpQtuRbkpqTnjsT9qFJa1fyidz"
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
