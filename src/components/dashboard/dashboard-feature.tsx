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
    "2xpEFHwox2kMrvDi9p7UNjCAohcKPygvpuLQroTxApp62gVWSvs91oRiK28Tm5sY3muoE152LpoUDhFv52JMatdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uQhrFEiH2RSiYxMoCxm2CShUjZmZZ8DeRFBePxTtAFkDHJZJAHrGwhReQzyHgyXDYXapoMX2xia1CNmyVgzWWfx",
  "key1": "66vANT35hRSHnF9qqZwxfXR2C36qJfeb37okNRycsJvZ35BmACVnx7DAUk8B8uRzeZC1VTZrNB3gUiAbgAPmfcVH",
  "key2": "3oLadzXDASXj4QGXkEkaz3N5bzapcaRLhsp27ziohEtonJdahiyNmwyaAtrjbKPtz9JwpT2XJjsahETpKQMXiQmJ",
  "key3": "uaGkDYKemV5ZwvQy6JhxGQx5hMb2dc6pdqjiTeLmZKGDSmAnKZuToRUrH6WLAxsiN1gPrdxSuYjKfBXeTJeZhUF",
  "key4": "4YSc9uiAgXbd8zQYcbEB92LqhQ4ueH2Dgh3RtD3E1ZSGNgxEWYHZL7pddA4dj8sp3HsMGVfWo9t7BthMJsq4dLUC",
  "key5": "5NAt6B9rYbWUTD13EySYRp1Q17QrqeRmCy6PhPqEWjayDB83amStp7rzevnPsxAqb1boAeFWZ7TPzm3QQtPQmBPN",
  "key6": "2kyewxUosMHGa9oZieEHuztRACCWPSpdFXdpQ7GC45YfWvDyh3d9o8gWKJuiTYMJfFfqDda84GAR9BBMjpMAMyVk",
  "key7": "pV3vYzpd4G1gTKmgvnTTFV8ptqBHtAiyNZLsnSH3AiZxv2sDUYmKW4eVmXTuxcGGMCML8kq7FYcWdVDLRjW9PBQ",
  "key8": "4z3vhHfJW54Y88Gg5gmbz1cHsHWLmyWVfQ8udVfbtbPuNVAmKwxrsbDR3NFZS8WJECQkC5rQZXQUwfoB2MHSjPYL",
  "key9": "4sougcUiTvgZ2T3uc117ArNke57X9yXae16Jw3mcj1jmE59gaVu4FsDsNbNRL1iCpTTZ66hSok2R6z36URFrDEXL",
  "key10": "3siyX51KcFuqjaXdDx6QMHGqVxefNP65v59MP19Wu1f6ts7cMtiXWBKqtUEzKr7nQn6HD2hvejGxjUgRD3zVBz9a",
  "key11": "3sXvdJhiu6cEpmWZQzAV7qTTJDVp75fvei4S5YSzHZBvNxqrsw7c3ptxxDtDaYTq6YGqNyBFbu4qiZpeTBAHzz31",
  "key12": "4bXQiU1tyuosq3vywX8GjzHitZMF9Dx8hUWuPn2GvGaEBU5i3YXyRQBngQn4HUkUYRcAKQwyz9TSL8RDix2XnVwV",
  "key13": "4vCRc44kSeBKsr9tYuWTV2KbAs7ahAQcckkbajkUXCT3z3BpcXjaNQTD5Ei4hXYLxb4Zn6fLe7GQkPPtqXMTzCA5",
  "key14": "S8qxmVHkCc118ZWk1QDGStaRHytaiAqzUjrQ3Vr76Sahw2sUQY56rrvLYJjZAgYAKppEu2wWTapAkwmbnBXhWMT",
  "key15": "2WtzZzQuhcd4jUcz47fTx9U992AwXDknkwf8t7maESCWH6V2XXfXsEFwSVnU3JVWLr8QsDMJLvUBuU58dPNULJRd",
  "key16": "2ZBPKnvTfAz29rijxmNteRZQovZtVd3HnxKJVL7AzKK6aDcWnLysqrCcmKpQadDJfMcgQ4Pbxg9xMo5LZzU3QKVp",
  "key17": "5S9n5tipGuLbwJ1MxKY9ybeVmRrWRDXtL7XdC9Kaq1Zxo3BdHmMSFVH79HgKaurtsme4nTd7SVvQwLN4PSygwrR5",
  "key18": "2h1Wib5TUoDW8CaAeLntTeMQverM9jFwHU8vPVwD5vahmyXiXfV48bQjAaL9prTVNQLgUqaxUs5chGHp6szX8iME",
  "key19": "2xRdexwQzabRRSKDtTxMNc3ZDkLD9Hfj3gEEbwJ3YSbxWpYbj3f86tcwGxmT7bc89vwmYTpEoiApE3KPhysQa5D4",
  "key20": "vyMeCcvoT848pHqV8USZscL8cDwNXwa9KMmwD4JMocvkSvAS6P1x4k4VfxyJbq9J7imn8BpJ7Fm85F8efcHPfpr",
  "key21": "572f9DyEL4woiDffa5cBJTgWoRRLFRV3FFmDot9Sdvue7ERLgmTcPzDbHDAwnGeaSxAocfq13r7FzaSPeBi1EB25",
  "key22": "55JPHbYrJJrEfDxGXVbkoGXYctkK5vJri9GYLozU1kYBnchyi78196Wcodg5rDG78EoQDVbomj6SgGpjvomUwBPj",
  "key23": "4cwxd69cxBKeExSuQHtDt2ct7FPvNixduPwFrXyX7qQPRDj3oHA2zoFHkFPDC7oGSKucv8RJ6bZmkGLmB6upUztW",
  "key24": "4CxsNjLQVTjCb3ZdjkTrnTUdwqYf3VT7PGVeRLbWcJgF9BWfd53Z2rvMZC1u5xaCSHC1F7ZjEQFwM1cDi9gmKFS6",
  "key25": "JB7mAEHCiJxoiXLTxJaQGPAnMKxsqd6ubSJCbcGs1SuasnWrnVu4N8MiJ1Fyen6rAoLHACjQy7mfhiDqViXt3tZ",
  "key26": "eQatkG7dCuH4WSLs9LnCQnL3obGRYUwoJKSCteYUgEDWFZJu1Y56wsFiAZVXQBeif1QiNV8vrKsQwCLfuYk4brw",
  "key27": "5aNdaJRMLU518hMZGu7fDjB3hvApfYmH3M8gnG8cMUftMBUHpHCXpZzohFhQUDfnNz1vSThNZDWisZG7GF6dhD1z",
  "key28": "5LUBJ7sJUmVNsxToQUseVbqNGgm9enaTbpgDqEcnityJi3aHVXtV8gmBxrEMaFsAA1oTkGdvcSHwGbLemtTyaqJa",
  "key29": "2yiAHs9SvADQaWX8J54tA1Jep6YssqWoyiVa7C18tHyNw3usJdfuRi1y2NVssgELNGAomWPUw2N6vGA25P4mkJEC",
  "key30": "3RqiaZFuMopQkKvUuUF6JTTH5XosYPL4Ddwbo5ReUqdXikwngvjiCTrtC7UspBaoEceGEzJyHr7p3WADoRABPAdm",
  "key31": "3zZcMPTeVPj2ojvESYza3eVXfDy4QVsKyv2Qprsp4jonxe1ptY3bcJrquxKfmp5PAswLHj3XW4GCvR7K4aZyAPxn",
  "key32": "Tw6NDLrQcMjopaVJqtQJfDi3zWYZSPqaTeAyx6ZS5Ckyr9uXi5BCJqLpr47uCt4W1Yi6AfhpXiDpdMnjysUpYKq",
  "key33": "2yF8gfGJ6E4gGqF9Cq3tUsGdTzZQhFbXLjt7EinhyGEHK2cPfKxdppUUTvvzeeqAsdFBVP3zuRNw1LvGFzZmfHMB",
  "key34": "4SxUSMuz7xbFA9GyzGPrq72BBh6K3nZoWxzYFh8Zmxi3A7b42TUp1b9H2cr4pDyQrnBVhq5tPSA4EmC43yuhhK97",
  "key35": "59FremDRCdxFQ1YXMLUhLgf5itUs26nnwJ5cSLT11DxwAEfrXuYGh38xCvpDb86aVQmMDMRgq9fiN3PeocUzatRu",
  "key36": "5Mmuush97t2BSQVF6naCTxNRUoFrCFi4kPZ14UCdsDswL8tY1pbXFYYcii3t3PoprMYXhojCperUSWR8d9QNVqXb",
  "key37": "2BxqDRXzkzhWEaKvRKPaKhqjtWTrU4xB1DGJ9NLY3FQZuTi3xBRbF4wJ3nDhCXZy97p7ZMDpfeN7Ji8NdBnoAgx2",
  "key38": "3DPRGGVtdWae7ABK8SdfXTeHcUa4VduB82sLkoDUNQ67E54rVfe8ZtLtNpo67q9Fe2AvzEDwVnhpYqSoEZWazR5o",
  "key39": "tNrxAzDFau8NzXYT7gVRXS3cV2DXEsHWZVhM2NQoX6WDwQMaskkeBq2cFz5qwXNXXGeHuFqmjAsDacACJpcaHpk",
  "key40": "4deDVAHwHwLPZJfKZ4eLUUBUPCLmetYDzZvYq5jS8U5urmzYoxaDx3Lrd6qAr7z8zULwhyLA41TByaqW79eqGuGp",
  "key41": "YJgHN11kw5xJ48W6oLcySmBKHAiK2BvpCa58PhxN9aUBzXN4QabtZto4Hfxm9YcMvBwV3QKPY1YG4ZJ5WRnPjLy",
  "key42": "5fVF422x7HGnPPtU6jJsqnMFSzwQ7v8pjXwbbJ3VjsKWQRdhVTWkiQ7F7ARk4Kofe9s7D3KRm55N8QBZ3LfxoWR1",
  "key43": "65VBpFdzsNcmN1haiXfM8U6twSyErmCzV5hzUfPxZ2eMUBLEHYiSRqFL5qHFKRnSfcaES8Pp3QNXbDdMaVzLR7AF"
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
