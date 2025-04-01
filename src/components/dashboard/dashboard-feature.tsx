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
    "4D6zJyRdx4vbHnTRNn1hPU1DNCdtxzW2k8WUQ2Tup12TV8KTWwsZCdi5eLKAChnfznkHiy96Kw3jUnx1DB9ybYzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ueFg4yqQTS2qfdavqRorDZD9JGZgV6YxwtVE8kna5MpSaNeBxvkQMCQ8SLLwmP4L6tQHwQzAJRECqG9g5LUD1kF",
  "key1": "2qbyHdQJiByFCkvAycWZ4JuYBdr1p6KMpAdDhezCeoyY5RHYHGGmKnaqJKudWFgQ3FGxVSoAURaxkiJffqyoZagA",
  "key2": "kF5QYLF3S9P1tmHu8dHqXN2Ya7oLeSXS5tQaaZ81nUk1Cf7CJiyAnxkQkbr1oiP1Ws83fn7iYP66JZrHkii2r7C",
  "key3": "5Fo2McQC8hYUsD7eRPtebBgKzNqyDTs5Ni8LcAaktbZdzA7m6rnd7ZH4ydNVL6Wac8EXW7uTULYKzE6ayp29tznR",
  "key4": "5126biQr8YbspVSLhktbMGTHcdcXVmbMXv2sAUYaJi71mwvEz2MrGT32e7ZZ6HCLMhnNmeJmc5ACJDKpUQuJm1cB",
  "key5": "2JBEaque3ZG5PNQWHMh5HGUZWgKn5LdoG1PdvLxeeQbFy3SJF4oVX55piPwMviH3mNyUar32LCYiVZycN78wgLbu",
  "key6": "44JsKgpcY4Tm69Xg1Hh5yX8rxsPB8kCfKpUTGYHYqHmZSbknhqjDdikBQrFPq9t2zLQg8nv59EnmycngYMFv971r",
  "key7": "N679GDo325U5yTFRL4tbaeh8VFZfEgTF1zXFWANaPVcVY4z3EkJa2D3UFGn6sMewBe7ZYdMm4WiSzUhjzi13Msn",
  "key8": "3LKEuty4qTm7mdbHPbVsfw3Y38K3CHt6Dr7FiKBq5AfGwoEw6SdLhJjvipyq7A9Egs2GZ2zpqGekPJsVfQXb55LA",
  "key9": "4y645PcDtxNYQaS2mMG8NGKHkHZZbZbev8sPDnenXWS2ydSLUCjTfVhqytVuHXbBxRihbWDqCudyCCbASFNPBVrG",
  "key10": "5WoeWsyrs1WzijwNAUfmUcYrMX7rEic2bN4bN5LNJPBoDhX8mqtJUE8y6xsRr2yV3YKqZ1A7xNeQi9fwWbfhYDVU",
  "key11": "fCEzDh9815BqK9HcjtCHTjDjegbciYgppYG72cgRSD3Pmj8zNe4jrXDHja1Y7t1466gUtC7tVLqMcdYRG9tcT47",
  "key12": "4G2McYDUNGScHrowiNXqXHishXpq4hFNJPo4YtetjNUyQgfVVyfemVTZHFt9ywaDuwW3FC5zUfwvzMyk93dGtWRR",
  "key13": "EeJb1kXEwHbf2To3ScaLcaLbZJ7qb8Pc2N5629SnbhJ61Twr81uTwmHRKvmk85AdXZ6qh1GTXs6fTh9dmAUzpiQ",
  "key14": "2E2iuQ13TSiqx7Ex41Bj5sPVVNxZAn6CtC8hLmhHrJ2yhUhFr1yAJGAx7qUVE6EiZfY4LopLvUHLQJatA36bamVL",
  "key15": "2S1hwubDZPEx1s1xwy1UiGjTy6zfaZUFu4uRwpi4QNer42cmSMQd1MsDrH9tXgRVS3dKhLDjZT56VHU5wupntq6G",
  "key16": "JVsPkRMdSU5T2dSdTUZLCLF4nXa7T1MKLknKRUmPGFKWqSq9aWQh6EiHRqEi8LvPFYxvFikpufnBuEjHGQF2DZN",
  "key17": "iHEpRTDmLGS9Quey1soYBFSJsxHqSgQxJV6xB5EXsTLvfHHGdPtZxH5PBT7szXLCtLfjnagdbmy7Bnsd9e7cejW",
  "key18": "4gNnEAKWX92mRaCocT3L9AYt2vvswmagD7gRGrnhFWFnjLtMaC3KJoWjjQwwhnw68dPwTUswx1J1z2FNSehf7YKL",
  "key19": "fvxyertuAseeqhMM2guDnnC196u8DGfkkMNhjup3gdtqGaVGanbrybYp4syDjoxdTJKAKnwtowfNE7XD3GcNr1b",
  "key20": "5u2gamCPaGTzTmeLyhwX9vAAqDszA1aEhinEPyPDbWR6Kvzux1gxyg6UARvssSR8Ttipyey5FktfF6XcWEdvg2CK",
  "key21": "2Em4QXBnMB2qdRSMMBXRXGKACy3ciKg9rEDb6fRfqm9xbuPJu7bDPUFToqHv8Bocyj3Wv4u7jzfiH4W72w6N4tbx",
  "key22": "QJ2DPrnV1SEax4v5u9udzWgGy4Gjkq4DimoEXZVbibGDfSUdy6iZsb6N6oTiv5qyigKw35tDBya6qoELwhixopJ",
  "key23": "2tVUXNswWyQuk82f48rDEhUfJSx2SJmgZxfzYw43uekwwDbcg2NePzkXBntSJSLtNid7Xvspicj1mTNbE9DEffHx",
  "key24": "2apaWP7DA4VV2dHBSotuukBRZsiDP2oWTHGES9uyFdm4kWDkgHnpEXqSvi7kgKbttx4geEN3wjk81hosVdRZYgYS",
  "key25": "31eqJtz3hYDVfP8hQNiydGNHj8QQYc4dgnPov2b5WLyus6xefwVkDVnZFHMzzVCH4fTXmiSbXWVEs7cMWbQQj58y",
  "key26": "2mpcgy5B8M9hs7mQaPir3TYPzF6Khkn8UpXE6dgnFDW5kyPVTvjXx5YqSMcCUvvnN6qdU6Ne4Pznq3CdCuANXN5U",
  "key27": "4pE4KNgmbAF1WfFuzkvGWnEXj5xfQG3byFo1EC1H8PfdG8MhguiZc6mVnBqD8gRYQa4ozh9WSprqLCT3eSa2tJ1b",
  "key28": "4JELM7nMKc7Gm5dxXUrc7Sk7gC5zikdhG3L12qKQd9BsAV5ehZZqxvCn7Hd2a27aiJ1YborCVq7RLS1dDzNxYmk7",
  "key29": "3ksE6A7zSBVvf29CLqhpq6fHmE6XDxh7LM65fviuqFyDVoThKnZyaTSoREnp6o2KjTvhjHNUMa7W4TjfaH4JQgkh",
  "key30": "3VEm1dDqMjLL8taKieVdiXg1iHxcZ7QKGxeGxBY3TZRW6EUwbhAedcFrdDZNKcrs5aB7hZQe4X6CMk4e7hh8gBsd"
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
