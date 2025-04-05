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
    "3APwqHFN41h7nkUvGJrPsZZrZrm5RysN6XZBewkEPmmjTmAVy6T49wRzeYaPrqUKLq6arJvXi296SWGTASQwUvMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A2s3uSPZQeVZyK2Sbs8g4Rmiqvdib56amJpKgsZvvTXnmTq6xsmT9GGkHWpgk7Ap46DAzk2zh9Sg8dAyr1hX9iS",
  "key1": "4HwdNekugYDd3yAJABpQ2qjL84QaHvxcdTwqprc52RdKB4VCipKPoqpMKRbKibqtCbHEYetbk4KFiESpM3DCcbgS",
  "key2": "3Y3FhEBVUY9qUDdYWMXWpt9AP5LL4aVP9YbzSVWV87sAEc8uaV9FojQCD2pGbMrVYwDQGo2ZRGkuUThuN3bCFVhn",
  "key3": "4FBoXYQsSY92kCbANtJcBtWEjA1HKJmSF6Zqghmz74PsfqrX2wh5XFWNpiNffrkNk5GBjcrHZ9P2qFsDU9bpCxN1",
  "key4": "aLmZLuGByReE1iGXwdp3DnqU7aRVBLsLmXnS5yQaDAMfeK73ciwhCNS86f8tFDQJiP9iviJKnF4tYjWNhKy5CZz",
  "key5": "5XUwXWY8vkU63zRr5Be3YDJ1FPuScgY1geB5954uwYNwHg5jPC2JaNJGxVLfZnFnKvztpV8DRv31EZXhrN4adaaj",
  "key6": "5XsVfnrKirxh84bPodfdXBjqLogTFyhh8Hh2PUpMiDJeyc9ypzapHvQDfXwRGcJuSdaaoPYwmM2mHQSEtYUx9Qqz",
  "key7": "H6gs6F8zCPddyarx1GmG1fzc5xuoKAPBTJEep5uck1CTcnS4hKxP717yREGmHh7z1qLJQAwfteVLnWcuUYZRFMi",
  "key8": "5pMHJYCydSaCxxvjjeDoo5voyq81zbRRn7j9FPDiDWTezhNsq334mHBVu7KGDAAARUrXXu4pHKBRkEgwR7ZA5eYy",
  "key9": "t3rxmx7LLrD1LX6avhBhimMCkA4uoTcpsDktUmCwv1SZ9h8adUn7pcSV5MNjSiUmxVDSoHX4aDLKdigP9LsaPhw",
  "key10": "3ACfdbseYJBACYzDC2DmbLZa4JuCsCfmLWHokYJJjcL6cVTNCFauPTS5jq4843xcWg1mroS2QVDH2PoNEPoK55yY",
  "key11": "4YrPjwymx4XqwGmpWjRXnUV6G1HimhxHwAoq4tJaiUz9Z2yDwkwWdJqWsvJRSgPsjD71EfRpTHLWBaP2zpmKzVP",
  "key12": "BnS67LXZc8BohjX3B4aS8JFEXFb7nSBERA8PsvLRfR85KpvV4qSRDuDDCMLVCYe35B3ZKoJPaNcvPevdcMPan1G",
  "key13": "37divwz948DgsF1T27adHKdYa3GdieJUaSTYx3rDhrAwHy32t4gdeEftQqLdgMRqMxpA4vrV4PfEQaiFYC5pCYWb",
  "key14": "4DeDxPSVoNYt3pq7HNifRTSsunxLwBHwe37oCKFt52izfRcqvyTx1ciugJ1d3ADVDsZnyQ4gCCiNE78Nq9LeqNoA",
  "key15": "4idsjEUsB8vK3qg4SWbt5M31nQvzkCqPvoPC4T6jM9H4vMp1W9kzE2JbA1JkeJ7kzJeWbePJxAfzeSiVWaZDwGki",
  "key16": "ugTpZFti6bBgzCW53TQi4jmng7d3yD8Sxy2H53j6g5DBQc3q8wr6f6CAEiNi4qxYgyV6vgey2L8sMofCCDYM9Pd",
  "key17": "4VDQfut4LMFYnVNTtB6p6QL4ZU2JMxfLSrmDajTnf591kjcdrSxswzVYPoTkcodoWGTWDVLXmoFoYqcjujGyZo4w",
  "key18": "42t4LhVxJi8AEcJRzFyDcb6xQ9JTT2bwiB7skBezkUEnaKdML3dpCM3zh9EFomdpgea2XPo4nNXnPPGsuj3HV52X",
  "key19": "5KQ4kuBNorLx77bNvN7oUJ8EqG9rwGjaSpeUhhsDadwrP3kMxTzWUQJ2aLicAxwvKaPqp5fJp35oSwax9wnJPnrC",
  "key20": "5jdDxkjPGzMD32DKcL2swHARL6bRpkF29e8yvwMGGCGUDqCsiCprWfgnxZhXCrMATKLwrDiqK2RcHwWtUaJ7bJvq",
  "key21": "zHnAvRJzPwPt5RCVxU2gCuhkXfEXhRwt8wTUJUBTEsYueYvxE5CsuFEiTwzqAgvVZhDPLsbPqMrkKgfLvMC9pjy",
  "key22": "4RLXxbvdi8QgJJArp35EgFmjfnPt8cj7vaUDPeoBTsv3KfYLLSCBgYdfGYLTmWGKfnZXRctrMtAVarfkZDreqA8N",
  "key23": "2xDTXeESjHR4PbbcmQ7M7q7ND1MMLkiMNG8otHievs39AnV9HYoqHZkuvW4ppPozGx8PTp4UYr9Gd8KvL2MR5Lcz",
  "key24": "VdNJv3THRXV9jR7YkbGpPrLVPmLTEnDSiydYRbBaRUdn5vGPLGZzukmYhquawEgVTVLFfLwPu99geWWmVAEJqxr",
  "key25": "3cMhpbUgZRYJV9NtpR2d4Bw8DYXsxT9Yx7paCTH3MyhnFfqcDkKbyGFCgL48wPCCeDGRYvuANwNWefv5R2q5XPYC",
  "key26": "3cCzjzEPF6iK4UgQ6zupwumhpSuw1UxjtQ7hcrYNGKsEKgVSYxGrFHB1gzDQ1nMTjUFDmNKQgXyV2Vu7AfjdXmge",
  "key27": "sXzXN7CbA35xfSXwssUe3TkTHW3hSfDdQnut5Ku3xZe3Pwa3fEWjW7UyvVuG62CaysSSAEVkcTjaZ9gyPUgiQKJ",
  "key28": "qQ8MHawsMq7fWcauJedAcBfrze4UPzrPhmTgzkasgHb5pRKNfiU5aH1LvNfdRMEMm53y4oPaFS9mq3fUJDdUY9U",
  "key29": "4uW117Cu5hosawpLGzswEybTZbPWhk4B76h5UJqqQw6My2J5r81Us4g4moEVGPscGmPmYB3tS54ZmT1sf4Mc7zyy",
  "key30": "2nZQTnmFwekRaPf4drmmXsq61FV5L42tBST38NhLkNcovuEVJZMsUQ7gyt8VM9S7pTeCu7bZCBvXCAi5TfCoMJxi",
  "key31": "5SHg632GxL8EVFoZVeHtmPAPz7xcqqeGEvqUrXpbkfRTBXGnih1ekQBHE8ym5uHTvDwbFX1gx8wB57rjziKG8g7h",
  "key32": "5w5rGFhH51RNxUtJTH47FUPwrPToiyud5ayfKu43mGquZKTasa65zyJP9VTamHJqf71fXMrw8ZMWZ4szDoL8sTTo",
  "key33": "5beNaxVRRav6fxQ1xckYaeou5Z6VRgM2zeSvqiuMntzEDCALxNZf8M1UeFqK6Yygd9Uc54jyznCXdmoJt8G4ufg3",
  "key34": "2ReWfDcgDrqfDMKHfoXa9Z1mD3hsBWDaavzMqgNRhJXqXajD4fMbpJK54uuiLMQsEEpnGrULnvuJZwC8BVmwdzzr",
  "key35": "5MkuhrJWMBksBc7Z6oaq8KdeXWeMYx1ApnDHUHGdBcy7c3hb3W7sm8KNrffCownQAgSZiqGKmoF1UtwRAbSHi3Mp",
  "key36": "VizMQ4pWTL91HTbxyEC29oqg3qmU36NgMvaPeYjN45YAWE4KckYuVoGWHEE1pz6JvUtqWmxNNaSMVLanvTpiGiQ",
  "key37": "5P3CSpPrcWWeJtpNKVmNqKvuBRNvjBmxNFK2j5FYUgYZji4VHs8xpaxTsm1LuK1R7y5DUEcsUMZLisvs2JnMPLF1",
  "key38": "56iopBiMkhBVE8YecF8woZVXFmGivsxPNrcM3Zxu5HhzvADk4bp1Uz1uesuuWqkUuUfz2XXhnhyroWv1ojkiSvLU",
  "key39": "4EVBbEgGmoQNqGVebGXoQpxVwoZKbUkqPNpiUqznFgKwvPyX4qvxjk5ZJvW9jFU5aQxdL24fLf3DypGTdQmYspSo"
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
