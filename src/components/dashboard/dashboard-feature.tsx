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
    "2LfyR3oNrt9kKrEaUwe9bwceoGabxLhZRL9mEdmiCchvXdyfjwjunamZuUSuiMzrsZTvnNj71QXki2J4CuB9MNHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yBcS7WRg8FXWokJ5yu8bY9GqA9nunFopKJeo6JGyqWLZqWdVE3WVKNsSimEcg9DuekreGpupHZKC8NYtogfjZ12",
  "key1": "3w1yKf5dFUnZwtxgTzsrDhE1Er4LWiTV5onZPwd7zjkinD3P4241WQecYFjBZiuQnYyN6151E9MePbnUJsbxeyTU",
  "key2": "41s53VRjahgnukNBKrCkAPEyk9CjndF2eCsKpKcWtBPiQk7MrfgtWArEuNdV2eLYZukdeR4jQQ22R8Tw5nMjHHhC",
  "key3": "364DQuW5gcEJQoRECQm2wksGK6WTh4aCvh97FQ8FmuHn91Uo6Tmjn3ZRc8f4xUKd6qBZ9RpAH6mwgjFkrKbvet3W",
  "key4": "1dqkcrFWR6cBYF9URTMyKUjs4RKeuDjcPi66ik1cHb3ZsjUHt5hLv5SGjK71vU4indZUHmi5eTdS35PdmBmLCME",
  "key5": "2AimBymoSxqYBvovXikeKkoH9Qo1SemYupqhrwwd3divt3eD3F3Lcq8ScdzSSKK3eURsjqRZeacdtRYJ6q85wPEW",
  "key6": "4S9vJNCZqmBcuDBHiJmLrhCbBkycWvj2jNF7AoGepc1apJ2PqVpmhrfjef5gXGUbSDSuqtnEhU93gK7znR3HhnZd",
  "key7": "4Vc8WUqtJ9RQEm9VPj92D1z3zP5dFvne8FUHCdGqewW7BqMaP91mgve33uMGMuJqRTV9CrnUpK7Pstjt8nRqiRZc",
  "key8": "2JkB2wBUoGQSyKxHwzhUWcS3EX3rpgHRYW8MbJuYnA23Sum6sU7cVcLBmHGaskNcLySRJsdv84t6ArwoDRYn1Ewz",
  "key9": "4787UX21cY3c7jh59zvExUrqHr7xkuU2HuYwALdQ82cf7B5oMGdcftk2PzuMvinaJcGCUvNZ9HWTUBLcJKRo3VjN",
  "key10": "5fjG14mB3fVTLabFc5atDahafEiJfv5sMRq3btF1AFz7yQq9MYw59e1uygkXyx6XTZkXoEZo1EE9LEhR2tC5f8mm",
  "key11": "3JyZ4uJPCkvGb4346oweSVEiAg3QHpHrtH5qWKCQgxsqpZxWziLKVaaoGLEzNzjNUgCGGP8hNefJj5mgLiZDmT1d",
  "key12": "SuCnyL5zxCEsxX6XSKu8b27t2Jka9dE9MfLdNCUPtdwp1rYfZsetbamEBoHSLyhPbcMgbAJJzsn2fz7jBGE2Cek",
  "key13": "hCo82uRVTFce9zTjk8oyFgpVEnmp7iTMDF6KyZGZ89LwKeTJ2kRMyc5CRBUaQp2NF798Xj1tc7h8476sZ43ZMS1",
  "key14": "3gNM1pjZrreCH5NzuaU4PFhuxMCohGzoHYD9RNyPrLATVpNz8qJoyZHxM1tz1nJVaFb2xbC5hYxBfnacFPAi5aCA",
  "key15": "4A23cgipJuYCZAmDhm1AwDREdsfyr5zX93fHDqewJCkKKTe8XuzhAb8BQKCPwA92Zh9VeqGiwhvZRN1bC2B6ZDpN",
  "key16": "45bGxLxuH97GB7XBMrrYSZEvMFSuU7M8FvWWcffn5KDZo2sALMf5fnXrQQZAbMFzZVxn4nASHdiBB4SHznT1S7k5",
  "key17": "4mBZyN253xQnPy4Lxozq2WwmY2HJF7sebnqA4ZxZUtScALDjbJDGH2bp13GBjd5jAm3xFGQ37aautR1JnJhwEvKi",
  "key18": "3riZhkSrfm9zxcu7ByRXS6vERojwFVFC5vZqHrTLcL4eEuagN5G62XxyboipRzf1FuEkey9SdfAfxYh2FKzZ51LH",
  "key19": "2kRq5Qo8Jsn28GP7Qm312SCPPuHqbqK3janvmYx7uiWCSJYyp9JsYy5cANm2NC5cn9Fbedq7hRdRFdH5CVtuqS3d",
  "key20": "2PKjo5tPFPbeeGkeBuz5uRwM4eMoKvxu9smBtV9VNY4beCwYzpC5DinLdh5HE4J8n8nWH5NRtKDEdjWEg76kvLWZ",
  "key21": "3MTXm4hrRN85StM5hiJwyD7LNAayFvw9hm2k59SPLiHbVNz3BwPF6B1Et7KwtyAPUrmvGMkT9bcvjsNeLm21cYjK",
  "key22": "3uuxLpAkyqfkqVshLahnjojwTBZmGMKzWtYCxYZiPSUTHPbqHSVj2stpnZ2SUYVzXVk8ChWhLYft3eEdcxT8y8vq",
  "key23": "4ZmGoycmJNcoqWUwUeRU334k73c4mZTjqYGaZnPYhaLZZhZ4NmakuxP64jNJhSXswB6nXSgEFEXU9RLT3F19aPwz",
  "key24": "5aomJZTUpzqdB2tXEVGVBULRQ2sfJCysak16apvRD2ywemdAvQ9nBFQRkXsNgMpGSTAYqZQpYAtR5SoKtCekEszc"
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
