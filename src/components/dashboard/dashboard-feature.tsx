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
    "64Ho21ZPFNQrmAiGWo43FEg1CkbAr6Hwj8goMZT4zr1Piab9ntabRWGatEjLSoixDghaxmegycwAGwrk4BBwDYNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h8iofYhSqxhDRptGJa7x5sST8yKJC2TjJi6YTJPRpKmcssHt7qsfXnCXHC4D5wRCXGLP8SmC5RS2Nf9R7h7Jxq6",
  "key1": "3kva9QzraH4SizokfXGfuqBiyK1Dd2k2oLdXrVbapyZq97gKhszpP4XPN3y9z3EeQniaNhSZgSEpNEqr7ybDCB51",
  "key2": "5TgB5ebFxfdELxXeeCJZGeCZfVQx6SMgEmCKwvW3aMyTQrmxwoTSJxV9ZJGDXgx56MCd9FT8SSuRkTN2HshVqUue",
  "key3": "36Fzdo7Ko1i5hx2sX6x8phAwf9gawpGaTzgcpY1oGgZDzLiafozq4pMKtjy3MMFLSyzDvajyV5fZ6ffzN4ka5uJo",
  "key4": "4qMus2uKF4ZppoEQrLLEB5FLrcM3Qrv5cxzQGue8dctxbPMQT1ApdypGTchw6sbGL3oH8iqCMYapKQYJSgyqTzAn",
  "key5": "5AKHCcyxbp9JUKdRUAMm3k6x7QJv92rcjjNyMX6nLqHnWfPP56xBpFcC6q1nb7VaZSKPQSrou4MiVZsdwadkcaaj",
  "key6": "3TCU4BFkyaX1spPrPT6kWsFRjKiodzdbDoFMJKmszUS5dm1QhfHL3UxrKSNsVCr8MSnwatm7tZUVUMEZHYXREZ4v",
  "key7": "4Hauxur8MmsrHfMfDniYXpqSYw8QboXom7MA96yu7rZdWNiYxBApbaJsSyhwCeLGTkKmKie9SwbvR5NXgk2EcEwM",
  "key8": "5byZnvGKcpgS4jcpH8pySyaGdBE3uf45wCg8F8D32Vsbyz9DsNvFtnsrJmQN4FuKnAxeTKfRXeucmcXhfoMYwkhZ",
  "key9": "4TsrRxvfDPvUUwan947PytJidoCTSEKxxmMBCB6qFGWcLw1MJEgu6AoCVGecVrmeU73fApLN1P6oRuLWadinJgUj",
  "key10": "4pW7eVQYaNAgaw1MVYa72GPFQ3ix1heGtYDe8bH68LvDKcYJk6cV8uacftbBMFw8txwBbEBVJziUdmjxA1yayHW9",
  "key11": "2iynAzAxdCKNF5aqZYLoADP9RQdc48KqKBgWDJgww83RibQmStX2o4WHr67zSAfYRtkMSwxUh6gwxNqrEb9488Gy",
  "key12": "3fXnys7mrhz4ZUAQWoSdro8mxfCg6E34PFfDDkKdHog2LePymPjmNMtTG7uqmKcMXPT73xxVKqqsUa3c25kMtBjR",
  "key13": "4jc3zUyaxyNQEb1Tk2Wy54ku44sSzNxjtNtkzXc4hDCmQ9X3MPs5dszH31LmeSnuWh9MaKRg9125Wv2UpHomyRFL",
  "key14": "2rKWag7wPEzap6Z82NzgR29RRr6zgsZaqQJaCFDvDQYHFT2QxAZ1RTZpDuXA65BGpp8Nw9sEJgzVtmpDUmmZXnq1",
  "key15": "58K5BeXxn8ArTvion5JzhzpjAmPm1UQ4u5aKwLP4Dsu9zdnRo6JTkc85FSqZaQFK7DdyhjAwQWLJHy6k9DrqARPZ",
  "key16": "4atgfomtBoqhU6cptQDYq1qNkaQeCzxi7uzUHr8G3Huw4nuXiHUXpQYWiT4NGeqZgnRKztwoea9AU6svkdsrZPBY",
  "key17": "3ZymqdgvcnzpR57NBSZt8WSJ9W76oFjNPA3HHUEUUALewaFn53tqRawnRtKu5FQZkMQvumExq1aePLmiCUn3u8Ki",
  "key18": "3KeTbJJzP4W7Y8V3hXmUtu7oDbbtFFdNfQUJuHzFAYax6RJ3ZqGcduf5tMJD5xPZ44fGCh66gDSeUFyEfxHWj6wy",
  "key19": "GfGkEfxN8WC92EsLU542jGYHarTB39mgG2zzAGSBeNPvNV4SJK2j5o5HBJi8nKn24HiE1t4Qsg4zLgktZLkCAwE",
  "key20": "2CnQe5rbWo91JtuTR5ugVj71iWK3baiycM7jjnyrWx5V8jTtHoXchCrGEVQcBuW7XjvQcbPmqZjphed365oYjceW",
  "key21": "oFgKAnk7NiqUG9Css6gDTVWae2ApP928axQ9YXpYLK86147MSVmVMc2Jv4gieC7weXvuVBQbKnTuSn5fqNGeDVk",
  "key22": "wJvdct11N9vqkAmzSSFCQHohPNqRZvbedgkqKYi4hphnWQderq8UQhracPaWLo9CYhD3kS2DdwFys2cA9JhCBKD",
  "key23": "4xyAuxjqcuiZATbp9oEUdG8mp3JSJmcCx1z4j7wnffPpQyo9KoGbfrNYkPPVqJsD8TdV4antdDQntDvTYaVxWo2H",
  "key24": "2V2fviwsgKt7GfpPZeDWWUrMmYCgZQADxNvkgJMNBHXh9NtV6jZoNkhKbFPmZfAMHam6Zp2ywh411cK1Zu1ozG3n",
  "key25": "4ymKKktCybp7YLCHw7aAjcZtxSWbTaMLtobuzL4cU63vb9WrTw1PGk3TWt8q3cSGFnB8kkVt9UYJoMi7XEKKxDAt",
  "key26": "fnVhuL7otkqk2bspfF1Vv4tbnb8UjkzzQr36woaf2SCW175VbeZoK9mydooh9ugqVhkdSKoPUXF7FKGzANeKJwc",
  "key27": "43nbdPXmVMHTun5nztXkXKy9XCyzNYnMuzhZnbvD3CimUrWsKpWzodYZeumAt89KD6xzH7iasgYRCciABpCCCqoq",
  "key28": "2zFKHMnSGcwGT9HiQuT81u15H6z6gHnLpSysKQuSSgUVPULyGQEhHYSMRcYkKgvmkfwm8rgTUyeyVRfm44SSxEoz",
  "key29": "5GKoEoXqnpW2Vz9BcmKXE4UtvkyphXesyPrrhcny1jb6ABJsMsKHVNX2f79KxUBLHkit2Adk9mX4tfLwCRGP8uCP",
  "key30": "4waenQYsmKtTmEyyrhUkGqSjryGTN6hvbbYWLGVs4E7iHMn6kKyTVEeyGXN8uQDmabVo9oHhaT9hSiayjT1zMPpq",
  "key31": "NLctnzxF84rnC7cVuwWVt8xSKR5EmgJMxAfkovmgQGh2EPtFRoQhw3rzuN8T6WFHV8ZzzM75ZJHrE71hH7WWWsy",
  "key32": "3gnTs6Q8Jv4ERr48QiemYND7kqS9x7WZYkBj65hkCPFytvzFucxiKJXZTy75yrPfdLzKQqzjhsi9sdnqEHJ9e3fB"
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
