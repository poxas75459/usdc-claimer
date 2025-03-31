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
    "34TBgfhbooEnTdyKPGrtrwhKAVxFg2MENopEjkj9GMq2hz38e6N4TCHP5joDTPz3Hs5fKjvNmmhCPPdiJX9sk3vH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gzsRz63G9cjM6nXjiai4bdc9G6vjyNWAK6Um3Z38cPkeE7Grt4D6jNKG2oKRAZuaGGGywUkYTkXzV3zc4bEBWMh",
  "key1": "3YGpNvP7SDqkc2692chCxUfcuPPuP11CBTveBvS4dhwdyXHmQRF8VPiKrT8vx75LwBZArXwvyvRgdCyUjF6vNUkE",
  "key2": "44kX7nuJrSEbdfYeZ6eZjtj4s6JJYwpksXe6D51cKpvQcdHqjVG5JxQuBhCE6khtEzFWp5tY2gCNriFGr7HXR1Df",
  "key3": "4i9n5GiZQdouRFn9CxpCxteiEmPXgfkQJpBPdfiTh4f7wcqSmLUDhP71LybfWkvctbgsd3DMqmGawRM8YZD2kM55",
  "key4": "5jnn8ASypdW1bx3cvQPFiuL3bgoJbxD3biWPYvfWEzx21zGLRG2dCVU2vaUAXAZFjuDwYwe2gqfimx5VqwNjkoFs",
  "key5": "5T7dXR7HiempMiycGTTLMwXG4nW2fHsTNzAxo16cRFYskj6P5mPrSg2uy8j35ZECa6vbhkit2dWmK8tW7pFXsCDW",
  "key6": "5C7W9aSmyLV9B4YnYHpdaubtfRQ9pCqnMBkQK4XVEHo3onfWeqm353EFz4VsyMA8RGxuhhZ1oVDu88ZhzSsLe5cX",
  "key7": "2hCnm8GAV7ycS8kyLBMSGVgJNcZERrpCX9dBPZBYeTMVjj9wx7tb5tDp5fpuKgWKjf2HJDpvmrainXFBXKVX7onT",
  "key8": "4ADkkE3p11hVNjNSEJvDFjd7to683cJ1sKAe6ghHVftT5tpMJ7YVNrQWG78HfHZZH2wChxsw4Pz7vRZThEiWRSy8",
  "key9": "66gs5toTSee9jSZa9JGqLafySBue5ZXgCyMPQk3hwSEQKK7HCtvJtiG8GERiSwirrh1ur6Fwnwse3Y3EM6uvXAtX",
  "key10": "29vef3ojeKX359xtmZvYAgUeNwbS8t5jLcRup24AVTqva7LniyGSXiYNjSqdNPyAM5mMQV3NfnBTKLoqbaZfoynk",
  "key11": "KChX1gmRiBb2GS2mNejWNbi5C4UVaVz163gwhHmovZndRH7vksFxrBGDMhHjbBmf9oNXUPsWcNzjCJjPorsKpLe",
  "key12": "23S8PfbiSaJPXdQ4BeDAFJPvqXM4SHthZMTSjLvnug82G8jSc9858HaqkmVieibPiWm77KKd1m5dcFDhULmu37gk",
  "key13": "5AF2nsSwE94TDhd2Z7n5TrTFQoPTM5eo74NqTkAnLcKbxsc3CBJoEnHMkk44d4vLNnrsWTxposAQJcPYjqGHJ8ik",
  "key14": "FuWdH1pnE3K5qZtq5o2iUdcsm2d1zgZ3aMYsqk2Fq9MXNnVuG7RqUr2vvbDvwx9TAABofTMdicR5LLs2VJH5M65",
  "key15": "4L8Jp8xuBk6ssWFmBd8LBsbHqveVMjUkyXkwFBv3tNVUMEWjpM9mn1QZ7abpWFoV59TffAt5qJYUGAKk2noneVos",
  "key16": "4MB6FrWqtL7YqwuBGuqcHPt6XzpB9XBncGnQrvdyJJBCnzQEZmhMoo6qq8Er7rJvh5YSHXnQmkFDXmnv4XF2n3zA",
  "key17": "567dVRHiAuPjCbY5jXYraC6iDCae7LUh61kud5Spfa3fCJDaC1tAzpyQYzoownHj1733ryWexdUkjsCng9LqjRpf",
  "key18": "25D5t2gaqT9VuJZd1hUEzPPzk623sZJ4ai2PiwxFH3RsEFY3JsUV9dFB7rneA2b4HVshRCCB1GZyt2KcypaQya45",
  "key19": "4RKYbqFs9oSDoWVHCoVZELUk5PZ76gVtUbSS5W74fvujs7KBjXZfDLnq9aNdkSPuofL4Q6kHP9MydaDhUM74oC11",
  "key20": "63FEETFdboTHPWNfdpyrkoQPPSYPtMakvTaggnu7mnVNEG2uVKUstRCZZkJFawSpJm2HM9Qvj1X4HPuiTJx9BjjG",
  "key21": "5z3Rpy1MewqzhPBFhYQDCzUGK5mm4u1aUPBAM7YSHoSrQ7rSoTH4AGxnQi98QYpzARfN5mdNwdeKwhT3FVnxqQYS",
  "key22": "2KcdJdV3eoM25XfJnDaxeMwWakGsb8Q89tHzk5V7qK8gBL7uQz2xjksmzoRSD1QudJdV8Fn5DarA2R3EPTeJjbXb",
  "key23": "2U2BnCZ8oasjM8CkJkwigCMg5xzuuLNgttW51vobCtbQWG45rYaCHg1ABd2y6UAchnb7dkcbZLCYRs4qcwbhLnUt",
  "key24": "3ZRqdt75cJTAtC6C9ezbtnoqyJ7GcNvLq8ZwA9bDqV4mKYsxSnCUnwy7QkADrGwU4VdjNxAMdvhygRZM7ALs6dah",
  "key25": "48jKnEKTgc2CYPZ8WighLYUyE4dNHkS7HCMoKLar8Hss24Msuc7JF53GUvep6kmM4uz6BCkpQmejqbGzrPBwnXkF",
  "key26": "2dPy3hqWgpv55tvSPFnDoMv2P6mdNhMKtCRhDzSXXVuqKvL6w5QTPUYaCLXj75VAzUhz3YCrm55YBfPtWHzndNLU",
  "key27": "4dXJYMaKBo8M91BRLL2Gw13zHy6AKXvCWE7Zqt5J1n3E5W5LhriDbbHN9AvbQzRaRDK2KVuBi9xLTAbHKSFTD5sD",
  "key28": "4DJqEPm6SP1eD7w4UFux81bpZGjBvKhq1Z9QUD6cvKs1guvvLz47MFcumhYart45ZenLfGaoQmByzQCYFSaEPRcK",
  "key29": "2NgccXDQsdASSg68HH3uNbT14TH9a2Sjn2LvNKb9ai4gV8uHMy8tR4hDKc9kqaLY8jHThNRhHcxNCnR4qo57CkZU",
  "key30": "4Z3vNwBe8x9q3WgCdQqqitGhTjmnDuwd5Xus5eRT7nQXscWjwF32RBGQawQjrSZyptH4tcyxBcNRW3SmVLW27vWD",
  "key31": "4UMXiZgUnfeVFb1aPpCZ4ntDv1egy4ur9aiTkr74H9x5Yo8emLryiWeAtqP2Cx3S6zeSZEa1jdWU4pnyqoF9UuGT",
  "key32": "5esqQC31E58LS79Fg27Eq9M5zgZ77FiVDeynyoK5cVermUpKhvdhtKfRejTR66sUnP1Js4PF2w7cf7pFgWrXVpiv"
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
