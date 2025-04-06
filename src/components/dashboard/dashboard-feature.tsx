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
    "4bL98ApfdJi3Y4AcEYPWNnHJA4PtS8S8We2qmAjd58W9ibfDSQ6DcsfuhFeiAcnw4D8YKkV2J8Tfwtsg3WxqQKho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hWP5Jm9FZqdy5x5tuxgQ78AC6w65cTqfXJoqV1FkXNtDDGVKa7Aq8YXSL5pwjozBGCYXSoaMHfryqG3K38vYNdt",
  "key1": "5StMVdwyR8pNqDpkiZdhxKNpfExxB6MsmQbSZuC2Q8XKjznALuStc9hdqr5r13r5UsKbSMFAZbQ9rBLvDQWvvdMw",
  "key2": "BYGSneqsKJviJX3SmDrRfG4SLqJ2VSZ4MmyRzw1BqtqWB3mqNgjW59hfMtBfXWSLY2XNV3E7qcwtwJ65ckmxCyK",
  "key3": "4oHZNAhKi6R4bq3KPBiWbC2VyKc8JNVe7jnm8pFiFfQKrjqdvNttYgjkoizAkHFa9kHaNvCfPyauoZRv719fmy83",
  "key4": "3F2U1KNi8fhbNRacXTizJZd6rD57Fd6D8BZuw2stSWP4ZTYLHjDgPZKucjJ6zA15uUsSMCzafQteGG14LUTfpuz7",
  "key5": "5CyZqiv98x6Sa1cZx1BqZbAEAXPDr4zY5rvNgrsewsxjcSDaW6YTY7Ayt6a37WiVuKNvLe8ZbCCcgtfc1chzc5Ao",
  "key6": "55hr4o7D1VT22LRd9ii64MBLri5LPe3Y36YQM5mw7m2ycRgmcYkNM3YhfdDuz81VChjNw43pD5KsE6JnRGjJKvcr",
  "key7": "4NiR92mpAk9tjvTMqWv9Z321U71vy63KQ3jUuSCo6vmcrYzWEzWADMw2xd1GQBSiH6q4R95M5QKbzr6aBLZQC3Gn",
  "key8": "2mpDVHZr7LgVhFGooomCHmzzdeuASBFJYTSvzN5k2CujXwXRpN7W9qrDkEnHUDzGdsLLHQX16JSUKAMsc44HmZdX",
  "key9": "2CNinvDqWR3qbEWxyG6kf4eLpYZrKtqVHfcnyZYe673PRJprJRRrAKPPaMA7p7nyVpWxPHz5EHx6vZiUMDAYfdGB",
  "key10": "2f9m1FkC7z3A1k13gS6FHJo25mTBckAAxpDy69tRMKpkznnVzgcqaXeKfESd9epysdXXCB5aduL2QTJL4QxR5rN8",
  "key11": "54orfrCNWJLqtEQNPESkVBZkxgofrWF6Bx5XUKiRSUTt9DRk5cMH9AXAnkGdECaGBcc1PsHq1Y5zMvCn5B5R6JEc",
  "key12": "5uLShPMXrmPGmoDzrHMJ32mVHEuAMdy6ydQwrXTh463fdgT3YQrvErpiLM1QtwKZVXrj9rdVmWz6MuTDii4p6EfX",
  "key13": "2pyELK6i4aphUdRia6dbZzBn81zQuB4yTW31TguWF9smDPHhFsDKYALqJaAwEVaAUgDq8P5Kpq8podknmRLg8xyJ",
  "key14": "2U1fEdxYwXd64ABrzfJysCCMXkN8yUkEF7vUP668Pjq8qytprZmaDF63QiUPsWMksWR2WcXH1X1QZAo2MwD3NSMZ",
  "key15": "5AxfNZpBgqsFfBeShqAG4avJxaXNRE21bjEqDgkqqFtGiYBmDfVJw5Nx8g4HAfEQJVM78yUqXANe6aTe89wRWYVp",
  "key16": "4DUvdUH1hCTTxbtvNMJuyfJqcpBkC6jRFX26QdCGGDScaVPCUPV6Ffyosbbtt9KEFCcpPDSkNo8Go2VUBeEoiy9S",
  "key17": "2v9AqvgH22Zm9ZVVXu3hHb7WYWo2AmAM6nhsxde5NmL1qygC6AqTT9SzUHS93QRV7iGjH3NPCVCfyXcHQro6T9bf",
  "key18": "2YU7dpp7ur5GLaA7ePWgPUs7Wva8ZRZjwDqarjmN2zEojqNWRA3a7ErGUkEWKfS4TnAi6oVnsdf9yA9mg6j3364b",
  "key19": "5YPpx6zs9ZeMujyhT2apjMDt9rCj2hPbUeMxQ6eXWX9wNYHH3c3nYNvQqDwWH6746EkLPYysAJ8dtnYVBJyfoFps",
  "key20": "2kPdp1d9KHktYjFm4xR1vRKxxLAPUhUrbqiagKcRmb9gHmLGAJaMdJ1nsp3qNhJrRoiCNkCFGd9VfVzgpweLHsrq",
  "key21": "ncuPF3h6NasTdVJ1R8ro2ibgxPhtMiuYz7KjgfzXv8QBjMYFPfo61Jng1VZs5EBVD94fffPCFGLYKscpCJc3C3P",
  "key22": "2GQbNchRQU7xTFhCDrPWXBQDjeFLdpBAgvTbNYYpN7UiSXgRcTfe7mnDQQr6P7YUQpE8qBKTYHTHZX5Moetju4wN",
  "key23": "fA6T7yUV5vW6eokdhw93Q24C1VfS3em5dJuSxnJL3UvfXnhU9yPwA8kvHg1F8sjoQjrsbDmhaAJRM1RhJ8smYnh",
  "key24": "2tVhFxpXa5PBzRzaAXC6DVyEVFUxWyRAoa5XUwMC6NdBDGDjUVcUHF72Xd9rJDEu7Se55RSNcUoYSeCVkG1JD8Zf",
  "key25": "3zqaRgz9FsGuQjtqD8eNmqmXY5eXTypo6xh72Yie3GpShWGujMzrAvqiijVkevYWtmjsxmEhvcso6kmwPhB63iHm",
  "key26": "fVyxwpFFgZm4UpTafA31zpLRNcNKFJLJ9ZWvTcHvoavRbLDGJMPmno7KZQEg1f6sScrm3FzDb3Q4CzBTcYUYkZr",
  "key27": "34G2orWUPYE638xNUEWbVvxfbxqcSCfx2VDtPvp94ggKSFMeDbKqqAyxD7YwEtbGjQS5mfVrwKLf83DszNFRFyFe",
  "key28": "5kb2866P9JJP4mtwjpTUiZjydxALDxYVSvmSmC3VL4WYTv1gxoN1D1HrC2qb8QMitsJjSH8Ue3nKzsjRiiePC7E6",
  "key29": "3t7fGiFfFRX551p2zuuBqyfNnZYVPg1KTJrt4WcUdqBjSsca32H7ZVFxbrka1XMnhu4eMhuubW6cDYtCUKbscC1Q",
  "key30": "BHeffYgD4rkuDXqpgPNHrSDpgcAs2hgnCpKT8bdQP9RmtLbgTnHoL9xu2VSJywcajR2czj38VTFHxJEfMJbkCjz",
  "key31": "4wG872Ldu429XssMxk7aQz9pR8p39y2dbYf2dbic8kihmELCCzLRsJ8gue7qAyutmwNrjhu5eA3gojBoV1Gxw94m",
  "key32": "3fLfDW5oDsJ8XYtfXLMY96Tf2eG6gF7tEFcny4c6AmSjKPoZ5rT3mpxJ2rXpjjCXuVU5Y5V82Ah7iiMyhAsNWjsX",
  "key33": "2a7Eubq965ZGZ1eX8mrAjiRTVu3ZwjTiwuE9q1R7FZXZ1HNnUbxTPJWYWwS6MBp7YM14prxVsD81B4FFKAKdXCtg",
  "key34": "5wRc2eR6UAU55M4GSMWCDNGXz3SyUNMCKo8QmecK7h7DaeFMMaiq8tTaTgRsLbxAfEvBwQNLcBBamGTK8vxueVjN",
  "key35": "24ndAXe3dCRPNdvxC23hKHAtPujX9LAb5CMBmSdQfuT24f17c2CFHjMgiR6VjMAnQ6i5jdgbQyFDPmekpYdfZw3a",
  "key36": "3W2fEysS38Mdzr5g9FtCQBqXKhA4zZeVjpZhxFtftgD5iwZxiLSNyXf23uXHa9qmcSpodpXQcfpZK2ckkmHs47sh"
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
