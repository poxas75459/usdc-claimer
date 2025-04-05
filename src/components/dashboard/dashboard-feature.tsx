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
    "4XSNPF9CycSxMamaVZgJUxFXYqykrjkuXPufD18p7TsyuRbU7PdYRY4hV8jCyg7ZNKocjgHQ7zfxQf7i81irmunt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T1d7gYp8cHshgmpeQ2AUhu1yCHdVDQkPfdqLA1imzDTVEVnrMRifZersULGrdNsbKxdc7w6BxKcfh54GirD3eMV",
  "key1": "4GW45BBVkx3ccdVELNv72jd8edxfUgPyB5SALq9mzGpeg2gRLZsTWHcz1NYsjHroymo8VuhNGMbLBQG4yt136P6H",
  "key2": "5Q7E3qtdhwbcZMRTVsDyx5PRbCnRbNrvYQSShweyNVEeQt7SgxAt1fdkcZj22NmhSz4eXUPvFd2nxxx4PmN43F2p",
  "key3": "vjaHHTQHdcZ9VftjrT3CRU1ANkzydxWGJoJiddz7zRptzxTx4WAczNhzNQ8p5eUWfzMukkYZwu56KYCRGQ5N3dT",
  "key4": "5tRcCG3ynD4gLgdXnXjJsFjncptBinNz26piuSyUA5Z771zpVqBpAQsbt8nsWbJpvBDjo2h4R7ubrjxG9oq7JfMa",
  "key5": "3EBfkGPTBFuNrfu1vY7QtM1VVTTB3WWq5BxwH2v5ZYSenNRCxJK9VZBcrHicrzpPMi7D67kMbr86uJczPNQwUkLz",
  "key6": "31stw7PjgEdJcQ2qGH428n9KTbqArNPd7dmdbYzaw1B8r8fpAxz78Kj72xaq5ixN3kDNvtkP61EeRskFStbXU5Za",
  "key7": "5uHhQakaK4hcF8GKroCPLSx7WpbF4vjr8xwZJJdwWhMiRx2XZiUN4dpXJ1nSg7Peg1n8ciRHYq37Yk1HffLUUB8U",
  "key8": "QfPnxEALqHVfuz6TWETQUyojJta3DvjhZBxkEckN4Ttf6uiRDMSqfPwR85MNm7oKuZx3TW6dvKMJmCdooHDkvZS",
  "key9": "2fqV8PgFaZFwYtAsHD6csoypXsKftdQfk96GZVUnn1pTXmnqbZgdj8EnbK9Es23PPyS3zoNZbwziYyEVVNBBxTR6",
  "key10": "7yynfBE2wLjDPoP8DzdEw3fiv3KApmLCXfTLGM48MPqpzaqgdbmusdyRiky1NZFfvZrSjLPKD7tLFPRuzg2GLoM",
  "key11": "59pTdWDM24cTMsnZUY5t2UjEJT45Q5cSuLqxAsg32miELvhhwrz8UHGGYRbCKFHwuhevtpPrBNLab3dsXAxcoTQw",
  "key12": "5tbhS1fJhUSJPWzMkxu8xQowmR7njrHqgznDVFktpeay4v8RmER2WSKQHT4JMU8UkkLxEc5G18VDdAWSJypxT9VR",
  "key13": "5VPo4HBejaniE114bwg3DiitsAmQs63dSpPWMBCG2Ra9do9iXL8SzTBf8YHMLzcBs7gqXqrMrhLqmwcC7K3Fo7cM",
  "key14": "4X3bH2aJz6ymThAQV43gwaP2unxyhBiz9Vzoyc967cmPtPPugzcNAYNaTdhwJgSaF42TAxhBwmXaC8s1kkWNwGCK",
  "key15": "2Tfbqy6EYz4ryJ4EFJr4FC5BGzFZTs9TyooRMSHpWcxYvrb28GvLhPuuWyqwsULDMNmUqpJ9ezuzVrHhRbTbMTX1",
  "key16": "4VtddZFv5XXeWAvv6AFPfNd5zVzWSXuEszwrhznHiLoBp3RKVkN1bHREVGiKzUZndCWt1nQSYjbydmpvLWuk3Bzo",
  "key17": "2D2NJQo26xjV1ppvd482dXeXNfuDCqoH77pkVQM3KtuW4oxZH3LtNNf6CELUxv6HRuofUFBLWrF3ViQWjRLyjiEH",
  "key18": "5o5mW1dd73o5bWV3WrTN75Xck97sRuT82LGXJf9pyWcNGQnZEK6UEXzQMTTYWZq5jkvDgEFBEcCBm39d5ALmfziD",
  "key19": "5eWVehwUdLb7Q1BeKGHNSQAGLiSN9uAJBoYXLz1eqad31ZedH934xdtT9RUM7oUmCmuwU5ztwKyFN86LWxDFLEkU",
  "key20": "swR5dNmsFFn7zSML1yMa748P2S6PAZowdnS3paEvnR2NgfujRqTUS8HjNg7sWwH9DN7ppUqUJHUBfQFyvgRcpZr",
  "key21": "2URArVGpDmuVsymFckqyrLp52b6Jso7DtML4jMc7naWpVQcacYqdxDHf1zcf1qa1beRydAzbubWcpD2MGmQ1fBzS",
  "key22": "3GifExhkWjvfJdtNT5LykiaQWPM7hs4Rbtm3CLHcvFzgC4jh1jYqqVZj3Y9BXFxTdw8t4MzLzSEduLkmFK1QcLe8",
  "key23": "5TLrgzZuDJHH1vRuL9RcU18J3yD2yKLczaeZXqjkoVZqyZFGAv7xsGT6oZVP8FBeR5XUZRqEU1qjmht4agHmG39t",
  "key24": "uN1zvt4NRrU1wQGmuWKYprHbgAc8j3DwnGrjeEGtNJN96vZUvQqTbens94mzXxnhJGESreS76VzGXUHW2B9Z6VY",
  "key25": "41i7UMPyFphcbmYZczi9QNYN9WGrdNLdH5bDU43Rmjgr7Qg9KghE8byGFhaV9WVT2hf1VMtYSF1aTX9VGFN82wJX",
  "key26": "3j1qU5jx3RpGX8hmJjH7rqPa4ceZAvwmpgfDHuqcrkS2Ek6jsszq5zbvnof36JcFybC3SL4Y3u7xhEhT5wKQUiTq",
  "key27": "4LNgGeNUDkD2fw95FxWxA6zDv5bGVQkW89Ren3A3TwFXRCjSg5PWvSHq3R5u1YS3uRwvzfzqkg8f2ByhtZ2C7ZVf",
  "key28": "3Vgfe7ZxgGUusNDufMDJmMhw3qD8y64ygfER5ZuAkw42DwY34xpZy8ssKw4xJp6rkxMJYkxX84upyaVtu2fQiSV1",
  "key29": "jpTVuC5hbx6dYdUoqwksUQTBunnVuJhjc8UisH96gvcW5v1EhYgib1QzVxJjbNnWzcLXUtSpPK2QZd4tVtkks68",
  "key30": "5nGg6kP5KVZp256hWdD9D7cwwC1ULqAcZHCrAPnBpWK5q3sWs2yEkqdhHm6dmaxnsnffT1iFfD8CRrKg4AQSipX5",
  "key31": "34t9CGGZ1qTc57CsoQ2fNf3GPh3mfxhyBMZhKW6uakjgRgzN578YF3r5iGJaLe8rm5nA5sWmQUjCFuPsiAETz1dZ",
  "key32": "5vNtPKJkvd2xKRAmgD4iuWRKhBYqce6PFE9NrEQbaDHrEAvATEKRoDZ5wm6etvhHox2vByFZkyALbbJTHtyeZafo",
  "key33": "5iHNJ1NUgkUKvck9Zck4idJA5hiRbQqpmMivQ9T3iqLbA8aa4eiFChPCrnFfyfNDtPxFjvEvLHh27pF1iaubLjxt",
  "key34": "2wgqPcbtMBVQKmYKk36GQdH1jrc1iUTDDsKVUEYeX4uV3vdusWanh3uA66pR8QpyaRP9447WTkHP7xiQnmvWEh6e",
  "key35": "auX6AkVKQAsMbozThJAkCeWJLAouie189MG7TFoJqtGwmYRZDXSnt5y8JMgVvRqVcijm7Q3D5VX3D55zJ9t1Tii",
  "key36": "4MHzHhzJSoazCF5LPhj4ZWhugnjRfsnfTp249JXd2JZGZacS4T2eL2Cfe7rKLZE5B5u5yFvQrk7genvkJQgv1jM9",
  "key37": "crYwYFtm5fk9dTbmkUp1hwEmtSJuZAZncaFTw2ujQw3rMDxqZzHc3B9YtshPtcUFb7dS8EjwdXpSNjYdW3PjK8W",
  "key38": "2kgUtGJRTMoxhjEKv9gzDSifPmCAQgPV5uMcHyLngxDkEr3pEHeHsAjymhMHXBR89VudVaUCkk672Viu5iCeCTV8",
  "key39": "3n9uHYwEF7FM6sRydLYSwHHvNuLX944ZXF4eKFT6yr2haDWoqmDKELGoXLLFna3EFUXrx323B2offWbbLfbrzZqc",
  "key40": "28QLGr3gmF4MjPaKqFMRybQXdGfxwtTkCzw3VzgQfJFDbh8Zareha7eHbKR9WMwsVVELdY1d2goNwh9JQp8QYwda"
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
