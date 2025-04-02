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
    "32QtrWj4VA51n9bcdQgjabGvLQVZNVyFsMnvogdjktCcpKAP8yRiqSJ4CStbpMqtTQJhqq8W8Q16pofozZneYrgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6464Zcp5CwwDsqqivX8UqptWQLgVdzS2AMJTf375s4xCRNxTBXzw1PjE7BZUmTUrKQ6wQMzsSS57iFKaXf14qcHb",
  "key1": "2nbysF9P9PFEKPmmzcue2pvmxnCK9qfyqxjG7hdGddSKTSXNwe8PCSx24W2HQwAHSMGykmFUA4YoJwzKAcruGq4w",
  "key2": "3vgm2N5r7CN3LW8YpVYYqAh7UPFAFp6Fa4XEKJJwFuENSJexkFY9pdjFQMeNEcoGnHSnGvzP5D7EBs22D1VfNiA2",
  "key3": "xGD4924BLMPPDahHe5EA34yzm5mm2kyW1vuKyzCc9SrFG5hguLqJHyrCx5MjiWEyha4zjTNELef7Vz9izGQCagf",
  "key4": "DX93CGNcPZNgFgoKyLBpmpr5c9szsrgjzzLUWuc8urSijHfCFqqks7rGKEGLk9tFJzxjzq4W5kARSRx9Xvj4ViC",
  "key5": "5fGyqkn2tV6GZ3SFsXWPmSoatSYAfBBcpcWQ8CqrdmXatxGedmua8Z6GNpfuGJot1kp2vCvWgjtoqpG2NYJJRumU",
  "key6": "2ZGRrTKvLfw1estZxeMGw3iwsAyHxgYhcfqVXAgZKD9eg5R9Gek2H1WXr3pnSdhGXBhadbF3QqZ2RFyAqtcoyimG",
  "key7": "4i92pVLQw1jUKSKaGRyZFFWNgC9UngmtXV8EY7PaKeNkdftc3JWMc9Z6Mv7Yhk6ys3QMgX9Htkgtp3xSnFPoGJ6u",
  "key8": "4hgnxKDPiQM5ypaLkrm2M5dtNX64ai4MptfLnDuKHGeYP3ueB7oHAV4L5i6eCno9H7QPpj7JKKtdHdFiZDdDfp4S",
  "key9": "4XqYjGoo2DZTdhjWaPjEuK5M9ZZHoyLsjNFe7unxSnfRCg38mxtZCteZTKNmfUPTcS7VDANd3zourVcFg1EXQvbv",
  "key10": "3auA7Ukx2dbVqSxU9V2eG8omTiGHEepdXWVkCY3T9D1c1uw49nXAwfnfKyR7wqz7M3x6qQ1ssBJ4xXNcnCsLK1AC",
  "key11": "4PLPruXijGzNPG1gXB7hWyVAR8y3vbZNcBZK4o6h4jMQQJ4Pd9c8qfr4xWjzopF7miCYQqFdqbeTnhc2kSTn1GUY",
  "key12": "3gP8UrUYQJY7DNTGFSXhA4hoRTF14oLUtrkXgENSqCF2aiTM3vd27Gry7Yvnp1NgFaXkTMRdQoeb1dUYSNc6NRwh",
  "key13": "4yhx9s17zSD94tAANRvohqLwWn6bjp4pVjaMxMyMohnVzYLLnQZavcSrWaAfg3mWKuL16jf9Wq7zXF7XxR8o7r4T",
  "key14": "FRaAbRjc8NZeHnNvzXSp5Rszy5gDBf5EmuMtyYxTFfJkhukqdvmHemkqVRAHtUrnWe4GKxp6M2skGdq9qAMT2VJ",
  "key15": "XwC36MBSiGasmqEmjgGnspu15kFiydAo1hQYQ7ejXX3dhVbc2XT2xQJv45UwzJtrKmzqHRhAbpqvPngw78qqqDY",
  "key16": "2QLZafjV7ujRsDERyUUBgY7juNEY8WkrgCk4X74MLyejyoc1mwbaw4irjWaXu9Aq3c6D48k4ikmvv2SGaSXBYvrE",
  "key17": "2Y8Vckmb8F7G39Pb3oR7kQh1vtiF9riaq7mN2yHRGifKtikw4nntSwgTN2C1x4turRARaGDy9VpUgNeVqdZpsWJU",
  "key18": "5BRYP3f9jZNiFsrvzvwJeiRB1aS5UXcEybKbycYaFhGgZntq8ZBV8tX2g9EkiaUV2fRuhRFK34P9qPFifDuPrFeJ",
  "key19": "4dzti4LHZd6qiGBcJHcKogMj89vCvAiaHyNydAeCnX4WkgfBnBh1BPxVgxkGGjm2HQi11oVjPdaxAub9ai6MUoFw",
  "key20": "9AF2JaS9RXnf23ar5kY6BW8zFHuLefibedKauCYbKN8groZosHHZS9EJgg6koy4eFnkzgBjmf9cHiYQP75HL33t",
  "key21": "4cfXAaRVPkvdrsuobqcDSqwzuWRiDnHSYG4ayLt4b7Q8wt9gKc3Z4KhGtJZCvvB7r35qUcWYrk82CY31EaC1jf7J",
  "key22": "DUKhcmfw9V5gCgaRALjFPwGz1gYktQxXY2RMFYgZd5oYpwpFwgkbcX9Ece14RhiPDdin58EAZm9MH7wzAKA5ddn",
  "key23": "5UvLBWQey6R9Xi1fs2QVf3XFRsaQvAaXVHNM58qNz6kWTG2DU7bdRJdS8V8ZNGhSzJ4bYQhYetcCsJkFQU8YoCGT",
  "key24": "55iXupmTGH9ahEHkiAcJcwaGqNrrQTLe9WWfc7yjmNr25YhDSiNJz1C4zF2eKXYMAmYHhtKq958ge5CMWhg5ikrj",
  "key25": "G1EfYB6A4PdWGT9wMFAZv7G3yss1AtuodvYzmQcEnGgFSSopGkmRtnpgfLCvY3rcGATcMtVPpSRTkKMVYACcjy1",
  "key26": "3kNVu8vhUjzM4uvrC94fvFQ27ixUzg3GuKr7p6L7noj3SwnADiJGjzdE4FYP2WSySMwGe8f32NKZDCjguQ5fRR3t"
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
