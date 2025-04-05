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
    "3En8mLEwh1frRpAprnMhEdVrAAoqS6ioXGWqPVKX2UpzvFaRLUFrJKJkkDxtA5FZnW4jBRbfe2YSSZ81STBy2sMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zbVa3qYdjfwDDfZHk13duCiNWTcWPetQmuYWrcZMReHEGRDTpzQhKQKBMwHQcuAWpvZP1WSHXN4r2kpHbHq8u5M",
  "key1": "4bPo9dDSw2DDYcY4xxq7HYaDopF9aEgybAaegVLb7wnJooqCTYEVS8KpoYqRviqBgsczfKeq8GV2A25m9YZ7z1jr",
  "key2": "46CrRSpMJzpFSxsK1HQMnzDwN96ByTecJya5jjwb3HsYs7Caav7h97HuW8q2vDZRTLMQpGzktdUPTGjkYehMhRm6",
  "key3": "42iwaPcPGt7Jv6q1W9rh3ysigBmJhjpvtXq4NjsbmoTWsVHoGonZz6PqJ2ic2MSNdGLQR9fVkfjDdhAR1qFiN3Le",
  "key4": "2vvvQjLN9WtLACw8JtNZj5gUGhbpFmFfNkJqkYDh6oyPnEiTxza4s9QQ3tRKsMNF5zZbQqv5uJHaPGaYYx9HDEe8",
  "key5": "2GVwQfKiSCr7GMv9EQE6NyovgxTTK7YjvrrQ61jQni9weitH9KVzdyHMWW5EWKe86CZxzWGwLgcbu9UF4bAxNa3m",
  "key6": "arfwrTfC6H6eXciJLBAFFPLmTVa2CeSvDAmbYN5SJyGJUgPWGZySbN2Ehe1DrKwshbxiam4cHKiV8nrS8zpCoYE",
  "key7": "3uUmK2yig8j7MwwLpFRCRX5XNkYfxDbGbCUkLxMXvRUdNfj8TwBupJ4whaCBE8e91Z7i6b3dMhuuP1KV45NA7XPJ",
  "key8": "3Cr8vnvJypTXvJieG2P1YH8oR41zoS4eN64DqEUeABGSbk6TDGh9jdi7p1Xxc2Nacpe2absYepjGYCypQPsoLkYC",
  "key9": "4TCBSecerpKnGCqG3BQCboqVuG5XJhtmcWY6fuY1TvajY8As9igBF6L9gLqUfpmxaHuxU3m3VSki1DEhXH9SYRzg",
  "key10": "4JVpTMoU8m51DRqVAPx6s115LQPRKuk8p7RfmgF8xVmHUJKSJQ98uxf8sBBFcLWU6QqDkLLVpnZZ54VyhnHmp9cF",
  "key11": "4UjXYFJeVNMj5LD3cDRmubiDJ4dfXm7euf5TKwZntC48YdJhf7uWodaqs9zXjBejsYPY1LQpW2Zk2iHkwx5NrZCN",
  "key12": "3M3dRF6sNMBeULzotWHdP4u3o8gKTx8bcw5H2Btw7VS4hKUGcezbWzZWQt7ibFJav2qqsdJxUEgt1Sk3NzydYApt",
  "key13": "5kysBR4exJivMGYzuFDaJmG415RhYS7Hrq7Fm8V2CYfujbrKsZkpeHaQGnY6X8ZEtThBJoHkkNCRTSwYvC5EJ5ES",
  "key14": "4TgYKRtJs5rH2z7zGipbDuFPqxVCBgBg62HeaDmyYrSG6mUFDzdmzJArtNAkBhXjLkAGDPyXTSWWJR3nfXowB1cF",
  "key15": "4EjQJCHSE1ud14WvqqSz3MpN5v9c3vZLRg7YhvdK34knvCx6UUdqnstaME8MTHU7LbzzU872PUSUXKtW5mY5VnVY",
  "key16": "2i1NcxoaZK3uE6kYSxh5CUyS1sMCZ6uyePzUSWtz86HNGA4iJm76WY4XHpF6w2Q4g1DaaQwCJKzNV71qncGa4P4J",
  "key17": "2HxL2B8sPVVyMktE9bTu3qqbtYy44jfWP2CRvr4tzZBgGvosd2LHwthDTQqdHC6JFyCUtW2e6pN4jU69r8rD65wx",
  "key18": "32mm2TdfEXdkEtaQr9NmhdcVqJkXHrsbrKQ38q28vq56Ague63cz2vmXmgV4ywhbH5Dt6E97WF3ntNpcgovhUBY5",
  "key19": "2gT4L5GkfmrNPGA1Xsuf443oARW91KTvZqgpFC8KPAhCoJYnEGDha47m5t1jm2LHexyDuYdw6X75H6bvoqwAJspd",
  "key20": "4XPZfJEXxYKsuh2A6Q3qRF4T6HQJvTeUh9LyFoczfRXTR38q9JQQJVQzsmPrbZhDEb3fGpcE15BCq7TKMyzLx3oJ",
  "key21": "2hwTe19yR9x682LV8vMXPJMNSkbiytZU3LoXmE1rskbEexgxX9ei2u6sjBWSJ3oGa9FQf6LPwyA6WDVsL5QH57U9",
  "key22": "3Rv8Prv6NMt6t9PaFfRVBFmjBkcj77anE512imMq7Szc5YyYK7aFJUS1bQKr2fTWfyCcBWJ5de8HZdM3WsVg31zK",
  "key23": "5uiUiJXKDMgMfZTqzeFMa8zJYY3KRSc5DFtbN154toBHovANta6Xexgo5BGG6yTz39pC25zDEtXs2aawJGPhVfB7",
  "key24": "3jbo6WoBKWBHphhWEm5rkJc7LmNN5pMdDh2rYXQdWCkcTjDDPMCkASvc1ZW5epy17oKR6LJ6pWCWHhwoAsAyNc63",
  "key25": "5pzi3HEnX7QGQ1H8qVB3YmXxu6x7mRcGTTmxXq2kwwBxeNYUVaL3F7Hkossd5MTvQnvgjCLrTirSy61xByvc2pYY",
  "key26": "sxNDMBXBRMisoF6tf7baDNhswo9jJrQNufzunXW8zkamzX16sh36C2XKfzetmfowhMe3doVryFa1QVGiosAngMS",
  "key27": "tJBdZCUbe69SvrHiARTducweu9krTNAhSmLdpkxjFi179YfpuEPnZNgSMoD5kx3PTT4aMRPDYuYVWhK8hbguYwV",
  "key28": "ZNdyKYw7Sw113eVkpxceYTf5cw4q2STub24aWb7ikXR9KcmieuYm1LFdPBiNdWWNpV6BS3fX1saLqt9DczYkYLZ",
  "key29": "frVWMFmoyW3VAgTCwroGi3bi5vVRPFbHWvFQFQpH2XUEimdvrZeUGNR1D6ZSM3uovAgeVA7RP7ma3psU5BzgPRb",
  "key30": "2FF4tdsZV19uybrNuoUZwg3pGw7AMrrTsmdd3FQ6SfaVRQsVoYH5A7snM6jTCHvm4SMPGbLdfEfF3p4HtfYdArJC",
  "key31": "2V9wHpHy4eg5SjBtGjYJAT641vSFzsoqh5FPQzsgj8hqPV4Pa61m6qpyBMDDzhkQ7tHRqRntEpZBnvvieAzveFct",
  "key32": "3iRomenWs6ozVNrZMpjCjssJpJgjfBvp7UEEZX4sA2EJC1iBFLssPUD1QbUQDkCDB2rmy7uxVoS39E2ry595PNJP",
  "key33": "5FRTWRwBuqaCoAxHBixQ6bD647nJN7hwYtpwYkvPqhmfr5rx2nSznVE75avzfER2N865KC1UxCN121B47ddo2Wsp",
  "key34": "3z42UgYZ2bcaCu9zYcgAX57ZuSoYWFpN2ZjJqXuK7hEu83FMhyjrfVg7PmKQFZHWGCDDiWeu9JbfY4wKwPyvwVW9"
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
