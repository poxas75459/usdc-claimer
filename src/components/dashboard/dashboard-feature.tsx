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
    "3pQwH9eCE9Km24cKTpdoVmMQDeEqU5A6ygtZ6J83ERnwwa7Sd9H27o84mEHAXjnATPxNvkfXkqMsWsf52ddnP3ud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "668sBPN4YHqeaAyCzE4TCWinmi8XNENaAHdWCnXsTLMnC35LSpYoXgpBgBdSaQJrSuqyvYC5nJkM8f6enpMGdLAu",
  "key1": "2pUcWtcJ6VfhZEDPbFx3wgzcvjXGYWoKH6tgztMjxRuvUtuJVXzvLaGtyxCUZDSgEG2KUCFSfT5hRSMujfZU8M7B",
  "key2": "2MxUCdS6meXAFMKwGuh7nEvZUoCCWo3c2X3izMxHS87iatE4YHpVThSbh6A9KXZG4dy89zAR8MZNszmJgdbAYnNf",
  "key3": "4ycdhxiuHup4K4fD1URfdiWvWEz61qAitE9LZY1k7BoAWRKx11WHdzBQ8wqfVSbjNwe4WpJWvzEhujjoxVwSj5ct",
  "key4": "3REAsWhQekn2qxdaktHZZ2M5ufN3FcGzXHfTLyQMjQpwKvqqFSpvCcehembczQCnJJhAi3cbgMYCWpH7dsoCjWMg",
  "key5": "4DJ12B9ZvtEjFe4A9Fh2pJKuXg7A6h4ncZuMTifDTPt4F2R1cXtMgevWCNVjWTK2ZqacpFpa6bJXRJawatxHJQYz",
  "key6": "fm61gnp7R6D6MrHRnzeeGCU5ujDsMnbp4yBRhbDE2dR7xa14DVjsZP6MA1PGcC4NqSW3XCeqsf3KaNBWdHLheX3",
  "key7": "52dZS4TEJbBoAYRA4jGDfyBkYkxZ9un9Jo3HU8HTPCVhcUMK2pgs3ndfPMccvqogNy34KuDDcUgh2aoC7WKqLZ1t",
  "key8": "YRwg84EKjFdaz1dJJ3vostQafjc9F2kqRfVEg1d3sugeyBR4pgKeFsNDmBUaX4ccAvKfdoWFwXLNwy6jnkTcmnT",
  "key9": "2VeumEZ3TDq72E8ji4okfVqmpZTx78cWwU6e9u46f6x1mTdDrAyFccbPN21KziYBMnmhGxrnfiJuPGijQouHAaYX",
  "key10": "41TVth7dLwD6UZHQ7PJZHknxiYiBcCbQt1iE8Ze1WyXqF7NUmSshAAugNwMioW4pHFuCKGaLeRhNduA4taZXWnGj",
  "key11": "26wHWXMexZjmXkwnhQaNVfGsrM2yoTLbPmfnT1FLhS2yv8ZhLdtqxMVJxoa4GwtuGURrT7zqkYftLeQfJJAa25ZQ",
  "key12": "5ortt1QJx6AbFN2NeHTMhiFJ7hphqt479Vns48cBKHx4bWoXouhxwab6qWAZwJRyRVQNrrs1akQPgJhi3tHtx6Av",
  "key13": "wUfejGhB719vdqaKobV8kTPMQYhpCYatmKk5wnfzzCk4LavBBbhY8CEfctWwWdZuFRJEXZ1wV2HGNvocUxTZyP7",
  "key14": "2gN5R942D9imzU6hYEt8VAwgMgTz7v73fviYbkU5pUF7ftdSw8B1Dvmt3wXtEzDPRBforFv4ABntBMzkwDNyQr6p",
  "key15": "3SPgbh1UbXEA7M7Qj2mW7rKkLcxEqr7y2AuHVyLVzEWoFUHedLq4SxdVgfEKiQn68gNVN7NteqgSZ6M3GYwuhbtv",
  "key16": "iPviHKuftV7QxBapAoAom54mEN5bVLZ21neMgCXjK9GXkBrSKBTc5VXxvbYx7AmirKCqyQFhDDTVSKYT5qgBg8m",
  "key17": "nxi87WrY7d9Sr5PbZ9fP6SGE2MWZ51GsLJqo6jHGp3pnh2jaq3TF8utEkY3RRhvpu2KwojE9G1qNeE9QsCBdy85",
  "key18": "5Bu4VXcHByN7rdvfovzssAYqnrLzBKUY3oabmb5CJymNj87ndDX5wWjJB7TubU1hXCXjaeQ6bWivKZeVjUNiWMxF",
  "key19": "2iEQ2fi1iy5povqrYH7J5yAKytsfoqdbcizN6YyXmGFFSrZQRhZ1qgnpibP3yocRMnAt9tKnsbzZcZpaEoqZVfSb",
  "key20": "4HrVbYiLTw2U97W5kPg3yBYMp938PfmhPy1k9hfs1R8CoNYdVbw2ShAHtHMGLoXkSkMMN5mhcukXaKUZBztBXBcu",
  "key21": "2Ap4cmTf9y4ZFvUAK1miCZ6H9Ex1A43VEwvkss8fgXwbF8943XHWuQCAPv3q9eDzLu3QdT394GTPjzcojGbMGo58",
  "key22": "4ThEdmGFSN3nTYFxcFEPb4pg25RFjYrt2SyfXCGSA5Xa1Hrj6rU9swq4vt1mBtpJvkH1BqsTP5WWprm4HJ5QoHmN",
  "key23": "jmYwDbR9w5qeuYPoy2q9W3fe59BS4hFptFNUGcAK7MqPei6Xo2HaMKQfbtPnATGdkPHzmYgiQE2KCWy7fiq3N55",
  "key24": "3LzaUiYinGUxLubLvY1cJYj2wzfjcsXehZw1T1hL4zFEhhM6gktJVaLW6mwVJW5WKAZnWi4AGkMGvKFSBpLdR63b",
  "key25": "66WHrZAZoozkq3cx7GnhdNMxgLPY12mcc7jbhmbpYgMN2GUQkH14CNr2LofjSRPCTRhAF38GZzWursvBZSzpZx8u",
  "key26": "QjX9X2RUnykhabi3xV1KDxnaMXMiUXVRm8mirvCCYVT5QeGiCjjtZwd2s1mpD7KkdZi5C4jtmmSam2AyPADJK4M",
  "key27": "323ZYZSCf2ntAx937MMksjXSb3K3WobJffecebKeUTCCT22mR74xqB7kv1KRZBPBQQcc7NbAzYWHhNhMf2SFxhkn",
  "key28": "3azDhUUUmdd4y3p3UnakVHoJDWxQDx9dWdAuQv33g4vNhWhdF6U6b6k2rhUpAFve9USWxf8DtH7x2brDec1sj8KN",
  "key29": "36qfNA4qDMx4SHmG75Q3h9P8te3VGdeLaFvRuyzDpXdjjTr2UF9ygV91ddXxUE13cDxSgxPGhBb29HM4x9mPHqZC",
  "key30": "C31CzQo4HPEFCWkSBwJS4uY3sjHsqdTQDSwTDG1begRBLTzF9gqaC2VcdnaQ41a9TXV3DZ618yZVXaLxcRBd1SW",
  "key31": "Gh4oRbC9DDJyRFFgiPVDH4LGeXztFKFpJa3GrokqA6pX86TryxS7rFWdYdqVNZDteoRU8vjGahzG8DxQ1Z36vNe",
  "key32": "31JXQRBuF7c4ondVcT7dKvfmZQZLWrFc2zgumKdN8d9KVvqj9w4wGhG19eGtLM65qbYvTLzaZB3afnojqWhUN7PB",
  "key33": "26beXgzzVwttrYz2pdvyhRjeX4Y7DQ2N3EiAKTaLSuFaAwvNeV7nNVSkdmooBYCwBQney95S9jNtAFNVALr1J46P",
  "key34": "asTgrqAwm48vgMyRHJ4q6XH3P7eBnn7ir2wS4GaB63Hfwn9mP5eDkBDfkuwz5rCbno2R6wRniBpPBNHTg1dYG7S"
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
