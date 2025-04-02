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
    "4vi7jkppGviYTx4J2FPCinTrq13L1f3cDBa4YeV6RGCGVbkTuHbKzMEMq3hs3eBQhmEmWs4KSfcJ26EBNRgLagjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48CcXAJLEzQXszABrF93Auo4we5XcoksEabJugVFhP2JwWZQNqPA7h6anh72T3vANziTAKiUe5rJfig9NARXxCPz",
  "key1": "Nmr33NYpnBtFb9sorKLMA661A3hJS8AU3Z7kfG3KCSvfQ8bc4YC2XgvG4DMDSBMkYRqRd4VsoidYHh7PLEaizbJ",
  "key2": "46MNULCWXytMwPZWYMGtjFWbVi4KGKiAzYXUKuqDWriJrkJq6zzNyXhvBxkvAsxKeqA7yaBaxBTM9xWYo1eLfz45",
  "key3": "46pHwaje4z52FMyUpGfL6Qhkgi6GwA6ZCdZYD4y7BMEsNmjonTjV7S6siJZtnHVTou48fFsUSHaoL26D558CU3UP",
  "key4": "222Q3qJNrPyNLs2N5Z3pjFYPfTy56bN6FS9hy7K82iRjNYBQPdkkoAqtD2ffaezPcTMXZ98Y5T8t8j98afuHNovo",
  "key5": "2F9HceGbEpAC2Svx4E7BuXVsMavgT25aR6mX7rRRkgji6h3gZRvLSEjiQkJggWVGPBQL2M64o4gJVwovNhhogHcj",
  "key6": "5FqsqqdRMHVFW8MNMGmutHZPvBcKnbRup7h4kFWk5DxXdDnkGpbi6HsaHwtg2pWcsWU1sqFQAncWmKLLBfx9tRXa",
  "key7": "42Tf7xdFUYsxcBCPaWyJ1KcCJUxWNXW5jzZhP6S71tfnzqio5JbWqaZyTMBfUkbresCKH71aSd2RtZntgs5MKbgJ",
  "key8": "39iz9983X87VbmGGFPgu4vVp4aKyrwSb653UybKQkJwoUyykKQW21AmsdK4sCQazGL1hM5Q8rWCfmFjm85DAq3s9",
  "key9": "4XYTXndHfJTtCj165wfUAb8YhHD6uEemvaCgFFR8ntUrjeyH6BaziphnYsM1RK5a2deZzMdh6ANZaDzaTYLnCvhY",
  "key10": "2XiYEAZz5fNgwyvupLx9znc6HcatLEtQnAowfhNYLAEyzqrt24ptFurQRDXmuVEPpjkabHUmNdRfBCfF5kzTN7Y3",
  "key11": "2gGoGAoJgcmf5toySRk3BS6aw4Q8VVXDatidmhvv9iDPPJynFSCvQu9Ngzq8n96dbM8YHJXprbbV9iz9UJ8Sj5PM",
  "key12": "5G4rnQbzXDPNEBagUFVKe2rmjXthqEpHnYjrMHUqViDvjRbGQYMNCAo74pQZoX7nWeWy5ZWfT2iKAT8fM8k1UY8D",
  "key13": "vMwXS8F2VUgcbTywjeytBPBoi6EyFdNKrxq7JgmGXuNEBLonYR9duf6UkwnBwTZTyZEFKiBf3ajx88GVohjiVkj",
  "key14": "zdBCmaNGTEsTFwgQJuy78diBG5pu29No7uGrhrHu6dm2ahukbTxtKWAZYKFwG89uVbfTLXjmVsxdveWWGzxey3R",
  "key15": "zwmFwvWt9vWE9KfDE7UzEPz1KkxbV2QZ1BKoA6n4jTbTUPJjn1xQY4UpPgQk38Uw348uoJTELzKe1WejYci4cRt",
  "key16": "23SKYjjcZvRTbTxFgWR2r369ofsVyMdGz8fvxJpFX4PWN9xsfhQeBV8D5H4ukfqvxm1kJa6Qb98EpP1frSEVpTw5",
  "key17": "3LZWgT9XoA3jsmAmZ4EXpLyNoESG4yaZGjfTMZttm3ftah19Edgd38umZMPzBj8vaxVUzRJxKaQiR2Ss1aH9mbhn",
  "key18": "UVvKFAcuuaEPbeaVgkocEdfV67uCm3Fa6De1YoC2Mwqxp14SmCgXQcEDeVXz3LAEZYgYpZ2sKJbxJzn7Gam9STC",
  "key19": "NSXR7pNC3CT3Hi2QNUivAz9EQCSwU1UsSNnB3D4ruwqSK4CXkEZva3cwpYiSWfCoP8t8NpAmtweS5Mw4C8VjFUu",
  "key20": "5q7vz9u3XQXJiaZAaiAVuRyZVtYNAQkt9osiGKhM8PZA8xF3a4gHRVEwDPdsYqdgtDyYbVUHbT7q5XPWrUVpCTgJ",
  "key21": "2cGpajtyx6C3RJjhszKeJAitNufzwjox5GDjPLdc56peS7VGhudMASDv2oxjyoaTWa48F59Mk2P5rxMD573SKgyc",
  "key22": "pQKQWoz231cf3WGnMtFaRu7PmK7xipJRsrBbhUEg8xFW1B24brwDnabswDfyLY1KPrUEz99yMw1FyM259KZvJ8D",
  "key23": "5hwntVUqPNnvTEmwQuzZGPPyTgYZChujCYtrnbuLnoePjwMH6bgE5PwDRZqUNVmvfsuBjJKQ416PnFaC3RQfxHhk",
  "key24": "45WzuJZAaF4NFJ9CZbdWBpuwFAjeQfQEqvHykKJKDY37uPSAPANZkbnAGUeHfUDPvxgiY6yaqN72h42trkCLY2S1",
  "key25": "5ztYRQUCi2jJtBkg1UeVt6b9egfGe7uF3gxVEWVBb616JrAFh66fS87Rhi9pU2ZxDHb2JLjVrTRNt4hD2aNnWu32",
  "key26": "2SmbHLsDeGsrfi4e8MKxum6zi7whGTpDwcgrqVEY2wzvgbpSvm9b9cWXVy2JLjphZ928LuE1xfcyk39BKpZGEMrN",
  "key27": "2xHdHNkooqafcrd3QYfEBfeAijdbPPca1bx4CSM6qj6i7PbtJ7exsYaDDUC4U59vy1ytjr8eTGWh5UN2mVyjYskg",
  "key28": "2q58GUt9yqx8iqaRNxEtVFGkWZQFDBYMdcD5nQi52naD7yKApi72x5vpnAsmjHo8fvo5H31u8zrRAXPEv3V3ox7Q",
  "key29": "HAdJj4phGQFAHJ215rNkGh8QfE8fmPKjHc1mtiwKvneeB31AeEmmeY7HLS9apSVZyaKR4vvwBPKTVZwK7ZdNkqk",
  "key30": "4ctPQnn9yWBCS1Tf8rcFdsN8xJ3a7NfFFU8pczzQ51NaieSEu7fcY4K1E762DZVmf4iNpCqTscLQqiFUxgAiHWLB",
  "key31": "3QL5YE1j54Mw5UccWwqAYgg6ZpjRshq8kYjUZuiFXD5nkXpg6vuTXcJwskGB4HcSFwtTh7r6vKkWrpiZY1RxUBxy",
  "key32": "23rKwJKJXtm1AqKHWrJZV7hddFFPLX3ep6UhAtGS61d4tHBSjLPfaEQD3JE9aVKCFnKnp5cH4BpSEqCbUaE3aKF5",
  "key33": "3miFt4je7bR81Kz4BERk2PpRxi18YqZSUasnMdh7v8iCR3FaX5MsEfMByTjpwLa5RKT8aHYkox9EzzHbTakzMJDo",
  "key34": "5F2tBG8ygfTz2eSwTjAsYgbUU6xwMA1UftKxvH7VcxXLNjwMC7DbrcRr9SGS1RU3zVABvFiyVuKtx8Gpne41ZZMU"
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
