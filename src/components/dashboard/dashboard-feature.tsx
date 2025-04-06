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
    "3UQQRTxne7RhBjamyBvsqLUQ8mdqU3eJBH4Ccy2W8srekAvHw6r47tmY1mdJF8h1MYVg9c3krgYpr7emNyJF6Txe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R6nxcVKJzDKJ73FEkuxQvkZwSoWxcXMbUaug11MaFrJ1ayDDVowf7muuDkCps9nx5yqYYQUvCYDSp8cK3z24o3g",
  "key1": "2VJL4B765dPonn3ZBGTL9GQjZ7qBMLwdExew2vUqbhbAAbnYgtpa3fpsbVb9GRcosNiFF8AX8bBcm8KP1GcL1MDq",
  "key2": "9jkqJLUrz1M4hj2DG8pH8DaLogAsodUuDb6tgsBkUJw6hZX4aDbpME5WAzA7Y7yXsgVkCKedGjKHUxzgJ9h446D",
  "key3": "6jjcdVvHsZvMYx1Tu4gzSnCo1iykcNxXyijsYs7o5hfpC4rzHuaWBCWjrDFZFro85grh4LHm4gAfod4zWfDUVk7",
  "key4": "652E3QRC8SBCZrT1ieA6Jvszbz5P4QrJCKsYYyxjyzUgNjmcuuqz1kgMe5ZCcd93gi5BR2Fnd3gp5gU9PbYNhe1c",
  "key5": "3PdTr1zNmLe95FqbMMkn27EjUBRRLVroDPHGd5oB9VdLCxeUF7Q1EXvUNUd7VqQYNPLQYKu4btdn5LFoYsPuvGRt",
  "key6": "4FND9AQkBCB1mnqkwhGUveP2MZsEcvBwrmPppRzrQnwWDsChkBoCJXYf6Ht2fDsrwKAspjEPmHxFE2GNaXDHBjGf",
  "key7": "5kepoR36Eeqg3zsG1FyxwqfhjsEHWgicvLgZpbPkdJiXf2nR2qwyr15Lo6VixmmEB2Kw63RGa4ddF7hLjSv4Abz8",
  "key8": "5osrP2cFC1wp3cJdS7qDHq4zYVbVSEbc6opQQvHxfkHo8ZJGiN7FdvpoRu8zAWSYgSixkT1RHVWh3eDMTaWeqs3r",
  "key9": "3dYcoxzam3xvEJqNYRvZoFDDEiGjdzZm3u3hJpoEUw6BrdL6RTauSDW2UqpBJarQae3iiPX2N1FJjadynGR3QQPd",
  "key10": "5AQR7en4NPkdqGj4HNKaMK5dUMRgn8LofM9ddvzfm8vvMo8q9h1g2ctqWH3RzphYcDNR2DDAh9AGFcMceJT5SyDY",
  "key11": "TQJpjnSWC9ZFQxZAibKK3kELXPpTf77P33JkwCRZCmMTkfzMkJjvRkwxxQHnAQ6aL5cCzuCSjJRW1GYqwAAZEYA",
  "key12": "3pansxfG1hwHWXLXMfhp2z3i22xESe4NBu8sD3cPApbxRttH7HUEWZRZwuUx9e1zdmP2x4L7KANk44VkcrjLH3qB",
  "key13": "5uYfFQCSGGZfj8sp3BsJC6a7hD1Ft8qFp8Fi4N6JbVk8TxsDrmUYiherio827qCFuurPtCFTTgaBHgebEnH8XXoT",
  "key14": "5xom3ZKBsVSrpGkj79Bt7km5s3TponP6YhNzdJg4vAhuAkoZxcUuY3MMiT8rv5hRNv25xg7G81AYswih7rtQCNGn",
  "key15": "4yHp7siQRjxyvmskKyfymtnozeGJGLprMcm4dQt412S7yELvi2ePscy2ym1Gn6T9FSasgM5eKUnEjBhKYgSNoDQ3",
  "key16": "zQKBD8S5ZCrptRDX5cH3GwQ7obx6Ca2mzxNdKvQBi8xZhs2D4LGWnnYnvpnGWKTuNndfpXWoJwQhqKLw4Xuf7Sj",
  "key17": "JFjJq52Aot8o6LQdDS99nQTD5Lraw7Ye3rY2bCfumyZRY2mxQm7NZmpZUxunW2HL6Rg55GZ4K46cScvCqYf5wxK",
  "key18": "2iFztYsgGf6o7nnWUnmMxqeLrP7JArbGDDwBMsd8Ee2P8RPKWtCDXQ3GA2jkvner2bHghHPm1PMHrFuTqs9gdJ3Y",
  "key19": "5TcMwM4roUeJHYJ4H4zqoMLsMinyMQa1oiTDUHCXEL9vU43yHH6kW1t7DtrKagTwCrqEVstWCZGHYHtp5UEmP8jq",
  "key20": "VfYm9wJ4ggMEpEmgydZgvx97B8cPa7jPGg6DwJqoH5KYKcUwFdMKTwrcoALYWD3XP6Ec5eMpcZrTjLzSRCEkzG9",
  "key21": "mNKAVek36CNDyi7X924AFzgvMJZyMkQ371KweRAR6yJExP39rJNDakUnbNdizDWuWpcFbweDE4j6znm3rCcdssG",
  "key22": "2DxriJaFpPLC9m6Kq7xiCatyrFiRdCQf3LP5BmkjKjA6nPiZnuNvJLvPpVAujCD2iLjKEoWCW2JvjTj9eir7d39f",
  "key23": "2WwVXMYW7fJtHscBhYzZzsik8Fn9AD2YvrUzvmuPVwsLrSr6wEidhfrEoxfUHmiaYqUtEWApLgBxnYV6P8F3g7fG",
  "key24": "5woR1ZAvK4G6cew4NLBeFMQDuVEaSZbyJnDjx268iCdxd48bsgHeVkct1WJY4LDzkHgUhoX9hsT4nSQP1mL6r3g7",
  "key25": "2PUtQ2fS8hWukutzNSZXW3jbtoGnEgn8yvxijXYwfY7hfRRMeVnaPe51npvwH3NBoNPaVxjfRB8S1nzRwbuZsqbX",
  "key26": "2o7ZKN6ECEPoFcxRKLaNXSgvQcvUXhC9oLZRV7eZSs9UVmNmnDj4kUC4i2BQyeNepNQ92hGcUvPHxnPBFe69FrD5",
  "key27": "5eS7dDM59p69U1XkXVGGn7poqFoSRFMbf72YioMWoAPSr8csj9rr5yfALhsyNTStS37osX5DD3UYxf4akv1wR5f9",
  "key28": "4WRXYCG4hUSZa5s8bygqvXscgmcHdaYsMkTLTKkPhYFkD32fSxJeXFFHXhx14bPZpL5iDunSdARAsestKxR7o7D5",
  "key29": "4Z5awPkJ9L7YkdbySS91FKCj1ijM1EcuB2MeQFw4bvZEU4Hbi1YyQrn8gWQPaymdDLw2JUzRwvCMQ15BTxB5VpZn",
  "key30": "29NbzhCtUG1P86fH4dfD5woPdyV6Nmgt2uCFUTH2bRkvkm7CVf4Be9Jf3xonvYGkNDuiqEFP1FkULFS5d3pyfUdq",
  "key31": "5cvpxPmDrZ4KhgVKSpBeqPfroJBWQEgDsr98V8yFVbHxrzi2rF7jsbVq9FiHk3gwqeoJyZPR2DLGf3jPMbNTsD6p",
  "key32": "fJmip7nxUp4D1nPThhMqYWzfDeo4Xzz8X4vG2EmUQCkeGFCAos7rKiy5n4FxdtffeJPUxJeqPRvefeawJ1WmB63"
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
