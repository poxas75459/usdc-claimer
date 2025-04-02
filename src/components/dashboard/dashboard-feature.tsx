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
    "2seebZVgaLXvJgacazYpV2sn6GJwLzHHKBUR9aopenyd3RznL3qZbm6iZnZMDwjSxdWwB63nwxPNVEAxdLW1i8y2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mxYPfYFt5nEkPFiwyXxZq79xt8S52sHihnEBVz2uyZBfz7FwpZAgWHJC3s2scVo9Lkp3BcQHQUxs9DFAVAQT8u4",
  "key1": "d8Ag24TtSZ6ENQ5r147gy7cv4WLmjuZnDsysqh2n4LejUxZp5bY5rcj2PDbtcbRzfR3tZKo5RSKrCZGDTmJf1Lz",
  "key2": "5ym89Q3oa8ASQJYdEEfg6uM6KhpxjTuZ1mipKjFE6a6RV8AmQ7jd11Bi4aFyBP2vMKUtdrj6pvGdBV5Dc4Vr94fL",
  "key3": "4kCYm41y2WDDvkdk4ShaywfeK8YLdcvCKhosFfFmFbVWL2jqBbdCzGwo9ssyFBxduN1h55qNbiKJy7tzftjQpr61",
  "key4": "27PBzWqXrtPS3gkJDWKq7cn2D1o5JyTqKzpDFJhPm7bhvHMzuyVR8eJGTLJtYWVgg7U4mJv4eU1nDAdpWTmfciNQ",
  "key5": "43ci27H8gE7UQGPjRBMpNej6NWTcr4qsf65r98zx7ojqJL1T45bM1bVEncV7s2we3MaYYvQksxcJKDx3gBdYbfiC",
  "key6": "4HangiW5ehYpiZiD4UWtmkJA6mmvs2R2kNdQaPjurnEfA51PJrNMsZVK4Tbd5ixY29wzG5KFmFgaSPUFd91o7dbz",
  "key7": "4LLjepYaWbwEkJPryfQN7JyvkT5H1G3eJ3LKX43sXgdeKCAsGL5opug78EPFFEJn8sUgB65HdV6vmUqtxpPBnQP4",
  "key8": "5UfUFyWWRU8STb6iWPb3UhHQX24ugvK9dVRfRfVWWoTfCKm4psAzXMhZYn3qVGWgPqnQoxuFM3rTDQKrpitQuLxj",
  "key9": "4k9hSypU8RVZj1XDzXL8QAWmEgShcGgnLGG7Y7NnxfeBuZsGQxb4LWcc1pFqE6ycz7UJ2yHTbd5EWRSinScCLDz5",
  "key10": "QXsGJkd2aKiirnmsqAPLebMtsH5947kVCJuEV9vELitLDKbMF2YXJEwLvj44VauHQ9zwPLnRUX3amLWUJK8D37H",
  "key11": "4A13wswmozKyJACi7daTHnJEsyYR4fvzZLC3o4yzAhcU2DEfoahQufkaf1BMRzthJD7MV247ACysRMCsfeczxoP7",
  "key12": "4zWRSn3Pm3G8qX6XqgT5er8xeZXSWikZZmxPGSSD3dz2FxcpkkZNseqQaJaVL247CtVmxDZKv1jmuw5tZRitHiXg",
  "key13": "5qoqFYEQEnqhRyxzpexCgcaW3w5icW9xc6swPg2hh5WThst2HXndxnc363Pw35tud2YkzPr8U7GoesHwsBGGa2Wo",
  "key14": "6FTv3jnCvzcTdjG3aHL4zdHBM8YEn5RdM2b4zamG7LDGZAWAv4kDW2gnjTqgBVk8WhWrsXv8s6rwjKrDdHNsZM6",
  "key15": "3ExkWk4jDTgW6aAfJrrfQ1bKN5bQANqxeTVPZnLX58mDk1G16y28TybdSzE33gU2oa7YEVWdcoqjd9fTtmk4DDrA",
  "key16": "3odAgPaLkigBmy7pywGqToF4N6fCKstZ3EURAUBfjeq945x5jYgFMABXXEL6ZSujiCPwrspTA19hmaG3pgTTtSQH",
  "key17": "2zAsGFJKrwvDS6GABrr5Y9jxh5ZwQaSAFxkSMDwYSarmW29ppmJ4WKwCQpzQZRmkPumiBCUensz9WoyMV1P4JKmS",
  "key18": "264vcAD9Dt64HTf4nq4GUyvzQ9VwzSj4DYRL7QeHcfnBJqcG2fnVHvQNp9EQdW7k3McBn7Er6ce7mpcrKgkTiFBy",
  "key19": "5rvy1MnAzega4cqYCMraxmq24Q4KJBKJoXNpbuHEErri3yHsWwkyDtKEVyyKx1BdxnVQe9miKQ5a6o9fzPkapAo5",
  "key20": "d3Ei5qtFTUAq6uubHaBRn3qTb2YuHDf2Fzd8SjS9cE84n2zY3mrYuu22D3uCfGYAgpCcissjapGSZ1VdrsMWBLg",
  "key21": "5ktNCWvpYJHjqTvvSnwH9GdTuZavde18BCZfx8bEWx7q5dXayRmjoU8wpBPcnax9PPe3DJN29A8TqJw9GhcEpxcp",
  "key22": "5TuRZZsL3q8hfEiXQGXJhm34YKtcdAiYQ1Lb4EyGm375r4ZwkzJVyWY5x6NMMkqyMCFJqfEvn6G2oG7vxp8N3gJz",
  "key23": "f6Whxg6PV6BDHfAhASVurWFpxufb3oRpTBBdyRZK4edWfFcXbkNuojFTm9EkTJe79vcKagoyfWvaPssVRCfFUFw",
  "key24": "4TnBTihcXGTncMg9gbugyrYMxAsMoU9y9CREfPTgYSknQBJUqusKfQxQvgEDGR9bMeURTTj9zyBad55yyGfJh7Uo",
  "key25": "23gKUAQ4aEeZLzxQXe4UeBLUVXyxRrEw28qgkdZZUSAb4C2NvMME4BwirPwAdnDzxtkpdy44Hy9cuBBduvpqT1bS",
  "key26": "56HDqzS67NScidphFHcSb8YGtCoKxDhFLHqHTgxwRexYeTkMZUkbaz5bo2ECbpyjzAYknVwQ2CageiR7TpcPGdxG",
  "key27": "8XFQ84x5kmLWe7mR5GHyyxivXKtfd9cEV4MrytAa2MsyJpy5xW5WaMZSSaLiP7YSBiqcU7WuhWiRtvr1WayLvCP",
  "key28": "3CSd1wuZhXTGdLUi9pbJfMBsxxCCtbjHxKyxCcNo5CZGiWgHFwD5h8LGomdY4PrkKQQaR4DguomRuyNFp3BpMd2F",
  "key29": "3cbarrs1VBQum2VCVa4ctsPnyJ9JuFdYSgdpNHvqzuSauV7KNpCES1bqCfCjQvrUkqNM6BMza8ZFBb4pLaucRW2M",
  "key30": "2BivwNpi82y47xsvXSkjEtPzxRYorF14ZAaNDwCaGVaLZWjLQBsk5tBQyRHpKeY3YV1uQaVFgzeDciM8x5kPoha",
  "key31": "tgfYJ2KJcduJ4essCvoXm5nUuEWfptK7bbgyeUf49xjFPSatWHiDXU1ghWHoS7wAKX5fZv3XbFtRP1umPyB9MNe",
  "key32": "2jVYPir3Ezcg5baCbJaxVKY4SZqrRoEzvvyk4QZbQKwbrntguNSmGzTdMeo8ZpeKmZgk6QWXkXYEf1iawS3o9SYm",
  "key33": "uSGQMegBsLvU4A8eUD4UJK2t5kzPJC9XkLWEMiFAhFexxAECa4v37bPSf2h7zR6wiqAg7WPX5JHLamidys41w4A",
  "key34": "2p4LjSDT7C7cofvLesu3wuaq5zSFVXXcpQnMfzqgZB6GWKnuL5dakby4VxPrw5y6YR79hP13YxHhnyacyDYYPQnD",
  "key35": "kRe37fxg5EWQiSh4tn7nCuo2WqGixcLRkgyf5JDEbbbBBWpen9NxSfDXqrkBRRQ6bmBb6Ft1wkMU6c1P4RS8RKL",
  "key36": "vmgcxqcKHEtdygV9u3ahBPnmyajnarzcWY25CZUcGwacA87TptLzRHLwLcCbv1pk52TSmyHsxBVn82k8FQZ3kjR",
  "key37": "2GmowiyeoXegAApjjwXJbzwAonnQDA6XKvjzon7bgyM6ZhkPo4BSPw4LvnGSz3BpysBbJx5tkVYDZsPjU7optijR",
  "key38": "2RYtsgFbxrFm3f4qbgeWKDjhQYiZSzkht7ef2WkrtHBxiGp2ePLUgCmTTYg9neDNKLMNgVARbJooxYT4gjacdZaV",
  "key39": "KQvSz3JDc8gVSkfBryJw48gBppchR4DeSGPUqApeAhYQFwELGTzhewnbawLZ1431xQUNdsZBBzrYjAUnu9m6NfM",
  "key40": "2KfBM7QiRLwJnC3qJvCpDdjPoQ3ANDa1qmkMPtNRixs6bFWvM5TpS4dqSPMcApS1wbZdao7HnaTDDjKagAo9nfsj",
  "key41": "615S6X747KaBcezhmLQVDvD1Mnuo9ZjHz8WKsvEp36HFe3PC2a57y8ws5WjmaCnBVH9tiFd5CraSjo68kpjYb2Bs",
  "key42": "29TbVV7TeRJZWCZ2bzTt6duSiwdYmWtM3pDRFwFDahBBU138ZFFFj37UVGoQFAtij1imDp2wYLZm2ke513m5r2L1"
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
