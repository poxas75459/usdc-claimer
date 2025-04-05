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
    "5BPRfFz6jLEWbe9JGiT1EXeWcBRvGPSbheJC7vybDpgGX3szwipocV2rcQGRnocS6VNwPznbce5KJ5QBu8rPUprg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26J8F11iSXvNcrtENV13vnpiiqoHydZRcCAc5Gb7MdFrX5UmtdqhyR1VL8fVdifRc7wLtVNvqszRm46YB9uqzGo6",
  "key1": "fn4qrEAeEeD9Cf4kkXWTygFoYqn1X2pGVTTcJfrcogZ74ULktrqikYrmw6cthv1DQcbkoRX73UFwmPo57HBaAEt",
  "key2": "5J6J7DArvQJBuywAWRaCHR9bga8xXBSGCwbesArwYHFAMw69cTjkRkqD5zZQeFTNk3i3vbp4daz36TqJgWS3xkT9",
  "key3": "2gKNt9SxufidN9h5gCa8BmmJ5n2MVUhCqADAzwSyDGX52weNTLP98yqUNEfBBRTUb7oesDtw9awaQTBiCTm2NLyi",
  "key4": "2RqMJV7AHTdJUEcPkCVe97BGHeqoCj3Us699dxnRsVLDzB27aRq1ZDxRNfVQW5U3AKZg6i5fAACDzPjCSYBTXg3f",
  "key5": "9tmkmvjTg2rXQV87JXokYaZM2p4KZ1eJ4UEoZsBZmwY22Ayettegtf8C8S55KVtRDCozwBvv4t9oDRFvQeerqZ3",
  "key6": "55DaeRfaNt67UsV17btk4aZ4LWnEze2KBSQ1yFBuBZTPzh2q3yaePEyzqMxT8g2iacNmEvQ8BZ596NuxhNAGRpRJ",
  "key7": "22w7dQZxJYDCHcGbHJDVHwsRgK88wCvCej7bZoy5PFg8mvV7chr2LtEijX6U5kPCezH4iwvwxikwTjKEWJSf6ms4",
  "key8": "5M5wAe3UaCdrzB9B6e1dvRetdHqTnmkvZEzZs5y2QLzttFVnYXX6CVueJ6husGbSzaMuv5DjXN8dkbeLw8Kgt8iA",
  "key9": "5ZMdanj6FpT9KT6SEBpivbBYmrcU3qtqB5hDNTM1UxFPnyfrHCwKuMeE2tLPv8xQ9VZyM1SamYbsuDrXG6tXyw4E",
  "key10": "C7aX4qQJmCthyGuoy9JB3BDN9ZMd2YZaG4cUs2wnz4qLmHUyXRdoqDMZmt1zB9tkDLXU1P93XgxZ377BefdLrMG",
  "key11": "64sbKzXqasBK31wJrhA2XJeb1j6NxDDea66HrZtaAa5Z4ryvV4DjcDaiiZkKqmxx7mNRibyNqrF8vqiAxiwAbbhP",
  "key12": "5CKTxtJxMytJrMnXzsovDyDHh2vWrqPmemu63tWzzt6UirZoS2X9tAeyLmaGW3ud2PAN2j7Z8pRpEMgSzDWmtFkL",
  "key13": "3D4kDsgU9GKDtpLY8pSSK7y5zR8G5iKboKjmdhMsEQj4dGqzBgaHetGwP9ojQono2a7jSD3VHMBvg7G7B1ruJck",
  "key14": "43HcbzX6Un2uhY5YtDwKPofp2tVyDZcUYqegYaa3TGnV8ymL19JWAF1V1wVccqgF8pHk4tLzKYbZt9E1U1eHDLqF",
  "key15": "3ohkvYNx1TUoheXkmercVWNkTivit8DcRLPyGGFvjaR6uwhmRyYuc8jMxrfTYBtZyQ1DELQar6zMPp5acgM7MgHD",
  "key16": "2qxu7BVTsuuUWJRLyC8HeEDy2NdrSosLh2UmeE3W3j6Y54MDjUjHdoT2RRPGVGHotKf1NYAj9L6RP1FzpcBfrgyS",
  "key17": "7YHMjBDkqQ6RHpfiECfBrHdTxx1haFNCpre7xsJZ2tNMdhBqBzYQLpzrFTusj3R8CRhz775ccyCJ7DjG5iaHK7S",
  "key18": "3ZeMX6TPtP7gvupUAJRvMYxRYPdqjE7WGZjqsmdH7DDAMRwfAb46nkgYVRhcbyboojbqnaVoXrKAoyKhzVmdENoQ",
  "key19": "4EhgoYa97Rkw95xUBTyn8SHuiz6j9WDEGNvzsX5UMkBFFLvLhThEAAsyNJVaSD5oNMh29FjyDVFY8oFrk8FyfXw7",
  "key20": "2AiTQSPPL6B6BaHTjvkBnw7nSv6aSANLjT78juatHdJqWx3UJ4gtHnaJtUQB9xmmbzFgdEPf2mjtr64T2hvwkz9s",
  "key21": "3ppZUzrbe1vhLyrVnPDNJUVzs9NPzmrLYrAtH8sz1puAnDuaa7WDz2bee93egfzJYVa2ahKc5Q8ZjStWNig1H52M",
  "key22": "dARURHskGoeipCMFBFmFk3PurroJs6aww5enP8zkUXCJTtuHsvRzqXyb7nPDHwyRfWAJP1kP6YDFzD1pFYhfiZG",
  "key23": "3XPNeopgoWV84NicwF7fVUquA7jGEADP5wF666Tz6Gfh4xgdcLnLCv18pH5Vf1KvtEr268P7PYtATtd2ukSf5x6",
  "key24": "rjqPzMf125FEd3C69Xcxs39e5tvZbtYebWLYVNYjxhuANnjtanfxiymhGCGXSr11spgjqxQQnqB3khJoBtnwqME",
  "key25": "2Ahddyv9oUnADUT4Dz5YN2ZnTUsnEN8WbWLfQUcCVpiJhvVEn2dADuwtTfxEoD3o8DWSZqjyvg63TAQ4zAtShBYt",
  "key26": "PSNtBVhsMRf46eVcyXjhwJ8yLYqL42TApDXa24dtbUn4Nt2s39s6xHHQiZk8BVJR1KPLRyXVuVJ4xaWFU4Qy4cB",
  "key27": "2DUMJBhp9bv6bifUsecRghYbwEqX5vFBmqZTkvtxCq9C2j4NhD3ov8MLsifgvhfvWatuJhhmKNCnyXD4QsEhx1t1",
  "key28": "YPuhsttApdFpt345nLNADYGqvU4c1zZwWmgsPJ6nd63cLHB4cMUBLhc9LLxU3ACTBLdezwYNNPZXk9rsrYY13QL",
  "key29": "yGfH3eGY8B6x1oQ9R8xzRv152MQSqh8632SWR1w7SiV86k9nJE5inZcztdXsFXFKm3V4Pp3qaFouhSPBV5ryuL2",
  "key30": "3zbjc1gCbkZJvnd5q3WUgRtUWytoLbjPcQwZkZT3PYSrDXJx29NRZCGcUDZnhuAw3PWUq2wxQ5j1WafPHTQ35s6a",
  "key31": "4RcpkAsadccaWdUbmi7cz2AM68UwfQb7vxeweTDbDMVKwt5AYXHKXVtVMo8f9WpzX1rXdnUquyfswbRnm3eu8T3n",
  "key32": "29BWCGjE6qCQsLDDDgAqPrrfyDvnxqStdB81HGmFTZVrdnzfjdcXjnDsBFE2XMfWfUAjknMGM2k3aDsoUqpqZU4m",
  "key33": "phHngCy8rN17V7sMv496zidiTkPBBsmUPUJd9dZQhWNu8sDRdwpqBCt89gpbpbHQma528WMTtYzA67FaVYS2ndT",
  "key34": "s2WH7eH2n4TY9ueCoj5yLt8sgMiqpdPVUPBfzGkYN667LXGkaq2WMJq6jsqb5ZVwBHa8N1DgS5zCMX5YeVeFT4k",
  "key35": "R2qtkNPQFUywgFovxcKtpGVfNopEPrsAxVLDnoXhttSVoeUL7pJ6cjMYYuRHFqrkqcgUZ6GZJVXpzXcWCyecyv3",
  "key36": "3jqeEdtbcsftvwVukiaTJgBeDRVxcimhq8jvZVj4MsHtySpv2zKr1iQ8k3FjQQ3TqHL6ageSvq94gitkEMN4124p",
  "key37": "2RtU1MmM124aMg9RfRArqpLqqey8xXHBzB5WcATotDofhtYgCYHjaLz2LESddikupKzYMMf4UTzSa7dDgisBky9D",
  "key38": "65vSvc8pb2VAfa9RpU28vfZQypUibGqDdJdF2RC1tLpqof8WDkwKdYT1ErP34RrnZk7gQY7Y8ohThHQp9kToJgm3"
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
