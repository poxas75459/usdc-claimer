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
    "2WK2KhUBwpP1pR8Lqp8Tqf5LW93Q4f5tpUQuqF79gfwminXYN15kiRR92fvaLbsiyec17kEo5vg1Q8nLE4AMzuVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CiQQcV1nemBw4L1fvyjrZdhdrBejsPFrXkkFe2ugcpfUGM5rU2j4Gm3L8ooi5hMTPNZtfgZTYavfNsKPWNa6nDJ",
  "key1": "2irRHjwbp9KXTrtwYUaPTvSWytCt5Vz5HpFGKPBCoZpa32ubKncvLDDjmitEGdryGGLMoDZAeLNUkBupeBRkjdr5",
  "key2": "3jfxVJvS4fh8VyUASXiY9FgGAstk4uTWxCjde9r3ANoTSzcjDHmMTp5NnvsdE8Yh2CcdfQGFX2oTcRojWhiEGMWe",
  "key3": "cmw5CvePetsjSnvHBWstSHxR8RgJwgvkHDvfoGwV7sP1Sqd9bd3erBUE5TKNMMdwLmwVW9AQmGNXYVsZM5nskD6",
  "key4": "a3djhLMNMHia95J5GYBiKPEqgoQ7BBcXRXDBzTw7yxYQZ5pzfNSy8WKXUqMDngNoRaZ4CMro3ZGUt1sNrqYVLYM",
  "key5": "46qdS1tsH5E2X9HU8e7yz7ojk7sEe8DQ5yYKDL5oAX7aZvxMCp2d2yL7Bx9fu61Jqk1Zx6SgDGiZtzXHjuQVi2R5",
  "key6": "xsmvNoAzv1boWJtYQrSNBBPiLCwDZiZXC7m5vwLVo4AQKEixz8xGgL3oXdxg93JBHrgMBWMtFSgvZp52SwxtnVF",
  "key7": "J6CbThRjk6pdBS4n5i6WZpRG58dWPQEE9jLo7xucTWQX7uSUtUodMdG25pgbiiXw58UwbWL8s2otPawS44dw3ze",
  "key8": "3ArzEArec68xK7wXQwFj8q5iEXePMYcfNHLPPidWowkJyEtxM4ueUgyyVdkJs9b9riFXWpbndwEdHH56jBHPvtc1",
  "key9": "csMZWGxfK2Bu4N3QYxHh1e8GNLoTL5VdV3KUp21pGsoChrLbZfaJ6tYrEhVHSDxunA5svDM8KYjtvPHv6FDKe8s",
  "key10": "4RL43QHPedQxKEHhWcWNGDZ4kNsVSnYwSyQp8NAFTS948ts7ofbjdpMfS8TdL3gWLgBCoafpKNY8MWJnHAFkR8ud",
  "key11": "2LhYpjt3MgGNJ5y9Upo9b1kYzQovjrsQ23jmAs9N6eNtD9ssf1YKa3fGB42vFYxWyAjMu4ASy6o1GUccpPMEevFm",
  "key12": "5xyXnC9QYGj8W5kZx3ogibuXfjkAoZqETzDb1Rq1Rt2JLWDE8qS4dQ8jwaoRiPKBzttKre6kbjAkjZUbprgndCV7",
  "key13": "5dC9tAfJyHHNFwV3aFrMcv8nDuR479REJbu29gM48nko5if636PeZSQwcUUr9ZJ57iHJ89iA3DJmwJ4iHRBG1o1s",
  "key14": "2EqRugfTYBLRxAzGWhpQ2phFvyP9BWd9nrSyFFvC7U3HbRgJPoyW27FudteLrhfXTfusaY3ZZQAdNj4U9nZyD6yo",
  "key15": "GGZ6ih7jatT6D4auNRxY8zsf4ES5wUgTuw8LEmwGUaC9nzP35VoYRe5Cd35n1e7z2ZjtS5QvdFucbWjC6XvaQT1",
  "key16": "3N5J2fBqeSuiMGVgncD2bQYTKXCpyUfrxEj8iGRUtfDxes9cnELnGkrFDgbTrRxrEgW6bZ3GVkzwtUh4x2iuxDqY",
  "key17": "2B8XiWdUfmt8VDC3DpKfVW28CDm49m6R9PQmbrYtc9GrkMgDepaek8XoWpWhnm7PTjGcC3ADVntGa4dxRpxDFneE",
  "key18": "3VEwcAeqXe8b9BmCjv4ug5dco3Vyz3GU573coZEr8u7qMx1cfXLuUiDLPfgWuorgi38Z98TSr82ns5gniVqDhqso",
  "key19": "NCc8simtyxFpQ1pHNr1r16KshihHCeaLpyiXJo3qYVx4g4RhWegusTaPgATmwtPzrTjvVXBTfhzHekxhTBcpyCr",
  "key20": "45y5kFxrrT1MM2PAuk4V9dtvtSH4rgWato8DwVTmPd3vhxRsjdf6EysRnVachfJ8QhuBfkA8EdY56hfPq5Miqe7y",
  "key21": "35k9xiWbKYsAJPv1yccftkSDMScxbEHDnVkP9NctG3cWpWYvh2twEMMp9gB1fNhSmyYuDzopjsscYSNwpizhNijs",
  "key22": "4tfZLwz1WAHjJJvNB7sqd4yTFToD6FxJcATvmyrd1oMug9WPDK3EPzqAvfeenfrc7cMAFfRtK8cnHvLyxhoVPzuc",
  "key23": "465p2KwzpdMz1hqoYZ1W3jojeVo2n6Wj8vi9XHesBDa99qTMBMQG77RkogrR3jLKtVxSvJfEj8YYWKDaFqTt69gP",
  "key24": "dUs5YQGdQGBqqcpennVkF2TW3w6UYsbDf3HixNTYtzkNN5CjTZeRvEKAJWXxYS2FzVSsLutZUSeH4m1a1w1CtKu",
  "key25": "3NS8xVbp9Q4XaGgFmu7dES1873cvWjUWeBHThW8wNyVnX5nrZVCg9onn4CB3hv62Uog633oaZ1rK9TudgUjy3rFe"
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
