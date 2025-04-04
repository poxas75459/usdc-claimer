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
    "2MBS6k8gbEEwLChtmput9ASMB8RSJmCnNVVhM9m5htR7PdAR2UtKhCBwrbZaymfvz1x13ivzRApKMArdmsimHHcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KFAMAWu2oZbwU79Paod6hHGb8UeXyyXzcFCKLg4uR7cfMwaUnxdhsjtMfGoRVUpwWexafzGVKWg3TceGWoX1Vgx",
  "key1": "2gGyUjtW1BCtsK9JC37u9t4BWeu629pMmCJcsKN66fWoHihTGBZhMgmrm45auD6mYX1Ku7fG1fJW8SQrzkWKNAW5",
  "key2": "54Gn9euMnq8s2FYmZWLiRpRESkjwXJ9P6Dk47NKTJyseFN3o7EPU5CicKF9J136JQAfbQ2VwaADBCzcVfHjisCLV",
  "key3": "42XxqYYyVZWR1UvUBGMybuT58cQRWKAnwfASYVmHAMJuxoVnSFJ5eJU8FvBuLterN6pG3XNXayBymPb7CXDL5xrY",
  "key4": "X4fL7mNQRsUHxjVgRfcq1LnTFD96Fu6bwpza2u92zmKXKfWgMg8i7EDnGPesJKrMnwjdYKbokmoNs4RbxtqMMkG",
  "key5": "3wWY7o9h2QoZt62L9RS3rxswJzAaiQBFVQKzWFUDg1NE8qJ178NzHV9Aih52aGTXQUh7jLBGQZvAGpFUFNhXcURR",
  "key6": "y7svk9z1N8pocU9UzShSCJveZYKbHXxGxxF5nMk2AXk9TnAirWT6Afs64eYnXdvkDTnkd6BU9wnDRKUD81qLFZq",
  "key7": "UcGxY9HJa54rjCSFPqnDJqwSyrzP62apCpeEzYaDyzWh6eLitqz3TbpcXztTSGAqSvpqjYxy2A915skuxTC5Hx7",
  "key8": "4LrytwF69QczmRW41ZN2aQRWNbpVHR65haXqG5fuLTZo97EfxheHH9yPSoX2AcuLKktBd5ehsLksp5v4QxhEtnee",
  "key9": "2tQqQ2MMZNPmBG5Rvhi1LBZUzevHUWot9AG1sCF8hPgQEizgGjnceLtnLZf5ETEyArRukE7qx6hibKdALMErqK81",
  "key10": "2V4qbtedQeVDH6gnBXAhZLstWPRkiE46774rEG9d4AVy7NAkwnWhUHX2c5pwQxmdwXLmGidPnwDYbgFcLpkx13iB",
  "key11": "RyQyEdpVnKUy8oxoMihXDFhPdfn3hjD6o3AdUZn7EeBqF6gxLuTp47r1Hp9ArUegyFX2p8BEaUjx1CFvFTkZ36x",
  "key12": "2xycXTvH8iVeAc5FPi3fTqp6xUHqTVTCJJnC2GYGCN4y9Y1Hgr26dJpLQq1pL89jwxYrtcfXE6RfqkTeSPtKPbrr",
  "key13": "2GHt4eWuRAo6AYAUppqmEhvJKQtApYPwZ41fLxrnSWaZDE1bQFdx1eqbtW5WsZfcbAXh3rQXgbgJ6vcysStmShCn",
  "key14": "3s9NQfcVzwArm5vQDHWTUzF8koMP2QcNxsinM8xMcTuhJoaQEAu116eLjdcThzwZWihULC5VDV6u9ap1baaejjzz",
  "key15": "5Do4WcbBHibiwdiQN7DwymuWA3T3XYiVX4UXv628ws8NVN4TXu8xDMrDqy7Tna4U9ifk5iGDhFQcXyHaWwCqpr9k",
  "key16": "4p4o8kKuEs2dER3L54DPtHDaLT17YVf6v1RBVq5zMhfChsu3Zuqq9tjFXSGmVvdXxZwnJ7xUHBkM69LuY9Y2Uevn",
  "key17": "5A74qV9aFzZvTMCroHP6ovPaZaHk5ee1zhZ3KsHo6YARhhjCgXjz9s3A2JcCQT6J62JhpcYv7vBVMCfHy6ZHiGkp",
  "key18": "5SvXEGpeyYq9oC4yfyuADgkae5U94t9bVMsih9BSKr1ddYjhSTZbRDtVLMS1veRqUJLw3vQu6JCg39HDmBAg77GQ",
  "key19": "3iqq3ajCXty2rY3mmxD2UMa4t4jkBne3aK4wDHqvhcUYYADte8pyafSiJejm17V14bEKUpiZZWaue46yH1qXzDrV",
  "key20": "2s3oFucjHpxJDNLyjkE42Nurp9v1Ex63KHJLEvq8THJpCYuNMiwRGrXLfLAxyUTHXp4ffgsmknXDQaBqGPVHNifC",
  "key21": "4WzqFu7hnCg2bfhgwXYiRZ4CSVMY8vBnbWPuVEoxLUoixLvagjFLSfrMo1dn7ACH4c1fmzkVUKrkDRtffSNx5gzV",
  "key22": "3ARTHo2wcJsskPJj35uPoVjoikqPMWD3wv2qdnipTSA4sGHHoRKegVQDpTDtFeRHVvJkt4Laf6TxnhxcBKtUNX69",
  "key23": "5wtktfUrrmfrvWLSJPmKkfgqeMf9KFoSNM6o165ya3Fsx3WoaKJxofjd1x8Jh77DPpQDGtGkvpCjkrwswiZ4rVEC",
  "key24": "31cXm32couA6zEPKLCB1NBzYbPiedkWWGC81PqZano4iHVk7KYb2vErs587fB4mzi7Jg5hJvAiWnsozVoUB9uDFw",
  "key25": "2KWqepcyVotHoUMj77q9W1xsdxX9Dswjbut9NtPmqmJggWJE7HtKuykx1RxZzt6YgqBudGvMJk9mg2NCrPcmWytX",
  "key26": "4wmSRy2bNQQQ1HRE1j34gp7SqUBUxcib39uktveSTdKTWwvxCW8ZDkUGNWMr5ccX5UPxwkJ7QDW2TZyXT3WGBZjj",
  "key27": "2cJKFovUHaCheyBuV1XsDD4hamd72MTTuczMAuYdoEzg7rmKtzpXAoMsewZNwrbZrrgxtuT1xKTEMxK9EDDqvWKe"
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
