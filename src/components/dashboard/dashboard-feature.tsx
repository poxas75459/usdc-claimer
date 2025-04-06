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
    "5rUM1HEnsnMotHvdLnowR72hWtRwkLdwRHmyDnafGL99mkMFJ5VTrzjC3hA2UNhDnnGViivtdNnM3zb8XygHtKKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mBjyhU8GuFYfcFC5254LnaHpSkZaNmZutR4f71HwDxnHZ5ct6GoS9ra3Yq4ejGpfcH2bzjj4fAEVcTPawo7dSCC",
  "key1": "tgJYMXMHdAS4HbhdEsRr8qqLdKXCXV4HPQhoyY5qVRJWLo67GWURQH5Cv4L3CKaCNJncwNLg8GNT2H45qWEF6XG",
  "key2": "4Uk8woF4yKBr3Pv1vawfzhQoN3qG28C6SEJE6xRnZxcKyr6KPdnNM7prMQaFFdGPWqcoxXVjHMDbhUTt8L3ianJE",
  "key3": "4Ha9YWrN7wXSAbNWsbpYZucszzRFkUY4Q7eg9x7AwPow3rXSpvuzHRqvqCWeNgVGsG2JM4NXt1W25m8CiEbBzUwn",
  "key4": "3GqGbqg1DcHvNmN1oBB2CzutmqwnjW6aXgAEkBRcrnhY9TGVWXjEoGxvuEtxpiK9TFCAS3wAF63jNJ8wNyLuj9vd",
  "key5": "tQshRRpmJv2Pfr3HcV6455smtR2SmdFFaemYh9QU4hurYdNcme4S1jNyWugPQTSEJfizHfxgpCiAywgTbhjEF4D",
  "key6": "5MyQ4d5H1iLKFboQJK87gQm2HW6zXH9CZhV6LNF5Yx6rR4dhaPbwG1vXA4Fe1nXWMgwCjfvDx4rFDiMGET4hD7rA",
  "key7": "32Hm5KXJqcPXHCDGfEDmz9QoZbRs9xFAXKTFbjmqHjxFSXAWFSRb4KdZb6XvuMXq3y6eZ3VgN24eUXEmJGv6vcjf",
  "key8": "2Mjd8cysbEaHpDiehH6TYJe3ebq6sowEjQWoPpaCUER5Hpp4sa7QnPGhFXyWtZLGLSRHmHmDkF2C1aAuHNMPLzmc",
  "key9": "3ceLS5UR5LMApXKAccH5AqFDyt8KzmLqZvb7MMrSy48dppgCyFkxUka4jQVPTrTxM4eei6PXCM8gXt2j3oL4h4rC",
  "key10": "2wnWVAV6A4JXKWdLsMNSR2VgXEuiDahhmUbWypPPE6c7Z5EM5TxeQJX1vw5HCVaoNwgsRqL5PvCsjwmzngZPVDXC",
  "key11": "2C6J4ESsqobRmeJJr4wVZLPtr39dsyFuwMvLJforWZMnqe16bh4JSQLU2FL3UuVsh3bsRhaZxurAgLp5GsNmLyAc",
  "key12": "2RvwJbNeuc6bHNpTFxTb1vxWsa1ku64YrYnXiv1zcL2Qa172yahWrAkwNwJvPCh25Qz7G3M1U4fwHxPeYgF6k6Yg",
  "key13": "4m8bgbnaTLh7bZfM3aFDyg4YFyzV3XyRvDGXwwnJQhWi8ybVSVPSpiY5HyMAef7Kw32AJ3qtEhsup9ePhDFajueJ",
  "key14": "3U7hreyZutUzrGYTSA1DiDZTvuxRiobQmEL5R47GANTQT6nmYEZKM5Vd6AJooJYLsPhQJyTxeuJXjhdm97zFyNpP",
  "key15": "3u9vxR9BMCZCn32yG41eRKTPWRpQosXgEX7wbbG6mszQ9GhGuKAKz62iTfLJQH2pmBFfDZ2FU1oFSkdXPqrJ35mk",
  "key16": "4NkFqxzkbehjTCkoyCBKeDtBVKJoPRvPaVDUXDrVVDA467z5Dv4AVWsDpnpp7onRSLia4EVf7c4QDUgs8d1RxN5B",
  "key17": "SrMyYgKnPVJGt3AKR1j6kzpArWTM7U1WWJfezup5avPdyrUJhsdqURv6hjWSxeR7sqEiriKoHAvBJgiMXkBtYU9",
  "key18": "NjVcX833sinVgHnx8fPJrbDeBMTVS7UmwhPPodV1YfBEmKF5ZZ6BUkpfH1x1WhE3DufrwakZW7pki8WQthANECY",
  "key19": "29NDdr3ru6a2dFiWJpncur2LzAyQBGaxDHkdsv4g5qWFdYDzGxEEETJKnPyDW3wm5Ua81iLg58JK7Uvc2hCE3Bi2",
  "key20": "3BPo4Wqc7uEnpdBeUm3Qfg2wPvLcvRHFy2uyuPBHqYmVKa4ifBhQbhHXyp268K3QDbwxwpokKN65Q5JnRsURrJ72",
  "key21": "X9i3Z7BopsZRpqHyfmqC2mQKQnxSx99ANXz1bExUGrqc7sukNYLDLUBj2y4ZpVrYC5Mh1CA2KYujnFXkACJnybm",
  "key22": "2H2BrpxzbL9jx5fckNUfRbzPapWYpGNttHGZTPk2zScYstLYpGonxUTyTSQdSkfecTH8VscGVzGdCh1hDcEtB3CC",
  "key23": "5VpyYkkB2GXZSgxMVrhobnxx7peTXoScDiWsSNzuaMSuqh2XnABroGbxUNKQfBu2Gr5C3oHeeZbqqRDGRpi9NhmK",
  "key24": "uHpurZSXFmRgUDLZJ5KV4TtJWR2XNqaPXYR11emCwQYSH88D36ut8wWGf2NfNCwr9dtUP8REHW65hDHqfiUj7SK",
  "key25": "CErLa7KJmkM89CgF2W1XDSjUoELYgzy7XF5eJcX69NLgDL12UBax3unxdEEhHARsb9gffWt25BVAPMJmwvV5jhX",
  "key26": "NerDMWxpGjW6JtdbcpLTxvXHEMe1BfD17Lk3e2sa74QWM9n5ofyBhHF2P8zBTsXDeHoCEQsYgJZFT71EcjXEmEn",
  "key27": "28XkrAsSX1Ucs53iM5GUqo1LwtwMMnRXSeTBic3dADhqr38APUE6rys3dvg7hPRGKJ6GBn9wviccUkaNV1nxxVBV",
  "key28": "5TtQ8UZbMVpMQxUbHpxzMUdVY7CcCBJB8Vx8Cj86Jrzn31HJrbjmJuxqA1d3LFz8k2TgbeWKUXdMxoaJz3ZCjJeh",
  "key29": "j6PnedqqXEWhGxpQ6CuCy5Q8WyDQnuoouTniHui4Q9gJimpwEd37YQCM664R2YNeS5hZta9TugV9mPCQj4FnjYT",
  "key30": "3nDgrQhqyBChHptTTHYzLDcxX1ezpfoNVHejstGtKN22LvJtLJehdvLetYWL3pHHc8iKEGfJ6567YaxSCSfRNKsu",
  "key31": "3w1TongAhSWz4SXMzkxwVQSVWru56CF5eFqDtTTtPUUfWhpwwATh7cv734uSHVjWtY33wUg7rSwatnyY83KD1ShP",
  "key32": "4oq5Vt3b5n7qgcRnKo2wjhnnv6LW36mQPWQfrZTtKwpeAD29Hy3NoQzFzHpaxksZjChBX67Czqwyirur3nDcFb5s"
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
