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
    "35u1eBcWSy3taQHWrX3QRvLZhqQq8rwjCUb25EGg4ibd6DMnVgdVUb7CqsRhaoHDRaqGNtfHkWUATY53A34txxoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27r2ypWy1i53aNQxQgyYLvYj5Jp1yq9g2MqdxktBLgzA1CsvDQCFEp9eVCQAfVW2fUFs6Apqkndc7ZVNo9YYefsP",
  "key1": "64h9cpVPBoJuNtXenWMvmNoC35pYMDY3MwkHgYYJV5ZK6MaGpUcACTgzWhPiUGKn4j4QXoaB7h92EUg8pGxc86Nd",
  "key2": "5HYr5MPuPAr8CyYwJnH2u2N5m2shxnDD8egNaFkuBDGipm7KERKzWorUnnHEqfgQCMZWkRiDL1jEiwkxncJx1Q2J",
  "key3": "5oyAhx9Jgh14Trse9rzCF6ZJKDxJWiFYwjJXTU9Uaa1JF9dZZgue5gJ4XxW2DL9jTMWtWxxpejodSjVZMSw2exdu",
  "key4": "4c1w86HLK2gnzr3uFNGbwrQc1iKRnxbKxunVDTh9o5SSVshLqWbyBFQ1nUJ3HJbf6Y4CEK3rN6shzA34ZpduZPJm",
  "key5": "2KkiBv2jgiTsZrgHAn2FuV8TJ4gHv27mtP9tjY2DY4ruWzRyQe2jzLiuSnqq1DKTZXtX1SJuimSVWaahLkPaxjnx",
  "key6": "hBKxYzvhH47XBXFksRZSZkzoEfthD4xezDqNnCuXfRRXwuujwML2vbgedE4MyKYGL6L7TzZJQD6ouByGTaoUHui",
  "key7": "2iYtFPrjk7H68f9aiafBuSgQi1ftZCoM4hbqvgugZp2gBnKUpjhntJhtxeb9NxdxPRKHz9aazVqvTSd3Fsb4caqE",
  "key8": "3ehC1MA1W6ewj8SRuy3DTRguiyLPocGp1P4iNXKCM12mcgfFEyeBe5CEpM8AC9Hhrw64rMHwtGrvCgQiaS3Tb5U",
  "key9": "bQMciHvbDAy5mQXVvtmghg6gSMujngEkrHkEqy8No57FTGN71ApZUoj3Bq2GNeztury4C7Hg9eyfCr7qcsW6nWt",
  "key10": "2ZExcLtPXKgQU1eAWdxk6LeqZcQ642nGWy6jKcAqFSHfNUXb23V64gws6TWDZHcqAXD7QpqsGixtVaBoSD5yZK6Y",
  "key11": "2PKK7WRs2SCA1bo7EAw5PwhZNPz1Rk7qKv9a9pAhAnJ1Lxux79ygE8Cqipo2bKmCpJW3GZrBoRkiPTRaztaeaxF4",
  "key12": "UMDP3buqwT3gbXwGFKxeUNCpfP2kFsjzUdWegmrUb8XcsjsDsq6GfokY68QAwhaKyP5Avv9X1MzZ6vdeSSYHEkq",
  "key13": "5mkFirokcXj9mpMzFxCXpQFQSofzieuaGuvYGK7UrTGHhh6R3yPQfzfnHdpo1aJ3KgsZ6VUSYPZ5A4YeqSWCDBFD",
  "key14": "fdWNhNDUYK9JPtMHXZ98apm48XFkkzUCrHScDzNVpwtqHspfvCqS3bHje4gFGZdS9FyDyDBY54YqVnXhPZxmLUh",
  "key15": "3uyGSVZW1xmrReXceFvPQop71fVjSUj28tY5v3w7cxX9551KGUBn8tw61L8vdNnmuvncgWEjGHT5Jvc9Gn68NRbV",
  "key16": "5eForSDKvh7fCbodthrszpWhRz2C5ZNH3DBGMBVBbqkJqbStjj6XKgh22dovKWgGC9JcQQMxQaQJDUEHx8NYnLph",
  "key17": "JBo27A7zP5favY7tTDUQwGX9owUTkR8zcmefQJ2PTn6eJuk5fG9xN1aqmuxGKePbUrNNaXrQhk7RsFCKzPekR6r",
  "key18": "249TaoJT59W3PtcypyuZP9Ew6C9c2XrPW9uE3wLa2xxMS1i4N525u9jd5qWcAWxa5pZs9SBfs9xi9nLVk3TQ12HA",
  "key19": "4QqZYnU91TsUpYAFSYb8XKrCuWyHYBT75Atsbv4NwrktKWudZ5XxAezxMrgqA3uEUsW89GqV5yEGGDWbZ3oNFQKm",
  "key20": "2BgG83kV3JogMaKPCUH1iewSPov6QUzsE6SWRgwPrckcG6y4TYQizUP8pPbkQQUcFyTCwUMshSFKjFBDJ2nh6kJg",
  "key21": "5fMKbSipNj9tks64iBtr2W9HtxbBw9gPmmN8nyniQaAVNgzqa7DbbpGBHYC7phmbANNiUZGHfocCMGUxf4y7Ny1E",
  "key22": "5C8eweMYWrhGe2g2vAKqt65Vy21CCZaq3fYkQUFqXYzzCJegdrFEUMRM5vocC6TNEUXSbEYvGzCVkzshGXqqqSXR",
  "key23": "aFG26iCuczetuG4xcTLFkHLCsQUmBcUetirhLcbgFyZDMV2fqNreugRiWUiXSyZcMR79rr1g9GkYtdsQLBGn1fw",
  "key24": "cLzHQUy5g4SuDZxC6sL1NdEsTrRWuQHHzbuZr6W5zD62tKxQSxvB5RanzA57txt8UKoUoBJoeQz9rwApprCd5vk",
  "key25": "ZoCbHFRm1vUBiFpRdd98aAPrcDnZy5kme5VthD8UiA5SBq3HLfz7AFk1FYCP5Kv99yz2ppKEkQB2uDD7oXq5wXj",
  "key26": "4Tt2soBDKB9KCe6y4UC3dopLUmeQv3GXVRq7jGrRNAZjjBEAZQMGUJt6THchxRbAHzk28EaFZ4XXP2XoZyXCAKp1",
  "key27": "SNJnbb6A4uqbS47fKY9FGUZ3UN5qs2n7vcX1V2HncCzaZbXr55WMYoaLASUqZAQEbZMhqpB5KSFbqfvEcUjycso",
  "key28": "5KHEDjx5wAh4fi5pPyueAqgsB1FUy173kZ7UVFQCEfiifsJbRoQpmr9Y7NaJuVkqWxuEHq9G3HULtagJr3mh8ecm",
  "key29": "5mrSrs8nXtUFTh5NRwUNDuhU11tc9RC7YhgqqyShT49hgAVjDsPkdQ2WfSNrCvEyQ9fBS2QiSPCukYMvQc2pTpk1",
  "key30": "LxtV42p8dXcaL4qdVpJKVWQfkabnbKX8RGGffeEp4juV6iwqcSJij2anNPJxqA9jaWTosqXXHpd48PigChBpSaM",
  "key31": "Va4Nz9rfctusVzdbFHaBLdXusrdeHTaSPaX4hHjbwQobco5vLuDTzt5bq11tbYgXxXJDBV8NtoUTg7nK5sftt58",
  "key32": "4diNnXhPZejxyRFmrMScsvT7QiMV5FnsbSKMdXE67tDm91wKhXaQzLTdPCUbBdxEB1QzJwcpi9A4VinFUTMHFtnQ",
  "key33": "2fFAwDjRNVvwBJ9wLf6AJhubrc3VTaUJ3XAtfWcSZEwNpkv6y786j2i91Vy9EbPsfvPvbGAjVXWwu3wfwEbzXbfb",
  "key34": "3S1bp32Gz4YG4jz1Eati6pTKynVSQCFcq9SSXNncGDPeD15nmteM37kcQz7XZM8aG5q1hNYWhVWcTafGs5tWoNJC",
  "key35": "4XXELheTTnyNdsRDQZHDGF4Tji72CY4Cwg6FdeWQXnnApxc4U3TyWkzfELhZEt6tJfXtzryDqKjpwziZhDBsb5ia",
  "key36": "2ZUoWFVSq3KywKKLwhBKLRwLcLRHetyRw3k88rrwZVXdbEvoiqkzZsRo6kh6iY8awuCCR7z23knPt4haR8suhsBD",
  "key37": "37KyToap9b9M3uk3wW61jq2bEegq4wWPrhGx7vRXRki2Kdgb3NQeBFDbP36QuHPkCqzsUf4Lu4R346HQWEU1k4m3",
  "key38": "5v2rAoMkGVc6m7gZ9mweLRzNdHJhBs1JWWtwQnNyhP2sKi1QxgLrFUbLCE2NG4tpa9qQa11vNhtSz8x3cTAEJEze",
  "key39": "4rNAZr2fz3RNEfNxheeFptgbrddwjHnQH7gGaNnLXvUW8RnmTQYeX37i6SPkSs7Xssg788eTiwDqhN81CCDnFMm4",
  "key40": "HnzonpURWJForKrPsf4twZXpyzzeRGM9fHQYQHNaffaMXQu18f26RYx7TPX5vBhiRhzkbzzAwDPJfLb97GzAP8R"
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
