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
    "4j4xrFAUUY6rBs7saytR97V99xiMzNUskF9Qri67yy38d6B3wf8HhmccVYefvLnq53jdQsT3iD1juSs6kncV1Bif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vhJqFM3PeEH1CouhuVzFsofExXUj47niCNj3Rypc62FGxet2ogaRM1YrjW2TcwgaYWSTsyzTqn1bz2m9zbmeg12",
  "key1": "yHGBkTyP78fAjB7PrfVb72vck4mTyuENdbzGFUesirZ36tfWFeZ8AhYvi8cL1H3AzjdnsgbJW9NLWFFaJ8eFfmj",
  "key2": "2i2w7dNrCsLuo8rxPJhDjivDseTwDoVERYzJVwzhsWoX4qCShqbWnGP2Esy2sELGcHebuTtncJ7C757h2hMsirdC",
  "key3": "5KsqCC8mQwGLtwyp1KPWJZygkBV5vEfPbJxCnL8UabAmUYgyQwmxrN9ASbc1ZC59BCGXY8fV6qGud7PXKM9UWhrf",
  "key4": "TTrywxfBMBZH9bjiTht3Q3JFxZm2V4dcWNFAsmJqk5PaZuBGGLVdZ2VmkCByzvPt4urm8uhamBpMT9cWFToTEKv",
  "key5": "4GqBQZmtEUm9kkFQVCsf8E2XTag3BoGhbRkPBo43tKTvGMAug1dNu2mF8it2xYxo2BekH1KBdAKMogMvWn8xhYvH",
  "key6": "2tGkT44CLebV3Ym9yLcXxXRuepbzvtTfMiY6DEPxCcu39vztCTCZNuqyKUCgvWQidzZXywCF1cReWZo3hbWcRieb",
  "key7": "BHrJ5f9Joxnd9DfSYRBRirNH7Eo6k2nreVK1chLhWztD5ZmAJQ1rj63Eh5XkMJ9vtgG5uvyrusduKKNszr4BkL3",
  "key8": "5gQf1snmC5PZ9WK5jtd25Wnj2M86i1VkKUYn82KPg3wmzuH8E8enFN73QmEXpLFFmT8oxV9RqVYKE9d6QqdTpvT8",
  "key9": "4NcHjABWAafSZofzb9kjETAkJZmsymYGDebsHWoRu83RF7HGSAE7oJgVp8MjRZMLhyiwBDLYixiPtKphdqiakmm",
  "key10": "4q5Fvjc1dYiiViqHfzWPdzbAfvCEdpDXyNUo27V118mom6iotSmQWfnt8ikVJZWRxPU1P1cBYbddnnnVJG7EHVYA",
  "key11": "63UVD9xG5f7KAJkSMAYxrujt6rpTo8RZ5DVxwNY1o77fF7weXdDhHRdEesknNK1uu76n6mkaf9hB8zDMedVX2251",
  "key12": "22Rjq7UiXLvTfvVZWDbTFXLaUmg3pdMcvuJ51hB3r2CGnBFgxPpU311oe19TYc1FmZxuoEN3unD5rP9STYfpmZSp",
  "key13": "223sD7da37t9oRV3imocmaWe6heeBUfUgKU7fqAoVeRzrJb8XEAmUKpcA4EYUe6mtKVzcnxSzhRGp8UmVhiwkqw2",
  "key14": "RUvJef1hVes9YcfoZk15H4YveuTAMMNVRCP7BrFbWFDjbbJr7yZUSzKjEU2s9DtvYstCaTUR5AY3UiHbD1gfSng",
  "key15": "JbwGNRxFDPvYYpw547dXNk4C2RpjM8XmSdFjHT3Dr5T57CtsNmRYHbbrJiZDN3neYyTmhknjDFXYPmKWfJf7Q1X",
  "key16": "mnji9ekc6LBHJzBtM6FhSshn23yeenHQg393kK2ffF32DFCgcRsMAkp4mQwxX144MoK6qPKQNmueaB1VTkHeHy9",
  "key17": "3gWeLT5KJgK3wsqkw7nYY71gCL4NzxiPsH2Cg3SowaZ1px5mrxGb9PF3oahAjxxir9v9AVRxrk34RaZhc1xyMQpy",
  "key18": "5JSmUxhAntJ5qfrrcg6mxyT2PbEvXnxofG6ZJGD1soqG6iUopbAtGG8vonsQjaQtvt4DoKB8CjpLaWjg4vbBSmTm",
  "key19": "4mv8mf8qrg96PvAR8mS5BxmCi1d3YnzkG6opq692e9HtDCuu6HVWsibhYiVb1za9S83rP3c2j6sdUX5MLtCUoUHk",
  "key20": "65CQNPZwiLSvGujXJFBm6SLime9pbj1UYhTJPi5gxHNLZfmNFGruL7oL2nwSo7vQkTGAQv4GbAkPaSMynAWLbKo6",
  "key21": "ZP2N9WcR99y6QLowMU48M1BBYhixNiB7CfvRt6dsU46jjDeN1QMxTggpJKFaijp9fjX3m4MUsZ6QeYWjtyNr8X7",
  "key22": "5cbXx1LjExBGp6mGSgUipLibZX2f1my26MPFSH8YgYAxVJvn86SS9Bf6ii5BNkr9Jwo4yV7MbK6jw2NbSVvBrDTM",
  "key23": "4PJr2iazLmhT7qW4UyGkBc91pj2N698ewDwU9wMjLwV1eXfLJLDPXYiEU1NhFhj39DhShRS7xn1sgAuXSeecJ7u6",
  "key24": "61gt6Pt7jZHtf2pAHZHwXbYYbLrtCy8Pibe27MwS8Ms1vmACiDvmBCRJJMQV7iXVX8zwsNyxga8PtdqGETZYUzm2",
  "key25": "57ajSWeZcdNQTBwmv5eTyoEA1VgXhVaZk3BdhmNEKjiaMWH4EpUqi5uWzVSuHqg5hcrstYsiHpYCgCKe12wxWu1A",
  "key26": "56p1n7nFUAarevkXrkFgAd7Q36BUMmBHZbYQnr7LCRRRf5Ys9AGmEGb9uSbcKrzQyEwaJrAVTcy74QRvEirvWLj6",
  "key27": "cau5JwRcno8SyXZ5GcKYEdVZdY1h22fU86inAeLxoLEGb4nWdfcUWw6mxZUWMLemYwgUyZygi64Lw5KKgoCCBxs",
  "key28": "4jG8oPaftQ5KTp1cBqmSPdcLWDWiqUg1WmBk4fVxMwshSZwpvVLzT4rjFdgXP2iPBA8P51MTGK1d7iDRGkN8JQBg",
  "key29": "5xweZG84oA5otJcTgvKEPjev7jfAr8hBc3hvg8Qib3RbXzNBzDX4Bsmwfa6HtahfoEycePfM6LNmpNqmphkd2Mh",
  "key30": "4zGqBfh2ZZJXdYbtrqrK7nZ7MYPHqsSDZKk6oh5vqNMyaBCjFP3bcD5SMCTaXryKQDwv6dhuSfZHuE3RLzCY2VeS",
  "key31": "5FixQLiwm3g1HTQ59bBEkaYtkXNTpYtqaPG7pQ8CVBy8S2bdxKvj4ks83RNgALonv5saeQzXvch6wbL1Xwgf97i3",
  "key32": "ofLch3622JABFE8EGKUWgbPBerANBUj692zrzkPq1hySEZ5JfZRBZkZEarA4eb7syBELZbxTnmmjSH7KN6XRb7X",
  "key33": "4B8QtYUG1i9yxKTotM4u1BZmMBPGaFrrTmm6f7SyVHukuhYGH88Km2K3Rizam6VBRoijPcHYqGtdvWZv9ctFTGYF",
  "key34": "8kkh9fWwRU11jzg4kXS8C7i2agRjM9Ued5HEaJHUJBSYwh47NnTMn7R85DxZxcdUAaGYuVX6mRTwWAzDerYc5kG",
  "key35": "5yn63LYYme24WPb4y4TJvmcWdhk3d5MJwPXpSoQKcg9oNzMd7UxTLsSjrLVuY9Nj66vrcDkUYGBu1Fs3Q4A1gfTw",
  "key36": "5KZhNjLLJoUth5L1MthK8nxx9zLhctsSvH16FKXW7M7jHcEgGxFHa6Nf4Bcpj6xxGuyyE8rqNr2JKzznF57jM99J"
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
