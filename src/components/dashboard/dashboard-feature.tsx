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
    "5amTcv15H4nZtUqK7UDTwE85VHMPUMbunqer9DVQvxqiAkDHpFWeKZZLXRUjdcVetvP91LsRuwTyz6aPuxwaBMwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lj8frfX291wzFf6zQbWvFzbBMwNL8SLQdisgy9XsQUSDkit6QmPMyFhkTRk3GmC1Htfi6BxLT5f5iHWZ27qzniB",
  "key1": "56eNzJ8m5jEqaBEAaWXCp6nCb9hgBdNoBGikWhwchKjAwfjbLHjDafPcUrMDqQyaGxLuXtdpmAdZ7B2yYzJEYHbn",
  "key2": "5DioKohGZiGJQ9yo9jhzoYxNfZT5DG6tL6VDSSm1tzPeLEXE3rbwxyBEf3jwRfzZr62isKMoRRYSDCazK71L7Ds9",
  "key3": "4A8Q6CuYZMGdRRkWF1xMrr7DJnG1kLXiioAh9MQD8AqvNbByeae2kC2gCaJE8PQkUnXwQZ9VMKNv6Ucbr4yq5qfP",
  "key4": "45bBPiRPC9maQNiWe8YYdpBBUtsH2cbirHLCDuQ3fbPDnqcEBhaHHtu9PgoxJ2UHek3P2cQkMmMs2EvmkEm6oqn",
  "key5": "2BTFce4Nti96shaY9RG5H3UX7uPb7DiojRVf7e1PhyHZkE64N5DiB2sZdM2ByrviFoNBkcw1sDBBTGVcciJMSXq8",
  "key6": "5eebDUGbBiuisJFgZqwUEVVNaNuymLMpPWGRsnFjhM3y3ngZgjwZ54kXQMHK6C2o5BPc37kJDYHCh97mkPKWpVky",
  "key7": "577HjgSvWX9YYwjkp3BJJaWqCS3Lt5co677n3pZqZiM9ELWQ8Q7CJVKNZVagSLe7PypnqhwDBXmosNXVMhbMYy3p",
  "key8": "5RTLigW7zGTCFrFNzntkTALd54W8e3oqJYHbo1edamSGk4V9zHTFFCTVHDYGveWdkGd5iHvxAawy2M77hNkt5hJW",
  "key9": "64boD4Rfnrfd1Wgn5LTZG7dUFqv73JJ7HExwvjWKgYJYy1goR9yZPBq7dAVyarh442GBGWfF45aPfcVTcaMeAKE8",
  "key10": "2j6hjiHEyqB2nYsULuxytnvUiM7D3EvsT6fFvXS3KfRTZUFrhkgpDwjHcLirGNDqkSWbf44e2rQ5MwcEuH16BG94",
  "key11": "45S9g4qySKPP3qSXUvuMws5xjQmYXE5MXSwy89jctuWbJVgsjyWFCUukgqHKebsSucvt3GEvwFQ3NhK5vgUrjQ58",
  "key12": "5LLTbQkTyGrT7b39Br6UiNLYXLorR7dqzvDwC4qK5TBN5zvojt3ehXXWzjySgq1PtTrFfroYuHU2Ejvx5BbL6NQS",
  "key13": "2WrBv7Yhp35uxTXzq9qXbSd3rxxcyaQaYMuFer8M1TPCSACQov7Jgg1cJPpFTKY6cKa6mVwadsmFRU2oB8xvVctm",
  "key14": "3aNYbMfPexXkeN5hFGZCv2JWv82j1MYuWQQ24dsjpCrGn2rcsdY4xdq3SVQkAwypL4GgNK54H2evHcXLqf6Z8mnY",
  "key15": "2FHGeYCnAF4PQFn89aSHKLGu8eJSt4iBxYTgPVYuuM5HKDEXopnSYizBQoXXR87ioafaq1UDNgwk7Dv7VwRnfoX3",
  "key16": "RUT1fRebWvFxx5qJruFJxANpeF1v2KoG5ocMVSsfiABinfqmyjy1WWbpFAUmR1rbEUcP1Nzq8hXdwMX7AnQkoq5",
  "key17": "2RWbCyKKRZTbK1QPiaBTpoxqJemWp9dJcT5EB2Akr6Vkpa67S7WPGBmMGyRU7JRBrennZFhoNe3FkjbKH2NhnrvT",
  "key18": "4A5FAFKCc8ky9PZKsB3CUH7rRzaEux5egA9ZoVNU193hMCPKqTD4EYAxyJUDE5YpVjrhmDSKbBiE4635b31So91F",
  "key19": "2RwVh9rDF8mggcFy2vW9sEMMqZ45KCsSyHsKEibv13pbK3xe69fqMHkv5tZsS41CFAo4PpT3aoFSKbwhsjTJDYS2",
  "key20": "2Y8tsniMBKLLAT4jLCvLJ6iE4uUtkZagXBXLsTXWuKNcCnCgV84HDWY59Zf1rsFqPjUBkUGsSJqCNYiDmx7t1N5w",
  "key21": "3fMTyjMxd29fgjzxVccfUKN4qNMrSEhMUkLiFNYkZD87SuaMetaXTW592XM4E3HEzzFJqdfhvd3y7t69JMBLKbYA",
  "key22": "nYbfV3cp7uuupMxAhuPALST918NM2WwGRDuXfD4xMMLnWAbh2Zvum9Fjc2mgm44vkofLNmZbhNr8jjs28jCJwin",
  "key23": "5GYiTQDTDCBhRECn3LKWFRL8MUZMuJsBbFaQ6JnM87Kg5sfk3HhgpY241AdKh5m9WdaGseNmAu8WdZRU3zyDhDRb",
  "key24": "4h8Qf17TPmNyPgWtWjX9A4b7TmieRPWvizWjn2kWNzscJEtPzmRvZFv2LsKhh1MDv8YEicQveqEUPYgA73aKmn7j",
  "key25": "52aczr91TWB5KwpdtYNd9nXihZFYcWvf6oHewn45PWuFjNvmtcB92EZBCvq6iu9Yuo485uaPs5sXRKpBrvJHZyXD"
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
