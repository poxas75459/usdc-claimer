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
    "27fzboWpf7pYRXdThtoDFzT4xPkLyJLSiS5dPZRij3b3aWV4sKWLBbZ1tfytzitxGjunxpn6BfkbazpKLh46wYqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CdwPCMh7DX2YGjd5v9X7QfvG7YTe4mrgXaXGphA5UaVJseDGFretyKctygLzTJPjT76MegwjEaBHYEchXoEgsvB",
  "key1": "2C2eMrA8CdwF8Y7ZZUBPGnx6Hs3diFZppFwerQEwZXxGJHtoDBW5JTsFKW3d3X2v6aVVarEVHMXgP9b1uw1EUJhp",
  "key2": "2sXU76nzgg9HQ9Syta8ZncajgsoJW8EhRZupmXGCpvLYu2smKZCyZ2Kk7HtoavqtHUx9d7dCeV48Dagj7Bd8P3r4",
  "key3": "2zswdtKjjppoEHBLKR3ThFBKFQcqrrqrYHEsb3UfkkKjm3Las5J9DeykhWdCH9dEYWbAeBYYyWqBaRiEgFRfSR6h",
  "key4": "5YsQUavJA532PCF93DvK5TCKXoVbVR8mHduTcvsb6AbHor7dvDZSwZaYijPoJyd5tk49RiLxCw5drSh4ucUR7tbW",
  "key5": "5mG9gYBMkReAjUBXBNkk4EtxQ8onb9i2oT7MYF8kLoejDr89GF86BdGuLgUBd3n1QpR9NrwBhEMzxgN9pc79fPm3",
  "key6": "bVi2LbL3ScnnFiEv3GZ2j8T5FF2c24sXVZQubFDoisKeajDkZzkHGLKEU9wcjciiWFk8Wanwy1rx1C7V7VNYdBN",
  "key7": "2CsaPch43t3bPBy6ZDx9cqBYDSzHezEmfdH2JZPxgASjsPrsnsK3T7vgwEHXZx7HC96j1H1cE7GbaUFTnusATRbP",
  "key8": "2vZFWNPHEuWsJFHDthgWkGnrCbNV62DKRUmV96YC1kKtKXKzD6ZfZAn7Xx38Frw3NKuyB8mTHoM9B273JaXtAyJP",
  "key9": "21SLgrRhCgLGK8mFb7J2xW1eshQqYc3hC6DnUwqxFLGiTws5J24SAVALMrpcDYA14ciUvgUe9rtGeqvQd4AVRxwg",
  "key10": "tsj1GjAtYp7fXv9RTZoPXBTHvjzwcUdbZzmP8ZYs31VcHSa4nWZwjvDoBfG5gKJfAEE3tpYxabPmWBAxVHRs41b",
  "key11": "3RfxK2DM6R4ZnWS5Jx2Hu3MXCYTHgzZh13Fgaes8aUwJDvSFLYTGhLuizqgW1cuiRkMzqsyCfjEzCgWCrBvPNDCk",
  "key12": "4BAu1PjqALzk3xQgjfmUP7yj8rBPoiEfGm3WznZineizjRVwXozgYSF4FEtmXBNPRsKDrBBUvUgWE9zvGU3Eyaxb",
  "key13": "4NuWvuUWwUpjZ96RDjpAVxCcYmJtmtqMwSU5NJVafmCubDJXcj3YRQiZjeSQjrTD7HXZnA1KALxxqTgueAVVfE54",
  "key14": "3oMJ6nQ9SEVC6N7uZjGR5cYK6kj93a9a33gVVPV5HzJpPAdR6t4rx9hdDxQV85DSJZH8nF9KdK3sDmeL5jXSkPyK",
  "key15": "45fqZ3A4ao8DitZjq5QYh4Ee3vnDSC2iJJRDnccaMnsYVDVUf219fiJeV9aUbHjnnBbU5JTnPZFuR4Fq8yyfqpfc",
  "key16": "2Qr54M7GYxr6myB5QBV5mdvGn7TPpowtgEM6s7XxnJDzhT6A57PAG3ftbGeKNnJjE7iN7iG7LBdPHSMrJNBRZ5CG",
  "key17": "494y6DfpTY5KBubC9koaVxPpjbz78rB8Tcxk6t51RmL6fM3nkTREWyGdR2hWYyLFdD8qJ9LyGpgKE4uNwu1zuYDM",
  "key18": "3gp3LriKD4h7EJRoVwqKdw3ihfJ4wj2gFJH5YWtE1aotuQdhDhf1D6pqfxBP3oZQpNb7CFaHmeKUiSMCk7qxPyih",
  "key19": "52uTs9txk25Vn5MZw5AmjZpyjW9mwN4y3NQKjhGKW2hnVSdHHAPR3Je765ZxepC3suj3gPsf3S1LoRZCTExXE3La",
  "key20": "NvpX8Y4zno3FQdmBVuBuEoFM6nHc1adba4p6BfYBFw1g3xHiQjZnFMajvN1UUUcXG4kbkC3erQ4KWEBJgGtkKaE",
  "key21": "4jHf7ZraJKLaka3aKUa7aaTJwKhhAG9pYiwKrXGA2qGczg4SzMdvnWn1XbFE4PZ85rBLpR4o9TxNCAuLSWWJcHL8",
  "key22": "31ithgVBo97g5TPjDQafzbBTSABqES82UFqyRvcBFVd7dSpyCkGkKpPCcU8JLcxUgzD1b93qTH5fSvW6D5kx4dvM",
  "key23": "33ofurN5vj29W4SLPiNmHtWWQiHWWaBvJ7qWkkS51ShGdD3pNHsgnrptZBxwGk9df8xayCTWBZSxe7BNiuL41TFp",
  "key24": "3vA2eww3tpiY62fLCfVdjLtrmK7F9uKrZv7QSuMghoZNWFrhU3n1PgKL8prbf2TVJzXmu7BpWfgsyWkoZZTJpq2u",
  "key25": "5ha48wQRHwg6bCRuz98KSX9AVukR4GdkHppgX6Cyd3BFyf2NJc4aHUEn97qWBd4gbiTvM4AAuzjuHqJzUyDyqgeG",
  "key26": "5hemS5rTZALSHNMR9ZXtmoKJ4gYenYxpBgcYwAvadfmhTKp3yyA6Zs8VvAeaA2nNsTqWqZXQnydZguNXJtaoSABC",
  "key27": "4AZk91rs3z1SwnyB394ukBzJvCZsZjMhHbAFQtjKvwKpQKBjzzq2hfaS9GBkUPThVKUHrjw73nQdkz2WN4RYtAW",
  "key28": "24B25p2xKeGfkL1QDR1zThQrcDXUhnZcKTsqq376wTc5aizyDuLUWmZ92e1Sexv2jkrJBoUMpn7BBJiwCeYh7Fy1",
  "key29": "2AgWPufyWtxNUNKwVSp3mJfvfRMKTLgeXr8wA6xxSJgDUp2QfiMJfuWQ964urgEhgp7o6XhyykSAjvNJGemaXg13",
  "key30": "2yRGmusrwfbWhUmUfFczzsVb4dG5niYZc4yE1QJ5RLdgB4dp8iLgC5VpkEUGGRUF31ciC8B1SDW9D1UqZgCjYacE",
  "key31": "4cS3XKoYsxVrqdeyUPA65PyShjyGMzfwEh1woBL5E3H2TQi8Cs77keRJcofsWjjr1wyNMmriWBy62LeBQkGwTyci",
  "key32": "2RGejgTLhVUCxzQbEMSaWVVTcM9Wesu3GSaHoj8W91oDyKSQtp3Dxjp7xdC8NRmP3kHrZ38KrrK1jiZADYCowrFd",
  "key33": "5BbZDsLJ6YH2SjUzKy3JexXpKgiFZeh3j5HEVVAqopihrHfRogjquHRuJxEJz2pNe9zv4anhQrNTSWhk2tZejyKZ",
  "key34": "kE52BryYKZNXCB9z526BgdEPsGg6qak4uqyhgdcYZvsTXng3xdSSNcWVwTKMXxAmH2o9Sz5RE6yQc2s4395EDfd",
  "key35": "ZpYxu3UrNqdGc4uwhi2hkgYXPANMQn8rxiPHnStpFshPSXxJykgT9XzcfCrzbaZBvBfXVqwtARefHXJFgu3dMnP",
  "key36": "5JXCYK161Rw5Q2cx4nkDazkgiHLumJJEkZnsFWJoSndMehrMzpnor1uZvECPWshHR7TmxbpKGPdvxwpM66kdnhCh",
  "key37": "5RCfRfUts9ixU44YVmswgvpPD2SRfxLSdB9nCBbRn1sp5mTeHFU59GjSJF6gefSEPPDRwzSWdQ3GpdufT4gaJqjp",
  "key38": "4GW4MomvCxRGsvYC7MLVpJeTRKYs8JMGXuQcBMSN5X4MnMbEMyyMhwrZ6Mu79zHhjfC6F3CRVDbnjuvXGDLCD7H",
  "key39": "3nE3eGDwsLVupHMWvJaDCc9UW272Pwkz4QsDEBZ85L74JRp3k9kiW6GjGAcgJMWrzngoHmo7THRpmLCaK4SDBcqY",
  "key40": "fz42RxRChJYMJBEtTJjGqSJDWwc7JxP9NTXWN7gS8H55zhX3ycirWoazo93VNe7kxuUb6SeRmnNrgi142m3QJYV"
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
