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
    "4RUa6WKes2SPgPtGk2DsTJwMHG8byCgePUpf5CcqBCMsNGZTw7CqqDkUfAVaUDYywjBCZVAkctbhBKFb3SL61KbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54LWBV5Q3g8Fb1oGgXgGZnGcSK9YAXzpGMQHUAgZKLb2dFD67nSo8yUouZ6EFMa9yAeTx3qnwsW9V6ZoaB4AfsSh",
  "key1": "LMgCNizV3fLQgxfNEzKEfZSa4s9ckRQYKazM6G9pyXPrwiPM89Hs4433FpEEyu9C921jPs2mnUMABCgFyAjDHCy",
  "key2": "57JTqDbV58gCEbYNPAB5vULyUD72HWmwFcbnsrMsKxSm2QJmdsC3sDrCqXnAAmsHT9CDanm35SdAXw9sJCvpTJKQ",
  "key3": "LAJa4rLnBAWVYiNxnmTD5WWuhQ2TVvqdDn5xtTFxsEPyiGwGanTW1WpPRFogrvTnH6D29FdNrrvRu4vQbFi3UGv",
  "key4": "zUza4jXLVnuBmo71zU7B2Bw2TU6khDPzqJa6X9Mo5EBz9eQWV6bSgfBQVsWJFeyhxMjfmzURgifRm2uzZ2afMKn",
  "key5": "3GnWHYohYzpci1xCbGXuvjHjWxVpoyjK1J2hNiEG2cr6PmCPP4KRFs1Qc8kEVFRWWqmLWehnVEGexD2UXPd5rwPx",
  "key6": "b2PynkLAXsMzpnfWfCGSXBB4i2cRT3y1NMxkpkrDeEpqRGEK2AhxWXY6G6fBdKpR3yUFne9M6W2ZntjsyWuAkCV",
  "key7": "3H8V7xHzz8BCu7Mopq4VbFDe8P57QNXFveA6JvtvZaLanmmWKEKU7dbC7TGwJPvx9bY1tKVqjPAFubJBGayuyWL3",
  "key8": "vBDVCUxmoQGtxzDE19aVq2SNxb5cMhtNcX6ZgNG6ZyvFJHaT9j82mF5kuD6Dn2p2CSBDmsNh3ZCifZAoz9yVJD6",
  "key9": "5CSomwyExHTGeJMCgXJqBpm5kYV52szRdwRd4LLyqPBbLxCYXvnbtFR6wWTTwRpQ5K8djMgCfz1gLas9qLfoyfnU",
  "key10": "5uASvrBNSSx82aH9CDTujjoSTxXkzv52Ledoq2obaH7rdb7Q39F4sRLMfxKNv2WzVtVqPXcjRpL5W21tUfKLB3DH",
  "key11": "2gPknBU4JAFyLa7LvRYHVKSwxYQrn2HEjayaWLX5QSzDAoYdxep2stKiqehyiTKW225d4FZxnUjhaAS2WSpTXNuh",
  "key12": "5e7wseEiCLA3qXaawH1AXnYD5uXmDggTA9keZfSUMo7j5UcV3jmxVLwPxz4UeMAr7jr2TtVuLrHb9Pi67fnA87ZR",
  "key13": "5B6ZDhBrbqaA2byP6t65AANPadNyRTC9AojSnbvtz8VdodaFpidWZcc6muafp4pXgSs461JYyBqqy8RKZUjfh4rB",
  "key14": "5mTxG2wiVSxocuyo1TLpS85EYJhdTt8iBnqSQXjJ1deN4CuP35gnMZ4FbkqJQkA4F6N8sN1FzSacPJQdk4G1fkSj",
  "key15": "5g5AUbLdqacWgedBVru9P1Q9R4hpCGk3dvjRDVyJGLK8a328QX3Qx4Q8MYJcZwgtkoUjugP5kiAcz4gLKTRdud3X",
  "key16": "3m32Wsv2Qs6Hf4XzXcpcpMvEqZ1gPmx2w1TLgcgpnTqjUcewCJqBzSgLr4rbkJ8z28CDoKpiDPocGjioPrRyd8iz",
  "key17": "64ejoQVL9AfoSqoksPmD4XwdAKcpq3eK3XdEwyRaAFf3HnEEiQq5qMgLsmgyMbMfKkmxKtDUr7iC3Dzd7gQPHeoo",
  "key18": "4s8LeW7gbDQTAHZibJGW5dJAt98vQV97xyKuUWDh28k8TYVf7peTDuQ4rn6VTMu65sqmqdFEPBaLWqCaxRpLVUBp",
  "key19": "67oVw5q3uw4HWJ8KL9uH5z6TEPFoXQ2cnQZFVJvZLw9tU3njFVV4N7o7cPwKWFAgXhHkEjPw91ZUsoxKWfTnNMX",
  "key20": "52cumxYHSs7Vt95st5hdV2WLCxChLEHtmm42MUenAS3znGv5xjaMhT8bkzVmp8uZV2mbEJmzh7RQqjoErRbzGCYo",
  "key21": "51XxXiS3xZuetcjrDAEyhyEaGNtNHRbGgDoqUeZzDRZZK1kfqND9duNfddViBS21JG93zy25vBLZWaFY3DGwNWGF",
  "key22": "3Y25kk2mnevu5ymLQS1fNCc4tuwTLxD8vSphi6iVAfc8f7E2GaB11ueoeDdLtmVxTjXe9K3riwAY5gG6bABdpWAu",
  "key23": "5heKxwXMqVBoFMQVnFa35iFm4stujDCagFfMa3XMqNUXYWVvUXbe4NeK59nroEc68fyMSg1BjMnRcevCW8F4nWN",
  "key24": "C52qYBLMLgGeqfjdVmKMiVfPZKUDUo7fjGioJWfFz4sEsAZVLNisoja9hUEEeCKCzodRK3H2P8bVK3jQLeWfq8M",
  "key25": "3ba3PU8Pyc46BfArybM8Xgw73axX4icNrHdjr3f4Z9jYALXdu11uiAgE1RGKhHPa3T2voCpMysvN3kjKqxmSvrC4",
  "key26": "5b1n9ziMFWRhNtE7v2pbmMtqNxGsae37prMNyqNGvaFbR1UqYcSyg72DsvMj3dSHoyEWmSMeEMD3d2n6znLDsUEF",
  "key27": "4bNCKk5muw13eUBDopRrpBhGKkFkjCaKCrNdM15c4ttz8fYgZEgY5wrorvxDtvctxkYGfEuZ3tS6h1V2qhDxg9Dz",
  "key28": "44L6Xyfyic5XVwr7VWqPJ7ouBkXL8oiAjDFncFqAxQkd1JA1gbCZX18te13SfFwJq4BbqrfKXyHt6Pue98bcx7L",
  "key29": "59JxD5DLV9uiwnTzDSwBnStYHfMnJJfzMFTr9MgX9czd1yLoovXbcWj5fEX17NFfg9DfLCYpcHYKBd9J9B2AZ4Xu",
  "key30": "5r9eCtHF6gVWpATWDFN5LGSra7MZCt8qth2nZmFDNCpimHRBnA2vzSowyeCvkW79WFVybUdqJSQzbgWb6R4VUDcu",
  "key31": "mndM9fsQSNMafeZmhxX2DDxV29sx2ikvknC4E9jWqXVNg2cU5ujhxTCXRHK4EzTpkGPtLyTjirPLUSVBN9CStKW",
  "key32": "zF6ezE5eF2y1zjJxpAg12RBJmdcCZXoZBonuXKo7j5o2ADhEoaetHYy46QLiEnwHtgubAezpbnBYg8d37wLLNky",
  "key33": "mLtfz1kswt6eQ2z8tAtMyEYdCbCohdzUyTdWnN3GC7g95ahxAxFGzq8EXey4i4crKQ7MFi3yNfdVo6gyUj3jSKb",
  "key34": "eCdbxBvaeESnBZ8KXMbzgERPTc3JW9Up4pgCxA3KhKXLyRtdygfvDUGfxeyDc4rXMDh9dFJ4ZKbNhFAL3wp9fXU",
  "key35": "4UtDomQMN7p7LM6xZ7UNZbK1V2NsVGraNZ1ZunEShAozc7VJYrp8URnPmdMfQsNeKpPEqN43VABkUX428DCJDBwG",
  "key36": "5d3tL3BDXb4vgSSjwyn2q9Ls7xLin8LU93TAoVvLhvMTkv25H9r5oDzC8hJvad77CyjLLS162TEWb2XuTDbTzRNm",
  "key37": "5t1TT4WKrKyncRKidFDhpZZbWPdpnxBEWwF7XsDa8nzpgPZ54aRsdWYXwzNc7mZ5YXW1PyViT47j9fHC3nR9S1fk",
  "key38": "48Sz6QH9gh9yB9yFwYb6qo1sJV3867oKM52YvFJLFwS3LcgX8BH2BSZYNk6TBGoNsoaP2Bou86xTgczFC3JRkEcH",
  "key39": "2ony9R9rwCnH9ZdUgLBce2hjjQjbP9dLW3o14r3t4BcejPLJr9GUSJtZaPCrDUZ92HwDj5dC8nAiwR1sSnuiR2zL",
  "key40": "3nmoR1EUG9JqK6znhwC23zJaX6NGfPfvWei14CDuWM271d98JszrzzogMCYapgU6TyFMzPr2kk6kufzzox6oDuGR",
  "key41": "ZVs9Ba8Epm1UHUzFxrCa6zjXT7xH3TEkft5ahrsoJn2j9PEpx3WEP2zG1ABraigxpKkxC1twdHRvGPGcbpxSYoG",
  "key42": "4pgJo98NNtqyw85EJkBRGEap23bgxSSgH1wDfn4Ab7zJTpXsvD8YKADGph2M7xjHAQCMZdBQjVP3NDU9RkNa5Kc1",
  "key43": "47MTbhXNKvAseYg6VNVrxcjSGkSHvLhGJrZExTVw9VEYA2rjJNDc4sKbvV1JLTS2wZQpPfCF97xsd8JMcgYm2hyt",
  "key44": "5KiGkNpxSnZa4X6YLY9h84pKpsWVpb6BCbAvWCzGLHth1zZgWGviRLkgRczpz6oLKEewJrJ1PPftvkN3zuDmrGQh"
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
