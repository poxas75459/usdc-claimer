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
    "3hWotBPwQZYZG5jabhkxmuobpU3syMr98X2mUcMGx8EvGdRLDd5Vb51WCNK8X26i2bBaPz8Nm1X5PMmebkwGEvbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zn9AHTH8M4qwmp8DZZgnKst5QptpMzf1cbkmzAYaVmjMiT66WsSfLQZbsYqM4iQaFByTCF64DsCfXBuRGwPJER1",
  "key1": "3k2HPXBU4qrdGVx7aM8i1NC24NHHzyozC6kV2z3ZXXEWdSssKhQbvXntvu62XpAyCtAbV7s4X31gB4R1mrXnfXdm",
  "key2": "3vE8UF8DCK24fAMKBb2SWbqAGHzyCa88RW4nVFevJhormW2wU6aQBB59DSJzPjBB4UYZL6HRJrVcNzRRiJdHNeXv",
  "key3": "4zLnaaaX5y3edUAGucpxjnj1n7ujnuKwhxea5yr1pP4eMKPjEcF81jbrbpyq9mgUZLMa9dr6f1kNe8oTXapxdHzG",
  "key4": "3uJhQ5RJLUH9u8gKbpwwqLveP2s766yGBp67ttFiMkKYL6wp5b1fPx5LP5JwqTrA7fVLtsKL2ZJTiBsh4RPmhkjo",
  "key5": "2SxPZdvqrqjYbMgaZQG1ZeBbuna5mSEGsE1BowLmhugWhLB74RWVk1Xx3A3mm1vfrGEpxy9K3rgmcq9ehrMXka1f",
  "key6": "2gZaAGnVrYSxmdiY3nqQEooq3KwMTME5GkTtmQKtKQquyjyFSpnmMHpyZAfkQZ7Lr4KwPQWsbvERHw8MSPnywEP2",
  "key7": "3MtCXPtjpBVXPBJXAMVBWoNQSU8bEdBbKTKiGuuNkMwhGKQvLoTfSZBAmpJhKexRSeCmUpZjyThnRQTkWAj4wca8",
  "key8": "JDuqRfBYdtruzBncvrDZmDSjYpZos1P6LJLy7dJNSoCeMD3DghH5MykxPKuamT5kFmhuE8w3s1PUpPtFQqfRLed",
  "key9": "LYnkxZyodTZBG921rPBCEeLU6kogd9PyJLoQMrsaAJ4NQaDDUJkXp37CfYpssNYxAvFpbjZetj7rY3YXCvLmQrM",
  "key10": "2zDJvXVXCkJ5ii1strKqtq3U7WrPMahPwBPZX9Bdo2hD4jmW8tBJzTE9HtmUabiqCw6pFWpf4FCFGTSnEg7APT9m",
  "key11": "5hhmGjEHqdETEiWuuVtEjzqu7JaeYpnSMaxcE8BETGiU3xWfV3TaiDmwvse8hLc5zLBaFbzPy2CZEPDuaPWG9vB4",
  "key12": "58XVXBwjLxA8tHCchRPb9STyz9kRrG8Z9Zx2DcfDqcbgadp2vGRVLF8fqqyN4RTG2x6uZLcKSLwaiq6ot5JBQX9Q",
  "key13": "4C1zkAbDfKv53NY9jUyYByfiUzHivCZUmMdSXq84DNoyG32RHkBWGeZxZ8orZbpqZF8aeJR11s5BPDmzXQ2AZ3zW",
  "key14": "591TYKRuM1U1Arc8aqiFyAUE8zPCvWgsq31MuzKDYseiEz2iXq3wBnEpS7kXsi2Tno8zKtn81igJcX54PgufMMh4",
  "key15": "5Tbv1KSfNqXZf4ewEdog5ATarCKUffTvX6Y944btbFXW1BhGyfStJEGGAGpPzpBb85ifkuGbyRMBXNsELHaLPhJw",
  "key16": "2K1nFeY2bJ9f2QLCpvMXsq7ZCZ9xrHAzbUYNq2QPZZVDS1SxMqc6KGEViC1nA6gsCzsc9gQEYe5SKuK8U5V6c3LK",
  "key17": "62zcM8YB37LBqYiNWyScyTKWZi2XX2ytU37mEaEoVcC7yUDsG1NoJJPPCKfSdJpEhaUH3ej2A4qKKa2kZjreKEso",
  "key18": "HTxaEJJRqbEqxgACuUkTEv5WvyByhj6xCo3uDCApb2HGawzEBi8VSxVtDqCXQFdsBAZcLq542UndwKZMoKAnzfL",
  "key19": "4yC3HA8BRSvzeNcGSeWamFQfytQAtBCzn6742HbD9PvyqM3JRSXV9JZwDnXVMLK9LCY2B465krBeEQEYcEcuK4K6",
  "key20": "4ZzYrZQUbagdV7yvEpwXL3sZSNBqLRCNka3m6CTbQDVykcsdPf5wjNyNnXVBV1xmRRMCf3oVjEoNdYGpAz12CHZW",
  "key21": "5ddsQzanTP1qKF5ySkJR8kejRb34WehNffGoUG26yMheyjwDAJDoGascZc9XbS4hwT3RvzUixSzdwGXQcAwvCEQp",
  "key22": "vCt3R7HQ4dnyoVRbXqj8L9dhZxav7oezJhGRiQ5aF8xPPbrmpuwyQzjWxqKDo6zLYr5E5V2MJeUAaZ1sfbANjhP",
  "key23": "frN43QQCEfe1VHqFpbAx9XYJFmvv81T1oQwnwQhS7rKG7p5CT5VtsjqL4FzMkWPRHuvsC3k8YMmCi8NRgY6fumg",
  "key24": "42CLknxGatmimK9MXKZFaL7h8HPk9xjGxQ4ZGb9943w1voWoyW81JM3yDUkzPZ7JnDdVANsV36EDrwGq7Wt5ed86",
  "key25": "3Bar2AZa1cUN8HA6uhncSsvM3UrHEfYqyAwFrp92ATSQEnFfKjLDYx9T8KwrkiZRneTLk1sGmGcELmDGdJbUxh2f",
  "key26": "5XUHfgGa2A4zRvwLvmC7DLAR5dReC6Yq741i8EscNXqXkBpzwDgxMNXiVaovuEoiqV2Sjv6DJycmGiG86kmnCd8u",
  "key27": "41NzqnQvMpfnhB5PcSTgtcNmfEDu1KuUb2JLaMeHFeca7mopzBypMpkgxbe6NTH2zuU3svGBw6W6PVTM1sDUSRNt",
  "key28": "4mhyCBQKRMPwbFRpjUMMMLYHJvugiEUuFPw95DmbVdFvVhsKV4YJ7786VqzBVuapgM6AR2p4Kb4sHMvfSP4Hp6rJ",
  "key29": "2SQpjRih77FLkHoXYMyvihVqtpV7LM2WcWJLNsyYkwua897QfKesoZNAqTpLTefxezSVZsiAQ3KFcfYh1CVZnAeB",
  "key30": "4e6P7NRmMAJDystMP4LypBf3G4Ymt1Dj9D5Np7jFXjg81meDRYzHnU4HMChrXeAJzVrk3s6Y3dawUAKJyTuSZCfN",
  "key31": "5oXb98nawHbkqhJiuDsmSzFijVHDK8YWFUAKrYZvtWcfHG3K55ChPeHumPC6W2GPYd89h2Dt2NrfCB575GXg5RWJ",
  "key32": "5YS1c4J8xxH54ACSW12HnCkgY2XczPY8KYp54be6ujs2RnKFMfuBuzbvD8gkuauCcueXv9Acvj9HrZJSJjwtwgxK",
  "key33": "2mPvgBau4KwWCTmoih1uNst4Ywu5eszNGGTZVZ4BErXpBGuUW2f5TGLDWpEUbdiFKxvDmppScfJCmmEr9ckVsuTp",
  "key34": "2Q5u5t6rrGF2AzHn6VGQoJ4EhXrxX142rXS3TcYhPuJfpd1Eu1qmk1QNzDfxtNevmcWH2PFmAWR9BUReMkn7Kh4N",
  "key35": "43gTxi6akY9Zmw5NQQ2LE1bakFHgeNvrrh2VQKBDZvyHdu3nMSoc9c7WajJyMbz95eQkvXYfqFY2SB3jU9xjzdAX",
  "key36": "3PxPFXaNhyQzhPbUYZmSrgfWgxTu7LNcNWX2DeGVvQiwuVpLaPcv12pJbbenpg6fUxqkhpQue8ftzsdwyd3tKLaB"
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
