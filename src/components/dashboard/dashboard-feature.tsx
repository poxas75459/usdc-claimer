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
    "4BVPfWxWeDj6uyqCtipsLtr6vuxHXuamZK21zsitXuHJ3m619fdj6gDj8E1jTSZJG6ZL8Ms5sywRRGK12kWbjuGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hh27ZXdRvcukcRHYPqXZwUL2CP5cThzN1sNhPntmta63JCJLcbxnsNUkTTDwoAQfRte7ZutoSVmyVMjbtB5m7cv",
  "key1": "4AzDR7jqQXsmz99uWhE1u71rgDWPFNAf3mVNiu6ivw8siEcmSTRPeztqgVUDo2JAb41Z2S6qiG1a5UELoPsagr44",
  "key2": "4Khveb4tYr9ZJbpf4MAdH3r6A9FgNHb6S8Yj8h3kK21wNzcR5N9u6pMChjfQQZ857ya4eAEnv4atCJdvPjwj9BVi",
  "key3": "3s1BmMTjhJdvGgtsz9X2hsNjTFMRk8h8fLAidktoT5b6MFVxKG9VSMwaCHyjHMVHioVWcjDuPdU7whbtfFMArPuM",
  "key4": "5dU8pPu1eSxmxe6zac8JiZUYFDVASAzwskzrNrti6FBBhRpm6tcKWXqfMcawjkLbRLGRYEaknUTe5bcsZ1t6VJoG",
  "key5": "5A2vCePzwMSGG75o7xsGUyL6Z5aJ7tBAU4FhkcRdHfk6g39roBPsGVRDazYkQkPMR8kD8n2iSPSMHLqffnMjPLDa",
  "key6": "3phoMPBaux7UVRUi4En49it6sq9x8x5TcDMHxjm6wNcN8s4BUAsCbQBhqnR7edwZGkZ9DHnJ59zfJzo6ZXoiPoJU",
  "key7": "32iujJsVx8duacnU8XGVxdHQwetTnTftGNvsh5Jz5XwMhAiogDoSf94utcadjUGY3hwhpGHgBrgDUFEpQJtDSDou",
  "key8": "3GPL9T3Smj3KGEZxqZs8jHkDP9U1cJVdEhVojK8YmVh44F4FvbR5EoRBWyquMapvREjAUW6DLYUb4PaNvxBssCt9",
  "key9": "42AeoCV3qXXDByNvkAEpB56dtrAxZHQUA2nPnNijdWQEv776b4ufHgPJ1uHbWxxFHLMtHAwoRT3fkUkGjxodwCqs",
  "key10": "4Dsm428sBw38FQiZB3QvVdxtL4RbUUj6BBiKH1vDzgEBosiK8ENSBnYrQY22fm1afadj4RqVXDZaXgKrkzYkSNE5",
  "key11": "4ASxd2jSyhfU9RB6Lz5smzBA9PUWsUdyiGCNYfEv5DKmw8wieeDtrRNcQk2LRFW9xhTGXvZAkMk5xd3A1tnkkN7E",
  "key12": "546VhfNs1Asaq9dQBSSynouHxEwqaGCoDuXDsVHS3xwAQxNDZdCCNcf2NSftPUcFQ8JM6RCeuGQP5QKb3ahAYDwm",
  "key13": "3iMeECgSi9FtSp1YUBHF1zKdAFmFYqFwiWa2pVW2VJdgtTefx6vWdFfHmPoqYxo2MgLgU2qyju5J4Up96fjKX2M7",
  "key14": "34Pafu7Ttz6N87KFRxkyXDdaueBRweBSB51DCLDJayJMBrqoQZJf4ufU7wQpbNeHXcwzgjLNhWfkTeoyQhUZcmKe",
  "key15": "2jTYRDvomg6UUusRdK8BSQvjPJzwbYSg346aCFE8ZC8djvr72gsqUm5oGL3KGESpAeGCSjFfrRbBD4HYozdqB6hb",
  "key16": "5v3n4eq7ft9YoGSWpGkk7ZBxHxbuCj4pTkHQfvJzQuBQnox8et4yjH6Gy7ZbhgrwhS7J6XmTnkXdMKiXs88M5ioQ",
  "key17": "4wVWMqfbVtpm71HUJLo6RSU8hwR3j5B6o9QMuDhF8HRfDo356WU7qRFqvKx7wjrGhVzuWFdyhtYUpkUpQj1NrRiS",
  "key18": "zEYjR4y9Knj6hQxDpT92GbLGpNfex7y9NJvwEscPSGz5Q9Eq1MDjPE6BHvWfptFVJVfjq7QpqFaYtJPxqFBH4Vk",
  "key19": "2ZdTf1Uct5ThDk2mE9QSEFN5gjedQtogeXPtzJgg5JgPmaFzWiXfiqh9JGb5kFMZ1mgpfcafLHzMHobv5xCKg7DB",
  "key20": "2F93sHFZ2sazugwtngELSwr8AWsTMDjDXhHoo5ha7KgxXDN7obNZX11wvApTt1hS3QgCrtqckmsUrULxig34bcgp",
  "key21": "2hnS6kDGkAiwHwqQf32KNEXFPKWYvgDF7i435J8wESEfVqWXy9gvxwxMK28xPC4DfhFyUsuhykLa6o7ypZwMmgbF",
  "key22": "5BSkDJAmRaNAEEmw91cQUMTLc2sk58fYwT2xYrA3oMsYb8H2ayVDrq2vgR7ESNe3WCymQeFsFaYv7xesYL8P75s8",
  "key23": "4vaUtkWunjHYN8C2VKefpw6zcv95n4fE4CvtHpn4wzisPYwxBQNQzGEtPKcYNi47XaTs1M9pdwtSHYKmBFry9x8P",
  "key24": "54cCNSdskBNYcrTy7D6kQ2MHZiy9NsLHZo7i7HixJshXHk4RNk7JBZGpptjaESbB221qaCuunHaUg6CyHg1ZRzyF",
  "key25": "5kFCRkaS8R3jWJvTxzHYxdyjzbrbqFQiBvUgVGBqFF14enPVe7wY6DHQ72NbsfTwGwrBpb2Zr3ieCuKZEGJ1fhjh",
  "key26": "2s48epAKzV8RvsM2pPXSRi5BcHJwhkg2tgEz5bvaXpGEq6XxwbnVnh3MPyprJF5PJnXpHmeFAAJgfVSwuFNGpbyx",
  "key27": "2tjJ1oYvbD5smh82DecVz6beqECZy9cfGWTEvWUNZ2EydYsxPwokDEu8ZwcHEiHQRZYEipGuQoUaAVXd8DYnH6P5",
  "key28": "5qYiCqryekUf9knut8rTL8f25dhaGP47ozSmo7ApZdfQGXB3kuSyXd26Brn2EqqnBwB79CDY93LXLHZcUTTd8U3v",
  "key29": "39xNdW7DXjRvSFj3VZkcmR97QckFxpp3FznBbiTjsdcVDXF9dpRv5xo72Ya2H3AxhPhTcquv8sS4gKbZwoAqaKBy",
  "key30": "2sT2V3YhesgGvL2r2KkEN2ENYadcs8mubR43Tm1jPfJzGZ4yyMTQqYkzjmap7Vp7Sf8M2nvhHCEMqp2zBTAzyD69",
  "key31": "3RuKMzhQXgCQAJmUc7L8xJN9UKs79gfjwZbMCyRJ8fCviwPv1CVbSR4oR4LuNQ28DHzoExKmMTB7ZBJenfKiajxc",
  "key32": "wnJvooiZmRDsArDzY5dib2DNr5A62vtNNe8WmjJrf7L4p5iaTauJ3bfGBYHhkNs5QRghb3jSf62T9LDWCVsoP9s",
  "key33": "mFXY1JaPKDi18PCskdGGTQvw8XhSSCtzV9AW9SASPUhfFn7bhdxhV8AN1usas6kGCALNCv5HoyTuvvGaydChf8M",
  "key34": "2bgEfJMfW1JbQEPdpMTdMedUavzfSGHPSvDnE8bxXbqDsRMXSadDnmVfYqJj6V6ZuPUmcAcPicj3Mevzg31hYrgj",
  "key35": "36DPbHLoG9JhbNNeE7dVQGCCCS1xfQTJBnVCCLg4xLxKcqF6Aw4twQV1UP1LwdMoutBtZxoFHzWZ21k4musU1YMA",
  "key36": "65CrHBX1NFqdQrauqcAVy7TN2BW3Q9mmEvffYX9dNMKU2Yc2bKfYxogt1PRbuFWMCCwCFArzdUKuSMuTfDJzyTsA",
  "key37": "z2rrt6w3RDJSiFEyK67e5HbwgmrijrQvQDvQtjXhFNcQuEqQdbTYQQjuueh1EsGMgTMYoAnQSg1sgeu7bU7EEGP",
  "key38": "2aTQEcUboRj8gxctyQTZiQXyob1AbQGJ3ip6jidpnT82yycAbXCDK1S3cXwTcdH2ZoSYjaAppqGnz5G2c2ih8id5",
  "key39": "5BWmSjT7if7UnaKzLwsnHcYDTF6JX6jZMYmduxogzxoPE93f9KTTYtP2LyqMHrJA7QgLrdSBFk4YyXTqDvPFWEnd",
  "key40": "J39mg42M1EuKfewLdxHKxDspieyLLoZGa3AKEYru5RX9eVGoHZ1moc37Ewmo63irtxHyWzihScT8Xb4MvRYbp5t",
  "key41": "2xhbJnkzZwUhjMH8Av9wseP9RVz36RCnjLQDD6AVLoWd4jVWpskzorx1K2kXtwmiVCUwtTq6HjRBqFgcwvBpPgCb",
  "key42": "v7avUR4zp2SFyWNRVPEM4XYQQGQiKEkLQAwR9R7Knt6gvvJP1xdgCpNnmmDHQGzCrsW5yvnPaRM1Wt8xyLnVTw3",
  "key43": "382d1hMd69M6JMRiKbF5CvZrzs38qxi5yeqgtKJtJMskkmJWpRiEgdvFT4hzC7Au4f3rLkRk2n4tsGg7PvH8gNWn",
  "key44": "2dspnJQ2m2EyZHVeoKCcJa67dNG7RNZjQetFqNgv1DHYcXzoiHkdEkerU6MYZm6TujsHMbVDGqqkDiKVqgmPK1je",
  "key45": "2CohyzJr7tyRi8wunEwszcvtZUgx7vpVPpcLZAhnvpQH5PB5FrXXFMMVBtDgf1A9qES8s4raZ4SJ32Vvrm25Tpvw",
  "key46": "5yrnQyVu4dKAQxrSR9dJakKaPFmn5PW5h9EULhGCs2PjF79T84PYFddA3i6AieaUEiQAgvDAan3nNNreMfH9ciD",
  "key47": "4VQbnQh1wpnXK1KuujV9oKqhW6wjPyrE6xEco67MPprhqM4XNwS827LmsmcRdNJV956ARfqke1vHnvwooSfow7AX",
  "key48": "4CNmQCiGHvhwPUcXDEMi3kzHKCTJ8KPMLpKF8Ho58giUV7cQosqEC533dLtbGhUDoEB1QEBpaMzbDiKYZbDV9iZ2"
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
