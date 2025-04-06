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
    "2MFskvjSAkSRHkRvCF8Bp3H9NgPyukBy439tL4CEqzp8qYmaEe4nh2Gg49VGURmUT2QFHxU1m8hZvWWfC3P3jbvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C5CpZupqmScoctKzmUeULJGLaAGvVX98fxTaDRv2k9LEbiyLKieCQ2pqP5V9fgQyZ1xoYJsMQtBCnywK7KnbtoG",
  "key1": "5iuqZZ2L12772rb1a1RVqutaBKvtRUVPrG1SCsu66zZNPkKgkck38BgZjhLjuwDGNEahiGXmQUmSmy4RJRu9nVf2",
  "key2": "3tPNQBAHuLbzRyPB5Z9d8yEGCSYMkUnZ4ovM3kXWBUuED9dqXTJTDARrtivhcAk1atjyELxmGRKrz1D8UWubGRxa",
  "key3": "4N7D1ropi1U4GQCkr7FdfHZQboq8mhec73MMVFVrmg92foaF9KaiiTj9XkgUDgmxp9Sq9MxBoZtRYBnYYktju4nQ",
  "key4": "4H6EKPHiNz8bkxvPYgKHw1zaVEiS67LhBZtvG54QFeAF2n3ChtuDWVhcN9UMZa1DT17Rbz3vkxxsKEtgDezXokJX",
  "key5": "3XxCp5aymjgSeZmxHDskMnjdDqYpqYFfoY2DUzsaS53RVcfdTb4gHt5biu8UtkdTz2AXbSyyT7vzSrFUL1DuyCEW",
  "key6": "3awAxzdWCTd7m1Pxa3RVq289Azu2fpNwQCpPLajsnbVwHy9zHBREgUZ3QuxNhgTxrVB2fexGREK3Hkwpnz76WrUX",
  "key7": "2p5Z3ytbFwESceAmCUdP3M3nWNWekZTKM33aY6CMnZwPpyGAV1j4xbfVPX8XKqizXpRMvHfgQtFxfkBAJS6M2z53",
  "key8": "57z5s4oHK5k5ur8ywuwo9SBaFRnxMdsZ53MSqZZ2nDX3Ydr2xUnCev9xHFfLkS427qd6CyXu7nprrLyS17XTQqpB",
  "key9": "5jVU6aBQydDpVhihdqytBDUdhUow4W3tzuNvvdCvgACFZnQvREdABkJU7E8eBT5PrbvkWPuZDC8oadTY829rEeyE",
  "key10": "2LkZAGkBzUCe6AFJqbU61mncsBR8pXZW3Fp64LjyxprWS2opR2FGJitmf4GVKxHpKDUfdaVQbNmZKVdGCj6sYLb5",
  "key11": "2rLdV4LMyu7z95cgGMv6qFEt7phnbvacCdWbqhVTuYuFiRDNdNZJ79Cdg5nh9HZ9JeetFBAb2GRNjjsyjNuWr7HF",
  "key12": "2DQE9Rcyu88QAoaznqATzBYSVZW9YBqExjmmxnpjBakUJAonDCVgwNJFGaboV8uV5NPngL8hztmKsd3eCPKSYydR",
  "key13": "5DKYRbRAjMtreWQhU59vcXpwnAAqbe8tz2rSwf8a1CBJkFhAPnHVBdVwg1MZcWuiqDm5qhtzuB6gxp2bZNVHEd6A",
  "key14": "52XoW6pKVYSgnGpWd6SWU8N8rWvynBxwLDVKuZqkrQv4R5xwBoZCWgfSWxv99MSzCUibu32BuoZBFqpsqfPTefJ3",
  "key15": "5TPFBHfAsTHEM4ZrhEwqALCdHZHJPzVkLAWgxVvnTWSWFkEc4xZanBBucfngJiA3nK4hYvLcc4iqruzGDuYZWwog",
  "key16": "bnoeDaErdfXCd7HxoGpSuwoFDsLQox8Yw6PQz6jq4P4SLX6Hg5FX8dNRFScH6JVs11SsS2VPJUHHhMUB4Y4Qku3",
  "key17": "2o2a5Ryrh2imd4zAxv3hep4gf3HTt3YdcsvyUzmR4sYLiM2dSjJER91gSB2BLRG7mv8YkED8idd1qY7YUpNKLcxT",
  "key18": "5nBDNPXV6F7unZVCneAY9jB5h6gsu25ix6rkJeDZrpMtTQGqfDofz9tw4DFxgZQvoqh3FUjxwbwZ5NFvHe1VJAut",
  "key19": "553w7FJhwawiQPwJoLv6Bx9nTZuCdGpv4FaNyudrzwcwzEk1fhBcJmDhDBAbvPZseKGRpFZWX5YATqvXZPGW7ta",
  "key20": "2teLUWHWnU6G8EJ9QwWeeSJY15utGJGJJPWRz2oP19683rhRmx8zGL5dtA6mWKngKeMHYxQrtDnVszLHeDxqnaPB",
  "key21": "2UH1xZTXahQk6mAXbfn3tqg5Hkj1S4WxFMLHsybAQuLgrsfrgyJ82oXHT43XBVVpAfX7jQRTVBiAUpEEH3czViDt",
  "key22": "4uKj4NEqg5raxoaLW1BWoJ6dnydZDYJr98qA8aKtjUF1aMu1zrvYkXPhsymtr3pQBqG8sYS8VMxLEgjQiyQ2XLW5",
  "key23": "22NaJ14ZQnXU162U7bmC1SFxWAWeG7xqMr3rohqTfbPB9bdSKxA2bxwVnipPN3bsx6eerwurj2aEYup8MXxeKiJj",
  "key24": "2e4xA96cpVWwgu38obJAM8As3MuVFciyJdKgNdfWJwdaMeZ8Np8C7yE8G7z56PnEL2vHMj9F9dr5bGsMSmhHtviy",
  "key25": "4MPKj3zXRk9DFUzCvakfAk5G8Dq58VdiScEY9HHCxsJntrXZsTpgMzULikQGD4xCwM6Vxb7fAV9HK6N7RQeENKMF",
  "key26": "3ishtfegZ2FCzgmyyG3dgJXeu3DPfxXqherqQ5umEhgAeCbA2v3zbkWrf27ozcLBVaiZb1fb5A4JMjQbN1i6rSWS",
  "key27": "ViRpEiicUbDKFAwpUL5DMrD4vuc1w4J61S7HahjKCyU4Doaz8sBxSr327mRHB1cqdZdiQHM1xEVACqiywhmTLbD",
  "key28": "51E2fgsFriAaUneyca8WdWiQaXtqTNDDo8ePYKbmoebLzqga3EJyyEwELLvFj6EcbkCT5VENHH8a9C2GMU9DKGru",
  "key29": "5FG3wnevn7afBhuMQH7SuDfKMzHSZ41aF5DQYkxBf8Zuy3ZGn5WauY8iTdizxFniuurQ7SSxncYtphi3XDRJ7wHz",
  "key30": "2QtrE4HQCqgHh8b6xqw7F8gtpu3iztGpy66wV28VBTsyJoym6Z2PdncMoFRbsNwDVHSAe7JmuxXum9H3eMq7RjwD",
  "key31": "3sDbCpfP6uE2xyzCyZmptiNTUyiRsEeBTvMrfn4aiZARycmu5rbLW7FXTQo9tttiVfk8foy2DWviT1ZXrE46LDqG",
  "key32": "4nMTLjFiZp6vkT7QHT1EchwKPTGb4ZS6JkveWJ4MqvKuQA3hQgh9RrXk7ApJHszAEbP21tnUCy4hzDyPeAYVh5NR",
  "key33": "4iLc79p7ogbZt2NWjcA5PPZ5jiXcxpKwxt7nVUyzJPEDPpBb4pkav1g7NvNG5cL31phTemdc2w6ARgdUeunwyZxQ",
  "key34": "4KeZS1eyufWqwS522w2ejm9qWNUSLRyhyht2bMBDijev89inWXFhfxu7fzSUUCWjsmbBZAMvfvPySMGUX5n7Gc84",
  "key35": "3Vy6D97Y9ktXinnwohSmAwrnDic8RDNWn1A7NkH2tFF346ZPwH22fhPJn1mV9ZKpXMCsCLLBDAAstC7nvspWyBFM"
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
