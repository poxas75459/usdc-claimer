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
    "2S2iGDDnqrTuCxYzNvteYTtDXDcc6Q3KRzXP6JJovmarzFDQEUErKTVjqMgwxsk1HFLFPM7EjM1GKGeEtCqiibkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oV4TiAx9f6LB5hExqDcSeCHEZrSYwQeA529BemVJxJjhVeBeYb4SdmosTdyXUwT6JYnekxJmLvpScCWPPSoZRC7",
  "key1": "5AjKVDyN7brP3iQhVKYWoAspyvP3yuWyLZJ6K23Ez6NT3WaXkd1qDWnCqTxoLYsZHmVL1KGmuzidd4DevFBWsXub",
  "key2": "4fDEqEczTJKhqFdZeuoLsdBmX2b4LnLKRsbytNdN3Sjx22oyoy2H9R1AcRffDTYEcu38WXeWiC1EeaiUQMrbPAZV",
  "key3": "ASh5mr9DSRpqwhMNun1bCrXfrBdvjCeXjmpyerftwnfk1MStcb4STaXFmEezYBKm9JnF5ZVaJ4jbL9iYjsCfCGF",
  "key4": "3e7XkyvANCNmdCc9uDTLv9qWPF1FbV2uNH81dDnxfycgY29H4gEfpAow4hBH4b27sJKBuiGEGcxyedTXwS5JGkoA",
  "key5": "3z37ct9xs2xpiFAdTNHa3DJJ3Z8uo8sVvmWD9GyZcVdoaix4YYv3aWk8oLfVvKfxDkgPqtu2EQ7WBGyheR5xaokH",
  "key6": "prB65U8bWQUbdQwJSZNPP9FtUUjS4VjMPmp3LfV5X84QhcH68zb8GMVZA3ip23LCfE82JD6yCBae8vyHdgrZjU5",
  "key7": "RSciLtuWPpoQ2D6hvJUHsMzWQEsjbMNmi9DApUv8dNF9k9UkFtGhUsMDvTzeMiqSA4fxj8SqfoE7qWZXRM2dmgs",
  "key8": "4K4317BRQ6367BsZNUzcn9eMquM4ivJkRCH9LqSJaexu7p7obC9jGZyuCArXHfs9xqK54ypxUHMa6CH8fZvyiXDE",
  "key9": "2HQVdby4Smj4zEGTuVTRqaEV3kqabqa3cJTnUoQPC7h7TofWRj7damYvpSqLX22GGH4Nm13djNL9AV6JG9nrifYX",
  "key10": "4dTajvNzenXoXBoLNVry1vPs625gE4udQVTFzV8T3QL3fu1XzX5TsnZN1HzrJ2iYYtoKRvex2vNdvUUfDZZLGrUu",
  "key11": "4dRNxwJ7pnd31poi6eTGSET91noTK7GdGACFVK4egTVCv164M2NhH1eAq4jjj1YySpMebKE2XfqP5wM6FtnJMT2W",
  "key12": "XK5Qdj5B7FwoYmFPdw5QaPB1C5grD4hb7i7BRH6AYNuFMQT6pkFTDiXvHvyiP9LWK4UDHFNyTGaKXpTNNfBwKqA",
  "key13": "2VjpgJzXV9rRwGJCkaVBS7aUnZCBTAYiLx3K4s3y9DJHB2UPDyoJcAANfEoX4gV5HF88QaP8DenGhmQfqEupNtSh",
  "key14": "4Nz53HwgXXWq6Crh7EyoQEt6wmeu6Xz4iwNFyge3MS5VnHQJEWqMuYp45Cs7K3rr7KjemYsQARjYRmM4vgVJ8h6i",
  "key15": "3PmYS5hNHs64uaPcmpSrvaq737eo4MbR1HaukcJkTZ5fJbnLCXtgtHFdtztkH8mASwRG6KLuSjUDE64po262gUoi",
  "key16": "sDTqDej8VVwayB5KaeWdLvXW2eFxVZTjZ1GYGsnxQyZxmUov7bmdryCmGRUdYm9VUcm5hKhKjSFQEtEHMKKKKZd",
  "key17": "2zKPL9svysK4LVGSWXeDMYGZ3e8jukXzFZ46BEqkUdvU6JN45ptLDcoAFFEym9WKPn9W2quBsPcjbeABThaGWobs",
  "key18": "2fFobnyPqT5B844Dckwu8DSxj6Auy414Y4sAKGZEnwuipDi2Q2ZZfQCGnCqiVb4pgTgR7sX2jBubFZgUjiCYzezx",
  "key19": "DQLUFBXmfbh9U5czYbjiiFsgwHMhg1noWSMFWBjhqV8Z6VduXzMH3rmpLYSWjKF9hQsuTEx56mJdkvVytswxLiG",
  "key20": "5LjohSCxDY7xWMALDhWHzCWwpwBjUhi1hRK4LBBHX19JYdz42kzyM4VpBdjtfDHUjxTcBDqpmrCsJuYYH1ESdY6C",
  "key21": "3VYUimWyfzXQ3pLmHxPwLjZL3o6smZ5qHFshWGTfB5LnMnS8uYJvR3XBKnixa3BgHqPKGMKAkVmqbLhkeVR6Mkjy",
  "key22": "4fXxeKNvEsXDm4giFYNLGMBhxg59RV3iKTprcv2NvAbz9VCfwU2sgNGfvbttyXdME8RZB86BBrC4P4F7f7jFw36T",
  "key23": "4sJX5gtZZtactTGeNZMXuBfEWjeS3MC1mied7WzLDm4adEXtKyDzRZAsn7Cxr61XhWMxthWztPM6mDkqAmBZwMNa",
  "key24": "5c8f3CF39FJDUSMuTkEgejmZWAE8mddtQxZ4VEBaetR2xtwnNbq2E6PnSLwFono55pVADLY4cNPnAues3SYEYKA5",
  "key25": "31EkDEgjZq46Uxi833BayA3rwUgskcToD5UeimH9uKRzQB4WwLX1EfCweBSaauPzmfG8VLFvCiLFyCrfZ1qDa7SF",
  "key26": "5KVzpWdPqQYFi23YK7GUwdrjh1SV1aNUViJKRWHFsCjR5nUiNoxQ7TM5disbsGPwRSiK6CqLU7CmeHevexZiGrm8",
  "key27": "4PgyHQegf8AuZnCQm4r54K6AJdwtZ3E6p6Tzv6YDb8ySKKqNpANqN5jDN3Wsn7sAvbpwUVWbuPrRqQXvn7AKhEoL",
  "key28": "29k1ifdQ38PtRACc9ADG8RjkcXPKxyrseGktdBZ64qbFQWmG4o6AJqNmcANajBLGBQjkEbpNiGTQH7rXGwu5fjiC",
  "key29": "3YhjUcL1QdxB1hguLPz7wyP8HHt71dMWwkGDYukW7GcazHUf5XwtVUM1iUGh1VxgDLZv9FFQW8NALBTNGi4FxZcJ",
  "key30": "52uqazaukjGf71EUKWyfonuNHrgZX2NgxWM6PSeZXgqtwZnxPBeRTBYYrxoxX8ckZdEBU5YhrrsV6C5uMhSGnz38",
  "key31": "3T9taWCZKXFKBSwV9e6AxDxxPx8qD5GZkaDeNtTH816BB2PCUJPyDwFD92WpkS1d8ECDdHYjGjpNYHri8cKYWvRU",
  "key32": "2mcJ7nkkZC1QoJvxveN3ArP9mK8QLja4W5nkhWsHKm8dC5V6rcJ6dLVxp3AbbGoNRciobeFhkhUHDAqFnLMzseGY",
  "key33": "2AYKFkRVMhZgbXaBe1hARCaa7ZDwYqVo9P57xUJq1m14Ao8r8xTMwKmo6z9Sm1a73vi6HqwNVMm9s4ByZYVMyJFq",
  "key34": "3Ekk2uSZmR4LtfCjoHvXJpEGnAoQW1e9eCuo8DVow9iiTKUvdpxeZCqAY9kD4u7Lmmm2WKUDtTQgxFe7yoAg6h8X",
  "key35": "5y6E61EPFATnwoxjeRNkhDMYE2Je4d6kXURZY1bSSBoHG1Fdp2HdMChBtL9cnAbi5bQ4dUL8fEo8qPA4EARUu4PU",
  "key36": "2TeNuMmGCKfKu3Cqup3ErtwDFwTnvkGdqQLbcBF9UjqptdinX9bbe7chkm7XT5D6dyKFagwHboghGxhg7cpepUpY",
  "key37": "3PG65fnWKSysWRMqFoMFtxAXCoUx69iQPdvQwoo6gREdGeeSbK26cc2rzbe2B7pSXqKYrwttm9CeYfpCrYew9ER4",
  "key38": "QA2btXZwFHhm7aspA6p5xvSnrBPBYAjZtQobhmVYrdtu2KvfoMWu1yT6wQR5n3Txkv83mdf1B8m42iGS7pibxAV",
  "key39": "3DhvTux2aQh2JHKiduEvmpThMpN5z1RVwWmpS571m5BWKz12EaxJffpTSEzJRPWc3geA9BXe6gZ9b7QrMJWRZgau",
  "key40": "v63iSf3mQvsu5af7XJA6AWMkuyaHShE7avpwvWcHi565mbaMZLLEvcwiebzMWcbwFHdN7TgJznJ8go9c23fuRvf",
  "key41": "tSt1sPvKhcWoLBW9Rme7MxPxcH3FX4kts2Bhbx1hGLuK1SgrZAEGEXv2qz8PUfnBDhN6G8YAxCf8m2ToKCjj5Lc"
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
