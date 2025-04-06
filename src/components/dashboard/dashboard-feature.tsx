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
    "4DSnXM4RJS7eY2KnzaSsKrsraJeNSu1V3Wg24h6d2seP5UHgaegpbjb8L3JXYGba5Jz7jQ6b6YrDvhFbctPcXsVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kiqAWh5LwDAxNEBMhcoRRNChEQZYSQTuCab57mBYzdV8LxZku8Cs7xdaxegBHM3UfBeBxP9pJqsC2rXDgsX2EDZ",
  "key1": "rPBtd834QQXd9nvkNjNjjPpPQP8RKFpFX5JakUau5tsuS6HaYEw7dig5TTd588gKhq4aN2zDsDF3VMaX5ptHty7",
  "key2": "9UXwdndvSxXJNb36fxc9PRuLXTTFd7h8ERxQGuFeCZu6itv4QREA8rf3dqbs3gkhPpw8G5uGeioKan8gVUcVSZU",
  "key3": "hKHDVsX876HhV2jueb2q6VsrecLiiLkJnJXSJuVQ3HAYM1vfF3zs2wVtoYT3MbGSCLS7kbJbjGurm1BNdnkT731",
  "key4": "27KD8CFPTYapnKfLsqDwiVR1qSxpHvdKfL1igmYBtXRm4sWU3cBtLYyivexwZr7utBhfcscEdCDNdcuYqU4Xr1gb",
  "key5": "5V6DFj5SaMKSpvPKNbDESKRgAoiBm8hdJuziaLELpZpmxqGghnFt9ZB4TjzsrrP4FZq9gmYQDTLiMxFECCU9uQ8z",
  "key6": "3qVmWDVTnE6y9UNASEcZL99S7RmsYDtC7ofNxUiob7aG6rRNcSE9273wXkNB5t2E8dYbtz6BRGFnwBxYmxeMoPYt",
  "key7": "5Ew7jfVVdXnDjQ4c8aWKTDLgy4ibwnxPjrnoqS2oXQqYH511hr7TCpQo2E8Wi6oHtRLDYUqkXymakHKzDWXxxoi2",
  "key8": "ttPNWpGm2KPoQxHSqA4jgz5dmN7xT3ECS1H1BucPPS76L4q6En37AomCwKLVVrEc8fmmRHxYbnuPhzHQvcfgQRY",
  "key9": "3FTCeA8eeLyPgPDQyE8K3ora3VVCqcsxanDPEMm6t4gvaQsvLkSpeRENHbibnW9vrTywPA5KXKAv68tP4zKvpHJ4",
  "key10": "5rtDCVavaD5UJp3V7a8ZEHG4vKMQP9EmTazTYoKpR6koyreiFEjG1cPUnFg9sa5AWebRmHKASBjG4NmogEfikh1U",
  "key11": "xRgNx8vg72segn8xNozhJ9u88rQa7nAFECikMx1mcSsTeXhs84ZcCxeMGt25LsHhrnVNdqV5ESHpamKDwWNZXMu",
  "key12": "2C7Nry3oHeKxTUkfcNtYTYwN78FMy8Wsqf1RSfH8kvw7qAZ92cEHGsR31hnrdQ9upxzhN8qYU4ydfhnaCZ4ho5eQ",
  "key13": "62N7QeBtKWTPJ3yBi7sV9wTS84ozVCH8v2GutYRcxDMfqD8qWeHYqp2SHhRvCEXVCFHWX5wJ6QAMRBjfxNZGfJCZ",
  "key14": "5CZTE9x9CipF2FzwfXod3ASEyMzYkgNBPWAuPN7kxKEKjaGxYyqfJGrhFsFA4NwF8KTC3jQdcnrsEzXFSBuCxAAT",
  "key15": "eFLqzn2qAFVwqi6Eph3ijVZh9ymPtUgQtaX6GpFmaREwqKvgqsCRoGC83TeVjns2UJ81xYhJUh5iGTmxrXbM5ri",
  "key16": "4dcgbBJKPbWLE2VEAnyAVP8byPoLgR164y3FYVsrj1ohe3dDmBHDhL6eVidqhX2cFbABT36GsaVk79XdwVFD7Zfn",
  "key17": "8ELNQQ6YdZ3fihG2JYH8caBrtVeYKTWzuzSor1tbEGwvxHkkftTiteragJ4oWgjMz9dvyuaoP2DjuYsmfamErcQ",
  "key18": "xNpFajQ6CUxWVy16sCygfA8rXn1UCbB3dtkA9ykdZPDPtK1N6KNSGfxsFrBBsmTK4tFzJm4Q8aDiGbsrZP9rCzb",
  "key19": "5DXTCJ2qUWyw6RUjifX8hBJhn79e9yqAff2euDeQg9wTLjTLYtfYFsJghqYXB2Wz3v5RaHoTyDCWZ8W7WA3PYMXi",
  "key20": "4KY4pngm2BZ84Kif4QXfdy3n21PzBh2VkENDxJVxP4FH1dV21aaqfBXrQirPwQUJ1u695v8fYrocuvHdLxdK6qTQ",
  "key21": "4dvtE56o3HR2iicUBv2Fr1RdKqEsiRz3RjU7yAhsZcUb1G4J3CojPuiB8SvbNhaZ3Y9XB4WuokwUodVa4cZ4fjam",
  "key22": "5jJUmSyjCEspaLoVWGq23cxfWJaDe1njgantBbfhm2VuEoiDbKhk6G2AjcFFBrgC7S8ZMeLBRnkhDkFNmeWeFWg5",
  "key23": "3cAwGohx8XEdoyo3hhs4J1GLUYQGhHhBxJ2vyPNC5wLCfam7kdZ3ySQRH4q8Mb81KTicrw3MFmeLEY5Bfj8riiqg",
  "key24": "5Ewrk911CVzWDVJbb9mnFPAE579DpHEhH3wb7SnLVw7kfUDXqLeHYLbskPuui9NLLFJgFsun2jUKxx8MCBtFMYV4",
  "key25": "4ZecznFWfgdeLXbFyHcseBc7sLrA9yvKZSdQLg1bNNXsZ3zifqebKWB3aZkHFoueCBDUpfHkbLAVLCbfbfoyLbf3",
  "key26": "4v2ERzZuu4TeUgdx4n77XWpeQDX2YiN1z3AMXFvGTdyWcLkjjGRiLxDdZssX2Xtv3tfxnxuf9m5JSkx8rppgU4ow",
  "key27": "3vgXDszpmRwzH3DBtHEPxQDiUJfc4qxeN66UVvzULBaq8fCHZJ1t9GRDUXwtfjq6GAW7TxPH3T6UrJ9d7gRcNj1a",
  "key28": "5A1g6HYawo7naWj9XvRFnL3APV4cXUn4WMCx59JxawM3rhw31znuxYdevoaTgcY58vZbtSxSxLhgqnHs8xwGK8UV",
  "key29": "5LVJnvhk8ZhBCTB5qegxnWdckiF5waaWwRmgmARfoPKRSvYjVwBd2CrVmZudVeTNxcQNkPtvPZJEs3zPjemGyYxa",
  "key30": "32BEEyGb5wuaXUc5eQnAEmAEDq7FkEa3VXX6htcRu8tLne4v3K8zQfiU39bym7Z83C4eSDe9XvQunxJhobX4anqW",
  "key31": "4eLYYGmiZCPp7CYMYqJqGMdqBrtaSfr4GkDeNBq2p3Y9xkGxH2K4jVviSCs4VD8RWt6QEerEiB26QtnE6TBv5Quu",
  "key32": "4yFThPD8Bt2RNDAfan3ZJfrdHmtt8tcn5nf2pkFdTRckmvDm23doNzANmJfWk2upx8UCeQfe7DXwhaVYBLvqiUFo",
  "key33": "okvxLjwViGFXkHMwZAKMPG4pJkMop1UdC6Lx444FDM6WmPJik8Y8vceSJrLB5aMLddFSuhLbmEhvrFWNkPQNhee",
  "key34": "4VbBHewGaQNgE6b3Nedndi2ah5NgpLAGKdN3pvkCG33B9WCFZuaHWgvwdmZPzsdg23a3xtFBgUn7FNbS8bYbVFDD",
  "key35": "2UdJRVTcLEVQEjaPRFPVYKreqipXgDurooVVmPUtjFqWPVTUD2eD7hi3TiG1JX9t1VQXoRN4tcD3UtbebbjnyyuA",
  "key36": "2BqpNsXrFsoar83iuVxgXFsg7N4JJEmu1MMZCxCTNvHm3C3YyeZT4VKPCMrt2kzfQ9xZUeouJDnFBrQTVjkv8hYi",
  "key37": "P5eM1FDvyMpBk36fpktEYsQdQkQxJSsLbMNfmtgNQSFdQ3FxzGDjnNTEm2LJuua3ydywBzQiRbKnVJqdGDFUN69"
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
