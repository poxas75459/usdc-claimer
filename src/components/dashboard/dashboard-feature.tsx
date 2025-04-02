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
    "3W81TjjczqXNYkRbTVnsGHwVjCMVwQc5NVVH88CS4Be6usyU1VzpdprwLuHwDe5crizTF7qrLj1qimcGj7UsgwrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58z3A2hFTaovxiZLe5SA8ditgtNV8Z5LYJ9iCYYDVLH1Bq83neTY2XJU5nYCFYwp3uxwbABEhgisUwgkKFNELNKE",
  "key1": "2kKgt48vnMyEApFKLGqSWnQNu9Q2Et5VFXBfiVBdbqdFaudeZxrZvzYp8ThaTTB2drab5Uokeusn5CthucsiUYxg",
  "key2": "2cqB5LNrguMJTChH6yAt8hvAsya5G2MYBqgae4z8vaQbiaYUVUJTjav8qTRew8ciiBGYy7LzFGBMvBPLaPMSmUnN",
  "key3": "yo6Foq9NMtRut7CbBQTDSZzWxCceXFARRYKjv8dN8433EAk2kqy3gr8LZwvHBUGkAgLU4r41VN8yBtRzpTF44Nn",
  "key4": "2VT6fHrMbSjoMQ2tEjF7JMF5eq1LDqfbQaP6U41kc6QY6x7ZWKiYe9Hpkx5d89k36U367yR6vC1R8cW8xbS9ApK5",
  "key5": "2xBxKb6AbY7XmeJqvRrV3UDGdX7RmG9yW5zU5khkcNAbf4djJsfFWpnMqgzokap9pP7MpPmiqStGV7zs7oxAcBtw",
  "key6": "43ZSHKN6dkFeVACJd1qH9drSVGB1C6xtRZtCmtaPrS4xi97LXPvmiEQ5GaTq9NH7y2jnKMteUeyourD47FNyHauZ",
  "key7": "zFmfA9HrcpgHkdZ4tSNAPWCEsYgYambSbVoX5CdnmKVFqBQhjusaJRhfxG5jCdiwMPTDEU7szUSbdsduN1ihBTu",
  "key8": "5wGCj1meRTBnmzXMsVDH5iFvV6dhJs9xdRZnKNhKcyvTorCMJW28PbXrbgN6Lz4h2fNTr4M4ssXpJYsADTvBqHVY",
  "key9": "27SdowsN99vkUEMfZ59nVmKwYR4HfDb3USdBr7VGkniMa83Sdi2rqVZWFSKsAMY6wdpXwXiBXwSck6byVefr2UR9",
  "key10": "625s5raNMH5D3PQaZoF8XrpsoapdWEN7AY5Gu4T29sMPQX7wFsM8ptqdPUYPRNCwW9u2D3oVirbUUpECrpFRhAB5",
  "key11": "5zfaSCuMBFkkAS44A3aZ9DgHgCTynu3q9wAtQffVpornAXWY3eGAk3Mucg1qHzhzc35abL92BR1B2KZPUBFwdCFH",
  "key12": "2AAnrRMaRrYk5vQJUEAceNpJKPHBrv8rzovK87z2gXZbn5cDdW3qjVrtBRjqpi5vZzHiwDZkpcHd2fwJXwtsWAeY",
  "key13": "5buH1Bx32ZC8mZZXzJP9ypmiLHeQjnescKnop6cfhuL8UULJKvzi7DpxfbHBp199nJHrmCszp6NtpRKBHsDiPFeH",
  "key14": "GGmE1m97v9KmXexJS3xdziXMrhhhmmiTVKC8qAv1GAsBBiLJkQS9B8KAGpyMRFfSa3FAojAwRPsfKj3bq5dfnuy",
  "key15": "2u6Wu8Y2yccTpJihGN96XjZjuWze4QVTp7PGih73BtUAJYyGzBuf1rM9uYXasnFeL29knUBxQvYr7dUvDs4PLGTH",
  "key16": "2t2nusSCQ4eEvL7jpVDv7nZhSAm2w47xnZE1gV1p85fAhx7gVHm7fsHEW68Zjv4C5dq9mvTP2UL7nSBfEgsthAyU",
  "key17": "3t8ed5j4BbxnJDBqjqRF3ScqaRaQwztLeXq6wJWpUFRjQTCMrc2sAETXBEqEHphAhafNam4PoYMC6Dm6gKuq7HTN",
  "key18": "3TZznbzQbUGCMzcVpGDuUxC7nU9eME7ENETD3dVbC5roQj7z6hrtAtXrTcAMmigrvpsi55FTiwGMCWDQiCjg94Pq",
  "key19": "5f3TxH9oKZqTvaqJJ7ui2dNcLBy9LFjTub6xD2ofLiH9RzwTPNWvD3cFzucFc1TBD9xsAxikj4cKrtCdXgag89gk",
  "key20": "2DdTgqvr9oXqfamsnJdBDikYFBfbhdjeVTrJ6drf895RGZMphsZDsVD4GHCu6XNdRPERKPh4JUFBYoAnuHf3MGkU",
  "key21": "3b2paYsaE3YRTMVS5Ac66LNxyCwXi3CpJZgkFkReUdCx673j7VBEJZRk7qUhyLsEa7evEF6eMXT2LAqyiVvT7X65",
  "key22": "k1TZzhGqe5VeC1ANnEtoeNtgnRXxbGeQRe4G4WtKuDTEpFG211NxjCi1yuH8zoJPud9iTh7knsQsMXihNwm5fhn",
  "key23": "3qdVuS23bjZtDue9VcvoA3Tx4413jrD5QQgqJpH8Jeeo4dW32czF8ycQeqySsJiZeVtARAgrbGpnCmpmAZBXgNWe",
  "key24": "2p17iULkJs25QakJj6TeXWemDbfj6qcsqax47eVKfNeqMSYvAF6haMFfPSbMfTFmi2tkwYTRDdQkKa1g9FUFdo4s",
  "key25": "3LperuPdZh9BTDLZKTCwix92tu4Q7378fPtvEJnNTaZJQkYMWt5aC1tQyLvdcArh8pPsZ1qHXj2zUUE7jASMTdLj",
  "key26": "3rZE4hF1fXnqgp1MpkWypN4FpssvZqmWW9pFiTYnRFUAnxBsrhZd4jtjR6J3ZXqR4EEfXNvjjoMfiFHzv4hCW8AQ",
  "key27": "3GZz2EskyYGbdnCSF4mZYxn2REufTqkcQDbqk3aZZAjbTGyqcW5zdh7Esj52zNZW9Hs2fKbXKKBkiRtAbY3EBjCt",
  "key28": "51g3ysa3HdcP9kGgi5pBENoHxVMcAWGkuYwJwzYKBoYXrfo64dDcLxEjHExX6dMuPuaNrFg6DwFNFgkhoPQRTwUQ",
  "key29": "5L6ZGBuyC7yv4ghy5wkvhJYJfr1n8iyLZj9NjMk8fZGiSo2W7cPcfo27HEFnmt1ieUXTQHkQ8RHPD8VFNdna6TFt",
  "key30": "396WWSHtAoAFfevrdE8J5QJgyY6p3D4dySrrNARauQV2rXQaJ31pdFqnaHWawUDWLma9JuAzpxsr5aANtZoKXak7",
  "key31": "kQpcz6Dq4mr1AKs7qwyYATm3j9j5ZYiVihhgHMzWzwMz4D2kRWE8iA1B1pvfnBBWc4yQMpKT6qGtPxkvBZpdHCa",
  "key32": "4GVJQTdCedSS3a5Frx1vQnsnzZmKmmqLDgaEtfbiCRSUyB3Dp52kYGPgHXe1ndh7dEkYMHGVT8v123iB7LkwqR1T",
  "key33": "3PdFtZNTTghdhRrV2VttwNm2S7DQ3B5D24zNSgwJUfvscpiYkbC5prsb8MTpkkrQeW1gmTDdGiKExZnCKQPnSATm",
  "key34": "5gBeJYhdyjGL84EFM5zirYaATKRM8wJzxdiAiapyNnkCXebaWEAz7D74R3N1uq8AqxapmfHvhiw9jQxHyphPQHe4",
  "key35": "5dhwHUSvaWB1W1E7ombEpjqsBNxaHX2qumCDXjzPDJM4fEfaT4zEBgygKw8HQNtfVehhV1n8JnSGPBM1PUN6pKs2",
  "key36": "3BLvdf4pogerrHc7REPCN3ETnsumriiEnkdmY4xyqStHTGFmP3GuAhUp91wBRAyXW6HJSMettkmrbzkrLcN4oLjw"
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
