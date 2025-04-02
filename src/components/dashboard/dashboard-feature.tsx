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
    "46NRmUv7ULG7BV6HGc2FTmrxQ85j7uou4nnordtcEFphg7VsdJZvDqwL2PCV7bRtVmTJcG1QE1VnHabZDjTujTL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v2bQ6zwsgRdqH6KVp14pESx2DZavCbavjxkXXmNMNS2qCaFUZSfJTm7k6dhPKmVjRcuLepgbDo5M1gGe2RrDoVY",
  "key1": "352H3R4ykzf1qdJQ4LbubzAWnFuByK2ujHuiSEEvhv5Mo38Bz3aDQUDtnKjggp1yJf4WBo43VoWiKerZx7vbfmvY",
  "key2": "32hAn4k8Yyc4jQo7v1LhJ6yiFFR12rdp1UmzGTbXuerQEjqk82iv4bNJncXqJAeG8zJDhv61jPbQ3kbPK51xWLhD",
  "key3": "mjwMFwWTCGspSgEjWZ7qzi5tzrAyu7SGNPYmeaLW5eKtnj97biPuj4aUf29muRrk9WQy1RYcH8Dv3FrWTAHPLPd",
  "key4": "oeUDWWP1m7thr6L2pJSZHpQqKLNhWd4AHVR6At63E5kP1EJUQ1UdENfFDqCtUro1T6yNK1oCXjQjKfTEkyke3Up",
  "key5": "45C4zqU3CKWd483nyy3Z8R9LatwMcZHzUZ8hSHFXDn5AuNxUbNuT6Vo3dDNSPv48iDfvo7aEQ7yrtXA29iAAdykn",
  "key6": "3JwuLPVXCwWxefWqwf19yLMBmANdGaBRKoU6N4HNMbrUWp3KmMzR4N2Q6HiKiPHnqgrYGkCDwPpHtnABne2ybw5c",
  "key7": "2naHCcPL1hbm5SnhQFSSeU4LGyW26nxiJ81cwERRyKeDqz25wFCpRm6hNB8aaUhsWhsddo7oFuBSqaSNkefXkAZw",
  "key8": "4kFWtYbf5yNYej1bpZi8YXSbkrEBxqm6AU518SCoC6AbuYjHbVA6DiDVzku12jQHBYmGvNVVZUx1sUHZtAahYqgh",
  "key9": "3n9Y8v4xJXGKePSK6jRJGgwdWrZS8RnrZaEhSY7KehQmG43ZRHb9kWf7Qn73iM8nZG4t22LF7RtLaeKWXRPxaikt",
  "key10": "5PjdPzW5aLvMawAod2oxhkxzi4cmUxai4eb3BnSyPj4aPXFUgapQd4VFr6yHNpDDRACVXSncnwN3QU39JSofvSbp",
  "key11": "3haDTqJJ5VhGsyuoFPK3ABqnLACpG4qB842pXbd6cydA13ZhQhZqcVnsdyGf7NyYWiM1KoYfjfqAKzb9tgib7Yug",
  "key12": "3K8GyYBWkRMj94KdFgEo7364bwvK2vzArEDRkuUSCeYhKbNQwXZScHEhMkwWv45cP5PAaHwNPqFuNcjAk5G9utbL",
  "key13": "5Zz4352w2X6Ynocwq8sDBpdXmUZN5LhwDEELUufwFNrx6AAdSoWJ96Xf5YG9ef59MSrFVs765Adt2VFNDQYRqyQy",
  "key14": "2TcT1q3URFwdCaiURxefKHBmMQXHGQvBHUrybQ8TABT2VbQpJhXCFR325CbGz9bR95q8oaiRSs7w455gNYMmDv4q",
  "key15": "535r5uUroQWytjsBtRfxqvDwYCpGM7WfeH7ugfha5FgVAzWp2PVqgFiHPVvo8vuKZxcN4D2Ae4qHowzdizLdH3po",
  "key16": "2aBxuGoDyjtEji99o6aubo6DMGUXSg4zzC6KkFQ4P3tbLqdUW4hjPV7NJUSvsNU2y1ihACW6RqTeowzu6AyQuUa8",
  "key17": "48Xo8xiMmC5owLwff1nRL894E1RgfLrcXzet43evak75qmSTjE63DuYLnp6XoPaBTGy7vdDG6RyeoRUmRDp4uyrZ",
  "key18": "37iwx78Fzdj6er9y1DVi3ipMt89iJuDHs6wdH1eAtxKwNVT2T7EWW1DoBdzqaAFLkrzA5HgXiW3kb1B5Gefyy81s",
  "key19": "DYX2YhxopcAdW7ffb989gvgXD6YwVwodSw4dGnfQvTFgPuF3fCmoL79toZSPiCwayBqXRP5Qau5HKxPVfgK74zH",
  "key20": "26s8LZ5GMGDYdeeiRi6rkoFLjauHa5xCu96YpKPhP3uqSsUY8FyGV5v2d6qzYdeucXNrxjaqAUdpM8S7bCKhJ4dt",
  "key21": "2Ht5yqrqQD9BijrHHsdU5RfJGZPNjTLtderakBYECD6ZBBc9UpTFqHWbsCVnwnf24cLBdf7KKzthBRKazi1mnRDx",
  "key22": "3eTmYsG2UYJmtfcT5ohfT1B4GncRSyNwhJ87xEVy9N2wtWnP6H4B1FEeuV6vo3gYSucMjngvpHkkKrC2os56QJPD",
  "key23": "5JEeXxhQHUJ4Ha33NpBtR5iHaCbmd4ZsaBGsjgfD1LjkQze5yDUxj8Q9ABeJYKfdjFRk7cL2FeNaPLbfmxtam9DJ",
  "key24": "3jyuQ2qtPB1wykViP8WkSMYsfc2xv1RyeBVNMMzTiJdQdfQdxpa8d5ooWDEjECMrmnrjcLBeVos7qgMuNLWsv8Y",
  "key25": "2UbVxdCDaBDqbpCiARAEL7zw8Ykafp35mwGNcdDTdzyoNhqBFaoGvQpM7GzwvEZSvNxLuK94yERFXwkGmnPqAU48",
  "key26": "A21vNuEPQxn9ad6bYSiSjKvZV74XXZburVK39zfBvRwBLEtSpct8jH8YYx3Y1etWG6dtL3Sbgmh87ebpaoUdC4f",
  "key27": "4P7rYgQUs1CdrR5Hbi9AvBjezCUWpLncSicb55GmC7of8xTeQFg9fCWWQGuwWWVHsxY7KFkC68irmG6V7ibqfdKn",
  "key28": "5FZfmEunYhPxJonp1vPrMaaHj9eByNSYvzfmRg2fMCfdCwRMD71rgB2XhfJPrU49WobFmUfeKMDY63UbnmKw9E83",
  "key29": "3DesKPpY7DE2EbC9HiMaSFHMq7z8m3nTU6QWQ8kmTxWyrjcaShfpoUeUkFU4fypjZqQJ4PjezcGAyMhAEcLQbfGY",
  "key30": "3KARD6KDxuUTPYRuPMYxd7C6R1W7XL2BQCwcWiVX1KrL65qAg1Wjy9XDgYT7nyJgd7HCwYQ6YsHWpcJ6sQsQU5HY"
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
