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
    "5y6Ewqr8TnEiqxhyfe4qy7Pk2ov9VqyWtGY7GrzA73BANYdnkqkMoNiQ2EEiyHKph7WoLyUc775UoxHRE18CsVbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cLrRKYvBgkNTqpx2AfxscgCkhD1JfST7jHfnS5GFV8Eub2EjoCMmuAp5u7YBvP3qgzBcktAGnNR2kJ7rAymHMdE",
  "key1": "z3kRkRL4MzEiiqDqGrXXQkmTvch4brzp2jAJ7FbrZeJdEdW4XvdEoGq9VBXf59gm1jHPighsZg9n3YnAcWrgQKf",
  "key2": "5N28hwrnJ2Wm8T6W6nJAfgA1jZGgDs3Aq9atDAWtCZvGqgQmwAjmBn4L2kcXPFer1grGodQKEcEaavorF2Ny434Y",
  "key3": "msgTD8jczSZe33oDwHGs6KymnonsiEutxBje42TNtnhkBwJSJgxFCae6GvCYr6wh94Qym6GCLdF8Exgxx2tP7KP",
  "key4": "3FzLgcnhBAsAzDcsfNwGXemphyLLADu5TNf1nAxtLZZd41hpTKTNvKDuhn68zu3dLMXa2kdzRTaXnvhxVCm8GPi1",
  "key5": "5Zo32UvFh9njHjxG6gUF8znpGNCjcHDdfxMpGf6uEHFyDM2qUYkfdhomet89e5HsugjdX4Zhd7NegGa2TMgBoXq4",
  "key6": "5TKGh6mav4cMY4vq69cJhqsg3vU6shweNbKwsiWXg9vHiek6BwiH6nrVLr1z8K4GUBC6cqbangtvUox6RnEGd4XW",
  "key7": "4MEBa7sceYNiG5ZFTFECQHC1hnjuXHgfUWvPropQVFB3LLTCt1fvqu867Fc8tuRjVQoSa5Kch7zJJewStBYkbZe8",
  "key8": "2uu4VcAJnpcazQKyLWxPg9Khfd41LSdUgpn73dUCiGFiay3Ad5k4Y1Xd15TfAG2q49aeCsnPL7vzctPuBL6rZD9q",
  "key9": "3KvfGGSwrbrmJiJ1t4XPQVNLdMC6yWQacBfz6DhBDYdBF1mHP2JMPzXnAzPPVoofRtACxzED2RRimNU1moXha9tZ",
  "key10": "4FQsTXFaudorUop5QQARcTp8HmSD3FiNsVFf8tMGVVYvch45Pd934k3SNWH4uXGrafadt2woHotPTNs1BiR9nTUB",
  "key11": "55nxHSVgQmEvJp1efSm9AYiZQtcNEQCvoXhfBwxwqMhsjoy1nanG4WErGMbQU8rkdKNh8jTsh28E7pt9ezBRa32b",
  "key12": "3tLhTjNwyemi4HSpcBWmUnfYB4r2hTgc1jL5njJedjhAyeQGrD843gCHytdstHzLDtrUtsPW1tkhznXEWaxJ4D2m",
  "key13": "5T2wdaX49HTM8tistSNnazzPGL3AcJ3WchCaNchfQLTQ324ZYm6VvJV5turvPcAjECnLWUa4R3frHZ6VGLzcc8R3",
  "key14": "2RzWnasrbdgcCKhsZkW2oAFp8tGVPAER5DqhV6Eq9vPmvAy2H5Rk5vntutzsZHBWtYTxsSvWdf9ChZjQdvJnAfLB",
  "key15": "3fd1oCTdY946Jcoh6HFAFJWBooMfffG297wEVxdYZBRyY9VamqikxioiFDrip7CQKYgpHAtbKCzgTT3kREa5P8aw",
  "key16": "4qJfRfHP9exnDi6gQb8NxfpzPdLRJDtZ4ennwsrUGwMN2QKVTGmiyrfXptTESFH9VvMgcYeRtTgxUNxVuSBWWZ3q",
  "key17": "3KJXEYrjREovufC2H4z4UNhtMh7YvCkomwBxSoc3hUQCxV5MdLTg96D1AzXmPAiQ3uJ6SthfVZKubafqc7YCkz2C",
  "key18": "k2zbbZEGnR5ckFtE7MydkcWkk5vADRR42WAjXinHd1TsXXmM4nBqNZirdYgeGieasrXcXUgzNFHFYuATuGQjFiq",
  "key19": "kw9MF3JeKM1FG7VxYSn3TYCrcyooT1KJWJ96azkx7CdDHezP2bDUrPdwbm7nARGzVf1MmwMaRLwit8SEXxBUEWH",
  "key20": "29Mr3ekwgMKsqEdH9RiH429AfHPn5JjgzLuody6Vtgs8tJZzGMUKRarMSMaqaiN6c5rJSL1x7SpZqakxLBrAbkZc",
  "key21": "45YKPWNE3QqXuu8akvXGfn35Qi76etAppbswzd7dfR9yzcru3x1LXt9GAzRH8TY9SUeQSnSNQV5F9qBiH3m5HY4E",
  "key22": "2drWGVgqX5fZMtwzfA8UQ9fUmU5sDsCDBcXGF1oZSoBttxfQHCGcMwoz3eewbAV9mnBzutoaXwcheTpiv3KkfcRo",
  "key23": "3XimhufQiW5XCDZng81RLDJKfP5Jq5ZZdhUQaFMhAurXs2jhk7nwBapsW6diVwbaVC4QT9zW838QaTqvR5aZNaCD",
  "key24": "4wmzLnVstSKmqfPQB3ezuhZGbSK32knc9nYbgxbnh4Gw5Pj5kzVPaVBuTgKrackiLuUZLRkd1tKq4Xfjj7KNa2dy",
  "key25": "qJNJNAH9iwdhQDD7Co1Ese1hQjY3oNsfmm9Zs6TV2hMtiNUF7iUQeCzxLnf1y887kkWvd98fGoiscgTcCrKMHWM",
  "key26": "nU5K5TVePJ3gXHXjtQAYmFCvKAF7VMq3oTKHL9VuSBQswQqvUYyRx2Hc5xhRpMgVNZzwJKaPXFRTHFNaxdro3M5",
  "key27": "3s3oAGXeZFvcM8KTgVaXQjesq7mSD3G7qJ1uBKtKXWwnJNZEgqd3itkFXefxz2kGhh72naCNzsQV2U7cPgnYV3DP",
  "key28": "5BomdqENPRbAAG3DZCMeVEExxFWGMeG7eC7y4tqnzDm4x6MFjwqHqdSSpg4UfsR6zstag6nsx7V6DPjK62FNfhDk",
  "key29": "4EjVZV5kUL2wvXA4RtVMowXAdo2jCu4qyy2vvtKr6cwgWoQYmjh8eHAAYBZFgzYN22q8NdmyUPNKwVFx1e1N9qtU",
  "key30": "xLb3DFZqnf1b3J3oGMqubfr921GayxZeFCwVKUqtRbrhHkd4fdhkabsDEtotCuBfffEERKNHJV5cR4ZwfsaMzzi",
  "key31": "2N8F8oP3Aq5rubYT1iKe8RTRErvmdnhVKTehETMVcJ6cR4dvf73Qd4UrA48p3hz3gMRvRDwMM4b32F4rwwbwMNxv",
  "key32": "2kGDKubtPki4pXinRFPZzuobArmSTPofSmT5NR6vu93aqTkJKBBbdicMKH6FEsPGsfgWf2tf12p2XVPoerSBiAyw",
  "key33": "41oH2spdqw8FnYdHYV7MpVessUx4KB8X6KkQBGcevJ4x6UxNmtQ2tDZtcoBs6z5DvDwFESzQeepQyyj6D2GD3n7t",
  "key34": "4GZ34yWdm62hoWg67QaxxWaZDJjj26dxcrLsxoP7wnUZnhfSiDekvWaCg2Kko5ptYCCoMt2qmYobs5BYXGuqPxp9",
  "key35": "2AXGe1wyakNrUMiU68oqjhDKrrWWc5JSkJjtwK4tGnXu3dyUf4rogxTYRuiHuxGTo22wY55Qg2A1wBNxYxSwTKZn",
  "key36": "4x58uXkLvTk22ehe6KxUEgWH81dNrwvYmzk95rmjLF4RjGcA3NYu1emWUgHQYCkSE9PmC3vPYCf9dXvTJAe475aB",
  "key37": "2dBXYvuZcok5U9qe1hMx4oi7hC7ThP3Uq1yQj5o9yKFEb2go9xQ8RZxo4auN2rwrCzwjrGYV4bCZCJGobUa2o5eQ",
  "key38": "3JTdEUB7E6Ph1V3tVF8g3aF4tyqGgRycgZjsJ8Hefo4jKKzBGSDzmjiYnAsnk2rUeeJ3Jtxt1dLigMeDaWheE12N"
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
