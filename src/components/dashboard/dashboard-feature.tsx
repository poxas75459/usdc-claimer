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
    "62ncw3N2z9Y1gtQ7cxCTSvGz7BPPcjGhgMJsonQAT78fDmdfzSGyRoKMcC2aPhQR8kkrTvNbyNpHB5WF3WysUUKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UJ3RERY1DBvdTsH3TkDkK89bYEu58xugzQQYFvT491o3j6CkMHxNkhRJv7YpnkiAXmSanCQirm9zkRx82mnKqn4",
  "key1": "4vpRUqhMdAye6AHxZrUCr3n7W8ANndnD2Qu6SonktNQpKRNaR4naNsoovKJuPZr7HAgkrQs5JUmFbUJwCkHMtZL3",
  "key2": "4UMsraDyiScyYMReGkANTJdhkAjQrCZtuQfG7sPzu44haAXnzF164msy1hXJMEQXpvSFR86zai9XxtDdGo911fBG",
  "key3": "3UDLdS5f9nXgaXHue8ZbNf42f6M3ZPc2a6xHokbyUqdV9qdQUsZcbTz8RXD3T7i79Puued7CgQYJuSRhYLJsNKj",
  "key4": "2NAVZT317AgPmhopqSw6eubNCM2WmKZy98q9WB652jpik75ZpPa7pD733NuSePQc8HmhpDN5jDWxcByGcdgmbZx7",
  "key5": "5SxyW7LmYymaa2AFUS497acVTikNKMPZQj41wvJnXbPaY15rAnxEwVE6YMCnjUfqViKpJoenybQk1FTqcqaEUqzf",
  "key6": "4c8xFWetVHRBQqYXRV2pnTa7edykDQJnSmNW93k8cKSKhfgvV9WJed7wXp3v7NhTuirtF9GPUdFSEyLJzV2muhGM",
  "key7": "4ARK64Pji9PkahdvNyVMQ89BEXLkmxdeffA4E9oGdiqB2S4zfBBtXLURWigdLFPQCYigkeqodHTivQTDYhcQFccw",
  "key8": "53GNP9xakDHoDXtRXX6EVPUafpvof1TSoAeU1vSupBtxqDProBfL8sSbbeHHizG4dbgbe7HXr8ioW1snpRagbidi",
  "key9": "2bsN8U2xkgRLRNGTt3TZNLFQogyqqavpgDUpzmHxKdzrm4MyXTxhQi4SXsz9YmdxA1V2J2GUxx1bA9Hv4w2WzvHT",
  "key10": "3QfULokdcVcyBhAZrFLkphErQnoG8ZR5gZmorbtC2YMwq9rjifXz1ACP99BzcWqNG6X7PA8vm3y5SuNqPa2c3eqh",
  "key11": "5wQvMRMfLrD5YzKResnfKjbHRM9VJBcUrd81uttKFDSXNB3JSxzMAfgTzf16SkKjnT43XaKmbwgceLv2VxCW5ZWM",
  "key12": "21aEmxzdKS9LXdVxjeyhmKNfqs1ToPLkTowg7pUJ7UzcE6CsfcTmYYLMLeJesDa9gLuf3VKieTAJ9gBEetsmsLCR",
  "key13": "3JTbykdZPbXWHeJ12LxsmxTVoH52mRPt3rXAzzcBeVnKESCRAMFbSuuiNkKTCBScsDKAwD6DufKmRSjZJLXp6Fgp",
  "key14": "4iHNAya7mkLAbCcPA7pNCqmg3p3VtGewdGReVvYchSfp3VmJ6k23uS36wDE78ZBUmMwK6kLwoxXbRtZgjpo7LvYU",
  "key15": "VJdSuMVa1GY68SYYDucymaoytMfVUYauZZQiX6n7aNuqZspjCjiGNcqLox2HU9R1Y3nQG2NMd35x3mWahXotJFA",
  "key16": "4vQoMYYBuz179vsZdqyqa4CabAQeqoP4ZEokCqmAec5c9YEhPPWA73MroPWeX4H1C9xj13VwbQmmJfKv7cfoVxKb",
  "key17": "3opn1paHBDTzRgvjNh6ieiURaeirQ4kC2SiS7Q9rbSBKK6oX8eWZXqTnNZjrrAfgAMBsmtXPxvgkFSY67SKGmH8Y",
  "key18": "4Yym55FtxmDeAC5ioCaZwqpyaFif5TEr51Wee2AAdLRiC1uJQXosbaM5PDrr2v39MEZ2TAumDiUnnEGpncgm7e7x",
  "key19": "3NHa3JQ7txtP25JWBezQy2NYEAfDoAmLn76jHFF9Hggon1VhE2Sn4kwGQd8ruAz1j58HRJCsqcF93MJLueYTpkqf",
  "key20": "2NQjR43NGx5KYrE6eoXzFhJQuNsG4Lf4yDBgSZZGotGQcZNxRmZ5Wjrwwa7aw7EYzQpSZ3Vg5earBwUtEZGXeVFh",
  "key21": "2WnJGuD8baGYkWRJps8Px7SHkJZzKNDRs46KwnLuhuWkNKByEaTRiPVLWX77NcRnAcvNvt9amvPUHfyiyCmq5L7L",
  "key22": "29wz9JsvCtw3rVYvcp2Jkr6eR7QCxdyvwKWq9fMzXsgPyEogxiFF1Pzx9jctGGrytNXyF9gGVhw3iAfXSNKCnFKe",
  "key23": "Ha3E3D2gqVDrc36JNnsaU4Mxs158sdgGhyavh3fHs1vboa1sL6HkHUAUXKmTzGudtVuTYqqHzNR29acqNraAGYU",
  "key24": "4ymgnm6Y2DsffAZvfoWydn1NKXFQpS93RDQwjoH76ZvjmyS1rZ3PpJZmUcVBFgqUA6R6krZtMqDot3nssRLjWe8z",
  "key25": "abq1jaqsdposwY6dipMmRhdaVG2z77ATdkdgrsxhypSK5gMFKic8PXgGU2UvUN29YLoFkCEYEJq82HdcVFK7RS5",
  "key26": "44fx39SNTKq6mPVWekQEw79AR4E7nU3hU6qQpXR66Td3UqPSarAjCUyDS4gtVwFfxUwQxN1desjUcPgjUbpgT9FG",
  "key27": "2Eo8y4anBKi5WfCDky9XKBDdV9NTSZbJH3oZDdHCZusT1TfhoMmRFNheAzc4ayaBBg4Xwjrbr2UMizggrkZuUeTc",
  "key28": "52DBViH9saPbY3HJgJgX26VdK2x3jMvy9suKNNx68GH7z9ps8kaRnqRBCc7J3xBVDxaDymJPayVWAQBuFoeH7z5H",
  "key29": "4Ndo3YD2jWcfC8tvShBNjXQZTStFuLER1sxSWwA24hCVLoWFwKG6YX727yAcL4iKFqkxzrtz2uuTn57xsaADi1np",
  "key30": "5NbEceUv7NF4TGELGEVHqMv4rqhk5tD1c1wfzNr4TMses7hAfHv74mMGwqbUZNRS5z9NNRavXD2qtvfMS32Wrd34",
  "key31": "5iMDCHaPPNhijm3mNENXcaaoKZ48hwqEnPkUnBn9YfEPByK3y83tZBLTSy95LM6Vd9Fg39qiVwpvvjE3vPUvA5Ag",
  "key32": "61PQQA6AivRuRjp4XPfHdg1wAZX8pnd5fNQ4QauqkmX6BwZhAD34nMW9kdWJD1nHq25wWSRqwNEX7fGqUKXF3Kzw",
  "key33": "2PTdqUENScD9aUQ2AxEiicGMUXEqP7ocwF6xBpBAkrWp9PKs2mG5M6xGWXYyLH7j5kqHrwvm54cSdAhjkbe2RjxH",
  "key34": "3MTYYrvXsTmprfvy6dD5y55cRun313BfVRqHYc8skoZK5uPSBc6hXBnuxeb8y7EbScsYwL9yQAWxe5fgVavmJrv4",
  "key35": "hsobL3BefjtdyD7aHkdp9y7MWEYUPoUKJvFzoh4vQMt6L8NigxQfAHdtHFXMLJZAwY1rRXe6fgcrjphnEv9KGzW",
  "key36": "3YLo4xkzuah8a4nnaCSevqvadnyucEGZd4rNA42kEke1wJ4d8w1SHjgwoQ21mpNXN6hLwSZGvt91uHwS7eTh5q4d",
  "key37": "5bmXkV2XYE5TFSyLtHEWk2dhiVXXVy8jCmv4mVRGc6rKVQ8Mkq7HXhPZ5yiYN7XQ9UksD3tgYpcno6qxbJD2JqMA",
  "key38": "NgxJnUh8T31C4AGwDr8BypGpomf5cv3VHUewnQdxDCxP2pryUA2WA1AegcWn7cissnRdNkemqFqG8X6U9veNcS9",
  "key39": "3ziNCaKCxEBXvYf5WzNhfE4LgpoDXW93tXmuA5iq14bQP1FSZZL4n2j4GXTK5wSAym11wucPpdFXS8PGywrSsXeh",
  "key40": "5aMKdezDo3asdSMjgGAVhtCNbvfpjXircaMi99rxtnSr7C5JR61NoZikQEYYfSVmPsgRQWPyqgXZTx3yMjEiSaeb"
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
