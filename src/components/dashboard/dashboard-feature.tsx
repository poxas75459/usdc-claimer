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
    "5KuFWj5f9iLcSfMTbxvz8mkKpbcwDX2wjhAexvBGgDCqw9fjN4GidgVBgagrgX4shrHYxBeSjnbhLsiRbsaLYgYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e3rEoWnfi9AZzfNjXFZictWk84Wxn6Gu2UrNfv3EzYitx9XEun59k7ckbx3gvrgwBQYs47txWax5pvGkJn65Y68",
  "key1": "2R8DNgHzWvoHJZx3UBjTWJfoJMLDMAVgWYBLFJy2omNaVYWZ6kTKQTFJkzwiehimHUUo2JxMY3F9SPaDM66kL3TL",
  "key2": "4pJpfCEgpXcizxJqw3TQWA3FNgQAn9dHdeSsrGSzGj6bQzAZFZEeuL8QT39wPcaj6op1bmbUE3HVhQefUgBBN1SJ",
  "key3": "RhimHft4MBJsrseSoZ85qSoRQnuk1XNECETQfLyfBrMMy7Ltmg6M5L6fdjFrNGMYJdcoH7LJST42MK5bL2JxTwT",
  "key4": "36YupStTZJi45mmXGLcY3UcDEPwtuVF54XHh29bEttbP2HFfGrntpw2iabKNmNqin8mKir6uoDDRrqU26QRddFTb",
  "key5": "JAw6VQJFPXi6jRx3WhsYzT5ArW8GZjXmGFUCKvTLBodJKBrJMQHU2DaWQNErHCgCzXCr1e3weY3CcG6GoAXEiJA",
  "key6": "bHoEn84W6ufgScFxRKbDi2QrFpLNqFJ147yHn4h3vEjHSoKU5AY6RJEXZ64cpV6qEeMCStSSteSgCMdG9vnfSgG",
  "key7": "3rS16FPFLtMGWZuHQaNQ7ihrXNfvK9DHHhUgTmBsK3v9WbCdF5rr4JM9N4HfgGJqtF5WC3RaCb8ZN1v1Kabw8JsM",
  "key8": "4G1YuX6qpmoLnMxzPKzuhoMcXr6VvhKppGiJ2jb73kyhix7kuAog4TxPF7ZKZYA5b6jkGXCiwfBnM4tSrxJBSiKp",
  "key9": "wgLsxWB56SqcCUJdtoLbbMDcx5fRCFZQqeZ7MDoqVggeC3nWDvpak7hZqZ9sqbUbozV3KsCWj5q8RaNgTkFeXMn",
  "key10": "61ukr63yH3kq3gPXrWJ2f8PFi4k3heyixXBZXKKdChpbF6CYiiTsYPbRCpAufqnBabZKWNLb2eyJ8E3FVjpG92ZX",
  "key11": "5VmQnec9kcwJCaqwBEVqWZZGzs1m8L14Tgx7GHaMAEYYqzZUtPw5sMHGUDuzyofZnsTbTihR4CLpLh6iFG2P3QoP",
  "key12": "2f2tsUjGsndEDs9crQHpzmaoB1vHKpcAZAQAp3P88pBnPw5eucZS44LiaUk8f9QXxx3MjR4HCdUUbDyPbgJN3odT",
  "key13": "2SqrPgeqb3ieLfcAEFKkqonRrkcJTYbMwpNUqknDY56cCdvpTjg7XLuxmyMPHuGZZTxD5wY3KqAFss6wfVsAKsfj",
  "key14": "554pZcK1JeGtkDkb1mL3PRSYHjGiWqbuxtcNZEX8mHYuKyTEzMw6qyEbfjHfEFgbTyW1m6a6fgB42B7CMUrGvSGa",
  "key15": "35ZREJ8kdVGWvMG4ABBc9UaofQtmwL8zLDWjfctiUyJapCHszpq6wQhxZpb9PgmGy45SKpFtvcLDbtjpkWQBQbyX",
  "key16": "3MoiGLxTH36kA6v9dotmKRfMJednEKukFUoTmpCGHzf17986wMBN3PQdDBMdyawautVKGJAZyufFM4YjvWDrFqMK",
  "key17": "25HxAWEEuX7GhZHgjwwvXnP8yvyN8TmFKuF6113T6YcLgL4zTqHf5vRcAB6Jw7wnxpkM6wiiDdYNernqjfUnuK8p",
  "key18": "3mjszfwmxiKufZ5ahdpYmD2UFbqYxxSG3e9EzcoAeuhut4fAXfP3YXzxvx9GHLUHwkJTbKDPGFQVMkpLs777PpTb",
  "key19": "4dXDTFnDkGyKsveS6mwwtPFM5qpaz3mjqrNyRHC3YeA53ZyyzzxSA18NeQ3o7oAsbxQ9VWDUoxdcNQXcNoMFaCRp",
  "key20": "3Ntx43YRktYTZGtnfhQBV5bsX8r91qtPSnRzYFSTvUpqTsF5jcAQo33SnTYryudJU3jz25w43WAVvfkwY9za2oHQ",
  "key21": "4eXyjJV2KgC9ktRf3nKted1AQ9BJtjyqjgJREvvD4vC1okPpVcTbbNbH4uNWY6a8hFLRCzWXg9ac3iemZcyEVPvm",
  "key22": "3WWHAJ2ZmUt3EqA3DEiy64WjEZHg7iX4yPUYj1rJfiB8ZbrEjgjVXCVP97cPb4CyA5z86vqS7vrEnSMSMNQPsuch",
  "key23": "3HrYGUinDLYCxaXqpEC5SKX3oV5D3VPXDQVUZCTdytWZpmuF4Ujam4Xncku9c57nycWnwNnp1CWh6ie9igQyR53W",
  "key24": "632NvbhDW8xWX6DxUX7aicDu6PKXx6fKUxeyHQYVMQC88vQhL1UHePAwBsmHeCgAxe6uZq8CRkkGDm4VZKsJPPRL",
  "key25": "3EvMkptdMVinTJvBWPXn4tkzrMytHEa6nKFe4jFj4DJnCwUmCeitmxSzm2Jpviv8qfD36WKVRT3JWhRxmRqvM5EG",
  "key26": "51gktcNBgyPmKKTPMS7CEgQ8KJHfxh95A4zFgJFuqwrryZokXQ3hu54jmYNvd9XmEMYTe3YbdHjePqRqMrscbU46",
  "key27": "3aF4SJEmDxeST77AdtcLzJvDjHajDxTu9M5pXvL8zfcQxkqZ1oQwD46cmwGNpXNBdaCRm932zKY9BLU66b1euU5M",
  "key28": "3XicfFqFu3VWMTV6JfZ1yXGuGvJR9t86pWmVAmjUtFBAKgH7VxYUAhY7dJavPCkchH9rGb32gypqXSPuVwRDvqvL",
  "key29": "Snciz1T6TZWr7oG4tijAACsaQC3caGE45mbHBPq8rVkrQa1sr9m942XngkqLBoBoyw4zqBjKhmQn8QnM5zLXPFT",
  "key30": "32WSn3iVkBnAnBzdR1NCmBkDEHucLDjfixTUtNwHqhuLrCkuHiJsVKUPzB4gBxEGSnGRwJcsGL9by3apUyVe2fF6",
  "key31": "3znRfLoBGpxtu9BVohEzpSgf4GNTsD289tMzWiLdhufDin7DKDeX29smsE3isyf2ewqEVy4ySbrreWTZTZQW9B8i",
  "key32": "323MVqmXAHuziK19VzRQg5L5mZtXn5R2a6owfw71f7smJhrn6GMaEJfXk2KHGEUBeCXPWVRH8LHXsbmPZpr2VBQt",
  "key33": "kZvzvW6kgZZRx1JoBC2KW48FuymYk5SXx7TAmSMtbnBaPKSYwdhvtbECmi6xbyyaYxknrNzPB7we93pRcoz4BbA",
  "key34": "5Z5aEbai9qigVdFJqfCcJzzS6EokSTse9XScRub4aiVV34yoqNmwRZxEsRPN8NnHRjV6hvEaJ7cKtvYhoWb42Xvu",
  "key35": "3FJhcfeod8TCrFn52tbkTJ56uLm72MzrMd1XcpMQeXrmbe7PiVXdEjj3fq3nNX4CEHDrt9tPs8u7EoJcHGf3yM9t",
  "key36": "5Sg4ZSjnjPZe4jF9XRLkM6DtGmSQTLXDiRb5v5hkGhGew6u8hDx9LfrEZboQUMSrKpSEFigm4yY9pw4VJtbM1vwH",
  "key37": "3wMYaGJStenKtfYauVasLhA9AHBCPJktfXB9Sxqkbwm1Cp4frr6YAfSCXBz8MKwvTio7PEmaacL35BHbAhpjExwU",
  "key38": "Xdbai2oQoT65Bpt8pbr1hjRrEAm93a6gJ3BbcHiWbjdVqqdWLWcXgEgh1z5cPT73HZ584LX7Zitk69LE7zcRKD9",
  "key39": "4e6MJdLHT3k5REvMk6EM7TaAAEjUse1a2Cf7HCjG8smeGdaXR34Qht4zfNfqaTy91yC4cyoN2uq7vbx5mNsjWeZe",
  "key40": "5DH4qLzrQcj6BXNygCASaVWJE8nir7xUrG3U4DaNRvmCbsJ1gNycibeBnE34F9WgDpwpgUatcuwKa6Tti9gtEM2b",
  "key41": "3iXoJcrk374Re1ahu4ykDj2qnU8NEWRMxceTLZVQTnGYaCu61xQRS8FjzYiUaUxCX3bNTDCBVz5vfLrGko65JXr2",
  "key42": "62F2jj7d6JzS1Tj5qSzZpsBJMBst8qGeC1C7g7hrP9K6FvUyaz1sth2dmD4BCeV5NoXcRAdWoiU7C8AgEfxyYjCk",
  "key43": "XDsAPWddo6PKgTig4vMWvPQCsQF4b9Ry1C1mtJMmmDe1XM8fbZHpYwzSjMrf5WWew9hw6uLas49cN6L1rc3Lia5",
  "key44": "kKsoo3jLgy8eWBdJvbgVcecss3GxPs9t3AN3jGcekJ7CSCM2i1vdj6pqebvC4cWpN7Vr2esiUX9CsGoNLsfeJ1Q",
  "key45": "4QEcjsQBgMC86HeiVArMYkyR77h19FsXwaC2UJoSNRjAGEQWQCZvFWgHqWCkPCvso6gHna8ndZb7rzhdgqXYj8Eq"
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
