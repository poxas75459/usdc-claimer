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
    "5mm1RFhbCH7rdwKHgAb21iNMHCTCNfEb7XWF9spWFFhFbAVVoXtnBhbnjYrwAm1Kwxno2AszdPDFjLcQchiRWxRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ggi1VkQLfvRTmqwDR6kXpUA3TZrJga54C5XUbQYL9sc1SjYHsZazqZQyXw2RYpsUCmNiRSXLvzhop4iyH1iRHJm",
  "key1": "44unhE9wySw1qkrpCMooArfewPZp4MYXgfis9773u2oeio5MyVJXLqnGvH36D34Vq4ykMXghGrsDPR2cPQ5vHHYd",
  "key2": "3VvMDW7FcJaCLexGX8VfyKbH1wUMUHzHqFrAhmACMD5HMRNwSVw2yhREFzM3gY4nFgFmivs3q2AEhS17hxumdsU1",
  "key3": "UQCZM5WVBMcaqQAV8ZMMMqZ8Y2pzp5tFZxEqTBpYcRTYYsYS8SH6xkdVxtEfLfkEgaUpDNiFsWgU1pjS954MzCm",
  "key4": "4Wo6zpk1Z3xMoCykkhDWL4mmbdHTPqpyzQaw8kyYNHV6pVZmsvyQTGEtMymUXMMB9PAbgVDCNu1n44BNhVnWKDHw",
  "key5": "5VR5YJfxCV178QZRXtXjP4VeFf55pNELff3PLcUeWZsTQ6T3PkzchnUeC9T28cwACmnT6v5SCaSnxEaGJLhFLkJW",
  "key6": "XXJu8jiYesrQhM5i6yRBwZ8iey5BHQ5jvrjPLLFd2Xb5HJPCvPFJgjRk7WbQhqX896vHatKCagG6jYuHJ5xV5SA",
  "key7": "4W7VEW5uFRWRJ9fE1FctZutTRa2Hj3Xk4aXHhWsG1tht6FG2FUgSUm9j5bWJsFqRcPYtdXJn8WEXbDw2gEV7yS9s",
  "key8": "45wvTnCbaVj3RnDRSau2Purqw6URVUCqWe2155zB7sTo3wrSSTFMMsoWAshEMuyWuAWFPWwL6y1yRtf2TYnFj5AG",
  "key9": "3pXNdGdnBxnetAkZfiW4fW3j4MVjEMumg14BS7qAjCVGm8wXPxAD4wZzBLbHNgQAcrCjJ3CGPSW3AkKsL7sKCpnR",
  "key10": "4c6ER31gaohSunyf7qbnARWstWS4dZHevoLiPS7tSeemVEG3KTv3cAU34W2D2m6YZ565yj7iQDbwr4MJKUWVV4wp",
  "key11": "2uTGxpHhUfVzCqa9xeXJkPuT4WkPRt3KeCUTpa6anqD6Z2565EbDE7YQ9BCkTyN7YVyLSDjJAAwf1RfVHr5Fwbx3",
  "key12": "2yJweX3YYEZuMH1L3o8kPH3wAdDpw2ZNWudNBZWdbzrhSkxNVM7wpidYbTgmuSS6bnmPzshi69AJSQe91TujzHbH",
  "key13": "3W8xfXEx7VCctV85unUT7LUXprp8RJ7pAESLC8PAYoXkd24Zro5vh5qA9qJxaRYPXRjpVJM3Lkhkz6cKr9a1f1A6",
  "key14": "371qEiTZ9dop3g2PX74As4rapJxAwUWKTrKqfW5XsJiPhirBpZdAiAoppEMJDabQ41hASwtFuqgfG2445rL9ecf8",
  "key15": "4QPktJN4Uys8cugcZHYoR59HWXF7z5iSpCxsocKATGd8zretg3REcb3D17TVCZgNaXHaGbNRdXubrmQ3qH5hCDXd",
  "key16": "jogH3gwdoTFMC4Cc9tMgCWXpVaNXhXiq1ZgJ2yWPQ8HGWMFS3ohGXbzqk6iMmD1z7cHgBeRoESu6Vu5ZuGSuqfL",
  "key17": "QH6SVKoP2GKtLdRoWXnBBs8K21EoRQ1W6631guoh8TNPBHZs7iLdw2Ba9qfa31GHSxi9NcC3ZJd8EnN7VFWhBwn",
  "key18": "3AR9rkG2PEHNRzNn2wap33BB124qMsnCbyQs74gAVtVbEAY4NoiRffsKbDJ4xS8NzU1VuD8RND2TtdbApbGHmn5w",
  "key19": "2wU64UjZW7TXZ7FZ2K89yZYKUobnYGgYNK4AagFhgEgym8pio8gqfjPuZEQHMWgcH7Vek51GWe1c9wzHUThXCco1",
  "key20": "2Kg1qtJ4azdsimt87HFhrVRk4FR3owdwVD9kLL7cZzyqdzHxa4k9VnQHdgggmfgcKRiBkgS7arh2CqJ2GLhM131i",
  "key21": "2B9rmDpQ22NS7U23sW9gWPbxRK9neA3vXjBQrYNbidra53umuRes5sSBUYvnsP3Jos49BFqKpY8eUVJwaGinoqPT",
  "key22": "5GdP5d4GnU5hpNMFDeqZQsXs1QroPjk2eUagRSMbEPDPNWf49MwN73G3rBNE4rWkwgbi6nM1XwLNbyWgWakGspcQ",
  "key23": "r81cDZx1aGZv1R8r6vHoWybJ9fQZTCZ1vVJe1r4gmVzDX2Fp1LKh9Q1tTwzu7TxEgrS8ETBJmN8GSNHsZJzviEh",
  "key24": "37kAjtReWncyH1rU4258kFfsUPQhGZSmECSmnyRK3JCDSKQ5HLLjtBvpjM3Zh3nm6NUFXrhQ2wH3cRhWLmQm69HB",
  "key25": "41tdFAFHo3UkHBfoghFhm6ZLVZv47XDkuQKqpxHaihdhwyrCrpDfDDG4Ycg2GbgZ1p7kUJ1szTxySYdTLcfts3dw",
  "key26": "4sD3351TGgxcoebnJNJ8dzb6XHiNyypzM3ujivqFgCMvYvEpMj7sLEKdZLQJapXxHBAjsx5GiSSZjuxvxrnhgVxx",
  "key27": "8F9sXrQtb6xRDfDwx9JLWEeASuSNHZ4WgfyG2iaex7DwtaqJXQhrtoFneEZfvdSWnMi8AC4W4TppSC9ABHr19eL",
  "key28": "4qLFSuaCn25yZj3vpteiWP7GYESetxMUak3mtRuoCs6BKXk9NFAZGVPNynGNfFT6MXAsa2jksmY8XD8evENBbFG7"
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
