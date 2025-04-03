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
    "3ku3kqoTzHNDXCfz86zhm8ohHdGgXaFvbwCvD4zoSQiPjiA4UWsQu8QUTLgrcSGg7yixSYGbMJ28cTvfYDYfhYHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aAg3eU9jRT5FkUrczXJ9DHCsH8YVkUMb6bFA8RCxipY4wSt5w1xRdVJ4bQzkDq4GvdczM6QyhMHjmtMdHGC47xw",
  "key1": "5hmgfNS2FmoCixTeqPHSyUpHzTGCNeGqF8PxcdMzw6pbt1MvoGqaXps7BBkXnUk2rdMqpf1MSjDjC6hARsW5dHtE",
  "key2": "TexmrmkaALVHiZdBfPnLE6qJdsJ4cLWE68HK74o5gBqebDtecJJiyMz7eZSAYHBEtXVtpSugPTSMDah2euUbUN7",
  "key3": "5PpxWyZjRKZrYJH3hm2ccY4dDfDXrMNtSAuwdrU2VycXYp741Q3mktmf97MQ2Vra1JkMDb3CibtPdHLf39Zf4csa",
  "key4": "5h9USmdgPhCy595JtVtFp67mfGRAvSWNjSjnBPjzZQDLYowXtyk8QgitBSLoxhsUKZcBS8wFRwBaxrTTXNdMXCFP",
  "key5": "3bgYtDFLiifLkC1fuakSjY5SC877wUvVLBRpUQqdwCCSwmagASuK3SPQZEuT2hWcWxabCkcsJmJGmQ3tmv5USw4a",
  "key6": "3o9AbxVScdZRGM1C4rQGzp9hQNA7VtPm17UuZrhjRaMuXi9B78nKWULC7quBrL61ny2y491kkcmC3eZENZfuGQUD",
  "key7": "2hephhbpKdX7Jaasvim4pfh3goHDiULKZ3yhmDHwyAyQVTKKTTMDgRCAZQh5USymHjPorZevdztLDRU1Py7YWWSQ",
  "key8": "2o8UcWBL4KYqEJLchhVzUyWe1SQYFp1fnvJqWiqdSBFr6EHncmcxfkke3uciM9x2N4JsdZKEZstkbpnDjpRFZwt1",
  "key9": "5Yn1wqeZkMq3zo8MUxcmTWaUzCxrQwjrp5oNDZQEEytGqtwE41EoUNkUjQ6aFHmVB4HrC2xc3KU9k1iqKmsYDb57",
  "key10": "DtzjNAsDycmwdgTcWcxZRaBv53htKZcG2KUpqMXk2ECDeHfSWoLq8puGFrm1y6gQcyT4TaFiQb2KZFnnAzfWd3r",
  "key11": "29LmcqHtbnEJ761NpP6p8dyP2VYy7cPoftHeuTGSEznZqGznbJbU965LqReRM6gZZNvZdgppWoNndrurM8w9ap88",
  "key12": "2JggUrLYyaTEumXpGwA8vnqsN62ToPWUTN1xtdCVZAR78SL29NtLCPd78WrZGivUjoQ6Acvfqv9N9GBX8AMqo7ux",
  "key13": "YZaKPpNKSRVdg2c2NiJ7J11f3GwiPeGmmabGFsdThVdhgCfcJAMEbBKzPXBPU3PpWJJ2wUAwLewtL727hr6QF9o",
  "key14": "5fCzL7Krm5c1TPeHqTx2Fhesh5qH1Vf3pojevPNDHiVFoaexkWKLWobVeSgbMZUpFr2DNvTiP17tCgmzHNpcEox3",
  "key15": "2tW5ng28reGQVuuBxe2EMfgEGGZypkTuZitqZNyF2bkd1bE6gADwfgr17G8ED2n5N5XfNbWCKpQCgKpDaocCTE4G",
  "key16": "4iWsPLccRtiToNwT8tQZuteWwTV95vjJeooZBuXnXys1wcwaTkTTLGMMiqscfbTNzxUC2npt8RRPyrFbNCzAa2bN",
  "key17": "4a7DUgNAHSfsswM4PoiccLJhq5RHesuehvzvLLWoQ6yhmN9dhTQpHwfLh8PdbUcCtbhF3UDhCjugtQGyW8iyK4Kp",
  "key18": "59y1yu9wQpGwHS3aJ2GkRxh3tjxSkXez1RJEGWMSnwRxTGGFA5v6LnFKoAD9m4XcsNjSzhTsJCeart29osuUpDtW",
  "key19": "2A9fMqM9WJQQ4dJngpdg5W3PvjA3YC64zXojVDWbdGJRNcpifbpeK2i9ebxpCGZYjL3op2ceLRXTiouw7fXgVihR",
  "key20": "22QAPqM1aE8G3qSjLPbb9uJFJwprWMEsD1gMKscpZPzpj9xFRbftugtepuktfPH1vLonwou2uzU82ZG3Pf7ttJYY",
  "key21": "2rs4hKkNoHHZk3VpaWzz4BuYM2EQTynxGyAwRqyrHnNiPtbun2JC89PkH138iCevPR4yoT7jbRC9q8Z491cupRVe",
  "key22": "4qu67m88ZW3QDucGq9Mq7RkJUeCFxsM27qfEzWsxHGyzpHyUU2dntiUahBMptzpXxubPL4UpQ47xCScRF9pMsx5E",
  "key23": "2x1t27T5aD3vTMzNn6icaSDDitgsbgPUXiSvUQomzFQ9xBETFc1ymL8eWyHPKnTPMJmpJEDgEic5hRHdgAtoHz4c",
  "key24": "3kjXEVT139RiftEHjhbVAsiEcrVXJarSMhZAPgBC4r1avfabUjipRjpZ1SgaTxR2MAMiv68ruxnYXGHgvKtSSKTS",
  "key25": "3qj6AvKDtmA6rWyHFKedtwtfSEs9FhsGQzcHpc8DFBeAqmjVpoDNqMPKFpDcxCVNkRFcZgTWd6DQp2w4ZhZwRRZg",
  "key26": "5iyUPdm5yJz8u8rrYA3T7pMR7sDdm4j6mPANyyYj6L8bhzoZih3AXDqMC4pw2zVBppW7UmvnV6yVDaJbgkbUgX8g",
  "key27": "32r7WmK4duZh5oPqyNNcpQPM77JVzxxgD54KwH93rWtMHApcV62Bf5nMq54r6W6q5LfpyQghA2TcXN3zdvQ2TPMf",
  "key28": "Pw6pvQjVLPZo79L2bzfvvEkgxXQkjRktEnXi2jg1zs3fMxrD5ef8XTk381yYCEQeozvcFpaFKScm8TW93BoCMND",
  "key29": "3t26TcnT7a7BaVUNGMBipnm62h3UyWkBuKv3u1cbvCBDyVV4KNueqfbDCyZ3XD2Egxxc9gps8canwKtrxFRaRPsw",
  "key30": "2MV3FTnjtmvzLacGZF8nQLGkFsNUieXbgnfnwP3FBktyMypMnboYC4jQtavcvwyyWYkKjPqmt74n7iLV5ayWEsr4",
  "key31": "3zUh1GbHS18w4c2dhcQPyrfGCSzwGWxxxpiSJUCXccaS2zndaj2x4BYzcvhkNFWBMpzJfmNgWhm8eGpcEXe7n1X8",
  "key32": "4hv74VbbzeAakX7SBxQ8bGBC2MZj13BfXTirxMvo7LDfNM3yniEYDH8pVi4mbzZQDayGsmPYq5gvkdB5QRk9UVWt",
  "key33": "3cC4WqnEXPTVRoufNnJj8wCkU6a3qFNo6YhKMYqQGLdJxZ1Mk7G6puR516s44HvQoofCxJZVvnJ3FSJmffZccK8D",
  "key34": "5dBHD4XHJZZoUYXjgoibniXugZFgQMA8x6ZQfV489AQPP2eXS12tpb2uWcXK9SaEige96Vhg6KjqdoXNmMwghBLt",
  "key35": "4LnxBQVbyZwtFDNaKyvdE3k3tU3MLntFWkRQwbLZ7eDcdCbMTFYVMos1njZKVYPWXfRW1psJmeyECr2U8VGHK7Bh",
  "key36": "4qHCBt4J1mRA7BSgcKYyYtL34TTdptxNmR7YpBSuAXcDa7SQXSkdAJdbg6TFHve7UprHHMweaTjgmDKSqMfjECdy",
  "key37": "3AjN2GEMJXo52SXUbzfg2AAD4hWBiw5iNsazMqssquczR2Cf6KyibuBMx7owmBAnotxtg688HmqjvLijpZAtiMoE",
  "key38": "WDSmtd1ELQUPnFjeCa36ruY8yhM7ngt8bSKyN78QQSQwdyy65uiGbheAM6Xj5GMqKdjVqShQMEpYhw8kdpwMRCE",
  "key39": "2Jnubb4K3gmMZVaSGwEhDzUc4V3zmnumSkAxeTEbz3PLy9Wzhqt1cBWn6aRpTVAX5TcwxVE734GGf5FRPiJhEtn3",
  "key40": "3yV8XWqTdSXTyQNyH6R47EoosvE1LY82d919RzuV5xYJv7BEgSA9mRMWKuiZHxfMdKimuHuJiQmEXcqQKf6czSbQ",
  "key41": "52Hf4Eb9E5VWzZoQNe7QpxS2zjRdg1Z9X5kUGt1EfR1o6jeUcZ6idBAGjSeGtLtogPUMaA8XTCdeamvSnTb2Tgaq",
  "key42": "2TwkaHgcX1czs5twA5pkxCCyY6cLRjzEbceZwd97JtYA5WiHZ4Y6Njq494FrbZY6H4UBL2Swz8MNvFMzaWCyFmQa",
  "key43": "53K6V9FbTjfjZY6aaSVf5uPsAeTKt8Dwt97V59PRzTRcUbDYJ4NDvGCziMXhinsvMBU4rM4SzGmCSAQ3sAw8dp9b",
  "key44": "2hooFaekJt6f5UGGwCMoFeCS6RYcu83Z8vjBATiPi7FH2iyinCjM9C3JtVaTAB8nniaA3YXQEWp6Yv1L56HyjAFM",
  "key45": "2Akyksi8AvkbRkCKarAHHDCUzJLuSW1i6Hg6RzbeSDZS2n8EbT1rxTtMDxnKSH9sfsXDSkQpsAzQ3X1vpdoXw4NL",
  "key46": "9aFoZW6z8S7MxKD5XPGY1W1ogLkFCHSHXW1qvF23M5eQtwZCgndD5xg9CYGvAccKhaAmK7Ag4cLbUp62p8FKhmS",
  "key47": "WuhcXnXKgowmDRKxCeBqZ8Ycg4GJGJZ4BybngsJwbaaSW4GTVQ7G74XvpoF9pzXhDGPYDdahys88arw9orS7CGL",
  "key48": "4hX6bKGewfbzio421eejq2TLLMxgf4rym5EoYHx2BCeb6oy8RmLB85bP1CXn1KpoBMGNxdFpsDsyX94L2bhhMmSN",
  "key49": "4QRPxGddsmgfArFetfQhzgGsD5Mmz4DMhQ8eekVMPU3pyGimK3u2cFiGuv2Vtu9uY2G74EgWZR4FmmiUfphbaiA8"
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
