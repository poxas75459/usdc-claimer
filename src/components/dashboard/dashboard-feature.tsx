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
    "5w3jbRF8NhmvC5MZ1HDq1YFwpm78rogdYkkqzhdFepSaFcrC4Yd8WTxMbbgEwwqW5BQhmH7R6udqUdrKXzfsst2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FAZKdKZ4w2nUNaLtMP2g9wfjRKn2S6VGBjRb35sXaA8Jfa9nJEzfBBTCMVyNP4jV6Mq6G149FyAvBqKNQNEqPhx",
  "key1": "2wTVieR5sf3RJNZHNu1P5w5fh5vhB6Ju4RyWSQv7rYKRX1mraEeZqTwWKv651DKr4xQjJkPwAW8ePUB1pkS6Uvkh",
  "key2": "44esUuHSbUQfN4foBMq6kuxrC9PotDGnZifPWHqqVynxeKJ83XuL36MT6FxakkWPSuriZkgybWKJmpnTi6amfbnc",
  "key3": "KsCfHLpjoYXZqPDjLpiX9WSJkMjeANFz4S6TqB73AFzUciHfGuR8eTWHR163JbDoUf5wdrYECggporQGTUbs7rY",
  "key4": "552byZUFEywD675NekRJvyyxcehsVL9EjFnrt64Z6DdrBzoe51vxgt18rwVgUwQTqspkCmrUr9XbvydNQWATt4ZH",
  "key5": "3eX72gTzwXeUkVQtJxhrYWitHPfU2P4AngqS4XR4i5rdFCZ97mtcVbRmcSABUpS4yAC8at3t7MGfne63j1Ajmyf7",
  "key6": "4HunQ3pABLL211bErxegZeFA9quBHFFNVh4iJMuYPb34i3ye2vdKJfBgcN6mdVqAGeQLm39SRNACaqhtav1KeVUn",
  "key7": "1MZmQSBQSupkpoQjGS5NfAkPZh6MSabfMhQnN32NJEAA9zVLF2V4uZYKT93LWnUdsCSia421Jp9Y82JLHfKcWQU",
  "key8": "36Bt36BqGs7FwN3WYYZKEzCW6Vx81368n8pEdYW5isB3JF947Bak1jGLD6BLtBSK6qCkS5cCqexZosLc1wKPaeSh",
  "key9": "4YixKer78fzQoAho4bfnKgUFuZ9CPJavYXpFQi5Ve5gwxsWQi75aYsJun2LseYyEvv39a57tDL9Rgz7fa5X7TjaU",
  "key10": "61VaNMs95E5bc8UFenL6Cvdt1VoxLPcN1XxuxhFfjS594ZH3zXy9h9EHtpzow8w6WBEvQ1P3hnqvx1yM8Y8Hr8jR",
  "key11": "2Lym7zmNA1fCgGiSgLi4A149LGNYcXUDMNxeBrWQj1pbH51xhD8QbReCwBNDVv3RYhdYp5grkjCZpBKuTFm2QDd1",
  "key12": "3pXS4Aeoi7z4mK9MSHSN1qjUU5MEVNWHYCC1PYhmGMxabcqAEgYkBuos25d4vypQYxJLqq6aRvHXhm9ZM44dQRUr",
  "key13": "5Vk4eh9aXFvYDbEPyaM3a3c2tNBFwf6jR9uKcy7FH77qsgA995PpSK67CJJrm9tEEnWySENk3UXfqMVmDi3BQv9J",
  "key14": "4TG9n8k32PVW3Pw1i2poTQXPu8SmyCAUznY9P9oF73qko7WNH9TNsT27DQ57V2ATXQnec16miinnq5CvhLuzqxuM",
  "key15": "4uqxEZv3fSmp1hMeZdFpcGHikKAwnwj9rN1E4YpkzrGCnZ2TpxzCB7m54PFJgQMfi11y5BzHMccAMck5X5sNAiCU",
  "key16": "5YT1uckUmVdW3aSdbNkTj6upNJz1JXVMZe5ryWtAJeCMGHRYzC6LYGG6TxNhZ86BdaHSg7EjpuCmNtuNYA6sjnMS",
  "key17": "FzFxiQUV6mykr2WJNQyp5o5DR56UQ3XiCCQ3TmRRcFj6mre5ys4G7x8xyRcTb7pHiyAD2cKFfbxUTQ1PPeYsmGy",
  "key18": "49mekPMrTtjYmPFYypRQi7SFNPqFGjGgeUeeB1Ckub7C1veszfELXzPofYwft5R198iJhQmP7r4gHmxCywTF73nK",
  "key19": "2oQsrLRjJ8Pfxe55tAvazzbNQPWijHGZVajGe3djWoMQ8dW8UznDw7e5zLaU5HrmykBegy6nVRGBRiTPy18zfyJN",
  "key20": "5Xhffpc1UJQAbiGuKWVCZfr3TWHaKp3BHGKdRNTTfT3EACAkS9jKtE1kJnkVNCoCgdQpfz1z4fdaAQKa7T513BHp",
  "key21": "2H1pjmHJZa5sNAXzmayyxVa1297qab5NwgiqkTEfFTy9axeRKL9Z1XGpyYnRwscEgu4eV7EHWNn5bnizYUabmmFw",
  "key22": "2gJi7a1gCFqXR9ULDYrgyMPUfGGQ6HLqhGwZWn6Xve7z6p66wKqyHfzRwGmoeHdY7KcqkJyLuA9KRVmLA2parrqD",
  "key23": "4x4FVaXLCWLD9iKY8sUjLvqXbAJ4aHdVty9tqAxduycoxsXVWmmRpugPKLNRreKDeNB6narLbBj4N5xQFQP5THnx",
  "key24": "Ls1VnCEh2tv9z7WT3JnCBsubqwv58t3L81DavWs2ropnKXALu1CMLX5zLXuExC3n2wJPzDgp11Xdrbp3yhsGQce",
  "key25": "4Rhz34wdPDkQgwqCcL6Qg1a6nwLZKahMGTw9ZBiizimtsYasmZHHFQZuWatG8XmCDdt6hLNKWFp5xyzXV8vNAheq",
  "key26": "3n1YxH3mNB4fUZ6H3de3QcLM4f6mB6B3T3ehxz73UAZcKk2SdLN8quZHddvCfJAzLQSq14fSQH6NmSNKKN3ZXVPW",
  "key27": "3epPLgTPcsfsZ3tpTV7XwMSoBRCYo8DDpgmc3Lhvm4gKr3wW1MhstynZkWJHv5xRLrUJSUxR3d6dYyPmv82VSYeN"
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
