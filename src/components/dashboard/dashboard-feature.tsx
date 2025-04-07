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
    "4H1kSLvAzRK277yo4VE78eiePXB8swBU99bkEyoixcDNwZXZj1MqDqEMCwsYrRzQwx9f95tDQB45iM4sbzmfDp94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sjD88FRVGhgpjzjTRTt4vyvYoeCsNh4bScRX7oET2Cvxmngvhgcfv91L6YkezVfhRYuvnWtBBfLaFLWunEGjeE",
  "key1": "3Ewfu79Hjs9McXc42EjyazSw8syqoLsz1kUCoVjdidRZSXVbSCR45LrG6ZuQG6ZaZcxgaREkU18L2n4PvRA2nFYw",
  "key2": "4BtXER8YXtVVobXMvrgPwo41eLSn5SX3f6WfraiM4JctHWcXuVEExU9iMLFZNzqbP7KF65UGWBREabAL5LHzWzEj",
  "key3": "2EaZ9tTFuBiNGwTBVyNAxzSccBXxNrAfqhEay8REf5WgscnAMf8PgGYW7ZmE74opuT2WjJ8wJSjANwDNxbRjAc2c",
  "key4": "3q8B7w2fd4PogpuoggPPNTurMGRQjG2VkSnQ7hGkztqkcGA9JBGtCSeaicvSZdwqeMnJJzqycsy6Pf15vW4nFf4s",
  "key5": "5eLM3Wh9gSdekg2QxcjQHjDttdgmn4xqDh6Ej3qmuToUhMXHxFCXxSFs2XMTbnxYGVWh55rctrVGHC9heseQUR95",
  "key6": "4pfPr7ihbTAsBcEGApndRgBtjr914wzLVGBptDbbMq3vKRG59t26V1JHweF36H256zLTBe9dBXns7HLBy1E62hzz",
  "key7": "3PaRxQ9SASqwZjM3nRR9u2kjmHxNQVSMWEvwkT5LDWRBnLBCw7snb6pHw7n86WTEP7sziuwAjtFjmY6pDnoimMJW",
  "key8": "2w83aZu6SHpQtQ9rHJSbdMi8bEkTocJguHPPhkYk8o9xQDnKDwd3xDsJyBrUguVYpyL7ePdwhjFEggdig5Lpi9Ld",
  "key9": "Gy3s9GZBrdA2pwWCfD7dVgnRLuX2FP85Xobnaxhn5QyLqUXQym1nRKwMRgXuD3r8UhxDHeaGyQ6RbpKrQfBjy5E",
  "key10": "5GUjKCeuL3Qpo6PxvWGrUuzx5SMApY9pk3dWDJfbki6UBLXaJJAwZtQJLdT5LLxenE2nuyyMcmkcH52FhcYXGTE",
  "key11": "rmra49DK9U9v6Et1yMrG42JuajrBUCy2Xug5rDdDxAv4zvtdNjSU22FmY6smV8hfzExBxzVxRDekMnuVvDijb5e",
  "key12": "4e3mVfeUjpTt3Yy4TqL3EjNiLSDSeUiKtgd8odbjRL43kxLE9iTTqeW8EjGrNgF6JuNtfbbr7LuH11eVnsfGfVD3",
  "key13": "5vAYz96AYbdJFaB89FtjEo5c5ACN7ehAxF52uhiokoWnZetA9Q9v3w2Bws8Txy2kJT21Cqt5Fo2wuazychEVYKiT",
  "key14": "4wdAuvJqakXjHZG2LVerKtBss8vo8WkqvFsZZuuxov8fiBi9PDSHG3JyPvpJdjmMzQbSZXtFh3Swwsp7C2PVkVw1",
  "key15": "1n4XrdrGsh53Jqd5dDPmhGkiLj8HxrSBZtSwxAeAxhefc7rrd53vP9UotxCoFnedW1GfsUNFeAcm1NtjxN1KPRW",
  "key16": "5wZC7hy7EfSVvEiJ1X8m4kp3f7mv51PPKQFD5xppu6d1HhaeCFJotdNQBEfo7s2zWYdw33dxAVf7XC9xNxBXuPrY",
  "key17": "2jaLLDsQVRLEGRsX5potaySXjwEKDao1JXtWDEDfWWwXYnrFuTrjMrCNiWogaLf1Q3SPcaFSuBKymh8PCaGyVnS3",
  "key18": "2CDUnwVT8XBsSswxyUU9girRD5b2916oXGRKB2pmjLYagTHw1a7T93kDK3DNkvewtYjqjWw8cUEepStMC16EUmui",
  "key19": "sJhg1Ujk6LGHoDUNaNVqAWqb2ms1Q4mBPUhyBM7pW8UyyF93y65jjHoB4Aws7gL9FgbgGmAqHPXpvMmfYufKVWr",
  "key20": "AE2S2Ym2JKkKySdHHrpkmrpttwjhdZR9A5Dgdv9Ka9zUBWB9jwnx9ELyAsR2b92qJMwPEtAorejcHqDWptUHAgd",
  "key21": "58wQpXMLYGog1J6VtGcUAtrXXEzeeQJN12Z6eXDiLuhXwWLH56NnBbe89jRjq3LzCHoNnvaYX4eJbP2qjfhFUKWC",
  "key22": "5GbqfQK67jCZqVysZD9aNBrwKECDHEbGFnAZL4T8awv9FEAZasNLja7YVrhSB4m73e93tp2NNVvSCCkRUjuUwNqx",
  "key23": "5nQR9RQLBi9VchRwV9ncL6i6gegb5d9TyTKKfMhCYxLDEKNDD7HdkTBMkaB8JPBZPYiQ38V1uFBtLVEFey2P4dCC",
  "key24": "5RsHrPqrGyvTY8TxUSXCYKtTDJ2EkE6wQUz6JNPHGEciAa31d8aphZ42yuqN9wPLoodJw7zE4mwTN98yuZgzqeji",
  "key25": "4HeJMGgsfeqCPyDXtfVEigP6QWMsDQ1VVUDQkLvwrhxQZPAjaRhneQb4joHqSP74QPcfL4WoBVdWCDkZ8fHHArod",
  "key26": "2iMSDViFVXFBRBgTtjbZLf3ETawLgYf9FDxLeEvw94VAhnRFMgh3ds8CpxZto3MW5oqhQAURhgWQieK4Ro9ekfTG",
  "key27": "3HucyBZCWyfAMrkmrNsZ5LMgi9BTU3rX8aWfE75zGJHW7Ayk2hRiwvBWzUbui67yfBpLASuBJjFEcHraECkW1Lge",
  "key28": "2H3xTWPDGf1DCvDoinpyndZAqa2DvZtYm1ybVVniMg6ArRT4nB1yHy4iuWMLEAQkWnRugUhCWHRmC22PwFiFp8WW",
  "key29": "3jZcn9ggwjctnzuKwSxzQSmszc12VgmJEL5rdMmeP6oWsaCBXhWRcemEdq4ythnruhwQHNcXnd9Q4NA9JgCjxm3",
  "key30": "3H8KX8E6gFyNkKpm8dGNqBgB1yEoMpKYzdV1zfxkUfEZLJDZQQxtUyQCvRFoUQU56BJRbi6EFFvzxhepYfEqfYGA",
  "key31": "Zgp4qpid1pn89BMcoD2mdwbYCYZ2MpiCG3QhXJq6KxcCAFriaGmjfCGJUSsz6gK8wPSL5gCdt31bfFYmoYGCoed",
  "key32": "4DojqdX8S76UqqJCfYUMkmmbdwXdKztHKE4iZE1wgPnaWczBGDM3ZjAnuZLKrJM5E9KU7dykkWTFjqaDHVtBXoc9",
  "key33": "3Ldhp18xKto5J7DZcFYb4kyjwGXrR9hva2tg96Tfc2hJhvgWTDACMUTHBA8F6iUDgNw72d8E9wJ8v23yX6EhSmCJ",
  "key34": "T6sLZ2uLYCwv6kvVh9vvhsQaYX7cEhMqpeSU3K6dYuP36iXMcab7qRoGUzytkn5NCTfP3PrmDVn1iap1fpugz4X",
  "key35": "5Hoa1Agmu29pNGtytVXGaUeAwRGip7vbykfXtaAbQnhS8bwvkFFXLHEUUWKF7SmPALs59RGuT6LcZwAEhKSGXBo6",
  "key36": "3vZj35bZ5G2YaL1VHAZEyaaMgM9CLuXXuS82DcpMeqM4pSMqJbaikSdukKdoVJgf6D9Q78QW9LfJyPtU34164QLT",
  "key37": "3oGGge1uaBQzFdWTDJ6WbBkH4NtzN49SAp9d4zWGhxqbJMZ1iAq3UVnXoNuHEbBb6SZQMzyBHTBEiGWCTY4AiRP4",
  "key38": "8WmqgdWmezMw5SuSxwamET7Lyj48qoZpCf14QUXU8zFftUqLPZwUZ8aTDZFwdk3RrEEVUUCBJZQAuxSZAej4nPZ",
  "key39": "7NsfLvYXCPFQv4MteanBBG4P7cPdkW9uELUxaMy6AT3x1tQ3EXSVny3dutoxW1kFLdSaTjQEEp8ozibRW2TQRjB",
  "key40": "5NkoEzdgCEBkwWk6rJK4zDyJFfaRE8XXibBnKFauJA9fCv4DHXe7UZrwTGs1zRTBSDddrhmcpgAsps5YPh9UAhT3",
  "key41": "5FoAANQremUskqUynnmZHKfmfzEzrPyRmNKit9fJdrYy4ctrDGVt3RdEAPrhBAXMMjf1dRNHLVodaynpzMNuWtYt",
  "key42": "4bcNwbjGkzu4PykiHvXpPZXbMB64eNCc6Rfsj6fGYDqpiVVbEiqwnqZDwfdjB5VPnjk4b5mWP4b1Q3th3wiqbwPs",
  "key43": "5j9xBg3fQFGSE3AFP7NG7MuQuwn5pA74iSn6qS6pHitCtGKwUxbnokhTGoCBMvg6sVkvrvc4HVzHD5GGb8UN5T54",
  "key44": "2zNgsCFC8E1X1tFEPTtHocL8WaoEWDg6h5nLWAmPxdt3uDmoegoYz5DYVyBYEdTeXQjuT2TfVr71C3YWSiH4TJhg",
  "key45": "2A4aEnqVHsbKpufuABbtAV84BaJeccpydDK6rEhPCsd6aQkRLipCHvysJoGiqHrFwqRr5Vj8ARHL8pCPk45Pv9A8",
  "key46": "o29Ecn1qoatfRP9nrgeAUFNQhXifjHQmpb38WfDmaUU3tsqtCJ2L15faYHMb5MnzVG6aPvtx2f4LqaYFYEYYKwf",
  "key47": "2zQmxzjSjzPfELzYEuUQ8zxFy36mrMCbL3QPd4VHQgtcukGFFqxvw2je7LARt6kYzcvncsodydoACWubgxfF1mMT",
  "key48": "3BvD7M9pnFrXpwPdcCV9wKRha76u9M3KiQznyAdYyEU6qUBf9N7TWPNYoA6dP3TbETvxP13PxTipuSYbaTyP4FbE",
  "key49": "2cvmYq7QvwX4ddtxxdfTzdTQLgdsk5mwyrMaeimJmjC1RpxAqh5XefamVbvyWpWushPnGv7RMW5c6tB4bJxVHrzg"
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
