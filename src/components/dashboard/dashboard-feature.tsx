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
    "2tM2TL9BsQek9siUKwURE5xvuuUz7Kp8sZxguffJn77KPjN1q3TEMj4u7fSe1FSDtshEmX3P2wG6SYRB25TTpU61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rc1jqFEwSgB5fu1bqA2iAuuXKxbTUkJEt8wFoKY3jVSWS8e9zVvNSwLLB43VBckJHLsiqSR8eYC1iCHAcz227j7",
  "key1": "GbyFwG6YV8W9QYKkhDUkWLyLA5Qfoimzw2z7funLCaYqapLTdcy9pgDLncGYNWqwpWqSmvH5Tpa1E74NVsJbedz",
  "key2": "ohJyv6GTvS4GqUn26yf78h51StMKnCc4wMnUjLut2H6PgwV1pJSFZ1QiT359nhEUuRyXmPP1YoUmwQChBwthjsy",
  "key3": "3N2yvaq9LkEyw5SzzxY5n4W9xNd1MTGs9y4Q6JsAkPqSdg5szEmALCLbwk2bRewepEHgznAGhfrnS5wBsGpsQZ9M",
  "key4": "5j3ahnMHPH73NUNCy9GfxEAsJvNxfdm3AptuyirBDFHrj1BHzhfnt2kyCrGAvrz8vFkFJGWs5M48EtUBG9fvcbuV",
  "key5": "4cUCJTq7zSkmZMFwJ6NWWptKJqJkzFC5GcM9aWzKfdAf22wdgwFjwdnabweJCN9kUt1affr6fDmthywwe4nXz4MT",
  "key6": "21gfZ1hXZkRHb77n27PyyPMp32Z1WFzgyahLrdRVQV7zDxNRJRDAcqCAnWg6qzc3uHMMhmy2jQWK1GRphM3pGxkP",
  "key7": "3UeUWdKoD7xNn6mDZXC9GqPEhgXsgoegV7x3Fiskju9M7Sbft1bW2BecgRRWLjb4NaUGMPoqcPsSGtt4W5jyH6BP",
  "key8": "2Sb6xYuXxsKTWgEHbkSDkYed1MYjNpcaU8kV1nPnfA4ADWxDHp6cKmn6jq2BjopBxEZR8AStMs7RmDjiPrBSZhBR",
  "key9": "2GrXki8gqZrdZWxqdxm6QV2yid5pPag7YSS9gqs2B25RnN1PP25A7eLJgYhqX63T9bZJNsfsWZQ1SZ5HAu7pRDML",
  "key10": "2y9c2rKYyvmsWu2rdo1X6gRvbMaP1Y6oAiWaQERPSqRxEk2zznkzdGG8Xs2uEwQ6F52VA7i9u5cjnYeSZMM6u1rV",
  "key11": "go3uk9kWiXCvAxahPf5B5umc37ZojDmjDJupzzREam9stBGQ7Jr1hw9X4Me1YXeqbBu1eVgbVPrbVpRegA1ygqP",
  "key12": "2c6Dq7DYniFbr1nocpFiTcu9P8PP3ciPuN8EAe5gGiDQ1DZeMtEQDm5NwgrxEVu6LKNx6mEuucuiDDHFNwTP7EFy",
  "key13": "55V5j13TXDQrxexjzm8MbUBFoZmss9XWWhDLhCasyzBTFGqxZhJEm8MxucNTSPFrW7NSvymKGGegefVm2zLohCho",
  "key14": "2QDReVK95SQyKSSazCL6PuTWztpP5p9VY8yNUTeGY3qq8z3GEbtUP6dkPzKa7xEyHUB41autUo4LwwJNYep1oQh1",
  "key15": "3DSeTDK4iy9AfTmQ1XA5vWy3M57emr6vQ9js594SBEAoSqjBuQ7GysuNYwwN4VskuLG1oy5fH7HZpgs1MUff3CWE",
  "key16": "3U3cNS4XCeJbdBKoJuXum1WzRDadCbYPNFdMD8cVMK5gH7o7Gv8cjfWZUBph9K63suh4P8hbeoQ836zfHPfUfpLx",
  "key17": "4oaoXuhtgRnCPyakGSNxUXDVDFtALaAGim5A1w2fATqRLACg7TDXiSDpzFgXpgGxNUBqhUMiZjz4XYNKNEUdQEWT",
  "key18": "1Fc2a72znGyACuCXUgWTTJyXSrNFATd8A4D7bhKinr7MX4c4i83GMFKRZsKgYcVJUYa3kHT1r6n5SncZ2sbjHuS",
  "key19": "2NTRCQKuXY81mb6dHaZY8Tk1LZwTE16kCsHYF4cCoNaYWJfvHpULgzjzwZEWGLT1UmHWQ64hJrcoh9dQXfR21YKu",
  "key20": "4kHjmf3TsK9wanN7UFQg2xMQTex98gTa3y9woxDPWWZfDYhMx7gTHnjJJxya6YzeRBYEbL38a4xHMGEf2XJT1cvf",
  "key21": "49tXZ2r39AFEDpxJt8ja6PrCo9yYMm6oSj2EMdrtqNNZA6b5DaDVybEN92a8F1ZNmKCxwneKX9nuC9g9bWZE9VZD",
  "key22": "s5eMBEa2yGQq9ixEu4BYgYuDSCoes1XNRXPPcL1nZ5KFx148Ahkg8Lv8TcQH17ttNhiKSNq58kAkSkspeFn8oYR",
  "key23": "YC7m1Pvi9GcXnu5jayE1FwP1i9HCDDKFw4Mrcyz9Z48nYstfgdC99jknBvRXkZxvqwhDVVrfNKaJTYeG12rbyYF",
  "key24": "yBaaCosqK4rGjh8TbiKKVUbnbe7ZjAtma78xarVNwxjR9eYZXanQePQx26cNXMJ3z8NoaxUd5ZRRm8JPNsapxS9",
  "key25": "49KfqzKKrdC3ASJNau3SXNSYSH6Q1wQAsuFyQcsgao7tfNF4Jc2CuqsRzP6uZbjhCRK31gx9LakxNG6Mpgj4XLhT",
  "key26": "5gsX5KaL14dxr3L5gtKTDG2LcBzbx4ph6PM2feHJknowdLXyPLATN4GZzs2LxhJedr8rNccNdkRuz1fTYGoWA5L2",
  "key27": "4J8TaDvc1zepPXbnCFUQYGoS4bBrS9u3pquARpfFhRw7ic9iUzUD2FFPnpSy3yVqa41X5XnBprZSVcts9MkfKoQN",
  "key28": "5wFBtfRUDhQDmNvWU6n6RhxuHvLcTCtjPTimFUasaXv9YD3Ws5qn2EXebCPEU3vywS6oXQmWcSCSCyqjc6EafJJn",
  "key29": "tStB7pr22SZfefeN6sUubvHbMBWKNGweLHcBXJnPBNoUi7araUCG956nBqUwpxgKA9Mrr8WX32rsy66pxe8hqas",
  "key30": "3osCDZR1VP64CFW75KSCiPmmAi6cTxRPK5Ka8JLd3Uj1K1P3AEtQS63tGcnd2U1eHSSBnWkbb6hMzB6ckwk7iAdL"
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
