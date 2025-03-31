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
    "5RwTNVFFngB78uCz84kjFFpsLpcAaTCjQ3djh68bEz3uz97QSS8LrZBQ4QN8uvBLbTRbYZ6fMWVrQEpu7hqNRuGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UzpRShFHLZueMzrPjq7hTEyrnQw75E7Lh4B5xAub71Ruqhs6tcMq3JeWv2cjqnB8mAPw91RqGdDGsLXQwiPEwDV",
  "key1": "3dWhMNDSuyeXpfHtBMf2xbfw5Qz1gmibjzpBwTY6KdATzFrLdb1HCHB67oRbmLVdTiWCZF5JvTSB24D1J1wfTFs8",
  "key2": "3f9HruiUpTvsYJ2Cy97LLFwm45EK4zB9QGXLrZn4QS59cMw4FDQLtgz9zoiDc61sZvXosqPpAeWFbwa1beFVztSM",
  "key3": "4ZPjfMNXzLN3FSwr3oeEYFeZmpXAFTdKV6MVpbcDSvSegPnW9diu9vEGLK2uVL8uhu8yJ6GZBwPUH8CkTh4faoE2",
  "key4": "2uAWGw788fQ9HFmQ8Ho4ujzXM6t4UNBgeam4QBtyGb8oaAeRWFxNLPuxuKhP27p4UK2f2PiEVXLvok2D5qGxWjqq",
  "key5": "5T5NigqCykHcTgKPuLFC566eNKEGjJFusYEZvRtvafbypFV3RQGDzLumu8DpRhzVH5DysjpgzQtbLy5oWfWWfiYA",
  "key6": "2ZJU88WCAANrRLM4p1YAStMacgswUmb28aaTToEtD5h316AXa3HRgwszyivGiSftFfrfaim4ZYtPZCc9g9NSShaY",
  "key7": "5GfQNxPnmvG4G8paAAWBDXgzyboQGVGQuUHmndwET2oLchEvinqiJvsqW71YS5bakPprdXD253PGEKTVfcoc4jak",
  "key8": "4D9qQy7pXobzatM6hFKysr4PQZM2gyTbJR339TGGKfEpXd9FyeKKXcX67S3p8aknpqFUK4McjdKFxEiwqpoDR9Fd",
  "key9": "65zqnaKboLovTWbXheNhvDTwGKxMTm7TRgR4eUP3Y4S3tA7438XUpxnCRBkKn5vrzs5kgC4goFjWwcZHH2RDQFVj",
  "key10": "61F1QmfM2sEzzp8s7Nk33mysqwD1oiNAaRPdRw5VS4QM6iEPuVSrdreQwCYnna2K15AoYYKahj9Y8BEx9BPXR3qy",
  "key11": "TVa4BtcE1PeNFWAicvpQjrBrnNrJW5yU6K5nqZSApaZ3Qr2bHPA7UJjcykMbAQe1Mwi6Q4gqFMnN6HwxCjq7cWe",
  "key12": "5ek5B5GLiMA6qimYpk6vMwurbeCbKXo3WR5Jkowvj575DVNxsy7T7HXCHtkoqU7mz2ZHZmxNYnJ7BxoABHxvirCc",
  "key13": "mDcNqSmvw6tRdCpsh742ZP6aszsVdceLtRQTB8V8zmcsH5A8PjkSxEtoMwKxs2nceg5YdvCNHnvJSpzMTh8JjUK",
  "key14": "45zHXwZ5PfL6Uez7VzZz1G67spAH8tivYmBxMwbMstqoAU9zXLWYqJKv9C8K9cv6ZPQk9MYpRFVMiAQTQmvYMZXE",
  "key15": "31k3kJb6MAPXDD3sBFPiUL3P8LPJdvjEzARvoMsshQybyHMTCKFxYbJs7thb4EQXzfVnFkBAdJTWWyw3FeVyA54U",
  "key16": "3ZSsvzNpKyZ7HkvrWGZFJDQF3T3uEqLsTkhvVAjKrBXNXCHxzyuTooTBPAxPAUtsFfxR7yteDAe3egL8mKh95YwC",
  "key17": "2LYpfLqzGjvrnNx21gSGtrzDShS9hpt7HefG8RMU3Gd8CSGx7tkEdAZ8g8nKLe1kQp2PgijvZ5K95NBDM4oe478Z",
  "key18": "3ULxKBYjLpLLh8CuyehBuN3v75gW1wFm6K56kpv6ehDdroDTx61CE2kxEVLS8NnPufNygmjW8qH1WrjxpHkUSJLB",
  "key19": "3Cddw9xvenZJa2r93vzFRNjFnuXwKpk29mrExPSKmARn7w9nELVCNs7a2x7k3Gc2FwNACJSA7EDmGEvFJ5MiKEEV",
  "key20": "66b7QbQnEQpQTMSqCPyVqoZVvbDWZasBXoc5BMwZAGArAZ6xKuwMz1WsKexLUiSTCcCN6fLZruoyRTWs3eXkmujb",
  "key21": "mDhZJdBCRrtCW1TwJ1e6rURwMwmie2EXDyK6PhxcfX7d35FYwzrgjigbR8GHACZzyS1xfWzAQ5WYowTuAuVL3PA",
  "key22": "4JcQ5RoS3UEopUGh7gMTXczwH7sLcqoNFi5ekUBf27LqY81fZPx5w6iVAmv13TGvXn4p51b2tX1UsbfHD8gaCDVe",
  "key23": "4R1Ki4ERamunZvFmxy1TLC5DK6hXTc9PoFgQa9oe2Gyh2CYRf6yxss1LG1QYAKVnkRcmis3sYaR2tiXGmy3ebg7z",
  "key24": "54bGTY5zukTSsLz9e2wuPEWjW8B4YDdp3PhyC6Nm1k3QFSnvxvjm5ZpmTC6wbuXmDJ7At7Nyzgq4XpZ9JecGS2a8",
  "key25": "21VNkyvhE2YHoMU94ZHSZUAy8RXzShJKxra38BWZWjYn8trs1B4LQtc4KjMtj2gK33Hp6jBfRHT39TEMykSrkKyJ"
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
