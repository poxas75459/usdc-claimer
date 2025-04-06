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
    "2UPfEjQkWbfgCfF9ejBBx4hGZoG1bcmu355kXkbej3SAdPyekx2YudbqSbZ9jk935bTuZu9QrBFAZDXRKRKzhgag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XEBsQbqrMBvfbXQY61nZrHNBvVjPYhqeeTSQs7YgWTcPyefYJbFpxgZvjxyeSdcroToCqLCkswL93WeGEhZH9Wh",
  "key1": "6pkUCWfaQznF8sXfbHjKoi7QQ8UBbewgxj3YJwacW8vS36xCWGUNXMvp8TU9P63aQ4nKKmWu8XQLNznVWyE8qSx",
  "key2": "4z6zFUC7VF56FhLDw8i49ATdSnztWE6bC2QKwXVqhypv8tNvtbWUZuM56ZT8Rt2k99DMUaPu8smhrWiBRUEVSeE6",
  "key3": "2CqTvyHKxoSZNaSHWYRk22H5pJAoMaw34mH2ZysaiGFu9gipDqYBDmgHrWKKs1A28zzSZDyNWEQzJpmtZPx7Th9R",
  "key4": "tdhq8Ui5coGVcdxdWawgmZPSy3yQz9QqPg3sJ58PoYfdDvGAUiiDN5tpQsV3ZMRLtM5fjMcTuRdEYnBw28Nu3qW",
  "key5": "474Tg225AdXtidcv65N7RYYPMRMiSKGmh4iEtjECVgewTJ7NP82Uzic4aqLPJbQdUFLtwmGo9hx5pL7CtkPHc7og",
  "key6": "34Kx5aqtGb7wt8Hvf6ro7mYsKuMBAi7HfupnfM7uEYqE1A8ve45hBhAEHTJB5zB6tx8RYV4GBJLpky6kXWPQaLk2",
  "key7": "5YycjA39NdLwCbVPk17KSEFQnCiKDuVen3TMX1fS9LoTtSxo3cSaRxDmrsp5ZEP5KV9aEiGtfLrJPSkJm5uYdzyx",
  "key8": "5BG8Fgteec3CGbWGW8WbxKTdAoN7SPMoCkze86fk6mBymD6QknAaGyAD9XwdxfiT1hdJhaDMdeDDTa9ynTBvQrxr",
  "key9": "4TkMXNbWP7iBs5EJiuFe3STYv6XNJGhiiKVXkMiHspzSbDhhEZNCEnSf1EeQkG2aMvkrFnXW4Y4ppvdjYmZSnpWa",
  "key10": "MwoqmaGCFAYBwbxUZzFUcJZ1m58GS7FytYiwaoiNvRRx7k7xuVPLca1VpSUnKwH78JbpUdxKjdCaZ1QENtoCUr8",
  "key11": "2xKUK8KCiWdyw76kguhREj7qgatMsHjxFArptdoWRNLPduGC9i4HHHLVj6VS2udCofja4osCvReMjyhmyGSNX1oH",
  "key12": "5qcBQdMtyCSsQoUotM8wd8qXkP3Q88JxBDgKRPsSYzaj28Xm8vLE4ZiGooAAZtFz3BqMdrhjVJS4Xx6oFhxvQSMC",
  "key13": "6135BKr7LUD13mqpf4APN9KebzMZPwbmvk6rbUipSAYDjEUczonqVtHeVWiNzEdWraLaxUm23v3ZMkQw2oE1xVE5",
  "key14": "3H3otc82QLPrbhN1kiCFNtxNQLGsKPNSL1baGTghUUDyxdYPjoLgb8m8GSQ6oXrpCCbB8ruSaYmnnWdx1tPpJSex",
  "key15": "cJAo95i5wJNrJd5Jiwy2JgkMMToZ86oUZeCriVtQJQ5CDPwSaF5DhJsLmxw1F48oLyfqzX9uHMpRmAs7kFqNo5x",
  "key16": "3xWtTrYTjJgRH5Gs9Et3zuS3ejZzLUbtXX5D1pciNH6eqHYyDwSpVPBwKhtRAvU7ePMgWf6JfSJ5154joPigdpKE",
  "key17": "2DyXPzKZZ5cMPbefk5bn3VP1etnQt9B2rGV47afCGLbtAtHuLMHvwHNZ5g9oWJpH6CHmx6aCNsrbAKaWLSyAs8n5",
  "key18": "3SytKkpaqGL8ZCAcPAn5VXTr9iwDzzSuV5SZKSfKMHUE8yLV5U8X15f9bWLNNazr7t4FP9Jf1QX3PFukzFBG1cgD",
  "key19": "62bdJJgj9eBM8g9KnBzNVUW8LRkHgmFcWbaW8g8LVbacpvSPxMC73EvLubk3r9qNDn48xJ89rxdosvaMW226kLbN",
  "key20": "23A1J3xKg2zNuQ8B7y8hgCUYFypoSNFHfi88TGWsiaifXtWEZMGnqg2bSLRbowepAJsDz2x2nrQ5NHAHn5hjbE3P",
  "key21": "NVfFFGMKSBrAv4RZ4TzYD8vsjYH8mxsRtBXg8JQYNDzdFcmQ5uYQX3VJekpchsVXEyy2CbLLALthBZ4drxG7Ktn",
  "key22": "HjBZcX182inrHyhEkJGeaFfwHp4eJhebkG1RiU8Ppgz7CdqkTbxp1dyYryXrR1SHVtx62zeHKd5KeKifDrsVxHA",
  "key23": "YhvTLfQEg8xd8DW1YdSQLMRBTi6k62u5TrbdtWxcAga4aG1d7mGAFS83R6VjiYqZXEj1q9eqhLQLFprANyqn5L7",
  "key24": "52ntfPVg3N8Z8eHCjKCy9GbQy4mSRGczuQPSaxYs7nMiPypQeE1XH1KiSFKNqZfDgn36QgYgV3z9gaNNJYGA9vgF",
  "key25": "5CYyHsUsMFQsBD3r9EUqgrsd8diyJzswCdRjkGB4DHbbUc93HDUau8pLSpve2GLARuQ4ztCiPDJxwpPjnHENUaTc",
  "key26": "3qf8ohuvQG9AzV1cTke9fgjkqHbHaFPy98cifebzkLou3TM7Cj64kGbHASVzSdajAqZQp2DKsT7yNUNARoSLduNq",
  "key27": "4PuoYV13R8ewMcxWvfoinfbt9w7w7eGUqnDov7NcrjSrUpv7but7xphfboB5p1H2VmaTndhtkjPsUcA6xjrC4WDw",
  "key28": "oLrVFkeUGPUSDiM9koD5piBUiXtPBs54SJvvQ5mykGUvzGx4deiHUZaSVtMK9VEadyFSN4CUcjG1vCrGrjFLMYK",
  "key29": "4YrD2eBXNGffmt4Z7hUo3GVMkkrG3RXg3jSqzRhCqKBZuNbtWToa6u3XE5p9akn6iemrQ3NfQM4WjeR6zcgQZKYe",
  "key30": "5kEptdSkrwmHb2TbmYnB2Cr3pFZEKEhdEvLsiv5B6ig2zsezo49LhgVUak8uP8VwdiHux7rBfpSXGASwb3zLfnYy",
  "key31": "29Kn8XtxW8PN3uyCHs9mHBrgVCG955wHWzzgySQPoBHpqBRrr5bMLafkChrakNXLqDE3FE8mokDPFyCuLVh8rpPm",
  "key32": "Yd9D34iGnBfbRxkYmotRsEvRpaXMVmMNf8QyL1pJPg3J9cjSNq1rrcXDbah1QPsjxioQpRh3jVp3gjVzr4extce",
  "key33": "3hP98N1J7fs384u7QoXp8sPq84UKDz2r1yKALJGuzf34R2emCXoD8N8zEgu1ht93aEiYBfpUsuFXtdSFUgKbFiWC",
  "key34": "5S6o4ezhwakgx6qH14Qeq7DWVqRPXWz8wyRBNW6FXA1zg8Wr3fm7JfM6s8NC4ZCBeyxsio9xwzAZaGToRFhwMdUQ",
  "key35": "22MGTqU87ZuAWtF88iY2fx27F47zW1dwLFjwBGpFoS4HSkp8JZ7J5aop6MUfpDoP9KQhZmkfZfRYjLGDLZgcbdiq",
  "key36": "4tAHbAtyn6dADPqLwbxNEyd1duEXjGiuqm8W1uJNFnBtAbTg9iPMweq6ZPKQMSLDnY1TWUDFfG1wQwXnDaq4zB77",
  "key37": "5uDV52wY87aUCHE3m6BzwPhpdrdR8b5DFQPE5TP3Pk6GUZEe2CNW3jWXMohB9uxpJ1ecBruYD2tuaDjPdqXRB1Jf",
  "key38": "36tZ4r5g4K6xusvHjRmzBDiYFXcMZ4Bww9WXB4pEp2B4Fqpc5KFmsjZ5M1oKxp8Vjxd6thVdkg3oinMBCXXeWXDW",
  "key39": "3wHf61hGnv5QUsgbcekmhj8GMEksjfgYCRAJTM8KAYKAfmPT1WdYeByzJ8yLUibGdMNvzenL9jGHfLJTx1dyjomP",
  "key40": "4p68akB6rwPqv5eTAdj2Uq7H7KUPpjpTkwmgMoWraV4xsSsC8f9SoaLAuU8S8gSgnU9m1YFALvcniMwzmCT18HcC"
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
