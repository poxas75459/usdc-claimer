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
    "3qXdNhEP7jsx49nZDh3uiJC3SvYfyN79f7p7jiopkkpYexTXfZ6kTYdmSe8eFLjbNHkcQdJUSsBwbkFcCbQ2nUX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5epJjv5PGRTEwf6YtbsCo3djgGLeEMLu7QTDbnJSLbTstod4T2CiozpL5pPN41pDjPF55omrnggpzoLb27wPsrRY",
  "key1": "4J9yDukCLip9XRrXeJRCd2cRcnnzUq2seodVf3AAgRYg6BWz25x4p2rBiYYJQNtpuD4ejEm89jBLWPJDi47EVguf",
  "key2": "3m3Xh2v6sRW6yFd4YFRtqkcSU1ffgPDN9npfZtaXG1KQ2qSGnXxx8BhfyGNpPMcwwQ7WhMYAxyyGeXA7zqMRKwvF",
  "key3": "4UFXeowQuAbiynBcjfWp1pQ77XDrmmVqV4nfASqJJKY4zMGhUMtxQcUdccdjaeHj6QYtuznyDupdw3gaj7APher8",
  "key4": "3Ckf3np8p35aeWibafoVdSRFJSZVzgZcJtPfuETD7GD9dhANeWjUHLBo2vSpkZnjhHafKm1KoRmLhbfupnQf3TvE",
  "key5": "5G4KccmNbX2r4d6Ciw9MUMhrZLFZW2t17WNgvmcnTV9eZRxus9bdoF6oGGS4vove42F59MTpsF4xMzpBvZ1PpisU",
  "key6": "47CFq8KjGDm6tq6fTYm9wbyAgbSRF6gJ8x5AZ9f2QJHUY5fxDsr5RqLNi4NiYNGsytG4GtLgbsWrUuoJPoim7Zex",
  "key7": "3t8Be7J1mmNFQUV8MdfRDwBGLDeivyehu8HP18C5nuF5pKKJ1F97GHPgLgHHY6sCzaHBnLkzhr8UVDSDPMTaor5Y",
  "key8": "5hixaXpWSNnFDRUVZUzaQ5GP1NML11qSecfGAfFTma1spG2bWvxJ2mLaS67Kdo1DsWQ7F6Ctq4vgfg6rgsjobKfY",
  "key9": "39tY64kbA2b4uVPKqhvkqW6fiF4FejiJtc3BUvkQExzLKipBkBVbDbs8VoUxsbypmfvW1uCpvri2ufJQfBWzs3LE",
  "key10": "qeCyopvJeTicACSUbsXQGz2StQdmKjkXvtnhgPai179qGVQ5VoNosgJbqebzSCo8dviVfsSiGkMfW2XMWmCvrrx",
  "key11": "2AKxb3kMychqk354yFZfDu4kmSD9PBtZGJkUtFd4ZoWKzVCy7aaCRGQUAEbBxtB9zmKGbzoFQP84nFTsYx2FRSVz",
  "key12": "3y9pcFwZ2GxhAJFugKVb3KodPpksGki8e5n1cfGS4obD9a4rKvG4SNXXKPoUf4qvKej7jatv3uzQCPcR6Vv1iL22",
  "key13": "3PFxvcgzVjU1SiwvGdhNApzTjfmFXR4iwzGqBrLLQj2PjDipxKpPWVXnCkjWb6aEJTxAgRxpYowaSSuAkKsGoRSe",
  "key14": "5rJixggzDcW6XSghs29ijyc2GVkA3kZWFnriKhcDFbRJjgpuKmnUzSzBP7decLQH7PwaQRoJXMLmy853EyZhujD6",
  "key15": "5bbBRBEHWd8Kp6GgRC8YnNmBZcSzHPLgfAUBimayK4mCtoE4RE5P9vkyamRaBNbjq1SQ7Seot2qfRwudLpiDgcce",
  "key16": "4egDRo1jqJiKasv2fcRxn7uiahUx6aeRQCi28RHw7XQmBJRB6t16MUF21Kte1MprtUpqifQhNcoWenYoQNy1gagQ",
  "key17": "5ZsdZMNNmABswG4W2obYg2sD4bwd8USYicEd4AdFVfc3wh8ArMf3B2FFHk7EyQ7daHcwzDWdKWgWdeMLvjuLRhjH",
  "key18": "fKQZAV1nkwzehhqod36ai6qp9zhsLcvA8UprJux2AsTWqDry9vpw4eBTYk81ts1si7yFyHCuN1kqynPvVCXYY5K",
  "key19": "2x8Xvgg5eBYAGjFmLgKvjnDPhJX5nZf6XCABgEQ3VuyWGcdDHwVgmgonyfSLivuMQPf6sAAKZi8r8tsNoBC1DwMu",
  "key20": "BvBpA14RiXL1HFbSgTgbSxjVVNt2PjcNt7SGUUbxYqZg1R8bfnLXyxNRWtgvyQ47bWH7F2jEeKeYpEaGCUTaTYC",
  "key21": "3KK4YUuDQ6CCdqY6QQ3sXpMGdNZRs2L5NXBvWsmmJpbK42chFgqjYu1ugLrJURtcu5EPey97rzYiqVT7imwTrsbK",
  "key22": "4f2Bs5U4gi8dTUeQMNw7k738hmYXPEFHzKWe3iK5VGpfafCSvrM6aC2CFfpNv67AdgDtdouLuMPB8EhXMopZmenk",
  "key23": "2rgsFP6csyWEbRu57W7nebrpxKpFrERZMeLcSx5Msqp4ovDDYaqZtX8iRLnNb9RjUf6q1F2DfvYhKPYkvriErRjs",
  "key24": "2bLXrHwzbf7BDQSYx7DcMLD75FhJAa64JMegtLPF7zCGamoyPQ4nTm7ouSa7k5oFHETKqHK4JgMt9cU8pLKMVexh",
  "key25": "5QfAdee4QwZTgJMcsPKnuqfBUSWZbCyTv4moMH5xzqUGA18feFYqZPxQypB4TRATkmtQApqNGgxpBtpgFHydd2Jv",
  "key26": "tqFAFYr8thTognVEmdDit4b3rmkdyr6YuVdsTWiwfV3kvFCPEoMaXNF1T6Rc4pGC58915BofGg8mCqXqbzqiwYw",
  "key27": "3mL3pf8REE7rMCmm9LJF56hdm2kwKsSjCbbUJybWfu75suQ92mL9T8NJtFfSUiUANDxT5agz47MCpjnRmBBs19kN",
  "key28": "4ffwMm2YVjBYkL2vqxhdEgiYAMsxdfZoruSPfi92uHr7ny5eemXLjmNcuYbpAahwkcpxJmP9V1W6X9JKhzreCF55",
  "key29": "3Pm1pkNhRe4YoXBbwBjQLcCFzvsagvMMRzeJsPVoF7S9ByrG3aYp92wDzQ3S6fEtgG2FSHNPSCgdEBzrTGW5jfrH",
  "key30": "YTrXwCERWiL1UXvdXdEAEjitLGADrb8mmpQvMbc2qDPKz6dAWgUmfL8UEb8eLzYevvREE2tWxvUxjVZBhL7Z4n7",
  "key31": "4LwvJK6k7sqGFzLoDuBF7A7hbB8EP2zsjPJrmiM95DKDGhi8Rw7o5GxT3ZcAWcWWwrUiEmLm5SgyVDHedLTTht3v",
  "key32": "5xqg7QXCn4328QjdPZbHFDDqTUCKk6gw2fsfJwhjQqsQAgmNHvj3igPq7idgo5WJxsfcYwNQUsKf3dT9FipzBtWo"
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
