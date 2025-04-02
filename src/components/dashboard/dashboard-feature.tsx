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
    "prE8mswnLmcL9uSnN1fb3tC95XCEsXYWEHCcRQkQ3E4orBGTujg7szK8dk9vUjRkMu2f8M6vmrWq8Qxow4zjbNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47F9fbmim7YTCCJyoTbAeCWkoa9RsSJvkgZhbnNPBvHxaJdJZjh4FCfAh2CWdzFq13ztamCrNLkt2mwxAfVFcbXC",
  "key1": "5oVmeYwzAFYNtLszcru6euzNBZGUQQGKYRU4fUJ23CCynKc1E4brmFm8G7q45oogXKcEekriSyNpan8JgcQx14r3",
  "key2": "5aqu735AsLobSK2hn5baFWp7Q5FGhQ9bkHegopnCJKLBN2KH35fXnvvZApuCv1af4oAVaGnY3Q8ntdLXaHAdmXzw",
  "key3": "561QPgdVMfkViaeoscqoV3foG7fkvN4gLtJJSQpcyBrBqVkpGME6mkKcHvvXxdjgZJrwJ4Ry14jcPUWjTgPyNS3n",
  "key4": "ux9fdZrmBtiPESQ8m6nfG4EKeQamz7Q3Xsnx2S17gWSLCbTubjRUadtDGS4nhfrACAJWC1u7J8eY6mPe8W7wGXb",
  "key5": "5ghph3V59u67bTarVr8z8ss8Kza3A3QXsqV5GCHUDNuAfnSHRZ2ec55qzDJogf6mXMKtp5ZZohVgsyNHR7yGbK1i",
  "key6": "5NY9Gg1gn2BLiCZdUHx2Kprc9omid4yV1BP7uarDhp16vbpvufjLMwgSVeUWm9gWLWmLitdmN7b6AAAxJFZB5iJW",
  "key7": "5pSV4HU979Teh7MaTpkL4ZoHnWJ87gQLHrE6tVwYws28Dr6wHPGHmmdHdDiX94FnFQzAWeBhkfvtHRbyKctGEx1R",
  "key8": "5VnzUtD8eWKgnCV2ETzAJYv1FLGEANYMNobpeb288K2aW3u4Xkuk7jXUr45Jtb7A8PJe6MkJxXDQRCaCGitcWxPL",
  "key9": "av4xAVXoyXQb8f11BFjGKomXWrn88NcVQZrQEff2bTQdFZwnCDTASpmw8FuAs2TaUJSzZJP39C8To4yP2ANVAnC",
  "key10": "aEujyczj69g8cEQVEZkmEwPUpH8DNY1qk9YKk48F4f7MjatSsL6gHeKQUwRVvY7iXFfdxKTSWV3GJPcxG64VNaM",
  "key11": "28fXhQ3BgU1SUR4eoHRqCuhFgkzCu4u5i9MqWshuGc87ANGfTENzgV4pX3iktrCwQCBVSdEKx9QUFM9xKxiKuEx3",
  "key12": "2ACvhbMCeWHkdhnGkZHTtVy98saovZiXgYWVQY1sCYaARYmszhaFY7mkHwYgVwz2D11Bw1w8cEqNgCBHsov2WA9U",
  "key13": "4w5e94tSZJ9TWJf88aGT1AJviFfn7CgFZDnJZMxB8Z8CTJiq1xy6u9ATwWMPPCAv5uwLPYVMAowHoxsMuYoavB7V",
  "key14": "3tqHY4eeMx6RsdTpXxWf9My91KCqsxjvphQ6JoeVTHwo1FbpF3JevyVd2ibWTFFotkJz3KonvnojCWsTVBYKxTP3",
  "key15": "5scg4A8Ne7oDCNZ61CpVdBxbTW4p1mZuoaX5Bk4Sw759ZpERT7yxUTbJ9bswyxjUpUg3wUufWjZeb6wuJghVN63J",
  "key16": "58fwZpjJXwNQyAJSbHN2St1CS7jAGn5oJwwagXq8QDmtjkJ2iF4P7eemD7VsqiRWHrANiKZms3LSgq6Rs3VdkP74",
  "key17": "tm5sMetZGdZcxLURtNwmzug5Np7RWtLn9dHQbrPh1ZNPX8frzL9wZ48J1xRtUt2WfHBj9dxZrsGd3zgDF1yBXgz",
  "key18": "3nFaRfw1TDae5z19Z9wQyaxxga6Vhy3VUDnAPqGfS3YVG6KADM6hFDwXmRxYWBV86goHZVANVETqFRXa5FmnKbWr",
  "key19": "5LqyvC8X3Fwz6sN1LUNDwkmH8SK2E5Xa21unn4egKyj6vPu3uTubxEEKKBawcHA1fi1XGAcoAakihbmgTQJLSmRy",
  "key20": "4cxUMbmEXsExtzUvKid5fvQEnT9g2Du6ey6pbpbehww38DznojNJQCQguuFwDpBxczm11nFDH6UTE7oM3uJM2yL2",
  "key21": "5gqkVmhbvL5L5EXWSQuVkwUL8teZufUup3aSfJxwBk2PgAKSUWyjfV7dPaL85Qm97H8NKr95Z64M1JoHCw3tJbnF",
  "key22": "3HofDHsR9K9ByyUMNmB1CBDaVnfos81YE85VybYCjjvLaPpnjcKCgjCeZtKhyLHx73Bvp99pVnte5fEfbdduF45e",
  "key23": "nvzMh5FFQhPgQvtcwShnz2TfPWTPm4Hz8m1ZxcF2oFMU5EVsfgaW6AkY1XTwHN3tEz8vk6EW7qDZnH3sKvgMcnr",
  "key24": "3qXx9PVw77vddYVS4e8yDk3rJ4gvyrhLbsMrc517BNQrHhTuqis4EQ8jLb3aojda186HrqxUZoqiuJv1JkhomTXi",
  "key25": "28vNEKKC1vaunaRMTTDwJhZYiCfqsNfhQF9nP6Xa3VUEbHBCB74gtHAvnkLXmXchGqnzCXpKLvKHNBDvzu3to3Rb",
  "key26": "22eSeoDVVWYe6tjT14ePGijU2X45Avbb97sBE1qWryCMmMuRDAMapJt3muG64DZoSwtY5RodgX76FN5hDHQLKL2M",
  "key27": "vjvnuqNiDp8CzfTs4i2ZLcL9GDZc6u5C1i3ftKt8R7Ek7zNwZeMybjcDvhbEUEXpSx6E2kcZoBVWQvYt5TFv2xM",
  "key28": "5r9uN98yVfr78Ga1L2XveUpuVjwf55q8XNr49m6a8eaDsiWzW6fRB25ttGu57Cf51SGh15ea1mt3Gj17QtsKTuht",
  "key29": "2rdcmSZTYwcvq748baxzY3A2vBpULUQF9GVgWtMvonptKbqcrdMuLmsuCMVTWdZjCBdR1oeRzaDWLcaxYUvfFdSN",
  "key30": "prb3dU2HaozitpN29c1YaFf18bfaLz2UgYsJuHVvN3iNHFPZwVvuBEemGuVuCEDjLLDbPJEy9Y2rPmDHjX6SLg1",
  "key31": "wE4N5hVoJJTR2ju4uArjLKopGqHrh2D9ABgzz4he46Vn7CGfHeCvq6UWudBahV4X9gNGN6VLBnGQvJjmfxUWh8N"
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
