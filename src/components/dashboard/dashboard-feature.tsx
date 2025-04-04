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
    "658tsVNU762Y8j5odZ4K3qWSYan6ziASFDcR7PeLnhEUXera3GptdNVhBrojyR87nh9Fkv9YVo2jjTya1EaAqS15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CXqG7DL9G1GAnvnLez8EaiZ7mctzbMDxod9pQ22bTxBNPxtb6UxsPdxcbAwHF4Cy3EhkxREkF8cJR1nMMFcDzBh",
  "key1": "3ieXyRvvTUJWQtRFmacXEnSbrF9DZzz47ndxBgcuz5TUGMbqEhzK9A5tUDxZVccD5frYAH6nLyYkEbQGEeZuVTQo",
  "key2": "5CBW7i41YEmxZj7Jz7iazVfAprwvnZCf8RtheoNxAEBkCG2a5ZDurfKyTuQy47TUfufwRUmTDxRTVETxjXRYHXpv",
  "key3": "2pFz8gBwp3hpTFif2YpNUmF8TLAsWLmWYm9Bts58xeMH3xCB6tJg4dkAoVuAWV4ef3F71a3vaQjALC8taSKx2SPG",
  "key4": "5cWcyW9Xv81ueEgfA6fMtRGznSEn3z3qunUkXyedRtGyspSyisHfdi5JtoGNvpQqeHtCqVSYYJnVcwEaGXai4QYJ",
  "key5": "5FEfimKkcTcpaDXQxknkjUYX9F3MgX1zhBsYQiXxvH2Rzik8i82ZUPLVdQvkTFSjQbP2rVFwLHZm5Ri6hL3SeynF",
  "key6": "2bFy28Uj1vDu16T3tLRYKr17qUokLmTJwPnnV2sRcDpP82BkVdbv56YTpberV7aWdKHzsTvBHfPmxbpE6485AwRF",
  "key7": "2p9hCWZgyeqazEskXDR9Z97KrU6QhHpZtB9gXFkrCuxp6bnQNvC65SHKBFNuMYJx8tR5fznKjEp58MNuzgiy6q2h",
  "key8": "2N2RbqV7Hg7ZjKjkngsiRHFZ9pfE3K9yZ9vCXLMRKAVjxrxKEz1KhDyNvK4smfesEKHPwZxM3wbMAV7Cy1ZQEYfv",
  "key9": "4tvSjsHGFPg5m9EbCFqyhyfApRDUKbJHmj87oMo8K311wazFCnCbWPw9ZDCd5bTr8Wc4boDSJ62LM2w7dQGs3mDP",
  "key10": "Fwtmrr5Nz6EyCLDZXHQi1aP3hRLVHwEoiNsjKFQD1n2Tw7qt6j21AGN35hgfPh86JqcWhWne6PAKMDv7GjgtmNu",
  "key11": "22SBkUhEKkGDFrkVBJYa6kfo4Q6Ht6kWM7ny5PgjRLitSwiHTyTZX26Rj9v5KYBXQdXLS4JrSb1Ua7eyT6Y1nu9C",
  "key12": "4bcHimjskuvu9Snx7DWzLyTH7sL8758NN3LjbcQUSqt1KiKa6YtxZWKoZ3zkhKrUqAg3TsHbqwTrnvuZj8DGnvdT",
  "key13": "52DxA4VEZrYGKvxoWQQ9D2abMREnkTUPmad9TWmBTMKQGB1J9SjX2QpNKfAo7JqKEwm2kpuuiEE6N6w6cbNRVcyd",
  "key14": "56cZPpKxbzJ3b9WDmgHX6LfmdzU1Z72RQ9dA46fRMR164BDfBjXpbx85q2wQhF91UDks2dbhjjockYYWEJmKYe1W",
  "key15": "2AcfzuCqZoDfSWTJnWw7rp7Mpt3ocAn5KxaWbXLcCzYLcAFnrBdDaZ2n7YZZsJUnt9LxXL43BN5BBSJKT5By98dx",
  "key16": "4MZ8TYx8DbuD72i5tecVU2VxcL1wfh1eujsve14LV2Sh4L1MX9iuwgGbPvb7m5RceW77nSvdHC7YdrvfAhBrM4pf",
  "key17": "4J29x913JMZoUEDKKgXyvT8Z4eBFyVLe1496pCfiScVJ8ZXSLVEqEUVKW6Jp9ydNzzCFggBLndukxKkgcQh3RUUW",
  "key18": "5HDR8Rn6hu8H3yWGKS9G6sVUoDYvTgExs5sv926GmYYWdzRxRkmXAaYgtg6v2oK34N6j3AJ2qppqiusp4q13tUw",
  "key19": "4WuWnymYyQf9ozpZUc9VjdU1Ntzi5zsR77o8UgQkd4KCDKXcGRraqMKQCxVxpYSSyikTJtrWsBuTEroJAGa9ST1d",
  "key20": "2JaLSwyYTySiNbBPiZZm5oXYtaHxCDg22Atn3C7QVKTTLhBJb4KDP4HDtwPXcS1ZSz7YCaXQT5US9nijkRJnTNLc",
  "key21": "3m8e5uwNJZP492JsG8FC3HtDo8pfLHAoL8W1QD1G9kjnodVciGnZgUz3gcHY3X26kNU7zNVa2JaNRsXeeaCgeABL",
  "key22": "22Cye7YokaPx7wbiDssDEGyBzzPnuDFEJPh5X59fib7XG7iHuXRwrzZDRgp2VSUpfdHUuQwTU2NmpijpUo8RHpCz",
  "key23": "4tmUmNeoRWpQqtN6pBZZULM6gPUqnsRRTTts1DPiM5okQGznnB3CUMMygCW9iLN1E6QrL9VSjwTWxhWYbULqLPEk",
  "key24": "3bjj9AQ6KPocCaPVoV9NZRRN3KahdJCjMsu8FWzxg7Nrr6EYfkchLbAwBZVhR75tApYYNWihUMjz1uA4Bw18QGGi",
  "key25": "DJtXBVDDK3mFNyPTGCveyc4YUJig9wFgtvSHdfXTeiapijx44Xt7svp69cBBVZ5xWWKtDwjKmKvYUwHro41xRAZ",
  "key26": "3RK4U4r6GYcMMhGqpDtz5A45rYLTvSRUK1cUDFHqgG4TUjMoYLWbtrhTjVGKncsLZwV3ugHz5csyNL8EWnHiJR3V",
  "key27": "iYbKFGNTovhWgH6No1TtKNR2g7Nmsh151yvtEkJLeBVjXBFBr2vkd7rpRc4hCJvsV8mxwCNQTLkeavA1EB6RFJZ",
  "key28": "3LmFhJTZ3sLbenbJhwjFXHKf2GNmdvgV3rEEJ1rs29P3n7seX5qMwR78kCTz4JYM6mokF6iSTouArDWsh7uKiJ1x",
  "key29": "s5mVMxwMYgL6i1arT3wp6gt3DRT3srR4xs6zXHxkTxPd6JvhctPAxhFheaHYPbqVqfwZpBVpGXUEQAEwMiK7mvL",
  "key30": "4tgTRESxwGEKXexz2mZfNGQ9Ayap6gXiP2HVD6gKspnUGVB4MBU6hrcrDq1yFrvQgAta6VTS9VL4sd5goKm7x95R",
  "key31": "2BeoW37gxvPbun5HwhyZsm1AS5zs2Swi14Zm9WvBKHvuWC1crWGuVtRUnVasZgYfPyMBSdWsBRk95E115bbVRvp4",
  "key32": "5Juoyt5Aai5ggAnWsQPVuES6BoGZNYCgox2jQ7rD79SKLKws2Uz6KXy95NYzNDJZfpwj9Pbkx75J6Epo5hFLgZ4q",
  "key33": "2nM1bef4eijuF5AS48pfZdAKp8jWQRVi659asx374xSgqdwrUMsfd1pMJypMY56u8ZkbmQYdGZL92aWBqzM96uzo",
  "key34": "4UjQGTwYe3mRSa9NnD2gUVtwW7AEkYngRwLCbjjxzZtR3Esk5jG961GzWvPGxGmHQ9iXD7LVDV95oFTxo98JGxNJ",
  "key35": "2RBdycXkMqEVTDnxukCHe1Qfaz39usGETSG9hNurS9X2Erhtxyw6SkKZckXkD1uTMZUf2kghPAK1d2o85DsZK7LK",
  "key36": "2kQzJiEmMZTYSC1NtUUVkDTLanLqKD79xcT6Zez6at5sSsgxpPzRqys1BN736A9eGo8J4Zzu8SEe7uDechX7pn4n",
  "key37": "3ed8wnNun128stZV6RXd2AMPzDmbc4mc6MqBHHmLm2xdYRh6x3z85T8YAMTm8fzHBsDNkiwgFa7mZGL1RGCPgmCs",
  "key38": "5qQUwLWNxwgjUTyNwegshce5Z9FXf6U6Sup4jXKixGPfAYG6rPrDS42bmVvB8NXxc7ErYoGVwZconJk5dK4XFLr2",
  "key39": "4zmVimnfbHkZoDEs3Qc2kXBWYFPdUPuMiYN73SrFDzoKFkMbhVQzZJCUyeA1ucKGq64pfyDdFfwuBpBHkhcn5kBd",
  "key40": "4hEfzAcjityQV3kZWoJoBCvXT94aadBjV1pHGm1ouqVW1b8qVcuBSMCQQkC3m85UYaoLQXs3GcnNK8z7fepnSWmf",
  "key41": "5TAHwquKB6Xnk1h97z8dyjWdG55UgVkTZSS4JVxfsgCCdqvwgtcLLZ81RyncbPbpTXSnaa4g4LaTf7f1VPEeN3dB"
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
