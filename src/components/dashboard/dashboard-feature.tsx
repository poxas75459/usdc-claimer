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
    "64K3gHUCDzyavF1Y16Ev2Bx6pffvVBB8KoExfqq5vWgmkanpj6QPNjytLszyE12CBapAatunb5YT1BsjzQw1T21K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mhho27BVidrNyYwcfpMs5hcAGU3AUcXMsjpUJf8f6DMsusu4spUjfQL2FErP3oFUrm7ntmNJMNTf85fepWxZbis",
  "key1": "FtcR8KiB2hgb1xCDVE2Hrb6ya41hSTiAh5cPo86TkF8Picm8etEP1iBttBkzXgkyJeihJjC1bv5DJaHzBfg7nzm",
  "key2": "5NEmykFPmNRR68XnPJroy39ZwYnnhXfpQAJNc9j2VS7Aq1WbNJ11F5x16mN21oncYq9D8zL8Q6YRiTh3w6V9nCGY",
  "key3": "5RvAsHZmncwyFW1WsZtheTZHfHh8rnQen5pPxwRb5YzNaYcuTdo8WBhmRMzxwkZ7NGroQXxcNmmqxZZGSSMENNWb",
  "key4": "3Dt6bzFsYerK6yUX1WjTFt2Y2jLpv72aEYxvSkCcsfhuKtdndiYwUcjL9ff19rEqR4zQ435SGtRjG4XARKs76ngt",
  "key5": "5JWkQRJNvaKTKQmsE3wogy5mjE7EZnLHwPwR3GLV3stNrnvVXDUh8KrGzPAbH2RwSGpV2D7ZTfSkcUfWwSJ9JAq8",
  "key6": "3wJsD2yWSfkzGja8ZL3CDFCAoqujsuwLm68U4x2WMwT5TRx9Nr6sVm4h3Rdu6yXNGBzDgC7W3dUE8pHfez4dxZbF",
  "key7": "3VQrQTHEzYucrHFTfiDnuCqZEqoVD6yTHxkU7PsuN5pQV6Rcnt31W6wpGSBCNAkZBJDStj7K9pBiAPepEAqoxcVw",
  "key8": "rkutUfrzgB19YB3puedbptAmPNoGvWwz6Ze3hAd2oosNbYN9NAxqpJFbgiuhy1W6FfJjXPZTtdqjEJ1h1gBsRSm",
  "key9": "4hsq2ey5J3yTvSypnkukCDR3uPFKAMMVLQHKkp2x2GHwtTTRK5rsgoPV3F93ABQPUEdoHkqmDPEZHtYhVzqq7shM",
  "key10": "2DYhrLAPAzTxj47N6qm5fpYWgSQbFVeYGcDUZZVpFso5xRChqXrAwvhcpHwQLmLc4CP6oNWeMPoaV8byZJ4fZ8RR",
  "key11": "3vkQyCgL34Po6mR9ufopn2ngbQ3oNts6n92HFDF8LjQTvnoVTjJnqMhZyGk2TFirEt4dGGMAHJJrbXR2fxnhLERb",
  "key12": "2MJCYaBK6atfakWJ3zoENLzE9Mm59MGGovLmTwcQ1MN86Xa83r4KoZ8UTD8TEhxxe4H6pXMeF7YkTHxkLuZKDdRz",
  "key13": "Xxwr52x597BNU5TZkAwng7qNAhTiu7Kw14QhvUb37v28KPHWcejckPoJczHqCaomAGwnmvYddJhcynT9ft6zBXK",
  "key14": "2oEBrFoiYfYnvLApjXAwhfTuZjU8hpg6LbMcMo7xGST47yrYKHo2hYFSAf8p2gLkw7XuNyW2ovBx7EuPCNdpaDJA",
  "key15": "4La46A3N941kKqUvsPD6HvLmbHMHvtbDPwDwJQbKvbThCfNRQFPbZpVHyJhkZHvRMCLFUud1j1PeyixieGAe14pu",
  "key16": "2jPF7bjt1JCStc2hcQupSk7L8vpQHVQL1pCrN32mXZmD4ZX3LszVY4HhXt9F3aX8tMLyAXtHH2J9TmWK2H6Qd2PY",
  "key17": "62NTxifgXjbWvyiDM4risFXtfUbZpAcCHuZa2hgPdu5jj3J9JVHcEdpyvdCJmo8zrmtyjcaZu7osYNFJfaaTCFe7",
  "key18": "3X2SXjHHxyQU9oYMRFDVfs1M2JAvWs3qSNHJ9kY7LQen9SywHcx2abC7mDgMDzkbQH4DqDA59dGA6ocK6AgRN5b9",
  "key19": "5ghd5vmhNnkwwn7GG79rT6mxCyzEJvLQmYAMa76pKQDN3Daxk2FsYCkQLejP9z6So1n5xYgPHT5kDyqj3xAgwP76",
  "key20": "5UzagaxsDgoZRgEiYZE97z8te5BTYHG84EwCWaiafF4FcFXBGMgTb15HBw7kS64qAshaqsTgPtnjmi5vUbsEaqzC",
  "key21": "4C7DgQAw2XqQfkwbPKFWamS3bn1VhbyoUCrBmgqVhuJ2yAYPCaAZQZ6sJ5pNTYbohLXq9Rav3GnuygrCkpb5s5hH",
  "key22": "4jXus8e2f97tiKyg8VB2MLsoXvdztFShneHRgbmHTPuHtXeHT6J1frzjsNU9J633LuQEGrb6hSZAZu9s1cSsUcT3",
  "key23": "4GwkqyrBwxAYdF6Z4CVW64KpJZqfHEQM92u7iB4x19Kp6inxYvaQWB6gA3ZYRcnBBGudeG5YQswQC794224ojLM7",
  "key24": "2CUY2Vc2GiF3qgvxqyfDKmtjhP1nckfM32rEvrFRCTUEbVa4qB1WzzeKGgdm76cTX6SreTqTPAuc5S7PgGmdwDtL",
  "key25": "y5A7Vw1BHuLNc32G8R9hGw8D1pmdiW2AjW3DkXcZeatqHKik3PpnMktA5rtfV1ieNdbWvDL9oKe2288D8dsgJGK",
  "key26": "4imYkZBkeHRsELwhPLGyJkY22ueqPz9a6F4qfU2QhdPCfx9uxgqQEpg9FLrxJ1ZLHb53emDSJu6Wckcuk91JSJwY",
  "key27": "5Lhxk1sg5BS4Zq1o4TwGzaYS9Eco5ToRFFdGR3QZj3XSSgWZBkwNLzd5JCCU95Ho5PxFMyTVKAkymC1XmLzqYLFu",
  "key28": "Gnq3HAPjMhFm3AcQFpfqP77ncrgN1Rofv4VwYX7gUT77F8EGR7XpYg4eDDSFPqQNmcLJHmgUVH8YmjY72YX8zYb",
  "key29": "3PDD8eenA9ngGyXGu9GqH8X1vapUGVQS7PvAMNQM6SLxqrQWY1ur3M27EaUQFYk2LPkYwLRGQ2xZYv9e2syPFJxV",
  "key30": "28EFLCQgKMCbmu6qqmnaytcZnwZoKLhvsqqu24Pf1BLNyYswxF4dcTx5GC2kvtcsRj9eoKT8SXPrpDaHJ1b3gNbA",
  "key31": "2iK8fGAqPC5dg7QGAFf9tzzb2f8nE6JaVRvk5dCVtbfPgPcbm5Gh1mEWdifSm8fmgu3nwXUBVLPTUL6T1c2fMktM",
  "key32": "3pt8i94aGwu1pm2cAvvXD9MgG7mcy3bfgkyHZe7R1iGBrUxoXT9LEPfgTz66LpiGBWzAPeggaz44kqPFeQKnFCtX"
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
