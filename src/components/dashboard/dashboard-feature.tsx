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
    "4HXmcnbMRkpxrxM39TDvfTpTmZZeHMWY797ZKUocn651q2Z9EDGpUDmd7ZD4cCFNPisomj8SYMXti92MkCCoYqjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NZzNMARZYszZzNkFUk5THVwUwwv7Byiu3FSNjKSJ5n9Tut7ZPfnm5rGer7ASBCynXUV7egxpp9eLjDmhTC3N1SF",
  "key1": "4B6cQNchqGLZcr9SvGQYuZg2kvuTxgXa2K4mQ8YHNs6L4FZM6z1sUgRQpG2xhtie4FsDa87R4Wco3CSVtufRSNM",
  "key2": "3RifGq9SBmtoWymuVDpKLy9pDFdtDgwK2uVJSWTp8fWjzwVs1ZDdJN3xBQswXGmNDKZDDMoL1ouNtyb4iqjGiDW8",
  "key3": "4izdz3J6EctzEQfjGMBzUtfXsr1NnuEanu13iZnae3a5op3nzgQouyxDzPDTn13XaDDGFb15F6UtAX1w33t2aA4o",
  "key4": "33Cuomm5pG5m1pgcn6Hqeu6QDwCfMHouitGp55qnJsCXucn5gYFJshKZhEMMvB9oPYnYDZsUVvzNMuPv7YAeZLx4",
  "key5": "4T6NduRe285qFaVLXw3CazuXeXgUzKnDN2eCwCNeD3qwA9FjeGsuQniHzkde94AskqTc68dfFyKFJL96d3tXiVUh",
  "key6": "4U5NG5qqYoDX3hcnH196CLjNpHakx8yfSWyYBWb6LhKYQze9BpH2DwuJJVftdAFeCK8rmLmXy6Ski7u1Y2Y5HQE5",
  "key7": "FBxyA71Cqn5DnipWBUEXB7uoqD7sD7PE7eT4Sn1VF7tn98bw65hcoDLjCPF6UwhBQ2towd5RNXDfiy9Eqvfjfna",
  "key8": "gPtKnGH2qTTc6NrQvvmHM4Ws17iwgGVCZ75XM9ED2WD5Gc5Cz6BfsnJxrtHEPLFWkhKU41rm57uMcnJrpjfGZFe",
  "key9": "29cvxeMU5mDBozKwkGvzyhm6fw1wpPNMCTfpEcDdGUcDzB1DEdDdH9djPgiSiPgbf6eakXVZn1JRLmTjWXFYypEJ",
  "key10": "3nm2APz6U2QvGcynnuCWK3wr3iQyaMvRS3PAe6NALGvpXbarMHavy8PCRwgs11UES7tsgN4mwF7XrTTKT9VSGyiT",
  "key11": "5eyb9qEKsvQeTCdvAKESdWzufTzAL2AHfS82sintQ3CHD9SQdiBN5tzcE5hj5RTPrE5fX17HKUKBFoqr8nV4JrJ4",
  "key12": "3FP8SuvbcRxzfUuiRC3HNZbu6VA2Dm8CTgXqL7Py3t2vYszxUVz3VRXWbar7fseZpqsaEeSD6oNNvkT4J8EXbQr9",
  "key13": "392JdFRgKzPjwQaBMsDKc5yFqSTRcrLY1Dv4djH2xNuvavkrKqzgPSo9QhGqid9rAbsZQsLEh7fhZ11jvjuXrweR",
  "key14": "CRpXo4XcaBuNAkdDbiKZWTTUCgie5H8megmRmhFFfyBgS8jxh4CqB1ySTi4JJhwua6BBXe9UaQXipjLRMHdVrrX",
  "key15": "2A98EG98N3hGuXntiQtLnw9qN6buwrhzzwHCFQz9i97SzQnZCXorBM4L87jNg4SCDcpnywQEcExcJ3sNhj3pXcu2",
  "key16": "2DqKv47E2v4CK266NbSBcFGzMK7vGSxtEdTcu84gz4SZmgqWneQjShbhTPHwWwoAbQLtVt2tRGtWVnDQPGM7VBRa",
  "key17": "3F27gJ3fyyoEBMXcPCBBq6mWrtcRZBwpH9ukXp4t23oUjFBtjAVA8FYMSqg4yTr2c4Nz4GroBG9RLKLiZzWaUq4h",
  "key18": "2ty2o9fp23imX8EzqesquuGAZzdFkbgWcCzDHEQXBpnj63jsTzd36WGD64XMpGUQr6VNNi6QXk275rdHszr9LqcA",
  "key19": "2BVFMmdVvtJMXSiKktojBZ9HK8V4LoCRN3JxVUTw3Zy9seLywt16YYA1wYc85cA3A3e88JwpsiDiTdcBgL82BMnD",
  "key20": "3FS7ogT6ichECR6ww9aATK7JSBt9jgWTHwGKEa92WUjvRwNJ3qqA6qwuMxRtVGk4qGQbtXDZuWLrHFBDtcfPmwgF",
  "key21": "4XPxGUcySMETksidH6zupZmpkcSS2X28Na5W7Kc6iR8erB1GdtBkrxWesdBad3Nzxcpg19w71n1aibkeAQxP4352",
  "key22": "4uwbMqKaiLGNBtnRaJyezSVpnweM69WMNJo2PbFUNTFQm1TZxZopjYkdSMYNfb4KbycEaCxtf1fo84qyKS8MfGv",
  "key23": "2zBKp8TfFHMFEsSkp9bswapv4L2LYkeYgfhoh5u5grY9XameigQbMT7VEyq4gH7iqLVcP3DH1hLd62FHV1c9yoVh",
  "key24": "3acpTwny6HpvSH6D7Tjp32XthWrzP1KKUht53Q3QjpxgYUFp2Vazr6Cpea8pPGJWKDFrfPZgvcA1FLbEnUVL3yjG",
  "key25": "2TMbNLqUG3or3iVTGcTwybZkeD91biKHcgxuv8x2DSbTbaciKs8uRzjGLd8GMzm2jKxYDU5SmsLKnoZjGyQDLD4q",
  "key26": "53XVE18Z6RQTiQtiKsWXVWkLSU8BPqinocg49nURxGtFKgWui4fjeAnaEpYMLPDbYTudZc1SAQ2ajFp4zEUxgAaK",
  "key27": "4sFCKW4VroGYxx8oeQkPsNfiKbqjEg4gn1myQDDKFNTVJ72LyJh6qXqQwyHUTeh2Ct4WCNFA6k7c19swrwBidvpe",
  "key28": "38QWEDPziz6Yfe3qPcnybU4Aso2o1JGhHFjSyKifEkGRiAqHm5u8DfUNnsA6wv6G9PoJCWGVsuhmRBwsajQyxWRf",
  "key29": "2fkPdhoEGsyCjT2vty9E5pt3CbpPDjx9GsRgoSucSiX6yLNjjkDpjWZWTdDuJtjdeNN8oMCPSHCKbJhc7JHZ5cnE",
  "key30": "5jg7p3yajxrLUCrypcQ89DN9VSqQShRBVvhH4y82HMG8oKzFsV7barG1sZ16TWv4A3XTvXsQcDhVzhwsBzB2uNn2",
  "key31": "5g1zntLL8RPjgVTRh4H9cCq2oWhzNtw5mVzUi75tXvtrx1nHvM7MZrgsmueGsvVVsq7W7Sydw9PzbpkjU8PM2VZs",
  "key32": "2kADBsRM3X5ZLMUfd5MntxxjDxQcGvrLzmZEYKJFLHLF9FLe8SxQMNeHPjMq6LFBSGWjM5TM7SJiZtCEWY36BTwR",
  "key33": "3hy67M1SZyy959wEdm3vNekB6QEvTHMcZoCtuwwdGSb5Dghi6NgfT5fVJs1DewyjbyZ3tdhFR245q1HaxJcKoMAK",
  "key34": "4Mf6jPkQCAXh1ibivjo1Ap9p2tUdmgaYdfbK38aybbHCtiB8UjBzCvCniyqDdnjTMMjJcm5tyKG5LozuH4wenAin",
  "key35": "3Nd1xZUekRBnCryzaJuqqVmiZa2tjhbhpZi4NMDx7EXyKjxbBvK3LUJ8uiMSbHoJB7ksHwyYWbMaCsghing9j4qv",
  "key36": "5tSBEVjiBgxEPCRYwkjMCCYcNiPP6uU93tjEbSzkpUa1cJPtgC1nwFtQVDAv9ddXKJceVQEA4Kk7Vsu39auYGbFm",
  "key37": "4mPZf96mAo8ZKzVPZRngi4MZuygFkW5HPA9sjoGUKnoRDkuGPVSgZDnJvymyxp5TBsZjhasxminanPZGaGdBCH5t",
  "key38": "2KD3EugApMzjm6vr3UrMGkuGqAj446o6QZbut3FT97N8uW2Qfw5tGdRBit1xhUBHpk1Eh8xdabLqtwCWeGqkb86o",
  "key39": "2oF7xF2vjLbTDqxpCK1JaB9A2CVSPSLQcrkCDg6QmXrUyKds5FEct1gaU593ouQsuawwyJLXzTzZXxeKosyxy9GG"
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
