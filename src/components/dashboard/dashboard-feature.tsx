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
    "27VAE3Xcgz4TgpPnnwUha6P3GJZZgVeetQkuRBpfxQocHCVWgHQxoE7P7HMmXrseQJwxRNn8ovafksGhqZZYfyC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hF2vDC4kWYDZPjcY24ehKj6veivD54z7dhHJgVZJtaHGvxa8QgHDyjHqdzYD66y6wKCnk2jLNu6omRauYoBXMVB",
  "key1": "d2x9Z7MKfMNNgsY4uPmTahPenxzTRsvBtEwXxtiJ726bjW75rYWYP2ckRHjRZHgrxKvmKEyfqdTHhmJ7ycvtrs2",
  "key2": "5hbMr6C3QESF2nvVSezVW4RG5vfup3aYGAAFmXy2Jt7uMzmoCjrXGVShTntSvi2kX1zEoVBGAnUPVvjigXeQ83kK",
  "key3": "2D3KVd4rYwZGfG716pQ2rST1n5DFVo3pgBPjToQG1RFm1MjhQnheJHMeYT2fj7Zkbk3hHZZsnrEkKTz1ZA5Uny5X",
  "key4": "2qcnhgALhcMP6BAguVj9XatYsiaREGt2xvTk4GgtyLESAZ4GcFcecrnx2KSKpGvcey2RrXBCEYgFjCEaYGJyHAWE",
  "key5": "DWHy7r5xfj15HThFbd3HVYX5Qj92u9uB1wnK1RMi6ib1J7WuErv57TbDYuHWiDHGugth4DLcu41ZXb2WPm2DkqZ",
  "key6": "2YvqHYXDRbDAbP7GaaiDRJFKYxX4WKEY2SByxYMrkDE5zdCAnp5j7SVGLR5Fo7MemguZhWwNF4n3TGM2Rg5wqCHA",
  "key7": "2g6MhUZYTfnafdtDPLxn1ttREQbSQzZcyCcH4cGSQG8aYffkR2VJAuLs3s3B8zQrxedh3pNRucdDqJGtCHa25aUF",
  "key8": "2YRHdRVmYowmm64omwYpF5WtS9qHo4B1JVzNjxJkDTVbE2N6z7k3WXVwNTTpwvzZjdp9wzc85oQjAxkQpGUgMXtM",
  "key9": "2RktbAvL6anCMR7mWAmezTxJic82jPmo3s4ry11tL6Vab72wCxzfsac6pbFCYYHzwmNuShghCUk1NuJ15FLrhYV6",
  "key10": "5PNGuppsqqhLjM3CE6YTja85jEVfNB6yVyq9TGW9adPE6cvz2zifN6f22f9dgHTNMB6ej3fzxwMJkCMB9zkDr1i4",
  "key11": "5x1dt4MzswZDbaZz1YoGHzgw1HQGoeunFJHABdQpxGSxgSUde2eFBViErxddbTMcPJAp1DDY38NdpCwMb5brEE1T",
  "key12": "3e6fH947tiz2u3vVUZYEf1sqAE4CibmWA9VBrR2pdcbzENCR69Uy2VCEsecgkEERb1sGdZsErzNQoXgtj6s4QsRE",
  "key13": "2DrfMjujS1Ji2GUkGvJ1TedDsENG1nUbK3CpcrtGqPn53Gc12FRKePWctdMC7m8K4XJurMT1G9KNgiumkn1BpVt",
  "key14": "586oMKsQbTU9YcFqgyvaQYU7wrJjuzDjE3gZ8s2LWd67aZqR7iN5Z7qKcKJ5PQWUV5G91R2thswm1arD164mi2PR",
  "key15": "3zEKSmYNkH2KyLGh6DDL3US2txyAVhtKdiLzJLvPrd5y6ipQJthRTa15Fygv8x4qh9ik68rj5meUJeoa6RZUcHWB",
  "key16": "3DCkVJP9HBR25mWtzKRuJxhGc7nDv4qRJqTQ5gSycT8fN8dZjTswxyducUXTLZbzh7SBCRDr22VV3aa2V9Nh8UCm",
  "key17": "wDASgKMGB7Lngy7MbWAAHXa3epGMUDs5c7Np4b9eS27KvgD7M7WQWtybpsdDvfVHesMSmbHGGB1t1DRkNQCA2sm",
  "key18": "27FrBo9NSVzPUj3hc7KfCerqmVKPc7GagBisaRUdvrGJYyxv7gBQ37HhP63wnfj1DLGD9n5EZpc2iP3MYHT1HWJt",
  "key19": "5JMKPgQyfeaqCRkrVRPDPwfF697GF9zSJ9GRqKBENxuR3wdyKuNzi1jxsLaJ2pcc2h5WX9EWnx8TV9i45MSHP49b",
  "key20": "3QGimLWVctsMRHczkkVpcfhpSbJQaJkqEvhCXxHYaEga1CowictRksCucGQDXG7MWnTG1RJa2BLE96MYjXCgTLHx",
  "key21": "3uBrSqLZPXiY6cLLFksymj5RDbJErpBhpoQmJtCUnZfMuqrscDu3KGViSrTtmiPjLv92C4xNAZ2aK2QveHFYuCKu",
  "key22": "3yEQKwfDbCby11BvKo6QBUeYY23pth9dTrUUdr1o3BcSs5j8Udn2Zv3ujfSB1YGei3SD4Gnwejoq4QBVJSjJ8dtf",
  "key23": "3xtH1zpubNfEi18Ce2p8gdu9mbuzmPuvRZxDjJiidHow76nhn3ox4oBQLYsgJkZR4JEwSHBvQxL1faADRDfkRCUV",
  "key24": "4MnTmXj8WjvHWoDNUr2JwxwKSXAVEe4GnDi4utXywFD2QKtcv6Rc5HvPnaVS9ob3bmNq6tnnyVxbUioY1EwKryro",
  "key25": "51KY5KkNKTnHm6BbtLfeHuwEMTy6n4xVJadZVehVCfspQKWQfnW4wo9BFYM29cFM5UcD1PTCyfBmx13enqPDgMQa",
  "key26": "2pph1VpZcvSq24Y3WiLWdr3DuFyEMBBW4x2RBV5mj4vD1bSjW2amfaot2ckvm73jotvEtPbwFqcbnEnHgyBiPvBk",
  "key27": "ebUcgoDF7XUaHq1Jvsc9CddpTDQtVwdey7WnwEkYzN4pAtQAaJWyTaPjnUm4huBgTvHyFE4ke6LG2jSHh6q731p",
  "key28": "4enV9ZmBkgurg9FnAZzhAFZxhtqSkvguZju8nPbdwv9huv3oTHxmgBoXU2BTNEaS31M3at8A5k7Y7jSMQFhpm6Fq",
  "key29": "2Sz5Cosza6EsZLsRSMTSERjFTSpxCgsyEdTCkHg7TXd1G7nWZCiTgmJB9xzHHyHkWiQZ1mdFTR1FbJcrCcxs9zfQ",
  "key30": "2NiyMtXDpQ6zr5UMKfG4EsfcDNyJTH7vHDqQPWdQqzRnH6njvXJowFNY6kHFDTv3FAQQC9xFmKQCzLMsiPumcKRj",
  "key31": "61s59jBaV9u3MFeSbVo5xaXEzP9YUw9G1jt8TKtieQtXmumN1W2KzrDSRbhHhfxY9d4xxxTDPyhzg8qV23XV9WFo",
  "key32": "4zyQy2dXFLq2UX9d7sufq3Rm3f1nJX5XZiiohNs1QZmTfi9W94xqDMykbrBLxhaPsdDsLTL1xPSeYnCPpXRnWXnn"
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
