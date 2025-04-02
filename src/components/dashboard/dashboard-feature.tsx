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
    "zrniKkwktqNUZYXpYyS72Ui2GJrTgSQ9ditYouXPEJMuHupG7dtT6kUqtKKfwp1iCx7snYLcbdXmqbAw7XDtNXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zVHsXiQ2MbPSjRETvX2oieNfvA5yys4FLM42swfXKb4N96WjoemHYiSGim4iRBYBgVAcwbEYQAh6tuh3JyLRL2B",
  "key1": "3tW8RD6Gc3xaJhKwStXB2SgcZzQpLK7SzrQFm59vJyfpRK2Gmnqsajok7ADbJBXbs6TMXszYty6i8Xn21rGLEwni",
  "key2": "3CgYGGQB2KpsZoFc5eyRDP4EWFHjjtn8iv2QJZp3zyDuEfNVMLqBEwyStuBP3VDtDPNXD621QQuidH8qfGkn6RCh",
  "key3": "C7JxYVkVTWz6ZcAQrYSmfnJpRE42SgXemKFQVEuTR8Bdq3MZ8howkQxPSai1b6qyerGTkQYAfHioqt7Pr72RLyS",
  "key4": "3JbqaFQY7YAEUaZHExfDu893ZMiFiyP8WoHo7SteXvzjue6PJyjgDAiUbyV7MVmbKkYuypwhgr1oA8YnufYt2yhr",
  "key5": "5EybhUX6xixBDLviKpMRvENSNeP73P83qWPpL9dPgcJPUGhaNS4hQc6gFWdY1AZVWuzrYVFGX68QDEHiDXgsutkX",
  "key6": "KT9JpsDuk2eS1KmJpuBNrynChxMy3q6THruHYAty5SzfLptX3aWWDUWMzT24osf8FuPELjjyPnFosNyYXVeHrTg",
  "key7": "4W5buV2oQjDh8uk9EZ7Dd1SzNAt6cFoTHF7dJEeC2Rok3Waw9rWgALzxJsAUtPeN4g3XeUe6rC6Udt2ivXAZtsdY",
  "key8": "2dKYfUwxaLVSoCXMhRy1ApC1om7rFZbNB46efs7z2cxQqsqna3tJYC8XKKnCYrJ6CM4Ywf4pUathtbyS1cXPSHZL",
  "key9": "Bf5LZMEuHqQWQr9gzFdi756MPpEmaCSpB4Cg7M9mmKYATj7wgRo6FT3wCaaXjBHpap7NZvPyzRpP5rRR8eLKRBd",
  "key10": "4yV33mz9xMA86i7pLFui3dox4ChmDNvWHzKxCDN7GfdBWJGKjpYhbS2BELgFs7koBDxyavYbew35BEbSTRLdLwvk",
  "key11": "waHF7nQQ1QvMBmSxP7kMYDjfvoYYg5XaPg8sxUeCmM78y6TjyYwtJzFcb9zUV81JJzRVc7SQhC5bkDFvGn5Vk1w",
  "key12": "2LV5tCKXYrQSLJu6BGaLGREjvKJXhPhZkRrvNbU2eYgULTSqSoEiMSyY8663sWUFosbSNsgkGirbmmxurih4euCs",
  "key13": "3ZewZLvMtnSjg7eQcxg9TYMk9FUoPdm7zv1ZDx5mtEjM1inzpcbQqRPwmxjqocV9hrDwfsvWNHVcGRdcSUeVyZej",
  "key14": "5wuSjwKG9CdGnHy9CyxeuioEY2wYxGXfKNgcEeP2CyidtvydZLfUCx1iPW5ksxGL8ctEnSXZAdKnoJmSqcQPjjTg",
  "key15": "5MDsKE3yyc578iq9He3wkGHvuts4incDvG1tFUDK5V7rD34xRoPp6Se43mJ76r4m2cQQkpbeefX8S429afD7Jn7w",
  "key16": "2civELdGddZSzNAVgpyXQiHwj99gwqSPfrmTEJPTxwDw3ZKipjamYfjRr64Gx1nMu7cBKS1eWz9SvQB5nAgmexVT",
  "key17": "5ucLPyp7XZTk11NdLJJtnrVrju9kXuZEKTLQ979TcMGS4CpyQW2tMuHAQ7vu7VpEQzFiggtcNjxoYbHfHqg9f7qw",
  "key18": "49MR7jt4PyR9SW4aJBwNPrwBg84QtkpYFHBHFCxwyCUUwfVx9m3twuU8FrFg8PUnjL2qq8JQscdNsmNJfwukjZXd",
  "key19": "LsrNcK9VUEqVv4MeNPEo84VVUYVQ4vYVHGR5cxr319FXsWNYGstReKzuzuJV2zQHeZ2qDV85RaCPufetg8m5hPm",
  "key20": "4bTT9SjLFT7i4tsBwa76STcjraqUZAbsEMqJw8xuXod2ZW9tebj8E19JzjwsRvqAk98ecETpxVKvcZ7bUaXoRAJt",
  "key21": "SSQHYhqACZpSvRmnufWNywe5TcZXaXNhmy2jwGD2TGNTghc8qmAGjWcfiiAxSYXJ7JJ7XLadipAgTuCGSg5vxLb",
  "key22": "4dvRJruQWZQCoZLDraJDejJDTZtU8ZxtcoGoPnaaCJUfK18djJ22XJaARvz8AecRaACKvC3pXkfJWQ8cVs7HfLLX",
  "key23": "27bQGSCzKiWprLoSyDhDZgu78RavQvcjV7FJ2uGy4cfqWbriNfBS7NSEDrEJhUgFeNjB3fCvjjp9DviazAc23CfJ",
  "key24": "YnkUxdSfZVMeNXjxERQ8gf1PCEj44JrtcrY55Cm49StCoskkixXX59mWUYD55pk8VUd6cY4XfVzEXLrF9VyTnqd",
  "key25": "4GyJRZGpsu9tYCKbHs3U45pmPtfGNHAqz89DiejeMCSJdNRp4mzzEMwbfQqjm64nS8j1zjJh85ciktaM7HsLw9RK",
  "key26": "3KrWatfRW1yJJrxu6zPNVzttsr3t79S5QY2HE5M3TA3x168eh6iLFbmR1bD959bAKeqUhvEp2aLdnjqrZDR2Anm9",
  "key27": "rLeo2UMVWBaaezEt2fodMp9nfnNhcG48Q1XRhUCtgq7ULc5oAty6UNkdrGkpeaeXoEj6sa7uY16qE9jUCwD24EX",
  "key28": "2ijbgfWEPNWfEna3LgP7wGJyoh9R2yh8NHt5ZaG5tiGeQS5GnVFR2jXFj3TZC3ZnKuHmjZYGHvZC1ToKC8W4C5AF",
  "key29": "5zXDjyBks1ZhApReY32oq9RUxnPfuDYh5wWAWiR95GbvqQPEQSTwGjpHTUAFF4k1hjxpoNq9D8oDf1E7C9TLCgKH",
  "key30": "415rQJUxRYZDgfPcso3ogJTFELQf6g14p2eG1D4gmv1ngERWtknAVtSyPqLgj4HwcJRKbdpXF43auYmJRnMungRh",
  "key31": "41joQUMzEtNUzKAT4TrpXetPNoMiHrq7Li8ttJUUWnr6FdLpVTzbgUEKRYsQPyxH7xmUsxdf1KDbtDwvuzKAP2eZ",
  "key32": "5nszPbvDite984ojExJJGVhbMECSE62MqWmhbWYxLXg8bmrjfzqKuxmkRnWF7xmDGNUnBYjQmdHmw8JXtCuExHqa",
  "key33": "ALn294qudi34o6hpNwjVrwCJXPYEBighvh8svxX1pDCEYofU8xegHqQ15WxJrvjjPvduDvpi7chFatNS4ceUtFe",
  "key34": "4eqVNtRT9dsWTfBPXJDjq8VLSLeay4Hbqks7WqYj7H4UxnKAauRsmCPnbisDiA2ajUzckWCDv1scJ7ajZVSoEkTw",
  "key35": "2AkPHkWmhZbshgdb1DJJxm9aHhDaJB8UiNdNGGM2ep4B1ez31cmyF7izW31NTq33p72roFfDYGV3DFEDPE8LiPcS",
  "key36": "4TAFwW3CmeD551XSvp2LHMTgqPAzjoXpDEZpZAsDtHq3yMXg1XkaAC2wUdaLLsz5bTxaMj5JsAXzta4ze3aaLxV5",
  "key37": "5GpEU5DRNt1uzf5MdAEvBQecrftK9oedzorjBBQ5dG9VVqWxfW2zoUsytxeEAw2gMxKohUpbTCwq1FfSpmtQKTnN",
  "key38": "5c3Jno2ammcickjK3ahjd5QR3k5AopRwHNTs1tVbfzhgVLBeQd418B8XM9LVSmDZceJXrXtQe98Qtncu8sXgdNBh",
  "key39": "SNRMssgtc9At4JLM4vB3sjL2LDDFMQC9vtneYnpa7coRbhMKyisrhmLxm5rmrRRFYiGgfu1pWSE1VxvGUpJWGzr",
  "key40": "53BXAD2ivaLoTBooVdd9BnnkNqKoL97XJJtA62WrebmRfQZzWXuNiM2wwTeGxmrMpVezjDnb8goVQS28QuWgHEyj",
  "key41": "4rTzq6BE6H4TvfFYJyxgsc5ep9sSbD65idRg7Td6nuuh5ivifV9n7L8rfL6Li9AYFofHg7NwodhLCqZTpKMxMwpJ",
  "key42": "3k9uXsFvo5VJm8Z2DJqq247fM1p1PsQXpdF6SBm6LJ4AKxeu7xSUbnAXfPWCu1jPcN7prb5HY88HJFC4JpgBUqai"
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
