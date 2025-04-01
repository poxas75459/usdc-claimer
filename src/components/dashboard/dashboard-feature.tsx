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
    "2DtzwA2ZKVNVSNv7qCBvnk6J7s9tAcHA3MivxA6ztMyBiKrry7BhdcfogcB8WURdCtRHswPV991XnE1j22L6ZxD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zzWUdkGLFirtajiCskxTEqPHqTUoh5ikePoMV8pXGDMV23ecAf43o9XZu9HgbYTEES1YyqNgDMKSnb8rmrc4feh",
  "key1": "64ivXivUJA6zidKTNPz84iGpeY4j1jp1Yhyk98QAVg52ESFW3PMGBh3WQvPCieojBfysyfrFQr9T2Y6d7jVm8qpX",
  "key2": "5UTRZ1uHSHcySwjD9iXd1kqM15pVgRBjggTsymMYSAT6VF45jwbaofCS9GjLaKjHReWWNusMPcusKZwqNBJpT7mx",
  "key3": "5zfGYk6hDnrMLbg3cjTjKK5ELEFz7wEgRxHUstRoSuRsUgADPWYf6vF3wRS5ZGB7qH2KGbi1Ei6DoLhEY4XU9kj9",
  "key4": "4kMkziuouzKT5iCqYNnquDRLjrP6h1Bj9tqGut2mS6npSyERnsH6jzjccmPbx1n8kYMTi9WeLdxB5JpGUunZBgYa",
  "key5": "2nLusMLTnpYFs3G1t12M2tyTHNMjm7skuPWHJvEZZNcTvj8VPvzwnv5tbTH7ZNcq1YmaM1av62uBqADRok65ZWjd",
  "key6": "59Pge2LHyZgao2iZrUknXHFRLD6nsXMKUZeDBQqyw3pdHzEm8eK9U7zHpDqFFni7sbFYErfp35YQwRX6X9ZBKK7M",
  "key7": "3Ckiy91i5AfK3r9cEP3TdbS5VVmQtBRyd5Rj44Ri7EC9swnqr5KWXcherodWUYxv9oJw8c6f7KRDjAz3TJyJsHCE",
  "key8": "4Yge7o3aTUc28ddXRRvSrfkAVqb8my8wJkobmuZhi6rpZ3GQhTJbtU1dH4EBrhDqhZjxkwDRXRj4KoWoHFo1iDtN",
  "key9": "21X7iUNeE3PJ6kYz3eL2LmW6suFFzC35UpoHn81BWw1oesDUYh7FApXwZonXdTc2L9TLxvzwf6mA9fvkGo1QpqGY",
  "key10": "5SrJPzxXCCJeu9XoWLNARNKyGcqUMEf69eP2pegefBrynyQmzj9fB6uWsK3wLVdivmTJrKstnF8JzyMW2471Leab",
  "key11": "2Y89gZkQMtQW2Dh8Z2M88ihzsRDSvzYW4w76JsWiC1qWr37JGRgPAdbJCLSmvQUyCHuJAiYTaPmbYHXfJWcB6pbA",
  "key12": "25LxSgkUPANiwVPq9qUyY4K725ZyRCdr1dtW68R1UEbs6G3LLp9g1ZHrWTR3BMrifjPth6NHvtFbp4ogbEP179Wv",
  "key13": "2dTBXMHCJcJ7mVhkopmQs8Gcdcqer8C1fe3xbpbc8xwGF47WB8kMhMhoNyD5bRttGaTsbrxivRh6wNgbL1RnY3Wt",
  "key14": "3kTbPGf813KCZfL7xdTpEdxTpyTEJh13KYGfYKM6QNjw9pP6T58xryzSKau1qnxfbbe8iYHkUGJTZsGuMpvyFBJF",
  "key15": "3PTSZyGDUcPWtQ5uUuSBtnpWuY28wpJYSsMJnVWqiuKZYaso5LboXR7RVyc4uckjQy1eq6qapTWGpiWYy2ezB49t",
  "key16": "2tH6TTJqCZb3cc2FyZWejkiauccUQQddXMTBVoW42ny4Bq92KLR6AEAjotmF31PcwtxP7iSGuKdZRXKQMCE5aPgY",
  "key17": "dkgogFf6wv7asv4VaJjfVqqKNeRdD6HvrhHituVJbKqfxPELmoHzjkdR9PnHgp9SPtbbWJ7o8HabWpd52qRSS59",
  "key18": "5rYL73HhLVhXHDoNaeghqaUG9M4dv2FbgP29643XufP6X23foFJuhxfceHP6Rik6sXtJmDwUBTMsNC7XKmdQd7tk",
  "key19": "PVV9WcHMXPyvaKTHykMuuXeDwtApq3PWQtAgoFqECkbyyomdnidpHtvWNvAur2zca5mRAofw8PWDZCvNxfureu6",
  "key20": "J8N7jtcYmWVEsEaufy6bRRq4YzscVk6gWfFqSYs1QVvvzcUFkmAiAD75LVNKcAC47fiMkEam2cMgFBzNcqhA4Sc",
  "key21": "5vpYv1q4iX6xqimgLAPH4XKwwTQnEMSYRSMVYS8qvyG57ZWSGBKftDBr5Eu78y45w6bnatqP2cKANK4B6ytpFDHW",
  "key22": "XV5FezpcatzYGrS2zbQpdtS7te8SZkzhJGxD9yADAPhNZWnEQS46ebaXLW18GmEwT8pAzHot7racHWrrVbWaSNP",
  "key23": "5EFqb1SZMSCnofwH7G26a4b76VF9FMgP9XXYNAeUn3YcfnPvkjZYY1EEzsJVJ65m8xeX2KgU4QGbgVu81CA8k6Hi",
  "key24": "4frDqoJGAhTRDdzaNANJJ4qHzt1PVYAGavwrHkpPtqFZ5yHbnX52YKCa6AfYYQNbkD5BnefgUurX7rbsF2rRzYsK",
  "key25": "45RyC74uuaKK4g3bF8YULbPKWszd538k3caLMStJDkUJ3v1n9YhVj7R8tqkaxizcsfP8JfEqnK7RoC6ghQHaBJnj",
  "key26": "kf2Z1C894bpmHRudbfo1saRWS7PJhtpz8zuVSj1etyLKmNxb8uMLYjxSaFWghTMGmneMjNMSN4xhXKaP3ze5uko",
  "key27": "3MPCPyYwYZAvHqcvZMoNCv3AHJ3KTNiWfPsh5PJt1Bjt52mgsfS8WFpor8gjygvZqpBjq3Qiz7cUyk4okkuSmfNg",
  "key28": "2xUH9fnFLo8JuoWWm1vQZ6pYvaVbNEtpUhqKZuzb2m74EDxd4PdP9BzknR1Esf3nvZzVepwiCdRt1NGnHYM7MBC4",
  "key29": "2k9KVc1LRkxhhjc5fjRrnvViFbaCoyKSwwDLsYNuGQ47afECJ1PAfkXmoRpTLsocrREWEeUCLGvnXavSvqDUnLCY",
  "key30": "2pUn1z2YKaDo1ayn9ixYtqzJBwubxR9z7oimC3hQBfJx77JzQPX6JcXywK3bTGsJa4fBTocDN7YbWimAZNpnsd7S",
  "key31": "2wpCn5onGoUP2AwdzFWqF92iXEwZPUWDFaVb87sq1KERtPwritMxqQa8CHzcmg2eVGzEQexzP9o8fnMzBv14heUQ",
  "key32": "5mxkZob9Qx2QVconFLxnEC3SJT5VKs1Ss9KNent65Nva5KKTTRqH6kGj2Ac2KWxhaW2z6kuqJgAmE3UmHoL5CAUV",
  "key33": "4LDZ4VHuQudhJZxKRECafmogbkxGBEX2nRgqkiytnkdLw7mpYoxMJNHA5a8MiJUCQ3m14m79ojqCcZuPPhWg4Jvb",
  "key34": "39Bf9E8LizQcVUspwWyq5UksM4zT7sRNhTCMiXBkzqjRT69FMSEummeUDnVSiRjRidU4NAbaM27jsx286GPW3XNV",
  "key35": "PmbsfPCETXBq3Jo2wdCESeUVhHusF4rcHk5TyKKQvGm5MGGVUbsmbEFfCb3BW8YNeNHwmauD17r6ysmgdQa4YuU",
  "key36": "5RRvyYxmcSjLskCaHoi1kptQk8r2pjypj5VGHfTHw6nCeD6W6t9GfFvwdMfZFWu4fiaptVDGZWMPnKVTTFspwCPL",
  "key37": "379iY8q6k71BePcpRheCLxrUNPVJpQZGGgfh69D3K9mAMZ9TSvQkYeA6NGzadJvk1ZbhNMMWqZFUqkQFjYw7pwPd",
  "key38": "5m625iXbXTZUHySTD8RXiAFms6cdByBJez9bR7efr8moWQf7wwwJua3RCTVNwBtyHNtcjRbR7c4zJ9ik1mrZTxnj",
  "key39": "3pncco9oDQAv8cygGFBVCdgN1qCF3H6xD5gDGY54dT6NnowpCTQvHBUF2UChNhmipqYVgJN7Ebybdgqu5wHwFSxF",
  "key40": "4Tmt9AbxnkFthWC9B4eEMz19S1iRabZLep4W7zdxz5qtjEcUJjxbjP8bTPBUCGVt8CN9992DkA67GmBjfzVk5xR",
  "key41": "3Pi3xnjD8xwVAyG5AbqFpMHs5xJSVMzh8DqjhroxKMuUE2vbkQfq2xmytjHUZDWY56rf9wQeAsvzsXZkN8kLCj2s",
  "key42": "44WpTEav95TGGCgq3iuijbc6Cuhg1Ed8WvJWzhCCM9NNHTMuqJEZRCU27Ewj3SFr7qowbiX5ssaCQXNy9zyURSGC"
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
