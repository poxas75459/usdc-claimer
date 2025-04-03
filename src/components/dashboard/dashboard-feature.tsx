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
    "2dUZ8jbh67hY58RWQAvJxPeUV6hUCazFjRqY3yVtaakovPmhsCnDtXf34YN7NEuddABXYRLCL1wB2vXLBZkfyMT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hyqGiRBH6qsWTcd8m4ZAKZdZSz9eti5etdfL49nCYP2A5EYRWfpgrjuiP4crwM5W58vY3V5xSwGGQpqnpjNchGy",
  "key1": "3NLj7L74hczLWgw451Nb1ZMemiBj6EnSeasNo1JzCzEYKnfjmQPEirFsgK5Zerr62JLXP5vCRLKYUBkBGnYDkpmh",
  "key2": "3Ry2GstbEpQDRw6KupjjDf1Z29QVSUVGFSYQkUpi29gXpKd5dH9mUvxBAc9iyHYFhFQXtHyxEBSTeQfU4jF7is1z",
  "key3": "5zq3ShsLnF223wrnxBH4uT63czTR5DqT8ADs5BfjUu5Zmr1ki9q3t6ucC3LcQA3bLzAwWumR1ha6U9eAEArLXh5Q",
  "key4": "5hrZMgvrJ9yU5CS9PYReeJUvB7LznQUSNJe59aLKhLZUtdUW7ULwee9gG3EuUaTVW2sNsjMd1mwpV3Kd2GCacWSo",
  "key5": "4cjUhz98625s7nu7MxJGVSshoQ8xjnQMSpwFxc9gZikCTv45XXdtUq5jwCJptLoj1c7rt1Fhcu2czZ6NrYQemYKk",
  "key6": "4xkuU9ZYHGhoKX5gm8czHF6khguXDvzycrMfXkSnEkpxz2tXNKrWGM8VCPvSBvqdNiT1jdxKxpbfJtYayxuzpiaU",
  "key7": "4bwDWXycSncNGXjXAG1orXbeK9E5syBzJF7X82neMLFcEMvu9qdABNZkhwJpHQhhu74h8JNK5fgwths96jsWDNhn",
  "key8": "4dCx77tASpq72SSXeghiYtU3AjfeRFDtibzjka6L1P7cYqDef5Zu5Ad7eV4LbfsyuAdK97dodLsB4YvbDQDkDYmH",
  "key9": "3BbmbtwmXyQsPyQh3fDUv33jmGWq643A4PiZ2B9qWTJSJ9shqefY8ot81AJNRryaHXb3XeDATnaichfbffjSSZki",
  "key10": "5jXwn29XWuqnxT2ro6RBDPtX2hjUmVbnxP3ZzTKf1CxrAiAQqE2SHVr6F7w2g37LKg95gNvN8RgRAkniAwtVFEiA",
  "key11": "WNwaiUKGwEnwDV4RQtVWJiQqKauQ9dWU9ndMqTQacBeJbi8wFwwkZKqBpyrm7Z58wPkNzWJwfD4NiW9G1kvq6DG",
  "key12": "NFRxtvCorKB4GMSivefaxgRj6Ptpn6afYENn6dvNvg3ACFhS23dt4PSyTH2bJddkncxfReKWb7HqcEMk2PJgg83",
  "key13": "36jxjGL2tkRpM1iFK7gfoWuNCwKtxStHX7Gqfa2zqDfGgTLqh8k2TKo1hJkFceQrWs8Tuy4UCJeStZQrtNKW97kH",
  "key14": "4LDRbr5s26wsTCm9nZdvd4HThjoi783nci2TcA8Sw3xK4TZj7tfZEFiSzbvquCjgWfTsJWQzbNjgDcDzT8nJMGvv",
  "key15": "2waub6wKbFnBMzVz4K6gCgEUUmAyocGZNArYWDU7tTFjNfvLJLMsy5nURdZqQA4M9g3obH9LJNkuVz2wSvfAeeWx",
  "key16": "2xyndCDNp1TWWcEZEQXwzfWDnPuFWKhduP9GQf7BySCni6rZTbrBL5ZwAEtaQvhGnyyXHyJ8GMTkgCGA4sdcYsbN",
  "key17": "4S2x1jFcDXj6h3dG9rXaTJJx9kRbxmvZ7LgpuFajt9pcq4H28wsNNc4U52qu9DrPSEJs1dEx4DdiS5GZq1UcfHj8",
  "key18": "4QZ53iyg6iHZCftQdV84RMu5jYTBTJVMQ97esbT96ZFMH9zEpYMRShZ4xP425JBCDDMeEFjZS13XPJ57Dfz2WQNU",
  "key19": "i8y7manYGxpSjTiJRcpcQ6xseZ34XELKY1us8bff8agGjqsxs8NBrxBucZBaGbfDCv2vBUsuiZNKpjTzfYqMpuW",
  "key20": "5hQVHbURN6VsbAaiabB96MD9xNkML5fUyAKRvoTg4LY9adLEfyz79Jmq45qcrU8uqa8HLVFPXNXHnpVg9ug2JQSc",
  "key21": "47eEDpY2abQroJge4nFP7ZAgvCej9LPAdhyDhVwemHrpDBPUBrE66zpjqyCoDcBiizkabam9WwMNwLiKpXHXH8sX",
  "key22": "5EPjdumCay6LGYXJLUzoEdaYVx9ogmVGRnFGTooa3NTzbaBjf4Dncoed61xRmr3NKJ4Hg6kv8CtBjHRYzUm1cd9S",
  "key23": "MRHJABj3tsRQVtLUxpTfFV1V29KGwWvsFHzj2A7i7yetzYDVYd9LoYRdedQtpvv4PWCPmoM5D5X5dYfA4DZMsKU",
  "key24": "4zL2MYkbDex4T1GwNfHwAMQEss29VQgeHxh6Tvj1jkt7UUR6HmWrqKufRFqoLigCQYSL8NZAdfiFWVCzJgeWkaor",
  "key25": "5pMqKxaepBFgYtRSBCcyCouZJRTUAdjyERDHycL4JVzh63qNz1d4nmVecur4vQwSBqz5koibXosAJsnXqbfZ8Qbt"
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
