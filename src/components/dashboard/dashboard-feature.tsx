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
    "EqB1ngsVBRvSXs3e5PKFxct5Pcpi4enWvW5vicoDCzEKhL8wZ9YQJv7SuDKnvvuXgsMJ6iWRzyAdavNrsJda2ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uy61n38BWEpVeusycZqj99K4CQ7EbNtzokAnF5Ucxu4kozxCnQT5td4tGKgUmatohh4rdxGF4NxqeFp2j6wqkcV",
  "key1": "45JnQ9SUumhQCxXegZW4bGea5HSSi41rYaaKpt6huedfLvUpD3AzDo38dETmi2PsvZK58M3XpVgXwwgri2RSfDDb",
  "key2": "o7xxZyoxNN2ZwgDvioaMnzcxVNNZUXnSc5rGMgLSuiBVFzu6nxAPMxsTWQXN85sgG5V49ca7h4c2JA8A9n1bsWa",
  "key3": "QE9kshtTMMx3PLLELjaBgYkBsEadMzYsTqayKP7FKw9p9WNAbWAtijntJWXwGoHyQiXeXfvrFuppApmYCjrMAJb",
  "key4": "2GnsBA97JzYXu2esaLZidWT4sTVsBeUZcmP4QcZdXSuh1xZ9Hfs2rsYEBdsw3NZrvrzM5959rHxqVyKtdqS88y4A",
  "key5": "4YQM2onwedF5zbETzE8WSAfDi1wXDjphAUFRFaZC1ifjdS3ujemf6rECazD4kpSF2cUT13SDo3t6sNwJ2b6A7CaN",
  "key6": "DyZDdcB5RZfkB58usZSQzxWKcHQPB7c4MmYsNu5B5BL7LVwdJdWC9Nn7syrq2AiNkeHPTrZiaNcH5mf8S5AHiJt",
  "key7": "pgKHheADJnN6C97A6AARrRK8fW3tHA3sDYxzdFrFnwUHMhj98EFFzEaFf8iG6Zokin6UrfBWYENUmae3hiD9urr",
  "key8": "422wJgH9Pr34x8Qk4C5zUffj5ZE7H2yRZQnfYTvQViWpAvbBHFdGKWAAqkpAMUUHUGriJZudgYy3gh8YBgNLnNpf",
  "key9": "3E7TXwaPMRRFLEeMu6v2Ua2RNDyKc1w4gkE1n9EhDuW3X6bGARKG7iQno1SP4gURbwnHkjYP6jEmWHprF6cbTL7N",
  "key10": "bwUPUUkeUaVJFmSZ3s3eaWQcdhSBGLQdM1ihyY9qu9emDcjGhg3zxxAbX35TDzUFcfF6e2ibwkCYEwgTwjSFHoG",
  "key11": "kdcTkJu1MnXGkaeSd3keVC7MzwQut294S8JEXcFWMZizYcTUqSzYyXwh8ggyqhrxCosz1K3HziU6S1icf3QREyc",
  "key12": "4HJFyYuaxsd3kquKt5vFpwfFXwxzYBjTsTWPFEejoRRJDLt6LoaQH3LuLCxn6ap9RjHXmqYADswKirXBfMqMmF2w",
  "key13": "3CWr1y99wqDNiKRErbKPFEfupQrLtGPZWguvZuecjkEYp9DUo1qcFQR9WoDaJdFVYZFuUsfezEWJdfNN7tqL36ow",
  "key14": "2UP3py9e1o76hDaNUecmvXLX4KyrFYrMet9MQXFQNBeVxpvoh7n8fSYPtCVzbHh1R7hmc18125Cy9Ju4Lf11Uf62",
  "key15": "2UK7wP8AUTZJHE5yxG7jCd77JhVi7jpvdUagHffoTMRHqnESiiwn6D1YupFNntrBsvv9itsPEUG5X6VdcqJiBvKc",
  "key16": "5Cva1NdZqQyRSDcKng55RpZWP7AMdxMYveQvdzx5ThDjcyVVLsnVouXxwMPbzt4GHG5gdov8pe9xjtvPTAXLCkY1",
  "key17": "zAmr6FP7eGmF3ahtuvj5TbXj7xoXg5EqasK67nDATqaHJyzgRb9RfxHbb4ms4b4x2AvWNpbaEQvi8SZLGFi52Gu",
  "key18": "3Gbu1vjaDH9zkGjUt4WSf1mu3uAEHW3EQYzHQRPkNkHbxvfvNDqfY2LBH4rLQAKPra2kgWs4TMh7Cmch4u5WDAEV",
  "key19": "3DZWmN2ZPKCQ8tMZusErgXj5SQtVbAVpudctzTSqfPPrgKpctGwfC9jZsaChwGEYRyaViAfKDeFiYe8Mz12SApdw",
  "key20": "3JvzK7FXHbrgwHPqMf2ESbztHqaisjFePK9q5K98TRbufNh315krHY9yosdMbKYYHGK7h2HAiDBjFkVhdRY4H3Rq",
  "key21": "RVhw5NJhFrP8HudHPUwS4AW2qTfqnEami1i2XP2h45S8ZM4dd5mwFQH19iCuoXCdz1iNSV5a259LgkNyYWanKbk",
  "key22": "3WujHFSMXqeHA5VdhRcBnAzRMjSvotQf65gCrWbx2Kfc7bctntZZearNFHkedMURYz2FwedP4dbPgrfrvY6NBQNY",
  "key23": "4yRA2JEbneHB68QXPNVFTEJostDmZyMscnyTH8uTzJVxoRZ4s3Dn6oL6xtSsxuNpUzbB3sLtw1tLkg6BbzWxBv6e",
  "key24": "i2RsaDZfXLF629hGutrkAJWn58aLMraCD9uGN8BvydBDyaHRyaZhn8UNvwDJRXar49PHg4yLpwd5GeFcoQE2ZT4",
  "key25": "5fjbm6fpAXE2Tth7rbryqyvYGiGzEhRQMmC2KLjE9GbUEejQm5pgtf3qmVDgtDBf96Kzpt557thh48zi3iMhqUak"
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
