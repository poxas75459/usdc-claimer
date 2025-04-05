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
    "4vUthgEqecWgP3uDyzjXTroTpSF5P3hSG73LcuXFT52XrEzpbELnqggL6qccB81Rmxsbpw7VCdJJfh7RvniyLuJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sYq4KGvi6hPAGzzty3kxEH6E1naC5HKLx4x5bkUd7aGFjPiYLKVjBdFr3LjYhkFCu1zxLgt7HQxbusnq5jkgnT7",
  "key1": "41SQdkzKivbupY3L44sDNpdpivgAEuunYRxfdujLYhSV7hzsHQ2DyUoHby9S3m7bPGes3h4cG8E5spS6hgyTZYXq",
  "key2": "2HANSdvrKzz1jyokjTRuXMQ6PiySkhd1pUfzd8pkT2rm4VVwj3NWSxQX486453WqMnUMy9WRVcJFgQUuE5P7b4SX",
  "key3": "3FjNENHXMb8qmk6Xo23b23PeJzqnh6hvbp821Gi8iyYfWnoXVy1H3inieqsYXC4iup99Ui7DmFDXPcmPzETTr7CK",
  "key4": "3vjm7mQ9B7HTV33J2ATLPFxfERZx5Aucjf324BwWMqE7TDT1kErjU6tr8AqX3V6ofvSnuGS11cimm4YtAQmyrZvz",
  "key5": "56FBZ6SX7CkjjPdJuopjrLpsDVnJ8zeN7v5zHQyCGNThQCsrR2FspAdnpi4hfYVUeYFiYeMypg7fwqwvK7oUuJQ7",
  "key6": "3qqPpaBpXokdJ7ZAD2irKSQ5L53n6avihSY7dFvhqpqHhb28hZjhd31CJfhot64GxrcZeehDBNyTonsrWdtuKony",
  "key7": "4zviDgnVLtQt9DcY62KZ65Rjw77iJCJYDDWRQ54JfCzH33PMQkKYF1zLjcL8yVhXLj3fkZosHRjCq7ed283ngUAq",
  "key8": "4DX7jKaqCT3RKht8a56uCQZBct4LFAUrrMdd2hAFbG9GZj1tyzrwgCbkTYLUBJV4FLDKejqfv8J2Xk3EuYw4P6Wg",
  "key9": "3bnyqnwPvEsLzhpJa2Lm9n93d5jKPzU5qm4Uao2rNbToWKByHhx9UCdTPB16ggfbMxtgquBLajY8Kg4uGaseaPML",
  "key10": "46F42a9kBo24kUbhCq1sGLW1GdN5mFcD9v4GEfxbB8XumJQgrhAXJtfrNfj4UpjHE6FRDQVNfUbUa3hEnCdcF1m1",
  "key11": "59USRd2ecQcc6paaq8SocuiFoijG2u3ZYpJkWzCF8jo13CiCykPZR2haUUvXaVZEPAVAbdUpZyeoxsTZycU27Jn8",
  "key12": "21hLGKwkscrQooqoKYEUfydyPE6XA6UaXYKokYPt4hdSAPWBYjk5L29uvdULhr55TVZaJKj4dpk33yMxtLCdMvn3",
  "key13": "5b1GkwKvsi95xPCL7K7mzxebrsGBfAps5CThF3PLRtaUg9YiVHYVS1TvaU1zbcK821YWKRCDYqwfjEqsjCUcoxpf",
  "key14": "C9pQrpnbNCZy8nrJZ1XpmcZDSeEpAD9ZCJ1QJuTkSkVueABcMKaD9obXoU3uV1pxcajUXjSqPJGnETDK6r4LyFo",
  "key15": "5dvxrVTiHPwbFoYPRGddCC43FD2Ze9ahvm79Lb51d2cyu19tKSez92xTnJvDgFiJYFgQDxWe2rnWRfDTy2EcyDec",
  "key16": "3iX3C8JzQrAApaJqJsMBq9TyV4whGEY47wurQcgN1xy3t7C3wt71rY3Y43XAWxuUm8y6sKURtdyLqjUxuJTXxd6B",
  "key17": "2AgbeyWrcueNiSNVY5t6Jgkzn5YLnqhc7DsLAS86vdxawGMgzuXDmJ2ok3ShC77uBE8rKB1vjdCRzhRuWkYsi3Bc",
  "key18": "3WSeNwvA6GdzWe5Tvwq56j8ddH5knQHk3emUNYxK3daU3rpCq5g9AqJEqBJNgHyeykFDP7GPGpvAzooem7Mg5nU7",
  "key19": "5YFNrBcExeS9W4WTAPvR97tD24CbL7ESAEkFxKUnKxyXzLaJq1QUAH2PxVAT9XDTa3fE1m2FGXGLRs81bg8SZxkg",
  "key20": "5ejH16AvsJijJfLiNAuZmzX4weMAQRToDz7xrcuoRWEEMJpJNE8xTRwzXSjw3LfiEMwhQvsPXvqozMm6hUe7aSae",
  "key21": "t14PzQVQGDcVpeY7CoEmkmkxpn7BTePbNNcYQTMNT7Bbvh2eWxLDTNPgmhDTNBpLbhBkhhrCRy1JeazfLuFwV8m",
  "key22": "3CV4ZTk6qVTydFAaLvDXRppiJNguXs7mar55GELDATaihCZs8pQZC5Anq4oTcg4HUPzQ4RZpvrmQPkmkXxAybA2E",
  "key23": "yWjuJzXnXAWJkEwurNH49FyjqgpWsSMUdRXCws7hkHfhKftBWLZrfVqma59TrDs3idg93v3TRRhGGQvMQ15bFzu",
  "key24": "3UUhduyxa5xESfJ27aQJwsuKzA9uwDzc1N6nZVZ6vER8ejHZ235NNsaYqjtiuqfzzkYVUrA7wkn7pirMv1qmoeTH",
  "key25": "26DiWiteNa5Xrx58jpYGrcDw2n2CHMYQot4FTioQGqgjf9XvKW41a3HqKZwJJy3KJuAyh47mpe3gqTc4eFqeEMYn",
  "key26": "5YkFiaso5Z8z1sdRznTwm4JTUpftEBrApZ35MjTKWGqXceXHyFCgyJ3WkZxvbre5i3fvYxo1r1ZMn9K8FVcDtcyu",
  "key27": "4ci8n6WwZGZ2utor5nC4ZFaVLJDFQV3x9ZZEvykQa4kizRoJjzwBJkAVusjbFYLqu4swLuwJEuLqAeHsics56Pv8",
  "key28": "3aPoYZnWGBEpKE8hepysnmy7uhdh9wdxacqYsCGnbFV1Cx93ZP4HSoybqVxDSpEGSDynBBXLGe1y9CTZmiHFb3cf",
  "key29": "2vaJMo56SyMKfK8HWWrhtrqQWUJ2kwmzdPK4wAnr6zyS3YfxK1xwmW5bAtq84MoMqPGUPMYrUwKyj27G1NU9cUkU",
  "key30": "28amELXQhtkHNmu6ft3E67cDndJSkLBg1RcnKTUTR4kJS5TsKvZgsRigEGFHot8ziHKAxVzHcxh3hMSeviXs1Txw",
  "key31": "gqVXx4SHP6XSw3GKu5GDfTi6BXhxnU2jG3sQ5uNPxX29E6jj78NhxCiKFxwW9fTm1oUCs4bNGFAFKimwQaeugTj",
  "key32": "RPG5DJd3z45N5GX2Tm61En7vzNEC1yuZDwYwb6WXz5g99PjUswCc2eG5zv9LXWtvN1soA6hpeXBs4Mwt9V2xZ5n",
  "key33": "4P4F8dYohY3xQ6JWwXjxP3agCrRKMjCxbm2riU15Nh5WmuaXKp1xcqbWjWui7hcGQdUmS8hBmyaetTiZzw3E52Vo",
  "key34": "5ZN7A2WGabeqrTfbka5uPY6YN6ZGjPg7LNSCUB3ZGwkypLZAYXz832GEedcRsSWeBcRqk1pKtr3ijY6pAnzrjvpV",
  "key35": "2CjWWMbsDkDJL96XTD1AaB3R3DNEE6yzdNUWUHjkHCYmTe2aeDG5sNLWx2T5qr4Wu7FTrS4e72ZD8yJUDC9FdCGY",
  "key36": "4sJJAy5ca4xgXtNXLg96umts54ripZAmoBWBnTgo1tcfGvFMXj87B8CAbxGaBDmjMoB73YtSdnu8CsLqGgnK2fqf",
  "key37": "2dnug5ZF8hLTFwT1oxPQ6FiLPNxhLJf1cK79jSThvHSchSE5q23FK2upqQ7McVjMQ2YMzhWRSfdHWFGiEoxFgwgT",
  "key38": "Z2Yd8feiqXkeUgW2BAudYiU91Zzba9uKo68ExUPE2k4kqYn8hNfcLkGJ7iHfuSD4uJ4zqCmf2cxoEGxgYQqb4no",
  "key39": "cdhpcMxZ9b49bmfCgmsXv4cPhCMvpdFYA5gogfvYseyfedCQg8uTJDkV6nfHYjKAA54P2TMNNBpbdi1gyhDFYpp",
  "key40": "3YoxNSqpJN2x1Ha6NN58X2Qd3bq4HiSdYHt3cG6aBPvjuFgX18E1b9boosGNVcteJK62ichF3nix7tevpSZM2iHe"
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
