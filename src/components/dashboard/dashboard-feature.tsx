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
    "45vK7nvArSnYb82HVGBHVEVARPrEgs13PU1Ti4fjp3zPt8zxdDkGLkMHFf6Xc9q4i99XjrfZnZ2NvjjwX36TyF56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tWku4cK6r66C5TQbG5JxPQnbqJZ1C9ihH6bQaSpXgtaqUmqSwp7dvSRtoLQKaFLfwMQy9fHgduk9sY5wfDtucws",
  "key1": "E5t3Uke7sc83QjvgZn1ejVSZAzcE313PTEm5j9Ha8UuNu35jheUYieQLpiHokchEEHew6WBa8wDZGFGnsapkh69",
  "key2": "45oNQQy96tcgXNZthCMwqfH79zPJYg3jwtprgpuPQo97EP2Gye5EN8gZPdpDkf8koedeeY9w8RiuemyMPttaQ3Nk",
  "key3": "59eTsEggPioGFCrCcrpNScCDXwqyX6u9uHeB51qwRFDqFxrFShbLAKgc31S1Hd3CXZ8aUUw4cCxSMCHhnYG2uxcH",
  "key4": "5eDQXysH31WosVxpqdChHd7yu3EUPRQ6dqsNRuaM7dVrrCW9HS2mA6SXJ86X2Pxt2cLhcPWNkwUYndvF7SSP3sqm",
  "key5": "3HFg2bCRpLY4MxjC2EYKNxyGfeR4RRugsJb8uB1CYHYMR76cwxktEZdkcec24YF6HXJMUkLE2EKU85mJekfS2VYh",
  "key6": "Ccgg24LDJ8YEYLVALf1WPhPeREAazfZntxdcSXAPa3iQHyRpvczUtjacZmEcPU5mBzxYazergA8yAPgB91MTHXN",
  "key7": "3Ycmc3pyGUSzFz7r3gex9RVUipnM91VLr8BiLZJgzPixDX65pAPJQQZBscBZiNyimJ3aBALMhp9fJtKYgQ3EQfUW",
  "key8": "2Bg9tbhLpy9Ww71Mea9NmbiGdnwivLfkg4fVpMqDzVGFyg1mXNQ2ghV4zJr58HDPVH1U6TvJ8vxZvRpSfwE6B3Zd",
  "key9": "3UkJGvMmQ5rPH21mgoRbfmjwvdz2YTgJdinFKYCaVCMf7BgV6cPU94wEHp2MRd9YihV3AKg4QLirqim3E1ahsLQA",
  "key10": "8tphjA6PMBcwP3NBMyX3fDawj7V2Gr1PNLkoa2ANR6VNkpYJhbdoKp41ioic65ykCvRDsmpuurrRQp3a5W1wEtM",
  "key11": "3dHxhgGDY2KfjCJhSydkqbookjtEjQVufHARSFE4c2kFUQHhegLWDr53Cc12HpKLGQyjCX85tM7f5nA53DNSnART",
  "key12": "359vCmfSuQ2EfqdRaRJAxxhe7u21c8yznd9RbKKztLPt4WKDnfXPwYawPBCyQruvSdsLfcRWgsZJF9YLosU6vz3f",
  "key13": "5uCZ7owQA4TrZuLhgUNBLK91V7Eg3Ck6zgQX9VN1Sq1C7gNQ5uyse9qhuGbtrDbGc9bG8payjgotiYr5UH9ojZRs",
  "key14": "JqQ4rpUask6crPmtinLf3JkEeNQG91zCCibjBQZn39hogM3xqEPcxrwxEt9JEr9S5M2Ek5n4tbYT5M6jkRXG8WG",
  "key15": "5MiRcdARr6BCeF1mHxFYFfqKZJgdTM2UkYfJMJLniiQ8qfPRJ9UPxtvNEKSyrmZrDu5sgFm8VF8XnHqrGvnjnHu",
  "key16": "5cb1Y4NaHZaMxUUCGT8kPJAD96CpPVGmdaJCTnGwbdVVYnBkM5r7zngwkBiywEX2phUSzwhHRQ9k3fowVxC4G3RN",
  "key17": "3yxFWnDb2tf1QjwSenBZopFFcnwUsFLASW4qMZZtF7Vqp6qsKczMPExgJzoNe56AxvnboKdX7S1FwxYc65n2wZ7N",
  "key18": "4znsyc7gytYtPU6ZxLHWwtsucoXdcZjBMBWtiYmepWpVsjGhG3Vhm2c43ZzUt6zkWoZkfiPMjYHSVVT9CHvFWsoC",
  "key19": "37pBGg4TUppx7rbUGGP5EDK8Er5Se45RR27CiqYSXrTDe86szdWuiqTLhLjipCXZzaSG5c3WvF97cXCL8Jb9HxmZ",
  "key20": "x3tEr1JFwaTzAskZFf8Z8UGDyqd5HVKTxrodKCeQ4WMhVBaAbwQcYB3QhZSVjJAfYn4XaCfAZumWiWNtZKXM5CJ",
  "key21": "3V78Bg64C7VsHG7PEwYCX48AP8PaVht9rbfUGHv3GGfgMKjnmFe3aDPBEc6vH38xyz3kjn9mq6UPeS6xNJR6bGMZ",
  "key22": "53vmnayJGej6he58LAVSwaHXxowWmkk3aaL1yeGoNj4ajMN2jXMFskf4T3ZrJBREpnYyLQXjzW9pG2FFpMevUtvo",
  "key23": "5irkiAExjMo2dX9UTB9TB9F8mKzvEAN6ippnWJ7asCqvjuqzksftsriLZdug4QL53eJkYDGornkzk1fWA7aMzyK7",
  "key24": "55iX1pjApUoDDXtwALZRmMja5cYYxfBm25TdNT6XrkLghnk8sMdcnME7s6Nh2QbHUof7pJBpRWif3khd13ARnQaA",
  "key25": "59ypd2JygtckWTKDRCcK2kzSy2s2BrTN5t3BN7d75a6vRZZnTDCrdLvCX58DPm3sU8nUKXvCDBfTQtwJqAZh8Vzw"
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
