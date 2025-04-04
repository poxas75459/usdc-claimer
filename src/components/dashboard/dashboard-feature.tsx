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
    "24WwJ7t67iPmR3dSSWMozmEuW2R4e3CFfeJiGuN26GXzU1hM3iksy8wscqnfq527ZNe1MmJNjvccPjBva9p6tt5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RzFXQG6PKerwzJmkptE13jjFquitsgQGueA4CMLnyhpMXAhRe4sE7GFKCNc9tkEvrBf7PdmjtUe5DHhxwkdxBdE",
  "key1": "32YQ96VqszpuovG26apchvtwjHzzw6eFErpZ1WbbN8aYEUTNF9MBVnTbsPiusarNmAsXfBwY1SjVX6yPZjmGX673",
  "key2": "2yPJcqt8vPDvf5FgagcZ72yhdQR7gaSegBsQUws5tXizV8KRtZDia6udHHdfECokbJxHwtEKrVo1qtwq8fAUTL8H",
  "key3": "4mMQA4dgr5Ku9gGRZH1tWAw8JY8uLSyjrE2bjus1QzeD1XLBoRe9hGUZnpaFeAonqXahTH3TpHub7NGVkSLfEwKG",
  "key4": "35Buf2yqMaYCVdLXbBj5weBGXAnix94CCVn1nZxLNdP2gtcrxnUuiA54Ab8gxsqBuZPQTdZDo6oZQnht3XfQE6av",
  "key5": "26a1QgLnwV4PCqEhA3Bki8YQ7Y764zHReYugSDCdxC5waf1jydUupxPYi5CRkMTYmrfbtQGj2r2UodVsC25jygZo",
  "key6": "4gaYqavSzr995StaYgYUzesVfm6HWKaoNLwRhkyC38vktDUPWrtkvv5R3cBdsn21qcTZPG9a5TUuaZjTeRejFtNj",
  "key7": "4FTDiVsp6TsYFW1N6vhSjv3KTTJzdmcCL4mjvtFRexinzFg9fvFALqWyV1GwXByyHpQ5kvsUJJBLrvr3cEdd414Q",
  "key8": "xHb5yLzXhy48sgEyQEjoLhS6C5LTP4MCxoxcoeY5cjPv7at77quyNrX3GSgzW51vxxovGt9ekcnuQGDhBT9E7z3",
  "key9": "FAN4UAKew5p6hBymS79JH4ox7fzDok2Kb2oMDUoRyxwW29c41E7eAbVxQztAUyUCbgRsLwfPsqaDz2z556QYGB2",
  "key10": "3HHYGSfEqQ8mJzkhERkR4VQbQS8Eq272L4pvpCE4jKEs2EkgwL6P2SnVNGZ6kwoZ7R4Gbbj5rw7cC6AaBMXXbG1",
  "key11": "2Mvgv7GpqDHkaCNwsBF8ETMNmt2JkHa9TwFr44JvMuFDxwktCqvrCXpEyyuRjecZh65kCP6VbMUtzQ599gg7RZ1J",
  "key12": "Zftk5818d4WqiM8vyMMYaT8WrUkvjvyudQtEpaKWqDPWAn6YhokPohWmi2Wa3zaHNpFaVmnTPdg28ti7Zm4xhru",
  "key13": "5Yfx9LL3pymVbeDyM1rtvk2u1uejtQeRZ95VjgCftPdT1D6SiybXypQc9LephK1FZ4maAfzVRXRJW3E3Z3D2Jspq",
  "key14": "33qykQYrWe5ajmVhb1jvUFFggnuXv8aDAStnSPtfbtcK7nBqJQGvfWuUdk5CNsLXUKjaBCZh5Zou7umMveNNArEA",
  "key15": "48hvsKjAUebJR2gw5DSLNh7XTysewbHsKxjVbd8tyPbv4Tvnn5GKi3XJYo71EH9274FDt7DhjVDUAWPDtk8Hcp8y",
  "key16": "3WazJ1GPJzZYcmVBiSxLUszZjY3MMgfCRZVgT9hdYvb5rKSteBnv9KrVGxpAq8ofZQ82cnCwQVDQFn4z6jpJKh3B",
  "key17": "5du8NSRP3vd3hyBtdPWVJtKSSiWFAEBpXjsNNGbCyFJ8HcGFtRZ85jn95sBoSKkT1Y1sGtu14b75cHVu6dYWV7p9",
  "key18": "2bgz9fHeuJABH3oGd6p1RodVruPdJ58xYUQis9a1CMJzxYQGQeK18Kzbw4dMpm4Sy3kZjiyAq3N6SHw1xf89my6x",
  "key19": "5UeqiRSNHDT2kiahTi77jZrchXdbaQEpmRRTFHdgjzK8SbY6VNZEYV7R9Gn51gWhWyb8sFj22dFT1DRvf5ojWTPM",
  "key20": "4fT9MsXHkBSkaW5Zp3Y9D5gD2xtAeY3jsD5qxTtTe6sEk83uiAGwdn2739KZq8BE1j35m1VWSMrxQfh64R8kDwBC",
  "key21": "2iB5BRtSDGyL8cbd6GT8GCsCfTEMQ8EsJH2eaD1tpthoRC5swEi2fgwX6fZiK2szVGuHG1Nu6XyoteWKJ7D2GSCM",
  "key22": "Ngjx6WnfNNDxySPipEs1xXDMLVESc7KLz2LSfksdjFsGFkvRRyGW5peYtBgZ8AQqdocByokpH7UKcoeUTnc6AjM",
  "key23": "5SyNvJkAmNh2aUGzonR3N4y8GvWiWyQ7WjwnEmna7NGPU7HcZ4iMeVc8Tk6jW2eP4vavtaUBTopPVYuUBGscVdKK",
  "key24": "64y6FQBojWdqceP6bct3hVZDHSQyp7U6ahP1jWBjo2rkQZZma7d8F61qdHMAm65JgkoLZbNe6Y7ryLMBJeYNUHRG",
  "key25": "53a4bid6h827LSFYLxaBAVMMXMWDAtNr6Sq3QL3ggjG2nKWgzwgBoxGhjeaEeMfrVFKEHMwR3rH2xALt1vQzxrLH"
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
