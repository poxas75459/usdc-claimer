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
    "46ffCCGEPYLc3w7GwoeaxiVUWzfwRDm27QphjHBxmKKmHStpHXRvtU62Yjz93YdxCfap6foYYfScj7FDU3WKDpD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QYrdWmX69UgTf9DddoJenHbmkFZnQ6p44SgD6vGjQuHjdMbi846bBoCZEMZZr6SG6Gfm7kdEN3gG2qR8ssDo42u",
  "key1": "4WufYoEND4D3gZeyYgpXHsHfnNcTkr1Phxcf19q3ytzxD5GDRN14HhxRjpLRyqX132vFSujVdzEWREZtJwkCTCKK",
  "key2": "1FzCkBSfEXthPEfLrAhvzmujFNXWgKdUpV1krbRK8wPN9JXC5CoMjHS3eiQ3bxf7F8bqeGJ3SvfFdS7VdGJCA1F",
  "key3": "2Bpon1tnT9uhvfATLUe6yLQcDNgwyJs6hyR1yRMrHYs6ENStzXYmTYZCbxF59Eh2cbGq6QP1SuVWimWn1RRWsbkL",
  "key4": "7viD2SSF5a3b8d6C9yXfAD2g7xFZQSYK11TNM4kLRb7GAYnfBZuJNxCFKSoW6q8tUai8qcVzZA4ksAhKuHXkk8S",
  "key5": "3QdN1cU6q2TPofPvm5hRzGpwXKj1u6EmkW9MuhT7gpsVioam1GRVxHetf5RNdy326WZeEB8JE69ru9NV97ot5Xhp",
  "key6": "3pnxiMFZRbQC6WCWTQDZuii873DsLsmq61XsWtTt5rmmDtbizA4V8nmQWA2JTup8oL6ytMutWye1vAbfeLRz9s97",
  "key7": "2EqvF2EjqLtotQApbwp7aqYB5AAb5XJEaH9rLJHDMuPh5MLMh4Rc81tfdJMqXhozshiu5yse139iMFxQap6XygwC",
  "key8": "37n4oJdLY1aLRZGTwtjB1jABe17SNPGRc5Ev1hdPp2NegV4tMY2Ki3zrdW5oE2haGv4CcjeTJnTTuPJUGxqwUm3c",
  "key9": "2GRijrv4AZMPEBWjKtxmWHHVL9bx2626hV8UAD3HjYKQHn4QGrxUXGTjWDxMEuMejuLmANFuzWV31jDHJgkcN46r",
  "key10": "4mdnhTq9RG8xQGe5xd6rTK4rfLjGQMAwhovuo9NcjQ7YpPH6M9bzWw2CYDCVj8rcFupNRz6rB5mwq32DpXqkjGQd",
  "key11": "5U6mKVNyX3HsA7w8GbyGNVxge1Jv3LAc34VxiWPxr2RQzqfQQkgAYExjoK9DYchzYE8eFJzBzqFnRchznMLM1jWX",
  "key12": "ADghVAh5awKMFNLDQSfGc2Q5XnGPbLRwqt1MkGK2Xre9PkxYZL5tfxixyLveyJkpMvsNCE2jMF97hBiwfJeY9vn",
  "key13": "2Y8MoonF1VHCRw6HMjS2AGnm4vNEZpbug56QDvbpexsQuvz1SPUkqyetyJpjw9PcK6ZbbmS3RTfzHwid1h2HLKNb",
  "key14": "2BoQr3gmwqjXooo9Tm3qN5iQA7Htzk3VCXTKEcrU7AkEAUNGNSEmNvEHzk8acvHk1mra1R5aukxAhoYTMTQqnwW",
  "key15": "4WD9L1cDxKq6goj4N3v9njjTMaikLZLj5KxemUtSmc1dKKsB2svYhwmfdg1H55o1euAVgyngU8eF3QLDA91web5E",
  "key16": "3WtyuhjwPyqyxwj3pZcJU7nJXra2pDgkRqEcbD4synBymhrwzGH8MaYV4tPBsQGjDj69FL6a9LYyxWNQ72LvxcYW",
  "key17": "3xwkxdHWpYZvnm355ZieuNuvspU9t9gfz72ySc4pgU98x6JGkVZYkWFcf5s4VEH9CpB3n46Wcaac2veASKc1RLnH",
  "key18": "2RpoM53oRVuU2dp6GaE2NXHxbzgfbDp4BqVEPNPTgRAU6yhKXRVMqkZ8mQLNFDt8K8sdd9Piran1XxyMWBsVB56F",
  "key19": "4bkcSTdvkZsWGvEJeNLyHaTLukaL9ef4u1a9K2pJCBTkymvF3VnbovP7d1Essgehyd5TmNx4TNMFMCwUkCgZZwWV",
  "key20": "3coyCqkmDaBuJJecxdg7qwhCEw548chgygN18vRsLEZsaMo8NbJHT8yiRemx9LEeqSBL3oScaLT7Spfpw6EaVNiz",
  "key21": "uAnZe2kpFbGpvWohqMppmvS9UUeyiWXKVfcKdvvzeWC6rFGYN5EwHdAKaX7xjgb1JMEfkBvFW6H51d2Smk3uS8Y",
  "key22": "4wgtsSGTy58WwPB6Tn69zhnkU3SBaGq2ZjtzLrzLGyXoHURpoAprzJiXPd32GEsyaQjSREkPLfKpjpbfqNiRfDhF",
  "key23": "TPjXwvGpwRPE66u9KPVDAypbAPZPjMGV7LmDaUiSmV8dAKcjALZ5T457zBFLuFNKoG6YwezaXLkhfmCC1Ua9Veb",
  "key24": "5dgi4qLJj1v5ncnXo9EU4zZ1uf9KYmB1jGMhvippc5v3H8AxJVKPHL5PXJgPPxRpA25tgBLL3rJ1ghZbwmRyqVMq",
  "key25": "55LjWGAnZENtKn7hbepeFY66dQpsoJudc5NCRx1BdzSAw8cvLCfEkjEaymCqaNNSiJxBTqCeZsVMtD7CZrdp7j5w",
  "key26": "pNCd1dE2QsbEVqaTXxrc4uYHrXnYZzk8CvbS841bLE65Qm4L8eCpa9UzgZCuiQvdDoZCb3kdh5KDUeCR3w1zp8r",
  "key27": "6C6rv4TkpGEKn7BppfmSLAwFEQzuM3c5Fgu6hR1qiXpwHA8go6a6AbT4w1XbsNaXDh5L8JgZnEYoeScsbZqb6x7",
  "key28": "36aoixeqz2nKp3o8nGdDAEJ63jUsdBwEHTHaDoFgotrdNvjbHTXJ2BtKSF2XVNJGM28yxNBEg6HFeMExM5SqXWhg",
  "key29": "5bvGFR73U59Hsd4W94SHiW7Zm6XSNnAjeWrgxw1Ma136MjxeMrmkFpX65HiLqz4CzYA3uj3yPjGPqyKng1QiU4Nk",
  "key30": "4tb8Ma2p5KvVYd33FXENoTuvHqXt9wDK8Zr7RMt4yLrqfDFr6o339SvZ3rnVsbqU5xkzgPnawNYGzrT2ZPqe9Vyx",
  "key31": "3JRXpX31qePdRv8v32MHvrqUAiWRtroon58ZhYAkB461HgkSxWx1QwvpWWbHZQfmDfoBrdNx6N1hx47E14kLtDUo",
  "key32": "1mns2FG1uAB4NrgjfpZdtsBAfYkvbmZkdJvEWWyC8SsmywBtbHqAsPGvTD8J28wYtrdxYoKVcuE16oRF4k51qvc",
  "key33": "CPDgGPGjeANCiUPpcbQShaEzpXD2WYJUiNfe983qhaeV6uMDGNWp89thMNwSwqtS81avZnBAp4WjG69cr8Axr2Y",
  "key34": "56LVnVif2wdoWs6sbTuvvdYXqvDNCMbWTcT3kZeUBVAGyfaynyh86xZi9zkqSYoeZGzKErUpg9tEGEsx2CP9ADxR",
  "key35": "4TcgzgEsyZUqBzk7CTmziRboMVLLJExFMnHkdw5qp2pjgiYK2NnxdJERLSPscPQKSAZGTi14Sap21EjMas1P2dRe",
  "key36": "9bLqmPLBhip22k2bfiSDMvRok3wxaxrjcRd1Dy4RzJS1iZcEA4eoQ8VGizvKFRCFiJ74pHVEqewDr3heNuHjdXF",
  "key37": "41X2p8qBH1v6PtmvMztdv9QRfiCqiefvXNFBd4rFiG88aPhgBmqLvHVsufdQFQFYYuH6jrvTMABydXdJCTrxi73R",
  "key38": "xwYyXvqriQEriYx444PZP4ZynEQiEvuF25JFXAAEa1SWu9C2gbsKDELCBAQ5MQDN4aEc5bdshiBK9b4p6y1c7fN",
  "key39": "5DyLT9yUj7D49r8sfJRE6GnoquZx7fkEGQax7GJkH8FHCZS36PeD2px3QwMQfFShJ1jrhrHfMypgLFA3mgR4TFnC",
  "key40": "5dS8kVFQGqLDf17RqvUVqZs6GHaPH4GKUCspDGUouxjv1HCK9yhgL5Ksb2KpdBPGZZJB1ZMTJsqc4kmKqvaVnykU",
  "key41": "87NYePU9HyVcPBjNYnTjiqXeNWGQNuQXkE8U95ePzjMeowDmr7RSTkFBECTJFcLuJLH9LYco1DELETnrFtAp6wx",
  "key42": "3c69YpajUfupWyB3fjZPjHWkQkpLmzQyMNguYz4XwoeSCXxPWrskaFwZZpcDe1ZUN5rT9F5G4miY49UUjwmbQiwW"
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
