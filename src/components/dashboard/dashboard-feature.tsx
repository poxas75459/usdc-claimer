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
    "3PivSj1XLU8x1XvGeXKMm5S8uhwcygDssXVssTzkmHBdm4wDRmGffPFCLsofyFZopReDw4pTcpiGvHF4sVLQmR5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZALyH9ASRbaJi51inj42p5DmqTi9TRUJzjSuL1HCWp2r6GSYz4RE65CcQeKPxqb3bNG33a6SSbjP3rSdyvqvz4K",
  "key1": "5zgYYBmc4dizMotn38fdTBQaVYUaw33PUJ4AiME8xg8hXubwZxxUkCVxoAZXjxdbp2EtzUaQuHAQi7FjJQci1grc",
  "key2": "4fXdc1wsV18zYpkZdB5SPdF83GBy6aJhmXVkfBn9aoJVRJBZqxJ6wrz8rZb5LDhhRhsV61Arr7wZSMHqDx2bEoF9",
  "key3": "3hu4AoAFHGzDRWCKyDXK98w3CbEUusReoV9ToLCZpXbdxBNu5ZG33UXzs3LAdPuX8BQQvESPLU9EjN7PBfHk4bj6",
  "key4": "525oPbs2JShhZeyAJgFfvUgsHYEXzgCJogGaRbjtB9bfMiWgGE5eWZjQhixgG1izxKTsdkwLx5CY9BQweNGCwLZU",
  "key5": "3eAuYNfGRopcsjfxB9aWETDdSvFutLVeHwscsyBkbH5qRiefUaATLdMJLUg8RRKT6zDGHgU2xmML6doBTq6YKoTj",
  "key6": "CcyQgPf5TgcCg1mWhTXDXfdYykiCFjA41tFGgZj7Qjvktr4dVC8F3ykPJSr5N4K4wNgXvub2pzcHRTH1gbVhzxp",
  "key7": "4bCGzdGBszGVa4ZsTHDpDCWELMwKgtJdrE8kkYFwMzpm8ej8fiFTHZQqgWLQP53wCW8sCrnkxWrV4e7DuNdCrYp2",
  "key8": "4J8xoR7c9HGuMSZ3DZLz9zUrsgi7aRPtqRn5QGkmNDALtUx2NBiayvbeDtFZxecHXVqc3DL8FSg6J7vdKuU3svxi",
  "key9": "1266f73E6T1t1kTuvchVHrHF9rhFUsJLbzqFxaFrv6oWvhkcRothk7HZyrJeF32cWLmbdpSWWbUX1xPzaTCrVrAp",
  "key10": "GqrR2zPgK6GabNmUmd7CGwFDZcPHDXER6iZ2BjLK5ffucmXKTyyQyFpQXAgpqLQvtvrKbyZiatCfekyN3YoCXLo",
  "key11": "2R4TV9MsWpJQimrkyAh8RneGfmti3BNqX7w1MojMLcVoBdznvgmff7GQ7WRkNeaUKsh7xqHAssPcwB57rcPkz55z",
  "key12": "5tfY5ab27JbyqUkmnLPJjtWVvjFM5KmGbSovbrRGJEMJn7GPddqGagoysYmTuUb7H1M36Hrw4xdBcDkPzKwzkeP4",
  "key13": "4b1Kov61GhdLnKMRtZbn6nu8zmi8zmNez9PboG3qUGH1ZWMcxXA9kBH2hwq3cVaiYZSjV4w25v2izqNRx2H1bUVX",
  "key14": "65Dmu2XMBBWVdYKJX5XUy5RtMQuGCWyP39FxNfRnHZujrvt7WhPFSazoF9doh2nmzjzhF6DzEuczkawCiwkCR1mG",
  "key15": "2ZtRDGQaKe4irRpskSo1GgP56vvoXUHKtADRNytuN4t5vP98Wm6BXjbgDFmLagdAFPgr6iPaeRx4noStBsrnLMzU",
  "key16": "3koqw3HPMNCkDSqNLMgnmn8c9731ihLt2qKHGKFoE5sKrvGJS8fFazEENMref6ngHxvHzLs6rSLzVB41dkgtHrSA",
  "key17": "4VJWXstMNgR3QLuxxofCLz683gbsCXdfozaNZT9rjh4j9e1zKgYkxnEBMS8Vnkq8LomfQtjCfNTMzHAE6DLM7k8z",
  "key18": "47HvVsR9LyTHvgX9PuY5ydcxcfPmXhPKUSUmEMUXaUa8mFYNgCM5oxRk5FPaFCXs2X8aPfCrMXPx4TpD4t5YkPu1",
  "key19": "4aPCJ9VeMwG75HbD5wfsmgSXJi2WT6e5yfg6hL8GkBM9qENBKb9AisUxkbfmm5vWQiVHq7dpZAXnUkyGZeqjUEgG",
  "key20": "3TvzuEsFWaeMh9N6HReY2CbdmVAZZAevN6JPthA5z7Nd59mJumkST63CMxUScGibeEC6UtiX2CZGfkSKQKE5Dpcr",
  "key21": "66XtLosGXVkeSyTiqVNGdpc2bSjeg67U5bWZy9MiCUfHpeQkiLouk1jsfr7YKRCJr4XkdvHakr8Cz1M8iGdoEyo",
  "key22": "3djP8p2cf6x5SrxZZymACVHPCeNhk1qR9VAA4iKwxrr1LMEzPeNubTdcoHCVRXWnaoSqzggmtvmbACusYuf8mQFK",
  "key23": "2wBfeBTEmgai5DHmW6z7cNi7QC418o5XEkGmPYUQBtGoEZoFMgBSYNhBeykrNFcJYfZ1w3DYNVjic1XpQo92cz7m",
  "key24": "5XJmKbzs4MpSN5oZ3rWk4CAt4g6h33JU3EScKmeDp36FKHa9g88RDfiM2RvQzQckQ6dAXUxSS2Mq4eTSoyi9XEdv",
  "key25": "2WYhTjhsJW3Mdy3Vb7QgjpWVNjiDLrRPoVxcrdbks8wFKn6Kk2rTvfFmaYLy1RywjoJ2R2er6HP7oTaEG9QZ3D2P",
  "key26": "65Y3KW8Esdk2qzzbRGkZDTWLmjeiMUqC6f9UZWN7wAQccXJeUDChW3XR6vDdgE1SYrQSShWLQUaTx4vS8WgArAAd"
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
