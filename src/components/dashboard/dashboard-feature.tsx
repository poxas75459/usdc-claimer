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
    "2eN9XCKidVaZQwLr6sPLD5LpV7EEED77YFQZCfxARLDS3QjRJEN4vWdWwSzi6GmeohtVFkJHyhQ751EacSLjPyZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ztcreppnjV2ytWWSM8XfcswoDGk75rdU25hUfwvbSwQ4XfSdy4CJWo54q7ZU6bKPSWS6cMykgsZE131PPewVop4",
  "key1": "3rM1GP8m9nisGA2LfwJ3CWoXj4s1cJpcu6cj38gUSfbyu3qpvmLeau6BfqJEfxh4DhRs8VntpmJRdJordyngX9vy",
  "key2": "3NDtvrQ6VCXPpE3kxsCYEsEzMzd1r4xkjvH6og5rqd84SmNmwwhpbXWnsrT139qFB4AeB4Zqwr54aLprwpDCZTuA",
  "key3": "3FgxSrosJvSFHZ3MnHfxmkNDX5KsypbPzjNyo932SbPLZoL9waK8BdteASvpM4NsFEBm8fY2ULYF89thP6VJ3sJU",
  "key4": "53zQn69q9A35nqXYNxkMy8FY4STAp9gtNYFg7KXHXHew1ShJKy5qtm8UiMhGVQk7em92KhU8ubQgxtkUxSHohsQT",
  "key5": "2rgzjz1zyaf3Tpg3fJnpx4NMFaGxsXcYgMLvpL2GUcgmtcAKuhqqSzGjUAPeLXXv8ev1JSit2tn1UhtN2J1BdG5G",
  "key6": "ZSYJp9UuweJ28ZCyfUsdyn4YABbipKdNYt3c31rzjSuoHDbpqz7YzXgsHQVYgi2djGCKYdVHwhesWopcYC26TqF",
  "key7": "3vKkNk8c2iPXQtfqpMCw8cgpVPwCgvRiZVuYy14ofZSMnyBAwzo3vh1fW119ykzi49FYVCTuyGVSnemWzE7rtt8T",
  "key8": "4QU6fS7FTTtvgV6chTo85TLKrCyuu9TdDWtBSeEh4CBptgUB7cpKutVQ6o7bvT8ftSVcLCeQy3n1cFvry5UR48EF",
  "key9": "59AenuvgsRNTxLTSK8kQBH9idTirtCJQqNe3nWfBuawbhD82Ge1yuqJVt4Ly4bfyiXiSYjaYSg7murryuaUn9bf7",
  "key10": "5vxhBo95b5QPGLFm4cXrBksSPv1qoQgvzbN5EGJucijeSjUtnQKiNpjnC5NmZMTQnTS4ym2uehrDdXStpSr6Hx6D",
  "key11": "3yPnNmpyK1P7GpL9eE6GZ72jNBqn4cvVEbpDVjwdALrK659Q7A33BQaWGmWsNUMXgyRVQwBoeJs6XXvzSrmvGxnZ",
  "key12": "5GVHLrpuQU7zTG5wcBpBYeRhPtgDTUPj4ekEMi8vP18doX8XsXn76jBNCwyS7xNWyk4DxdSAzaF5MBtJxPVm2Cev",
  "key13": "W2B4qC9vdCiNfQNibYSeKowUJuyLz47oNVtsKgdiHRsSsY1HpKKHADRGMGefqW4wNLcsWHwoUxHZPiQCjwfLV5v",
  "key14": "Ea2cGmGFraLjzgNzQUgEt3EU2xnSwnhKxfVRaNhqFHmGUm8id24GZaXkjR9rFh159icv6zzYkFyJFeJwpyEduBx",
  "key15": "NDfjS3YBxetQ3jDVxMSCcb3UGAu1dBrBXWJrRvbVrDheoazqHSP1Ji9Yc17zTHYrfoYKDrqpp5x5rtRTaXTe9uS",
  "key16": "34ggKCN7TaMuwukVi54ivemMAGX6buJpGeVbTWPZsgjhmxcxEnhMApm4VU5bcZ5dkZQ2SExaJhy1AGJUXnTrMjVR",
  "key17": "3WVfy17jWeyZXKae7ejWDVwdfZCqZsxvMbvdscfHPqtkXTm7LtZDGT9sceWwM6AHycH4kjzf39Vu8getZU7rt5Y1",
  "key18": "5RNnDHNoKFDQsn8ai6Ec2SAdw83SRrVsCcUXVbHHXaEDGLmKGLXHEJcShcecUMYLw9sm2aiHC6AArScQwj7jYoGC",
  "key19": "stwGRLbp3Ksz5NRmyLNBXPRxLxFZ5BadwWDXjoaScCyp2DA4ZuwyZhsAdrAnexHPWXPeFPiJEygJw14ySASVDxX",
  "key20": "4BoyZmgEsgaEPcyECsJLnFvbzWw8SyUMcn2mpNtLpfQLDhBMhXgFEMny7tSEyVfbfYJ8Emm4DrYNKY2wkj7zdfo1",
  "key21": "Ax8jF8LQC4HWUV9BKp4KBypS2pi42Xf6dzj2z5kA9moyFVUjpEkPYzBmih13VhxGAydqGakMzzGKZjoMqeyiWhy",
  "key22": "378vG3wKLzqva1oWLjBC8D4VZuJhPSh1RbMPwApMEnD9B3E29AoQcF6mupeRsk4QQeUzSFEH9AMKPLc3BsQHVZda",
  "key23": "62HZD817DfwiKeUgEQ8viKSaiG5yokTQXTif1aqWmAsLJrV1asFo96oNNpnXMYcW1y1baBC9ve9VKFRXgXLB9K2B",
  "key24": "yecT6B18oHajoH64qDjmyZdM27S9WvS2Y1M2mspGxuzTvt5anov691RvPitoFeTHauVEKmP8JYR3P3qyrEckHk2",
  "key25": "5THkvby6hXFtaYMMo21d7AYvdkMerwAnD8WCMV2iQNwR7TVuHDNpwK8KDQLWg2QR6jvJVrdcJEZTPy4j2YgSjjvw",
  "key26": "5H8CiKCAGXRUC7XaBst1iSUSSLiSeSMzC4zpyuuWazqAFEk49MboQhENKQN89UkaV6fWg4uutkwQDw9S8FVD9KVn",
  "key27": "dkqLq4pLdz9r4EPiWNz996ogVXua3bGEC1z63M2HyYc52L3m6gwAXD5DDZUixZ5Vwh25JMDQKHC46AWHLWXciM7",
  "key28": "5zi6DqqzSszV3ujmYGcDGJLXZPvW2AygN49tytemRpzNqUpCs3jzfBfN7kiFvLLZEBfCbMbzA9mHLhBqNDLY8AWf"
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
