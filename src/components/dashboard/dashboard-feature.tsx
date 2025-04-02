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
    "5AK2wy2ZqDGjrrFEK1Jn9wfY7gsDbvFdobT43xY7u3QtD7nnsBxhCYBbM1CMJW8CrN6fUkJxZ97SS8yeFtxLYb5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aQX6UHEQaxjCBViDwg8apsSxhithcMxvPppt1EFdLnVi9Lc2dcusnAwD53D5UGdxjzdYjLXaXyVkUrjM2WUYei3",
  "key1": "3Wrn9uZ1JcpLFQCXthaFYRunVFNuGZYiDmjQmubSmAsuaAMPRmToWbFw5uks1eMcmR4nMquaa1tKsRocTVLXcKcw",
  "key2": "4zcEVDVHnwVC2SeYJwXuRg8izyMpqicxiD3fdNGdJWmknxXgH6AbDz3HYxw4XRSe4P8yrmrxSzcy2vHcFBJ7dm9W",
  "key3": "4ve68LhAci3Sdq7UoSLNQQWz3NRXFTvRHXyFpn171gnnFpuAbU83sWpUBPMDjp8rGkYTUuMfZdnTm4mB8LcbNnzU",
  "key4": "55QYgguekZayXmpKKe1zCRDzmETds9tgm3HuXwVGRgTJpRZ6WXak59h7ifxk9u76MaV56SEsejQJTbWzoFKyxhrP",
  "key5": "3k48b6n8GtNMmx4ByiuhfeZocb7BGGyqgh87pYMe2VgcKtUrdkLWDQTLXTBcrD5ivbUFbGqgtdSYkx4yJRNsdyET",
  "key6": "5H7CBvsv3sXqFjtZTgEr8TzR61yEsbMdXNcJe5EcNRxgiumpcs9VY7c5RAPgfcQwTPu4oKRXd85PC5DjA2hCeNsf",
  "key7": "4URrdzaXcbaB39vBxTLKihHbJgRbEUMTyAR6g3kXrNaphy1LTtWMUtGmi4n7JsWAJrMXorZGEeBQNMAwBhowN1At",
  "key8": "vngLDa8pP3F5rhXbzMGd74wGeYLG2ZpYM49oc2dNu7TSc7VctUMNfyzQXjGu1MqVkieSMESXjfGA2u85Sv6XjQp",
  "key9": "73CmHk919tzTvn5dsWa2pSceGrixaQYujJK7xHw9XGqXrxoJgseUBWLw12WWKPhCd8zJj81Nrm6YVhijw7YWSXG",
  "key10": "5rp6NS4k8tuLeFFe6Coz3514tWzJuZfp9jhADX2v6YjVabPhcQCw85viMS4JGz8DyJfkFrVWaACpTpLSCBcnANk3",
  "key11": "2PFLowSdDy5MJNdzWHkDRqoUXC71szYsv6tkX7KwWqLKHdwkcHUdpxBDePEqFgZaHCNwRu6pXSS9CUnU4oELTczQ",
  "key12": "tuVr7C76V41ChJiNCjZf3JQa26BBTCjj1LKSe6UEXjH6y6Y8mrzV1Dt8ZSj1vuyrU7VV6v2QfRfEka7BfQS751J",
  "key13": "54FuEFGSm5k4P5Q6vHzCwzHAr3N5x9QMy2F9htVNHbfsLUhujqi9zdCuEQSRb5DfHRABM5fZxLJCXowEMGhWA9Ni",
  "key14": "X6qWMYgoAe6KnPsx83AkSiQ4sQfb9FzRMWWcmtMtBCoCt4MjfNFTycphRA1Z4P2fG3r3gJGFPCFJyBvxdSrExEF",
  "key15": "4x42pgu7VY2oRuhEp5dbNZJmGLKX6JmKcNapZfQZJj2BPMeStd6W9j7uYLaZSp6vyB1MYf2uykWxhFh17TaFAdoV",
  "key16": "5nLBhYimm8TLEBpHUZY75fJ5DaX3gdoSdHqzMuauKdh255ED3mpZHuM46EyuhKtccBtNBKoUTvC67UrbEjr5cNy7",
  "key17": "44GeAUrnadKHjHPqeEcaf6FSVFmUCAE3dX1iKPprhzg2ugyCoNkojsZyAnhxoEtEYUgCbNw1SPEAFzvDUndyViTg",
  "key18": "4Au2sH7gDa5VFnFWyJJ2toiQAU5t8aixjAqC8K8NSERkBa6PZpheKkkQQ2kx38H2sgCtQqG5nG79W9bfcVt3NrHT",
  "key19": "5EMXSbQ3KwbyJPGpobU6oYznWE8LthYwkrm9NoR9tBopHa7N59mFL3qHXUMpD4bWTBH11RJH2Kg7CExL6RMjqXWq",
  "key20": "sTsrbvJbxsmHbRQ7JHhjCTViz9pNqddqWzbqHQyK7STDeiVEecg6CAz2usrDXozroBRusRgiTecy8bgiF7QLB5v",
  "key21": "tkFcxQVty2GyeufkZWnai8Z67tPNTGLtGXUmXtTG9MmEp7SpThx2jwtQm7L3LkxaLQbMzd2siSzpdi2oegCYJWf",
  "key22": "4bU7J9qc3Y9uNbCquZ22WUkmV7BNh1812fAdRTsgasvisBWKLp8hqSBML5mmiiYJfCSQPADGk4kLuwmfUkvc5Dyw",
  "key23": "3UupMr7R8KoMJneKbRwj8YNH3NMTAPKhzPtizBPEERUYi5GaFcrSEDzb1K1tQACUByMqPVkH84KFJhLvx7XgbHXk",
  "key24": "4tk6jyptNrCL26nNLGbLofsdXhkEra2ETuGQfEoZKFgpmXDnfusFDLmWkUpNir85NiQEJLJXwn3HHtxM8umRsBWH",
  "key25": "5XhpqQMci2YN96ZgEcHLHh1eAu78GfV7XkJjtGnCqNtXuyVDLG2YQKDq5QVWyzYbvqinodCRDWriKMA8ubyXiUsE",
  "key26": "2v7mutmoqaRqjRuJhNow1UyQjteaRnk9hHJE6cRfFM7HCmaNxK3qumK8w2YkUsyJRPUau6khQPf5z5prHV3S7rKo",
  "key27": "2pYtjdeTiXeJK3W9HHoBXRTs8UPnHRki5uCTXiYdVJybX8TLrn5QyrdGLSGsC6MARv2qCcRetsacNhQyjccBoFMC"
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
