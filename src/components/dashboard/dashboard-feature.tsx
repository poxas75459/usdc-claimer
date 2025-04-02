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
    "46UNZFyyVT1GpF4oGua5nUDwPLp1dbc8uHeQdiVhWdD5832U3FJoPzk22s39qKLj1qmFcqnbwCh7cUGczqLxiNyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xKrURXvJqEFkcdijCWddMvUFNgqFDxhhjwjnxA8CJxGMMwWMhogxz57WeYJDU7GVs5yUfQ3RpvDmwQeEW9bNzku",
  "key1": "5cdpqhgpAXgQa4EtgtVpnHiNeFJcExaksr86zrNV9WdvQxnCx2zS627VqNs395BUWHQaJTdcVC4dWAdhTLaChg3o",
  "key2": "5k57557DTTygfEVo7VFGLbKimLG6QLgpSaeTzLJpdAKHr1fMHx7Vc6tVfWG2SrwUL3TRR4dFGr3iUGCWJgRttrcc",
  "key3": "31j7XttAA3hK1FFKn52Ym8WSW8WygcJjkvGf2kwTuvscKftWzVytJwHtEsYz5yidLmEwQ9fNmJrKhWbkKyNosXH8",
  "key4": "5bn8moJnvMUbzY8jiNRKHiKPgix86TCE9g95fFGV3FTNRNxQx5Rc3W92YJXAPMtNPMxRYdhxLCubCfRNFFsmktJt",
  "key5": "323NfPWwvWoyVN3eChGe66WVGk4wKM44pgGzS512xbNka82nHUC8WsfDfLG1kzWoMeuNvPo8qR7DpNJ4y9Ynbz3c",
  "key6": "3r5Tb3APZwDhc3qhWyBcsWX6sb8nYXEYyChxqmhYstNmokdV4ir4L366fnTc72wjpzHkwRZ3KCgTxUuKfvpsSLva",
  "key7": "5KvKxbhjazhu8pLYY6pPNAdvpwutZq2XdH6Y9JYVGyswHhjniFQCUo9gEop8qcSW1YjiWenLVuvVkDsrMiRBTxsr",
  "key8": "41kyH7C4ndMtyiXCzM6F1Uw8iVwsGNJs52jqtHjhEPpqWyp4V9cvNuyevUvCDMaU61kDJ6XTADk6sSjTCxwNV3Tu",
  "key9": "3jRTbpmdPHQ1ZKzEALUjqrj1KuAbwJpw3pcrXWNvnLJg7cZoE7gYFdyLfKjoYWgvrMptpqdfMk5cugXaMWhz7C7B",
  "key10": "57pgbQpS3Ugc7dJf5AH5Z6QNbGnoh9N7QyeJhpozmMDSjz87sL17tbGAUS6bMJ2LCpnpPjz9cVAARPbC6TnKtToX",
  "key11": "237aWzrKfeNT4CP4bYpNfLsRTrnSYdjjLCgytntjNCYhMUeStoXm1Yjp9f2Exgxt4RWNgRDZepX3Qc9N5jTG3Ej5",
  "key12": "5pQzDtFUwDEm7DGL8gEm1xrop6mQMVuDKJiaymzwTraLm1TDfYQ6oVvHjRSMR44YmwjmyxvBTdbAKgTQS3L1NQaY",
  "key13": "5ppzNPurhUrVPJ9rwgEvCqR7xnyGZJKxZ6oteBnpVA823czyA1EHC5J74awfaiLmfYwnprVPcrcx4y7jTmBFz6jJ",
  "key14": "57MPa2XdFHBisq3b4bjWwAbWaHiJbxZHi2XRXMyNhrSLBuYAhXTabYvS64KFK3rMzYRTueaWvyRkZLZb7AgvC1aT",
  "key15": "3aFhpk6wg3DYSrm25CzrFczsndsiXkvudrMNFJuJUG8jnye37FJEx9fN9rNimVJGBt94f2ZUYoDGVFCqYiBaqRyC",
  "key16": "aDouwNVchP8syBNrxwo6n3S42m6dW6n3CB6D7qQ4uXtk9tRARz8JKFwihpXerJe4HpAvPqjSBHiQtNS9gZwgWuk",
  "key17": "4K65dijcwZ1VoFrHrFoU21vZD2nPeT355HazCwYhAAaRjTmVh1uWi75WERrverMrwHRQpRs1Vz28Tf59xMaSLtap",
  "key18": "QHuqLZDRyPXyvCkNDcQi2s7MSQc3JckHhGYe3Me9txhr59o6aBoewCFSRqio5bBSkSr3ZRwRBetBJw6BCMC9mbF",
  "key19": "29FQHCbA3tVj6qBdie6YEfey9q7CifqcAx48xbN5QZUBMNHhDYniLczAxnkTrGkJiaYX5tBK6ukw5FyqRFydqxoU",
  "key20": "4jxvPqUHLqL1YP3P5oaB99Bs4c7dVReKGz4ySbVKfrBfaaqyseJwi3R9sRVCfF5jv1PSGJWydizwdMkkgFUc4kRm",
  "key21": "4v57asxy7k3BSVGnjm9inxN6R5feskSAqVRdqJAgA2pmdp3c2oNSghzZeZNBMPwNnUovfMYaPfYwpiK2Bib8gQv6",
  "key22": "hNBAzV8Yk7WQjkDLd681dr4Jm2zJHjYYHg6WeY5Sm8KjVC52gtnjpAMNa1X7b1SLKBVSFWvWffKZm3RX4UqRXMU",
  "key23": "61RXfno8MAjwzBJt1ftq3RQQA8qG7mbAZ6TiAEEhmPbQT3G55bohhWzXPcyPLb9Y4kAGpFci15zTpMKcYuU2K86V",
  "key24": "63PyKriXrkkJgZyQVjgMFCzoghWWh5i5VYvTcozuboVjhdmbfwivGxmMuLz157MFtgDx7UkNauyLw9QHdjXB2Yeg",
  "key25": "Q4Rfu18sQQDYV4g1A9JPAVQVhJFQUBuqqC7btqwi239eQvAYo26LSKFYNXKG2birHEWWMUXjsKUuMc9MFk22V8w",
  "key26": "2EY32Wbu2wkjUUf4Mtvxha5x8dVcpmDpSf5uyVDZjPcBmDGZzc8MuB8Dugq8GQbqoEPPT7NpZnyMnq7NPpmS2g4M",
  "key27": "5hKPUQ7oqGeXZ91iryygC2kcS7cxkwZCKGcfXBrTQQVP6YTPr1qoBv5VGnHvEKa1yepzaSaL6VaFn9aXP74LjuSk",
  "key28": "3jrfMg9yVyYJ2ssS92mYfBXqjmpSk427NNH4NeGrb8LCzBJadChPP6KxEcQBUTYiTH8Anpra4AD1wmjmCuSq5pve",
  "key29": "a8AuNFrrkiPkFVNYhHpT7sYKcbbDiQ4AP63yEYfhxHaUs5M1GHjUAavHyeSGi6k2iEjPj6txDN6e7BW43xDoCo4",
  "key30": "5e8HohfAwDHNXRdgKfbBYGtwSnYtzNToaqQPnfJnR7ym7y5vvSxvvsiQ5YXkkD6VAtrk9BPfNTSdXDkSGF9MuboP"
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
