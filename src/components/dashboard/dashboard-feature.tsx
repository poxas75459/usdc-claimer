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
    "232SHfyshXgxad37zbAh81RNCWQe11dLMdBYBBLXW4nfpKoW2a8Eu7yHKF4sihmDYCqCqWDJ4oEVN1dBTd2Mm7Lj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qh2PokLsbSZpA1ayqNpjHMxBLAG5ptbJvJmQNkgCHJHMwDNTXhzid2jnZnJdGhQjwz6kkvDDCAzBZ4CDB8dNoo4",
  "key1": "5MbeMQHainKpwie49N6cDChUyoNuexpu5Gt8j2FVrKvf5PxS7wdJQhRAhTVSs1fHTwSKs7VaBKX8djUipuBjtPQY",
  "key2": "67gki1nuMoVjXcWWS4aSGbjeJBDHKPVEQUUSi7We3G9879DEsisZvPmWjvLryib7ADSgphF7KqYBkoWwyaMvVRAx",
  "key3": "5AqJp83ZvWRmwR1tJSR1iQsNVNxqwuwdhHpU6QiuHUuCrbjVoMzMsB3JGbs7dd1FnYdYEF59N7Yt8cMuVGKwwXJt",
  "key4": "66po2ZQw5TwietqnDvUB4Fj5fVCZ5Vt7UK2Je5ArPTfEov2tuv2wLhRfmABuoC69WY2TrigvFZ1Gd6GiwEYqjRpg",
  "key5": "3fr1tMZq9QSHvxULfzcGiQ1FnNGaE9qnFPe2LNiw5Sc14jkmXCjBEcTdXZN241VqyYT5rwxz8acGHEj14GwUG89o",
  "key6": "3Y6eptax79xofru5uyDGcFJEw2991TPYYroY42EQo4VNxmH1VKWodcTbbtKfpywXxHg7aTxJR6WxKTp46wmoNy2u",
  "key7": "5ihseLPg4XzKqwpNhxRgnUfgRP2zD1sUVqQkmN1dx2PdrLavjBLRxNdxhneAFUEXwxTqCXXF9b5gqvQFBJ8kuJB4",
  "key8": "54jYDDXY1Ywgtc9k9J3PLG1xkG7GZEgh4tvacYDXdezn8J7ekfcTMzRVvymHS2RsV1rQ26CV9BRzAcpuAbLF9Epn",
  "key9": "3PDtcVE3mnxCNk59iC8qXEqffLQXSRSCkndxm994STYoVBiFQbbMjfEc51VvgvHyHYFyQJrMobcfp9UHo5TAJedn",
  "key10": "5bYwa4zMKdq9vGyPHm2G8YxJfqXJeTwPD4CrWfExftEMMx4tzzD8hoVV2HAaPkunTDqZwkF7sXEB3yLV42DCFSz7",
  "key11": "5VHPGk2UGsW9MSseAsduDAyzvVCte2SW1aEMXTj5KEACwgbtN2L6JiY7zUwVdmaLJzbGA27jFGW7yMWB2DMMaLFP",
  "key12": "2H3HQ8fr5Wp5jQZ9AqxB6nB5E9wos6qgQNFkRqBc9aEVpA3u8ZcB3MU9dkYHe9MXAtuZo842j7fXDaSSF17H4oti",
  "key13": "4ZVfgqq3uG2Q7e5QcjHyxYTAnQGV8gxX4fCgzhdwvtQCc8X6bts83eSFz8QTtXkKM9w9WEhSxwgYZaKvmHzhsaXr",
  "key14": "C7HLA1VXq1fC1ZoP5PVGBavrByqg7SWZceAnWLvMSsm8bhZZoNRjWFBp4ScCq6Qc2fr9WJYHY8gKrdJcGVp357N",
  "key15": "5xKPfHCpYUK3kTXviPT1ZRKgxR7hcbrkPA74rif8jdvqfyBp9nHntyzwuVCgyWcB52wCqwNX6Kjf9qQAm9NTaSTu",
  "key16": "4iLEBdW9x4KUqbnSBWb7TuwABuTJgdz12BGEaYHvdvSYHQqd61SVcL1ytL18AcBn34D1mYw3oqCuvJSc3bKLj1qz",
  "key17": "2zigSbn3CdBJbs884DSzZXHaregjWZWUbjZZkS9g7nTbydD4moGRXzHb3J4SRoK4RNmWeQakz7boP4bfCbtuFPmZ",
  "key18": "4fuSwh3C5gnX6AwueYHAphJZz99jcnDxrnkndfgVKcG68sZeC71ELu658f5eTnNzixpdKmZSJ5vE7C8roNZorvX4",
  "key19": "3tpRaoGZYMAb1QhjfNNHEm79QwWAfUw1rjqx3W9rMEc6DxEDijqkejDxeuhFbczgsjsos82AqzMn1w1U7vpvMNJ3",
  "key20": "3pqeYjTUtgCPUvNX8NonuMA83D9uo2TmUnMmgg9BM5WGbNZANcyXooDP42do1rvbFqdiUUpz69x2veERxBFFk8K6",
  "key21": "2KAGvt582jQoQh2BJKBJiRh6CXgfhXrozo2RwniRjaNp3dVbKoo6ddmChdA4qs9UKMfd5obCMwS48QGMLqAi9o4V",
  "key22": "2QAiharwWL6mMfVUJTc7hstjY6ijqag1qmd4iw4urpR8KTdxztY71Fet6Axu33PQrVsr3aazrryRPWVVNKUPjfB",
  "key23": "5qnCkdJrZErGzisSvarRXujZCfuVM6n5osVttzrCXdFErGVM8vKjA4hegefVEHgvf67NicStneozDFcb3yBF6ZRs",
  "key24": "4R5T1afk88uQLcLoenfucuMacW7TRsUyP3VTMQ85Gh57JHN85tzhu45WEj2gbaCRB5Gp7PVftsatFFUcAiPYrA3r",
  "key25": "b7891UDf8jKJmjaRBpTYFYrgNdV3ZZv7QnVmTRUkDKzGTrckQ4X1eBWQMqAhTEbcEcuUaCqBC9cHhxqKtpk8uyy",
  "key26": "2Nj9ksqDS6Fvez9TbJPfUwjyqNq5Hac9dXyNWG5HmWK3DXXXMoE95dbW7fKavyjMAwk5SbwdffAzyQ12pwSRmMdA",
  "key27": "3oU1d4xae2yF1ruVqYUeeeJoUdr9RKpWtSdtfxvnCejsnPeZWUrSpUZkxf7y9vRHoAhdgvRjV35MpWShZvEojtfA",
  "key28": "FWMo1aonGJw6gyJKCj2Z26UJXHmQqsgW6CN6MRBYpNFzgvQmr1psRFngELPsm9KH6cH4rpEx5XaEhPzxEPvX3Gz",
  "key29": "49svRQQV41kHzVk3Pd9wek3HXQdHJdgy9ZHN99LXmueaYkEhwDGfbssPsbd5zwW9uAjEyxVrWJGFzjySjUSQs6wE",
  "key30": "4vx18RkKxhbUasxxk9t2GqA39s9zn8RhwemRay6Hj1PMhcypaVc9Wv6mCMu21SEy9WJHQ5rtbJxQ8PfSA28kNDUQ",
  "key31": "3MZyVh1tZoMzG1ZJgszGg4nq23cq8muzEHY9JnLVdrn7cW3zGcp5AREiWjfTqdP646R7Sqii2ifpbpsRtc67EeQi"
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
