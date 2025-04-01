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
    "2bZDuu2dQVtTwsDweF49y4zUnnYvTWgHKP7p8PRfgt6UfNth26Tw6vfeTWLmVg6WqKyVjRDDDS7Ys96EyMmfGhBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jgb71shj9dTy79Vrrg3hug529faEgCZrdfsm3UMcXApu5fbDKj2a1VfLY78m2kEaQoame85RpmWGoj3c6PHLpTJ",
  "key1": "3hUd8f6FQRX6VdGhvS3iXFzt5pjm8FhZSmmL2QkErPx7ztLgr2nBYmB6cQ8TkS7ED3248WN1CTwmrcD7Fv5zudPq",
  "key2": "39Wh1VDukQbpzCbDrpQP9dq45GXvzciWCGcc3Uia9E1bkxR5gsv1HDJzrsEPtvgjiGqniApE7JiEMB11W1hNBBbj",
  "key3": "2h55JPGfsJaQUui1cLayXkBY4Dyy5JSN71aF1ayZ1V4H3BG6cxSteLRpEU4gGQF6aCeEF15VKvh9ZdKErWh1vLgE",
  "key4": "5GcoFB7xCLC4XJfJdpuJ6m8QwFuiLEnW73vrpfzMWnjUELaDgEsJPPVzCu3sSM6zd1b7Wgq4FkFWAFagv6Co2jYg",
  "key5": "g1L4nTwHy2nsTY5Huz8j11SbUvWaky3cXhzC2VGzMfkYm5ktDvAgMn7bYyi9mjsAiNdRSmtodK1SGePvnTfKQoT",
  "key6": "CxYS8xPhA8FfiBw84g6wGuQSWPtXjHWC1L64inQz2WVokpPG62bqPoSari6vTcJjg3ELiFLXF3b9UoD1Td4MAVG",
  "key7": "58U1CboqqKGw8hhLJi2oCHdsx9iddXC5GJbrDvctbXwsxPj3VZwvPSF8qfUyvBJcPqp3dgNw1PHz39Agz1VhyWSX",
  "key8": "2FXzmWb5VbPi9xLjshuDKd2Rp6sTp4qULFWJ3vCKJX9St63dUsHMF4wo7AHD9dEtF6dvvRAASnzmRmNoGHgoR7Xt",
  "key9": "4grb7tKDVk1pu8dy5kce4aWX7k9NoZDm8ToYe3FgK7F2yFp8HtnCuPAAeG35sVmiurNvXRuyhDNvToxCq48uPu5i",
  "key10": "3ZU1iBYxhwWy43DNoR1xfM688z7E6KQgyqpHdKYzj6neUHk7PfwyjeWp1G4MfkK8o4nrs4g9bzY5hfurHaL2E1ZW",
  "key11": "uZsuVE4yobxmxQQNxbt9HeL22rY7qTnqcJa1KeBXRZyjz6e1R5QgjL4661mnHq4vRegJXYndoq32NTvffBVrh8q",
  "key12": "37RrfPMn9XQyHMD9mGT5jAw4mZHEAuWnuvC2ogsYZwJsXFxv63KEj3JnP6KHU3jfKxqBReokww21PHxALDvCQipx",
  "key13": "4zAviotG9UugNiZdDPqLasB3qoZRmb4SMTUGpQb633ukdE1iEujFTiEQPrKc1JAoaKigmbDxRnbLNxtvWjyhxRn5",
  "key14": "2UpUf7nvqYzUJ9731muwy6NqQicrsdJEAjxERTJREdL6hkS8ak6JkGEvcVyawRabBUqZbqnUQeM6rQGR6s69c5Eh",
  "key15": "2thXqyTnADg5Eq5KRwZi2QxpYK2gRaYZt1xZ8etYQRNdHtK1LqwyMeQuujqSj2527eJcEhCEmuEHFNa2MdwAEyHo",
  "key16": "2xmNuVrLjZKKSA2SnCWVXs1tVT31eNtEc5bbazJZta975t13DApYZ5vhACdwxi9yM3hkg4wyGuVPhuB993oLcShz",
  "key17": "3VwjyJCECAtn4VPBAMKKEo4FbviPfyZYheny4DHWsGoPxm3G5tkC6aGQZbpk4BcoUDZnjAu6Up2iGM9a8zmeRWJt",
  "key18": "49UJU1AeWmKC9ZayZi2SdybgCY9HTuiQpjPZkX9VFs9tfqcHCYcaCPTz4MgHbqt4voS7LveuvBpaHJEstSEu6Tkz",
  "key19": "5VERufmQaVwzQdjCJEU2hkKVcXNnG26ouinRzZ1UbmS9Dg24KFmwQ7WoTgRvcAgKsY9FQunKKq32hhJRMtzEvtAh",
  "key20": "3fZRHWNsAzbLgKVqu6ZCxDS62qpfqyQLY42zGXhz18zxhsTx6ipvyBRA22nK4osKs5KzTYovCvTfo3CnjDbUfpG9",
  "key21": "qe4SJZ7HTEczmjia1v7kuC8FehYuPaHWLNcZbf28g186XHJwMtZw7LxamqYJzsoAPUA3QgNF2nbMABKq1x1iUcv",
  "key22": "7SWgYJLEoickJaUMvTL3Jz8o1cPMH2QA78FyBngNnBQeis3cD6sxHg5bH7xmN7KT4u1uqsh2ZaNvDYX51K4RB5n",
  "key23": "4Y3TQPiY6Jrnei6Gf4o39gy4XXuENCzF3DyZoFDY57TjqgBmd3FNw9oZfasg9i74RG5LsHNbNxS1MD7HeAxiZS6S",
  "key24": "37UmxNntbjh32ZLQpjtcEdCEcJc7cwnQhgVURCECpXsQbC1bcqXL9kv96vbLngJrGbppaABWpPVxFsrX8GBFLn6x",
  "key25": "3ocsCjy9FGMwYuxKERK11YtLBm6PzzKW56ezcr68QSEaA2wNTATZTyeETDUTYQmuFYLHwMx17Mprx2W1eUdupchJ",
  "key26": "4U1Wvypw76xeVkPfgVBmXmXrSwh7qH4EL83zT3XF25DeiM5EsdYrcd8aH4vddPzddj2naEkUk2UoBMiysrddAWg1",
  "key27": "ZyLJsaiWDmtkVxG5zAfvYwAvZkY5PXXFJuWXXtqZcXP4WHEaMN6GNFghkukKtzdHR4LFSp7YcqoBxs7nPb8rFTv",
  "key28": "DnjU2abs4LSjSJH8E82jfSfX2UjX95X8nUDx8bLTJmUqLTsF4dCrpktNTSGHzBjSFcYpdu1XwM6htjUpbZwdeyu",
  "key29": "3impx9vKvwxfxSz2Hps1qCtKFenpMA7whR51mAZsApzxq9qFgwyxCCFwkVZF5JJaPFZCRxwkYBV6hcHuuQoNGVfd",
  "key30": "5cqxwpxRsHvVKVN6bWTUoL3mCJuXo9MPmYeo9J43Ve75wq8Jsyx8YU17LtWgL9HmT58EzhyZDDxyXsaCU2b7ND66",
  "key31": "3nJ1AcpSatRw5snj7haQqy6y1TtfLz1yp82E21qfpzWaq9pxMfZQnvC2SooVDBspWnyPuCpG4XwrEwygAPJF7hyC",
  "key32": "28rcKXz6AJrgVLrtcYmh1eDa2xGoxou1T2mW3X4uLafneQvFr8MoqY7titc85qy2kJC4GKqeGaV4ft7FHuDXaB7Y",
  "key33": "2gkiBjzEZxVuTsG8UG3PUWpbdDqFq2Sk3KoV7V2tLkrC68tQBnhVu1FixUiyhmBFEST1s5UMzhqmr8HgtLKYptSj",
  "key34": "2EVMLJmn6yE5VoS8cqUfXeKWjAGMppXYxFjRW2tu2Dd73GywrbDab2TZxq16zmWmNQn1PGUEmtDjT8ceKyhW5ZKs",
  "key35": "4nDwBDGZiu6xYhyPdoyK2DbA3BfpCnjBtputFQo8pBUV5Hin9VSJWDPTuF5eXQydGpoHtBGYfsNm6fbRjqsbp4Nn",
  "key36": "o4rcDvrpj1zNPpMXHpUaLSCaMoYmDAn32LNoZFYvhv8qs1ZSjN1XsdjeHUUBAgGxBJubMm7mBJMhoeR8jtjtR5U",
  "key37": "2WDE9bkpgc4EVrrzjMfgiMdM177zsfiVfEUwk8ucvEwEyJMZu9xuhq5vFfmBbV4E7vz8DuMZiqs9Hn1xUd7e4RhQ"
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
