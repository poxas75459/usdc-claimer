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
    "3ymXLPyWC8A2cFz14oVcpqdRnnVUAJ7hbEnb1muLsmEWKiqF2H1hQ98hN9c2ujzKyuWej44gxLXUd89cQmXUcof8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wFkt4VHYaqMc722UcpJcX9LsRURjqERPnZg1DvcBi56fGDC5UGddu1aLYxhficF8zZNRUj5eyKbe6GJPxn6X25X",
  "key1": "2dSMLmsxiwZFi6k77SiYChzXT7AcY6HDoruSuznoxMcD6Le92chawWRdh7hURYuuFsNFs3wed6DJFhj92UFvn3BL",
  "key2": "58aogqKDKRiFpivbYAPSXj29q8vg8hVxBehcDnHvvsfoU1F3dY7QLb3Yvrqwy4ch8TwdjBrYwsGouZcRT9K8Pga4",
  "key3": "2jW4J4fPBtrVmqSch8Gkp3UBTQeGkp4JgaZu8K2PQdsBgAMpsursRHAYViSyAj7EBdze3h2HqoP2KpHVfugs5Ksa",
  "key4": "2Nfrtv9NwdvjNdDnEHn8hG9W8NQSuE9s8Qbf7AhbVskyAAZE29ViGe1qbze1wyH8vUJGKjg5XHpgCA3jBz92SYmz",
  "key5": "2b9qrmFGewKBDzhas8mEmUGecTAYcNAPfx8foGBcgyd9URDXoiPdpcunXSNahFWh8HJoSBHi3P2CCP4eBAij9WAk",
  "key6": "4r9xswNXeKvAMy3TKAfHwCLjcV2rSjS4SkDGgr6i8TLXnpY4e2JkCGrnrTiiRjMgkMnif8fcSiTVL5F89yxJ67S6",
  "key7": "3pGtXFY438X5mXMwjgHWtc5x1gjwSrVFYTyx7H8qqjajxQs9FXrbvyRwK2LEEkHruyo5xgTDUg2xh6pZAaxzHFm9",
  "key8": "46dYoSMtkdcCjmt8Uoo9BakFbYFux12hiPMuWyPb1Ty1zqURBWwXFCSwaB3EBrznc4jK1HYbmQTba6DATVWntC9g",
  "key9": "558ptQrHDA3EunxCUNPCyqCa6Jad9iFHbTzuj5epZ4vnCASVNvTprezJgQbNnrjq81Gt59rqrHMSpZD9KAMhSCUp",
  "key10": "5X4q51zd6p3zHJB5BVJSg8w5V3iWeSoVofdE9ra8mMgea4GcHkzvjhVPpaipHoRKMkPNfQW78Enz4FYrzdgmEWQu",
  "key11": "42zS6GGMZitxjXGCR9Y9rNS2r6PkzjkhgaZbnNsmcPo61Xqq63R2XcFYNXyBjqpbvU7Yfobniix2SHNZeNKpjHbh",
  "key12": "3gHBzAmyqqKiNZpYDU2iuCxJmHc2tMUN6wwZjBUuL3PBQAsZUigFC9SUUbEJ3HfDu8wHvhhg9XpnSQyM8rHG3rnx",
  "key13": "dPXsLHALAfN1Z9diBs5iKwSkHMkM3e5W2Kt3KHreKYHu8LDikuunfhsNcj93HsZdQ3QJuVJudWGxTTa7zBh5JH9",
  "key14": "38dh3FJLc4ptX7DUSmdX8cSaiWewG1y4qejkumLKPb7GpNyjsCErmgYDuzLef3CGvq2eTEaYentYzQTnkpGcqkDF",
  "key15": "3Ha2uYMQLh5yXAyY247Mp8mL9LSGAwhm3Xvsrm9GANcEhooiAvcZ7HXpYUFsTss6zG3sy1uysTkUBYpm3uKcXRsz",
  "key16": "4GE2C5eRjDrzFrFcSRkn4mtBTbn8WnVRXb2NodzbKEPPRQN7pqxfbENyvrLi65ks6Q87JTiDtgsiYh7P2b8DChZY",
  "key17": "4Jkrmositq9WEf1NhBYkk4g41qXANPhPEeSt7Fh1jsYivKxRmBQV9DxfdRGicitdieergVNCPot2QwVNPpuEKkeU",
  "key18": "2G6UMjvhz9czFVFhcjRoKsPsC1KFdfvC4VjS6wnpQPhmUuMQH4hTzZ2tEbi1KnE63sW2WPPeqGP4ynKvqaFyVgke",
  "key19": "5ayTGuKSxYa7SuepQjzSc48QeRYerABn2wRFWjyPqBfGaJmnmEw8rTaiwEwgVA1X7spnP3rG2JDBiTMputM2CZ4m",
  "key20": "58DpkJUqJ72XMwe5YUWhH2Bq5Sd7SYwZfci7zBoyP41tLtTnoRXtNyvgWHbp16ha4QiEjnXEBG8hi38nZCmuqAfn",
  "key21": "7fsY6k1cyVTd4vPkHDXX1QUYaWC9bJWHESDiss9MAPKDbXX3Em5xK3qWE1ycWNitXZwp6PeGQWMNKqHkZ5sTuQZ",
  "key22": "ep2oRyETHH4jX2WfZjZcNqtPyqUaeqV7jCQf47CPr2G5WVxAPsbCKfyQRkxc9EhpmZYMvb8uemsZEywbSbgeMRN",
  "key23": "2dhM8J23khEdKF1CEx6EAssNhRRmwx2dzC1RjvtvCWdVb6bDnQCDXCgHhdUQSaL1ZvjhXdmMjCc5h3drVNu5zhTg",
  "key24": "pe6cgqUUuP5jZNeXcmMrXkNiPkrEqWQ5CyHisKrAWmkGp4vKqfAF84TX86eFTdPZfyaKHViC8cfGtPmtacB8MGB",
  "key25": "5qWPTRneR89LLqcMpieHBb9CtTD6ACY1GGyH6qgSvgNZbpaXJSU2sDityDoMLvPgGJ1RrFA3RmT4hQnQz49qroZW"
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
