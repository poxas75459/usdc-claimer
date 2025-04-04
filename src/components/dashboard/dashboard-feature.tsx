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
    "2JwztbNi14aMDVbijR3ZcWbVJmbGznPncLCX49aYT8oegs8dP1mJmraBcgdgr2KCtjRZCaGbRLiyxBrJfrsaKpRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zxu8YQQ3Hbx5M4zfHfwKLvY8FvGscBfUmvsQ49C6H6dcWygZRZoEzzXjFQhBvANKoe7Jz8wZiXgsSuXesohLYwh",
  "key1": "4DJjNpz2TEVMLthZyeJ91L8pzf1FGTzJ9pDmrGvJNFv4mEUVFQmSx2xDFnDU9hY2zfzsZySmphZ3CUgUj1UFva5n",
  "key2": "3jSNZpYSZnNtk4EGAgsyQMviTRukNp1e4cFBFRMYdrzShXKD8XLuQ46QLs89VQyzFiLVAPAv4nXMfZ4RamLRYYd2",
  "key3": "268xGXpv34X4VHQfn27hWukKSakwJZy6nvFhYhaGA7thwAK8fyPDENF9k7X54jKC86dg8nYdURJWVCtDm2nJy8qr",
  "key4": "22qPy3juVNhsbCfRXiiMoGz5W5SscY8HQx7b1VzMf1mDVBorWU1Ntj653iE2KjHQHT6PakHikBK2jx3QwyoG4Y9u",
  "key5": "447fGa9jnXoxDUDMNJc8f4PWcRxtAwFDEtS5VuGdBv3Y6vuxfqnErBoEErHRRigzsWfJRavNDFpqqe5RkN7QC6PG",
  "key6": "4xS4fHARxiUYSDfCWTohAtKQcsB3dTXLx4aKPp2fDEqqauNKDgos3zjHKViTeviaoX8g1NwsDCnYVrAVg92q4Low",
  "key7": "4YPCnhopTHVAgP3wEij8mxUfTMTYYanXvwTzidyhrTUgPa4QgUc1riU7EiYK9cV1gGCNf4oJ1YMccwsjXJBjDk5H",
  "key8": "2H2tXcpHweu5zAy99va696WDsUXNJJNADgdx68F6Jr4jqeNayjsZoU1FVRc7GMjq4uta11CZ6iFmxKsqqG8hpJRT",
  "key9": "4JZm9hJhVMdwkWgkd6FwHYifEKQJYXwU59WZpyaAGmUe53jFn7dPYMtJgAfFGS1bokPjs8Wt4nLJmYTNm4Pas4T6",
  "key10": "2bTqXkou3ZNZUezGQhvgvLZSjy1U5bkHHjBetrqjfAaH1nKt9zRbnWr7o6jHYkCDR1seEpbfNvSQ7zXxq4c5mxAP",
  "key11": "4wU5suFgAxM1WheZoETxPELSv6jJfmd1qjfLccvLZjR1C8XMFBbBUajt7aVGFqzQ4zAAQZgukyyBaYN2z8ZBKUeE",
  "key12": "2oSLdpi29vshj5U1ezjUtnn16ms4CSLcuwzYSoMxbdvyBZavFUCbmLHpfLPf4uVAuciMo3yWTxSX2DScyGDqWKWN",
  "key13": "23KPTTQjn73bHcBHHvyLyTFgrnCP8Q3zc2yXA2rh48ie2zGDdwC1SCubbfRXGfhXTWgUDaEifMhnnyqBBYPHvQGE",
  "key14": "23umz76kYGHhofQEoZjtz6y4V5tfwjgz3gYpCxaxm5tX1pQnjH1FvcrQUrETSMVESYzSQzQarKPkYEMGJeJVURiH",
  "key15": "2n2iV2v4wwrTdpntamUFT7UrGoGCGiA4KDj1VDyZtrzvnRhi8nsFbuNhGt15Nc3JVVRxavy7NGVGr1gMytEhes8",
  "key16": "43Ez3kZDwcSYqQBZqZEAUQVPQRTkk3VdZ6ZbvS2nPuQpbSkYYgLTUjZPsyc3AUwCwQLc8FYmxvxkN13vavzfbd5N",
  "key17": "3tCMVtg1uJyH8HVXpcpTSZUkrJVobvDgHV7bEYaDyVTxEJiVFtrchdaL1idYs3vaQNswnE85wkeKHguvKuRw1yTZ",
  "key18": "28VGp9Zq4Dug7RGi1321fJRhVCeukzzWiZpx4bhhgzX4xapcyYCdxEgp2NB6GZMMPmgHFjpGYo3KBzATBEiEajva",
  "key19": "4cRAfabbjz6jt71RK1E4vwqFyH7wCs4int4v1nwyoDNPM84d1Rev59brXSQhdPHMgSRxaYhBm4ywYccqZMUTYrb5",
  "key20": "3obLoCttkdxxFrAtmVKNbsdyNmF8hdHSopDnVw3tqgPPAPYQoFRRhjcZz39C3KNx6we2sUoZkLVywydutWdSD7u9",
  "key21": "21KkpnqR5KnuZTEkx2oCuvKd1BekhfP1jD2AU3QkYtzfoP7zBS7FgvfnZrmaNSwCWjLEhPCSMSUUkoSGb3tRWQ54",
  "key22": "2DKKko3h3NZWq9cNzZw91sUnRTsPzVQLss9GbqYriECuYdewYunTe8Shp311kSaz1D1VUgVYAX9Q3zt4Wek3jQFx",
  "key23": "2gVrnZCSH3Gj5RAbLSE3Yue6G6GbemUMvSigH2s46td1gwyZwBERWSpPkbQHeFsBatCEw5MF4veM6sNK2h5Nbt3L",
  "key24": "2RtPqGgZN3JCsp2mv53igVuLpxXKnbQnFHrrDw1WTxUHmt58j6toibd947AUfaMxw3bH2FibKnso2c4FVuxragKH",
  "key25": "4FwyyguW3cfPpTuzVCVofp46fXKrp4bPceysY2nhdQ4tQKzBdq9kPgqKbaZEzr5wERzpcygEF7SQS9ntsss9qScz",
  "key26": "469nMb3byQP1qiRCKqqAr5SKrRsShcoXyaAHhCNxC9JVGPgZNS42sHt4orA4VQim4dC2GtMvGGFMHkwJi9mnpxfH",
  "key27": "3B1MprDQJhax4v1zn6QbpkL89k5HN5sTnhXFLvGTUKawCzDUyCsNZnpsNZLAjCoZ3MPP6e716pKBMj6GyCn6nwrG",
  "key28": "7dmTXMt3xZ4b4seoJW4RyF4NrVj5wAP4Dbwy38TeV2zaQxir5WcLnr3BxobxRyCV9NbMaDMWMwQJV4LqjVSVo6F",
  "key29": "2hB2ocXQmpuEwqgYP7zT3yyPiYVcuokLTQX2gJfioqYbrKZwAJaVoENufBnHFtFzbQ9yJDbvwegAJGPPtwDzxyCX",
  "key30": "gGBjWDybACcyghzBdZu373NCEHrEffshmiw6TBmt61CriXriTW64NhKTCG1w2KztsfMFMZohjj71Zhcq6Edy7zV",
  "key31": "55QYW1wbQ8ppPPSqenduDwBUKP1tqdEAZrLmtwJj1UtYRnwByrxkuWk3kTRtgtmSwyVwUobkRXLm4gsx8jNeg1qE",
  "key32": "4Y8LWD8BXwyk5nkmcymgrF5kEGXpB6NSZS1MjCAkhaxfrXTkF1x8RSxqc7TSGbhkihThujWpqpe3Dbzcanc34Qob",
  "key33": "3uMFf3xp4kMFWaJwV8g4jrSfwrjEXQEn5EwtSXtsEUq6WwhdDjpwq8oKEpGEWB51gYL3KMUowUXWJgytFGWfD9DL",
  "key34": "5u22kcgs74F5DnzP13x3cLXAMMmgAi51wDWX2NujdXjrAe4SYHBEiabgcqBjeSr29gpsT8YYGfRC75uiGHbEAufz",
  "key35": "TkL9Q4J7hiFFeU14cGjFxxXKvcGfzo3Gn112mqy6QYKihyc3EsfTkDV1nfYGwSwgyCy4VQ46Tb9zXqQDCvPTbzC",
  "key36": "5taoHk8XEgrbRdJ5uaYTMimYfNYd9zewW9nVuqibmV1mPcwUknK8ETKdgmjyPc6hneGqz7vC11z4n7BRAmrBNjwh",
  "key37": "2Ljes6dAErov7PVS1oBk9QSTQhDSGZHk3B6HpASvAS82JMWnXoz9FfvdBpUC8LEF7tcAwDvMRMbs3bA87sPpJyXX",
  "key38": "5p9MKHqGi3pEMGLCBPFHeVHC1FM585a1MVLRKRCvCAPn45gPSptRdjMjPneRqx5Fhs9DnboFCFVobYKjVBwCQZ6H",
  "key39": "8CgSkgS4BLQ4yHYhNgn8LyHPBoBSHrYkwcCWFgEV17NFThgq3cNEkw9abxxdcoAHsnZosZSyj36Z5xRdM8otwuY",
  "key40": "4hb8vJSznY7Y4uMnpS4Q47R5ienYaFqJsAuJxeFUHEgoGkLJ1e95VEj2AmMQZxMPeiy35HaRSYJ7auXAs9pSe9bk",
  "key41": "45qYiLuxgyV5x6psa8MVvob7FjnsMxERGDSJVqG1hufeLf9ZfujSGpzAnsDFebj6TtYrz8F1SsQQoY82CmSGt98H",
  "key42": "5Uz3Hbcy1uQ4B3WW2KJqQDW4hkFmHTKsnzXeBG6qVd98Nu5agpF3D7QzxaJ3UbPMZsWkXt7UYogbAUpitbizFQAv",
  "key43": "3SgBo6ZhJ1bLcaeRartYwNb3CZs3BcaF3yKLWniV5tQawSH9BQmjq6bR2Bzqz49w2SRufiZT9MJG3SLdzTS5a5nr",
  "key44": "5fWuMKoyxxyW5MLYtm3bC5JvGWHdvbkFBEUMSX1MHJfyiP5d71zLAMeXw4FTvUcNmGtdB73SyZgxB1tKdtmGCbGB",
  "key45": "2AeTpGA6ZckV3X11dPVoMqNwjdYm7oHmAu6JgCVLT3LfgXtSm9YojDy6ARmkrKJArMBJcbUzPyZ6tsyCkdQ5nJuK",
  "key46": "2iNT4ZgjjhQ35DLWCFRyVWLacr2PDUFDHMHcm3B5dN2mZ1sLuBWc7e6bh1VccJP3VQzU23GrqctbE9TR1nqnpLXq",
  "key47": "3DL67CrRtdXDmD1m9FXWYFKbFuRjnkg7u8r1Pd1fbyxXBVoVJeQMcypv78b371mrvhfN1q7RUjibk1t8iGhgqvBe"
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
