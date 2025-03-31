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
    "56wjhnz9fqLLJEACBJ6eX94Nv6VED4E8tyCJLtSjrE8LPcvoTJN3G6FQAcGbJ9dfj3Lbvdt2QRQxkZB9hTK1YC5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KGrMy7K3N6T5eb2QTNGTvPgHP53L6AbjXJZKgF9DANgCJQ6ATN3FKKaiRrSBdBTteMRFq4in5Ct3z1Ud2pQRJEc",
  "key1": "42aaMfU7jirYD5KMiZ61k3uP3pdKybu9dsmxgxri6iFX9hT7tJs1SrttAQe5D2tpozBzRH7uLzuQw7reJPCs5Gwo",
  "key2": "Kv7WS6g5C6QZn8jqS8X7ypudKRUrnNivgagqCXjuZPYd54MetKi6XJn3Ng3izF6SHZ85kF5pU6L1kfTHJougYL7",
  "key3": "35wYpjTmbth3TiReC1shyo6Loxs6zuy16g5WoA1mZv4iUVwX23mg1Fvdk6jLCovBygYdDMt9GCuwuv4ugoYweCwd",
  "key4": "37khqqUxteCmxTvx2gpjKXn6Baqqrupfkw6C8T43wNqxca72VZKsGtfm4TwjWvUj81jvKwFpfTHBDyn1dPtyqEpt",
  "key5": "5WkS35gZb9Vd7V8T43vVZ5f4q3veND1SHudGmzRAHoKNdCBvyRc22UrgUDepqyffwT4TC9yge8WZLN6rhoSasLHr",
  "key6": "3ZmGLekoFvCEmdjutWr5g5znFonnQ6KPm1g67cvvUawnXXwY4PVEeW2ZBXPYcMP3RXSwYNSfmZifdKi7bEScgtoD",
  "key7": "5HxfLquaVJbY3ELaZAAmBmKbyKLbMHg3B44BRHT6HpqZWbiS9NH4ZEZzyqzxnvPYfog9fgoJoHNBvm7efBJk81jn",
  "key8": "4Eduqbwua3ZLNx6r6ojUA43w5pyfzTfEz9Bgv7HvyS8AUbtZsuCFhgDp3PB26TwJHeD2Z7bcm5U97A9d9Z4zzaH7",
  "key9": "4p9AyJP7nysM2ggXm5SJzF7qneNecT8okzAHHsgKM9D6rCwcUKRApiJ6wXLJHy3vUVK8EZkJVBd9MaQHuM3a4gh8",
  "key10": "5Pe9HKN9zJK2PyXtY3pUU4DMBggoTCnwY4KYio97XmFgrnJim9qNeWKzPx7P4E9Gt1kBvMPPRvASz4j8vnWghUpo",
  "key11": "2fsgY1pQ7zMBhWmLWNdXw57JErv2xGGVgQskcULrTfqf7LS2kXLCC4iFQ42aEtKp97UNAVWwWZ1oPuzQ3R1Qtaoo",
  "key12": "3k1MebXQc9R3hea9tpnAL1HSyW9YPdsFasT3NpL4qouq9LRzRuK5jZvLx55oxWkuzZGC85D6yuFmhoqSBadE1Uwd",
  "key13": "34pHSoSkoBX7m8vgn5SRVmiM7cMibyfLjUdtFNwV8V3pv6yy6kjobp4q7XqgWseX4YGrXDmJ7fA47h3WWHvMMJnJ",
  "key14": "3mjkYezCUSfi1Lzv8Cn7odvmq6Hss3HSp7cm9zsBZ68zNi39sCx9VSP9qzbRHeHAfY31B9AYwMKdjwPmNrExZCt7",
  "key15": "2yyjkZhGDkqcyGFyWG7F3QDGFn3rHe8u57tXDPGcVk4UJDoCwDesZK346dTRW9vgPXvDrb28dht88oRYAgwTm6JQ",
  "key16": "3PLPqZDcdxzRfuPdMycbvbGd8LNUCJ8zhZqZHNQRdi8AVH2fWi6EfyiRvPMRtKuZR39W8mLmmorsECrZzKR3GwyB",
  "key17": "sfqwWzAbPxuLfgns6viq6RzYZzHQmLMYvP9iHRbNzCjLEg3JMYJJ26SU7CLCiZqiF3AZiE58vRtZbS6P9GJVvBJ",
  "key18": "2C37i5Yjnhh1YbShqtQtF75k9BLMCqsmtMTv3jocnf6na4B2ReRkzQsGAADTvy3BXvU4NKaCMeS665pMiP8Ghfqf",
  "key19": "3x6qPJuYgw2pxeGQbPyy7DpVAjFYngHMuDPGms1JBGhGyXryvjcJCGawd1AtzLyMU9brZeHwfoRBRLZSJ7GNrTf",
  "key20": "hAFJqPabB1CPDEExzFdcDnhw5zo6D3w4JCFiQ89vmqefvUt5ZXgEsdzbE8e5W7v7czZSUYLDQwUD9rAVXBXHNeQ",
  "key21": "3CmPZR2fTEtHVzTVmfN3eggUQ9ZAJFkZ6AyMLHHQXDbnCE7kxNuRP4groqvDmW3Nt13hmsZqWfHkkZpFCXPQWEtX",
  "key22": "3qQhnsSTn5tVYo3x9s4GVdxD26dStjfmLKVQeHXESmnxAgPFnCCdtc5zNmvfyNfsSYg7TovNkSrnuha9cV247Rnu",
  "key23": "5foMwhP28KSUEYCSToVKj3VJNsA5ERRHGF1JgLYFRNhEP3faMxdB8bJZU91ZLg3j465oVLf94p8jpx357A7WGYM6",
  "key24": "2csM434nLumkmv9DTTxNqL8mg5Wtiiia1889Ny3unfK3Xa1BLwmr9JA8M9tU4KdXzF6QX5N33X7jtUTLi1ijUoUY",
  "key25": "55HQdjaUey2k9KcM3joB525zhidWJNujd6ikMDMfwrYfiqQHD3MhSZVkNYYJyyfwy48CDwAfExfJD8WRUUov7tFw",
  "key26": "3hoX2Fhzxdz6GoFnxsKcgxdphf13PMdJ8Eczz9BDAZMxFxEYfwZd78YV3xcgdwdDsNcovXBkEAj143eTmvRhBb7j",
  "key27": "3bGssGqLd6zH9bBG8RrYjPCvV2ZvGhWyLYu7eH7TmmapPZc2GU5T11nEbHRifr6kxmMPM7U3yTN73ta3uN3XaKnJ",
  "key28": "2XachiYtwjXBH6qRT8NAWw9qVLA3Nj8cYjHhnBYafd1RXTUm7NJodKVqU6wXsKEg28carT8SQgNdnmAPps6MijHn",
  "key29": "2ZLyd4EH6vkku7rbioNK73q47crHGDHCfhNnJ9ZoYgKf3vZ5CvLy2QjJYRMb2jgsR5foqSMFhsroX4ad8kXmZX6H",
  "key30": "mgyHSL9fsieD2syzQyE4YM6k3sJWDeA3wxDZqm6iuzGuqmjNoA8gmvsRwmeDbLHgqdLwNcbm75uMJnLfW2NDhX5",
  "key31": "65LWFRmRv9sf9WieJpvk1BreeD2GGeVakXWvWpCnCw7oqQcbbW9GLnTtTis7hJetftxVehtjmoyQ352yobN3FC5w"
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
