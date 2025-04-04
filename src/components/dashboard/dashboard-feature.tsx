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
    "5UAu751pugUin8FC3tqcggyTy38arydaqE73By1omkw9CABLPEMXQZbprCWx3xaRSsxApGnVqTtv58kyHXrRTo6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SYhyoZ8dmfe7rAucd7hvucuLnX2PMJoRAxknmyKk4qFBX3qJL6QePu3wTFRo7mDad7bFodF7GC1djuN1YRHvTes",
  "key1": "4xpVVwsQxmgJ3rPjqX9eZSKbDmWgUDcDTg1YSux1dfn7ybe6PymwU7qEp41m2vfmQZnwaXt1CvM57yEPweV9AHbz",
  "key2": "PnERooYdZaPa7poVWbmnbdyytTqBPSVYtmesf8Lb5hQM9NjkDanNEWex6QcdZC4311CpE1mN92SjMvEsnkzSwWz",
  "key3": "5jgC3bfgPfx795ZMymv7MmaPjE1mHrkaAg73wWcLFeLnfFmSoNbEbfingbJKcyLMFBXP6oUed3Cy7P7PdrBK5sYc",
  "key4": "4LmazJP4S8jx8Cam5QLUwuY8JLx5A6nDTMZfnoPuBUrHs3EUwQcrQmmzmB4RGS6aRAoMi6D8ji6cd7uzcn5tQzzG",
  "key5": "35SnmyJmhWHaMuXt9PU1Ri8YawAty1UwHsByWYkEWqSprg71v89ft7nshE1sAUtJfHGpnVoWgh8hPcZ7PhxPqDtv",
  "key6": "5Dq7S7pVY4XrFqac5g654PUx4mq5RP9zEXHY7xbtatKMQFtHEFCDcFZTjLCZvCfmwZ6115LPfU5p532xF4rsJ2MR",
  "key7": "4kTirZWxj5H9hSBbNqmPQcs72PY3PCtzMDuJLqMCkuzv4nVWuZ4kmGcB6Jc6oqP9uWJQoAYNwiBo4D9puUceoN6a",
  "key8": "5Kox1bd2wJfomC38FVHgMncWXpbLFdn9Mz9PTC8EMyxMwU24GRAFjjMvPdhd8E9dVEH95VMicfK6WHqQMoFMZFTC",
  "key9": "2K6Hsa3vMebEcBH6N9tiLut8eY1aW3BPpD3SiyxoHHSEtSnRgEQwrsSoqdmNhbnif2a4g9CTKU338fpmmKQ8j4r2",
  "key10": "xrEhwCxVyTGPp16WnuwWredXY1v8pCMuftzt7xJnPfHpxrzcBPyrd7DFWDWMuHXAfvbcDGgoG3sYgzKDBZdKzQm",
  "key11": "4Jjv97SocZyx5vgM55Lb89HQWcmUiL5SCB575JpS6FHjponxm2CzimmvKQUgfuWo7gbFhpb1sfm5UA9KpiwBqrfg",
  "key12": "5mw5eahqfT8gNdDkGYmnmcnazFSa8T3NV39FWRSk3wq8wZWEWypz4WzGymKoy3gnaFCBVqS1gBbsapB3tTyz6Mzw",
  "key13": "37NEn7KPkHDR5S5yms2K3a4EnPCG5a4xPx4J6cHQBEPW8L2xhpFA4fFWkP634U4Jy8nx1es1q3xsBAEFTwMzABqG",
  "key14": "3UPSJ2MhSB9YjHhdGik6f6ss8Kk7JpAwxH2JJpAu3nR8MW7BPXPBW9pr5us7LQWSpvz1fooqg77wJcfcd5YfgS4D",
  "key15": "2JgCeYYPKS8HAq24gkLWpsRqzPuC1NMUBKp7mE8VyyDyUxgQUym3FRNX3RxTASsXpfoqTs6RdTZ5AP32UmQpQco7",
  "key16": "4Uqb8kjmB8o3a3xk6UqX3vfP5bKK8RisX4x8LuC1LCEowxZNnNwenakAMaJ5FFEzVA19aPpxFW1YoVkJ1ocH1ENk",
  "key17": "LXgRPN4mnCYKVESs3qtNapnJbzSy7Sya6iRbA1XQLvCqPyVSEodFVT4tDgM4A6xY3jtaqvWRDUX8fc64NPTtVDv",
  "key18": "5CjxtgaLDzJNm3huJNSmJmDheoE5546nhzCFjy81JrWZ8cmefHy66V6gdLE7g2qT4ML2uUG8SfDamMdtgJtR5rtC",
  "key19": "3eoUZahMcs37kKztef6RjnEj8bQ9WR9ZKYRBfyJhf1xDHaE1Nsi9KKHpWYipgUb5CujaUiVa5wBinJuJuUjuYuAG",
  "key20": "5asZzxBv15K3Ke4qJEh4d76CT9xZxPLqBMSWgLtYyJBZBdKiPeH181c9zxfT1xAXSEihqaddFGixqU3RmHoJjAhR",
  "key21": "4CcM4c8mfajJCNNSazW2jm4NTUjXnmAV3UT8cNfBCqfqsdptuTGQdDxuA69cGNTrf9HBcM5zq8mXiFX8WghGiLTt",
  "key22": "2KXxuR1aqwgGkj1sUUePdSiX3ybsLpcWgVDSoYFHcftVQVWVgRDScaAMeViMhD39arKjRFsCHcpSAS7ZfQPeb8Kn",
  "key23": "3Azp8K3bd1M8nqqq7oQsF755MoieWh4vqCtbAPvTkNyFQVWCUMBQfKEPwVBPdhYdspVtw6kEtxxHiETmx5fxXA8N",
  "key24": "2yj2UgijWGEhJhpvqZS1SeNkJrFmzr5c16YP7F2sf3c5yYWeoqx51BUdZ2GgEN9EpVXj8avTPguGwEprnPQ8bbFG",
  "key25": "2sKxPzWE6wJH3v4dEGt3f87fz3vDyisFW7ba1EnTmd7hXShMRvJSorZNZjAs3qCYDCquuJbDW5EFw8uLqwNfGCWH",
  "key26": "36MwpMM6wNxoii8t9oR8WZLY1fM4JZtAdrFuShav4AbXxHUcoiNpdDNj9NFyG5kuo28DCdVzcf9p4HEtqwK6yDsP",
  "key27": "5Ki3x9PRFGiCwMsGbAWBPYh54ZY5Pz3C1pmiEziN7KRmXzeFuzpNBmdiz7Wm3d1cN9Zw2AEicdkMcLx9ud9yhePU",
  "key28": "4pxxQm4N6p6a8VF2LM9vmcZTSNLxbudoSHQ5eLd9tNyMQ3FEQpq11gynhgDzEAjTkW7FwpCACgctzQVCw9DpJsUt",
  "key29": "2k7gUNkZPZ5LEwsZzAdsADYWMcum54kYchu9E3vDpR2UUG3r4pUrLy7b3kg7zzX3eHuxrHUsDa4NQYAoYj5bBcKS",
  "key30": "5oLiXa4BYZDa1s9q58jYPMKVvB1SPaWB5LRNqnNbvPrymsTHdJkCQFe4jze2YRQ5TDEsVUgn9QYUzJHULA5fmZ9Q",
  "key31": "5nw6y1xjLv1mBVFyVgvGywFhExmwNJ5bLHE3aqaUwxFzfEuuo6VqDFszvDWJmjLne3Kh1zbAio24isHtmwLXAL5P",
  "key32": "2LjThRA9Hk7CzzPGUmoTTjhBTQjozAs1eJKy5fuUx4QiEucmpHe7hsWQxthTXoK9r5CqUxMqu7bqeGUPFspFP7oQ",
  "key33": "39fPDmkRBFxBged4ay5pP9RJe6LqE5KsC4EztrcGavHJoikwwaektjdysU1istLzuCHA1uebSRiDZkLkhP56StNx",
  "key34": "587feqmwZaJNYBQEjrjHussrjEpeCNdZEt4TgHtN1H5mX3pZx4LPVnoJiyAzdP1HBVkfSgWeepZRLLQdnZBK8EZs",
  "key35": "4SWU8TqQwyZ7kZ7u54b4PqYsQa8RDwSaDTu9FhPU5tGJpuu8589a2W4eNoUkdEC61PBFXbbsan9eFBpTVebrkLzu",
  "key36": "3r495ToFoSZ9w2hFLkNFnpA2pwwJ11LFyxof4BbM5SgQhFGfEdh9yt2ES1AzBccUijycKYHJM95E7qJTj3azVQib",
  "key37": "5ob292pYnKNv6Ge6cRiRs94RhpiqZcTReKmR5BNXdZrdG3npNG1Gn4KCijsoJUwmkAsx1vkmif28PeaBfurULRXC",
  "key38": "5YADYeZZPawHNm1QEGkaJ5ArVVmnEmDUXGWfXTCACUWJNcUjg8KsQpyE3paTQKVjZPEZ9S8AfdkGTDVSthb6CaUY",
  "key39": "tEGdDDtUwSttqKbnfZfuL1Jq7mL1KHjmvesRSzirBdvcKPRoWbbEng46gK5AHJdtK2waHZaQQwcLRzdSbjpgvmh",
  "key40": "3coZbob1UcHupzfpi35FVEm7ELoZbdET3Fmk7enoGYMxcbehwyZtgV8FSrTWHDAV7RiDtpN3NgouAH99Fa2xHwXS",
  "key41": "xbZxNEwYMoq3735NxW9R9aVineek5C5n73kJLEwjo3kZAv7eqmMVzhKkgVUSiSEggk4enxqXf7Fb22oyBJJ23KA"
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
