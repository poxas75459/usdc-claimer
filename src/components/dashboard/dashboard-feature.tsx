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
    "3pRtmeDipbsJQTnAGsWqg5LQtWMHqHmvisZnE4hHyCD2UFdcJMW9RgMA7s1SHuS5VhGE7thpfLjGS1X3SuYfvDu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CZx2UbSUoRSNY1c8jEMmNSRQXVVcWUcfS1iAVfjJ5e32XacwnJeyThtH2PU5H3Xk95fJ2JBUfGAfwwkF2JVkw8n",
  "key1": "5YiqM9YAmSWPTyAR1yESogUxyVdMDSQggwWehDXujWM3T7ieHMve7KHAFtuBf4x8twWqqr2abrBZ7fFBYWigAqJf",
  "key2": "4qikMowAFZWAh9XRJdrNqpZ7MC1LKAfpbVmfVtP4UfKe8UQe1CqjnVTtTgX9RBz5r13DtPMdjbEsQemUEtAC8RC",
  "key3": "5eKqmUiEUQekTjKypxWfFvH48z72zdRxdvc4LDqPkMv1QpJrJh2Ls4torCXRMJaBqDrSZfTQw4gZRdRJtpLWMzEc",
  "key4": "2tWDDw36UjXPvmxnUGEHbrtTES9v1dxMe1thBgNtKWmJGHwEJ3dibuxTFmVUF2no2WFDYUXQKFyE7sRkRJjazvix",
  "key5": "3j9jSiKEyYhdJFQjDXF97K7xrrpJvQuKqidtAd4mdZqoTpiVWha1tse61Jo1fFbDHYJA2RiGKbmBCy5XJRwy28Qe",
  "key6": "QRqgjbNGDMrudbdeJPpemgqAT4FAx4MX6jgTHFArUdJyRJcCAMQNWkDtdVRE87ttKNh9HsAEEQqzfshT2px6rHj",
  "key7": "5qpZpGBRSH5oNzSCuUEYd47wwGo8txRmQQEUR2tB3vjf3PELs7wFvTFnueMk1rP15UdwVQLigmW3zLVAoteN4Zjp",
  "key8": "3mamiAeH9zT9bnVkFLUJ5ddQTdMyN5Qe2A11bwAsZPhoWNDgjsYdES9CinHK1NxDDuEsEqjWLURWLiPbiYApFjCd",
  "key9": "25LLwL3C3ZKpLZxe2PsLy53fsPWmJHa9FbrQ5wyXgYHUv1dSVBwLwfU49fEbvkKBjgRGPWtNzpyTzxiXmf532vVZ",
  "key10": "5YBdMQZ4uG4cnq851FsqsdcELigZ4zmVAUd6ZAzJgQwYkEG1qK47MHMXYmebYDTnTXHfpetfUFUVj9AsqFfkoXmS",
  "key11": "2s5K3oJZcFPmBBDRaNz5AniKKY7QUbQoduVDxFi97cwJuJHwqdYp4exAiGrfpvHAjBG8M9bjCiVmCP1BnMPpxNqG",
  "key12": "5UM2iP2cPM4spZqX2myVJs8WyRNGv6D1qVAUXEbvfkVvvrTck98Cdh8pr6Pqbbmi3tgy1zpBWWeFBD38nYtwQMeK",
  "key13": "4P6a4S7RXAs6Rqhsm2SPd66t6umJBXUXnXKrViPZwhesMdvDmr3GMnBvs9ShYz8HGMyfS6jGUJ16coyQtpKycZWG",
  "key14": "3JoNSRcDxir5h4ZHevWQtq5JMzxEQEHoqwa5umGEAHpMkyoXey2cyeWehScdGor3mVNoxNqSqzrfyK35NsUDuJYT",
  "key15": "2BEpJrkKUSo5NHkpSP3zDPCTvTCKSqb4cUNPXAoW4S8R4kVLY6LkbQNuykGtpWkavD5EcsZWqZFPoBEALpEJPREX",
  "key16": "5LXDZiMcurhyQbRmeiqaxcsuVWgJNL2yChUs4s1soVTtT9FTg1UFut9kcSw5xQzY9SLwMrepp6XCxzzUjkUJQygu",
  "key17": "3Ko1HdSUutZr8yZkarBhw2opQo14oVqzTpR7gCTSmvLP11woJcvBbwWFnw5L7jKSDzrTdygNeVaHUm4QfcBsK7eC",
  "key18": "KyxNjvz8gqKeb4wwQAD37iZxFaSF2ZiyNxj1tXxcka3WyHvETCkPhBUDh9baxE6GEZ7pmTGDEqVPnq7wtD8hARk",
  "key19": "4JV39ejbABcApPCengB9ZaSGy25h1iKYsAUfAW9wbjdLFTjhGZqwdAQEm48QnSQrcnqCDUGzu8mhozDUkaN3ax3H",
  "key20": "4oJGGfwThaALB57w9bF7P6AgS6Ft1HxPe7huCRDcmqs1HJAfVLDkff1vuRPcuSHcuaNmULx2nx16jxvhfV6rc8aK",
  "key21": "49ck2u51kiN3zGfXp46UmyVfRsbbyA85qvWBgqpSzkUTQZ4L1L5vMen1zg497FnWBsJjp7UypV3MZqtnHTFsZj5u",
  "key22": "5Xm64kUFsMSEPX2QicbZgSeeKvjk1UrzVbHFsmYCjBiSWKzRohDcnA4bL3W4oe4mwa3cs2EZSf2X5Quo1m4VoLuf",
  "key23": "3PDjLh6BDS4vbbFh6s6oiHwbeDGWCPwPZpWK35DMonKk6WT1Zter1sVFx5HgitEP42pNXu9gjYpbNWyQiZkmb1df",
  "key24": "2Kcp26Rq2vGyaBXee3qipUJtAjMJSNRHVDYXKqco9ypo9efs2pg62HvHTumzLViXY33CR2abePaZvTPFPdVKQX2V",
  "key25": "4Wyn4PnB4bAUjcbnGQ5LSpHqxBXQcYzy9TdevnJNkfLCDB2Hqqgx3k5Mx9pfAH3UyC8wcGLGHRA8KaNWhR6FkbAY",
  "key26": "8zQafHQi68WqYBvELADfgEzvfunsNYhu7qiRSFMPQ7aidKQsak6ETLkVKUgnfCzrm6tKAMrq7sG8Ybohvg9Hhj5",
  "key27": "3wrdJe57nMwiDWnD1oSkkbpGxB11kcvE45bvQyuLDgR1g818UdM2vXLfrxG9agXMX2waULWrcYdD6Gn5nRkPe7ZL",
  "key28": "4TPVQF8a9KHJSJgYzCxYStnboM9SM5F5344UqHVLyHNFGPUrtpdysTw2bfoPJbmaHjER2tqAiQm5zmLJYPDe3wR9",
  "key29": "2PzshB749Lwug3NnqKUCdZD2gwxEVvZ7VnaWY36wVabYftUbyejxwiFNn9jZS1j7yMf6sRAChwsprgEKBLrvbbAk"
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
