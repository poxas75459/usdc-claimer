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
    "5Xm7hkTiM1zw5T12U3kFB2Kb45xsomA9f8rc26fNs9DS6Z1giRkmN5N75tHqsw9822ED8HtTfjkLH2yUP57jtKNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qfSzYwcPTT8FuozsBHNYDeYpav378irEpPQHqK8RkfAkfkA42hNizDsPWGnLPTb5RTbtCUiFpZEcKmhLpm2U84A",
  "key1": "5PBgeRQU1vkbWBXGes9DrQmEkTAQJX7PzsbMPgnExLkTgP5fuhVtZyiwhnrFnP4x9G3LcbkeCj9ayvdW5sRsYU4W",
  "key2": "2L9PR9dbAm1T7N2BNvuZdWYSB3ZB2N15aXjp2M2eUnmdRMhEyAXGoxvUDN35vd5UDEkHdufyfqVyX3p3361DJp5g",
  "key3": "44KQSk9dt4zCWpThkXxyEuJ7tZ4fRE6WT8nnDsArFVF2nVx5DXHbjX4srr4cjDLEQeKZq7bNc4ZSjTAAVmWpTJd3",
  "key4": "4mG3k7SKqiyPTHTMWXC41rQfP3osAaUdBUQaTeBkLpjoVdKavxxZ9sk9QudQK6mmiAtC1CDw6eGja5puoAbdkgqe",
  "key5": "5WH7xkSoPtfChRt9tLZGDX2dwJ6xnkwLMEMzAgR4nSzN5NDMRfcvUR9nvg3BrjJ9YzMZsywkoET9MHHW9Ycybeo9",
  "key6": "4dshCHBdCQHufPNWvZG7TzcuiPSt1ejaPa74Kus7C1urV3T9kxzT5whjY3AaXKiMkARnymLxo8gShqJy2GS9R4TD",
  "key7": "3ViSeB8isYgizX6gGATaEEaA22cGb3MmsyauFzizpTkSJkXSMdTdT1SgnomFB6y3vPeBHViCTUkQgnU51sAwCQg3",
  "key8": "5LQJMGsQJL3tiStFJPYyiFgQWWbzVTcyQG8E4PpWiPf9GAaand6ZcY8dNTmxni6UY3S4q3VvDPt6gecwxPoDx1Jn",
  "key9": "63eBHdR97pa4rb6p78etCQtxeyBqkhvVXRCVRu9anApeMT31U69AUnUUtvZ7NdxirKxhUqo7rZMidHYiERFZici7",
  "key10": "5RaH9C8VQSiaRdrhrhhGu6G7wcqFYE3rtAzhXPS4D2cSsDMp2YeeUdpE544DoPHVWcFBekBfrGM7Zha9ux8p2jHH",
  "key11": "5sD3Xq3N5QQJE4YawdD5wW5h5fTpn5y1nTv1MsjPuYxgd7HMP44XwmMfeJvKLh1ghcEFokbb5dFoZSQx6uoJUMW6",
  "key12": "2oNQUizHC2z5aa6dZquawWv6SXPNkrSyGXBxzEBFKgwQuosWBbUdKbJPAMpFWch8AqQpSsDZ45knjy3q9F2aRq79",
  "key13": "3zuosgHXeYDuNbFctwwxUsKBDeiehszay89dehnVGJ2kuyvfMY6wLotbsDsKSkzMZ21G2YjpndEsDqtPu1j4kG6Z",
  "key14": "2uWT9b61Vj8UyCBKtGG9xFDRY3XomgcD5HMn3b4gBiDQR9sotcYdnQKPWKbdUzBSp9HNMfZpSa5HEJJPoURGS5k2",
  "key15": "5WAuxNfwz8EGu2dwpe6bfqAxk1GBkNQ5mrqiriQd8ZQqaFn9PKHSbTW89Nn9KYuEJc6noe2bbCPjjPLrygG2FAdn",
  "key16": "612i8UeW9Ysr7Et8J6GQ84bVWjYN6xVfJLV4GxUaz4TN2Qdnw6TDDTeghBbEM9dpmyLwXMjxWWBoNKXnQ3e1qudp",
  "key17": "2LZbhKSUAKUacccpuhUGLpaiH49hs8FvinJBeMvqdd8yGakQGHgoTpMvBcffQDfuqK3cj9iagByTX5BFrr7LYbPu",
  "key18": "h91McG5eRqJ21fFSbF4pE3REXk5rRJBXiNhvqCDK1puC1QwERjod4NAVkqivqcGQ6FrdiAs78A48EFYB1ftNpno",
  "key19": "3n9vxAiQUnj776HGUSsFL64KPJAzn7Bxqr7ycpJ23GreSvQqNhfEYrzpReJAuDPQDpL2dQ2NinBFcJyS1VbKYAQe",
  "key20": "3RscuJv6zHU3oVRT6Z7ZJpc86y3hhYkoTZ866gHTg6snEjsAR7mQQg39Z7Jzt693QUtd6hrZU1Y7MaTrQcm4HKGJ",
  "key21": "4X3v37z84SKTR6zmwvuPGTED1UWABvpDiZ2bYNXkWtSWpHzbCsUX3vtSWdRdr2W5t3pyH8cL6fbdLDp6Q1tcEXoT",
  "key22": "3QXQUfnaie3G6jBSjUErFAu8TLtiqffpq5yfNRkVwbMXF2oKoUh3upi6pyDPmvmm4HrkE4oPZg7Gr1FMjNLUub6x",
  "key23": "2j1AUQxqVYQ5SM3y6oD6hjd5qPtjD8hizoRAzrAWXRtdcP6pYD8dC2gXvbaL5NAQfyUUzoTutMCyhY9yEBULqJ9v",
  "key24": "2sNDxG1aLijsUuqnPW2fkC5XMstwg4MNhyqZGqa6MJKLGdr2opJZu7csBow9nfbVJvN93VpaEr3xXNatTTkqgdWR",
  "key25": "Nsw4Ln9y1ZuVB5XCQeb7XXLs3yEgwGLnhLdmagb6omz1NkpBz9e89xDANpBAAtUA6qLMx7RDuNo4rzYJ4k2XjcT",
  "key26": "fzBb5mGJrd1vQCAUKoYTvAgyZwsVtifvBcCk4BTGZu8EzsGJTWS3FSa8hcdZYvoJN9cX8sptCN6sTwMJjKoXWrD",
  "key27": "4RPD4ftFUX4WaFWdpjWi7LXQqLaTTtBby4XvFyKGWMeNfC4i8vjfkGgs5GCoWVST1KRRgWmYJyk2st6TRSbRjATt",
  "key28": "U6ddwFUWQ6mXBW1ajJxFRxMjPGoQ9dyNjA4Jj8pjVot8K8VuVd8hcw6mkrV4DdYeCQwgrwRFxHjPmhCGHN7bWbn",
  "key29": "37fs6CHcmBaPW4F8dJd8M9Uf9goxe4Ao8LFpYzv8QUVKNjX7DQ6f6FHkYyyBHtzkhpurVz3oimmHLT1VQ7KFQa29",
  "key30": "FZ2HbcVMowr3oyCJucKjYBieA8fncUoBry3zBi3pL3Kf6NgbU3EptLKoxQfHusV5hNca7ub5tZEH1tDaiwCVHFJ",
  "key31": "3Vz8feK82WHr4h7krnvsoE1RgYRxeg25SFxJAkRieyCHLa6K3L4FnwVqmbEMh26riLNM292JkvuxZG2cR4sy2SaK",
  "key32": "4mNwnLbnipDR8Po9n2ZnYbTSMoCcyCu7pEbgsrx4rGCsX9dpnJFQZHFKoqhGhmBvcfUe6uCDxLymfrtCcBojSJ8H",
  "key33": "5nR2U2BFDnFTS9SHH1vzGuxcJkzt4vRqakCEGAV1zpkSHkq8Df19vBANPDXZqBGAUJHKeJm1EhDJTp3BZoVYGNDe",
  "key34": "59YCEfnQZQubM9Cai5wxEhbvRJ87tc7FxHsu1R1joLxULo3yTaofk35DBmFAAJP8PV4C46M3ueewXMxRXKmfwYs2",
  "key35": "3bKbKjBm27yCJjRiwVXoBf1Xg4a2W5F59HFixrJFqWC8uRWt4sQsc4jTBArtcTgp73MwpycBkRETfakAfniaGuWP",
  "key36": "SjVuxbu8jc85SmiBnu5xLkkeYcJHhvpKQFzn23viRSUQboouhA89pH5TG5zxFv6V2EEM6yx98dkBc4UndX7qDSk",
  "key37": "4DnVnGtYTAkrBg7KMYq7EeExWnGk7oMPv9PWUuig7YYN6NfcChgeY9k7zvzSJHJnvNzqwDEn2iZ31GPWBYYhfkG4",
  "key38": "3oPa2JTkmK6qc9NaVxfWBJxAxMuHwi6ZiamBp7kadD6eqtQQAPmquEtLwCWn8borcNjVk9wkH5ZwLtet3xrAwfyh"
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
