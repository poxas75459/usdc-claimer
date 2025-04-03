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
    "5TTJ9NbsdqGKr7PVdopbc4uTrwFMekY6MFY4wzsz9SBhmDk3C3y3aBDesZgxkpPf6hXompwkjPTa8P6PrDjXkg5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S9tL2uL1dT35RKYRmW3xA8f8uZBpsc38FUJaKH4vY4UfFuPXfz8aCb6LAstgK85PgpSPwbVWaWYvgg4Y5nTKcpG",
  "key1": "Ydk8Ec4uSkRVPotEzrog6pentowgVHCWC4UTiMpbmH23SzSLjcM2gGdCha3ScYbgikRYbkKZg11tbZuhW6TiL1E",
  "key2": "o3FYaQwhnLiZoqoTenAWTUg6UHd1ziLW5AS7UB45xaasn12SipFdim8gixbQPAbXEVs3dxuRhStNNmzMXpXUBAA",
  "key3": "2SQmdSJTtd7genbEH8m3oAacSV6PXf23edPiHReY4jrcoVxGzLR6VMh2hWrsWAp59mRf87TfnPA32hxEQGEchhsP",
  "key4": "U4GM3tFRRBLsDYyDNW2RdStiWZUqbz4A8z4KXTHxXPipcw4gqivZ7mZSNS5QrKy9qnLHGKBAUVZkrgvYR6FXW35",
  "key5": "RE78yeJhhWFHqKMM6g62KrW2USzJnvnVSy2ePAh6WKn2HxX1e7xdkxfw2E9UuPd5UppbvHbxZnjiDL7MEG7Vs54",
  "key6": "66sQVkzhGs49qns2ei6HcU252iGhDMowjpKxtLTKH9JaG52bwvpw8M1VYvok3LYfqfKhfvk7QiHX3h3yytAfDEK5",
  "key7": "VjQhG7HQiHiT2eutzWBAsRP39NSsEG1ozC6agYaiVkvd1rB93Hpgj1jaz4PFfXqEP6moAZCb3NHKbQmWHqjGpjR",
  "key8": "48vDCMgU6BYtRaJkicYootqdTrEc29Rf6BmY2wzajMBMuqKKSZmQNXKCiUrQgz6iiiitgWpGbiCHeD1UHcnvKVuf",
  "key9": "2DfEcPNx93pKgf8sxXAQRY18FBnUvZzfGsQZmLbsmxs3NBVr66ivdauFXCwNPC6ZLZpJdv91VbKJjWSVLsZLToT7",
  "key10": "74ejD5fSFP4uE625rBunmDQXjkoUz884huLNqUYp2Yq6qVXQKssKLJJ5XEzmM4477wWLm7EVtLciQLJdvxwgLqm",
  "key11": "4no1kGGQjwxu7d1B62Aj3GCzxayuWmcjYfxkpQo3C4hMm1WBsarSBmobqcxxwA6Daryc6QShAma4HSVCrQUZPMVB",
  "key12": "5s14dizj4ddJwRWWap38DmeeAMU5dhuiHCEP398r4ym6JjKJymichqR6bfFLJVzU4WDVR35HYvcJ7E4kop9UmmPe",
  "key13": "4CffjrYu3X7LE4aWkSrSW98kwQhN88eYVDbZ8VCiGW2nPiagSDvDzSutyYH8prbxYBqfxwQ5aweGg6CC2PnKWbuH",
  "key14": "2Y6Lv4P21NUouCDh8hQjGyJHNYrrDwqHKNfayGbvhBktEPFRtg2WtrWcPoSMVA6hkcRnZwD5H5syFRvcGo7BUdDG",
  "key15": "28BuYEgpCrcf1t8VbBQ79pE8tJUmuqqwRnSaguTdeTjvVVShDtAhDGXRjCVXPuqB2j3cYLcRyU6UKuZNHyh6DJwC",
  "key16": "2ywgKJnsJ8SA3QsDKZ5mpq7JsA9cUZvmhSh7mF3vYnbaYiQmCoAW8ssR6atswU2MPkF3SzAdV6Wxu7uLf4rDiKQG",
  "key17": "5jRwJd3im6dkTYbreDFuNfFikHDAT9yBjgj4g5e27LteYw34qVFJiaHcCh2MCA4Q8MTQy6BsStMoxx7yC7SPwshf",
  "key18": "2VUEE7jdnbVcqHCV2fj95d7CK2Pzsy1qrivDSaXpWu5XoWvn1KZbpRbCabwMTqymWwM6VvquHhdMs7hyJk6uRVXs",
  "key19": "4nWP5XiDad8aGW4dobvg9zatHLoh8RdvuAdVUmMPxWyKzqgN42W5akfT4Q9Y8s3bdis3XXC7hmyVqy8dUDd1s3tA",
  "key20": "44ibw27ezRysqkttUsq1pjqw9aqna5rdT8Q4qRN83rTEd7TuV924GLz463uLYTLFM4ijps86JFZqhVWjrxtSWUqg",
  "key21": "2H9shkmUasSSXbrSccXxFU2wJspBpFnCrxecGjzzujsQWwyhj1ts8c8yFQ9ZouDk8gqkYWoMuDH4bsZXqLqu46gw",
  "key22": "2zDA7RFN9WDn4qWAVV8kjqTUVgv6Xf9BD9Fe4FcqJsthtZmmgMEThJZuLiwRgazTiLkY1J7ggvLjsskFZToZBNXR",
  "key23": "3myHmCpGtUdB1Eewo9bXiRBF59XZXE4wRDa8x4G7KfxVyNM4Jqig78viDKYb3hRVugeMaCsBfBBTNAZq9iyM3c3m",
  "key24": "2RDyYA7hkFnnzZw2LZgHmvdUUSD41PFfyR8tDD99ZBBHKqLAKoDtkuLNG9K362zZfJYbBqsELWetENFR59wLmWkd",
  "key25": "2YGd2UHMTeQFRenrNP1QUE1ft3WjHSTxjjNFd9usmRuaCCESVLxCWos8NtF87sG5j7SSXS9Z4cy6dP7bq6REUKCN"
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
