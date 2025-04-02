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
    "5xVuUqrhH19iUZXdanmdJ6bnTgjyMNuJBPdSEpDPur6Wz7DcCpvkomKkCrXZYoZww18ZXsSYHGBcgbbKZ5DR752S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q2bWWWU8cJDJwanbGAZgrbMzZiAkAdiLGhmYYQ9VpQWvq32y5xv57YkTH3iiWFhzxGiNFseDNckWdzzTGU6pJ5p",
  "key1": "3vFQA74ZXpGTRYJMddxcFknNkdpyiJyT7Ccv53fBVorjHHWt8LbzoXQYs2AayUkv5UTAZeBYHCBMy9Xseg3HrgiN",
  "key2": "2mEoA7RWFLonmyQUDQctSETTCdniG3WVjsqpRZYDsDNS2nSjRkuVMSvS8tLvy5L2MsZ3jc5wTWEXxYE63CC6MqNQ",
  "key3": "dodU7Qvmyi1z5n7FcobAgexzZAo9xnxvybao2oybv2bkUxm7nmAeDQL89K5oT73icQzd1WDRkEmFSewPLyJp8yY",
  "key4": "5RHG89iv61QFMk1AW3oSkY7wEQzfauu1QRDeL6FqWcuuAuCz5sD2xR7DUXeUKAJDF9o5y9XM94B6MEH3c7sTDjfF",
  "key5": "53fWf6vatVegJUiUp24uwthuDNhZ9DGcY2jZ1Rfqydd2KstTWG8hZ9JbuCvpQwtfBENmHM2kmdB6mTnyDMNAsdhZ",
  "key6": "2XJnQYZGyZ5kYPZtB3QkEMhYk84SCwTvry8y33HoyaTPr2aGnvsbfroQ4gD7CtEJELzd8AyYJS8q8Pd3oMDb46V1",
  "key7": "4Hn7ruDAuddch5aTXh6HvbetF5RWk6ToJCzSy5pLSEieRtsp8L1wSw1wKJUYQSrvp5LWxoxoPvbvYDn2cb41hxZa",
  "key8": "7qnpSYcLeSrWr7qzqWKa9THVnPn97ZvQSMGixVSaR97e9GUHdVNBqZGc8FHBj6TkguKGuZTJ7HZ4EcEnJULSua2",
  "key9": "5dG5evEA73iQ3mD7SGNxe2LTQ6JyugQAZwqY4BrBkw3wM164ou5K8yCnmGtQDm7bg2qmm6DVj7v6Pn6gVJwBGSJm",
  "key10": "2fNA47DBG3YjB7feSxSXPJUfapP7EbRrVyZ3GgDFw6hQ25LP87RavhEnFaG3WBHSu7aNuwTQvFwzks2ii2jkTfLL",
  "key11": "2tDeEZsHT1AxosRdCVs3oHusjkdAw67SvvxVndwxo1Sjpk9uqpSUSqMWWxUMybaDC2SpsF8bF9pi7JbcdRHwuiT6",
  "key12": "5Yovb6njBvr12EfD6U9aa7wjzUdUXaaqy4rrT7v5efDNMVwbAsQuzBrKxWZYsMXqvknvuo8jTT4QsBwoQjfZUtqj",
  "key13": "5ghPiQFAVqZ1T1oMhGzpoJm1ntiVurHrbWrk1SCL3CuDm78FCoTpmuug6eEaW9h7Qq6Mknpct3HYqxABPgaSNv6B",
  "key14": "4B1UAUgZ69iiCu64rQgN9LmscG8B7oybKhe2fAmF2K52Us9KftTNmLHM8wgnfq15tEjU9KsUhwPiqLsG6wFzs5nQ",
  "key15": "3FmrXySm4EUzvUs1vvZqvmygTCCfzQiZJmT8DCZzVHBXZjEaHgxgXQVWhRHLdLqZR8wk4qefAQxdbtKEca1PcbeU",
  "key16": "5vtr48hMoifCZQSMFAirMPUpiVSWRuDa9zDheaASbwU9ieijgu1WqBvdc1jTwphHns4iMq4gVbaz2vMJy85LeP3w",
  "key17": "4w7e7LxdEESwFxidYqvKt1q6X5q5WLCB1wv6zQJg8zqwYb7TaYQWGNrv43qWcbKpgSSmPbAbgqdNpjpDymjFeCNG",
  "key18": "5fNfRGQeC2mm53cNGyDw8vYS6FWgUk6gNfKmJ8aFqUzXeigci2e7TmkAzLp4kiyt1gNX8j4NMB8fr5DiDXKeXaWY",
  "key19": "52FMdp3cPb4fbZvQAiGX8RtYSkVJ7uqZjy9QJK5hyYyMjUjHtQVkpb9EHXuEtyBeyC3Be9DwYcSKJBAVgzor2LKS",
  "key20": "5xVLGSJeAZdf2M7FyzQJ7p4Cq9bRsDHXVXqTrCFxSJ1cAS8zH1eDD6ggWmR2w2XdXAMLkvgGFF6JZFVpA6N4siMA",
  "key21": "t1TcdAZzLwbs7bZ1mVCHngEYBaVPkMaLnQhw2wMqzrCdGDR3EYVZouB8TiY4Vn9c5VSodT9CCNWZESNPrrSe99V",
  "key22": "2JuRdFXuPwkqeSKwc6fBmvRHiMrfgqnn21zmSN85avjweQVMrCXVcCKQnorfGoCuZmpGStMjjw32vuP2mEMCcRXr",
  "key23": "54qB8bPHM5oWY8Ty4jT7wnx5DoGknBJJ6UGekKM1mYGn8NcKRVV3TDFhSXvwdc21uZqtUT5zpnv4WZk8QMU8Z7Sx",
  "key24": "3UYC4uZcT7Qk2VtrRLndBgG6eDx9oDi9CzJmCjqNCBUswC2ZUqs1FYQbGWEUwQJvQFr1NxDHWD16cxopp9n9XWLq",
  "key25": "4TBXJv41yEcsr6c4phsBzytk6K6jgy9fLAb83vLuQ7iTifnpkXCnDXQGnszM74kjyoFWiooz4s6WYBvzccaDbUeZ",
  "key26": "5A5nhvknJ82iN6qQxe9grQk9zzfnBs3FZyjxdYWSKuqLCfXNmV869v8HtLi4JF4GRXhxyGGU9SfvAkdUBsLJ7JP6",
  "key27": "4QguYMbfqcxH472kx3XNptKNDhj3erKm75fiW6jsJx2J2ad5uiKhNX9hru86phizDSoAUhy7b1Rr2byTfk9T9bEv",
  "key28": "458tbrD4iq2od2xupp5AX6wkxvkkgkEjJvbhsedpYVXKUSMZDpxyZwD3ucY9V5zMokr4cyVYsxDcmAyfyC2pjtfE",
  "key29": "3288UDhk6FU7h7U6hAZkh2WBt2fd2hsLXCtX5Gcxdk2WEK355R5UuihKZo2PcMV77rBowpPsLHk92qmbdhqsWN8s",
  "key30": "2m3qy2ogG6BVu24KxwY3a68u3PjiYbtegkRn65Yjm5X5x8doXAei9gZgsoxotnJ8783ELN13qKMozuoN1egMwnNB",
  "key31": "2PezUqLaPRsRWdtFktB8nBpnQHLCh7EZFkAxaoM4n2y44Bnvirh9fdWWNGDvjuyrtoeMzpugjoZMLiX37Uw8cgsi",
  "key32": "22nXFs34jdcwDcDcN6BtM4vNkwypPqeVhiwGsTBR7NcrqLQWYaGroqzbtiXogvNX5zML4hEungub6tfBZtNiGa2q",
  "key33": "USiR53RTNv6ywWG2PgaQ4o8nciBre7mW9DTqLzpSkKfNHngdhdNS7TztstEVtvWU9EFhCRC9Hdb2sTsZLF71kCB",
  "key34": "41uYpUGpz2vewYMrEL1z26hZFmJJCGVQiwhSSXrs5VQDk8o7jXbGaaiu9xCssYgM1NGjeq4jz4MQjhd79GqWKSwm",
  "key35": "3e22EX9zSg4Ks9SGGVbSQLAe62ruCNjypc68cX1Ue9A6H2tggLTj1audF5K69rhL9q7qmM7Mge9p5Zjtq1ogpCwz",
  "key36": "5MnhAV5vJCdgdC8zoiwB3u9647HdUx23p3dSJECADFUEGoWufTCVpnACSdkbCP5LfyygAYeEwUTyzi3F2FsiCfTS",
  "key37": "387rHtwiyZHJdUeWjNqqUukFNqe2DY42ATTqNmpP9ySbsfvCYDwWHXau3pvvC7sb4AEfEAsJM9D6VZrANYWBHY8J"
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
