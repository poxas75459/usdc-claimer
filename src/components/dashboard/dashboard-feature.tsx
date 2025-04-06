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
    "1Q5hfzfdkjGvPvQWPV2t4txdbkFekdpMUbfw97YYfQU37UfRywyRW5viVkDvcKG7SYhJ9norhVNoDBsFLbhC7FZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UYLfVdTjv79Trh6G4CLmavYUTrgAe18BQC5c6p2seKP9eMNqgwJswYsHqEjoT6nRAERLbqc64CHM6eyX1thMBTm",
  "key1": "jrDNEnPkE4JK9FBBGRL49jbb4fH8bepgT55GKarP6TfaWt6V1VxHXoNjoVES19MuxvotGAWD7aKiZaFQamxg5uB",
  "key2": "38w12AhSBc4wRgaaEEnJHaSe7beBaptGKm9e2nZ4UdrPeMa1vwtoL5jhRwh346vR1oPwT267XpM4QgUCbBaJGUTj",
  "key3": "63ufz4c9jygd77uWVhgNAT4fCiyktGMX8NT5UBzdN5Syk4BSiNAf5SeznH9byBk6KKGoT1qgHjV4F28P2aiPG7wG",
  "key4": "62J6PvKbKY4L53gpr9Ur1cFRTAvYZbiufNN3NScJF8dP1BkeD5m2nMZxuHMsM2DYLFRYbwv2Ugg7hcJHMX2aHZSB",
  "key5": "28heqFpkYD9926cNdyBLn1nWEWivhmotASBvCkEaarxyFS4my9HFHLm22ojZexw8psPeTMVuSdpRRzwiF2yuhzhB",
  "key6": "54aV9cCAuyB2KekxkgUkeDM59AmxVFCFNaou96sCjR55qcUCqxHyWDuFvkBLzBp9LqACtbHSfeTLtYS31Y6zJ772",
  "key7": "5RSdZU54P3CBAmRThtxFd9w8hPvf4uaGe2eX6nN8r8AdAvyfJsFSUGYNgwJqPSV3oq2Ae1buhYCRJVp9n6Rs3oSu",
  "key8": "4TzS7yckf3xmpu4r3wrSCRaXBYrvBE6DVzhBTzJDkoY7fTbvHDZrnpyiThPcxadVCEsLdDwPLopHhywhLiTCvkUQ",
  "key9": "5zNR82viJmnEZmbCjwGWPU8hs4voXAfXLG9tGXRMMeqvbtSD4fAjrJ59MZK9ZfRFgqpqhZgM7YXgGGFUWQPj7XiA",
  "key10": "2yh3fUSk9P6AUey4YLPVyPMehyVecui6zTzKLz9iPaC4dfTu3QGYhpt14epY8XzPsWJFa4DVndNbWSUae6G1M6hU",
  "key11": "3dZq6advfXDhY2P5JxFBSSDLMTZcdzvZHJNibuR7ouTe27a13F3qfZ8jqWCEXhkC5gTgs6mq3ggVQiV3FsLGfWuG",
  "key12": "5jpsSFf7Y7uhm2sYe88CRKaWod1EgYVzdfKuwjzPWuCG58gycxDfL38pGv9UX6F9WNWmUB6xquyn9r69YTTeybnC",
  "key13": "3V3fwPEWFFKXyj3PFL2zqhWJBXnKz44nMCgPnPHdtmbLts9y57SQz2vAXe2Ht8U8vBZkHz2XiQngmwvbH2gSXJUe",
  "key14": "3qTLDWKTFtFB5H3zko6ooFRGukx5mfXUdwF4ue39pVX1kguTRwopjobbT9tuiWWc1twJ5FvMXfTepqu8YMDC3iK3",
  "key15": "TSji9QAWFNVhTdjNrXrXqKq5XGZKC9ScHcpizveivqkNvnLFwCwxeWrSPJp14NHiuPg2Xh2Bf862CdmRTDEa9Tv",
  "key16": "4ucWSy6Hkctixqxam6krUJ9UJUyaU8fm1BuPVfTdpAbPpLBWw7Ndmeg22YJqfncocm4C7fzH8JURLQV7WwCxhZ9d",
  "key17": "5Gd7sno6Fqbja1Wk1vpXdNWh7TpJ7npgNDMXKuh8w7WdT9AzArWGa82wHJUoN4Px1JWbWMJts1MQX4ftFHi11M98",
  "key18": "5iPtmrcEVugT5KurBVgFozkLc7XGqsjZsY16faevyKVLnF4Pdka9ic42dsk55P48SzSqvjaDbd9ouacM68xK1ACd",
  "key19": "2FG5j9vWJ7f2iNEB9zumP1LGR1gxzkXH9aYRfShZ6dVg324du5VuVGfBvrPdbaW9XMkJswEyDcVHECiAEHozVbgk",
  "key20": "qbFV98KEurQRB23QxBsRrqu6cV9WZq9FWpxiatoJsK1Mu2tSXyWZy3Jm1tbEZ1ohcR6NuobxNNWFAXbAXnq6bnd",
  "key21": "38AaC3baiVj2bEtu2WUjSoneaov8EWMLc7C8B8vgsYgqAxkVj7t74aHGerT6hXQqctMLgEM6ES2wJgmksDLfbPb2",
  "key22": "hcqRcxpBEibM9hFvkbdgUwUKcV7Pq7asMeTKjqmiG2Jo1R1UWWDsHScQisM2E2uDjC9rvakaCjFjDBitbE5TQW9",
  "key23": "64EwTEojeqeat4g7kMYFnfUhW5w89rtar7r789L4Zo5XJYFSi9qXAGSR1DqHRQvfP6XcXXny9owgNX8F5QwxDK3Y",
  "key24": "2iFEJFTtfHWYnq4zCxELP5xZedvBaHkC56j7TCEVTXSsE5kmt77yfFSi65S4yvQ2GRzYaMtinq4qiCRsh6BuS6LW"
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
