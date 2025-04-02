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
    "2Sen99UxFb6pekbiVfr4mBkyUhxbsGqmNHVxwPaRsQU7Mzat5qELYbxqGQxnwU82VnJkwtAMzTmwxdQpBsEDu1es"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k989QExwmDpf1TFcqTPJwA2n3fjfY86qrCUGpBcJY4u8hT53cYBVy9Nh53cEcDjW8zidXrxPe7qSRsah5CTkWSp",
  "key1": "2rwkRe7LBULKvUqKVFwqjc5DFEED4B91duchepAogFR6YS5dPUoTXKWRsMWF7P4a8XhMgJZ2fsQtyAfME5fn39ow",
  "key2": "43QLNNqje4E6PoMHaFAJFxRRztZtJ7ZNqeAsXJ5VdLts46GZbvVyknZGzjseHCQtQCQxMJTGKjNuvAzHVJCruSM1",
  "key3": "HsHPk1m8JtegbTFrPFLSBQJveGTVFnPuPvDP2jfmtNbF2ahECbdxz2JUuvcFxvPwkf8ioAZUDgYJoTFDUo2trUx",
  "key4": "5Way41siKFj2GK3HsEpKzC6BVNxe8wNGJUZArBk1yyQByTT2h2XosfLbEeyxhvh1bfAfci1W9DeZDbV9aNT4R3S1",
  "key5": "2ncQydiZXLFScKMZxXw4vJM8VaDDxo12UvfyHb9WYHDKSp3NRZ92KoBHJUJY4rDMWfChoUfEsQPhiYbmCsZRD87Z",
  "key6": "35gHaBenA5g982J7RVfXqLFA7KDXJyR7gDp6PmN3zsTeGLZE3rFFHTzrPzciNowZhR947qbXFH5Bu4SobU76t51D",
  "key7": "4P9KZqDMVr6tFznCmhLEc2tLgr5k5ZSDWpZu7TrBM49ku1hDmpkarZd3mzFAoQkfJwBobwhiBGrcQjPi2Zr7eJBi",
  "key8": "u1Sh1GSs5c6WhbWGdBi4u1xt1pkg2EocdzC4pS2U6yTNdXrdtXL1H2RyCF9XxSyRUAw5rdBYFzBLH7xiaS54eMZ",
  "key9": "dpyQdQMQWCLPFXKXj4s7Xr4jfJHw9mFALVYMc49FrGKrkdZuzdcYpzJ5mgkJyevPsTmufjku3YxZ3vYVoqU8ktr",
  "key10": "316qL1VhwRcub2kcCs19wEe95Eb1pXFXrTd1UEMWg3geW4u1gwLkXZL3XYhPZ14uSWEHpvGdrpWMH8aLJ9i1kAQC",
  "key11": "3MzMMfLmdY3uw7brEuseNs8eZcYqvJQBwH2JM3b29hESumzvxhjYAjx5iFVnwKPUtFuNZRc8yGtjaFx7uyM4KDZd",
  "key12": "5TSR1YdW27fwFZJ1oPTf9MJKgpFNwHHwaeNzka4PCbr7kcDjMv2ex5tKi3m7TFD31VZhKXCCRdvhozhQUpY9LsQv",
  "key13": "3Y1BvBMpUEXqg4kLKvstRfX7CKeJnjRDkcb6dLY9WsGdKCjeeSCapSzfZBQAgjoenQ9kg3h9EJV8yGmB56tL8nFu",
  "key14": "5XSvedDQ4eo4G3Tdx7RUJFwx4fW9YnQCge2xFGnrGrUKYqiiYscRKufWELws9dvCE8G2kPirmZriM4rAKzZLxctZ",
  "key15": "2x3FGpSiwDXYHvhjVWXDyPMp1CD61EHaJrhstgXZoH3tHDp1r4T8kuCovYa3uhkTwugPCtY6cZRhzib5e9KKTG8A",
  "key16": "3gFV4q167Nmyiz9ry3g8tqevLatjDGarWXaV14QUAvwk744njvKLF6X2Qim9deBbhVwEzTNg37n3eGgF122LieNt",
  "key17": "jxPtVfqzfZCCSAfhr1rK7Xf42XujQz52vvchAKJSi4vLXWKo94EiZgUvcMvFW9rvmapYXRc3Bne8zbyNBc4xxUJ",
  "key18": "pLKDGf6a9dipjLmRwTYgKqsf1bDrU3ZBnbicSYzaTYHzEuEpi57sVx17pLkfq4NMoawKCopgNgZZhdDQ43Qhrpu",
  "key19": "5s57yCVqnRtWApgzxym1eimWng52dusqNK71TiQJ888S3tC4kRrWcmk89CoxzGfGUZhcXDgfPxcE2hn8LibVkMWK",
  "key20": "3MzZyVTdyJo5jFx279VSCQDoxRDfFyVW2VCPcjcG86ti8h6fCWQKNWmQwe4zwkYLZidYYycasW9BKVC8Vqp5GzyX",
  "key21": "QLvmaZT9jEaNdNdXEk7fb8WsnzKGYhwTErGN5H4baQP89cAm1trZTn7KL4yHaBGQDc9aDF6e4sr4yvxvHg6d8Pv",
  "key22": "65XKMuYNtfCd93fzk8gCNqHqSfN542dRz5zvqrYwVEESTuEAMjAUhwmDCC6Xi8HMrp7WsytqQKJjXWDcRawin4QR",
  "key23": "4UnUzs14fWaeW91ndJZQBr69mX6NFPccRtRhFZhM5ehQep9G5LvV78rQbVjty35xhGnQzmrt6tg3g6mDwnm2Drse",
  "key24": "5CegfqiAZsnyUcCKJDPSZUQYMTEVS1xaNBtX2wNDBgXSqXWRBW5ryvCrzMiXZLsBD9m2RCX7w2LqvPPQT6xkoCvb"
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
