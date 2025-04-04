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
    "4UjmP8bBArXEJM8bExb7HDsv1sVQ7KmVnH5tGbKXxWmQdm1actpySfZsDkkpF4XzyTt2tZoCcuKQJxbfmCS94Mct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SoqJV1BJri9AogC8b5aPpv32toLTM3Bq4cTedYo3Nf3sRjMNg9ez9M79T5jURMkdpvk69rLUDzaFt1Tsvq4yQL2",
  "key1": "5GMD466ZH3Gao3tw3r8aFhv82G4nti9v8N2LBsnbR2zD2Ny4Gk1hvZVLtezBuq9V3aRJRjZt7sPEoqLiQFPfE2bA",
  "key2": "eqmwQ5GuhTMvL4ttC4xbuk7TM2dBmaRgAWDRjdjemNFzGQiRjvFxmd7X9SAua7D7vzjmM85QNBnASfyioMJN5aT",
  "key3": "5kAbEs3P7E9Fyh6LCXzxD9bkbRHJoHhudXYxfHb4sZ3ShqmoAvCAoCopjoUxXqj8Say7756hBbLnWbQ6n6nGa5es",
  "key4": "4pS9KDt1WSFa2nSVEHYwYsytPRifeUAnpRUzuLuERTkn9WZSXYJZhb8vAkzdgWHJXKieJaWc6Lgb62UFTHuqZ2ud",
  "key5": "3s8bpMkcG9xHYLfQhc4ELEMxS9RXuH2nc672HTukHJB3FR7wx3bnKGuuyaL9TKUve36Yuw4iscMUeJ9saWZUumJ8",
  "key6": "29aPxeQQz1xLdcR8jp75tuHwa2RacpYxWRK14HstuWGZZkSh5P6dbPwxfKP273GLCgxnxAszmvTvX3KfosMozmnH",
  "key7": "4dtpHmAn32pFAFgyBFwBRjvA8Aun1keE8z2w5CBCDC2NoU8W6B2b5jHMMJbcvof1H3URYjsecj9rgzDzYSVcwf64",
  "key8": "4wPexFyGAVAt72HS9Fd336LM8WZKfTVHnefHgTU88LwkzjA25Andfetk7btdtSSEXSJ6Y16JJaBN3V1HiXLQQ1UM",
  "key9": "5GqG3ZZ2pmZNdZG4Nu3Gon8Ax8MPwDD2snrof42vADzAuC8cfJDMRGSBY3NbYAHs59ye3qMoT3xnLCfT4mmQJC9v",
  "key10": "61bVxCs2RKJY4vdVydZGDhxkE9qvgyoRvBRUqj97e2QrnwV8sRvafD5p9zNqVXJQBfzs6KQr8yzTc5iWGngznJzd",
  "key11": "NcUtyZFhCGWGgRo437oAtyVNCWLoPp2iDYnE3gjq9MVEKNC4aLrhZRBGXDwJHKmk18Q9nTPyPW1F6JbcTfAQov4",
  "key12": "4RhLd7UNBoV6sLdpEW6XJmhTqmadnDTMzcQDKabWyW1Y79ZXr4zzpJwuEUuKZap5B9m7XZXQbExD7KkpnPDPH35G",
  "key13": "4GCEZpmvNt64TGQfR8jryxxc6rnn5HPpeiQJroaA9LxqWgwoZda2dCxUhjUAUJSuvKq2a1V27TuCMgcozd6FHrzL",
  "key14": "2Gx8nFfLtRHS7SjHZCaWYxw8HJDiD1KUGyxEXpZ4NwxsLS5KKHGLuijM6F6U2rH4fNFFbf7z6dJq1EyLQnwmBG9B",
  "key15": "255CJy8ee2mxhunToDfJ5GdtefdGCjrd9fj6aXC66tGMGssU4yvHHyzUCvaZQ5mEKysJDR89LxLd34yBTpE4bvci",
  "key16": "5E9AjE7JgSGD61UjWXh6yUUU5MwTVpwY891Pya5h2oUpf3MMT5Bg4rWT7AKiZxnAPdmDD7gynW8YT4Hz1yN3KLXS",
  "key17": "2Qsof4PaZroSfdZ2ZMoPKHNAbzyKFSogJ1TcuMPHA4haKfjFPLxRYNwCCWgP92vV1A8fvutm5kz5wmdGmvtpL9Er",
  "key18": "5qqSng8ztGuTe8jut7tVDmAY4E22xsdPJn8PyZgr4aWhhmDBegVhqNvaJmnJEkzkHpoBgJLRX8NUHZKyQzBHsNtH",
  "key19": "5LHHQLtq9cp1asPiAHrnYBdvZYpKmoUWvGuRf3n5f5ZjQAJeMR32JgQKxcyZA5oWf12pq6irJeEoJRh45akHjbT3",
  "key20": "2fdtnM8rBpc8aor4tdeHBmttFSh3De34U74ZqSXsAYjUKf1pGtrJxQSyJvDN4gTox5ffWaF8YwACHAGNrLPYRT4f",
  "key21": "cXuaGrtSLArEw34jQFhVeMzpT2HUGKjmBXUn4VMrhKAkM1QbztKco8gMiHuoi5MAufKgCLFFFwnhYtEygK1S2sU",
  "key22": "3Tar51csYxbo8jf6CK7rX9F5Xxkw6ShWqrSC1cm3DVtnh2RZZp7hZ1fLe71xMh3dNd2SXrMDhqSbvDk4d51J8WBN",
  "key23": "299nCmZA6Shdp4LkFeKLGKSzZwBKmWHmvwqtSwgoUyhmCj8iLteM1baJjiCAQpy4zLP4wCE12nUstoFWW8EEVaqW",
  "key24": "5PdautFJZywJEmxopwiYEyJewN3kwMXs211kxKRoXPLvdNA5TeWjwdWB4VqPwoJmy4uDGK57vDakkFD2BgURQ9XA",
  "key25": "425aRX36DarFj3BfAknsJ536YGCRnxYmKPiAE9fn7oTQmRt9i8xfBid51arLny92H7UWNMLRddoCvFu53riLzghD",
  "key26": "3BjXVisdTBHuQmaiVmAzCUPxbGAD8zGYU9aw4499P2hyNyDnkbuv81CAE22aK9FFxCtT78bMiSEtuKQxFNtZfKy",
  "key27": "L3sc6m6qxZGcAu4bmYvPHzmqzgRbV2vnaedNmZqQg1t7WJ1qgMcdBCRS7UfygcSatsLDX2whGyKYxz5S6UFKJW3",
  "key28": "3jA8iyxSdFDJT3JsVgREwxk99A3KnbB81DDpqx4kmJWTbQffSq3b3CJ7RCVAVAPs5RT3usnuY19G49M5pycgk3mn",
  "key29": "3P5BwGz2BMbSRc4jNQHqbcD9YzqpK5BN89RZM8WEqai7CtQUVthUf6cEcAMebwtPMjuaTEEqbQokbD8QAF3vrsxF",
  "key30": "MZw7Wwrxc9bdNQE2D4r99dm2XCotJ9eWarnFx4idtYcDcrrPMA1in9Vs5eWMs8iBm1utJxpW1axtUNVB14DP2uf",
  "key31": "2eG2JovaP58bTtSsN2k9YvhWTzBVu7mbnn2pJY2dTuEZCd8mub6nW2aAoyYYiG7p9N7JhHbD3HykaYNFFC6KwNm6",
  "key32": "59tm3E3HRUHGqZnR8qBMxJxNhmpU5zPj61RwMzD1Xhimj8UiXtPGJ2rrT47j6vjEAmeS261pmWgfakHVtUPwStZN",
  "key33": "5LBRGJkn3rbE6UvUvNggAwqm41sCsEMdLWktrNGDPWR7ncFAJK18AK61dfmDVRZHVi8Pb7tauSwEu4PomTj9jhjE",
  "key34": "MMzjdLjnP2rYaJ5TRyNiJr2hoarhPKCimkNuuB4E19n2iNfZZWTaXkC26QgL6BFw4CA7TLMnuMnUjBWfHYdeguS"
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
