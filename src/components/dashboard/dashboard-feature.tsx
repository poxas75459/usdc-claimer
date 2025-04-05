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
    "35Y5uht2z6DkCag2XTnZEmA1a4BNE38s6UBktqk72uDxouD2NEh4Y6fCVFpDHNTxHjHCPAjNev8d5tM9kXbePzLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JBbTRvEBEk6mv3CUnz5sBc2FUFk2MVoDKEnPSHeop1tu7tFAbsJUV3zM4cGvVsq435Gfm1Vnw97oQw4bB5WPaQP",
  "key1": "x8A4PrvgpDVgnruy7LV7XVHpYrMMnJv7Ls3vYN6fauAHqr3KU4ntGUMJdGMiVdmPad1kiP1StWEtffBd5QGzUZn",
  "key2": "4a6qMj7ZttfatGMGtPJoGHtgyDWi8DNkPoXemX2N7f3TMFcJvmYS5ad37ADFJBjFYqzbi6Mq87nixu2P99VWovp9",
  "key3": "3R1QP9aMMibyRy2NE9158dZ4SCQu3gvwX6a2ejzJjri5jQNmT9ZzBZHMsJyefeg6HUdN2oQPC2BperGP1YChCAe1",
  "key4": "3aup7ZzG5hk9KirMotUKG3vmySyHwfoquSQJSa7wFncB7FCCCjhze8LZNMAkCmrJEFCjKgvzJS1ReXFk4EzMkuyw",
  "key5": "5GepTuG3L6ZVKSpvbacTTMkbEU1F7oisewUrEZzGnNmEcSGtEwE3yFtJPXUU6fcFbzRGBvDA8ewMvF3N4QDu7Yc4",
  "key6": "F43TLqtDZ5NpThtYup3SnM2Z6h49dVebdqHcY1MfQVDX15sdevj2n8X2mZ76YKBxoT6xDD9EkGXdKouKApusfNB",
  "key7": "26aHKajCQYjcnPyTDwh1gPfMDahKVVgapRKRTdPHLEFrtgzoXuPHyYtGR9q5A23r5rJ6PiuKwFATN2ztde1N99rX",
  "key8": "GWLTbXsEZKKrPbyuSS962gsRdHCZKFneZWo4QC24ovUiC7kFEAWJTAfXttcHZA6s1YS7SsuRRa2h76cbGPVGoFG",
  "key9": "4k4VeTFDDWfj3osQMSqqENvGVyXrepVNUiHPjinMgzzMgZQJGkGn1TM8XqsKkRCsaisQU5r4pVQS3jQ6MbSzWW34",
  "key10": "5WYWmnJS4KdbNrxDRQ7YJYkqz8XfL1fBdtJPv25qnt5b4r75AptEELyZL9XJ53maRA9uk491k7G7mCGmyvWwMkr6",
  "key11": "53b3VqHWPTptwabpxyUdZwVtx8HeWq2yChkpeaMVaiu1hZtAgRRJGUGsKVAJ4Y7wR1uGHVTAwDkmR26sdWBp13jS",
  "key12": "4pgC7hBFNq74hkfjwj4xahsf6sfKw54TiWxTvFfHmcGH9oLSaxn9qX854M8EYzcfGTT23Af4kVcy5rauVn7tGC3V",
  "key13": "3oafsPMkRD6T9eV2J4aUKUamgnPDPBzxPhDJWQWyzKuCgxPWMXjWk4pH6YN5apKoehzbJjUe1P6k7iTQZQJS7rpe",
  "key14": "nwP7wi5CHSEw2G2SYQaHBd7EdXfWMw9kQXZqByNdu7iEP4sqmaB5GFkTnYENDv7nfevJyb8GAwP7WiwKzb81FiT",
  "key15": "44XgoGG7h7Pw2BHWBbwJ9XeDtw9vTWBnzPeueshRumz6iYDacAu2A2L7vdyhkk3X78CUoZh4fKF3sEBkFRs3zcGq",
  "key16": "5sh9Q3YqpadCGqhVJprDJP1uMJx8k3vqMg8nFHuUEr4o41LNKHKRqncdFKf797HMFxEgeHzWWGLdUBLybEiqzJH2",
  "key17": "59sTRqm3ZXxiBSZCbu9ATHXDtpkn8Axu1VK5HqTwmP8E7aUs99eCLyi3tz55XVPmAj2xWKTKeq7p3SmbnCrVgKM",
  "key18": "4SLpWf5Y11r1ghG9R2hdvKuHjw5Y8joGiXSPetKQvWu9Xfv9dAH3BsG9x8DMgkj4vV2VUxZXbpnGxvJfni1WutAa",
  "key19": "65WsBeQgW49jK2nMVuV82PGhRsqrDtnx8J9riYS4mZcQEiniUsUpxgqm3QjM68gT1crB3bLeAUK3oDtR5cwLJy6T",
  "key20": "3Lrcaz4t4PCn49ofvwUjq3gRWiuSN2MiWeucx23NtE2n4MC8DGHHQ2fJkLe84P3biZZYGRQStTZCCLcyFUdinoG2",
  "key21": "3CeyNq3BfgWxwLH17d2cnHZaVqDidQ1GwpxgRKcvuPaRRW8YquC5rhhfbkpnBGogQi87BwcaEmWiRUsm64Ko4Hom",
  "key22": "2MiNVTezCw2A1XniN7c1YHKBs1acWDnDmcbhKQSa5JzzhqiUJAcrXaUGpxNtdKEsHwiq3AX65sJ6KQpVAXYFytBa",
  "key23": "3breaEq2fUoVWA9NY328YE5JWTE2q1VGVdinQjBXXYa4zGn72UT4SFLXQdTtkLZWjYgH8JHynoy8uzr3yWinQMXf",
  "key24": "3JLpX7fevTdFmvZNWmiAZ4bsrXzrg9pirL7Ko1o4KAL5PCPbr96jTWCtMfqTbSMArrQURpjzMCq4gWC6iougLkd4",
  "key25": "jm67WhrtkNFgJqAJ5HJ19Q8pva7NrqPnoa9pXAqJB3YCsz39JqGZufYL66CsXW7rY2X6AHVzyKczSsZegyUqPhg",
  "key26": "4cn2VMJbxrgXFwtUR1xcFvYqHKtPyj6zhhQFWo4eRx9StVv46qqL1bstgJoPaAG4Eg5iJrg8HH3pj4uGS8QgQBoK",
  "key27": "2k65qw1j21SnpQPR8Jqs7TPDQVTXkHQV3d2wzeRUi82Lt5JJ5qfcohrbG2RHskKdnaF2jH6LELjKiSjaoSb2pJhk",
  "key28": "MuSFr7Kk5QkDzaa1eHZFoSYw3Pkxz92diekkp1edcgqwVMu8XtiiSNno1eU5HNWbGRPstMRJfDExwUQtuK1mDtA",
  "key29": "2iMZKWwAKtzmKp4eELAkSdoMSk3hujWzLeifA9gBhy5Ya3s79JfJA1K3MM2yr3jTHj4dvsh3waNpVgGgQck1Rc5N",
  "key30": "3aFb48FFM1YHX9fiEK3rcAwpraWThXW6DWxLud4kcTx6CLcQ7JHub9Z6s48FM2rkqAqcTSfat7nA24XruQNnnb5i",
  "key31": "ekAD31QxnGp38RJUzGhZDdLCUrKJutYDpAEcozwVzbHyjNSFW9Jp2o2KBktny9WXvAEyFLsFjXQhpESbqDx9k1N"
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
