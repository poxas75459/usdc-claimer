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
    "1nx5znQ2KjzGkBDeAqJj4M49NsnFmSvVoyoaLaMxYkDsBQek2VzjAofhChBqCpNbfffLejKYgxCStHGPePFWxue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63n6eth7qG8jdCoRMnBqireXp9u53GpjkYf1MKKVm84owvzBtLk4DrDfhkascx4KdSWuHRXN6zcLYgQprb1bKKVz",
  "key1": "2XV8tCUzhZVSTgAX7wMqHWWr7tfY7rHy3Qm6P8NTFPVbE3yZCh5XntbfbLfacaGbMaMbvzjJ9nbXvUGPMJwYkhHV",
  "key2": "2rX3VbDE8C53CgpKzXiG6aiQnJyi9A8YUfhuKRjyR3UmwZ977bAXyQNt1E6uqd6uYrha4cpKwku3zEB8D1s3FYp1",
  "key3": "jgy5hH2sDj2sRmVeoWbYx2HG9dCXNNrR9P7pUxMfGzy9erfmLoXNEjkUyti2cYEXj1RhEikyyZB6gZ73RAW8Qfs",
  "key4": "E8G1LHDPFoiUm4z4QEY4Qq2FtzPYCxfYjkQcoarnSTBehTWd5oUJToYNJXA9XjN5sKCkzuK2LeXURTf8LZMcJ5e",
  "key5": "iWKt4M6SSNse4ZzVg3e9ZQQtZ5UcEfkiqhj7sfoH4myZwnBY4WVBKQ7J4p7Szm8fBQxdTgx2QRqLz2Uz79WwRed",
  "key6": "7SZiTUQUVouTv3U5rnuY4PUyCFDvYwHAyw67fDp8AD9i58zCTQPxyc99R9mBsyeJM21nkt2x1qNF1GrDLXaYgdZ",
  "key7": "mAiZPVU3eFjkejAYyLigJ4wcKCDZ52NFEL3U6cweTfBfQgxKiZQpit2TVPAaijGRs9UV5GGWixKw9mo5Ark8EsH",
  "key8": "2o8ANhuDq5TihqvcMk8bBf23Hj3jMjkCEcyWGNLsoCjxRP5uRiGcfGCnHNGh21xuvgU5jNVH5Qs29jgpbvv74zvm",
  "key9": "42vvLJpXpjp53zPncjrNt6rQU9kBjeweqFTSTsRaTNx1WtcnT6MCWWoRCGDDGrT3ZRiSZme1wskqSqEjaoDKnevc",
  "key10": "36tKYrgNZ8WDS8NAVs5YQbtKwahUoff1TjhjZiPiqVDS7gazNWkBHNEWeTLiHmYWVH4LsjyEuUuKoEWbmwW1jPo2",
  "key11": "3rFdG1Z9LwcPTT1TJQsEPPYzSJBe7SUAh43YfoV1wDgZwAUuHZ44moQqSGno1gq8w4VsTbQgxYPKvY7M2562cHHr",
  "key12": "3JdMeo2LVmZsgaxeNjJ3qtq5etEfQkq2jNeUMQtzsxFZK67FfCpGFefZ9B4pGhkiL3pCVy9MVB59tLnFHwPG82F3",
  "key13": "26cAoztehm1epM51Sh2AEcRM7LbRXCaBbkWzs28SWyyAmmSE9ySZpPTg1KXdu8LYJDvdpVi4hgLKPEdtkdpD1Umv",
  "key14": "4x3T6sCqdJ9pDRF2SN7bcW2cGcJjDK6ifkqmdnuwgBiyg3QKgvrAFXXeB3NJvAiHJvJmTH6K4XxPxm28zUFVsLQg",
  "key15": "53ZC91CJkBtDTCQv1tjR3JoXZZDfu2a488yWtQQtC6hVUD72zFFShsQhsi4pBYCnTkuKHRrBk1mdxiyshuBsmJwF",
  "key16": "rLuzstxZwYNZwbcKPJTBpgWiH83F3tbUsySTpq9yhmzGY37t4BGzEGiLfGxT8ZcTxcp4xiPrgbpDJXVjjP4Pzuc",
  "key17": "2rxEBc8JjRBiaAmpb4VVwLqccsXmnMPrRNH5acGiscYfKH8hW9hH5cdry1semeVFRyRauVDZ8MXPmdJtmj1bNpum",
  "key18": "JQi1fSJsvF2RiDpgyauX9YDmk3xTPvZsV4kMtgjQ6Y5SuaJfqPpLKsya3SuEdzD82pX2pwJjnHTXh9endXpp2ZR",
  "key19": "3jzRDyUnZfb5upjHxqJ9F8ExqhK41WSHnSynCefGkx5vCQmJMitZq5huPt5n2CDKEKj9vRZ4HKZBWtsrSPHaMAys",
  "key20": "2Kf5dWSbGrFHqbZM6mCqA4n6gDfAiHwzjMMaVvzn3aW18VdTrqQzxTU74aubZj91wroRH1VLX4oxoQ7fZWkhBUKe",
  "key21": "gXrC71zsnJfSHoVRZTqddRDUu8Z9gpJKBAiSZmWwi1zWsEZinvkEWQ2vgvjfAqWbtvgRKoZ2XkHwza8AM3pH2gH",
  "key22": "xhfsX2s2RFoDfVsYpCNtjj1vc2MJYnek18zQS4K5JGyBUvJVCqFLxVefXYuLyxK3gSEK3KKtZHvK5ZqP4Zarb3k",
  "key23": "tiTV96w9BsEM5fr61z7S2kmNGiZQNbAReVSdQtmWCRuUrBzrk1pzhLumcaqF51CVXuheqdhB94aootrdedsLXFJ",
  "key24": "4UkJUMu2Q5YDoGqJv2vm2zhF4dNcrX9C9EYxHjrvmpcZ9A4SW28qvF1i8LmRhv28LLRi42yoQNVZRzm7ByabGWrA",
  "key25": "35SaXD4nhQByBjiUW2VZtKsa4Jv6yNmycNosph7FNH9Qo3y9oJvCHka6uXeieQ8k5hgfzbmQWwRbmDq9Pgkh8k7k",
  "key26": "2wqspYbdEo7C5J5Wn8Hpd15MYnQ7KAzrPzst8svxMaLbodg3ZEPabZ6fTrMbTkxoW7pPF5Nzw82LXQLAxmWwBDE7",
  "key27": "qC26zm3x16RfPt3fWF2m88WhL1s42jio3VKxzkWc9UGfcWif2jpNi586vrZp8syJeihYPm83RWWwf3APvydBx52",
  "key28": "2XyPzCTdRne4H35ycFq4d3SLDzPGhNHfP3Svb4w4LoZBcdo5CoSgRLp5hRUYrg7U8pDPjMdY81PhhRSKu9RoE4ct",
  "key29": "5HEnQxmHhYSazzUzBxB7Czptj1t9sav2n3KHN5rtVyfPw7JH1u4iAy8pts7FsSe5nkFHCh9bRBu8yvisk9DQmT2e",
  "key30": "3VYgQCKWDnC9yNvQd92sLveDF1TWJGAcrzCuvnQcr59B62ujodnPX5HHenLZnL2vktfvnXrRXoLnxLsk9ceJRsbd",
  "key31": "Jx6KeVKeiVuDTsM983G3pMTV9NSqo4WsHpeWK4YMt3sRGf4zhY7MQdZQYVcPr7NS7pJM8bkLmDbtTFfYqJF2fiG"
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
