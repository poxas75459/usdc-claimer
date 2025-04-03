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
    "xPcbu3ir2pKDjfSdoe5MGFXGpmMVccgdq2irHmXAB2q2KtibXoqfBqid1YMHANtxipogfhG8aNzANRpacNyGVqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QcFXov5UwPUs12a1cpr8kGopUEdzWgPA4fVwUvXFqPSnbcL579ZjUs2JzaC9oz8Fjn1Uh9zW1dtv23mDoR3Wx8U",
  "key1": "2w19HjwjxJuSDM93NnLABT2xrCpw8g6deJhUFLtpESK7khRbqXmYfUjbgM8YsSCCQYNM78ZuCqiRr7YEeEECf8k3",
  "key2": "3ZxC6VSxbjjnH98iaknXa113mJh6pBFmLD3YfHdnVistmfvaZRe3S3geFoevwpgkcfEFxCpj37vNnDKDCYrb1Gmx",
  "key3": "2kFoVCUB9ycEmuc8ymZLTR3JwaZo5ZZdMPEgHBwBLjydJJ1ejc6W1FbpZDogVhnqHfcGU7dX2nJhkh9dFVuJEJbK",
  "key4": "53WvNdGZHiu67Zrq7un2jVMyYwoM1oRULGjsZjMR6uq43BFbT8GjbRbomzLQAio9oNNg97cpQocB9oTP7hzjNEwk",
  "key5": "48cKUi2apmidL6esCEbhwz3Y6PL4NwgvL2iGJVePXjyC9FNdfiivCkYbrmHwAffGMVbCF6ad2LxUvViNZSqccDok",
  "key6": "4bdHPhPnnDXUZQuok3kPmxLd58Q6Trv2sZBe6ZdKccEUV4HD1U6imRWGLTjqdD6Z5GyYEYoKh8LQZHtfRDhC6bEL",
  "key7": "4an41475cnZ1rG9KRxef9zi7R2kdBj1viDgL5tf1mcFpSog9MhELBewjQDHktoPCmDLKyWgt7C2e5XdjjYLnN6xm",
  "key8": "L16c53u6yyyptNhxwF7cFBs5oVeCrYRcK4Lih25NuMd9QEqtEFH8JhN33DR4Wsbd3DNPS4t9HN4iJ9EJbSKMpFf",
  "key9": "ALaiSFLPe4UGJmJHpYMmFpgnpv7aJwSiAFCqHoCKjAgJjbAbTUFdBwwVcBUSYYHbq99LoWWsqKZAyNCtHwafKzY",
  "key10": "4kTFkh6fJ2ZUbobqfnjrp5MicHnEXEQd7QFieBXVyM27Wmdmx1HreSp3GWy1aZGNzLYto9hSH6rthDPKG3Xh8euV",
  "key11": "3Ty63CZMHetCnubqTSyau6aZih1AYZusVwweQ46S8RNLN1u198bYeeW8jPtEi8vY6rtAKA7s1KDQ3SmZUj6T6oUS",
  "key12": "3UNHzNmc85YgEAZ2FLpMES2ARMSeeEHKtHgziFEhpBstApUvAydYbXC5HBJxRzEZHh2qdYcMco5Ps8uWFZTBbNXZ",
  "key13": "cNyfYqJTEuvq5DmNeX9ikYPccE4w9TcDY7PsEDFSrWZbTpBXeoe6HNCaPLrYwPmSysnuioBkRGw2AuT1WUU8iXA",
  "key14": "2ZTAxRrFxBk2sawQ3CixoaDTFzi8V3oXUb3NzvfxuJAZGFEL8CQMS9miLbRdd533mNosgsgReYBjhVAtvcmAsVfy",
  "key15": "5BK8cLqRnwybSFaZZTuW7JsFNm3jPRfPAGvhMSiwKjf972jDzqKGppoNkDWPK9qtEFUH2DuoDWWEtuRvEiQ4r8D7",
  "key16": "7dkJNXyk9PiZps1CZ6EtoULGcpwxcvV5JnzaD789ZeSL8XoqFqENK6UdUMKk784FnB1LkKkgsYFw6RqwG47dUPy",
  "key17": "4TS9zgJZ5JGhpsXY59YqpkjwHRiy3JkZBcWVATN5SzRPZSJ3SLYTNPNq1yCNLe1o1gt89uuJtp8kBXv6RTHLPR6b",
  "key18": "2Tms3wGqdBcfVdZnUPVs37rTi3f27Be2bePHRkhSN1b3EfB83wBQrcrLCGyQxDAVNbVD2jn8jfxJ4wEpuF9cc6Kn",
  "key19": "4aVoTTmPEnf7sUf3tee5t5n33cVyUpZzjw7JxYvjMGLXDs6xpYQrcddotMEcFSJgFik637fyWq4weiKSAXoRi9BW",
  "key20": "5xxqCwP46f6Rvp9GRMJYxTQ5MU8U7pzh7kmiHGFsjasJaS99KpRKDbfexv3hKiQruCMSGFqYFAKLHGmTVgW72Hhb",
  "key21": "3a6VzTayMSKt9DZ9sVDK6i2zPnpM5GUtDZJbKXtQzCFVCQeMFkNL1K5tnXtvTRmGqB92PxX71d9sU7gkNHNPaWMG",
  "key22": "2sGvupq4JwWCtDEDXMfh2WkemAYJPCk3XJ86igUprffEcbw5hpdcPCvCDgDJCHb2QETqYVg6qD1stUSQpLSrq8ff",
  "key23": "2ZR7k6EUYEPRpNTAsqqXnwMHnwtZmPfdNEMJmBmo7UUehb8dM4Nn8HZsR8MSoraamF6RWkjtkECv8MzNoMDqzmna",
  "key24": "2HD6KqVjpCGpfotrxpjihjGWD2HfazYGB3huTrfwXT5nruWog3HN5jqNP9ivzRtXssnkv9JqY4sgLgQe1aJ7M5Bv",
  "key25": "5bAoQcM8JwHioMfMQtcRzJRciGAdDTN3TQ4mVh2CT8cfuGivFKjdA9XaSCgWYx54Ew3TSX6t1EYHmLuG48LA9An",
  "key26": "51Zna8jK2rfM5EjcVqV3tXNv2hTte68oTBsDWdJ5nwkEFgpfxSjnxPwnzEP6cw8evsAZNTfhZ1QDeiAthXnNHCmu",
  "key27": "wMWczEM3EsQbmxVxAzJgR1HseGor5bf5ifVpMh19N7exyCybXHgsqhLcLeFRTPbyDxjPz1nTNXXSax59UF4HJqX",
  "key28": "44yjutbDVP98f911TbyEtNacJZNDz4AUqrPemADmyqDLNQU8GmkWm78YgjUSdcjtFWMf7v7AFvW4h2uLyjmKm8SD",
  "key29": "2JWWmTeXYy3ztRiTsC5Hd2HCJgqcKy8yhbAB9HZFyv66GhcVUPsqrPvsPb6Z85B25ZefjB7XbQ2NB4EauJERdm9i",
  "key30": "5EJkQotxN4kahxRXF3PN6fwmdfPfEnFu24pFBr7VbWuEwofTgTqEnF25TDN4gzdb9qvd7iGtuQjwXiwcHtPkSUjp",
  "key31": "4HW1sbrXgu8LKA3nH8CckCaiF6ZtNc5HrMESVp5zFWM1WqNA5VhybNeLbPBHxaLi2CdoQ9WmmDVVy1RtioFinBuY",
  "key32": "4krwfRsmhgDWzWBRhMnEF9wLaoANTSHWF2rNNVMieYCtLAAAZELVW6wWzBZG7nyz5FXX9xwF46tEEcd3a238ac56",
  "key33": "2vH2we5VNF9b6wSkPxu48Z6ZAcLrhmgZ7VZBgm28hEch9LpSXuVj6q8TQgS6tpMZKaZgJKcFkBPVsh1YnE8TE4L",
  "key34": "24pZdUzzDtBxeUCXrjFEam1ja6jKP6m1DaKdfCgcjtm5uhpBeCbkm5gxQtVBJdSPCRmZahCpnrVNJsCJd5wCspWE",
  "key35": "2VtbhwmEueoSrJKTmS6AiQn5CRr1gvJyxEwQ5uL2y8BXKSfzUS4RTpHJQsFVDGw3pswE1DWoRCCo5AVQxfVMiCMQ",
  "key36": "2BYfdoR1GB5W5A41K1fxnd2U4MoqhKmXm7FwR4hoHnpdZRr56nQRUPW8pwBdA9VPenXGRvgnVp5292nPfsSUQkPH",
  "key37": "4bitfSJAM9RabAow4jP9hT5UcGzCensSViPQKwhYjzLPsPvezLoqzmEDMWCYp2DQZWiGxwCWrunApoLw1Dt9tCXk",
  "key38": "3GtoCEVQoFT7VHu3fXMarX4GXhGsBpFeJFgarpEaMBC9zhNeT1tb5rCR7niPReVwcjCJoAV8idX4TxAgK1LQ77Nj",
  "key39": "5VVWBcqhBepwhwrjfMAjAzyp6BKdLEcp5HMG49Dub4q9SnZV2k9mBvo2FFwLN6rXeyQ1HPZS4eWyBYYLhkTziYXF",
  "key40": "545t9d5xSX9PNjrDwteu7jkMuMBFZFvng5G7LPz3pw2yRjPvZTmWhCB1EKQbvoSY5zk4HfKFEc1UUdmymkzhjyh3",
  "key41": "vomUcLSuFw2YEwjYXENzYfLwH61uqtf7PfibBAnaoM2hyTv49zM43CFCC99EChWkyZn4vZFmcvdo8JAbBi1hPyN",
  "key42": "42FCThWU4aRFbszjL96Zwy6Ueh3Mw3A9DPn3zo6VJ35w5CrvVyno7yETiNkLDM65WNa7gy5rWvUKG9mBDWnhzRnj",
  "key43": "3brrsFyKNr1BtbT8Ls5wghRGESv1XEJZuriVYGECLjKeAbFT4dd1Jg8CvkjQqXS14qJMhiRMoJMRLuTTLdV2wQkT",
  "key44": "2FLwPYJ2rTDuMBdbP5PE8o8LvH111VRJLrgX4dy9XYALbjSsujfhdN6XaGyXsFLMaQ9JjFaA7ueQ7jwnNm1phvjG"
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
