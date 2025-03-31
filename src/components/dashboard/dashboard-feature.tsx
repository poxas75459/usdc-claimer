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
    "2U8EQHMrHF9tVvW4aEPakYef3YEPGXeGSj3tWJqZxReJ3NZwevqVLfxqmMDDHvpd3b9DJUr8BFhQ1cdnzTUUe6X3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DGfg4EDqQ6336TCZfTE1AtjB7XyNJadYoAgrZ1VSyGn5Xwjyi6xbX6vc973PHiWjzTjVwEXqzhmxwRQ7Fu6WCSQ",
  "key1": "4dAGHVtaXbGYn2P5qedNXVeCVuL4h3KuKSpTQPF9HpYdVevay3JVKuJAqbo53TDf7BeK44CgPV4ZCK2yXTVBxjKt",
  "key2": "4DnrCg3y6Qudnn7g1P5fRvP2nqjBivTtE6aU3vvyXu3LJqbLcowkLrKxiXAiAjXLjZR9vvF6RmoHyDBArAs6Pkh4",
  "key3": "2Nr6SBrjjzXSm5vky1myw126xRtjfAbARTxXjV13ivRLhwsjMGdL11g4k5KHSA4SGYfEeuKb7iQ1Yjyt5wun8AeY",
  "key4": "4Cn6Y8kFGwEkRXvS8aij4mLGoWbyagsECN4YgwfASNfVNmAcrhMVtKBmDyHF7jvQj5Q3LZCdBn4AMRkhfqJFX72o",
  "key5": "66N8zaMc7QRjvPBz7sMZtZ9nKVDRgMcYgi63LeBiv6dh8aHodg9dui8Mm2BCKMyZrpQMfEBt8tbDtQD7bpRPFY6j",
  "key6": "RDDGZvPuiEyYX5dpnPcNKJxmZYnwEtZp3HuqRioXiDGyJmVc9JqwSgbqL7sDptKv1dad8eQ35ee2FqxX1dEfUyg",
  "key7": "2tAZMLUjD9ooQg9oywS8gMUv78vRHXrGtBppJ4tCH98sNUnkVRYqj6TVeUDnyZe1ysCeQ185dfJXXtVBaUFEKeXS",
  "key8": "3qppmxbQfMF76SGG3yuGFTHiptVRkNmTNhR6AGx6b5jMHsTUTjvofKbSSLauM5cVt43yV2g5A1mQ7Jexi8PCVaD1",
  "key9": "3UHMH9iaUu7G4ETUZjHHxaPNRxPbShJrkCtdEHBZtsjA3iELdjvtwJ9ME52rowDdhYczYMC3J1KV4odGKX6pZw5Z",
  "key10": "xx1YTAitqPCSg8QSW7CTNgYsCwdVwDhVhXoeHZsxYoJu3A6Cg6hh8fYS3d6MgHFeji9dqPBorpqPQDGoRCd4R3Y",
  "key11": "4e2FCtYynvhT1ATYkGiSiRJrL1vo7BKzxPtst5wfpvFxWbRpkqvGUh3DSg8AjXu5LzcH9psMcmkSBFikvf5Vs6rp",
  "key12": "22pZzfbDidyuMzZ2DJpcuhBDFXwmUWT84Jf8JGA3uJvDJTr7XuCb9pg3xrKf9XU87eWmFogMt2LiNyWPRd3VcEoX",
  "key13": "4BypLD1xgZkLx1MapHTABzVq9RvPboay9YVEYKfBexpsg87V3rUj5PdHEpjN4nozTW24exjf4chGbNZEL7ww5n5a",
  "key14": "27UZvLrjsu9bRdhvoULEfVfBWEqDF324HiWKXmpLmdoyCZVX5qYgmBZ2gCjcF5oLS3BNtTmkNaES4WdcZHR3kmLm",
  "key15": "4mofZVfPh9H9MDKUpAC8xuMXRVp3442uy94GjyAWgmduaT1C7T45pqm2Rv5sUMKktYBvcrJMDZPgJyynxqaUxASn",
  "key16": "4A2epPPSNZFBYD7sFnn5HFFeqVGYB9NQbp4VqQrQBtKJa1xe8fNxvsUVy5hJE7vEoEqPdfdq2PvRALnWMjCn1XT3",
  "key17": "67J1kN7yLTeBMV5roapVTAmW2SaGuZYM32gRSAFaZH9GrmKyfUAbmovsHKr6Bq3MjdbgdUnzbbpGHmwwCaAFQYKm",
  "key18": "2JuRHir53VWcTfGLs3gwHZZdar313N2djusVs1Jujk5FQvNwPm3dgFRKUuz8D5U3pNZub1qhKyjQMqW56ZiJnwdw",
  "key19": "5DHmHaC2RyC3GKCeTU2VC4uKiREBpWuzPfgB9yTiEwGZi3rZK31hk28HgTsrbEWwXgXDGVdWirTmuBQJRhgppGmA",
  "key20": "23bwe1rPXq1FzcRfyJE26RvQGLjrud17HJrhpoA9w2gYfqJkJz54F6z5NocjoiiC88dESbq1fHz7ujRx5soqgd3E",
  "key21": "2EdpmGzvs4mJdMYqc6UbU1FsRfgMG4cqYX9CiFQDrKAgBXjw12hdiH97nAPapBDLBmwpiqj2ev8746pcaonFUAf2",
  "key22": "5Vawai2WJHLpLDYDBDum2v7NrSLN4ZKD5E3XoUrqgDhXYKSQujwVYzfUZ45KgFcXzLG6kBdtdqJDRmxw83nHFqZj",
  "key23": "5Kvxk457tr8VVA2zTVNDkKyNPf1uCPZB4T1nPVSVtBJA7a7KmLkFJd97ENNZimWLsofGz5CGP8jHtUiC5E4mzZc9",
  "key24": "NViGUUX54hsiRgbZeqp3nR6iRGcStnwhCnT1fvGF6derZMQ53safAr2i3N3ZbgBVM3XHXUZDe9np3ExfXfJp6sN",
  "key25": "5UApPeUgdDL3NQ7gZpT1WLDLjmgxNdevo1zqGggHZf6KH7tm2XUNMJrTiKYJzi9arJKDLdBD3AWK6PhmZwicoqYn",
  "key26": "37XSfeA8pfWVuMYnPcJLCnKgWS22oySHTUJ43Rf4uuz9V7nQq5p9HjbWsFcyUetSgsgR9o5a8cEkwxrg9sfHHvfi",
  "key27": "3hdNTQdZL6LKSQHbxz5zCU93h6MRQKtWEwxL8RqDALJHLjkWNPC4KQQxm2NiD7qi4bbC1auVfbottMC5wizimhWK",
  "key28": "3hfG2jxJX6oj2yLVRWwmJQzRLZ5mfAr38v1dX7RUxaR1YR24R9zP2LfxkBjcuDirVZkX9ktFnDqqAfW7kvgjY9VN",
  "key29": "5SHcrEbZQUp51BS32K1N8grZXYNGx4mBJUAvoDRJFQBfF91aA1tcwLsq3PkAPHmJsdct5sfvfKSdJo92SoTDW4e7",
  "key30": "3RMQrWvtagcjhyYRZLu82cxMjvBNLQwySVZbJB7diCwuMgyasZTYFqN8Y1RbFqwwSCKUBpsZ5bT544Pzm4wgtfmm",
  "key31": "2bj3sQd989KZX1ASxmdHaXfSZmXGbMRtEyavPsmNeeBzkEbCHTmeYhhhazPddqtBhoo8XkLxeLMcLp1BSszNwfTn",
  "key32": "3cxMgiQajtVP2kBL4xJGpcRmkEiJn7ydZ6tHCW9aQqAemedn68Ej3d2LEZS7EYnooEaMAx5bmjvo9gFgn2P5PBk2",
  "key33": "4o5VhQxqGX4Z9PUKtvD6FnV3q1CcqZ4SYhXFJW7pvJYRjp3yRtjGSW9B4qWCJeE4ZEszvPryqqLoZFMd7EFnZFaE",
  "key34": "4cuDFHNrD4ukob7HAnKXqpKgn6WC6cLTxhUcJUbX141NdapwU1gLemhetu9SHR6TGQZZFraUZoTKjhgFjXDdmYYZ",
  "key35": "3JRdH6VphjeiB8wHqaiatMdG15Ffdx8WwsVg713UFDBWUr3GpqFQLphXTgbgn5AEFREeXUp28p9PQ4xBP6W4ayru",
  "key36": "3Cds9ozQgVgf3UTX9qwQ6cAhNkKmDUmJX6eaJR9Ct4b6Aj2ENaUH4AHcwVpigFf8t1ExE9RfPyaS5qfDH3GrzMTw",
  "key37": "29x1MmMbLtYrKxf4dCFwD1hP9qRBvi2mx2jAkwRLarsbrV4Chm8Y3nFiqmzYsX7hFzBjjHZrvPsHpkPGSHQhXVk1",
  "key38": "631xf3UvrnTJRNBKoayemEtS7Jfc3YC89UKEHgWkaUiUToo7nhUafshXAX2b6kZXYuDu6LqVy1CScshcvCiFA4iS"
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
