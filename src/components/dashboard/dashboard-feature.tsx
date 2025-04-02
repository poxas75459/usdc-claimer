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
    "4QnbJWVx6xxYz5f6y16BSL8qkVYLXgXqVR8EDGwn8TeAuGfXgEAsdRzQ47AbXnCY2cS4hog7bhBZRJcaCS6cbc2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wtscq8R21HxhM2WNDLiJrdsWYdMhsqMVzj5reNSAJxPfj11mCWLGBXtGCM9uEMEbPAr99ycfcFbe4PVi6R7h8Aa",
  "key1": "BTov5qjzhuwcDZLwPCsPKKZS8JTWi1P3FfJNhaZqoK5r3N112d1hRKid2Yv1LhdLD7qM8XhRs3iP7hB3ZLVyxEr",
  "key2": "5UwB2yJCooLnNSpyUdBqtz5jksN1atCXerPMHLEU6Q2L7KQGhMkc1mGxYz5Xq5b8wKZp55V4uMPe7CKY56Vd4Wsx",
  "key3": "2BDhULJFw9TsNXLGDmLuXGhyPHwdkpLErGmVV2BqShZTvJmsktNnNNfXotzVQ3VwVeVaFcjqMwND7vpVF1W7fL86",
  "key4": "2MJHEtSuXZ4xv22D4G6ETLjmcPFVDZPKSTgvZVxjHnFHBCfGQVFkssZTNpveD7FYzihoZmccpzqA8Uom8piBrAKG",
  "key5": "2hWwVW6gtqXBAikC76iFLVfWMfetPDE3L1ziBn73ZzyJY3JnW6q25xMWSdHuJWKupym7Cs98rrwX1Pjktmq8XmHo",
  "key6": "3WBdctE1T7zcVUMaAPhiScr5E7H4ggADKGC1F1k428eZBQVkcVHej93wJBopjLk3scxY8S2fb5z7nzsKusJh1cLF",
  "key7": "g3DtBeX4MiTem1omgBxMv2jMiivUEq6H43VVrzeUFfbuyErQab8k1KHaskYmhjKogKD4qMMSnkvrcfm4K7bWHbp",
  "key8": "3TCCtv7vr65kKK3s3fgnUqALxqRvXy24vtWjPQjccyfQrkw64rBF2TsTs19ma4W3m8VaZuwW9vd4kLMBP9WNuAck",
  "key9": "4qWca6hhXDfbRKuSyUFuo5Mp3GfcQTTMoEXMTW96BpKTKnkZPzsrVTZGcrZna9LmUdM9sEpZqWuU2HS417H2Tv55",
  "key10": "jBuqw1EgVVPoWwf6vQkSydaysonERCibHwexPujM5UBDTpdHXbFFvTPT5o7aSuQCGCnkLm6xtkZp1ah6xnEd6af",
  "key11": "3fyUfcqJUQocGUHBGM6B6tENmtkd2XAC3rtK4rfBxtutBmsahZJXm8XX8nNrAEC5atafyMsNyQ8957XhtppQKXc2",
  "key12": "2szRtmtWq7XnEJi5gyW6z62NKzMqJ1CCVTdYnTkvWv5B2dY7yMTfS1tQmcNuE1EvLvUAcYoAUN4fTGFAksqsuRKw",
  "key13": "5QqbS53xGzRdMwqvLPyLRBkdqzor7upqtLuLzsrvnccjeYLcfPkwPcavzSShcmFVMu5xTJJ63CB29VdXBRMMyaor",
  "key14": "5o72VkBmx3sepGRRp1Q4fBJc12KY1UTaksepCw9m9kZnQTZTCkesUx5gReHjUVioT5gkP7vESuPRpQos1zQoMmyx",
  "key15": "328JGRBooP1yLJwK3yFrr7TAdAoHXNoEztoETVTFidzkvYN358XCwJfwzGn8TAHXAcFiiZWxpAKSkpZCMW6vhBEc",
  "key16": "yCKp2buKSuge1jQS9xS2XtuASAt9VPYwZg7JP3oTmnp2pc4ctbAod2yTjaNkC3uZFeW98MkXXStnBJjD6VXyUFU",
  "key17": "5hYL7FiyMWqi5ESekdfPu8mA78p6uXr4Z6TuwAY9PuW78kJUUUnSGpn75VwAEAfGK4qMTkyULMhTS3wXFBheRYX7",
  "key18": "26GCKKHF3RM76aCEdsjdzmezDkvY9itJYwuwFWXXDQwE3CVnPN41BVpD6knrN8QP2o5CgC4wMqTWRDcW3Nc8eVYb",
  "key19": "3t5Gae5rJ2HRADoxkefBDDpFjNyL2ZFtbNiKGTSMo48YwwMKGHjeR8ZZVpKKvs22AeNqQrj2GsJ451J8fTnXW8vb",
  "key20": "Ptd5fXFUCphFaS6ULasaimyxhDpiFEbZKkGEg9dmCYmjWeevKUCxpGfDCEu3kC426sV1PrBwBok5ymNgeQUDbEa",
  "key21": "2yaxCJJuib1EWwrjKoMoLuosyZVgzuctbyYsQ3kdodxpQd6j2yRG74He1e4fZSJdY7FhHmtwxTcjtVURBNiUv25U",
  "key22": "4aEZy75XmGShdWNSL9kFkdXoU6ThR6XeCFFqSHk7vzxRwNtEt9HQunreoeetNgr9PJ23PmGgAwYegptJm4sLvozt",
  "key23": "4MAbLYNPKGwkm1qZ8rrTuVnrx7dsqM83eBsWJ8ufYmVcaWM4qXoFeVNcETMiBTdznxeNisUhEBcWnZNrqAygmT5z",
  "key24": "2Ga9yYdLT4FRyak46d8FJrC29mPbxmsUxX7JAXsxbWCEXmBseagM8bWqaNRmURhfsWtq9q9PTSGnWmiUFAh31nZ3",
  "key25": "3t83ze1Gi79A589uPjc6xs9fpgWQTfh1GBTqzEbdWYoupdVfrE9XMmgwPEBsyACUgNdV5rawovCVhBe9VpNsWyYv",
  "key26": "2fpesDS6CrmpAdo29LTDXWHpygJLAwsjE9NygpzVFT6mH1EYK8jeBhY6MTLQk7H2wLa52XxSxUiZWbvqkdGRxHsS",
  "key27": "3S3k4voRfNhvua61GRp9AtYhtPgdbZFfpVgnNz6Vhq4kz6b7duEWq2GTLvfZRRjMkGy8feRE1JQtuwrT5u6VTUeF"
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
