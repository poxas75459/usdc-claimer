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
    "5ad3tTJTBpKQPvWEiDKNiEK6ZnVdLtPFFewt5k5CKoyTwfcuQLHFiHd9aWowb4jGb5QCoSEVRPVkRDLTPGmu4dXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VFbfg4BuKoQwbmHNHBY3ZjWs3RF7iYUGBdMTKLafiRetksKwUWH5ULYgzctNnt5Sfm5yUxwVbSYo1W8496Nw2Th",
  "key1": "3pVLkyTHEHWymBVUb1knVVffWU4Nb13BXS7HSsRwxg1iBmAfhtjK1voxehbAUxLJ4wVZugMEA4LHjV4fFvtSNUeo",
  "key2": "tvPZHQZC1oorrHxjNQ6Snb6byzDMMMgD6M3GfTXKWoHqXMdU5qwqHmPz8zqqof32S5KQCJ2CJM4FHWUuonYCVUu",
  "key3": "3SV9zxwCT1WQ1Y42yv4HRgLP3xVwS8KiBfyAZRxbXd917cF7P6q5iNDyivPEgZzNvYfShC75AyMg4EWSfPYWwQQQ",
  "key4": "5x71cihfF5ijMgyDhYnp9zrWWw1wHCaz6cTSd7PMyrAKrrxk9sa5wSC8XXkcuSLkABXho9KyhNFe8pxLMttLAf3C",
  "key5": "5nyHYkfr2P2Ba3f6QScA65ZpeU8NF4m6x42Lno1ohhrXhSzp2C45L4TAEaqRuySGr9x5VgSmjhiUGpYt6bjH8K19",
  "key6": "4NQDVqK4MhhCefw16h8DsK77RgJpcjjg1aqMmsAucLKPbGMUNictNAzuMfba3d8rzgsNiTubYJcyrL2vgJtUanVb",
  "key7": "MQsCDyUmGDVdZbHDTse22WjRJYKciydBC9FoQkSZNE7DDw6bNJGCZ3doYwtE5PV7vGbCDmmpVRNxzwpK7JBJLJ8",
  "key8": "36z7WaDL3aBq5kcwr9mZt69aYfMFm6ihzdzYRrtSRKaDm4H3huyBR1kB92CbSVVcXQG4eqGhmdAKMD68xwL7f9hh",
  "key9": "YJWAdBRE1LTNjDbv3jC3NmWucTuv9euDopwtEWU9srsgSyBN8y9sL93e7SYfeMfAic5CiBC9PiaveVNqQYkjgAq",
  "key10": "p7oiyQKyNUbyHj8jd38eNSGKUY4VVzb9nz4gvSuXh9vR6UaXXxwQpMP14oWeD7ojy63BqNzHSZ16koU9mQmMmGT",
  "key11": "2wtamYBkWcyY2WpyeNJZuSrrYoyVCG88Z7LqkpajS5zfxBVYTmihm7Yu1rZ36TeWZyQJWjWZKu1t1jgmAqh63v8c",
  "key12": "34SFcVPhsN4xwXPVnZUy98nC2YvQfUgRba4rtLiq8FG7r4hJqWEpvLEFzJja67Ttd5Y2PdWVsY9H4ionA1vncfPR",
  "key13": "3sVrTY9ucW4cdSRDBTH3fiLD28t3kjyqHzRmhsNnhe5Ki2FxUQUhaEJ8g96nV3w1A7aYkp6Ru5bvpTYhYXHLHVT5",
  "key14": "4c51k6omEnDjy7BocqjGH5iU3tdpAzuqzs36kyKJ85Z6gb9JLMzhanPiZHiC5SkPLy1qwdoxZAuQ77Asosk9KNkF",
  "key15": "58boDHyjYgxJ65BGr4Ha4tL6d73oqUPfeWePrXMa9uvG5WsAZRAaFfSnAzc6pmf3C5ufubeczhAtjhQPeuQbjrqi",
  "key16": "R4z9cdcRnsqB8AttTukryjad5G4FAmnbumcCcnSnqncordohyCWK32F8Qb9TGkWk9pATqCbCzUYWgkhLPETSwvP",
  "key17": "2MwE9Km8XDDjkF655KK9ymSGoFi1KV8WFp7WkfYdadpzsdwy95BcEoSZW7jBuM9Hgv32YP4i6AbUPndLY7e7M9KF",
  "key18": "RSNJusBmmgv8JMMBSunZuGc5wd5hvqkuf8UMHdYDaHH4skPpP28AbuS8nLT8MZQv2vfULaEMgw1S9JFg4a55TBC",
  "key19": "VxpW7aZ9m7JAHAavi9madNVfmEWSJ7JfUEvCEm3jMs4FMXN1pbYPv4pghkfnLXJwbEWSKJYh9afPLSsP9wn3aLW",
  "key20": "uVCdQNLwKayRpH9MJfSsuKXE7KLzyJGR3rmpXQt4xEgjvALVwCU3LTWkeZY2VcwDwTjVksjT6aeNTUyjYscvrTS",
  "key21": "4ZRHwHGr1wrsxFdpi71zcGx5ayqCWyERM9Suv3L8jLsyk7iLtoPvuqDwwmGsxiMQRZeuLqEMNC3kGKJQn56uxMMU",
  "key22": "sJZQyiyG1fP7t2AKbUCHPSvkhZLH2vaFsRVMZqD5swGYKSgh74WmYeb4aYV1GSk1izZJS7f1o2NLu79oWD6Rv5N",
  "key23": "4xVcFvS5uB3VAvACRog6eFKRfwiSfybf5WPw5cagujn1E3zPCrgeC3cscCJkUwX17VAQ2EFoyX3vqUiiQotER2Ux",
  "key24": "4U6wWkRT3YvqSkYA8LHhGs47qYHm9G1GaezES4WTD94qCwXUFaNZTL4L1SxtVWGLpDEu1UToL3SFAm5CJ7y9rTpV",
  "key25": "4j6JKo7D8ATSf59oJYr8vSujmcY58taGwSnN5E89BFgMDZQkXCpqmaJG38VoQLVKzBN11K7VxotTGFMFcuAjE7m2",
  "key26": "2Gsrjs3Jtc8he2eD7dXxPnh7j9THX3bq27vwCC1mWmMfFYJXWqPocZe4cUh2RxRwmRVdbaHeBPcdhnE4c1h91Koy",
  "key27": "2BfRzgkxgiHqab4vGnZYmshSjMrYXuhn247JH7wXhpe6nooMTcqSy1jUDco864xTfXUZ9HF9Xpq2sg2ZGNa2juxb",
  "key28": "27b8Nu8KtDBoywfjFc8jxFhTH6PCznX7gJoSGArqdRaqtDw69SDVuh6vePWgP9fJ6XYmfMQgw3HsAtTQoJS8FABw",
  "key29": "MR84AtcihR2XdRFk4y7fMoKBZ882cGAauGPA62uaziHqVwuWgW4jhdHwqmpdK1zZWWLtRPmuNNaWZyfo43nzYbz",
  "key30": "5wpnqk8rf8qNdREoLS8kBXjjgE8X7JWKFDRr4iutaSjYDK6dKt3fyEUwZJkZhE7ZasQzot51AGcXHYi2nos8xkPW",
  "key31": "5EEhquKTKmDCvoofk18TcjFeu9x91UfW8H1yiLgZQnKtoMHFC2uNzwrZfH89yp6pSDHnt935gkx3k7vz5ENz8jPN",
  "key32": "572ZGqwDSjnAT2ccuFmod2tD4yjfrKnseR3qwQctSDH39sR5d8XFtW1KxYeoquUJGeqBimhoiMpX4AczBXg8J6cP",
  "key33": "2s7qEUsJzB1cPDPqwTot2aXdUm7etR3THka5yzU1akyXMWn1Md7zCUuDuBZjjLqT6adY1PW5BY6jWbxEKDmusGzF",
  "key34": "2jhPFAnwLfUVvfftyGUqdcoBBgc8NdHYaKbxd9e8nRNkE3vnBwn1H2u6gcAwEwd4Crgia4vBpQdmNM1CfrafyXkA"
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
