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
    "4uu8Ad1mbM4XfPYRbzoKBYjJzPqcEWnTsiSYJwsjTKwxSjtbgq2RjAvMwKqC6K4nTs5ijqyyfFFRebcrgSYTjK4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cBRM6KDVwMeHuaSPt8oZjpeZcWffSAiaBqDsSKJMJBecKLXHsfjWA7o7QQCd5yWKC1SzVf7QgDErWqjqonTJsQv",
  "key1": "2gJuZMxFuwKvKMS4Wh1Tvbq1dR8jg4U36VHSHfaPUdjm2qrJaL32EWfGtvCxS36SLntFukMhfsqHmcUBjvWJ33LX",
  "key2": "2fjMzkphkB8uwL5yEixkwdbbKP2HG4mQZrNN6Bg3YuQ6nWihQngRuJn2dfNdyfJMXi94YhZZfV52Kw7q9PHqhziQ",
  "key3": "2iMt5id25dVR92byZxSzKgjXLMoPKzS98cBve31cVPLSjQG3biUdhJe45ZDSu3ACmTPS8rFHRWuqDb5hT3Bieqru",
  "key4": "5BDRQVjSmL4TwPCqBLwAJzYhtB7GrEmAyfdWd8mzcbs2nzhVWrVN4NHLTAVwQCuFr612aqR6A1wx7Yh26QNVLg5Z",
  "key5": "2hhdhrtWNNSqtJVV87MMKn3MWkxsXMBgcvpfRabmQfYHbWmrjcqLBouVm18CHvUxU8KyW7XSDpckDUvvGCMjgUyB",
  "key6": "4PQ5BKvFQ7cMueeTFYUwHVWqFqN9mnzSwxUWkmnkbJpz6YgVWLXP1QUibyTbUowWXFB48Y2SGryQqwvaC3yDyMFs",
  "key7": "2xjqtZuQFJhNbAGG7FQQ42zenC6QYZz7xkX8yKXzQKRv9jZZNiv3TkS818hj9EjowHTfrWU8Z2dtKE1vEMZYaaH7",
  "key8": "TgySyBJgZ4UZfJ21Gk1uotVuA3iH5hZJ91JpKtV7ctbmrCRZ6gprPqrHjMBsn6MpEDNVZdtApV4ccpv69n3Xofr",
  "key9": "655r1FjBiEFLFk17b63mYSvwtzJZ7o9CV3NTMayVzWkpVC5hriWwzMvUsbCFDhLSPGqe3sx9izH94EfhkqaR6eNb",
  "key10": "5rvztfxozkUkRipX8V7tBWVvbp1zfMoCJXvQPKUUZDAEUd4pQNpM5RKxCpJM8M3EiKcZ4FjnUpiR9cqfMQxkmrEJ",
  "key11": "2hrRrdBpuQUrk77pV74scUPEVLkk7dfMpxDYLr9WPrSoLXiLoMmDKzUCBkqompf2PZZa3VMdKXgTwZUHXd9jjFgA",
  "key12": "5ziwCv6UM8Yicsi9L1xKsRrivApqoKn6u2BGRZd8A3c2JSaywP2GG6gazKfwPfAUMFRndDA7D2HY7dQciaMT1Yd8",
  "key13": "3m4ci4hryJ6tdmtMS7oXLMoDmJvAhDdh1BveBvASEueFFHUHDY6WUszssd84Jh9aQzicvmKT1rRkEEvHSFaTLScr",
  "key14": "4dBWGf5WuMb8k3QA4iyD1YgBP9pXZd1mit1fqRhfpEAMPUTef3mwZfj1AxGrpJMrUGwMNLtwbKPLzFYraeQnERKA",
  "key15": "zB5DFY4CqL2S9LFNJ2vLuRAHfAWSW2DBsKztvsdn2veVAfcuhcoa3SzM3hasuzvXkXxFtcZJare5TCQDeRJAmyx",
  "key16": "5m9aLeaJ9XKLdAanbdQ2MzQFwqYcnmBYL7MWSNLngMxe3maqfy7KKkyMAGHroKspdPBaJ3nnZ1ztiW11WewmqjMP",
  "key17": "5hcx3kNQR87cNLauR5ztj5DKsojeykgSmGCr3zrnuLciNHKg5ptbugFanUMzKpEruuEApdeBoRveRkQ87jh4sK85",
  "key18": "2tHpHGVk33jgNmny4kZoVvQL6XgdbNHEssnEwqPrubDByGC6DeGQDShz7RM7rK5rB7qpLZZ2n4BgCn7r4AYj3AVN",
  "key19": "4KoPoEemsorx5PeUPFTxqvr2am5ABwhfMQjJ3nhsiWgoXnVgKPAwZiHBm3kLWTKXoEdHWe6y8HAZJewk1d4TAGEV",
  "key20": "3ScJKkysrHY6oFhwiwUbYbshoRX4aR2QoJp57w7De7o32Q7xop4r7AWcbbVdKmiYND1QrvaigvEokwK3arUKt5J",
  "key21": "3XzDAA3nyhitEG5JRpaCSytxnymn9BtDCzJCA6XyXZHscQTG3vUTSUhGStzickeKrDVK2i1wphuBN213LoG6tGz4",
  "key22": "4Gt7g6aidy4AFyxh3EWevJZSQN4YwCss5twDnexCQcGSAsB84QZ3o3cpZtKpcmGmDwfygs58QYyF61MjA5NKjthG",
  "key23": "4JiPzpH7m4LjWm86E3QhQhfLd7mPG7zLLsWJMFkoE4JJzxsJoEphZ3SGGAsXsJKP3QZ36DiMo9zu1ELuAqW1LR8w",
  "key24": "35AEy39kPRBoL4G9oKwz8gNJpYd3cRcojfKZpstWmxQYFNhMH1TYYHcDDn717MPmsAYUmAJgEjthxZrcdMV8Yxf1",
  "key25": "3QjnzTZ5AtGxKJvTtP4peaSC58YG3woYkimrDRr3QUfBNCTay9wfD1NDEv18SxQNj4X6JC5QWrPDytxRLXmFfWde",
  "key26": "4Gchg3E2MgrpWQe2XciyMi9DHYnc7bA8UheVtDripFd9sDxiMWHr2ARwugf8DqjPMhXa3VeXFdTh2hPqiicyEkKU",
  "key27": "3mJXbrxvus6ueVHQPChcozNeZoHf63D8XEmpyb4zoDvjZaatkKXwPZoutvUBX4YTwnnSLbFEhUDjjnNZwAxmkKMc",
  "key28": "ta5opaQg7xrVKYQBLrBoktHJqKFgLgc1ge6B1GWiPmJXAhFVdi6jopgghdpt786uruxM2A7amzkN4nnKXkfNvfp",
  "key29": "2rvF8VfrRyGhSQgmj7twEPmwRHfcmgdNSaz7cauFzvSEwRaZamYQZzEBm9M1Ygtridk9HH6Q7f2BoHv7fTiNX73i",
  "key30": "5hxD93HZyfhHU52JrM385pctbAsTHSx8dLHgAATVMspyJWBf8PRhyY67uFvd4ApQvG3hq9VFbsGXQLQysM34cV9B",
  "key31": "XXQDupC6T424AZKvfHYwXGbNma9t9jiem81am3deuDMfiGQAD4ZrjN8eYHZxaoSrqAZvr6wmqFvHMBvFfwzDX9P",
  "key32": "2DT3JBCHiEYVUaFN2r7SoYbFoo9eaED4kxHphaEyDKvgFp59wbFbHYWJg5ywNF4dcNYDZPEDwRu5fuULUjb499DL",
  "key33": "3cebT7QTJvEjLdgJGzn7gi7EA4J6or5dvqhehUQw1CfZqHYoP4WgnjCdbau4U4yCxUZD5de8vTxAAKdrXBfg1AD5",
  "key34": "2Qkmb2efDLV4qaGMYuXa9d5gS5cHKW5ZuriAb8KcEtfYhoU34sZfqQUF5dQiJvTZRHHJTodN39z5qqSWDeCLZWuc",
  "key35": "2qZ6gZTsDnb4d7UBoXvKDaYUpih6jGinsXk8AKPVULGcztLgv6tDKjCk9iutB7CmQp3nCu1egyGmEvNEXvJ5ET2P",
  "key36": "3JQTUzrQWVCbZ8fygB9Z5x8k7vct4VDmxwYHjx7fF53a1LHG5eXnnMzrqirbrysnSLChXYpEPZG9E5K8MDUyxjHF",
  "key37": "8H2yJdu7Jdc4Hif8bPUCJMZEhuVxpw75J5jjygReeBhkb4dPbn4etJ9AA132wkCiMBZvduPnANJh4DL7ECu8mn3",
  "key38": "4znGiW6UG6VVpqjYEDQGbU74HXZFEwYWf3f2fsHy3JbvdGk7kyDxP5KvDAHpwwkXh4b9rcVtuj5LaJjj4jpLpiTd",
  "key39": "2PXzMa4A4dpktUHYj375icReVF8Simr7N3RhdNeCNZaFYUautc8mdb3QqgypvpkCJHrN8nzPyY3amdBFo3qmG1uA",
  "key40": "4b1CY75emfHHSCyihgUbjNpCHrTyEBHMhF93cKoJZkP9rJ3Fqd1uNpvjqGaTxuRt5zcGCagQ1Utu5Uwmy72QYnCp",
  "key41": "5nM2miKGQ7PAizJHdk5VPs98W8obbsJYi3Vyuxvf1zc1JjHGPBpnvKvvNky8o6GZAV7bmfS1GdusnHUE8KU4LpuL",
  "key42": "4Sth2KbhCUGLEm6cCnSSosYxznZeHsWB5w8FLqpSHUB7bVVekR1W7AzAsYJpxUk9YzMy3JsuhpAvcKq8w8M5mgFi",
  "key43": "4aNXiRQAuhJWR7oH8nvrXajEMcZJP78628hN75CuP6UtuGs8P4DjUHwcMxeDGzdnaCnRV95gUZbgvRvTzPmPk89o",
  "key44": "WJfE9tX5FLRzVKbrqZxdsgAGeV1j4ib4Y9r7W5N7jJvWoEchRmmWKA8zeoeQN2ruRdwY149t6YkZX31ft3KTzqQ",
  "key45": "36NP7Dai2a1GUaqzX2HbjoYiNZdUqTaR4hPjauZJd2FXWhpDfrX3BEwwnmB18dQFs741v61guzv589xhHPKcuyEG",
  "key46": "5u6pLwBxMRx5v74Vsfnj1BkwGDYmWZnDwWf7NiWto6a4abUN3gWCa4qRYi2375ZCnMfP5yV8DwPAVNeLu1cot41b"
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
