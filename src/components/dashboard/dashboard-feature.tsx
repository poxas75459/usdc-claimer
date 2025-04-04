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
    "5gWhBaeGojjaxshoTEdiahVvd4foYRgZBXTPrajGAv62bVt2uybtNCP2cHhCP7nBo19GWRiPFBTjdiEzv4EZUgew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yMRPjodzfCxtBEmAETQNGgztEyPxid5Y9sEd89CUyJRCVJft8cmZVHRruux37ZVBtgsV7TYuLvnKeb85hGhBz7v",
  "key1": "BzvZ7UVcY3MKDz1AmV1wkCLodXJXDQ7WjLvpdbmDAuDCAC1c67U78C8dLAsDnjBtaH2F5aiyYhsLUir4YFknB97",
  "key2": "42T9R1PTNhnbap61XLv3xWgNSFC9SX4pGhpphSrV8D5wgRrcha77bG9F1eWRuLEaR1NvTQbRgyjGEJZTybf9xuZs",
  "key3": "4QdL5aQKim9H5CwhYjkAiXnHzughf4hwRem4BTLMKecxwT5UigXoMEbe2bpDSzZtJCT5XDtrFXi4LTZx8vP3iDi1",
  "key4": "3soKbbMVZVPPaMUqdrJRZb97296C1H1N1BCv8SHYS3RvDDtZuziffuGybfsW6tsauur5BDP4DjfEtqM3ao8ayka1",
  "key5": "4oatYyVFv11KHaA8hXFNWKxS6L9zSsU6EUP64n7k5bfek24tir9QQa7EybANkog7Q4mQb8WGqTUQvbifHjHDNf7A",
  "key6": "45QDoAQdZkdn4ogQrWVftGmgByUCu3ujNrq5Ms8HekJNSswntDk9eRcPp1VuXQAJicKb6ed1TnNYF7mgnABHSLVn",
  "key7": "2HJQAbYXgvzuM5MrwMqTa1AL7fN47294J2HQ3BqtKPyJRLrKLRwjHq9EdwXQPeZ9v96MZkSfrmyBZasZPCozXpPk",
  "key8": "4RoJPkwDCJfyLK9dfM1t1KUy1cZchoBBSuJMpFVPfihDYm6N1NKDTaSsHgbiy63CUBn5ypmuWChhcmKiUdjJCCNc",
  "key9": "2uQxXH7c27UBkvpdfd2apEwaABo3H2fYgSEHV38GFV5DZ6CKcBtDP1g5F7U6f9X7tReghmkaANNzgkhSvsRrPWLx",
  "key10": "3DcoPSaDvrfFmvpwe92J77KzHfyxYn3CYtr7gmiYqxJMo2axT6sXjZQ2YEtkcFEqJYZNzX8Ka57MLfWrtbXtSn2z",
  "key11": "3GAKdm1oYaqd198UTyRxvWn97ZzxW9SbFhdNMsSfvarmoE1rBpP2Uka8jPMhdHd15G1aHjzs5M2TKKQfQvWH1Sz8",
  "key12": "48fzbWvZNMVCB3Qy3h1yDxVcePLPxBFZAy94oKn2G4PxSo2bNiRQadyhauAM7yDwjq19bcesX9J6yiqoKeZ71yof",
  "key13": "2F7yekvoL7KJeh4syfzGeHCZPXBEEDHWbAKVNxrWTuyq9LWh3DoMivqJ6F9pXRDG12Gd5dJMA7WmNkonFuQnMyWM",
  "key14": "5K2dY5Tc4KDHiD5WmB7W32U4PeeF76abJoXDtxHZ3Mv8EiVo5onWofuuCgXqCcLvz1PdJq3couWCo1GJpo1qqe8r",
  "key15": "5s92MonxMhoGdj8WHN3UVWuUQL5GCq82S71SKyGK6NsHo1jR6NsbJ17KtFkHCZW4TLx69jrktERkYoLzM45Gu6Zz",
  "key16": "2wyZ6rVe3YfJ1JqdsdwereEigU6bkAh5q7tsPnXaQ6MaGsCyJgXwgsFeLe5e4EK6TLfDRctej7iFLJHFXbn1HAKL",
  "key17": "4uiaK9AsCDhvUgAkTKFa4RTyWRacgAsyZAp8uDXgMs7mqnGWjdptFMSmskQs4NrLVhbdS6mWLxSVNQtMHCwm6NQu",
  "key18": "5atNWor4tc1mqYVyt1LYwV96M4Cu9WLFeiQ3JHSkow8Nen3L1KHyp5Zpv8fYVXd1GC3VB7jhknYCdmmEEubUe2NS",
  "key19": "TZ36wbGWexBucf8HtW2e3xfPnNQQjq47sNbCSdmE1sSTZZJrhC3eGGaLgBzu6B68J7AffAv37at4UeUmvKfbneg",
  "key20": "23FANN15mb1G1cgSQ1688uDxeQ1o7qhHcPWpawNzFsBwJvbW9xHphUjprpne4iFmo3PuvKurChc7Cs2gcxCpLsNi",
  "key21": "5etCdvbG9o1ntRJN1QbJKi1Ay1eBZWGzv8W5jeniSch7tfWNyFE3HrrVVgoWQrhadTUY8jZ5jNXnLhWYRtRkyg5f",
  "key22": "Asn1TgJyAzSFDTFWC8gJgrCoxTkrC5PECFRh78RMV6vdoEvog6vFVWBBYDYtKRSw7nsLU1rTHnd9DsQpAAigEvH",
  "key23": "3TCejUfNLxKSPTQG984nDW4H4mRAXTq634hMjSip6ncrt4dnqmdm5U8v15aQ2Y2Pt5F4F4t2mJSQv6ZpthtZTpb1",
  "key24": "29wCHUJ9AAPTgcYuM1pFjweBJBU57cj7g7EPeo3emJeftj8WQxDpvBpfpD7Eb1cZEYHjZ9ZRQGtpvvrJJn4Md44T",
  "key25": "4DVub6kzAGFPkQBJppyu278cPsvfXg8DK8uPwcx33k9S7mMiGmNU4GEzJ7PZrGc9SshrBe7msvSqLwa3pU55arUa",
  "key26": "4GXYZFWJGAZZ4V5pTY9Kf2DKJff28EWAow7UXm1JcyEmbBGiRbKtbNAjRXQAa1PXrjsCMmWFeYuG6KUAYhGT2o5Q",
  "key27": "4k56QxffpSNsvDCLPBW8LKx73MZQN8HPvgiUP4ffNke1CcBdg1M8Y2VfQb3q4QyLBMbRHjWQn2FCafTZwyqEiUWQ",
  "key28": "4R7z3MYMFwiLKam7A82AuJv53htDNXc2fi5kWDkPW1kiJnKrGCk1obYnntpuTp7hgXQMfvmpdGsKtiygPvp77yhC",
  "key29": "56yhQyJvb2ptVK8vYga3b6TPW4ovTiZGk7b6T1AAWEWvpXawXqhQnjMRdFnBsg8at413LgXJe6yMGhPJkzWNPD72",
  "key30": "3k8XLanaXPGngTSRNrXd7kxnt5ZmPRSNJbqUh7CwTjEuHxf5VDYrnDk48u7aPxEwsyZDVpXeDcKjdFgjyRn5ijjE",
  "key31": "5V57YpRCGD4NtA7LT3MioniUQGn8eVJeQNa3yhAZEKy4ini8YHuniF6D7ye7Leg5CeTRaysGwcpdpr2hPGSRmj2M",
  "key32": "4kvdEKVWQ7Pnky7oQurUcMTTjDm5hcaUANrZovNx1KgCKLPRyXoxSUGoZ7KqB6CiZsy3rFDzgt8viF7yn7miZ7xh"
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
