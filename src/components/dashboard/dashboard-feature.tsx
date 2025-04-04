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
    "36bk58VpfDDfH2AXj4TdtrFSU9QMiLRcAya3SAz2S3YJQREBXyq6DFDqePRCvJ62TW8Acfe9PPoFCLqSLBYpffRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bPbJUP2e8Jpc8Xtnud7hZHvqRXbt2et89JR82QPLA4sWNgPNq8CGZYSKKYPQwP8uKndpikucq379cSmmAZJvC2d",
  "key1": "5TVBnebaL3qEUFQiiZ7gsZpDUhjj7X4WfHy9TyP53mkReYd9gbajQaBBVDuLxttS6YSr9HkYezrb1kzTNCmSCBgy",
  "key2": "2hf1JooWegPeZksgNPxc5B7BbjQBmx1mGkwXrgWQadoNRuHihDx2grwDt1cNu7fqSYpdQPQbGKQMYBUmFkHCxtE6",
  "key3": "iskjAXzhVcgeqpYCGLknb59eLj4pyRTpoG81LvhNssndktzShCAFNsYpu2pG5wN1PE7qqgiDuDAG8ZnxJ7TGALb",
  "key4": "2D4FfxFp1oNWjgKNPXeJtSJextw8zoaTBzyN5TFBmy1v1fSZeokWa8sExQx2EKTF9naQUn8QJ3eTwThgn9xwsh7d",
  "key5": "5QUMdoUmFhmt7sVMQCip7bVVNhrfp5BeFbWMTVoMqmgnBWGFGAv9bX1vWQ7DhC7kUMbEFYsrQA1WNCtFq3QjKhBU",
  "key6": "4wjbY1YyjSkRZUbHwJvYwfkpGVbmfTab4eSkbivbTPqDsgAs3E8NG4ZGtL5Fn38bL8XBYUxP3jufxYriGJx8RsNz",
  "key7": "3N9TvxvaSQG8aJmub9CrqpQdnzdJavc7DS41kzbUcbZdtKv9WhoucJEGADY9ujUHi3AT731Veuuh249fchtDNVRa",
  "key8": "2BLZj9em6nTE4npAKBNJ7pnHmw4So5LHkrukGX44XxJwyZuznx1qyMeYXrF8pGYgKjDE6jB4ondyhcjDsprSSokk",
  "key9": "mTk6u74jT3LzfkxGboi8duC6Z6eg8KuEMwMwpAEJLDxWVj9XpTavTVFcBzVsa3aziQFoH18E6B9yEqBtJRnvstH",
  "key10": "gqXH6y8af8v35bHSnxGVujnbhGa4ppSBLG2bNRH46BmMQQVrTBqm696X2nm6bfrA1Aj6ZkpVBEsipq6urNExbnu",
  "key11": "4pHe9egTgXQpmwWLsoScmEJ1GXqW61wVPCfHU7B1Y6i1fJ8dV195ZCMTzxE4k2rEHpkhxi6GKmEwVtRBiZgXg4rm",
  "key12": "5VaqWnveanRTWACuw7XetEW6Nc3uMfXY3BxFhpG5SXGELvUMB9PSprZzyUfYsdxMG6mNpu4sp2v1TuHu8Q8XHAHv",
  "key13": "33h6ogb7WziWobsacGjbiiw1zTf3VUhiJSZDNxeFTBVvb9Y3jEopooHkvqSVfmMmjEnAvmLHLwnApXxAnK4VzjzS",
  "key14": "SeHoTYMkirJfeALr5kBGAshdbrUwnm2UDcxuMgDD8NpXNHtzdd3XGbHYaxFZM1PZg7azL9GKfSdHJoD2tkz6g33",
  "key15": "2UALtFapzqnP4Rxmz2qGwkh3Gop8jMUEc3bewZj9myVVvQDjgtPPFh2A1S3Rpfayf62AycCwyuXsbxMo6b8cmnN5",
  "key16": "5Eme1aD8ps3JYRLNiLgNv5DBvUoxXPu6oRsN5KLfpWmN3u6J89N6bG1kKvXA9FoJfgsEic4SkcPXin81HJtL2KPt",
  "key17": "1JXJMtxU1HTLxQUHavDzcTHoNvY3QtUWNdBfuK265oAvubNU2sV6zCm8LAAfapohrZ7xz2DNFFj6As5CxnpyVtC",
  "key18": "3H75Syi2MPQXEkHUo8KuogcngyStC5AsQJWBYqn4cVMu7oKX8e71cqJb27VKJAY57YBZZj85F4wva5QqyFVV4SsG",
  "key19": "3ax1fpEWHAVSD1oNd7sNmmSHduz2y8z6JjLC6tuJcZQTAt4joYv76HBvvydzkd1UpuJHfePWeafQVi33zz67LND9",
  "key20": "2JEsBVrtZD3jnLAE2mprkmBvW3P7Z1tpa9QdGYxGHJhPfCMD18oL7QFTsncJUNC2CQZEgkpddUHG8Q9dSeWpPyeo",
  "key21": "CE5mKVxtkZNcJAEjU8SLtZ2UTgxmeixyKYWnhi5ixNWHiM8xsbzQ7Y39ZEY7NXvMDQGfJLEeTVxe3JHSaViGp2G",
  "key22": "zg28vVjDaDmuLD14TeLyR73JraVvL4Yq4ieec36YmjR6iD4kirrTM1fPmci8ydvqs28dmfFkyApmgSTBTRJHrSf",
  "key23": "3aMu3koDjQvDogVzm2y7h1zjSNU87k9JVLDtZajE8neNAu9ECukNqT5wRCKawgt84cqZahNUyUPDwxFP8F2CC59e",
  "key24": "2JTxDQDXyBj9uuwWRTWSDSwG7zWpeZjz74yDipjYpskpU5JVgXxT1trU8bEJ7qLTPx4GzsEGSQGHFYaePFBuW7Ah",
  "key25": "32TFzjAKVbaivDVgin7cmos434WQUJuJqUwnZfbSBW4rRg11KM6JxxKuvJpffxiD9A9MHzQ8F9E6GcJw3rTuicrA",
  "key26": "2BPTJqwTMx6zEqZjSYoueZmmHJpyw1ChKoi2irSpggfxrZMKt9zmCwB9vwjkd6VzaxzTroukHQ4Rww2L6E9jqRC6",
  "key27": "T42FwWQNoSXskgVVTkkQLQ7Cmwhz9u5T96pLW5h33fmvNpiTQ8tdCKGTr1bVk4iTni2TM2vcDnySP6aTDRdaQcG",
  "key28": "56qxRxkR6yy8Svo4ggGZjh7xDCSey2a9zrFwib81cijtx4EbfDRMa3UW3RETRw1jof5CkYCD87oEx3JrgSEGXxHA",
  "key29": "4zZko2VG2Lsqs3DrEaVFWNwv9M54emsq8rgDpz7tMZJW6ZR8tRijEJLfdY8c55pXC2Vg57BEDaqnDuaN9MWDRBez",
  "key30": "33rY7XWkr8kPTygEYEcUa8UpeyJPAHc2PNobhrEQhdXskcJFdJ1vw4rzT2SWTGCM5w58HCtJLAVSn986P1H9SaCj",
  "key31": "4YWC3yMaSH3SbfC7MEMiyJbE6ATX9iuUQczVA5gV9x9W8xvfmKwdRRuzem2j6uKJAVbyEstBQzrh3L4kGocDzf3E",
  "key32": "3J4tpYWSYG6bbitccmXAZbbPBAoS4jpw7C1u3XQSR1YXcehkSS25Nr69EM7hzouYZsFkrqnCXJPg5gy1gmzxu6S2",
  "key33": "zS54qtKJGYXUjLQrpqkznofQ9royuWZNeYAsE2UPgkHY3HdkR1pCRRw1mr7jjRzJRRorGZk8oagaUaFKvZYDu8v",
  "key34": "VGwJ1ER8x7yudd4BTfccA6qT8aYbx2NWNfyFX4SBN2BbTPeiXfN43v5iw6ECJfWENnJWfqXnCXG65tW54NQXW8V",
  "key35": "TmgS8nuDZsN8vJidLNAghboLan6rLK4Rqraoqs3cWUs1ZukGVLrAJDwKLntK5wPSqTnKf99duW4j7NRzvdPfeYq",
  "key36": "4NMvWW2nC5eRL1quJBMsksGRegEqpSiBKbUNhr5eppPVQtH9a4gTThgRJ9MSpAyrMRgPrDQbVtuarkAX7jqNYFEs",
  "key37": "27YRPuUfXDtfTnA2HUkVydgSCE9T6PPwR5dToPsrV9VpzSpTszEiQ8Wg9XHDGHC46U41Sp8XBrZsHnnLMneJq8w6",
  "key38": "2LWPmAnDBr8As6xEoU8PqKJaJthGgd2aPY5DdDk1VNV1Mf1mYcNE89zAKg2Ugfwp5syKxrsutfGDH1s3KdhkB8ca",
  "key39": "2ayxJKZf7HKgvA1DHzopFY1ighz1JyUHGjq5Ug9AuokVX8dSK1petQ9FzsXQabtTZhV7198gsNzeRji1kNWJmJgw",
  "key40": "3V2C7wdRxq9LUFKPptegMueXyJMo4UTXbLW3ToQx6wfXM1Z28jAdUSjw9AgR2x634mtReBtkE1J6sNr1659iorGD",
  "key41": "4bpJU294qoyiva8MvyWtuKLWpo2ic8cp43tNSSfkWjfet63P8kw4KzG2RMu2R4zT7HxsZXcAoNrYSidL14iJTEnH",
  "key42": "S5xdqK1sdVwoNY5ZptRb9WcZ2KWfUGRiXYUjyg9coYERWozyfSroDyBKbXtHsU9At7FooJLkX1Y1jv47Ap32SPo",
  "key43": "ounjuHfpdE1gJwq3zr3mZ1xrpopX79AUZDJTxA5Gn6mNHUcKLMcJC6vyTCYS5sXo6caNrAwgdDSHx9c6SmavfZg",
  "key44": "2E3UvqgMCdLXM3XkWdNbZBAZMjopgDgrEd8UmgVyGQDvdypAHJPS6LvQBZfiMMpSf42r6bBpHEFVZs91ZWfz8Zzu",
  "key45": "5mhpT1xXRrgvbmLUShcZR8snPBVtEXsdSAfPd47EAURVBXtsby6BbEvmvX6rYnNcQRWXf6uFEXzr51cebZL4i3Wg",
  "key46": "2yUQcS9ZxV8i5eBdz9wBHED1tTcoPMDhJje4ssLddDwaP96WhzwPkdefz6gvKekR1Zcss97Rw6rvFhxqrJFwMDbU",
  "key47": "TyzgiJycZC8Pq92rzDuZhfa1CW97F8GH2n1JopNBUeb2in3ot22xmfVBRfNoDrNYUnWnQboX31w7JQRhCPagFVL",
  "key48": "2KyCgRfdY7QoTQitug3vsz8P66dkQcsSMGfaCNAZRN2zzjshFbCEUbYioUcBzfvVUC5dUzjxyFYosxRn7b4Znonz",
  "key49": "3z7VjtZ5xC35crho3UGMNBj3U59UezuKUEYLzcQGQMHkxSe7ABF7LeKKGXuWfPQge3WNnCwZ3qKvgxZkEem9o1dR"
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
