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
    "23T2odhjfCQbqZDMx6F6gGFyeqUHHots69ZGiBARr5g7tgMT83BAcuYonLx6psLCgrV5SoeFMbGMBMxJ5M7pC1gN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FpQJWNK1Maz9wy7PVDF54qSkCbvKai3ReBBNHuFuE4LUzrs9TUCd39tv8eQS2seEU51SLVtaB9JWux7BZCN7s6m",
  "key1": "28Kh6P3muiCegucE8AzdroejRdjMpQfhJZWRga6tzeEVWwaFwY5sDLwJU11xW28x5qVdJvF3RavGuajRnpMYgJ45",
  "key2": "gYzT1w2M2hWMreUJUncWY9G5b7ZmX1XcV52Uq8ys1dVjsD6xpYsDVVZvJNDYkU51HsGZEYYn47n5YX4Sde11irA",
  "key3": "2Ka32K2P3NKCabJ53tjp9Q98a2cULesyHrPV9aqDys7nwJ3G4LGhdoXc4tfh7W3dzthPNir1ki1mehQNrgHJge51",
  "key4": "4M73WBW38wx9fRsSKKYRLwBbob47EicucEb8x5HvEuvon8Av1iAsMHv9fwYiT19Wm4sKy47uiEgJ74oVgYEpugCo",
  "key5": "S9TeXaxx7tJxfnoaAsGgvFx1SeMZ7BPzSzE6cwrAiwUqRh9NojZrRMwwwUZjL8n4nchEJ1bRm6nBCG8J1hUMNKY",
  "key6": "3C3k5KnvxVc8rak5f7MxcPw41ZQgrCoscdp9qxvBt6xiL6cQX1qf5QewQXcZRnG1oZgDWVc9YLjY1KAHFD8w7gov",
  "key7": "4S94Emi4R4Z5VtWKp37hSkNM2XZM3YsYF1eAdUjACPAS8wdo6WZtkUFZYTq44MKTSeerwBGgzTGG72eqoCwzuJ1z",
  "key8": "2uzCG85zovNZhaivVSS6Aovh2duJ7pcPJG7GgPFQaegyArUacki3yTPaXcPuFLrfUErDf7LNmaM2MDwqyR3bEUiL",
  "key9": "3F5fFtncuAgCkZhRjrGxyPQaE1vWAFgS3TSPDPS2N497AjGfVoDmswWbhLsEQs8JLTicUx1kZF86y2TmGvbYTrDo",
  "key10": "5vFPJKWkzbeL5BAv23q8sYAiLvyeHDn4s1x5ErfVDVtmia7qQDeyUUUVHiamahCoshXv8nri26bmsN7paDnUdHT5",
  "key11": "ZC9njqkRet25yWP3WcfRg1qg2BxsAzXtbhsRVAyqgnSt5eQ5PRHCppdjBy4dwpFaishAzAiWVMRw3gjNPw7rjj1",
  "key12": "4RqT9JLELkKusRfd67toRkg5avRFZDPniQD9Fbe4Dik7wqqmFZuembkT67rHfKRUgoYffVVXpugwoi5wroSBNVKj",
  "key13": "5bYyFEAaBbzWSje2J23wByWGgmM5NjUK3ygfhzqBjTTh8S1QWzvVxyT6kFrtGCjxn636JKRVrJsJ6ULNsNQHoGCg",
  "key14": "36JQ7revqX66yRc6fsDRn8VwjxtfSNuo2CFcUefX55uvWHGEdXmUt1iRjZxuG8dQpHCypAh4CfjUNoYaZ1HjjMd9",
  "key15": "4oW16QFwUhXrSKJ3aeM4MEfAH6eQdgnVPKmQGDHZkTXU3ixT9sfDVUbuSMXGS3hrDoh9NPS4qrcJg7Rtj5ApV3ev",
  "key16": "2F1LpV6nS5kxrYAUsV7tMEnmV9KdRUHpaqLMAA2bwmB7kN5kH7Q5YwujkxHamQ5aqsQwpRYLrAHuKVoQYvdNXrdA",
  "key17": "2gzHrXuqUYt6ghMx7e5BXAWnr2nHEYLjWP97aRG99BomGGTqauNYZu2UL74zSLTgu1Njdcj4r3qvMe9zwY8mBgca",
  "key18": "2D21zfyfJUkje3Pk9AugXo97dhcBKhdRXfa3ULoB5y5QATUro6oKPE3HTxCLozSJsycMSNFfJPuLPuBeYP2WujSs",
  "key19": "42FrKXJJJe2M5Lfb8vHYt39d3zMaKwT6bQDNedqfpy1vC14sWoDCay3yL6GbMQNrnjcFofUCWjyq6fZB2vUWvhR4",
  "key20": "5F9LwVnE1wkkjmHPLikWRQeHZWkDgDpwWUEFa2shaHVzFrT5YYhPjM3QbynrMCdateVJtEkTg1x9uSZQ6Pe3eBav",
  "key21": "4aqauW67yhkKLzLfKZaDs5XH9tG9fR1aVWoa1Kg7FF5LrdCd2sPUuubsFMbqALFXFHPQvicN3sb93ezvNhVA4AfE",
  "key22": "4PmnvXgusw5jiN82Bf9yrLzeTPsm3Zw8aRHQG4uX6FoSGMHGrHjrmJDeU9K6CSn9D1RMNuB5UNYqpknFr48BHAFh",
  "key23": "2Nh6HDbdvA8397R1m7NU55TxvGu7MCGBdGgdB37k9soLsKmqbMmu8pRxaZ4FTNo7kvtusVx6M9Yk2JaLcaMUHPMf",
  "key24": "3Y6wxSA2L8eWFZ4ThNnmDgAJbSuAfPXFDJPfSB3oqQg38ZbhCj1cH1nowpcm7aRFjBNntrxe6Cz8NpxrXBL2hyEn",
  "key25": "2HtgTeJxj52YMSGyedELi2f2359uHB9iG7VfXiqhdZo9AJGaTzATaZrDccm2W7UFPtm5pXwYeBqboJrsZJW8fx6s",
  "key26": "45Y6ZHsHn6uM1uy4dHXwh8azq5afbTvaohQgzrSJDXLvzJTQH7FY4pPYnHAXyqwf7p5Yc3atYxa3CwJ77i4twjyG",
  "key27": "WVLXfVnGFQ8p5u2ssPC66fgfgYxq5ApV7BH9DNvf1A9EnSqJuLht6BAxMVUwKXEPyK5ENB9JZu7Dg9yWkaWVsNi",
  "key28": "47XE846xQXq4msh5JvCHQaNkVZoMycAdfQ6CTGz2aG4BB79gPzLiu2qmjtTuiz4nFWNmsy3PjPrXe3ERDNcu8m76",
  "key29": "4CuMAoeWrtPXycUMXxyPng8Q3pkFa8DtT5AjLGWPRUxdgJRmFx8e7dkrea5L5mzAdcCgjNBDUoTVoYXw3ec5fVCG",
  "key30": "ebatuW8zTHWvoEg8mL4ELm9zqJH9c7b4eWuDnMDfQtwj8hUpdbvbzqhED1mMSJEu56WR642JJpjFuWTCi6pFhBr",
  "key31": "SAKmiPDzhf7cvePkx48AXcXcoqqKhKgxvf7tCSdkfB1FTraU6Vnnct38ZXMpzwYHsfFdjphqprp8GabnjNkpG6E",
  "key32": "6oL21Q2T6u3YgrD6hXPTCkppXZx583kXWKwnzyGn6Sk342hNtMMqZuFZqk4GdFaALQTscZWc3ru9vF46oPJpGcb",
  "key33": "39ewhG8uZKZLiUHsdisSgBUXE6crRw5MjZoaU2vj7DrowcnVBnDxLBYVGPDX5s7cVaMRsjdfkNeTRqsmNCmZJFv3",
  "key34": "i3Hc5mA4q8DJMSQQD2WMB3Wzah7wxY8ivVwW6hKf8FhLMJPEPWnZBaaDJKHjwMRGitFojwKjLpwX76DADwnNQTX",
  "key35": "61M1uf4zUDkkuzPJ7x2vaG1Gr5ur4JH2pLvPxYzt9sZoqwF4NLivyLw8pQy6netsKnp2swvJdtivUj11K9LiwV6i",
  "key36": "mWUkyXi9av1pPH5LU67WjoUagCMqyNfLyjjVPTBKBFcUiE5iv2sKrvVDFXpGvQfFJkF5us3hoHYkydegSDrfW8Z",
  "key37": "aBtXXff1gdVYMC3hEQP8aXiSmFirCCia9LzKj5ZYLkW6UZEVwAHBEh95onuYdmA2YN3NL7xkDJFrvJVyaqPrvxV"
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
