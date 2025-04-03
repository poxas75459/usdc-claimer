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
    "CxC225fHLKMtYja7yKcva1TNpBGMMpPMfqgHEgkn6F35GzVXTdQomRnSpLmKNM3KusocFsMDqqXbfD1q21tgpce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TH5ZXrYxfAoi8xCVEz56HPqfHTudVQQ4WLPhQ6EKfevLLur7Cx5WgJ1Est6gbG7qf4a6mAGeuxbgne85Q3HHn5M",
  "key1": "Wa8FQrotRuVHDmKfmdqbK7jUoptWhM9UFGgLipD6sfmrxDSfF9hTUKquWJq1qYQTPAUPvdKiTRVzVG6v3Mu9uNR",
  "key2": "2UXX6NDXqte5fyFjgZQZJZ5fsscJnnmrWt1YKaRsoM69BtHWkfnsheR3dRmfe5yiwc1fEdwNH4aoDXDSqhYcA1Ak",
  "key3": "SyctmJFgxtz5TBo9piA6758yriHZVDxkU54d9ZYWPLENQf6h86rezkPMvk33HPB2WCFAPfL8fvRfAUuhS8DK2Lj",
  "key4": "4kzvnqGviqvsX2M8ogeaGNiVVMXJVwpjJMTSR8GgGi9Y88i88AhoVqF2FNYe4SVLBNVnhtSkbambCbsiTYKDmR6",
  "key5": "4vH3chCTAYViJK7X4BdomeFXnZx3vdRB87YwANZRKcArYWJWSSDzAU6r1PSSjKfrC1gk2QdkoHvYroyxz7qpvkRK",
  "key6": "4jxJ62RJc6Ecd69cYqDrY7sMDTXHXn3GQMR4YZjMvfzpDqWAoj1GpdTaTpbPYcK94p23TkjzJ4oFVeyFDEWAtg5E",
  "key7": "2saE7Z4gujRHKzgyWcFAaTkkYsKNoRBPRSSEMEmfUkX2LSPgjPB6h1TTd3msq8NEWtc1zNdYZBmpyWKhkwCGzVSV",
  "key8": "5SCJppJ7L45bBw1EB4yoW1cPPMAphxoB9iV2Tp7jRVxviELX9qn8iyWDKVYeDbbfuzFXPxjwpzodUwY6EHbrNfPx",
  "key9": "53JnZnbesSCyFEXGCcU9sVVwhWZ3vopUG8SdPEL4tcqLg7EMbCcNn1o7DkZWxoMJyLQzNbnFKqg46RXW8XobDEA9",
  "key10": "65TqAjFEr2tgtmKZrDHvXy8L5JxKWkHoaWsJPxUmexePkkWA7Z4D3VQehk31Dmfh2g5d67AKdxLwBZyDfPfFhivo",
  "key11": "4DJZuFQaiuVPj6PABbLGh5rDQcbxDUiXJDUBPorKVA6SDAeVdYNaUm7z7M6SA5iZsebti3cTAeBqEeagHoWax9GE",
  "key12": "3FfGfDwsvmT7omjTSMvaXEJ4iD4jHqQ8veybUFG5mErrTZh4DZc6jd1q8vYujtQVZcyFSJJE2TpezshkNSrZMFTQ",
  "key13": "nyEy58eCkdkewFvXYCxmMG2sQBTxqxrwxC7jdd7iDhCYp1oCTpVd75zQGtop4y1NW69fsBneUr8Ajuvr8w1eYcX",
  "key14": "48wiU9Cdi8BoayEZhYifjCt3eTa76huwvYSuKqT34XxJjGkNHa6iMXhmNitL9AuwmBZQth8ujy9BAavcgFtdfRkf",
  "key15": "41x9pHTNjzfRrVFbeMN1Hv68nQp2qLpLv4JsC9KhZqhQtfCr78PGLeGR364Q2qNPw5czR6G7M8qppFqdfXqEQs8k",
  "key16": "TpeMeDJyYJUuaWgMWzbh8CtGyJf5GsgvLRVLpfHSrBQsfHjpJY5UUkLt3nhvFAFaqRaiLG6Pk86NcgFqstonErw",
  "key17": "4MRkrU6YvtDLuXgc6FXxkSTi69Tmc465WPM1Wm2qCzqGtHiBnEoBkaJQtdi8t2GgJDEnYuUzT4vud7eJ95oYkXXM",
  "key18": "5Wwq8NGNu6qcF8u28NnUaaxp1dys1x4D4RSmvRLdQeztAxQursWqThD8g8ep4PYkgVhxqhbtUk7Fo4VF5beqZSB8",
  "key19": "25LU1481UtUu4LGzFe9d7EckUm7w8XuZDE1q768qxTZceckg7WbFdwbEwtosRX7WHYSNNG6aTdPHuBLiTEydqy7U",
  "key20": "36QQhZp9TUkpHVFoiJqkmWChEoke1rjaQwGzKYbdep3BTczCyAtFKh9x2J3GHLhXhSATHH3JzMMk7ENrEuvjffto",
  "key21": "3FrNjNUMShjDFwyBcZcHnCDGhxYMjC3chiy5pVGjk1Gqd35X77mo34aQpM9kY7kWx6atTRtmsuCKby9Bx5pRmETn",
  "key22": "4fKXC6VYZ9VjG14ndFAvL97v1MjSy7J8uCqSfc3sLRRabC8ubDaEmBpiCMgkUPRYCMqL496ZX7jY4gyKuRtHzeG1",
  "key23": "3zaNF9VPrhwGs8B5Xv2KXs7JaMyaGiQGXjD14vJ46BRe4XtZTdyn38PGFFQ5VxASHKTPcFwjQ3m5xT1d9PZJpW1j",
  "key24": "26j8XqhknYAiyzBqZYgGGLLQmePgDimGVBXQ6sztKtukh1EkFa9rKTyB7x9hW8tT1B9cQzUTpgQrew7SjjLNxzmR",
  "key25": "22ryq4eW8EnEEvwjkgcbJpwJgmAXNFUc5Vv9qgoARYfajcvEKPHAdFjnWjzZ77qSukTNKHi9xRFcHcZs9cazQY58"
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
