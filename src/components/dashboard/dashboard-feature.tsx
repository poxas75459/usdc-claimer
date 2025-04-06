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
    "23bS1xuai9G2PQxtLhAZEw1NZ64mHN3mJaZtzvTAcEHVYFcDyMMxjfGgsP6cKmzkTJ6wjWFMbcHtab6MnU3M62VH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N2NuVBvDEWSrChCRRtWAmRGzPjZRf3JfUoNCv31eqhTLDD3wzUzuaez3n5VusBKzoc46sV45sCWTVV3Nu2SmHEC",
  "key1": "3m5h5wgUmeWDHHaJ8Vkumsc61Lv3cEo2RswVfnBx1ZeU3A6s8MykicCbfDoGzmTiM3AfoCUduffoVR9shFHmVRcB",
  "key2": "4TabaCNH4MJ9yrjh5frwb7hVcXaLnrFxEV4dVHnRbi6zn9wnrZBJrXFQVs6zb64eZkag5mdidRfUi7hGCMF4oX4n",
  "key3": "5WS5teLAioomJc7SxQSzjG7rHAVi67uFtB65R67MHNuNL53KGQFvUZcUcHTQsCcN9ub5kjRDod6ABSNzUaFg8VV8",
  "key4": "UFXSXL5QnNPAwwJ7MKPV1i4JygekunkRnSVmGWs1MZkh5Eye8UeVeX7NE3hjUa7B9omuAzY218Rmoq3Q8MM6GYN",
  "key5": "5wKfNBReLAE7jvUyqNe7m9LY4Ty84xYpEGM8VEa9MZev82VnZmEoA7qSrxvnGVTLdC6CUK29usJmPxS4ecfU14GS",
  "key6": "2VAFiHpygaAWqBeSRWXbnyiYaJ8foDoQVLTWcHNMJ7ieBrg8EwX4hzAvAhc1NrkHbzjvzPtEigMLoTCzzY2WQuPj",
  "key7": "2DXzhvhRaNdHBPAH7ci3fDkUpjCS4dGpShupiSzUZEruPc9qMrfxKeHZ7GpDwqoPzevjTh67ynpsKCdo3R96axq6",
  "key8": "5ex1Z8kNCkYGwgN6DaHBvzKPqVUMpv6x8GGyRWUFrLU5wqHKvrviiJTuvXeGuRuLet57eUoKKFV41ER7gkeAipHb",
  "key9": "53wS5XXVDGVNVFQLS5MUfib1obK1UZz34uivA2BefLETBhEBdjFETmTHZv9HTScmjgLUQXDKp9rHYUAVWAaaVhnf",
  "key10": "35Kpxvnh1inKZ38UsFDX2G6CpP3xMe2hvE4GiH7Y5VBtnCyLexcZZntaj4rWJRtEHYFTak2VW3o3dWTaWQEsyKVF",
  "key11": "5XJv4j2recZ23zxoSGHCGwkFCdfCeU5hkL43Na6Cm6zKfmPhuYZqZLWoVFXAagujEcNXmoM8cKtowYg8zZ28aG6L",
  "key12": "2C5GboJx7BeX7QEWWmN5UD7PdwfiMJoVpnv2FKdBBPxgUXGtgzH3tmdejC6stHaCnzpztYx8o6w8vCu9BYUJriSW",
  "key13": "HkHdBqeHoNPT6R1U4xxtiAWtKxr891zpHxALfyyWtAu8sbr6aAiywr8CLnxc9443gb3GEtKovhG9dqbdh6JqzbM",
  "key14": "5zZcdPR9FtCzDw7XXz8F39JKZgaoeQnB3Y9aWgxzXyt9AtpVtw1TnEva8b42wE9JorEzDtSyBfRJk3JHcZCL4AiE",
  "key15": "616C87b6fx4by8pAn7Q5ZjxxmPc9Mr97Nk78NEPQeYjmudBaYvae2zfC8LhvcA576Tt7vUjYdn1cCnHh4PRGCuym",
  "key16": "2EqqYQLzfZLuDP73s64GSt9QP6S5PjDYXRevTw94AC5LJeD5uqK1BbvUSvF58x1MnFa1WfmnLmLn2ofmtp2sjn2K",
  "key17": "2V8J5fDessGJcpZ1rZ4TDhcvBmon23XMmpLscqSDabegGBp1K9tkVwd5X89CycNgWdY2BE5EdyFysguSYX2UuNFF",
  "key18": "5V1mHfySeFH3FmWGYbi7Jh2E3sESKNhrAeesqxzdPLMLcUDkdj7swQ7kpYs7S7HZnLaEi13PUbmsajsGdtfsJQRu",
  "key19": "5WAVPmVqTRrFcyx9QTcNG3yUfAonxNbB53y6GCep6qGSxjFzZ81LoG11kBdAfYUoQvbWH9m6SeCD7AdUxjNwyPmi",
  "key20": "2op4gTRbV4SnXo1qhKCXRmJEcZJd3ToDZJbJrJ2aoC2qzpWCBtEqkjNBmZe6XWWZsXiAmVTf3hcS9AxPY3ahGMpj",
  "key21": "5rDt97wKRtwA7DmdaEtE2EEpmA5EdWduG4CN1ydHMz285gAmTZf78AYDBhD6iR8GmothEX2pqpPZTPAn1Lq6t85g",
  "key22": "3QiK9qmtEcPD3c97EsQtdRvdrnHYwe29s7vKVes8ZhHX8ackUQFfV95g8qwqZHQQK4ybJ4SLkzMZKkDZzcPkgkZq",
  "key23": "4wnzs3F53T2t53JmJVDbTo4azjSb8CQJK8uD8zspmD24J4JDMGnCtotG9v9G86h1pbhcqtWwvDza3axNTqm8pWfD",
  "key24": "rCLQA64746TH7vqRc6D5PhTfjXXnfUahdPpyL2SwJKdNLfFfRYvG2Tf7YAEG13kAj8edefRYi3vmBccz2ckp6Uz",
  "key25": "GBuXy9qtngP9vSNiPFbF5s6TzuWpemYtHrEUH6knySYQS1g65fWMMzjY1iuJiAzPVG4XK4FaBT6uEKKJzZPmruN",
  "key26": "5c8oAJm8uhxsigEL5RGx4BhsJyyXiqJ67yWD3faEDHNar2umFytAcfQ9zJuXAFxsfifcjUnV6yLdSrLHLoiXsyZQ",
  "key27": "5ahjoJr9brZn5jp2Zzzvzh95u2MKQ8poPdMGrQcvoSTqUjfv9UeszS2Uwnp1oMVVTyrANT8hfcdKP4tFnsZLQADB",
  "key28": "5vf7ehaVffXKb7qBnK4P92zwZr6rUkHTkVP6WSBNs1Pr4eaxGrXZ6TXocF7akjycC8SpKPTREJETAwNNsNToTXHv",
  "key29": "2riRgzLzFb6niVdWAPWmC1w2kfa2LwX1h7zKkRYfLgPuyRPMAW8hgZWnm2K1Cx9AsHcfkSqq3yRbTsMD9Rj9G6Xy",
  "key30": "3B6gG1hzMWqZzhmD8rCQbhHj28qyxQLnAGK9ugaLP9utNaXGESPgWTtZE35sHDmJPW7gufKeNfy8Cx4gx4Hn6Uqx",
  "key31": "3DyAsHRCqpPYaS944nQL18nK3qGqVNGSUJ1L3xNFb1e7pcpSQikwYyLhkzthDSnSE6ZGFCyXUBfQN5mMwv49eB1p",
  "key32": "5t9Hg8r9t7vW2Aczshrmx4srKLwc4HXabSSgSv3qD8ozrWEki8rdiXsPAV4jeZJMYx8UkADkAARr82CNX4zDheTU"
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
