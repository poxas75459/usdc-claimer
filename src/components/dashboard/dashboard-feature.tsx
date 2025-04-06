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
    "2Eb9PMXD8j1wFd3W6dL4wjCFj6TVUvApxdoG7Pqv5tN8NVWsmuU3uWrUVo68uLNRc3JPZmzHbfGRMnNmsrQ2SrYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ztuweg57wMhjAsC5fzj9TD9Q9inFpZRmMG4JKNPk77NqCGM8LGnSNRi4zHU96ymqgPEXsabD5weBvNkzNmjKujh",
  "key1": "44ANdJqQogXBQ9UG3eggEfm4yZGyURmF7A4w6tnFjWUPFdzoMw3sHGpf4E9yLXSBdvyKAbcdzDQYqBLGCFvPV53o",
  "key2": "35ie8cbu7P7L8HGaw3GVMZT7r9Yjjj7odUQDUNNj4G9EG2sZYxUXTT7j3HfHsXyDLxtBjdXPWXSvwoDrwWtUKyPm",
  "key3": "4hQcSiQ5bd3UbGtLV9KWgxo2iScu2VAXVxK6dL9BGdUpcgNCAP4Rx27ndHZANyB8YJp1k1a6uUMV7mfQk7nqbM7s",
  "key4": "2sBaK7H7f626UTYiAuXaKascXaGQrAkBD1r4wpjFU2gup9YrJBUEFCpXT4me7vH8pQvq5N2tVdvyfRd7xFZxYA7q",
  "key5": "5BkU5Ba7HAGM2nvYN7Uu1JewJJPDzvSRpqaFRce9Q4GAnFmHEMWrLMskxLNWFkkvXHvJiQvLw5qCKadthjjPBuPc",
  "key6": "5d1VVXY7TF6oYTTU6aKMxoYGmxgr8C3QNJ5qqxJgB8PP23Z1TobXA8P346Fip4UVYqo1Fp5iSrAEwpaG7xB22y1j",
  "key7": "2j3EVqgpbUVyPmkTXL22AE88y7imZUbY9bhKeWd9JDhAyqt1TuqPSAmQekWrrAKKz9838dBonGg7nt5cq8F4CCQU",
  "key8": "5xbP1qbwoAfS49cdFFRqaqmR9KvYTemNJ4tmHcL53gsdcyvcU7WiuoffVPFVSUV3AVe8zPxFoj3Qzy9ziDtT7KHa",
  "key9": "5SJyHwKZ2EaJ88G1UHNLfTVixAY1wWJa6Zd7pJm5j352dBAHQyJXstjGYWJfZX5Kgr2ZK8tuUvinZgr6avqSxATC",
  "key10": "4H3ugLc6jePgp4DVDirnA3JevfK6S4UXriZNLjk3aBncxNebbKezw5HK2xkysXQpJYJxXb886iSb2uTngzRgmx6C",
  "key11": "4ZZ39BccRrZboRyZ89iM4gNWpcHK5TNk1Eehx4UqSjUwjoW9vpdNaX1KqrpoAmZq91TNnc8ichD5qKvWdTdTPzqe",
  "key12": "3UDXsFCxpGSvK5qXSTm8Y5yVTzy7vsMXqv9RPx1NiVBTFCBysTcdHu5m55jGyPhrwvsU2B37rd8Mmo5ZqBybcF3t",
  "key13": "2JcRtVVHAtxpySWwbY2oaYdU9xbqeaNdBvgiBqej1QjWTr66mULEPbjWdaYu1YMDkzVVQ32ot5TVKW2xJMKkEATa",
  "key14": "6Wextesctj8RpsYX2BqEQpHHNsKMVwkbY8rjrcxvZJKKUHiyLeb2mswboSaHxnrvA938oXpTNTotqMR6Heunf81",
  "key15": "9iWYcQgM2dL14JQc4Rdav8J7Pfe8mPS66e6fBmaNSfrguXntJvBPqMkYUoizdMGLTUhciTNJP8HyeZ4Pg3HGFBb",
  "key16": "3NTUDToFCbjf6aE4373F8rtgDpTQ5B5oxA2gbhpShPDKPXmmzGSAKEcEgnscQCMkp9xH2vMcrLAskMhkwJ4kYxip",
  "key17": "4dUhsgmGdeFFnzWAdPdzawB2P7j8q6KQk7ougxugkQUhLsCSt2J2Ep7GEAvAmaKuch3SbYH9KEpznXsvAiuXpTtn",
  "key18": "2PJmfovJtbtRZQw8khdgDRbcu4fU5bifdLC2usTnaeEHKJ7u3AyV4thpZ2ogBWysxR2rJ8A5auTMwDKcuvk7PpiF",
  "key19": "2iLa8f1bhdPbRjNto98TZt6itpz5gghJBu5NXvrTYXE7ou6dnvWASLCWt9Urot2v4DVw8y15PVaAaYKpwWYS4E34",
  "key20": "25mwXgXyhPgjskmBHofqsgn6jJdHhbdbzR4AHG9kGZnLFxYViLRrsAa7nadkQCyAWNXkns32rrbvGGVF3oTcZa4g",
  "key21": "5hr21EH8fQfazaRtNoAAFUBrKHBmG6MSt9g8xKVsBmwwwuRcwfQbuj9H3Jw8w6moXT2jRe8YpENP85PFqARnFQzr",
  "key22": "4umodPtEFcY2aJvHEpqPcixXFzocRrciXpVK8ikWKQkjMBbqY7WR51QyKmzWR2A3ouamNYuk3bv2FDinHHLcE7Bp",
  "key23": "5W2bLo3CYV7yqt9hqjAGqLcEDYFb1uqcazsngj8XPVqE4hCRWDc31qsTBWBx9HYnP2jNkDJhqj6Tyh5hdBpgfAuz",
  "key24": "grDhNEzJ9yjvawZE5Apu6Dp7KzBmjF8eSGrCzMHJtFx4VFQgvNLhpk4b6QFQq2TNtthoVZzcgD2NRUoaZgGMdUo",
  "key25": "36N7DZefHJEMpbmUdmmxvazzRgXV1pf5brjjKsMHAD9QiGhujTyBLbGEz18jdrBDhPnEsMv6sXt4NwLe3XP8PYMM",
  "key26": "374SPHaHgNxjPEzCqvCQvZo6bg3Br1ryjXmT6yVuQZBrfF9hmGjbRd6zuiMsLcotbWNNaqLRYKueGzn1ZgWCH4mR",
  "key27": "3ennpjs4DW2wy4Jq7m9k56KRApUmBA9rfLuPoyThNxCNiimcpHWwWaSMnS6NXXyt3LRjUVv3Sry3FymPxKqtF84C",
  "key28": "5yqaGmUHuLg39xi9jJNL8LwbwHQbwayPdsQfX9pFVh96xh4tF5752D7DC6PmQcZnsc3smiLs656twjEPjMZLKkvX",
  "key29": "v99sY2gRmEXaX4n1Dx1oJwRXfb2QpEDwfWPgMAKcWkqX1JVZ7oBQFWLw4XqNVuyGKtwwBrrFLKNyPMUKM1SRuYz",
  "key30": "3T2RcUietHeVPwpEYVYhZzQkJgSaQCbZaTDQgnAhYijC3FQFDNTgCPi5AX7szasZmAMBG1PuNASqAQ2ssZrACKpm",
  "key31": "Ju9ketDanUx9o6RbTZczEYxrmc8Y5L6k9WHbsXdJctxEZaWH2gMPP989SJxBjiSbCakthRECTnw7eQuz9jggQfE",
  "key32": "5CGEwMCEWz95P2hrdne9jscxWZbCa2MhR9XzYY7y1sigWajoCkhZSiZhBjHNnZqJk65gzgCU29b2NfXA8D5KVbHy",
  "key33": "3tsgVbWt9bjw48zCfUv6k97z4HDYUCf2g1r7bHeV9vGcSK3kwMwZhAMgKpHUtfSkyyKwUNdD1jXAbSzFxnCpitBg",
  "key34": "4HH6f8xFfY6FLCcnDTLzRresiofTMK2rwg5bs7mDCXE8R2KzPPPB24RfypVi3u5WaX119cTEVAXFCkCYazVQhghe",
  "key35": "3q2fNAKiVsif6FWwhbzZcEqtDg4ew4qq7EvKdQpN127vDhP2yE2HKKt5PPDmpUR9ojXrcsQA2423ewW59eqfBCyR",
  "key36": "51KoXRAu5xEPZ1s6az5ra6zZ2qFDyqy2BQVkCV3B7sL6jsFHdmSrcv2a51SybbbBheBLmHkDuBCcD8FUQA5dMUDS",
  "key37": "5sj1A9Wn2bsiRy8AbesUP4nyxFv6JKSnyGmJHP2niZkKubiEbZ9EkwRjeTiiVkRRrz5wFiyWtvXK1jSjVgPzJLKE",
  "key38": "4r6u9qu93j1TxTwLV3Atpj7FnADFdfFpbCFZD4eyuRxgc2qzc6aYoNWNufc39S5YKszVZu91xCmWFpvfagHpV6GY",
  "key39": "2G9Zi1wVcoDiUUdi6yPq1977pKS77fccQX2rANTj8bVdxyNjghCzuerg4myk2C7RWybi6q4Sm8swaFG2d83aJiTu",
  "key40": "3CCxmzeG461CMRcrkjTjZGr8mffAkeWbQVFJThWbUg69A6zWNXCSxVnTXjFULsEy4zXdkWBj4JUQ2s4kC1DDcCWD",
  "key41": "Y7cqG91xCqvcpECt5w75aPvX5DteSoxLRKwvTVpAXwMtoEJhNKMMpJFYXdekydK25TyyFLv8hhxxwLy2KU2aJZy",
  "key42": "canUjf1mLqa39nG8nAwNFW86kspGkVuEaHsVoZda5U1DBxqgZPvtkYurGEEHzJBHSSKmX3URCmud3UgkcGxoYsG"
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
