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
    "bzEzytaudCFgW3USrmWhyG2Fz2X9mnWfe7xQ8Xqcaq5pzaZDmPu5aq87ZwJpdmSDc13LGRVMFDmAWxsFXqFRmKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qYQRn4HxXDCVVNmPPxPhV5xDfveL352dkX3wbWHA1wANWKyfu5YzBiVaQDb5K6KDn64JxNkYjpGN6ydSuC8Ssoj",
  "key1": "6dDwgmR8h9XsAZuC8tYWygcdQqzr9CpFTpZLJ9gKGUsANMyguLecapyU1Ngnjg2Z7HUWcmSqXpoU5gcr7fXYDjw",
  "key2": "4mooTJ8H9ysYUaH86qLFFeBTom3WqoCtPWBNRyCcT8fdVkASXv9tshibwbTnGtyhDrhTADwJEjYENU8Q5zrRr2Pt",
  "key3": "4S4euAGcD5Swbgo6vAdZ2fd26kecAgoxyELTTn1BJtR7ekuUqV6Em9kBhwTTz2dVijFyjHBc5VbWeWqvR4gVyy6b",
  "key4": "3BPs1mNXUNWmZ7mFurZA9Vrvsk5cjXWZVdmEGLmBttESdBoz7hak2jfhMLKJa2n1mWUKUTSEacBMfoTzKuMP8Y7w",
  "key5": "5ynwdM1y7ZmEH4Ry776ocbXfe4Lvgij37YrpXGNqis5G5A6w3CfJ2VqNgwoFP5JLSGPY3nzDfv6K7ZAXuoC2LDiY",
  "key6": "5LycKrhBsk5L93evEMVb63PAQWVjz8AUSJ2GYrwFyTRrwfLPham8nuvMAY8SLoq92C6BLhZm5ESR3nteMRjdcxGj",
  "key7": "4o3WRJNmtR9q9sm82Tgg2AUGfBXXJtNAyBcWyCUPC34M1Feyy3dsktxexnTW6LcMu2ACC1v6gePsAABmphJ5aGda",
  "key8": "44x7H1W4RvxLKS4yziGMDv6e8fHEq4kJnKykKRBVRGUwanZupXczt53ESJL4bDBp1T4w1r4KDRVDs4YrTMWFzDAn",
  "key9": "3ZQKRGwgQP49pRmFS2Sv1F86RKNSea2BLh4WtDChVnmjDwzsX3SDZvTkbdEqEH63j6TLrEZfoK9e38jMK3q9PgJ6",
  "key10": "4X3C3ja94shXdmfdRQg6F5LtfDuiPefjuyhcUHuC7mwhSAR9hHB51sGrvettSwF9ardCNn5ZPKrt4jX23VSA5XdA",
  "key11": "24ACoMsc7fhZ8pZawtpTJ8CDLgVE2ywJyBS6QgdcNERg6fh9L4jrVHioFWpz93pFEXGebB6Dd4oSUqt7G4y4XqHS",
  "key12": "4St66CiTDwB6JSf8h1K9UehYhPMNfoDoXwEQBokQmBY2sbNv8xKRtFokQht5bBXnhWmUMHygKqKcFuJttWoPTp9k",
  "key13": "3Ykwevi3YdPFZPzqzRQLUbyNLd55v12EkEyy9y3TGNLsRbMhPggxq7Ux7drBqw93d4DGR49YbzprTpjejnhatb1A",
  "key14": "4qcdsJ1ryRUpp4D3yb924MkBb7Jzs2qQyM795Z9h5z1FeWEYu1RUJzeXpaVV2bfE6KsbTF3NqmXK9Sej1zuyXyBt",
  "key15": "5nKSEzv8eRQk2YDa71wXHm8EvhMCcQ1kGM3z2GpRxTEy2HwaBgwAx8YY5a78aZ8SeqW7VmG7TX7z5UU8hyySjYg1",
  "key16": "3pouZiVpShwYjeyzqjKjgJ9D6XgdjizxR9CspCyJ17bymqn8uhtDRSpAUSvD59ypJfnSF6J4g1uHpGNV77NsLG1C",
  "key17": "2X9ZTNZnuBBjjStaiqUW488ru7GgaBq9amf9EvdkfvsQuP22hafpn8cz5BaV8bk8uGu1A6qANdRXecnV1FhWgQum",
  "key18": "4Xoq1fCGvuBKWfxD1657YCjyqNWhh8mNqy8nYGkguATrQ16LLZhTTfdWL7Z8xuMM47qiNFq8tduB18Bv4Fn69tww",
  "key19": "2Yz66cMkUoyPn6kCyVXaU9gkopw5rpwLPxkFxHQKgeVMgyJ9paQKxfiqMLerAgjx7zwuFpFrMBhrVLNn5xn36mMg",
  "key20": "4815QJfZLD8M3ASdiYtHJAiSDBNBywFzror3sXnPgf3ZjQ4VBXiDsnqMAAgr1RwqetsLDbneMABBPYzamuhcRdXA",
  "key21": "4zzVmtUogWSGSP5UKAQ4gezENNiHAeok6vajpTvSRdjYnPtCdUnzMChYyRieKZYSqcjBbULNM5o6763ocKkHuYRa",
  "key22": "66Kv3zAR6hhBmtAwHaLv3ocwKgSnZA12S5p9ay7E9mH2AwJqvi9W7Kt6i1idkMrtNzwVkqEkYb1D7uEMszr9Byre",
  "key23": "3hvYNEJ9Lmtkc9vpEKnJwzxhR14SvX7tiWDG48Xs9ivHrcG36tySpBoEQKrA3ZuFC1GYp6P2Mpg5JA6Xfy9mmfhn",
  "key24": "5L8ZuHJjFW3BVCEMRpP8HnJ2gXxasi4BHdMmCyDPtS8r4ACbLQUwFXMD1s7ej1jpVpVKrsNok1uSfCwoBwRQ2Xpj",
  "key25": "3agqC53Ue63rnmqpYoAaNkmNmYuK13NsrGWMCH7xV5Rzw5T2xH9srzfSrQwA7zv9wzF4xCqPEEkXetPgSpQfALLL",
  "key26": "3XTSDcDhfk9H1gfTHmtaCcnwYVBAogTrF6uQZRyzn28ytMU7f4ahcaCziA2qwdeZJLE6nj761ByGWuok9yiiCRV4",
  "key27": "2TedSvvErsGc2QFaa22MxTCXe8FSrMNZQCpVQz7Z7by6VbLxJJnGHCahSb8QLeVv4HD2Uhmr63LG7tgFnDwaxkaB",
  "key28": "22RLwc1o8SbUSRycTNMkA3pHLZqQWFyrmv3u8W5gwGponz8u2NoKbuRwcgSfbNSHkPaQpP5s35s7FDBdkDHNLvHf",
  "key29": "3g9VDEYkPoYxBNeHNMtc9cCP2V4bgY4hxQu188L2NpcAMNctn8nBuAJuqkQ4qdCbdqhQmiih7ZqQ8VWTM4quoDbz",
  "key30": "oJb2jZdStNXsrhyMPuQPZe6Q7qi1ZBNaqrwhGoSsvMkHUXEKhYfg3CoPferoxgy6DYJ4ivgvraNj1ixYzPjjigA",
  "key31": "3utvUAXb48D45ATBHGE4voWGxZq4HYwHkg2re6e4be41tFZipHBpdkDqrnPNyxxPWbmN2ipRjqr1zFiZwi5WPake",
  "key32": "joXVUFoev4Hd4qw85pWGH4QwwHv23uWCgF8M4NHdbemZHvZDYH4VMNVzckRhfgciMq2AMmk3MxKmTKbGdcK3ARK",
  "key33": "25Z23GYo6H3Kz7oYVpyKkEJj2QW3rCZPgZTnffkkobV7p9zs5didzHjMseDPTkW4m2AYYyYUUCgDJCKkEMRpRyqP",
  "key34": "2crjfDkJzMCBzq3M5vB28a9C3DJ84RRXuVeRZf6pK4ZTfefkD39m9XaWXvWLojXqenq8c9Q7AYhgH2x3JgF6E8DJ",
  "key35": "GP56UKKDWKuEw3sQ8w943cYZwABPKdm6qXK2tBQScHtceXn13gYJM33UrYXnt2MgGiNBo3Vtu3sFqqTEhzwi5L7"
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
