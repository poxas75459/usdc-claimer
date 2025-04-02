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
    "2CoQc4mA4V7oQ478dqYCSjTwH1C2U8PwdLXn3nDpp9TwL6Pou2uMLjHbMXBNfKRTfamWaJtQxeXMRC68TDNy8Bb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L7Q5Up3wFfTzEaDjp1KXmpkodL9f1vM1iqpn8npwVsDUSZaZ6HrqxqPaoUYU1aeCkdfKq6M3tGYSKRgPWnTU5uy",
  "key1": "5cTRHsoULgExx7qckoRZJfDMTZ8W1eTtZuqfNn4Xxiu3XG9fceNDV7ukZRusTysyh2sUfAhZMMy8wcz7AWtodLRY",
  "key2": "4pu57rFFe2wQeKWP6tuncShtyHhMxNHFSEWDZCHi2c5FKcdZuiToK8unJ1hwtag4dMn5EioQ8UHp6JVyN88869uB",
  "key3": "2bgfHACD2cac4t69Xfd4v7ab6ejRraVQmiZytzvNdYd5TtbaYA3my4wKUAKswRb6e71aXfuwHLZCE5rjrefCqXY1",
  "key4": "5Uo85noiAb31E52nhuXAhGYF9vttdZFDagrcoqenrgQAx6LntLT4hrV4u3CUmjdLeRVhdJjC2bERNBG31HB69RvZ",
  "key5": "39Je6VhK4PEVpbktyLWvgw51nnfTsox1P91ihCffQRyFApJ3kiVBtyvBqunfvtC9Ndqrp4ThZEfcEZKxA2kCdMsS",
  "key6": "35ivf72jKo9RLnUXeowTsGzF5aK92o4fYHKZstmHbvgLY75xkg9Etma6KnGCr2eLKJaChyhsgu9yFeX3gUeSmrkb",
  "key7": "5m6HDMrQQW3v5mmMaLLZf5pEBF7yuobPRk2zVo9tnLdiziPjPQDsChVCJ78hLK9EM6cdUZJnHAov4PMEY6sZaCq8",
  "key8": "4XtuAxqBnvTiCnRN4e8pnGEg93sBeY7v7Rzy1e54sQ2gaVb8Us9hZZC1d4v8jgMnewuLGZpX5tbTF3bDgANBtwGc",
  "key9": "5Smocbi2px51sgaiB4hS2g25HvVUJvNeqwJwfSa8yJDTzLXCpSRsRJzZ6zwbg93XC3uaoJjNDE8KoS1U1aaTVhJV",
  "key10": "4JSuDXJ3ozJQ2KMEbVHGEn3ekSUKpGXCDwSAzsor9xwCT7dxQvf34QgdnSS5ATcapjQoKtpU5CCns3kqiPFrXNHd",
  "key11": "3ZyuebYYn2nbZRioqqtx7j9RmWBSoBraAVHvrSzdQLxHVLtPuTMJxhDkLdQZcU424yeTG5wZi4PnHN1mT7bU6Cqt",
  "key12": "3JpUJWHny5RFu3wdxJHGihCLx52kr6ArQBR5nN4328EAUW5JasfC1mmXyPKRVXeBBGavcPK83rLAA7Ka1JyHuHu6",
  "key13": "5YaLbS7JKL1FJPAsyHHfKsyodiCtoGc6cfvNWGKEUPZVdq4oMXiv6XMJPARervPLzvL97FbLrDJZHFM8FFakS1NG",
  "key14": "29858R81eeRDJzfoqZwdDYexumVTbK34xjVzF7YCBNeiCkLYK1hYymktcvBphMXHjQC4g6snmfRvgNbc7oiGpPNv",
  "key15": "Dp1HsbDsAdCZGruSAoJBP4CnT2GBYLKHgSRgx75g2QeXVpch8AntLvhFkNSwLs3kebeiYavtSR3eMfGTxknyXCF",
  "key16": "RgCXZgCmVhNJbbe1VnEKUZeCZu5MedrzAU91wGfuot9jdppcd3ZRPyx8hHxVPKX1Xv35wi1rM7yHHtEjmD82Ejt",
  "key17": "5QEty1mYQ5oypzzLnCdhvzPJV3qSuc3TtiNVPMvaYyaZvWFBt6J6UXXWE3CeBV8iGmh8QXumf4Qp9CVZfgQN4xF2",
  "key18": "2KvEZYKhj8wz1pv4KsvYa8Pd3sJrcd4W4CCrtPqRxgG6aUfotS9kJXJVyxRcMt9gnaqZgjkFUo1g4AX4B3ALPe53",
  "key19": "UQDt7NLvo4cHzBM7ikLdbT6VDbQAK8TDx6rJ7yaevN56ZRHU8VHQd7UEBqETVXM9FfhMiQ75ixTfEAJKqqPjs97",
  "key20": "441XS4CVRRXSz7CrC49y177TJjz1UJ9WusZQhgX5dBieUDqztkz8GYvVgNKn5JuFhAw5UqFALRGz69ksSt8K9j9g",
  "key21": "2Tv8Nuw8iXWQzDvDKstwbJPTUuRmaKqGGGtbQuU3Gkk1BGVSgVx8P5d7SvVLag6EVPXnERdXpU4pD6S2aS4EcMQe",
  "key22": "5ZcA2wpaPEmXaBLB2t7ypFZpD62Dkr7UWAbdrzug8EaD9ccEt6s2TcBiY8V7xsU8N82Yupm3qZZ99bwHQG54c6E9",
  "key23": "2xFrUWMFxQDQ67RVSsZB9dzTKENpbt16CEChNu8dCwiEu6njmQqG79aCpwwAM7NNkezhuyCV813zRHnHd9fycn1w",
  "key24": "3SfukG7Cghc8bVcMzPvqYh1rMoMqypkKwPHnJwfASJvPXwosYTYvG4ssXUQdHu4UEQccwNVbEyzoJonXyAZEbLrq",
  "key25": "57sHHJcqV4XRyKqBQoKN9tFJkuhc3ZXYkSyiY9Qhjs7zwpVQs37e1qtUy2RL3HD51ps665nRow8TB54BcPPxhnRc",
  "key26": "2dvGXF2EKorPHx9JHbWTrBrfALXakcihK6dhC4TZCCRihJoFQY9qhhqYzrShpwiTzsFy8cssiZwjbrVMp2ErMti6",
  "key27": "izPmwSbtuffXkvMcKzGAvLeAccKZmLk1JAP62TcHB1hJgTSRvV97GYLjFu8pq6Yns3CBUBrh6HSC7CDdP5NQrwT",
  "key28": "4ymfyESEUTAyUtTB8B8oRV5XUyC67q9rZKoXsnBNzUDHYi1AE8tWkenK4SVFkbpiQtd19n4C6wfvNA8C9o8AvXgC",
  "key29": "26cs8qjJfvPfsiK2jZ6GnmxSjiiJSVKKothXvFigQidZPmfLFiPanm9rhFCB7G7TVvJzn3RXyJ6RUMSHQmSSeNEg",
  "key30": "4BmkRkMmugrY3bTVgS5sw4LenZxrpXKZsuwsXqEx3UNz8ELD5NVxvSoxdw6nx5ca96uerxi2RadPtqP99o44mcqC",
  "key31": "21jGfYoc4xZgfPdN3Z4YeX5hhC5J4t72tKXXD1JepupV8B1647K46233PRsxZwuKm4fAV5UBDxk5m3M8V2hJVnjr",
  "key32": "3dX78V3y5oekEH69RPxxC7R7wPWQrvPYByVieYq3efRcmihVss7SK8hYgGD5TupBg72Ws9hreTXRu7Jn8p1wfyqP"
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
