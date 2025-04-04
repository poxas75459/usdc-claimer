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
    "3Bug1irFXKBHjC1ki1r5KrdPtGq4ahWo9QKtVezQjJEGxzHXB3F2uDQjRow9XioYeLiHDNrh3cqQiPNQH72JgFW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MZa5HnQgB2XUKviy1FLZ7w4T8EY4xBaTfvsJpRs5tWsDAGuXVeDA5dgj2SKR1qm92rpaYGqdrvZEfKWZMTCE9E",
  "key1": "26DJE7V9c7urNn7MFtQ58uEob2QjWeomQXtAx4hiwDGoMPCp3tZHyJqWuKby2SGEUeQvEBHr2UyvecdLyivrfx3q",
  "key2": "3t4vXgdKjpFRCyNF9sf6E7c2bpWoNHCB7RKgApNx7jPgYT7Qi251Hbw74QseCsPgEPEzbAHemZkTL9j5Lz3cDoHW",
  "key3": "4cYKxtKPATqwcirdqAN2YAuWMA2fzVZyZW8FCn5Xx7ALTrJpTgBVbez5QLKeauDFwRqFmm7gFufsWDT89PMRtUxH",
  "key4": "BA7z3VRhtJwAdiEEn5Pcc3YEvkiYn6ZUYNa6CWQetenJPFQ4DHYmwsggpGA2Ck76bnv21cF73mybQdFnN2LMoPn",
  "key5": "5ZPzmPZrGCyvBQm3a3ygEhPfiePL5RKncL5R2SBnwvWEut6uLKeGaWe2Y6xLE3y7cmEyCKNszUCaB1S6GgL678uE",
  "key6": "56Pq7V9uDKoPsu6a3im5teo17tuycDBTgX8w9e8KS3WXhzdLMMHzW7HCq62zdXagTyotsKA82BYJ84irhgaDgVzx",
  "key7": "5uFMgunxdZ4qf9niFkjyYcKv1d25KkSLjmN3kHgBwuTbkYmAK1yPxJkzu9caxGmodL7eMzxxBd6FsPBvKxWYedWN",
  "key8": "5LgAErsscsUunUH5ynkD4HmvNsbSqkvukYy8gvU4eNuZdPuKA1HmGhGwAoWrd55iR5Qumqugr53yMJrocprU5zy4",
  "key9": "4dQTcMaXQnBysZmh78X9Pyx2gQB5G9DwwAFdnqyMy8QY13LZK646ZGvgS1E5tyFQuyU51JRmo6rhohjMqWLGnELb",
  "key10": "4HPNp6n2WsUqqo1sUuX9LYJVjYdnHZuRgsPhv4dx9BZRkSZKRoEGf3MUFT9fsBHfJKRBENSsPHikvtm8Df25FiY5",
  "key11": "3QtRgcMv25v3TaTWCXWfP51usWtWEcKE2JsEXTc7aX6QHAjHVjiqgbrFYa3iQBQ9iAp8FMhRAAtnabCah71dt7Nf",
  "key12": "3f9RNe85eJQAoeHFSYxRTsgSmJBxf7vwpfY51pd94PssuW1ZLbAgnPccv2ojz26eQMkdR9SXfwhMKvZnuaeQsVkt",
  "key13": "3HyVZgQTdxpEvo2Gm3sDPg4CqV61mWbP6n3Teem3g7BMKFk9Uwm3NDi9CMCHyVKCiKdb61C995TQMPEaANDAeCcA",
  "key14": "imE2r7pahyU9EBArfjPQ2cWmKc95EGpkJrhk7e1Uzji6fWdkEzt2CKhhNsA61yfT5wXHEzzmPfU9aBmGiCsMCKU",
  "key15": "9cwrrpgCfvyLSr4ZpJxzTTK7VmXA4y2kpNpXBvkv6zENpXyEBRcV6aw3iMvaPW9xAkuAX6uPB4wTYykaxzeqWQB",
  "key16": "BLicCVXx7WmwvmU3iuiRxpqdsQzLskNfAaFxs4bN3KqYVoNPdCvWjdqsR8znUBALi1mzzBHkRsZktVzEjSahQs2",
  "key17": "SZem2imGnommytgq2hNbbdPZHRZ6ZndwtRuy5zwiEvaMnCzh6FVLpTydJpRJoRD51JPApyeaMRhUvYgC1J9Tvcx",
  "key18": "5eLPTL3yTvxJhttUJsid8sAftoVDRg8GTE6iwbQx75zWHwkykFBwvbnfQ7LGCeRoxBA1keSGpUcewjzBGSfgsRXE",
  "key19": "5JS9acg5dvnKDHpHdf3aKALtDYxjqEMkh2XTSqp5Pa7yhXXR6EpyUDLApGQmJk5M62CSBSD8UZZiRiqqvRmmziGn",
  "key20": "2foETuK2dRk88CR3qC1oNN7nG4nHMW3X5wN8d4Sy2A29G2aBEdU2boSyn3RNn3tEyFX5cBoPmAujH3qJ3N6pfrJq",
  "key21": "2jm2LN11RcTRMskk5ed1p5QgaA9Ztq4uaRYCBNBUPP3fEQnQBLrXDaqRHfBsVj1K4gH1Vnrodao9kXudE1KupBh8",
  "key22": "E6Wu8eJp6msdD2M83tMHyV3Jr9o7fwFYD7mrW4xcXYDHNH4HAFhVidaqxf4eWUsavwSe6JVW3rnC84YXKz2afzT",
  "key23": "5hWpMaMxBXH1A7vrxDfVJrre95JRMxrcJn4kwqF3Pb7t24gxfsn6aE9sDEu19Ju5QUCfuacDHTek7APfKK2ksaHJ",
  "key24": "2s1B5dgRxVAFZ6Xbh3vMLDtjsR12XPGciYyv1Dr6Tt4CnoWj41jdwmi8JsMNaCBk3febtB53rwY9Wqs6hxGHcWoU",
  "key25": "2bgGVPRhHmgk3j1yLQ72cS6gBdhJwhfGZ1NVGYWwYUyG3WqwUUSo1AjYJVbnrYziZzwNhJNA2ckT3xDUDngKLEZh",
  "key26": "2ceq84XQEDfkhmtEVyrv1oBVze7GjbwFvx29JsFwY2rwsRuYZJEBEXX37PohDNpWqZEe9u9Lsk7JXKn2mQQvKXLK"
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
