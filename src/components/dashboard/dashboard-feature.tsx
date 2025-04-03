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
    "Hmr948yTt5nXj1fmsCEKfoMMgXP1sa6CFrHJBaKoXG8aChmLreLCAy2HbUvKqcu8MF4J9XU95tpxL8RXLX8q5aP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WL8LJsCPoP3mAbiMm8SJcWWV9YftBgNRyTQj7EKCGE6f5qsYTdqoisgkazp1beiXXTq8SWGKdQbYQRUPi8wtnEG",
  "key1": "jgVeMskLci9JyDwg1vZt3wiPoLgnF2ncxpTDixqMvX7Ugs7X96daFB5rDyAjkHxmSyGaj1oK8qu1eDhKTcsELpY",
  "key2": "5RRpnGeMLnCyPxh4Wfdk5gHoYsxHVWha9uUaykA8Sb8NAexLQybTvVQMnUpFAU8neQLPGvkbkmfQ5J7mkkcxgoC1",
  "key3": "4RjsQ3SeE7T3v6a9ByBxdyqTE5gAzKn4cNgzUUXAp6gudWs84AvZxhuTjatdui1cnBbHFNHCjxcYvkmm2jDebkeR",
  "key4": "64w5tcv99nDco4QfMC9RM6AuQvT1mu8dGHSHqztpQRAWnQC5pxCLTV4ChLWTouqiFJGi9FmoSuXWhfzMuhXcSCnp",
  "key5": "2dw9evsjNz79vhMAiAMqimiJ7ajbkpw7UeWpyVDHCZ2TVaPUx7g3uuNBMpSuQhnw5n5RXSuM4qubtQhww5AgRAA3",
  "key6": "2pk8ibgWr1c3WHmC8L8WkyGqfn1UUAFJ9QUTgDdS2s866p5KMPhrNENutNx8SwGCqAobN5WAgrGd5wCVL6DbGyzx",
  "key7": "iUQGybkEvEdeoHg4esuHZcfg4s7mBQ8MDcWwmG6cJJTQf7jVUhZS45Np3K16LFNwNACDRZRDDfgjfb1WGqZx2B5",
  "key8": "3MEVFDmENpcYWeGQJV6WCnxVvcmWGF7BMfv3VywjmUsuTegc1GbNsAA2hTjHQ3UbcP7hiHwvFZsDjpt9YXt81wPm",
  "key9": "29t2NNq4BqNQY4He46t46mkTvzvcvj9jKDZDG1yAhp3sEyHK4opX17cVBQxcE79zXewQV1jLT7V9ghghMcBSmgyB",
  "key10": "cAZuK9wungcPbP3C5bJumcrf778cZSptwEdk8qrAN1QH15Kpv9wzF2UV242TbcC5eEMWkoQkfiGosGAX3TX9e3p",
  "key11": "AZSZzQ5ARPnSuhMtGT5AsRvNhra6bRNvuDGXfxaoaEEdpQz3aDLFApQk1J1SB6Mnv6M5Kv28DRxPPaPFu1LV7GM",
  "key12": "3xx9DXfZosznTkzeSaiN6smn9jyxV5jAVMggQynYoSaFB6fNaxw7oHFqyt15ZH5Y6H2WK9g5m3ZcTVog4fC7mFzW",
  "key13": "3VY8XpNwEitKvT5SnCF4DaTRwF6sbVkqsXNZjXdYHEsYykbrULSosBju986WA6sHHvjkZH3kWcmFMVYHSbZgLxv2",
  "key14": "3ELUjQBzCo2U3YUtESrxsVFzDqfucim6Naubohx5bDnViBpPQgNYTgTdGxRxJSBZ6KxpEa5ABhfE3egF4NhhHsde",
  "key15": "4Jwyhxiq9DqYhkp93EUyLRVCeVM2GZRYopxJXTb3LCbLUp6GZggQkaECkXA3V1mxGBnmc7iV4X2Vnp69syApW8Qv",
  "key16": "5KFtX8vnX5u4Pks2b8addJySqw8GmZZhVwTsoefQZgnnhtBQfKPBdZCK2nCB4cBeLDqYpmorGHqebKrBvDdFaKjk",
  "key17": "tRBz7VPPEAK62y3fTjbv73TSgz5jWndhLyraoj7FJmFkiQckrX4ZXAYVefRWuw5A1PrKbGPXMFb4f3BzUuE9AN7",
  "key18": "2n5CifvJVqehK8FMTRPh3kfw4Hy5g2PmqBoyYK3J28GiTC5VJjFdt7Q6Qo34vkaW93huXFq5711BWZZjzyWCXoXU",
  "key19": "V7NQJtLnMb1qkoWgFXGZZJ9GWaiB51faoQrx5eoa1SsyJEKF9819LoXP244qod7mtaPW8xM2nGCA7U7fuCzbRNT",
  "key20": "51awYAcSMFVfBxhDusANa8dodf5G3zbgqYqtFeVsobifdKBFcA9VLLQkbFPTUYSpLpkZdmrWAiBhvFDDhcXh9FFe",
  "key21": "5gEatrgTednroadw5rdsfz8vpbN8sBd7fpmTLTq7nPcSRhQ4myft9GoYA192EMFRF8ZNjQJR61d3jrTujYayiTQN",
  "key22": "3SzvXWZkucrcX2GQRRpmHhYB32LXcAsBaD7Y3fYo2KKJA86t4B1JfM7xx9vWmyaRwUmjDYaNCqAYi58zchbanK6g",
  "key23": "4cgQXWQ4ZC1X73MbXKWGQ56GRLhhtFbe1RkaYBPaugWuXGJgTCKCyomYfn8FGS21yj4ZkoaddhdVeGsrF6T46W4D",
  "key24": "3gcNa6yPKASN34EoPHjNMeA1ShDNCcfMj4b6sxGs4tXzVt3Wydvp51qZkHNP5EL39iN8mMbdbR1TdVqFxUtQYr8K",
  "key25": "4E9y5zyy7JifSNkYxC5FphhW8xytdBquHDuUUYBGFNhz1qQSWgieUaNWY3zEPGWuEs8AWraqYbNVioQcjJtGXfrd",
  "key26": "3PebxBtsajqXcL32qQ2mGGtP7kCdNbPuKKrpGgECbvxHj2WuKkfzdWdxT8qEPvjqGC19xnbEtfujvn8rQkzPhjNM",
  "key27": "3L8wHkH8y21b7aJjJWyiGawqNzx9RVoZveM5CG3vq2KszEmJCxt5rF1J8Q1aqnp85P64HjJRxjaBjimJ47Cc5AsA",
  "key28": "3u57mcqADDYzZ8e53UKHtr7aTBx5gSn7eZ4HmJJekGFxGbRiJrrYyrBDG1E3G6QnCjpbE6bcymhkXL77iHj5LXFj",
  "key29": "4eF7WuFymaoFNFDo87aBuuqREoxyvj95ri4LZvmPqv1AZcnUYRkSvUcqHfz3DFsBz8oY8pLLcpD36h2sSGLeTZ8m",
  "key30": "42vzr2C4ZDPJhmHHxQ2deEdBFLxEpm5YzhsGqw3xzuyAUQqrRm88ZwGqPH7KvHZ8sNBxi6Zf4GunUbK9D3KYGcw5",
  "key31": "3N1XSDyHQRsCQyQffXC7noHobcjoYwYGBe2GspkRhG16SpqU1AAeo7nRfa8zmrBTNmEq9bPp46DqKhzJ29FTep7H"
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
