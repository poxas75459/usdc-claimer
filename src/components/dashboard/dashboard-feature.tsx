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
    "4f9LEPiDLV2f3oKEkMcVui6mVNeQatRDFHZxidrMWxfYkCgEZ1EgW8CtARuMBFiTMsiTjYLdodyqB9fiMCgpoNqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "638WDv8p6uW5JUo6CEWNivZUP7izfJhidxqGbZZu4GzBRAgpukpcUmkFWLMfdZYpN7ahZorfR2hDcJWg465Pivij",
  "key1": "5H9RB74MTfUUXCANwYyR5hTNHEfabM51oSEwY1jJxFKCLSkZfsKpbdrULFw3uFQaHf3SWScqGPK269A2vqwwXpxx",
  "key2": "5hR1MRUXcZ5tNhEBTnqJTd1jcXVtxc1aVLaL7Tbt6jAbcB9uDKpLKS2BcvxCLg5FzpbxNDKq1FTMWKia8dZCVQQJ",
  "key3": "4dPpkQ6Z5qbr65QmWbFhMz24gUhBo7MSRKKwWc8iwXN1j5jCo23osYqGZKKUu3noa8nrWrFpkZxbSWM7E5m27hsx",
  "key4": "3Lx6L1Sqoy8X6iSSghrzqtPNiRLAiRNRaEa9znbzoqok86hnGW4NEBs9GDpbkVUkfezw51kzdMe5gPEeweCU83SD",
  "key5": "2U6FH76AtyWQ1RuGuETR67THcyu5YoS4p7r6AZSLq4GAupRMCuo9oAZbzmfmzENm7Uz1W95CJN8JWbXfyLR57j4E",
  "key6": "ESwAd5sqcoFwJXyfUT3Ankw3m6pXNF8svuqaTZ18K5DuTy1LZEqcmdvFmV4oLq3kFXThxwRHucLPsYQysnrn1eH",
  "key7": "4cRkJY14RQPxmxbvFZK7Cf8cdjamyox6RYzmWePTArrKTVKmyCX3yQX1WERDAUr9M5yyt6U7gebaNPXgs6GoUhqh",
  "key8": "24tSCCp8SRNbLQ127yPAisX8NRwxX4Rdrv1SpV6roDHoLbGLcUr2parHMzVWMD2juECguNi7zyLknH3ewSdxn2oC",
  "key9": "67SPKYPoNtuXYMjVs7N1goFejNWAGRo6vUHTfp2VedoXy7kDH8GN6kWb5Wctk3DjyLHi8XihshR9ZYDRJ2eAj86T",
  "key10": "2p6sQhbtN4cmr4zvGPzo9rooHRxSn7iG5PfvVxWDwid8zePvCHTwR1nA1jE7RsrwHjpuDhL7RV7tPnzFRfuMyu7y",
  "key11": "3ZjgKyFjSf1hec8rMhKiw5w6DXZ6R7h6o5ibwkEPxVxfQRQNYykREk9wCttEvQ93rz4mp6YYhE1mCpFb7gXVoe1m",
  "key12": "6TzMgeEoTi7DtEawe1YGA1kDmNkx9tF9Zo5VkgiqeGymcE56ZA4ydLF6372Mdiy1FzfWMGXdddnsdV6zVFaLpuQ",
  "key13": "5cfGEyDa323HqJ4ZNCwow8QTCjq7Bjg3NZpSXAFSHE4n6tNbHLH1UU9ExkmstpuxzfvB2mn56967r86fYVJaQfsU",
  "key14": "2dEVudC8fEJVAnN3pszucrnKCSo9FhamnNdeuLhC8sKqr5phqiSLzT7ykK3U1YkEPFQjMau9Yi4Dko9u5QzNRKUa",
  "key15": "4MYu1qjiGgcfhcJD4oqDt8qPjmSTCfp7u7NRq4EZUSnRfsXdgDvdpoqzZSt6NbyZoUu8UaAvNetYcD6Bf5VjeDww",
  "key16": "55LnpF1bkQqSfzHNMtFVrZv6d2RAHJRXTJQ7WXprVjFzE8tEcxDCcfE9HPhf3yjeHcU72K9dgQYnPFNcHEZ6W7iq",
  "key17": "4DZ8dVGKiwgPVwCbgmL27bT3xsmF2hxqcUtbtvtwQcjukxdNcNybfbPtE3uabJBAPyFfcSfZtRxzqyzd8mpCtbzp",
  "key18": "67kapdaszqHroLwPbymT8E1iUd1p16uJmvcgon1Kwf2JysZnuJVLu1G6BQD4qdYaHZHT3CV2MQzyXsBK3XGphcva",
  "key19": "4qMaQ51aYFsThEwXU9KCzpAx2qZmkb666zCgjTfXFsh5Qa8LeCfqvbYN5p45VujpNbzrGgB6khZpwR2od1MhTx4y",
  "key20": "5HYL1qkhciUVaXWw8euferCPbPQ7x3aWnixhepEAp83dKTLRc7o8XVdowvpop1VH9dj9n63big5ag7rh31xUh6xo",
  "key21": "bp3ADaJQhy5Z4GwL6Fvc87dLtvd8syXVonekbydhduA5T2KUzDVsCiozbgeUUB88s3nerjeigqrUu2Nf1psAbkd",
  "key22": "5gEHGmkMWDGCJgGPd2o2oxL3LqXsFyczG5R8mtV4WgcwyuqnVmKFARMPfK4sznkzpor7yAbQbgd7MdeEzfiuRS1Y",
  "key23": "Pvqv8Q43kGWHrCf5yiZsKgFVysYc7uSGL82Yrr2NoT579o2t26rpMkeFazJvtm8SUjr4vD3uRYiCn47m68fS1im",
  "key24": "3AyGR61spq88r7zRPA3DFhQT5gKDqABJn7FqV2ngYXwHLFGXkc1isyjR9MYzhDAMggkXLBmEwdPw1Bm2e2S9MuJp",
  "key25": "4hCcyFfrXi4wu5mCLdkQAMKygGab54hHhUBCwiLA6YDwRkdD18pfBrNcZFzMWfpfRNhnCrcPBKdbcpsbXd9Jzgha",
  "key26": "25uXJkLmFUAXskooenzcTiMayzWjqxXre9m1FvdNEpzo2X65PtxRJKEbatEST69YwgRCXPZDSMNHgq4L1v2EN9et",
  "key27": "3tMsVo8bP2j5ummHmoWrJiMnFBCtJB5gER9jChDGRgvpqHL6pN1FaRkoMDgh56AJs1Gvh57w8msJZrcuUZ1GJEYm",
  "key28": "ruLzZnC8CWFg8P2rLYCq55p51XLEGaRyaeQ8wGutP3YgPnZaWUpcHkakx8krqPmHhSAdCUXFgFV38YQPRYKwL4v",
  "key29": "26j3GCuRMs6yuNo9kQRnewQYzSQ5X4fac2spF3h3iqXzWjT12qNT4ie8hFA6xPFYeYopUEJXG7yCgrRYmsVCb6sD",
  "key30": "TE7gJcZurXdRuDw6Eoyk6z4FwrHJqAop93evmWXBduXsU6hgZZhAUTqKMD5gwnfUpzQpcQeAswHTv6ibY8RYy85",
  "key31": "2JRNREqdnyWDxJn5L1BLyn1N9j5HEfjM9eFqECVMFP9bGdsvkpwvFZd1o7S165Suq92zVeynoAgdCEGz2nsbL8V4",
  "key32": "cp2PtUBUyia928W3roSm6vhUdqsMpTy97kay7kcXaADfrMwHMFLmX8ogbjFfxhvN1Hpg8ojA1zXKBFT2C71j76X",
  "key33": "Sd9Nzy1NUZfyPkgskoMfE5ZbskCpnvwVj3Hn9NFNXMEva6TtnLB2VCMb5vpmoG1aV8WgqrQm49grrioyQW1P3RZ",
  "key34": "2K2THyeWdHTWy7XByKmCUYNpcg2nnjDAav663292A5Ak13sZ229NP1Hu1fWWiL6A3HiyPve49MEud9u8KhRr9bU9",
  "key35": "35cxXF4MB83hMbkeEe4oDB3XTBMRTNuyXKvZBU8Pfat4HZh2LK4hRSZbsw5oCHgjjTjN4GuUK4PPYNXKtAVRvjUX",
  "key36": "63vY3BdrWm49GAWjU4GR1f4tUJwPccrWMuUFVVumgbuXL1wJXesceBDrcDhWySwGSsc3AMaZrQFpA28uWrc2maMi",
  "key37": "2UbVz1fv3x6YkDnnMEbAbXHsMyffYiBsyEJ63QteXSnBqdTnMAPCrJrRkG6akwK7J18JsUBumhXT1bgxpXkHZk5U",
  "key38": "3RuLutNoJvrt4FWdnCpFHT6vCssueroeQtBvE9PKFFo8yGiAdNiPuQtvAWUDTefC4UKVmnsgrZCCvsAmsMF4T4xp",
  "key39": "55HoshyJCWXqu2KMAT6mNVpdFEj7CjXvdhQxvGQPMP7zBY4ua8ejYh4A5P221Mbg2gXmxWJoq5MJ3vtV4RsRKvKU",
  "key40": "4YtN2Fj9u61zksw1zKpyF8jfXzAciqxKuhoBD4rtQqXn8ToLGCAdsgXNMH2qtN9kgKdTL7JhaXg73NFzftB1Ph5G",
  "key41": "41PeG43AZdKMThoRtxbGxmK1cRS9AUY3HmWswJG1N4mvtdjxCvWwubYnnKqiFKDQMEUNHqrh1kd4JnjBEaQzfYi3",
  "key42": "2vVBkWQQTmBDx7Sw8kTYiM7Up5zpRx8RypvyEvSR7Xjwoi5xP1Cm1iqqe2j6AYbCkF17oKoA8vfiRKgSDUCvCK3a"
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
