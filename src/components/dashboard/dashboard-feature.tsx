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
    "519XGzavAP2z2cyDdZS18BxXFzurSrs9nLGYfytowz3HebipMdMKeju3DszZQ1mohjgRRqPu8wfp7r8sWHSHZdwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xJpy7wmAuqp7GA1jFmJH9yBLT85QsNLFHTUFk6NGwayJTR593Jdjt1tqV7JbNP43QgYEe3Zr4oRB4NRvy394VNs",
  "key1": "43GNuzausWUTe23yUzxdsZzSDQERbzdqnyEvAbTEknkn1FGnSok7uCNidgurpmP2yr1eK6FXKjzDhYzsnxa9hVXb",
  "key2": "35DMruKiAZPDw5L2ybj5Spzt2UxESDqo4foJ72w8xUHuXyGV285i9kgvbddEBETrnaGa13rY1vhT86xLJnVnXM54",
  "key3": "d2pRxxLaVAU3ELcK8MG1r1dYE1LYmejdzMjeuHhP49cdC6j3AcTZSrHvhL5ieCDzwkTn8spJXm3LFUuxsscMYx7",
  "key4": "4ofwcG19JLccAFeBP7hZrTGYQypin2K6q78VLqDTJKiyq3NAUQZaQws8TU9mfeiAuqh1kWrbToHcK9Wdp2DKs2pc",
  "key5": "4XJK8DeBWcgKQWv3MrJXXdhqdjiir5fDAaaTiJagYpMZGfppyAXvRtP9YB17axj831wtexYaz7DB1nDoECAyaVda",
  "key6": "679TpbdQaSaQMeVJEdip46W2rsCtJ5GVVfMy2WkqAr3XksJEmnepqtncvK1eM4PSLSyrcjsLcMFMWwmefHu682VY",
  "key7": "To6LXFMatzjgDvHBtorzGWTPNAUR27RtQZa7rfpcqy43EzJ5aYtZFqq4GU7ZoJicNViC5JBhdrsub3gFpTLhMqW",
  "key8": "5tfChei8gSjjqa61Rrkc6TuV5szasNByVb6rsYGVbxCK2JnWfUeAxfnPao6Z7JGF2ULm7DgT2LJ3jXUTG4mo6rgw",
  "key9": "PZbwM9AoVGsA8bvpmZsPofXJKD9CknmyrYoebD1wfSkyG6Gv2pLQJrR3L4dGkvkbjUYWqewPTSwaLAVjKHMNTS8",
  "key10": "3EtP1ptnh1hdowDxDU6niy6RfpnF8GCzvSRoDUwdYcwdmWmqBRfKR1rbEcSsS2kCcsF12MX28BZdhJbDu3evcvPn",
  "key11": "GMEXSvEvLYwj54sGXrkdvXpHby6Btb2hR3wDPebJR26GEfeshZ8AdadjoQi4v1NqDNYoXirRK47YiURLT69x1av",
  "key12": "4xAMcKvMkuxPd4veehNbcJKj6w4Nj5vRt1TPWugmnZm3MZaWoN5xqTzWwTVwmhUy1nbd7ccfxSJecqoecaJpQqyq",
  "key13": "FT7osCGc3BXLgsqZvhGuErvgRnBDXBYH7MFTZFtpEy5LzbBzxz4f6LwmxzD1uXH2JdNExY76xbkFf8yE8gtr486",
  "key14": "2n8FEer3Jn53NJtqyCbFr5fTbJDgtgUP94YfcAfB6AHwBz5xGdcFWXFqy98FEGJgfa5szWveChS2inLsMRYUc5Uu",
  "key15": "pCc1SSUFQnwCJzfKHxRGqwKbrpRsV9Z5phctABqwDUtHqwV2EE2tn9nCukQnDUaDU4EjHYPMGrqXisFeBVN5sU1",
  "key16": "5DWKaU9vAyZratJxXm82xd16trFX921xqPLd1SkczduoNUArtL4c1ZApyMRhHaRgVVtRKmJhsByfMn4URCq7C8kL",
  "key17": "47T6x3QhAtMhwWoRVNepQ5vFBBCNnvSfy9VPk1wNerp6P8HQAUorszPLBHtmkiLdnYJxBg78xhxPCvNNuVkY7V6Y",
  "key18": "23gFMFZ1rgdeobW7gttowW8mxzx8vfXzHqNz8ZSW9wrczbuftSRXn7Z4cfwfJ1JiJieDB9LFWggKDkogCSY2idst",
  "key19": "2Jh4XaxANP4X3XcWpPDvfC6nSWnwrbgaSL7stJWN7Bn4jboWazpXy4K8Jo618c9uXMf4tVbL2KihK6mB6mX3XxPE",
  "key20": "2WdoQWRe3QTqMDAtxPNXGAieBkxRAcaiKpCPbe3K65j2tFtpomZeim91YVNCDHVN2d5uR2eai4AisemuzEA7MGTh",
  "key21": "3PwpanamMvtbqo1Lipt4HESC7fA5CJwbzepKrY231iXnWSpkZ3PGWC8CKLbWUT1CHqVDWvrpcCaYKvjtaJV23wf5",
  "key22": "5aasbatUmS46HNveD4zSLmrKecRFogokW5Vf9S73Y7ypRTcKur6LL2cskUAhhUkdoVmDyHsKvFBHwSYA6RbBHf2e",
  "key23": "PD39pGwX46UfHv9HETswhmSi3EtQ6LxDnEsVLALc5GhthvGjY81s3jJBgrHHAbNrVWM78YMvtTFyrCxPBFems9C",
  "key24": "638YJJ71KVmJXBshE24fJEXm1AQyXPc1dDjKsHX45ANWmtUBbGjPaG1PfHhD1KfQ9GmEVR9fmatDwp29M2TBswXi",
  "key25": "5m3pq2sCaj8xmpnqpXzfXrTwWniRspp1zP3fohP4sDj6s4Ba8RzuKPb1ZDwBWTv5E9PboAahnVjouscFydfTDBA4",
  "key26": "jJCbcNvjRKiBvZh6m7tQhv3FvpCXPCUoCndDkJ3Kp7d2CrVg8CRdtt6L1xidbkYqC9QHkq1PzS3x5qzPbjuzHsD",
  "key27": "62UVJAg4SkTT2mpknDmatyh3hKoue2BwHEubdA85QCfK9FHDdZgzYwJuZpGZ6jbNBAjDi6RosgoUBVvqZpk1q1LG",
  "key28": "Q2JUBxZAaHC2VTBtnG9MpbsPTovMFfRSJxVDoNHfi16ZXSHSBF9ogjNRVWSVaeBdkmZwP6WgASf6Th4tf8YnkwJ",
  "key29": "dnKFNLU2oJh9yMJFFPkthMuA6p3Zdc3MBp1tozzsduhkD7T3T5yMLnGJ3bEoHPjaRTpvKCTBejFY1warJNQREfg",
  "key30": "5VMeYBLaBSTVUPnRxxJ3EVAB92LYVUeCamXTEWEZDf5xSqgbDe2qppXx56UpW7xvpGaJ67jeKMbXgQDLDdmccZdN"
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
