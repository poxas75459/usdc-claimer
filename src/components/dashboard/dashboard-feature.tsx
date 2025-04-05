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
    "Gwh42UcY6fZekZa5DXa9gDg9PkqPeJAjX5X9deiXVNHXMoefmaMuTKQ6jwqA6VMnDQsHGPQNMqbeeeZvu2xgXxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Twkm8LWGdD6n5GwBXYjde68SuvAXLxSKHmHZb3taneyCVWBYpJUuBBnmWaWfTuRGkiz73yL2HDxogYDTyLRX7LA",
  "key1": "cAMZuHTYduwR9bhVHp6kjA4Tckh5aG9GNZ3jdvNeZFjoPFkVX9XsGdPxsRW2wGH6KWZ1QLaZQDSwLiZiRRqyyGG",
  "key2": "4FYfyMce8BnxniKkY6es6VJM7nqUz7YP24oC6pNat6HH8WKa35wuHqJXrxL5B9eGK6zdPLaoAvQjTAiBGsXqmJD4",
  "key3": "3KJFTd5wYMQWFrKErozZvbQQTfAuADXLyrwU1QLhfZqMs67P75nViG7pp6ifXSJzSimi7BVoXKFtQTPAvASyKNUT",
  "key4": "34buP82mEJmrBbCLe2kCUGD4WdRjGddn4KBnuAncJeDqL4QpYPMKiJydbgU5S7hM39DLoBhUrHyC4jtWNRgFBrLe",
  "key5": "2GNEqsEgfqzP8BPjDifzzfQznw9izvBW1dZGTczac9ZzvfMaCMh9WSsJ2ZbWvq3wna9kLzGuFrnn9n2c5V9RJFJC",
  "key6": "C5Yyfum4RBMNhjdXd6YMejFFHP2TDgJviLAzusDuCJgPUepSmqC3HJaVe5CCNRxfcTFzMcrQGx7HCVPfwra3a6T",
  "key7": "25kAUGZiPh6iqC3nr6wkKiienWwoPRF1a4qrw9rERRved8vd5qHD9aUPf8zZdjymjgknEFt5piCDcQ95qbqJ3su3",
  "key8": "32SPBunE1F8YwRWykpdbMFgGPY1LB6atpuPGMsPF642VNedDGokvhNXYkZihGfPGmJfVEUQR9dqFvUFZoABJzk3U",
  "key9": "5iiWucn9fJiNZYAEXSvDYsJpU8ABfZdAu1LKeBN9ABEZBcAQFFhMwjXdrEvSZM1C51uQvNVmZKbLt7qcvDQba6da",
  "key10": "3tWXJQv5LvLZSL7hGAhBuWz7GNvKAVPpT91hmztBu4zPXs1arUJLCfTCmgk6rPCgnAd9NbB3hEKeLw7poSph5xjh",
  "key11": "5UZJyECoRFz7SED621q2izjK8vkkYzXZJvavxBCDeeSAGFrwvnqsodWQNvfpSoyQeJBZ6gq1wiVKabKgeR565Bt3",
  "key12": "3NRhaog3ALXCYGNLa9PKbR4QnY7kxbCpqKEFSPBbxYnmhj4D98f3Eqwxc1tuxjnF1s4fFehxNFQ5XcwowN8yb3Yn",
  "key13": "56Cz1fccTGULNsBiw3ohGaFLtG45w2zi4SFHRGnJVK1A7fNtPeJFK2NJDyRkFsv1UTB5R7ExSYbMa923NJdGgVEK",
  "key14": "WbGsy6Ta1oamrzaCJmUVZAhjr9BwuwNFfBYCoDaZ766cixkZzSSV9xmomHKnhaRY96daanR2qPNmh8QjxhgVhro",
  "key15": "3JPtbhNjVHqrX33dxx2eJbZMQmcGfzKqiTitoy7p5a2zW5b3Jp4st4jztpByy4UjsynzjLdxQy6B7EtQkSE7dCC9",
  "key16": "dtEofu1FPQHCnuhFTHbmkgsV4XRfTcHKrBmCRqF2VdFDKEcEEZXSMKTKQkiphV3KdydUGLX4Sp2yyvYKcofHcz3",
  "key17": "5B2DAdBuj764kxQCaJAN1X4Dbvu7PLDM1HkCqCEsWcLJHnAUG133toFCbnVMJehrzfTeWqxpcSFPMPzhHwjGrZG1",
  "key18": "2oSnYda19mgzCZstHg4wP5HWhEbjYc7dRU5u6qE7m8UTFdBGEQnB8Hg3xrMBCrfe2puhntu4v8D2G5k5qRGNPaeR",
  "key19": "4dQ3MgUjJzg7cj95kNgG39ewRu571q9vFy8U1vz4DoFTsmBTL3mdAg1mxb1RMmaQBsrv5Es7bRBapQEWi5hro57r",
  "key20": "4ecsxMQur8GvqysuF3giavtG3mkoPjq4J6L5BKESpmoBFYiwatVdx7VDzuAvSwaMxb4xqHygZFZQHQhtaAjmn5bv",
  "key21": "4n8pjr9PkbfD5PRmMTUzVPCdYVhbGBD4WLrmMcq5ky87xBrHpPduCUFbubcqBBFFK9AypfGURqxRRpjMJDdkBbyp",
  "key22": "4vPeP4RFNwtcJw79XYcE6xbrfSBh4etMcCCEPBoZvadV9VoTDF3hbgqiYkjC5adVGbNgvg16FqbtA7u7hELg1CtY",
  "key23": "23AqRQB9Ayt7tLShrkv6RQKLXJn3Wvjp8jFATrxpozby7tXGnhDs67uSuANk2u5p939FUjxnz2Xituks9DkG6FTv",
  "key24": "5EmjJREEbqQHsRF79MqebW53CFyRH5oB4ttmzb934568efDxnapy4S1GyCH4LUuURX7gPm396noaJjDksuuRYKkG",
  "key25": "3nhwUBDDGeabL2mszKP8hcBrsdi5uR26pSM7Mfjc5hG8K29oSEU7tPcBhAzr4G4PZpufwGSQ5Mp8mLFWJBLPLPkm",
  "key26": "3gRj9rdAuVrzciuDHtny55bRgZdPFK2REAhCcarB85WiBHfSF6iYCG4T4PJufPab2gPms9fFw4KTp68VRU7wWidK",
  "key27": "5GdvAALiZKZvbEUwXpyicCWGkGTsTks1GJjGr1C9BErUXSx4bs49ZoXoQ7zDkRLxSwp8SD69t8ewBeCu6XDPdAJL",
  "key28": "4NfFWVSqTFBYNRndXxEkb7kvP7hM9VuidBueaHTyFpnx5xqLNtYyES8tTjNdD7WFqpXsPP3w6EnY4tGJRh77koXU",
  "key29": "omxodRqXA6NKKmuf5UDuJkAeE6E26Myz4xan176p8xSyKPjypz876sVKgtZogsvsyhx5sTGtCzBvPZ79MBw56qg",
  "key30": "bMun9hueQqWHj399o6JNTNyZF4yTsZe6cJY8VWtDuS2cpN32bWWSWvGjKShRgie1LecXLZLeK4espgw4sYUrvqc",
  "key31": "5SKtwjHwUbUUdcbjUSEzvaeTasGp3yT1vsCyxFVEuDPdoPhxmj7kDDYrcX1kzQvx9kYs9U8YoH7sdDMgjXt9w34L",
  "key32": "2NvneJS3sfo2MgRuU8o7r89WTiq8webgqxzLnvfThvAGFLLMSvrjue1yEHr8tPVCHSZDzgHYTZh8iSyLapYcGR2r",
  "key33": "ATDhx4YFvBk1yxysDzCn9rT6bx1JFGE8oMcungBFoKbxgm9fPFkuSw1uSMswGHxQShZ6qBQtaCyW9LcFT9EM6U4",
  "key34": "WoEFt5jRXyff3NVNaU2YXzm9odvzEmXAseUSAsWGEWAMQAj1X3M1516LxHkVTbPoPixc4hRscZsFmtL1svu6jpK",
  "key35": "2KMnupnCwGPVhVAG6rDf4NgFbNppq4koiVWAYgEgkUwhHkk8ESTxVZgu2HGEehJ3uekU55T4uBALNazXz6zz6Wxo",
  "key36": "4Z1KvPDDpVBefLmnpWQ7DhRGF5246NgQtyBoKB29PAWhwKqZxsH7N3JQaYgcPDc1nftzw4wFaJCx1yqASNYMeXwt",
  "key37": "3MaKA8i25L3XQT3oFuD3eoDyXhRFxdMZPufgmzebzQjcnSJkeamUXAAiafaNe3Tniwjm4kVK4MucvbMJqbW57Vyf",
  "key38": "3CsDKRxFCvdG6tZ12hTERnGVyfwCzGSaNvKMLTLYwNoZL1Zr5EGZ1h4GZXJTBCBAY6DdhJkMW4yBC9ih4223j2eW",
  "key39": "4MNYeXDtNaLUsToUwXvYtorUFNa4YkKdqcxDtrj7FBc33iDL8w1raMhy9fZ8LpCMp5YwitJLf8WNdxYZp9NzJjh1",
  "key40": "4BMjuACEuWWzqFHbbmsrUPHC13muDbo9qU8JsNDwDFoHgyacPvm8CikpGXuUkCcFCzRkMLX5WHR3hD1dKFRDMWgv",
  "key41": "5poWfmdvKJbBESuDY7D58nZLKVgR7XPgv6QAhzgJiGpu79yFXGNNr5RFK7EuyJCPbbZfTUcpwLPvvddafJd7jD6w"
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
