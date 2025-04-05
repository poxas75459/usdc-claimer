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
    "swzezQyXSQtBg2fJjhgyUgW8y9UPWUE9CTA6goAhKVUTsZQQ7yabprmcJKq5dM2nKE4UbL9aShKzXMoCCGaWyRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Py8wdJCGg7ueXoZFP4HmP3i9UeeH3iziZCqi5psXxB4ube6Ak9HEX5iqBwfRJXNrMLu6nCYdUMMcgwDYQpwFDi1",
  "key1": "2PKjTqaJobRs2nx8Ud235heMHJBMsENX2BtEZYkTct1NCgEGtmVmwephdkBtpgFK5UxqaFt85a8XM3oGu1P5BoJP",
  "key2": "3LuCoKQKB3h7rYXsnsMufwzX4QLrR6eoN1YoSib8gkSQLZ4qVjEm5W2xKiZq18jyT4VA6FwM94jzaMQ4SMEFTUCx",
  "key3": "5YBNUcEW7kifmGtthwapCx7oX9uHVf8TNfGUPCBBvz5UsAasEWNkVuMcDhp3kEUnrbNAa9KDc3YtTGJPULVZrQ96",
  "key4": "2SGva34SGqRybfTqNGHyQMXtA3PZ2zVQxZ26WeaqJAeuv7V8nvUm29ZDUhGNCjqU3NLRpZ8upmSQJGS4SMCiv9ed",
  "key5": "5vgMC1KjUqiDpbvwkaK1QM6831Fojk7C64Cc5DrXA5xkqXeJLJqWqhA943SgQE4gk1ZpyZJe7r2iMstoJvZQDiKn",
  "key6": "pzqcG53SrDUF7KPaVTit8PnwufFxTRKpNPW23mPHpgWZE2E7tPNPUYk46CqCLjWYaBF46k9reRi2fDX9M1K9XFo",
  "key7": "j9X74UwDTGapyTnzMhNfJGB19TtX8c8o3aiBH8zajHu1TKSuM8CvHpYakp9qVFKCeJkgDvaW6V48U3YHQEzrgUQ",
  "key8": "5Bmw6PHPNFMREfQQW1G52RBaP3CEECsTbkMW33ZmQxQ3qpaumcWgRqRCJC8dU6kghuVzW8m1aQUQ1KZHRyj7upCm",
  "key9": "4TcBxrDwyFXtkHHSEn4ymaoSsFZiV2GDPzQEzeLH2K5raQgJLduf7oMZgp619H6mS3Ungzaze77v4KnrUDV1ZiEK",
  "key10": "3FXuyFFJK2mcWZi3pvGXuWBPdk78dmCmokCUjCiv7CDEsbrp9qBvBq69WdjFrkkpA8pnXty6DK55b86M21Rrg659",
  "key11": "5MTUFST1mDtFPSTREk6vQkg7z6fibs6kJU8RdPz7oyBYoBjcF7fCMMH1ZyAwtE2TzVhCfWiXsJ7Yvc7XDFPZiJWk",
  "key12": "2Sss8XzdTmY6WiFJykLavYTudHpBHozyGUNSgJCKQ2pWXW6m46DKc2PwGaXx6Ny3diW2BbiuSgMXFv1p9YQqXnhJ",
  "key13": "4fR3pgNYANhhdkx6ekS8xu4hGghto5gu4GTzV6Av777hK3or1y4XkSTQMAjTGbik2T6VfBzBx58yZsoKvaYoEiZ4",
  "key14": "2439Prhg9ivwvbfDvTWwwxEmEfFiQVmhyW1FQk7udbSJ3ayBBmQ2qLq6t4tsxw5a4QdE4mbgVrB12ppKpjtEGMGg",
  "key15": "2w143eKs2N7SECL7KtCJKgfqFURZPotN7YoWKksF3fxTA4JZ8kDcef1g4A5RhjtqzDK2MgR5hMZPBoo6Cgo5M15s",
  "key16": "2jKFhbrrbL3F1WZxyy4Z4ESB2yhW3f7gGoGBKAtdWRN2vqELBUEJngrtFiHUB1PKZwktY4wfCD69e18oZCgEbAd8",
  "key17": "645JehaWEpDrYFmW7ccLbrGaA13t6YZ5tmkQuYyLYgtGc92YCViK29tFV1CuyLWdsQE5sYp3dGGze9LqWhA6E7rS",
  "key18": "5tDSUv1EnDM1wcCrGhtH8FMHQD3jecZgWivtSV3CKKrpMAC1hFNfvF4Mt4o7uYi3BmUhdqmkwtaoQu6mskoXCmr8",
  "key19": "5kpdvVQ36p1Ti7RhcJe48fkHKLeobKud6JNoYngXvTnkx81eQAqskaijrbhByS5CNoB2QVXjJsEqgRHF6461gz5K",
  "key20": "3Z6NUMLmiWDGyLRvGJEmfas6vYq4deQMt3Y31Q44JKxnM1Cp3xW4DcML9npXgQQLCh9eL9uaeRbL9Z16N1fypc7x",
  "key21": "5SwMvaPaQe2xmsHfEfFMCLikP3JKr4GtdQS9U1aCcoQdCWhKfvW8wJWYkaVFwUKaccFPHreuPcn5BWXMWDk3xGwi",
  "key22": "4Rh2CeZDARVqQnVccb2XUGXYpDJJk3n33RRojP9Ka1Z7ngWKeKV4UyNk1X4wJwdzSoovcCTyFNdFKW7uvSqwrVyj",
  "key23": "57HKB6NEN3HQBqhJVkR3PmpcFNNZZDR3CtocJMQqiwkuN5PVLNCzYZgR4zSEt9XtER2kaVfndLrgPmt4zEMQtimY",
  "key24": "44RiNayKt2oEbtVffcAmfqR6RQvMpG3zjKos8hPQrkUPdqgXpTiwjsXjYsK4Rws1ZqGvQBtpwdRJuv29khTxc84",
  "key25": "49387sGNWq1wtvCrA3twmATba4QsyC7XeYeneADUixP21ggN1BkGf7okJRVPmP3bUe8op25zDipCFyiFJpJUZrDc",
  "key26": "2513ipyohqQT8zXGt55F5EXN4SquQJrvVWdZaC2Zxn4KjaoSfgUSg9h59VYr7PnVWWzJCkh5ZED3QJqBws9ofGS7",
  "key27": "5Cv943Q4PFW6VAraBkv6nM4buN7ci1oCYaWnNwKaXZt2GEhBd9n3VhrNspZbVdutSpC5QsEG7LHRC3e98n9fiGhX",
  "key28": "4yirZcPdm3TYysGywLL8D7Hp5GuhnZU2tkpYXrn2ohRMEquxHD3cWVBD3w3bRjWSmrDbcUfo1X5TgRz8gL5oSCwz",
  "key29": "5d6riFBPDjqc4skswjt1HHj5Hx1A3nFdN746FE57eGMVGusbNrx75NuUTs4ZifiTvF99VHL1uzLFo2Ss1ZrnxRn2",
  "key30": "22HpRigL8zXaVoCuoVP6Jdv34z9k83SGMF88A2y8AoEuFfT3eRJo6d8P96es55kBcwfevZzRKVUp86dY7sQVYDWx",
  "key31": "4RG1ft7N1FZRv4Pq2ixpyyHhtzY38S3KDES2j3z2njuFUUFveGdCbioPEjeim3roDD5hxvpyJrfQJtCgaJAQzFGU",
  "key32": "5coUjoHaWzhq13StSJVmeds8LVNQPD7f11Cx3yu51XrfBdt6CCx9SLrAR9zNrABQkHguYQ5v17iTuQD6JHJFKhGE",
  "key33": "3B5UvZVKQ3PP8ofZe18LnFs8MkxwEBfWPReWNzNfUHNLAFpuxat2Wadw3Tp758d5UeXB1Wfeqe6f7oVeUYnmmPry",
  "key34": "4gEuGWEjioNDZESf1mrub8vjvdhtFNz7A5XCyQkhtEMe2ACTenUNoCaCohwjj1JbwebWNoMGhm2mA92eux2z4f8K",
  "key35": "2M6Nj4jGcHUhz6YxYgmQArBnjBtNQtAtPWBxsiBBzYfRx4TewLz4Bi1VNHyYpRTnDz1ZNRWVhzaebv7Bfw17cDEg",
  "key36": "3Egh11AdKHAtNLKYb2wb2y19aaqt2yPXxZMqYrUgSQ1oHeNpnnSXb6GhTJiBNNpwQApa9YTJkZjr2jLwhBuWsb1x",
  "key37": "4c63FTxdFUT8nemYQgHtY8uYYbNsGgUy77n7RZt575CtEuo3jR8KeSVAWBKqTgPHFhxmx5X7eLgtiXEU2rYys8ns",
  "key38": "2iQES4BYKP5LpjfJxKcnr5vq8vfxhajf3SP7LHawyiPffMK7H4XnZ7tfUSRjYkLpjoFGr76GaLx5NS37cVv6PUGV",
  "key39": "BKA72kvKNGkr4eqeDQ4P41uDvQ7RvVAN1PX2b6d8fVghoBJs9jKGDYwrshShZRzFsQDprYoirPBNRuo1FReJfC5",
  "key40": "4bSBu3k7E3WnfaA1BFygMZWovEULcPBAMXbggMACh7eqpGgHWGc3Eu2foYGNZH8so4LJNDmpwfwT3856zyV2LmHT",
  "key41": "3BPc3fGeXLSew8xcNufR4WXZZGzkyyrm8TtMxhdgkYYMcEzNF4nKywcKG1WtDYUhZr2PesNdY8j6knC6HFz24pR5",
  "key42": "2rqXWEQK9VyQbXzeeeFEF8v7waq3ABMAA5vRzRJieS8L5MHoys9JEDBq4dtgY4exdQrbri5oj1UfcWkaWzQV6WJs",
  "key43": "5xMqg9zZ5Jb8uVRd5wa3AUr6mGNux66XerfLrKMexuB4SwAh1znMZfdbefDHQnG2RfpKagi1W5682cGa11zijMz1",
  "key44": "3RtvYQTGDyTWXS73dGFi17xd6QrfxKs6a8mTboXBsyLWNAdChsEi3VttjRxMD59TmppdtgAutJCJVqMQ8rehjNBE",
  "key45": "54crj2Nnf29T1WyNxeS6yGoB7gULpzowzsYXhhp5Y7oncEkWYw7NwmWSLxqvz8vrduVGJ9f74x86nagd1oKDi1hH"
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
