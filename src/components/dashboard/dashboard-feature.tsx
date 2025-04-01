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
    "5jELSfoxCTkzAVW7dT35fMvobq1df6C8uBAvLoSXGx89okrsvoiTwPKXcuBvtKWNDAn7dsMMF2qtnubNLZArovHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ui7KYAiFgGifbXdaDpZF7G3xHkuNjKaJmoW8XNTcZpo5VdB85hDeL9kjQGrTrpWjxvJKC28WnjRTCTUp6LmcPz2",
  "key1": "5zvtbh8A2sUux6cHHruX4SmJbnA8aCFSZ7ZHJ3U1zZQSNoD8jPy1uz8aVuS9jPQ8AjYENiDmXfczczvY4KAaKTuJ",
  "key2": "5jA59perabEqjRWB4VrSB1xiAmz1uD6TckZj7BEGy4nar1ykL2MhFNdTjfbGnXGHM9qdz48Y9fqkKLg8numKTfJX",
  "key3": "5oAUiPQ1DFyfEYNoRaDFg8evyu8DpsHjQmUFp2na8uomBxXYDXb2LKT4jB3Sb35UvnBsbwAczjYVyEEf9Q29ycpP",
  "key4": "24yn5dCPPFZJ6zqEAToXbiDZh8R9kgM85toVVtT4Vaubt8KjjnWriXqtc5X2qe2ThxTwLWXuWKFpbWD6qHscKdTQ",
  "key5": "661wMFGkYSMkhFKuUUCX6oVond9CjVCZcxJ2bkgs56v2MtTQVCHP4KyLJzZRb6pcc962Vw64HY2qMmAodskzigb2",
  "key6": "5GWmJob5BYP6dj4jJB92PztHRdqZpZnQPVQG2t1QVa93DEVacHMqjv4si2aiVUVX386uTmcVf5dZ4hjoaNfVN6pc",
  "key7": "57G7d4gP4CBBDKjaTaa4QwFD5ihL1pwybpumi25sZif4ok52D8eTyNFNeGkq1Qn2WfmFuZu1agfghDw95c2K6Np4",
  "key8": "2j1CrmzvcnkzD7b3PqwRNJjidsMKhppK2aKFmZWAYHgYNwKwCdLsy5jp7kTPRgNRHbWNtuvrbg4eBb3agXqVUdY1",
  "key9": "pQMpDRM5s7ZBAbkwXPk1tHCrQwYkTS8Wu7pZPDtiqucKngLx9bw58vDEPMfyu2vZAdDUf3S2dgLPvsXJxF6k8Dn",
  "key10": "4NEKdrbSHBWVPKbWZoU6NGr7apNZNUmwnncRCjyByowynvEDWcu62VjpBWcDcT4ZLLh7aPsdrX6gVXZuksK7rec9",
  "key11": "4e9fTUmAk49BW5cGCKG9WNvT326dC7JCRdYc2KYeqQjKUNf2Rq3ZQKMaZykNv6uHNBeyfG9psXHxZ6amzySGe3ij",
  "key12": "5W3HyDeVNz6R5uUxZmY22knMSzyFpnESwY9Fkt4PpyDjBLgtSaqFP6irr3MPkT5bWkPLLBUahVaUDHG2ThH2mNvs",
  "key13": "4RcfsdommezFiSR1NvGr4MQPGvPAqsoraYKCYB6qvxvGHTiEhfHduo3FhYpKuKVeXtZT9rtxZdBUj3Nc7Qf9WiG1",
  "key14": "2FctMYqQqZdNopiLXSRRezts9uzow4Ao39uny8JA2byqouUQZuExsUUzuMX8rG62d3HuksRYY8Ms94ZKwTVztuKP",
  "key15": "5LDWSbJzj6C6V8nvHxyTUGDV1fkFCbXn2UZtdtWLiGqWDW2CwyLTiYR7HP5iP3YF6oMrrGbdP7BXn4UeyyuKiYyL",
  "key16": "4ti2agLCXRS7ou9fps7fMZBLvyb4kr8kRdWZsyc42paCXQXwWDSS9nSN9HBmUCLir2KoxgC7vyrAWikk2puYm6io",
  "key17": "37WEDB2RPkTr4mAKnvFdcTBe3GdYKK6uro12n2dPoZy3fwesBuaAgMJLoGpmU7bgBYY59v7dWML6aUtsMj9QCsez",
  "key18": "WmmC5ab9FYrDSTHyTHWLiS4NvS3PX6CvMs3LTyRaqdFdQabmaEQj4r5goGBmVss1XGprNQ1WpizbjVjjTGHksbs",
  "key19": "4NV6AvcyrCgLGxQwq4vN5QbETnV4UE6LUfrrqhDLAWrUrQyNtVQTFuPUWshfVUXd65zMQcz9vDvbmutBzP96dhBW",
  "key20": "5XbxTsUchvJkHxWiq8jJdsWMJaVd9F2YkmnmEi3WQQrwoavr6k5nxgF1HLq9afGsxaCGWxidG11rw8CBmrzBo6rm",
  "key21": "i2WW5DU3CiFmmVRHUhqscPHjeq8hbqLKV4xJNroT8NS9Jr8vG1nKwAh5s3obW5THMgxx5rnpF9nMFrWdt47mVEo",
  "key22": "3tckqVrNzWCqixPxohzKvUP8bidfwCZAZajwRcBmMbh9xzsCzWBWhRYZA4D9qBzjbhQee44mRiJjqurkWGhi1KwW",
  "key23": "39bVKKMohQ4MFEg6vava1HzeRnimUCq8VN84Qg1VaQ82pqQrrKg25Rs8M7RoSjZcszJ8pKWkjeqm68GdJtKVgwJZ",
  "key24": "4HhEABoBBcc3KDEKoZFqs47rimmyBuYyCLcaPTtC5fK4S6h6bXL5MZdQPvdHmKhP1Cmo2XvLcQK4ZV2PicxDv2pL",
  "key25": "39gK2BKb5ekqrad3R87umZtoQAjGznfdAsA7uofHFx6j4fEyZJCm8rXHZzTh9k3B8ZvVNuKJkEbvwy6sQZCeLAQ7",
  "key26": "dgAHfQP4qZPnDeVkJNsd7gkkoC4HaQD6TtQ5S3LaeWQXvnzWDCBDyMCeZP5ZraJvTYt6JekF2kkM6muE11Hd8Rn",
  "key27": "DwWDPeEJSCAQtL5kFHn7YYyafLPeCo5aAoDnkmRGAksXKPiafCn5U1YfqB65F2EDUwHuy6AQVwG3F44ifxwvXwT",
  "key28": "3YEUXsNo2q3wbVohEmgUssCynQoE2jWYACg98BGUp4gjprSfS4u9dBFbPNbLCTUxwkeXKkArdwDBk5R5HaxKTU7V",
  "key29": "24nRvpahyzaY8pHLFx1PRA5UFRGhQKbPVpKBeLE5JTzoFt7BrF8X7Av4VMk6R1Gc1FzFB8LZYpCRQUxqR82mGfdp",
  "key30": "4ZkEdd6kEGfTbYN2B79KDprKHgD3F93LPW2cBMmfjGRw5YCLZND5QymDf8PkKpVZexK7q8Vu8Fs8y5pp4BMcwQkd",
  "key31": "2BrbAEwuBW7Kjw12dSeQztZW4vKpgHW92R2vaw7h7KJi5sBpH6SVVM35xS4LkEtk6eHZhqViHrETm516fkpfTUPn",
  "key32": "2KKLuj3dZvQz4G5tu8xLaf4ySDAYwRrz6EmK2c9rVrRUjMRmcNTzeP5Mia7r1ZJDh39rtSZwN6PaZeVKs6Fv2gk4",
  "key33": "5d5wYDa5N3bj9th4A8yV969V1khMobHdtgwroc8NgymeidH6AxdcRyjU5GvYZrzbpdvgJYwbb7bxfQchLpSZuxLC",
  "key34": "4qEy6G5sGhGQUEakVKHF1E2VyCjkacaGFzUoeGRDs2UnJEmbnnrTEbf6E6Pzq591XB9MH1UN78aMpiZHFTUvwstH",
  "key35": "5V5B59NVUJ9izD3q7ZozuDyPXMSqrakiT61SJFrUJLPSQnX7y9Z9CCEgp17He7QdGYT7vvz32Z4JoZDbSaVh5nnb",
  "key36": "2Gg2X6qPQ5Awe9oMPoof9n6pRahzbPeAmh3PeTKXp918hpZ3uV9tWp1rW7Rv3k64hJNTseMyFnt4urrXRz93iNLL"
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
