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
    "2QFjffcDgd1qPJUz3LiC4vtdJCi7VdWxXcYpZw78aSJTkRCfGgPoQPwsg5G8LZNu2gbB8aJiJfXBa4QxedpvJ9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CAyTGWtGAQVyxPqzBeJrTLsDvh5kmvW2qu38o1i4hu2toYABvtxeUPfQ4bYhuoqenXwVK8F9o7eyp1vAaH3wRpz",
  "key1": "3XbsaREaYYF3YRHD1V7mEA6vmfReuyNFXfr1SR4sQ7CDjEWoAEBNyLoiArXoSnbbPgfJdn7EmjkN9H5BtephRbej",
  "key2": "48ewmk1SdyDoeEEdVNp7KtjL2CgpTpxQ5gPuTs9YE6TWEp6y6j73p8rJd7NcaXqDTaFRzdXpjiXtdeEazSHm5HMF",
  "key3": "2J496De1UTtGB8jrJ2dMCT8DXE9NiAv7X4FmrLt54AAsZyds68X6AZ918NF3zV6MYR1n32j7FcFmBr7GKonZkr2G",
  "key4": "2Yw4ppnNh4vVkWZt8uM9v6n5fUtPdHqJnoTMRXd9MWH5hQouY1dTdUkDA6M4Htiwi3kzndHGqUbFtdjx4Kha2ynf",
  "key5": "3bQ3t8MBWFv75RMu6NzTiUbh94XedxNFbT2bM1EH8vn4s5ePESWdC9GD6GouZKBYuHM2Q8JdTbfkUGdUKCDuPr9N",
  "key6": "V2LXvz8KvFELwW4xCM6P8rbB2gXEe1rEsGqenbyhpE8USHVDCN92YJwkW57DVKLGJc1Yk4kELJtSrGsAsfXDG6P",
  "key7": "2N51fgYraGdJsU17wRUn18UUR4jmyR6MyTxPkVL1SNbRVNRLMqhJJsC8yCfVpR848snwTuuJTs9hjFWWKN4y1vkp",
  "key8": "YsJhSZLG2cCA2NiXzDMAG7Tdm68RuNceNYEhKbwTyyYh9Zx7LBsUJMFxaLmcpyjdsAbVVgnjqgDbjJ3abdQXVCJ",
  "key9": "NrkGouzMs3c7vgepBdUw6NxkH7YY4qie9se739Lyz19MAbKKEfnRjYR2gkGLpiQAZ3Y91XitbJKaUNm4aGgqt7D",
  "key10": "5Ee3hiSbJTjSLYFYpAj7vQ6y2e8Dt7CkpuCTgPAFAjDgRAQPfni8Hgj5acBrjNfXsVASLPAjv4jv7pbjKFZAURhn",
  "key11": "86FBWG1m6oAcKQ6MiZoYGRExVUJfnZDMaCdDa4fz1fqJMFzdpvuNAgvaJBRskGhTDjkBp7wNnwJ2pgB3KCv77Gr",
  "key12": "4HU4MqEnpyyUXJoQWyQ4tVeKmdUhZzRHmKvvXJJYXRieruTJWeCat6ACFyeEwrpBXkrNwkgiRVHLLXg2yv8rc3j5",
  "key13": "2vZzZPxP7PbC3MDMov4WoKcESJmXDCf3Padeqdp86mVcCQos6VsMCiJabiVMNK2nxyKLKGFPkjaBrRnUwfPNSMGf",
  "key14": "2GGgFVB6F7ZWvuSLoquFhAKyERfZsfCwgG14EU1nRwUXPvnJjHy4cyjswFrQphr5M8j8NBSXTvWKT6o21njuzNst",
  "key15": "Uecn8v9UQmqXRzjjZnxFJRnKR8hvdhWcZW4bpQssjUtiExEAci8rNPZfn44yKsXMZPmfV5cirkuiq6BV8qt4C9D",
  "key16": "5DSsBWCEnQmSRFsptgZ55vKo8fF8pJBbL29VJ2eqQvEk7tfGqKqX8A9M7dAZstYt8NWYSjd2xYamUsgApzDQpusu",
  "key17": "8ZXMWWeTrzzYDdLy7wxQ2ye4aaYffuM2ryr3DJj9iaYLkb6tJS9YQZf2oo22XdSJoAVgJgoYpfFmDisDDjkL2Qv",
  "key18": "5QonmGtXn28VjW1FKXfqxhMYLM5b3CQZrPQQPqS13jJnvoTrbn419BxdebvJneNj3VdHrEnJ6mXBeEVin7S6oY8v",
  "key19": "2tdMXmH3jgxYjVyJBK4BUF3G437xsdvHPvH3ChENg7fsPzxENPE8CucuvtFdv1eM43wq8syxrDf3gofuZJLczfCc",
  "key20": "3SLBaijd8GyorTEknAViL94UiKKezEqQmdWxANTcL6ELMTFfyBsuQ1vRH1v6Y3A9jmYuFgp4Sw9j3qTLisQiRJYZ",
  "key21": "2fmo1VRz5U73nPx6Te92FEe11mHe2U5BTwYHwHfdwyAfPKPa71RPvQWjwZLJuAB7mJ1dmvzxW6GuF8F74G9AAN6j",
  "key22": "28TKZL6N7zYrDkpuMacFwi4uEEYBpCRgvvmWeRx86bw8bHYw51unxU6SVttSF1uCMkMrxkJyfVMbJuvVKDxmhVmr",
  "key23": "2iwiHsLUrWqjEt8hLsLTqoHn1CKBoRV8tDcNR1BLJx7iiA6ta1q1Qd4TTUX7fhGW2mstSDJ4x5ZkWaUg5D9QxUuv",
  "key24": "5NukG8tx5h4g9haorNrBFPPbbzZJdEmH2Zsg8eutyat6pXUJDW2tXcmDnJySaFNwEpd8AgU1W29pcarv2yeefNNZ",
  "key25": "JQBpgWEMWSBGxcZbSciJMmSL4vXTy9J4SvdYf7JhUfXtdmFx9XtRariMK6BQ9zPKMw5vhBm2Mq5P4Tyxrowo4oK",
  "key26": "55JfdBzSKvzaH14P1vARGMYo7peiAYJTAjPnAJu3cUgun1y6FwyKhJWTcwcUyuCsASFTbZsL1a44cBQsWqbEuq9H",
  "key27": "SZ1Y96W4ZSq3gTikbco8WDUrSuQgzKVGe2AkJ7ji6iFWb9DBMxw587eHMHKQqbs7sj8j41jnio2vtQnohx8cuzj",
  "key28": "dQBbdLJJSr98WKtQZ5A3K6dkvd8vPw9gtvmXUf8nskmV4pfL4Gvz7ZpdDYZozpWFxHvDdsZBF2PfEGfmDzsDkam",
  "key29": "2j5PESEDggwAhcWKteX8PCCALGY81ej4ToJY1vx9xS6b2suv9H41pQ8tLY8hzN5TbGCxqrRw3Ci7giViXUfyTL9m",
  "key30": "VQpNzKKzPQ31HZTH7UYxEnKT6PDvEq5MLbKcPNfFkxuDN8dU1nobMVUgP835bLMMSUTftqrAemFihPatjyWryrn",
  "key31": "4z4D2kYD1bKfJnNU3ME2cZNDTkHn1C2sj3eJahYgqH9UsAAgZ3GArXGjF21tvXrtB3aPK5hG3NHkD3JxhpX8bJAo"
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
