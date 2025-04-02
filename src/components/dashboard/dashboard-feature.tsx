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
    "2oPjnDk9h1CUu5ZBaVpnwMMNWjKyQcM7cSrVEmCLrTyPj7efp6TqkZgTJXEPdYrTdTwq6Ynu6BaisqoiZkDJfCp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uq2uEojhxdTha8mK4hMZee2TYUL18j3UyyXsVHpTViDCEej86vjh1iakZSMStiCGeYdk78qXPPuS9iuEEscWr2g",
  "key1": "66Kkxz5AQnYi2Msjir3v61E1czkLbDGKrVj7J3cDVTRhMewPe1mwhmJjQJYuHr8EexdzxtjJ99noakRaS4J7QqRV",
  "key2": "32HhGn4wxncDwG2FuVwM9ZFCrmX3SeqVgjNF1UBkjGvn89fXQNTZiJgGP8Duapi2rE96cTypq7EAEYsFnJ6TqKZn",
  "key3": "4K2J6yV3bNpmiCoJhZc1BetbRzamecdos1sBdi1gpvGpwjaRscqBF1SkD7tQvRFMgdGMtHBeB82hkyy9JCDQGLoJ",
  "key4": "3t46tgGjgEBSHXJ3HmocWnkGkrT1K2DsxXrj1GjDsHq8P1Jessq6GidKGW1diR7jqj9XM5NWrgx72t2HKqw2NLZg",
  "key5": "3VCUgRHiZKNh2UP5PsEB6XpMtHwst4hawhdjR7sDggzbKKjJ68ffgjXpGojrzNjpmGByhj92gVBqoF9Hk2o3DeiB",
  "key6": "4GdMX8dkmmuEu3VrCzQwFmLjDeJ5kpdAixYmicdbDVKUtHAfkcNCaJnUcuywCY2uCmN9WStDCZFXGouGa5ZVVrE8",
  "key7": "Wu5i756cenJiPSSzkqujvbjyGJYMi1wqp7MF4BQ4yweWadNUkeQkupPzWr9YEoDFAm9z8zshRn99efN5x7ZFGGS",
  "key8": "31vChmYyaVDtRTKYJDfSMq3k3mH52YFN2gzdxoLGCacf5X3vPF1C9nBz81Zq8mRHBcDqtQB7MxmxtDhUutdrfJH8",
  "key9": "JnapM3aWZ4LqA9w7WvPaJstbvGwZzttyEwGhru5y4ZsEhDUJMyP4i3axQpo6zQo8vMP3nDaHeo8NdahH6bDkNR1",
  "key10": "Shz4uKmX8orwF9zL9Kj4UQLqiJQ5VseBP8FEUKapi2MGy8Wws3VsSeV7Qrvugq37z5vQhgAcatmBDfP34ALakN2",
  "key11": "3ESZUvEvNK9QSS5fn32BdheN3hNKJJ45qc9L9PC7GzxrFiWGfKkazyNkoETq2EBywJKBVVeFEm7omdA4RUuBn8S",
  "key12": "3Tk29zjRyJay7CsLHVn5Cmn9MdiGaggt6SZws35QaKHb37sGECPNpg9THdT8jtFPmfiJoJceA4mA4hKFmvT51khb",
  "key13": "in7pdaFhWV1SbUYsDbrLuP8jwepMBfZmt4dAyVFQ6g9azEogM6wZz2hEi9hFU4H22KBWuXXnz5vVBJ1ZQNQwMwf",
  "key14": "4fYzA8Fs9V5X2ps3vx9rFBgaKR2G5SFVfZm6gkdLLMCEBcfsaJmKSAZMTG7YAsgKVLtdtiJMH5s9smfaF2Nz5XCa",
  "key15": "3VMsa7sv9wyUgwjhdVsafGLTTarJAG5rQ5G4puVJU8tSt3exH4HqQwDmayovwasqtUT8g7PaAQ3HWQyAo9F2GBHJ",
  "key16": "4rdoK7x4otSjoGL5o3J5WQV8B5UUvYAD2deDpVP4CCE4htSRDMXrb5RiJQ96YYom3pv9pRuV5SsRFhQjGjwYfwQU",
  "key17": "27dXNgJ1hZudmtfYxoBViCeYqBFPxnS7MjBAxV2fdadcR5rjBxapfcPaPQU72ZyP9uAaeP8huNjPKLBrF1RKxKw6",
  "key18": "2YsFEqEPqdMUReghsLRYTXbyBeLF8YEe58FY6wjWVHMJfRkcgBUDr4tpNdNB8T4aCrZCh6QvaHfsFjJwZbvAKHmq",
  "key19": "2HfXFMdJqpFyFpVrqB2j9dgRZfQVXJ63Wop25WUCNcWrA12Yo3WkoSVRCKkvGfCNFdMATKUECcDrvQbhTBX39egL",
  "key20": "2QcmdieDqZzsLEEFLH7snckpnocThNEcRWudvYW4DiYJUaAR7UPJFV5HiSvxBjTFNsA42jyQjDZpVZVbfcCyqnxi",
  "key21": "3MyqsrsDvQ3Raqpqij35vXimkEsPs9w9tY9K5rNCVV2EMvSE8FZtTiwW7ZVFBoyHDcnoVSxMQJH9iYaosZPcNU5t",
  "key22": "5LbsFsHDczPYsoGYEZsv7DTyv5xANgDV2gZ6qu3oXvDCq9pzqGDpdznHaNNKKCmJc2szxkYBzrdoPghardfPK558",
  "key23": "2WAXbDpr3Q2SQ3XTsePWetZqRUaNBdCr7wt6ZaMShuvF9odHhDrSocUzndHyoC17RjETtgYyqr9BDCrwWPJsJwBF",
  "key24": "29uHwGtn44KEZ3RbgAmqFwBGfAhhhQWWLrh16uTEfFKytM6oYP3taSvFyA4A6ieJfk5WHmYT2fHjiLfTEDVFq4fA",
  "key25": "vdMdqRyiWuependnmx33Lx6z2KTUjwYnz4VJuLQKfHP7rWSNnLX61mtp61SscJKKkCFJwrpTxtB85d24L4NtLLu",
  "key26": "4ypTVDvR6Ffvs6rwepWCfqTLSWGzBDuhLD7nc3uUsdE4RLdkm8q98Yuk6fg1PCAanZQUUzAHrC2DUQCGB3U6ddgy",
  "key27": "dzPKGSC4X7aV8u689jDZug4NtVhY6zEVfNPQwQBWBaoMXyo9CtpjW5dh5pAE1diDXbS2vxJgT8xtZsZdVhGL6ZY",
  "key28": "4Xg3Y3ssnaMD7Luu85pyrUZP7DrUoP58vSMSUTrfj8n3gSkUvWAjqfPwakWAQZM2mzfZ4NWCHUnGsPYBEduch2Ct",
  "key29": "2z1FD8tgokzqtKxMyYq19n4RxAqvVKD373LZarrDCVRubM25AbaqR91pLsRVfz2DXmrqBafY1AZhuayRfobxCU14",
  "key30": "2xVSbxpv5CXGcek9GT8QtRfMyyVzJsuqWv4tYMioDx5Rw2eADAKA9zihcQHYHBnSM5sezAcqCUbZgf1PwJUP9wN3",
  "key31": "3RmxXtTokK4ekht7kKzm2gFTavei8e7yiS8tV8n1biNcNQ2TnwZ3JUey914cYDdeS9JKb7JccSp15mNT99Nnyt6E",
  "key32": "2kw56CarbvTd2N4vQkHtQwgzEH3kCCtdAspDjMNoB46aw3uH56D8z67ovErEsEZsJmTACreVs3EQviUrHEEUFy6T",
  "key33": "eUUkLvavS3LznjSgx5JS1gQ6Vwzdp8uox3cTFeLtzrufysnhSmyH9xAk4pKUxH8LoSxaKh4kerfjzGQq9FKFXMX",
  "key34": "2b3eXr9qRsS6DwbzGG3k54feurJQUNfXbScvnWvABAu6tszUmgVEvnsCgkjSpUno3v4LLM29RoFBc57gF9ziT2yt"
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
