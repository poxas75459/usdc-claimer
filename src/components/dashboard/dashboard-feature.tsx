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
    "2gBbqtVecDtpgwgbwC2txG9XCtd5rYtaNp2DQXqZdmx3eraNWx6et8U4Yo3qsTE2GwEcoQWHXb2p5ALusLo74vi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31ymqQDDtprMnjmb3R8igQVNMpvHUprejpoLPMsRJEiA42Bnk25LFanV3TTSbT81p3MnxDN4EDtaNiVKbg9JDWy4",
  "key1": "2AkQxArGWFHVueyvur2dP8FrxwwZocdTN89EZpT5ZPSZAHXnHfea62LpD53fDjoZTdf9DuHm3wpTG8LY62Ubf5zd",
  "key2": "2UnUL3FQ63STweFmbHQxMYy4GCYbvW1fqXAtW7TqVrjUhXrKVDWXLjtd6ZS974PnDZjUVQMhzM85fHKhR7jfoEnh",
  "key3": "3f1CJpXEUm3D5KxtuMd7FQ8XYMHTPmpVSrJQtXcmy5BpY7LYXA5JmAHgefvUazoLNqGZEiqWXqJwRoZnAxz4AqJB",
  "key4": "4K7f7KJd7P8RXoufV9xVTKaq8JDftrWBRox3kgQgs5WDvSqzbVFyRWFmbAuGXxvLgCugUDErxrYW6tNL2G6Q1qQK",
  "key5": "3zZz45BDG2YwMPzRAMxp15o6rSZ1R76c5ZMD5eZ67HgZa6oeDXQEVctiEAKyDzAir2XoR1G5fvqDFuwETWAqqW4c",
  "key6": "5tJarybShhtgSP2u8hK2u5jVMeU8kycuy4QacXnm2Wq3nYQTAKi4fT6hm8x9K8D8dDRBpHEWwTqZ8XaGo2aVKowC",
  "key7": "298f8B1WSq62reWBwpqRd3hXwJTcwi3DsU48Mj6ybF4bXntCkzGKxz6twBzXDkV6URMRhWd9ChAnmoAEcvyUZrU4",
  "key8": "3mtUMmNYYv2J6jaYKgMEy2624NMPNRYJZKTyzL9LBmFaW3HrfeqoemEWtDWbMPSzfYNdBnSfzE6mXsV6xHTktWpB",
  "key9": "3bosu5cdNNrF6bCw8LMUmmxoeQ2P1NePDTJJRUWHoNYJEv6Ue1WTAEhJJCQCxwgqBE47EpiwbN2i7Z3o1ey2PkeG",
  "key10": "2NBam9vB27u6UnRRycqwCXKYTFJXWjsGLTToaRJ5HcdANhaAJWmpWE76an59M4SPVxA3rnTf5gLDrjt1jTmvfEnW",
  "key11": "4kwST9wm4wZcCgvF1sHf1xt6Em85WKAsoredDnLVwnawxZiUYgVFbxkwsMAGSYf9KqMN25YXapoJaVntRgSCnPYo",
  "key12": "5iu41i4QXm9NcW37gx8CXNCLmNg7SHQyk8x5v5gStE4YAyYFisC28cYQLsoYx1ciUThy6UsufxQHE8WHkyVhw59Y",
  "key13": "3Z1rXkY9kWJpRnN4qYQa5PLZ7fWXJX2XJKQx7z2eURm25o87ddL7EvYWEyBWtV56TLbDEXgq4wpdySQDGuEqVfbd",
  "key14": "5yA9uqz8HMgzhD89soGZUdWu7fqcPEAcwk5bRM9EHsRKxquYtrFcjWkxk4qnhvDQousn1AoYmNtz4fdy6innW1vY",
  "key15": "2dhfAtUaFWWsgEkkFRLTWaq9E6ZiV4fo8jkZNGFvTK4bt42P3V3vz8Rc5Q36mNkttuWsTDRjjiVrK4SZgraA4KSE",
  "key16": "4Ys6BfturKVhnLtoemWggf2oZZip6gMU2q78ycvcWj7p11jhqS6LTossFFRx3yaNM7CK9x3TTHJj8mvY9mVqtVai",
  "key17": "5CKZtx3q4zVCcbHNtQ4gWRSU9D5QcuD8b5j2JrcEYWxF3vEqachpj8gxpaBnAohhh5nWivzpZmQ9v6x6FkM5yaqN",
  "key18": "cAU3S8GbPTCPWHQwPKgJMrxXTHLt5fWcVPHgSnoYB6UQYCkzsDHw72joWvHyaiwvpqJ8HT1DPSn8w2iL2yZCK4Y",
  "key19": "BR4h1jm3zysYEereFRidDJpcSZmdCTNG8T7qf73wFiJXRoUdHXS7gY8nrvcAZi127A7hs219cSNuKYuYujfaR8D",
  "key20": "2vaMyhemWSPRjKMEHAxRvDZMgXZqAgRUZ5rcQkPFC2tv1orN92JJyCvQANoCpiiE8KyiFFVgoUDCN2YxkDgW8zGQ",
  "key21": "3iu1EpiNUiphj1a9VVisyDKjh4yLhNNQdfoRFS2HNehLpZo4iBX2gCJjkCiPXifh5oTgBcRxaeF8nGNiRfM5ETZ8",
  "key22": "6dx3xJtFNLMjX7CLT47fcYDaA3otoSdmCdDzrdY5EyWudidKqdtkx7m3MbR2EUTPzrRNfk2NF4ZDcHsDAgccZmA",
  "key23": "4vgDzyUTLAhpKu5fdZbX1ifMb5ZQford8p2A4JqRRYuyMqemgXUJSfbykaNbudHSbstKCyL8pjco4Gk9AgtcNLKC",
  "key24": "2SyzbAb7FFEMcQaZk1PEPcyhvuqXpHweEmVZmAJ5pZgiP7Kn9ASNn4KEjeVuFEd9zw2o1AcRhL41k7T4ofP53oiP",
  "key25": "2joWux4vUsHYSf5yGmgvXg7Wc6AELCiSFoZwYjT5ftUxcbbhqhPMPChM6Zk7gzKFEFubA1JDfyJLrfURCj1JuHw2",
  "key26": "A8DFqH38TES7secpdBStue74LJEKCQAQfaxCxAFJEZSL3ekXr17buER3rUDoPYdBphrKN34Tsx6AHt8UiHGnzXK",
  "key27": "48xu78ahZBAfdcvAcL9cpvzxPgi1Nim3pfijmv422x1hDyVkijHBmENCvZ3dgTC4QmJ5QdNo2Kj1HTjRjFhNRMhj",
  "key28": "4wEv6fGFuQjUsMMycuNuXXC6TDPxZPLCWzi3nsF1znWxCpQJD1hNTWL29XKAKsC88P3SgKFCwy7H6WthXvdUBrwE",
  "key29": "4RNKqjZRvUWgkG1HCJhMDZKr64h56tQQzLNNc1SaEEybH8FGa31FjWcbtrqa6hL8UpeRMRMTkHTQhcdGh2QxZARb",
  "key30": "4HRhy189fUG9seJ2xuUS6sFaCPUbj1sYARubb6BckDrRkQJ9d4YyZPoP493JoTFsfXn1YSMTKKsYkmci4W8o7i8s",
  "key31": "HiSajUrEti8duNknHdpYscT9gGsEGLTDEMU1Xncp8pnyzLUdgCqRfyUDWcpqc8r458aSEMCzwU5b3ULnDsQrayB",
  "key32": "4EiENViLSENzwG67LDEKH91VMqpy7gKGzuojk3n7ZoUeGUayGMT6RAfG2Nf46eM4NapMPLytQNyZFe1K6MAhVNKK",
  "key33": "4dGY4y9c8gueYDgVD6LztCrcNERWFK63TpWStozB5tc6aRapku1Pm8DPELfEEsgX75VSPvdp14QpJ2DHVGfxSax4",
  "key34": "4UoEDQ5UcdKbxhXtJJfY7oHSUiGkStq34UCrrRvP3wSezs8r8paRa2eniRXfGrFB34HnYTp9v7unUuZkREBwyTVF",
  "key35": "4zbvH6aeQgVLep2ebXghSyVre3cG5RH8eDMxPDWqvty11zasPqoaBsqL3hiSe4bdHxSR5S946DjKmCKZaQUhX3VA",
  "key36": "Hsf4vZtPNvwnikNB1cFUCLb6Vd5AdsnUaqfJUGhtZHLMq41Qxq5DgwYzHCVrMfZSmAL6oegUUN2YRSUaYouW1Qj",
  "key37": "2VUh7WT3YNQdXMCXMDG65WNrnZZrHmTt5bYbadovdHBZxz3LodBiFn7CfAFxRP22nv2mrWoRVVFxeRuR9ta5HjDV",
  "key38": "27MwFgsn3x8Md1xiwVJEvhnWbtXbPyuB5MYtFsbvR9aquZ2vCH9aKjdhKo1j4kZGquYtJyqtjKetkSzPwJd6GFFv",
  "key39": "4xCAsiwCbmVUdVEss2jmx4iVeagbFtSPviXmcNdGKq2ZUXBR9TdtTQguRuk8Hq3iX3Co1yweRRgd46MotekyoYRE",
  "key40": "4XycfjK5CvmPxhyyPArqJcxWcgPz8uqmQGJo4mFDh735S9j7BxGKbw6sNybNqfAMDzXGz6rViG8dHKcLkmpEypy1"
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
