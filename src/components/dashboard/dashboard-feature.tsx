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
    "4tiDKhopKcPuLwJeQubKfgxxJ6MVy1k1uhDZ9WGtYJgNgqvzubDzXuMn925DuuWzXVTVWcHBUUVUTuSUgQtoDurm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bA2ZaE7oQK2VntF7XkdTX7EvpaZeSTcjJnJfU1hNVxGvap6BAwuRKgwXGbFNoXP7MNvxK6WdAn7LrdZU5CynnRm",
  "key1": "64Q5h5Yn8nWojJFzBtHxvM5ijeX6Bf35GsCyBJtPuuTg4U2YuNhPokCcZZf1miLDXGUVwdzsui3if6JAQGNAKRgy",
  "key2": "6766aytMfuDhCbg3QyUeBwQQ8wmJ7UASyCApVyCuANfLEEB6rXLZ4HuNmkJjqYqTWJ8Btj8aTKmrnnsREkPygm1e",
  "key3": "JjyYSBQDPSgoZNhEbMNZRRv23J97iMJSkWr5PjFhGYfWQgPDL3hSLAgfbFp2KZii14qjYTTfzf7XfC12LqTJLV1",
  "key4": "47Tn5ZwshBqcxpBhpT3gfsTqRAaxEcY8mYd9nQKZH54qBMgLAu3ZzaATeZMTkMJVHBkoknJZUEegyTFdXsp2hxZZ",
  "key5": "4y5c9CWY5j4HVEqPXpDcC28qVru43w6qyfGjHfTuTXGaPj88gM3JderX3q72BSHVGq1y1avFMLxDDxv1dkg3qe3Y",
  "key6": "218HC8tV4f4n195btEQBir3zgJ9iKKb4N1ndEnWZPcD3zEBcoRug2jUqQiKxDUKecNCEZJvqDnokeyxLPsL89EQk",
  "key7": "2Srri8QP1ZT3f5zkddmnKzVYvDEVm8m4EXTnWRPfWmtYNVLTsC5pShK55wqwxDo7PdTLXHqyYxM7Yzxd8EijzxyP",
  "key8": "659gEKbL8tns4BXdhAR7oeFtL9BboTbczqpHJyKRdewu1wRA35yWAQjoQGxL9kLe7Fq45tRF5Hp2owKd3tc3TWc7",
  "key9": "bzcG3Hsq15pibCueMrqQBFgv81UT1ZALwvF2VqAcT5ycmjC9KdvUujzLjzUztArX5NDhcEuuc12pR9BRdn8xBME",
  "key10": "5F9N1uVvv39c4qovkKUGRJR38HRVdqWGHyAfqUeKzszpyMdxHMqeVDaoCeMS5jtZwDXVxo6jHDMcpXEUTrDJBWc8",
  "key11": "59oqQvkxDqpbHRDY241h5SuRxq1QkvP5qh2KbbjhR8QzzxESQzVuRgH95ojE6kpYpRAZ7CmBG17Cc6ubZFYxBVkQ",
  "key12": "5maAK5Dc1sRLnRMjYfFezrPRZxt8kWDhuxQ4x1RwdTZJZm2t8rAjtXgWZYSV1Y1qChDVoXoiefczzvSAjm5sZKck",
  "key13": "2xAuxhnrethQdx8JrmQfSvUVgeF1UVGQEALr359UFtf9KVVCmfPwAEKBY2kpyQD1rKVk3do4KoCctNmGr4HCWMVg",
  "key14": "5SZkHeEcUPmKJEVSgGiBcwxveyyZJWL4UJjbDM5R6pjKJBRYZnrA6Eeu7a3pkU7uoc1Qq8hBc2TkARYJwRuMtjC5",
  "key15": "54LiB6Emj5D1tt7Vo3zZtBH7WNaPzRMMc9o6GQKZF5AXDSAztUsjoQTHV81siGqNaA9rXiiL1kTMx5c4Vpfd4PhY",
  "key16": "52qBHBw9QwR2wrwDnTUAxMyJA5qbDXShAHtBxU82Gkx3ixZAAJT4oCs1XnZLfNYR3N2uKaLqB57Hu3RYjbtR1S7m",
  "key17": "3zQCaWGA82tgkCoEzH9et6GXxDWhT4S5QXwbB4z6hcy3mcu4o11LaH2uqGjBZuXPKBgF6KcF7DMDCo8VC8vvjP9V",
  "key18": "4WEoJvBijeRGM7Qy8K7Nz9BswvRA5wgeLDXxzRrazg4fAAuRtsNQSCB85CP6f8s1E2oBeGiQmzKoueabhAbZJcei",
  "key19": "4dRrsmAMLUhH4inqSViqAA8BiqryYmTHJ99sqx1bvuqz8aGJDZCsUXeeaWsPS3Myrifeg7ZbJ1bLSyGmxrKtbzbs",
  "key20": "3tjKSgNCEmo5Pm51VMMJfYNXaGLUEGZoQeYReheMCsQdkwUHaTVDnvKVAL7uKXQjchtMLi2iBogy2dvX6pV8rqfm",
  "key21": "46Y7wCLZrhcDTb7RVRgt6WVszPrZ1tmbTSr9PbCQwLQYK2s2psrc6Qb6zoNizU8on8umMshqRVBGtEfMVQBFPuJj",
  "key22": "4pQ8xY6JBsVF2EuMuPJXVxCYh3NSa8uWaBg9Twj33SFHCeifHa7PMdnNxavVPZhzoZrBceYQ25TqUAHiYuuxBPcE",
  "key23": "5rqpvnCC7BNHi7Q8bzvXMfnPQBDTNraJXm7FNRbffkfA7uwSnKWCZwCy6LeFbyqPhD7bL4yByGQ3jrCHRUxBKc3P",
  "key24": "31jiN9d5peSaVzNKx5R93bpscNESsnZoeriLpm5jLHEkzUy6cgGYk3JxmVL9THoZF5T4A4TaosDkus3RgVtPE9xU",
  "key25": "zMxrbtdktj6yfBQEpuRYnAPzXjfM2ghHvHvrPswkqdG21j45t8WNDsC5B9QVbhqrZ3MXw3uZg1rpDzK3qmufRUE",
  "key26": "WCi6fPspzYbHKqbVTi3XXn7APMfVnDhZLHttHap2N1v9BmREBcQnDqgVMDRN7gNDDqNExscdWsDNhJD1MZSZLPE",
  "key27": "1MQ4YmPgFYJgVyvSoUwm6FHRvzBVm6KnLjgPLbMi7tqKBXxW3UruZmRgPeze7GpPpWbraVGtZkU4yVQartqWNzB",
  "key28": "2twNaRXoXZoeqiXyPzkuNJLQNW2XEQr6dE35MrqE4nsWELuqQqgUP8KChwSf4VDtmQpgjSaiXPjPDt7ydmP1DVkT",
  "key29": "3FHRfeK5yLoNwRhWeSDPXjZ1FwpuWiDnJYwkqimsecJRjg6FicQUAxE65UaPr8CxcehAowqadinxuYJh7REaW3BS",
  "key30": "4L6sryzTrVJUCvfkzSnp8F7ps79aoB2toXfTaTuByXZkyoVpNzMYUb6PKx1T6SpcP7v8gfF99cQGpSBvqMp3eJgd",
  "key31": "2bzNW7vHn2pRh9XnfpiZ8mg69Qb6HWUh8RADwx7XPBJx2HL1F6cpYqRHJjTwfUEzRgMNW1F75z3ZY1rvSWQ9hSph",
  "key32": "HZ2NyGdwEhj42ei23dQ6Wso5JZn3kHz97R7y7iNUofdf5VoaBRtLDctn1NBqZiV5xyuHyPnsRjaTMrtsP7CS8Fe",
  "key33": "52HKBjjuhF3491oANUjguCCR6NWZCULRBW1Ai9R5zVuffL98hxMBk5LRAXRHUZzRBwoucUPSNdk2RMo6sDeoA5GT"
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
