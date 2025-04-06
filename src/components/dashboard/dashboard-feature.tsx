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
    "2TXzPBm6YonLgVFUQPCQ3y74d5ZmNZQbSabUgdynq5kn1bciKGcCByuM3TrJMGPK3XscUzpmkujkpmLVBkdLQMLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YRDAbF7fthRuQUM8QyLmTNMmFd9kmxrtcfrYs59jAykFdAPHCUcrGuw9K6CkGDiXiSCmZWY9QzaGH1aw2R9LCW9",
  "key1": "4NGY2sWCSJeovbzyBHYfkqguDUzwGQt4z6qW7rPR8k1QBmwWYtgXp1H4juDXoQUSqdkvg4jnDKbWC4eAf56wgDEt",
  "key2": "4bEraw6MJeoXiyWFsyKtWqQaaCTnQFjF3YJGgQCBPNsXQQfPp2H5piEPQ3VjXnPD7rMRLiFJoqSfsiaZ6YoFbk11",
  "key3": "2re7TZ6K6Wcv7RWe1xbCQFB96ESUsMQ7EC1GkV9yNjXv5UBLNgSZMQsdbm8GNz418h7JDDt99gPSbvQhWDJXpHtd",
  "key4": "58MxHuhdL5rtNrQy3XRHv1XpSmTBd5RLyfCaAYWTPaZnzZx1hgL95YvJ8WeBChzjtnXVp4mjgUS2Qa1sYYtyz7C4",
  "key5": "2rWPuaAgNd5Zq6QgnqmFZLG578mA39Syufo6qpDYfMC933Dhces9HvbDv1UoJSdp6aoVkSNJQMSn5CB2Z9eh82y2",
  "key6": "3bXgiy57aG88UEcVs6mcDzPDun2W94ZtnjCnQU9xJCoCL1NncKSKPTKhstjpEUms2c5RpBXuvxAWTzEH9x82Xs18",
  "key7": "2VCYZMBaMW8DQud5sbCmTJZF6wthkF1a71Dxccn9KrcMZEG2ZydPzyHXw6H49A1KgLZ9a2YH9ZqpWb9LdNGaKEQG",
  "key8": "5dtnHBUgwL3rYzk5TongMvVDuhigQoS1ev7Qw6jJyCF6ameHGqsyCzKXP5jhNwietVDFdqxhZ1R9pZYsPh6nyyKV",
  "key9": "5Kkp6ec13WL7RPBgoq861Evq2NuBXu6XwVKa5EFnpH88wKuRrFTi3NHddbDEUpXzcaioTKV157t4YSMo5a5obkzu",
  "key10": "XbTzdiLpPV6EiFLQWmrL5ZufXezAsBEtP14LvwjQNcNPkXdAcb9eDHpx5XZVtTd3rqEf47uw5irL5AgyTbomfTs",
  "key11": "418d3yuq8dRcvToCUbTCyi7aV6PHkoLvhVx88otoMaY7prSCYxmqyhn7w4jC5Rk464ADComcRjCaH9exUGMtGz7t",
  "key12": "37ZK2HkU7GswuKpkTtdqYmZQx3h4VNcWaht1LApFsnsQFcUBHpLhrohpC2hcW3hofqYo4sNJ2drVFA9rzZb3L99G",
  "key13": "zwXB8QL4EGLKnY5wS6ZzUue2jvEAt8LNAAFSwrii34tvbAupKyWAgu5UzUocsqU2xfErmdiY6YcJ8CBMgv3VTzn",
  "key14": "2eccnwW4GJQZ7s3xYzc5xKCBKFgzFoq9gKkdKUmQGz2khmBgRWwHEofELX9LX6DxBoKY2JGQCzzJRrM6jiAhyD9",
  "key15": "vGwh3bvzg2Nb5Wvva9ETVKzv96em3FjegEzMEi3DnPg3ANPW5Q2a6jh9pHWhTFGu8HTCaMEVE7iCNDRkfeM4mP4",
  "key16": "41MxofKEsxSejzUesQ3fwPycWNGJ12VuiVV2RyK3V1SCYP8Jpmu154WRSX7HaiCuYfmRNFbdsYTixEz2XtmFsPkV",
  "key17": "3vYZc6pX6PsHc7UYspFgk1GGA4ReGyVthHiD1nohexQvFdFXszxQWdndi57KMvx7AmtFcK2cV6cAQ2ntfUvH1tvY",
  "key18": "5q49n12jmjKUnrs9fztkiFu55tD7VU2fevLoB4kZSRe1ZZrZGrhG4udvGM9yR8kshnsFTUNutg1xi4qSSZEpuPoV",
  "key19": "J5EkBbCtrTAMcUmmN3bPjCVmMmArKeAUxZEo7kzZFU2R4bjHK8gVCd9zamiPrhMU2abdnxqWZwP6aPqB5wRL9Cf",
  "key20": "zx2rLKivQEBNJpxQd7tuWk2rRsm3CXjAtuL8ZqSS8nJHtTxvzZzYtA8vRCrdHCXATuaVQdTPv76mSiHxvwqzzav",
  "key21": "562xC6prRKVHPMEHn4SY7eWhDAobM9RTaEh7ZZhkHAPTjenCZncsK1RTiNuFkDMJjGX1MZAKXHMe4MUa3NfMgMBy",
  "key22": "38XvESULnYmF9FF1G1MbuUorg6PYyzFU2sXWzqsdQzmM95HCCQGbdSZWGBFBseoMCgjGpSxL2uzR6WqJaAG49re7",
  "key23": "4EGK5CkQxyVDumMWU1BQqrk2mkXJfe57FBzhajL4SwELT1UKbLMYQ9djubYchiNqvq8SsGUCP94mhQkzk8wQ8tzF",
  "key24": "edKF5BE7ozMbmk3KrNTBWRkoR16TanAuW3sjTznCeVsVKopNfwNpbMFnTkJp2e6nTo6urnu6vgPRhvJoeaTGex1",
  "key25": "5cvBktJVwXdEWYeTV7vG4Zxva7P2cqhHN9DdQnHFcGjMDjpePbeELKEjDEg1duPcfHACiEHkuSAc8yehQgFBDvVK",
  "key26": "FQpXbUyMkVQHVi2aCGAesLFid1oaEisRUfr5Zupvf6iRdGvrPCB5v97S93inggB5FRKJdTUr14hzLxg5TTzfoiZ",
  "key27": "3LdzCAxb6zuKc8MDUg8ABmLz6LaUQwhoxt1V2FCfincpSCL7MgHHrBMZyMThvib1QHLhNQ7PDm5KofH5aMbhbx4d",
  "key28": "Dt5SV57iFuUWfdeJS6KscH4UaMKL37wtgtF7sFrV4Cg8R5GR89obstRPJwEXGXsXBdAMdxkDDmWrC1FTd6qiWNe",
  "key29": "2zy4ReLof8faViTv8VNt4r4fvhypNaGtLZKHzjgHZscgEUUMeXPYGJA4ED8zxVJY8PysRGiXaAjpWQ6P4Ft4n5ww",
  "key30": "2axJ9pR2aNZ7swUWa42z9qGQhrAbPMKUGCTwcriRVKyBHd2iVyPUPKZTBn8sj494duGAKke8BJqbWC4zqLAaYtiU",
  "key31": "ha5jobbLu9S3S8dxVav77MyzeCyyuT7ETg51PgD6MsXxnNHvVo8VoQKBaNQFmhAM4kU13o8W6cuNYKuRoy17Pk8",
  "key32": "3fyYnSTqZKPcuQ2fcmhaLYAc2LsrAJyseMCvdkT6mEKX5huk2AWsvGNFauFfvHCq9eAg8hzgHuqLUbzCoUHqAJN7"
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
