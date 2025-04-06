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
    "2YWUguPmgmSpcHfSW1SyK5AHzrSsGNJrqqCD8UnxKPtdUxiBd5DPzfSNXV6VXdE3Hrt9yzd5oGeubmvJism7zRGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WXLUMtToLFWxAaAbszNwLZpBeDjePd1oST37BRXM7R1mDMb3d6ue4bi8DGp4uwJ6UGc44jQnwtHSJVCQBHQmnEL",
  "key1": "3g9prU1p7QtpwTh3QTYHeQGttB9o6ygGZomXuQXcCU1zPTFYLEhfUr2RoeVK2dR7wGmt8ygdeVDBsegDfYvrpXnw",
  "key2": "2VaSkkyXUwPuQaPQ6Xiv14coFPgekL2KAtzf6vciDCYe7NTnCX5gHPBDapbqj56pnVzRiBwgPfHuk5nLGzpvLxms",
  "key3": "frAS3xwftaUxmGNAoTzRorx1x5pscBwBcPH2jg9sGd46kh4eydBZsQsu6PKERxPR5rpQgMBXxMJgwWLQ8H95fd2",
  "key4": "3U4TtqPJCyuMpKSycqpbxD8G5DgtHERiaxtmgHP7zRWffjYx5vB9V94iyYo89aUTA2cTxLMDe3ZG5fgDWtUW7Q2b",
  "key5": "8nYFCYz6vKTHUDy3AgUMuLFqbLr3Qit6Gscqjowvai5AChD15a1Twh4GDCWNsVNB9y7Y3NtiwxroPyvVCcQm94i",
  "key6": "Tt7QFcEteKEgFUWTNsJ33e7AoqVoHGfXqcVXfLmV772ZwDFx3hU3wckhqrTM2JPQvr2vzj4ZQqCEEnJv2UeafNp",
  "key7": "2P8UvUYvXoN5DXBaMbf54biqdYekYz9uNzBbekrKWnsgdryTrTUS1yq6baVXsEc44ygELWEKqgsVD1HWBjYb3WiL",
  "key8": "jzatLBFhVSrtawsJUwLk54Le5AM5d5EhXJAuz96BMxcpcdny5nAWMc7PgigV7gL3PqXVK6K6urA5wpi2mZHGWzq",
  "key9": "2zVNMxY24XLWAQApvRSm1V5AWwh1c63a2FaHF6WLva4whjtr1G19AakRZCE7TJfrHj7ppFELeUnAoSDLBya5GPvV",
  "key10": "5w7ifzedJdaT3WpouUrPPaG2MNXpwkom1QwkDdJFhaEc4ymYuCXfmbP1VqFo6CYLZJA8NHCtoc8YvXVsB3rGLXtt",
  "key11": "4H65raU6bNBxUCgFD89zXmGt9YWSebP5EQFEoxmePWgR21JkEv8StmJzzh7diX3DZeajwrFHGYQRQGSQE8f6QbYf",
  "key12": "3DbHhmqciKGx5J6MW2CXukTt3HFXAJ22kNpVuZR6Zoch4UN39gS33b5HgmCnPswUFp22BwZyin8UGUAqN5ByW41V",
  "key13": "4egNcqhbnxqcADmcT1wsZY5WJeE4PJyqEdNoVDkKocfQdTDcwvEHhjRvufaAbEdft5jMximeq6SEHdH1Gh1AQ2Cd",
  "key14": "7A2h8JbJLXxCgmt3X6qBT4Ri5p3e5NJceSsHTTNRczZ7YsCHE4EXxkSTcSWZuSzbMeG579rf9F2SuTgLkxJDjJs",
  "key15": "2gsYoUHdkFoDqmeoQXEY3vDypQGdgKmhdoF6K2mtzaiN1WZPAyv9qLCLqi3V7BV23C4bJX2UjTaektxXw7aZ9hJ5",
  "key16": "5bB7HFiBHeQz5jJxRpHf8X9Y3PX6J3aW4ovga7RiB94CbvBfBEiTBR3A11mym3j6vC9zGDwFUt1J3wasQ88BvtV9",
  "key17": "36CxwkA491JQa76P2FYnMHDqubjppC8ehCgAub211uRexGQcgMMh9Bzv33PJaZ6ipGbkqwzxYx66HbiLovYRjtAq",
  "key18": "2pJvHFqUy83gMg4rBZw13ocBKaGLJu2NaxWLPt3chFbwYph2z3TrY5aHs4jf6yKDwa1bJK4U6MdkN1H7DyyLNibA",
  "key19": "24BKQA6Una5JirCPeTHEMD5hVAn1baku7h1DznynQC7zRK3xGHGqPrjsBpbRUTP3HiHLXSdeCD2yFWi81GJGMqnE",
  "key20": "KXfUqFzfwp2ppJqwjLBHAEFhRf5hipU9PwSUg3dy1FxNxLbdXqA9ZTeXQFirCcr97qB2p4vwX5mhBqE5qLG37UN",
  "key21": "nB95r1Y9LefKFVk4QJj9LJbpVxnn6v31mJEfyNUbTzzhwVhu6sjbfiBDUZCiLCX1RSaT4jAxyL4JvNRvdGxrfAg",
  "key22": "54ndw7FTCVeRxH8an82eCZb6iqPjayAVHDHsxMAEai7hPwJULr1JWJ6LhzGa3RBAAxXrL7Xj7jybAzErJQR5qZDN",
  "key23": "4iJ16RHCX6yPEK9TUbu3mwNg14L29c9Rw4LDbYAFi45fhPhrGbvLrQCNkQJgF4r1XP9ZNh3Ed75zJJnySo55qvTW",
  "key24": "3TkYhGsRc1gMGjkpbCyaEVCY7iokbyFv96HsdZsPU8M6ojSR6bZ9oxa5dCe2kNL2EBhffUdZyvPMXrXqXPh4qEca",
  "key25": "5mQXoKLbwtgeckGXhePZZY4aSVVKXVJqftaA8xtZLtuenZGGuMRkYceBAHQHN38fbV8n9CG69n9xdUsuhSwfsk8V",
  "key26": "5aEHuiuKvnzHXMAFmn5QzCjLyQ2P6hPar4Jubsn5fW8sbSEdxao4QrDvicQf69hEYdPQaULTXLQuXiQW3WaXX7jF",
  "key27": "2tuWQHDoWLN7hn6jd4ev5pUA4a1Ux1YXFAYQUgqNzGMA5AVZP6KmfmbVedsMk7BNkddKemrcJdr9gPB9v73yByyn",
  "key28": "2Q4r9t6N3AkYr1y54GVfdfFoSuvzjAPQJK2vXGFApDznksBqoFAVTzx4FvoyHtpMLz9wNeDMQsgZyWo4sgLkyVT",
  "key29": "4Q5XqzKr6KbNzjWWCEyg4dgxFdnfJ13N2H2FBT1B9Y2sbtdFdrPFz4WdMKBzGXrRe3d9jeTyP4QFYShfm993XbFs",
  "key30": "4Wd3R76E97ysMjPZ2i55oqtkqHjgt5SXSVjAkE8QiV3eb56rN65jz1wb8ee8wdxJAqpRdkN1W3rNpsjUJq6rTkc7",
  "key31": "4k45c1r5Cpag9vdEMQXotarxDMt4X3y9AXUkZZ1mCxZ9uAKcVpAGYyQm9JhkK8mwoSzYtaiJUCb36Vm412WPr8tp",
  "key32": "5M1wAqHA8DMWudFfzeNeduQa3zPnG3ySSAXhSGUTnMtCWq9e9xtnQ4no26ko5JH5VKdHsabE3XZG9oi327DzXizQ",
  "key33": "3fw1JN4frsgysDcWVhTcMVkLaoM69HwL8MVnt5jssJn3Qps1h2vdei2UePZKRrUxuFYpJFUT4MKVogmgL1pjNeyb",
  "key34": "3ARqgyzsJya6DMSvGXfzLHDWKrr7PsRf7R2QRLtZLi2T2QbCjkW9s8N7YNWJU6sowdmaWZdvp1pa4VvwU6jagTxk",
  "key35": "33fTTmH6PxhNmVwUp4z6SfARqu9c12KR23w657ckVh64JKztV1j4ywxt55tSCXWxQwU74Y5U6wym6eGZTkV1jTpk",
  "key36": "4kbGgE5jcofaHxJP5nHg7XKhB3EqrMYC6qhXuQRxAM8QcWTC2ooDN7SgUJMqVaHejNVfTsRkhvfVL81B5dGJyWf5",
  "key37": "29Vmy84Ux4bR8VhBHhtvDcCWrRkntoxMKpVUye3w6HFipSNsz2PwRgVUAoFLrsDW2mi8pMBFAKqgEdGJfjMd8ovt",
  "key38": "2TYNj2P2p67WrmZUJMZCUsNZw9SRwH6aYvhNCUnnjMPRdgcdCcRovXdS1BomyhdwCuLnNbxSVS8x51dxqpktRJM4"
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
