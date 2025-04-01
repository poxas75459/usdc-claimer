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
    "cS7tsx4yrczWmx7Snd78QaPUEhve1Lg3mPp2ZecKQQwrske9MXdfE4ZXLooLoHVx38nsRqzLJnEXoN88JXsu3Sd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37wDTknemunCNwGoL9MRDbscXEijEdAn6JtoUsoUtc1AYMeaS8m2orXsXed1VUeBmK6vN69MNkdpsYJVz1ptJ9S2",
  "key1": "5iTzTJsLcKyxScx7c8rvPYqtjuEMLG4VoMN2AHS8hqdEv1J3CC6gEoixqBri6LdXFzdvutaXXWWMZHTMPbVg6sXd",
  "key2": "2yXTHXbxWqNwn24J7FdM8HRet9FJjbUinwiZTwZaVoyMtr5Ly6eikhcbnFWUredMX1zbFYJd5yXDjLVqdzGJHVVQ",
  "key3": "25xYdC7wTTo2BAEfGfdRT95LDbtz26Vuu77QCksZxTbKr7YQq1nossAKT9Pp41RBpF1nsXuL3jRznEXfakoih4cn",
  "key4": "2E5cz5NCEA3KRfmxL336EjUgu7npYTM6WCxKusVGseJ2vh9HmpWBLX3TyGMTgjA6C6svefDp2R1yQNGy2YsV9wFN",
  "key5": "5PAzjdeSJyvRP9TKzv4EkXAZt8ZRNqfYYigzxVTseAwssZoHLzsdyTyKKJjoY57oDBurGD3KhP39kwys6YXmDURs",
  "key6": "2BBGjHbxZDBJSCfLJUHTPNVKWakcwkV8qeHVzkC5ubwWC5hjCRKakGYdNDDS3BRjY6PZiBasumL4cYZ5so5NCdeL",
  "key7": "3NZHMt5ngVxx4mKMqQUkJZDdfHaKyqKT3qorZqgiK29DKFipR8qZ3WgdeAaDFvSzp6tw1Pbf3EtMCNCx18VFCWig",
  "key8": "5FTdZ5bzeNLnajqTPFmbiHT6CYC3icMZT7Z8fQxwy92Aj55MaYTpzUzsNt2L8uDJ9nDHJEWEedhRaBUDgRjSPie",
  "key9": "5CjTTYhkYqGko1spqe6pMUc3kfGt2FoLr1pBSmrK8qrLwH5gWhUPpC7VQsuRYTrxdK2Qj5JMarDseMfti6g9isyk",
  "key10": "4ea867B4V3mY3SYysY7FTEESePEg9zTmVYTjhoFejvjiEgVJo1fZEYjfV75rko2rJ3DtmpMuczmEMZ5xtqD2GN4C",
  "key11": "2t72wH54sECXNNA1ahSozJgHaT3F7Fn2EWAXAkvyarSYmPXoc2Gp2r5tf9VWdUFoem4gP1S4hBqK7dud1hfQLb3R",
  "key12": "3NyN2wN3p1xW93za2gbLRX7wufVEwCACRiq8TPqbdE2jMCfnGcooj9moZWxdadx8ULavPo6LUuQyjHS68YCrCKXb",
  "key13": "41952WgUHVzUCzYoxSDAgZsEWEWxt3A14uk6fdpbfz3VhXk5b5Z9nLcnN6QfHTtqrMsW7iU7HkfHo3xLre9iAiyV",
  "key14": "wyrDGPGg63UUyKSDvTb9ibs676wPNSz31cVWrWuCpjutaLteWrR253wxmyJDBCuXoVfzLrSzNEkUBTYk6UxHxLv",
  "key15": "2eDcBSHQp6xzBKmJbmqwMnkVadEFQot2AndXhHfu3gFFurTrXzyWPopeusYaxdz8M7Dn48PbJV93GuniyPXdnXLr",
  "key16": "2dB1teJPLXjPp7N1CSuqaxki5DenL9YjpnT8TeGagSxYZn3m5Jr61t6QE4tspWLpRQdRcZdT9jg4ZpTLfaNARfgg",
  "key17": "5qVn2EPDj8vhuuNEHFK9UnCsnB3dAenrNwT6EJbRNFGtxBMsURorYPvUSMc5miW3pBjtT7xcDvrHUGXnRAKNrZYV",
  "key18": "2wL45PaosrjSGNkPvm3Z3fx8vue9UQ58fcqQ212khCbPieuAts4D8KzeyXRj7Uk6LbsCTFTUTXZ3jD22vV3TtiBW",
  "key19": "51tESLXAgxJEgKKNGLKX4qp2Ci5temEia7WxJs26fcQq5sypNeky3K44GnjZkaRSpdL3ZL9Uaiukd59pJ9ZWSqSk",
  "key20": "2JKcMkTsn2KvFG4c11msDoPabx1N4MAu1SPC8zykWuzcFuqRKNJkL6EUBGyFU5iXqyoyphnDD4BBHrUmBBoRREFi",
  "key21": "65S8z5NLHaFM2H3wNzPxW7vCdTzgj2o7RcgbC36xoosYijTeMvXJ9fxs1CV4q577KinSxePd6AUWeKzAzFbULphZ",
  "key22": "4fus4UECtcrCtCCvorLDVZpnq5SwoxcD9FQ13dUhjzeLLAEb2TwCN2NB3vR6zW5rMsw2rJGKWPdYJD3DcvBkaAn6",
  "key23": "4eWfAoXwWSNYwZ9qCZzTh4c4LLBn8qbyqGZ62jiyYofgSdoRjvtJQ6pnbq1FzsKqNbNQ8KDYjCBcPSyAALgr9HP2",
  "key24": "3fGHw5dusgMKANS27hsxBrR5NMjAhG2NcJsijkSRo51AVYkhV1M6wzuuyX83ajp3v4A7VDPzqKohTwgxqWr78YLg",
  "key25": "5Ckj2KYP4XQgwSpP9zJLYZwAStixF1SJ4hv69vrkBKSWifJVT6DbkM8i37wYhNKAcXW1yXYgm7KS1Gj6XK44FhX3",
  "key26": "3sUcv8zZns1QcEkFM6jttXDa9cAityB3U3gHqhfELuC92Ec9KPh342U34DDoDYew2HeGzHAzrzPFRKxWTDFtD9tH",
  "key27": "HQ17wUnL9MfPnMT2ABZPHjpwwRp3XbS2X9QzKNJvCuhAak21ahJYnTXAPKayzmSrHvaZK9AbxWnZbcBKX9KTRE8",
  "key28": "33QJ2hCMUbnPRG2aUGEGND3gywQY4aVB3MA7VM73xpFDiVk9KVLgYdnCJgneVKxKNxhWRo8SSeueGcjek75NEKkv",
  "key29": "5ZZ6mvKHbukoUN7FWYTXrSVCxq7jDYDcumG9semnzovY68G9kPPVTon1GTri5kTVYWopKzHYaA7ByqbPjhUFHzPe",
  "key30": "3uFrNjjhrFfGK9vuFsuwFe9PQzq96UvVwmo64W22m9jy4SK64w7E44eYGVGvRTZz2vV1nJSw2xgmsmvZg3UioaVo",
  "key31": "DE8gNyUUB6vtcdiF9ChBVMD1pGNtLHz13zGS57rPFTyqSmYVnUf1fbjurywdNd2Af5QTpi946KP98pZ24SKSnUM",
  "key32": "4iCdkzosBdTGsnBeSVh3T9c3Di1LthWJsEB46kC6urpSh7xpoSXHxVBskTd5Qxb4Zpwb5XAKXC2pS5g5oGVbEsb3",
  "key33": "x3dKiFAJhJV567v8MtavhyrBpN41M831Nbz9TUj4GZiiwAbFDeZsBmhsfQtJQKFbHeN2KyuFMwYHwYm4293CiRv",
  "key34": "3vHGb9goMfhByS1hfcWcgjPm7gSzraDEAKvBUrb5h6ARr6g3YMaEAo8beMEPNn4srhjesa1SJ6wPk49VJpMv2Z65",
  "key35": "5BNhEFQRE8cP6oEiUmt4NEb3prEkeutmbwELmW5yam989snc9UzmHYYRSB6vSxuVFw7ZNSN4DNZCDYZzdYVKCW6x",
  "key36": "3XwPh4dKd1y6j8eg3coMp2qg5RdzitTczzQvhhAfmAgjpao1mLyzwaQcTM4KvFRGiYxTV2znwaW8wgAhhZynJGve",
  "key37": "2TRwtt9gaXFnVuF1FmMMU9htxhz2TRdwFwkSD1JxCahWYw6LJF8tJGhtkcvX2GWBKavdSs2YJtwWLnRjkiB1HMNW",
  "key38": "27iVy4d2aepir2BquFGwi1jzmwovVAvSSeLkKYkuqsLgXMqv3M4pyHvomq3q89qMj6UMx9hZuU6vUpVj2P6MHz89",
  "key39": "Dgz9yMDnRYPiPLRiBJREx8xmai3mkinCHXEvvaeH3JZZKTMCNBYcwBMdAtAvboNVadFvhVmf4SF3rXHyGnK2JT3"
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
