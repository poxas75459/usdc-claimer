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
    "43LyFqFJip8KLAe86drZkGNCYouVaNW3c3cxFtKM4fHHQLp4pHwJDYjK9sfhh3VJpgeANLSDdd5s2HmjDPBFWZ4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2idaNNtqDvgvXstZW7JDaiHFvgeG68RX82HpAK6BSsTKV2mNRDRc4GXsPEm1yvSTipbUVPv14cexewb6j6NGg5t4",
  "key1": "5cJ33s3hM6MTcvPnKdbW3JrLTdCM5CkWTQGfjTaZ5e6ik8fwcfLwtFAyLtSm8hRZvPsqmaLVrwiBi1shysd1C7MY",
  "key2": "2CKTbNvmqVKDM5itWEGQevpLC2g6zDtny8w1SUCc8mtPhFzPap6bTht3VQQuqCBEbufmoHT8Bz8bDGod65rWeYJ7",
  "key3": "3cecn5j452BHcCBtumaj5dYtbgMrrGEy4GsUbk9Wwif3Tj85JABom6CbDBE62xLSk6vL9YDBvcKL9KEMebSrmubT",
  "key4": "29vcJeSkbjD8aT3YyQRcN9rLi3sJWeetRKgQs99sc86sn9gziihoWtLgwLDibWaz9xvgvjhZBuVesWJXqQ4cwszY",
  "key5": "2QzeBcp14NAPnJ5xefr8igVP7foLmPjJ1epBC4RYoLbiee9vDnwvM7mSz3gwNknScnrHq6iGUae4UPh2u2PdybFX",
  "key6": "3VyWoVY3XYhXqKYxzfHFdYNmhC5joe61sff9fzEgZMZKufvqviZWGs1NwY6ushJngCxvNqnSiT1XWvusNosYmFdW",
  "key7": "2puH3i1uuBXenaDJVZKGhs88tb3h1JLjmP6FPbreRHB9YbouvhWkgF8N8VzD9yJxdZuFqhXctbnyqcvbdGySgvSC",
  "key8": "3DdN8BCujvYxVaL3dZR9HhwTWFKbfu82xhEReMwdqZ6SUw7KnfZcYaW8RorxsxF4JnXXDMFpwdQLT5pUxUJrYj6o",
  "key9": "4E5y6dcBfwEwtZtVEfnm5W4kbpRkzwGSnmma73usCAPM9kAPmnFwMcC41baE8YffCuXLQSYrfW2Je9DFPGN2pnfP",
  "key10": "Rcbxa3qpkmGftA4pQbqZLnKqgwLX7Ce5H1Kj1TUSS6rsCiwyiFC3DwjFLcbCnWTvY1NyQY5fYxPpMnovtb9Cv9E",
  "key11": "5mDhJcRfmAG9w2Kiz24FRcUQG2FKPpzz5iyZxLt15BPneVsxzvnD9CtGF7kK84zZojYWZrRjibAEG6kEHBjpFc9P",
  "key12": "3chKWzN9rVF87dZW1rCnd6NGxps5EsWtraWRE19mKvbBiXCZF2BmjT34PWz7wz57vPNLqpHdggZ33FSJRkYQNwh7",
  "key13": "4DKRuzH22A6fxQLxkCaNkLnd2W3PmwUy3Ji9jugCWREVpLEmi7CcBSKSSD6YgJGymSSrDGNoujMxTbXPYoQAfGvd",
  "key14": "2f194UYYEytkGWPjc6Ec6fmZcyy7oreJfVcRt42WqdoPVUVtZ63ANxLcFGfRrRCg5QZxswcVJrxR9QmJ6gBEzj7t",
  "key15": "4YNU7sNx5DJgXDDBaQJASM83QuLtAx6Nt7D3EPwugwvkL2q2fhU978rtcDFQXrJVVwZjBoUmW59tR76sxFJT6xuY",
  "key16": "4cNocWZuSCqguC6QJDcZZpKb8KnvTpMV4c5BmC7BxKfPE3uimcy2cyQYRqqaNjDee5CHoLmVKMJSnGE5jFcfm1hs",
  "key17": "58wk4djpEPJKbYZvk4JuRKKjtnjLZXUNbuEyKCVqR37Nv8wFXJgfoHe1PXivokUm3DRJ54kR9935dkfSqk2MkXYN",
  "key18": "23xuwUHmgeMDRYePFdeZHtMURW2652cmcaXvMcwRuiTZjeMhz9PMdfp2X3tyPbHvRHV3dzoSSCq1CoztuyDxnYFD",
  "key19": "kwqsoVFHgwNyBw8NqTCHQo2KDTvtWhWRmbhrQdw3wqQRFs3G8LPWCMg4GjUH4RuHiXYXLactA15y9sbJArhw2gA",
  "key20": "44S6UxSbvC4XHSHbxgFuwnWApmZyiGuRfjeYuB7iVf3c8YfgKTxt4RpzSK7z2NcBvhFzp3pgmBarfCzSLAGGnq7Z",
  "key21": "RS5gdtMTdbAd9LKCbnBPXtrFgGx1nqFSVcy3p6q9rjSWPpNgQKLBG5orgp6YdNhxebizCGE4qJs5KYcpH9RZ9oP",
  "key22": "3Zh77e8s4zuQ3Cb1MX23FXxBnbjVPZk8YvArQHMpFmAohMNHMaAYZH2GPcMn4wrrfRg1cCx8mczsx33N6Jv1KEBU",
  "key23": "66Fr1ApWbtJYZfq2assvWsQz9pxYTRHutSCmauxAVTQaru3aQ5hkbXAkbf2x4G1G2pHnviUdWDkj5bGGzxyUm7o7",
  "key24": "53UJFtwkqjHnPw26YyqkDwBKzXYg548rGSLUr68iepdmRini9UWs8ZFz3BHvaHcGPcGe6TCBaaBdakyapGWi6GyW",
  "key25": "3fT7pGNVS3BUJcEBsCgRAPihQf5159Zxva98bG6s7AUFxxUbsWnzR68jt67BJpZ2mfD6mswYrhsXby44kssPr5dQ",
  "key26": "61VJwWcKxNnnByHr4TtrGUTViVBxo5RrKTempgzsrStQo6zyFSGynovcfehmQ8yWfD2X5sSaT8PMyFZjhcLzG4AK",
  "key27": "65pR4VRqBUXbySs5CpNMUCY6kKXCWYqBZbjzw88UdditwtNeeQH9vnX13QSQCdBgpUw2zmqQG7wJdXDbCzkW765N",
  "key28": "2GKJmksR8NnogorXjsNWAeecgRnKMEaFeE26V12tGYdssvnei1b4m6jWVZeoY7sg8F5mHxnG4zFBBCQDPZDsPmkC",
  "key29": "2xC8kRseZRTgrM5PJXWUkvvJBfirxQcKEmsGu27rbYFEVsMQmdNXtu6NF8hABXCFpD6FpKUFJg3cNMMMm1D5woGL",
  "key30": "MUejGRPYaYjoA4KdauLGAvB78S6LHKrodgPtsqFMDbud4QxTztA4cdWvwDSF5v34ALEr9KLpxggR7HD44uJcxVk"
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
