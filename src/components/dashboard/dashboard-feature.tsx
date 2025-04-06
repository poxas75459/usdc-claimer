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
    "4fmj7C193yHYe4A3YMa3tHprotUsbqqjvhT5cu74ad7d1Xa9wVyp8tG49GjoXXY67QdeR6Uvtpjv41dKHvhJWRdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QmNPmeC97nfHfgUaHTUkzWHRbGiY6Svmb3AhakPPAN4FyRsHvijF6vKszwNXGkCqscni9LuwMW8FmKpvWbXgVkZ",
  "key1": "e1qWbXLLsM1TG1tjmL5jxZB78SQNokK4MdHUKLxoE87E2HvjkJtwY7JXuxDwbwUwxreefeaH9xN4T9Y7iWfuQyo",
  "key2": "8bQ71UoUDKbmzt4MWBA1LTb71YMAhUy5xu7wcqBB34s4QB2vGyfACAyqworrzUwFjheRMZHNnHUqKR3XHhRDktp",
  "key3": "JBhJYgB7VJHG3z1CuPAQn5MZQDNeEkjELu3wugVpAh2hnaQyhM1RPDERbLfy9Xk4P1tE2DLewGEPM2WwKWw9FeR",
  "key4": "9TGYwZpNPQusFJf3pGTuQrsv2pFHP9HbNroRBEbkgaYzBA3zas1bf1VHpf518qUkPTEfqG57c5aBV7NgLvwwTDR",
  "key5": "586Z1ykHzEYmoKteetFcSqWq7dRSVyVxdrzc3wnGSkKnMmiiSSXmTgAfUUY5EFW96RwzVvBR6SiwQnryriPj2mzv",
  "key6": "51ojyCCnwFDPuRssDP2P9gbMfLxNkDdkFYue31iwaZXAAaS4LdCF2Pa4ViLPA25vv81G3kgDNWrBGqGT1LSsiUUf",
  "key7": "5JrPR28NjQzQG1uszYFVkgZdVroK95GM13yEuXsz7QhdmbKLB4zeNDKpmKUfbb5L8j465g5aDjP2jHbtZk5Nk6MX",
  "key8": "24Tneb5btnr6yLnqCRa7DF212jsdRiPy3u2zGwScAZwTwHo2P7sEkYjWvni1dfU7SR7D2ZMoihLfeuSExjekkSpB",
  "key9": "64UiQeMMPvQxCwmejQ173dCJTg2aDTJRxnZRbVdcoaBmVkRbTQ71ZvrM5q1P3CXzJgzdA1m1a7K4rppphmcyR3eY",
  "key10": "2CjK8dwyk4R5TxUVskCAE6iqDQTWyGnjAyeJ2zfnqi48h8pTVRUVfEUynbeKfwuCEaip6kYsrFWi9FCBREZmb848",
  "key11": "5ZGSzKW6kJYGM4LMLdxjuKLvhP88gAcFsv1yLFefbCkpmTTKM8AAwbvqAnZzHXVEEQJG13tPgwhHiwAw7ALWAJpE",
  "key12": "4N8UtLDn7JgpKbXHBPEMHB8aqNx8uTKgNxv73PTiRgRrodSky87JPYivcQEyoz89bAkS7ffsg2QgLYkPkcK11EAL",
  "key13": "2n3YdSnfH3vyi9ZVrpie9JV8SP18jryECSEppnzBqbGwerPxoK56FyJxdvaaqtZfUCdnqcXM2ULE7EiqyVEYhXbS",
  "key14": "4jscuoTvYBEUKAiXAytrc2LbHirQMTDEWvZzCeHNzmb7nk4uXy2Xj751Z5QghmBEgC3wJ6DwWRg1DBesyAwbFyuP",
  "key15": "3iCHoLYjDuw7bCqdfWRCmzXSC6x5qqn5CpSMHpeYjqA3g3mtHdmy1QXTUWBqMk4bG8AMfP7d24uvaPxEwuWA2wi3",
  "key16": "3HDLbFKUJRAt3znVdEuDmVAXZvMjkmDWjV1vo7CLP7SLw9fJw9ek8NYuRNh7ChCe1zWFkCyRHdk7bY3raxG8XsRq",
  "key17": "4VLawU1Shsv5sc3tGSpt9M3smYeojjRUoNnR3YBSm5suXzmRo3x1SD2rHF3EcqstDXjXLMjiLgzdGrMU8G7gUb4A",
  "key18": "3tB35Pc2iX7EQyzCbrXtZRSs5K395uYrkPD3xEx8Fm7ugXsX713JM1vk4VjVvixri5dNmta9gomrsCoW99zpYaV9",
  "key19": "2h3UkgGGSZhFJYEnxKRsQd3Z88FrRDReFKcvnYTemf98RKhPzVPCV46AVe7aHwLDdvRcVNgWuvrrjJf6F1LWakmi",
  "key20": "2uLyrUKZwd9dgZthCnb1Qc99oaVqMTRctybqwwezeo3Yq8NooqeQeCeAiFXjSDvLFS6GGqtDKi73ASMSG7bzJqJx",
  "key21": "5zRopeTreh8w52Z53CTW4oQjxihaYLE8CwVVWALNqFduN2Af19PGBPLCyx6psUacoDphLggWGDLN4bwRgRpF9LBi",
  "key22": "5spfwVCS5mRaiiD2JTHu4kArbGVLWSvXHUF1RTsNBMecfvRTHrp5gEUbkCBDtkpgMhco6ZmA3e7d46Qam3WUwXJA",
  "key23": "4UMbimC56qDDbSrc1zX9MGxswcJb1qhmceAj5zUQ3Zh27u9hogXJoVxt5MWjhvQ1UaViiDigu6XznxR2NbEVGNgn",
  "key24": "2taYacAsCyxD3MSLAav48dTJjaGU7ntvwnp2VvbVvVkU8F2pS1xzzKGq8mGj5ff7gyvYbzM5oVhiYQtnB7UrCgXT",
  "key25": "4AduHf5aXjkv6yrbEWYmfbdgsDxYaCCR173PapaRycnSxPFDqe9AsPWTAEEMKWnGiaAV7LFG1kGZaut7Rq35jCYE",
  "key26": "32s6hPva2YDjWAdfzD6Q1V9upUyoK2mwbZHW38hEX6fWHE4QMjLhjEJYKj7NRRqJwXtpKfffe9XAMmGtKQLA26R1",
  "key27": "3frfJb1GvCjAzDm6zcUsKxEe5QxfJDd1t9ZSANMrZ9CsKdqCDzweMPPCsDwZBJYFitFpruBWoXSmAs77odWtF2pz",
  "key28": "256FSm6zHVXAqf1zDjpqgxq7aCXvCSDuAzyoHcKQXv6B6HrKDhP7AvToHPgPJ8Y8LSzFqo1t2jVD37KRcwU23j1K",
  "key29": "4KVDkLHnmhV83cRc5Ba1SsN3kyeps583MCrU5dxXPkVJ7aeFHD2Qv5XjeXPh5ndSpTLkXn6gQ9ayXGy8Mwod8RdU",
  "key30": "5HzTFVKbX4oQUJ6SmMwJMrXp6JGAZhBy8ArqRR9Sh2dTBdTg7pssih8wjM5grnDDtoXudtsWw6YPDfHDTXmoGQNN",
  "key31": "4xkP4LVNQefioTk34quqjrQ1kUUwHfsHcEUmiozGXzV5gZL6jhgirLZLRQ272FG3ETaayXiXwyd5VZb8VX26GeQz",
  "key32": "2qqGEbbJenHxDAbfQNNPo2g3KmnsVVNsFg4zRAfS3ymt9MH1VctfQyLrw9zAGVPjgTgP1MFuTfXu28vyYK1CKu9M",
  "key33": "2N5thGmhbYZkhMZsiKSirmT8S5rQTthJ9kH6axSjdmKNWe98SpBGgFeg1DSKoz9VMdA5p356UpDSEqmRNe4ihskH",
  "key34": "25jJjWumYZSkX1ANCks8jDx7ML1VP5nc9Mq5s9GEitnVmUVauUQiZxcUvfWvCZGkQDm7DjJ8XkeZSZXEpg13UxSw",
  "key35": "uAgUS8Ujzu7UzKZCqzRJTB6YC7zfCV8rh88SA8sC71KAPYcQvkH5Qjo4ngzbwmoqjeFDfKqxbHZBs22RnyZJjqw",
  "key36": "3xNf6inTU3BYw1UmgVJgAvPBVWSBjWYMwioZNWqCjnA2ibtHtQEvDckWwXFJ2Sn4oqsJ6s4wW4CPdG7JxqmFEFuU",
  "key37": "w4WB4Gfnh2e6efpGQBQ7uWNZcuoLjhW2Lb1ufFsNCZ7Mdo3J148MRKp4nrybnx7yVXMHDbPjS2bXdrUsBJZ1pJv",
  "key38": "QufWL2swV1ZbAkGLouq5yFLoMk42GvEgZu6f3Six5iYkUR7FSU5MWkAMReocLePSS4kvUqMsd2PrLt3XPnpsUAv",
  "key39": "Jyxxwyc5GuDJAoJtasVu49QixyHxTBQfuEYF1wGosz6oMYyzDhDKTkYYV36P8eNV6grt1kLSvchH24sYux8MKSt",
  "key40": "3v8NbPXJ6wWS1NZT4FMnPWCf4Qq6GyVPEtbdPSPGB9G2KTMg2kN9mPXaxrACjxTDSQnUXfsooT9WDwcCar4JL5T4",
  "key41": "2TtTrRcojAy8p4wbDmG85XvAAZ3KEwfumAJFU5JkUt1XgoJVJgKJAXPgjitYL96FMhyA8Y51TpKGYKKzJS6KwnY8",
  "key42": "2Z7RTBWs7vXeFbpBEezskg4aF5vUKPScv9qwpWaSZcrHFzy7WFZKCzYoS7ZRcdYXALfQk2CYz1y1nxqZX6MeVQ95",
  "key43": "2ZbZu2cuTT5fuB6opAReLmbrNx6QPzYzNpquiUMuwVtc4R1ym3q5RB86G6ZMdHARLek2UZ7gxXW1eiGM515kJmX2"
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
