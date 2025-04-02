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
    "597j3DCXLjRb3GX6AuNTTfe3gERDhDsRfc3Pe5k6YcBanNBuUG9hZiipjWfhMqVb2BVstjeJiJSUBYfTddQ7ak8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W9hR3wNs5VaDNrWuxDZyiA2yRkwqZ4TbKsWh2X1GmbvGwRFM4xH6cuJUYRYoivmBzFF8LzJgu1NSZHmPRySm3RP",
  "key1": "wGstARR22bZNLaBMmQENFGbYewGQBvrCDNinEFs9CTgp5VDTWux267MYmdnoQ595gcDqKtuXWeXbaHsKCt21crc",
  "key2": "4QEdFe6LN85HAeiapWAGWZCsuyfw6K2LTePakHTm7bzuqPWY2qzAKvhM5afAWiX3FiiZbJFaF1CCCvDRwF1fP4cv",
  "key3": "3T1e2vwJfWpcsgXUXCQQrJiF6V7cJPThLaQ6hNW5jUoejVpNggRU7FzmbNjUAAU7kxkA7E2BLFbUJfTj87iD4Rfc",
  "key4": "3yKpQGHvjzPPNtCBfAvKokLMsMwbuWhUvhzpYRNsNq6LrLF4Yb5nyDx691ug2FcCKhbhV7BrC9njGu9TLd4WVYHZ",
  "key5": "2sU5PV3TLbazUNWaP4qkMBZ6tgh3QuPtFa6sFE9KWC57njyTgFWb528tk75jLMeNzHb3axZh9fqYm6syp5vm8AaK",
  "key6": "VWScWDhyCCp6tvg8RxKcvBf8dX1LZnm62Q7YUijbLAEEAQmaXhuGEWfYn896ZFnKSK79h6ptZoQ3VFRg8wEQ6bL",
  "key7": "3jLuf6CbtkTgMaaumRwcnmQ4pRXVBYU9J8Ufmyo945sftvMALMsyWvHMJqkNS9xbzxYgigybVb4noCJ9FZUWLkSX",
  "key8": "4BCDc29Qw6Pp1S8JX2ucXtSfc9gn4r1aNeuotsWqkKQMJHexQJyMbNjx2CWcRfWan1f3JaMcG2aTpHn9a7gQAvfi",
  "key9": "5NJ1FfAwtQx62vMqzraqoUDCPx8oxGzEeNaEVo63zWcufsVqbdAL9rdD2u8HjcSYaU4TxFYBw8sSi8iPucbLRRne",
  "key10": "4CSdntzbJuTuEqx3NSNc3Zpn63E3VJDpe2mVusEZAU3oeKPupiAN9bGTvKujKrBz1t8HA64bc5aUtPpwgmFS9uuC",
  "key11": "3z8bXfGo6Y5hAvnJwjNUf9U1ic2vi91uUWgKkrBycvVr9Hxbqdw4B3vLkSgwDJK2PKjPZDn928oxBA5PHNGJtogK",
  "key12": "ho9fcGbQeSCRFviQG9ZhicqDN2vyftLLUoVG67SgycM6om9gtTF5XkkL8hQtAXWadHjjA7wSiZFv5fmo4XpMsiX",
  "key13": "3EozVt5mLqeu9MgYFQ9jKdp6PYckPhY2qVy7FAVtP1BwayHiGj7jXgtuC2coD81EHCx6Xwa9LA5y1rnGoXcGFJsE",
  "key14": "4qGhoAAnj6UR6kvTdFBEtoYxT87UZCQQd5HeZSi9c9ffZhEhXZDh81e9TKFABD6xDE8hD1sZvWf1HP37EvJ4ESGz",
  "key15": "2dC2AJa3BSLeP2aeeGEfKzmsZ2gCkxYbHvfAfSHzTE5dLpuAhFtxJapkmb9qZFM27ssNkpjYv59Qjg2kf54cCNb9",
  "key16": "5qNBTenXnAfrSwW8xU8kfaF7nfwDN9b74NpCRFfCn5RxNXW14xsarJgpeEN1eknAAyjb3h611ggSzeUyUH3Ak2UV",
  "key17": "3Kw3PuspYKuL79KfCkX68kUL5e3fYVWDHD56togP8uZVwZByno8LFFyqf8rb9b3VPZYeU8T1oRxrCZQECfGVh4X5",
  "key18": "fYApSV6QdnJm6Q2YEYg83J11Lsbfcai4B8GCZqqsDouPJmRLXpJjxBSKrQcJGV4xUSiVHr1oJUkdVrtDZAGaSsE",
  "key19": "4B8voVkUwvKweshLiHemFVpCG6vh5hbd7AbQj8Nu3XexwYVuvNeD5fX4AzXH2FQf2TJJD4pLLLrrhC1EZng7TCfE",
  "key20": "4zx2Mxh5qsgcPpcyrxLEyK4mAB7QA1s5Z1Qt3pjJBL8qeVEG8CX2CcikX5tRzAgfcJQwdLcmyJuFZdeNAMTZhYyF",
  "key21": "3WJQhqPQQPRmqTweYTu4RJfVkZbyXMqNNrZu1zFAGLD7Pgk9aUhRBXfHS2GW2HLVbPcF6C3TUhHQ3tpZA4TCr4tG",
  "key22": "w3bmi1cjU2BskmNnkXu2g1oYGgahLvAMDe4n3bcF3PRYJhjDyzAg546qV5dAp7YagDUa4YoZwCNiydqSPCvsTs6",
  "key23": "5JgaaixCViVLV7PqV6b7S17Nn6ejLD6JMxdmQ4VE3yUMniqfcBqPgXQzmXiFDTwZGSv1fg2N8FcGeJt8jjmXyEwc",
  "key24": "3ueBrDFs6CrLhgJRbS3bvfhjv3xgAuTqzLRhq7CYp3on2WbQ6TTrEZPLFRDZbpgBNrWczyc58tP4Cjw7NCkgaqJN",
  "key25": "4oxafvahPu28gUgRJSkPw5MGQGLLA9gfszRjk7smpVr8D9GHXvMVLLUyoeacm6B5NQQ6Fd1TXEaWLh5ULkCBemQ7",
  "key26": "469HMWqmC57zMCT1ykPN5yru3hfzJ3c14Hf7PquM5tWeFGGZaHgVKYwHX7zWcgz4DoXL8YNEiyJyZ7hqMrh6La2k",
  "key27": "VPDeG7Fbxka8igmByjAR6UkZYi3dgQRrHrijPce3h6b7GM9oT5JRGoibMZUHaRzcxDXATQ6Gy6MBVa9iANwktXm",
  "key28": "8ptmxpkSLo9M83zMnip7WVgZYyHwdR6MtnQYDLKxJaqDoyECjRpUm4CLjmgXNRjNcafqby5PSbL2odQEbyHTFNN",
  "key29": "1YpeDBgjEVJrjkauR3QUYsa5LVrVVHvMmgD3ovpCqAcrBfQoKhqLyRhQj3MnLyYL8v6dNq81Cw6T37JMtwmjHcL",
  "key30": "3EwxTfeRebfNvmkHL32qDGtoDAox9nv8hDvwuXtccagsg6xUFCkWgmo2BSVfubgcwiZqDL8PPZB1wYQjtC14Uwwg",
  "key31": "2Uv8wnTZsWgUhd5pu92tQ4C9eZ6Baw3EoHxVEFJQtvGss6CmLut3VkvARiNw4PxrSYWVs1npPi3cDfeUYEqrvNvH",
  "key32": "4KxNDxDeZNtca93x9Emw4oSTUZSXhX95TwKYXWXvSSMRuyY69MWR4vpxPpCN7vzfKynzHdC9AscfB7HvbkS3BimQ",
  "key33": "HUVo36CawbHCPvg8SbnRCSYvp8hfTBfmpvGwTPTgbYvVBJZtTDHE5vbwMBJ2TL7dp1M5mZMArDJxhVa9mFjDVVZ",
  "key34": "gbXw9Dkioqd47cSNSgAiPXXQAJph3gcYuF7ufDSrhW7LPqdoB8AzarLYuGKr7RHr3XHdJVMtM77R1GgzHH9MvHz",
  "key35": "35JcsBkC7rdsbT7W8XSRbqHSDKhUrnAmgTyT6iNDwun6JWwYLwXRZsbRDEZ2F4TvSRSzZd29fxeS6PQHBCNpuTU",
  "key36": "5AsRTJ92pTWoaVtUzRRfb8pba3Xrssr2MttnEwLNEfoqUzA51ugtVgXyrv6XFESMyXaueQ7sgda2rfFvshVZy7yC",
  "key37": "5cuM7ioSu2vi5HoQRdAqy8A4MyAKkjyaJueuiecE5ZFSU9WLeVTs53X73AErjRVGMpP7wFsRvRL8tUEZqbN64hSh",
  "key38": "55RX6xrpGVKeNGE6ZPEiTzpXFYfpNRW8fUjxK1uD12XzumRSHnxTfLTfbVZL6nR3sd7hxZtHHwodcpE32catxDXb",
  "key39": "3cd5i6JRUo59bSxPkBWoRvYzFgZQA6rTJnbFptMvR2En6p7pBSpwFnce3FwPguvXJnyJZYX76193xguctph8q6q7",
  "key40": "5n2iGj24g6xCNSYd7edu71YaKfuc2u1957dXid5Eg1RpFj5Z6A7YHUbQ6FGUfegPCPrPZdPsPt7dihonBvDLnXFU",
  "key41": "5CP5DPtmrw6oDthdLJ3CKoSZoVZQ1ET77xG7UVQjbyLc2vndGHb3tF3sA1TFK5NBPuWBAwVyhuvGbgQVL9kjCFcc",
  "key42": "4PAL5vYrXzAgVvGsDgiBfb7FEno4vQk3FrKbZzHZ3nQe8V2AaGB4qN41w1UZ43BQxHBpZvAbf2K5goDzVqBffQBb",
  "key43": "5SEFoH6DS7U1HHuuh6ohJ17xWQwiwrcGdpZ5KX5P56RVrDegH7LATDGd2cXLNzJ4VgonkCgSacZL2GA7LmDSaA2X",
  "key44": "66nnfhe6aMwUCwYwMDvPQcKXi71TT4YfFVoTnL36iBeLHHEVDL5MsPzgAejuoEbyN5PG525uHkjsst8FR1z6W2ag",
  "key45": "5r3jiMmpAftTfRdzk6L5Pnwi96iKb7QG3xGwKWib5YwtQ5UrbacANAFj3VBNhxNd5JLBe76mouCFPXQAjgnb321t",
  "key46": "35YREdoSXqms8Ybc9aZ517qermZqVjQZtnu3r87vB4m6sNG4BtEcvxL7mSZ2LGap4pez1UAke2Rua3aE9WBzRkGt",
  "key47": "5JGeq6gvZMhPbdcc6xPC27bhwsWKKz3KAgSy34nX7vap99cJ6zZyh2ScCp6DptN1G3xzcM1WASmqvoGYHXMqXo9G"
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
