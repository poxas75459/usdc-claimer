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
    "nUUnFywv68BQyYvNiLAfW1dcu3FrdmB2mpUoaXkseLpCyWvoavWEBSRdnU9SEgG961V79Mo6R932xjtZjF5uuXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RT4L9ek3ToJjwUQFrRtstj7GyR4VLZ5ZS1FQH2221kREu1k5D8uLQkL55oL9ScJ2SRYD3XLUzd649iKQVu7TVrx",
  "key1": "2fP3HGpTgav1ChzHhzXYBdTFTDh9HviHzC2V3KLebvacxayo7TiDmDSW6e1W1Y8NqARGZ3iWr93PeRTPcG11UJjD",
  "key2": "3HvSQe3EjDCZSkAuTbn42FXKaovPGHaGp2PVnq1rqVDyg8eUNPy4kYNmHwPutSXxqQHGadrgCspaCvQz8GVQu2s6",
  "key3": "3UWD7tkBrBiZjJKvAX1J2vWy7qCkXE2uexMmVKzK2nSoVsPqRgvPfYZGpGJEmvvfip7EaJrG417k9NPXwswc8Mz6",
  "key4": "3mTA9rakLwyZ1QdfwwCHstzDrF3XRh2VfbWE8LmiFABbs8K9ZyQoKumsCiw9JmDaQP5jZew4VuWuW3jEzmwyCxx3",
  "key5": "3MAMdF7XGVhbsV3kXtLSRG6s7JCHEGExi5cEpSkNhb4WWSx2tzkm8rQi1L67476F93vjuSEvPUPdM9mHc8WwDTRP",
  "key6": "2NWKC3StzEJg8cDZRHLXudS6xsgsmpJAv9ZLDjGyL6QKzBqHKspJkBr6X61PZQLsNnaXjiNACWhd6PJ4QuDLEfis",
  "key7": "4Tpd5FdmMBT1vyTCswHBSHPSaofX2Vr1PX89AHLFdjSREuQbwpymznopECBtnKRUd9DuHeFWZtwrE1ekTri39rzr",
  "key8": "4vf8HJYZ1hRzoErG7T5cPt4Nh6yJL1mbwWaHZkedQCzcxRVr4XHJTZvyyHQvTHZ2AG6thLSya91JYz4j9PbzJRDA",
  "key9": "3J1jtG5SWA91Y794oAJkbKuWwbmchwBZo5JRibCn3VocGcujM3MKyNHp4pP29rgFUh4tqQ5rfAWc3rY6XGMrFXj3",
  "key10": "2Wu9y1YHjjy1dZqZ4dmNkc9wop9zmB7T4pM3X9XAUKRrQfPV2jrRPHsYfap2AzsbU3tQ9SymfMxokZAkfkfsVCpn",
  "key11": "3cUV9fDcJbQGsgKBu94tCayoihcX4d9eNJwGjYSqzA1f8LGjMxa423VAFeGf1rc2ztFCAKaRLdPsnVcDtBtQRnqL",
  "key12": "3QDDaxz9RTVTWNSaiE4wirhS1oLeZr12yqKsuFbnA8XfoCzzy57AyDRFmWJMapifEoyQr54T8V2XzDnv1ssXxkhD",
  "key13": "4c1252tcAA8Tu6nKr3aJBGi6P5HNRsPPN5bBwUr78Qx6KEM8FaNiE9U4aFACYxMuNvEM2byyijTm9727wamq97wg",
  "key14": "4wzS3f3aP4eTrv2ah3CyXqQLUJ22sRYmgPf7PbX6nwLjpvaHo7yQnMmXwo9Q75ifizyt629tCwFt7LUN1usbHWjE",
  "key15": "9yiF4fc7ZCzbeXufsC1qwajnNCczSjbXtWuSDPPEhpd5a6V6ZPWAnSaWB8hUkk3mvW5x9e6uTMpU7AwNkYnRLRH",
  "key16": "5yjuXRrc82QQ5KtGMa72Myzeh7tf4pAas5mpD7NQcnmpMAgtPCxT5xu3WicCodNNgDzdWvnhEBx3KCjbGWwZj5tc",
  "key17": "5AmtsaBkr56JxaDk8sdthbpSBBo1eDseuA6ssAY8fvt9m2U2VGn1KMVtbe6sMDPtennBUo68PdhQKeCSmNsCenJS",
  "key18": "2EyGZmdR3DzigAWmvZrkt1KEpdsbHNvkU4JKWK6JLVf6gbtmHLbC449BdWxBCA44q8uzUVvMmGRLpnVmedVPjm1X",
  "key19": "kqCwidvKtoY72sPxTuY9rXMieg8ifWhzFTKWpqN9w4r2YDxV1wxY8rbx7nfRdkbQbzoQxYRrGPPhnW1CW1Bs3Fv",
  "key20": "4VNLBmkZdEgU2GKGKYC8evuaVp9FRHytQM5ge2rquFYkYW3hPBjfk4qeDNeJau6Ea4JuabwyB4ZBncWmbRTrjvwJ",
  "key21": "3rEahMq5AGoTKoQKEkfkxGJdZyVvwawSSMHLqzzJ3tBe9RczRe6GMN7H98m6AUATJ6NRLn4M7z9h9h9kDkCjLPcD",
  "key22": "4ZQcK4AqjJoJEaYooj2yGa8JtDzyubWcBTZD5RQa3TPQKczk9p8RZa8pnGvUNFSNTSQY3xgoJ4QU2ERzmk1ARG1X",
  "key23": "ExAjmZDgYNXDTjtryqf3CnEuYqYtfD6ZsS1638CwuVjDvkNsXBTtU7ckBW7C2CjPJePZ57vEVesvnJQWBECCgLK",
  "key24": "3xpR5gDpj51KqJqH5o362shj4Nj5gr4TZfRJvwZ86X268sHXcYUQGfqwfgcv8eNvDxozebMVp4nr8zAfYLQDhMB8",
  "key25": "QPgY8f6xKyS1v9B4LHzms523PK4uxpWsBzbaR4SwwAHeJNpmeZKGoQL1c5S2pAb4LZbUBq3FTKB2Zc6QT2XhVGx",
  "key26": "63qDxTesoLsfjw1wsyezyxDDs6ZfC8NjrVYhdG2PSJskgXTU4AdH1mUNguAxKb1zXLotS9C8fetwCDmYXjodKvUd",
  "key27": "5BjD6qEKreb2TUU7byD5eLQPihBQaN8MhTBWxDafZfgSKwtHS1jMdbXzorcJCxWhFb1KtrSGn7aY5WfYjSuuAyaB",
  "key28": "3qG93Dn4jk51jx5GpfrXRLRVQpDhDpbMwZEiAfAwpPyjsFsd3rHBSsTWdAvtwV1Vy9g4RTkhoHWWhur2PhqphbPZ",
  "key29": "2ipHh3KwJeX8QeGPCZtkEp7Kyc88sMaYK2Ug5AoWKzzRyMhJp5gRXFmTCRDDmaFdB5QDjV21cZEf85Fj7uR7Rnpp",
  "key30": "4BpbpJju844J1WSYzGSEuzhsiH8Kw3A9UkMM4KUTSiVJEBjDmGsNVYWZa4VdghU6MedfFNbivCwA3t7Fwf3iUrbV",
  "key31": "3Dua63TL2d7GNBktCvb4XR1NiiiNG1LUnDGyfa1YALSUoRHPEFkciVnLko2Y8HUSdi7AMvwsBKrrZVrLuADdy1VP",
  "key32": "GLvzgoPW7hMyd4nDCMAUYyxtfDS38UEcBUkmw1SKKNkNXDkLNA2fsBAQKywZfQZuKehey7qkTyfQTMv9GXWnyM7",
  "key33": "57wtJkZxWTsEkdKgXjiCL1hgJndYMjP114pRSKoB2JHMe8sfSzDdDvbWP6nC5z3tq3JjfCoLJ8e9mAyfpiKCzQLo"
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
