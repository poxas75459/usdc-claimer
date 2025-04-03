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
    "2L7NAdxWDnAkLKsJFv8fwgrhsaEPRmrFmumNjncVzryoEvpW5fMWE5JeWnabQvrMQ2etccuBAYDicFdVj5CuUUZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q3Rw6Jvoc7f9VnmtkXsqnvx3WAEkc6zyUwmbGyWUMAcfPT6ZRh97odw9n18xJF4phPVC6EMGW1NxWU7kqwzGhAK",
  "key1": "FBjxVE48bkcCJ6UJPhDuBiCsddd5K8kdASGWbLNJPUAWjQqG1PdwJ7NwRqDKzpe1RRHtSP5PUQjgtynk5tLdECa",
  "key2": "2qrda9f2tZMgR13aRgarzcoN3PgHXXFvyG7hRtUUDn64EGbXWhm2cdNw3FV4skBVLKHErTbZRMyZKqABFMM7xiRa",
  "key3": "29qAg6i87UwFfQFNZF9mioxuSbHBu3ZUccSspHwqhAYueHuFtuBerrasuHXLTBrGJZgtMyo5KL2hUd5vj7J5xwzV",
  "key4": "3acRo8GqLYnKYWVxwA5JCAFDu6h9EtGqjJudyXKN335HC5apuS8yvRfjnqNYTwi33aoQdHgGXcWrKUXGXL4GndQM",
  "key5": "5yjNniX9hUm5CcqsbHen7xkSEQJWWShiPVidAW5FuNMC9ViF1xFVs7Bd55GeMVXpHHC8f6a2MUQh3Mbq94nnCXXK",
  "key6": "4MGWRnFBDPtsWn57KAG3XnXPsbBPTHQaz6xEHhKD8rHzcs3RwnnV2hy6iMxyHzLCNvZu3iyeLZ84R33LNeFaMJY7",
  "key7": "5w4dFGtEjXHG54EEMDvnPo2cyuDv9DSLzfmzYFmNEvPWz8zB6fbaLVb6FRM7T1ooMNdFZnyA9itfATdmAGWk5MiJ",
  "key8": "o2jGQa21DvmZ9Lj8AgvPeinTAUnVGvbp69TkWdhpCYvu8MhaTrCSsynDxT7gSoNhNRc7reazA8t6FWrHugimiyv",
  "key9": "63fBnyAt4G8RTvM3Bx9VyXVriuQ6hcDzcdtFf2EKgxvSfRfPpm8cydUuDY68AgCmyBHg4NvUPegtvdM3BkeYd67W",
  "key10": "36nDiPExfmN1fUaX7CCvxJeycYVzYuLN1qQhWznpanqdxUwL8ek5Lapb9ufMjjT9PY8p2VC5nz2kZ9p2h8zJnWpJ",
  "key11": "3CoRR7nTX52AtbcTzehXxGLvam415MJXXXYap4zCpkXRsW9bS8hSQJurmjh2rRKP782WyNyL7AxDKkcsC885kSDe",
  "key12": "pwqq3zZTE2nriyAk9LreRAsKV5DJ3tuLmBrGHwXzoh5mAFsu3pzTfAyJMaSjEqbAViR2bb1GvC1o7rPakipicEn",
  "key13": "5gTSc1XMd6ajeQmNbqPBSLMCxuC1BY5fUZLxet4zwa68MgCrvScgVxYm4tr45xSR1x1VdFLQFM7rAxc6nJqppv8m",
  "key14": "41HH1W1Wimk2mki6DzKamJQSGVixW2Q7GTyGBP1rHED2SurEXjSnqxvT8UQfPJDrfSJPQ8hYsik3W2Pm2dndaYpt",
  "key15": "5tJoEnKGzQ653MRo5rz5MCvkoYYmTBdV34jLt1xnFWQ9zXQzDvURChe81GFsWhu2kCiFEYY7y24qE3ickMrjZ7nU",
  "key16": "4zw2vtRAyjnmURmKQHC2zVHBambmFEkcQLCbG2rSgBQW7m2kucMmBLkpQpC7zFUNgDyZB2HgjccGx9usJpbZJNjn",
  "key17": "FAWPHPcaV5u9htcwZQvtaaSjqMuaYEhALhfztNMu9ncXiyRxweyFkYRsunPt1iK7CiCQsbNdiaRvMWHnDhHpMeM",
  "key18": "4JKaSUB9yw7fnsrGiEZU6NL4x2dqGNh9YaqdwEGzpg67MQeGaeeofXs1REWfdYDDMtVeEn61jgaE2qbH2oGEJao7",
  "key19": "5sdzpMmeGxNWyjTugqvcMbQSKfGC2pSsW3teNgTx3YtDhAUMeEnus9mXx4E7KE7EmCaWw2Y5GqkZFzn9hymSvjHt",
  "key20": "52rZTjEKRfGeNr48RNQvs12ovbDKtvhLTK1uan1rFrxbEbuFaPokhwgdxok3r9utsK5acTM3i6qHvuE5QLAGsD8m",
  "key21": "4ez42rG9SVb9nZaKUzW81VBkSHTc7cijSMMbbd9EajHbr9jKDkCytiEfYmh4sPHJooregAxNfRZ5sa5C1Mqkqivx",
  "key22": "3fvFLETtE6ZLXXNtQw5htNdpPFqCimhoN3rCwZdSGRwBXWSgdbphfzXgXinY7NFrzzFbDvsq7z7qokew4Wvk268N",
  "key23": "2FphDMFLiZyZsYZ7Aw5G5Wn2U37KZiaYqyueLAM9RkMEcYiunayKkZvurLNgMRAn88YTFydQXKYqAp8LmtrMxqKf",
  "key24": "5Dtvy4EvaQd1F6zQCcQvZRRzz7NXdG7cFJW9AfodGhD5n3rub9vNmgrKmr8AaX1YutYonEp4o6nfy2cu7ToApF24",
  "key25": "3UgGpbkywKvWxkKqutY5G7fQP3FpD8jECGyRGnSZx6rVYoaJfDvBxhiSa8zif2czSvmWuJ3kBhj2uLhqWwb6wTDU",
  "key26": "3T5zehk37hgBzFpWSiK1eeajsRYGoJ8db5BnH4SpnHSyEboxh2yxjuupwhD9t4kan3qD49FkKJDSAud9zpb9Nx4H",
  "key27": "abjxbBP4japsf4VtxiYQQwYnYN1PvaKBdfM8JHcsCA1Ua2R7KfnfV8Chf7QBaW5pWsq8FbW2mjHBaYvVicCntvn",
  "key28": "58JfcrBPbGVvrVNoqLTcpzudwbykMYkjyMfymfiUJxp2aoFLKUEpLzqg5oUvoPN3D3BYqH2iVRs98QeqWXV4Hah8",
  "key29": "w5vMNT5Ykw1xug14jmdAtca2LVf681qH8jT9wfu75xqmq2txWWE2cun6LJBuTgjpgKFFJ9Da5PT3FdxdySUypfh",
  "key30": "3EX4BojydfJbBEzf9uKfQyqgaPFgodCA5RojZowQYyX2Kp5VwmTjmU633Rph6FU9prCK8HpUF59aWXu3z3ME8EoT"
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
