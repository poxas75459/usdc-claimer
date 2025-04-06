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
    "5a4YhdDBqXgbArGFAs7QCdK6RcHiiY6ogMnTsz8ccKVoKbPzmWcMGSqEpZcEFJ7FJZTrCYSugx94KJCwjMWxBCMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5prfvgEPmEXgboJhxYv5ShALYpDDrubDiSi5wETrm9hTuUP8BEnwP7yS5c7rDry87RHk28pGa3ETUfN8CuaJhswb",
  "key1": "4neRXRVfYS62ie9Lbhs4hXs74m5JPuU6akQjoGBTAKg4Rnkr2qMX7goVmiPgBou4NAL25W1zTHzxmQu7q6kLQ4dN",
  "key2": "3nuhi5WrKrzFZuwxPu4YkZBaHxLYPSHBZjjjdDzVMCwoVTSdEV1912GK6SvuY2wZtknVjaGs8EQ6jmUAxHT8XtAV",
  "key3": "c4e9Bn7vUFr2sXctuSdW5NHhKfugTvdUukmAfd12WFTfvtQcNADK1FVsWhuxLykGXfg5pJ5WRkDVYGsSQr8kiXc",
  "key4": "KZ1bGg4HC7ykVkrkitnadDwXXSsd9whuKqYnpZcHUJdCNHATaibH5HjL9LH1GTXpbXbAquXfXhjkdgVTmqr1eoV",
  "key5": "3BBjbwhSLiUmWdWiPkn9YEm4YMbdYFzT3rVEAtR1qqqKFegzXz9vjq6ukK7ugyF6Zgb9JKRPPMummCpPWJfxj4tL",
  "key6": "51vL1QB9RNh9XyL3ptsVfNy3w3fPF9EzucsWizLu9oA3ok2TFZvRxbbXF7ZpNyEccnciJygBngb1HTjhZ3XSrFGy",
  "key7": "4Dsb47NmNQ5iy8nUuXqYHmgcoTYXKd8RkqRdxMmDgTebLHZ5tr3wHjjefiSydLxS9p3SsnXjbxdkzsGoQeHpPvsa",
  "key8": "2wr6gotshpvNprKq3Ze3qMDXbNU5LCNkijredewNfc1zaGeQaqaw49LwCgc3qdpfwv7kUUk8i5Avdp3etSXcsUFB",
  "key9": "37FzamGS3XE44bzDaCq5Z5xiRUY4Hm59LyssYSS4BYQSbFHCwESBtn4mXpU98XiZSsiKGfETcxYfvLpAFn2qwMc6",
  "key10": "gNkTSU3M5zE1o5hCAnamwLQAokUuGxsNa3GisHTLWxk7N6gBYRwRJFCoK5xtTuLKCPcvkmoHVwAGWNRtNdVe4XF",
  "key11": "2aeDwCRRQQU9sJude48bQoseCXuFCnzKepSzbU4jiJmv8tVjfKCCkfVGg2PAvyB7B8una9GeCg9r6sNPCi2WbLnJ",
  "key12": "3e4hzNceUoujvC3BYs1MkzGrNmUCEDv87dqVbdYRJrbY7fpFnWDsTPDXh1Sa1PXYHLrYBo4Wan3nBgNMPVDU532v",
  "key13": "DDxmwtJwzAysLfeEiueejsbSFep1nJ8GMFmtx3addQdE8iM8TLnxx7jTAfvj8H1LcfsdsoM35xP6EaZUWHXzvtL",
  "key14": "3fwXTLBsu4eR4FYU76jAmwkYX6pNm4Pb7hKoCWKmgKjWfaTEtQ8n6aexsQ1Lj2GhAzim4wdSq6NppJfQJYGDswZT",
  "key15": "2XRu6Q9uE87WpkctzhTC8ozveYLoukbPXsyoA1GUvnjj7ngxjssaq3ZnLuff36akqiADRaDepb5d2j9dQoA6xCqA",
  "key16": "4VTkEYvCf9xBXuBUbWB7DG9n9CbyAxhvd8J8RLQxWfta32da19pv98VjRsRNjHN8XBGGvDEL3PnyvyQktoUYGt9m",
  "key17": "4UqC34fYZ4Pfi9nZxypogojXLwY8bKEsPZH6wJZrsjLi5q8VWHZgoaThSCAigo9i5Kc22GY1SmCwCMhZ6tFb7PjH",
  "key18": "5Qmsakzr4AHw1vfaycZQ2SFBHbA9mDVfTpjb7tmTnUot5m59RbRu8C92hFwNyfdSvok7tYTHAzY9hKVmpHBPcRCb",
  "key19": "49zX1J3iTMz3rVE57oq31ZPu7shJQvS8z7WvgSAMGVVXRFJWejn9fC2oVKXWwAfcUZvh3ER1P4DegNjiazwiLFcT",
  "key20": "5JNh42uFDL9rN4pGx4LmDCf9vC6WZaogBUUG6k7LPcCnFS4undbvFMyuVcifQpheEfPq5fBRiJT4tXgxHj427xq2",
  "key21": "58Qrt4mnWF7TPc1bhFMYzrNmmisJiP6DZd3Ms3CQCTRg35pjpEHmLdAWirhdZtDWTdSeBoBQQP8jb4zFB8uYEbGK",
  "key22": "3FYxvp47j4dvKRk5PFuDV3Brhe8tLgFXBfm61G5GU7eUC8fW4YXpxR4fmArY5YciFk8fkTo96MtvyhCD2ExA7mPu",
  "key23": "298ZVNjvDgMMxmmv2mCaEnK2X1gfJ8ucEDfjP4A3fFLd9AxHQkaaRrzqa4JGTBLkRwA9hSdH4Bp7WyCWmUaWbQeG",
  "key24": "XHvnriqgeJyr6SwS8Rz7ma4kAL7cjBtoVpywZivKm63DuLQxK4zZAjgzZBJ5SAVi9cX4aZ2WHFeCNrHsBE5STpr",
  "key25": "3wdZxKuCw8DvgbX1KiNUmYtKJfi5UirdGR3igaW5ZQjA6hjXyohABcn9vYfUR34tHkFguUZoasjwUzdpZmGA83Dm",
  "key26": "88QrzKBfwUdzVDSAexLtoWq9b9Mgpr9d26Pegb1exfxpXEB3iJy3JLftTKx64ThMNddxETY5zkH1rjz9mieQRTY",
  "key27": "3aNzPMH2iZjYZ5hg7xibW7R1Yq7Wrk4SxVupLaiv93w3jJwZYEsyR4grvfaSTwTZXzJLXyfogRwm2fCBn3aEPyHK",
  "key28": "51TBav9DrtAmtx54UNR3QfZxjvqwrm52Ea6baEq8zz5DUELtD2fawq6FQzDtzq9D142ZcRvy3Coxs9dabtrowTHj",
  "key29": "28EQTproZhULbrwzuftCmzzcTmZPJrdvPemzfiKcsUc5zHYRMQ2tHYPZxUxMYCXwTJLnay5Fa6Mcwiyqoni5sSwe",
  "key30": "5AqEQC3VqkLGyDkk1Nm9HdAEykvxvEdk1zZ7i7kcf9N4m8bg4GGKCzPJRNCSuSPK2mbzXETZ6Dh7PuYpQXgptdAz",
  "key31": "4rrhNzxvQSLaLk3RABDeYUjbr7Xzr1jpa7HFaEC77NvAkZqfx1swfNvZmK3GjwvzUUeLgTjE37CKSfyZE9mmKmAm",
  "key32": "2yh4yFkVzWT4D61mCiYCf8dtkdGiFbhK9nckinN17Uo2R6hZeEKrcyaiGkfrEfJ46hEHs6zE24AkqRgm5Yp5BLAh",
  "key33": "NWw94c5qSyxev1nsQmfjxJj5w1Q58eRfG1At3RtvLCJWAMJ7zu8FGzQqLUiuF6fFp7RJDmcJF7CopSVJ49X6tdB",
  "key34": "EGkqC6iP6qcFCUybxCfwTWE5FSne6FDm4eXmdQ72Bckk8LY5YohUGR34zpZTFit3N9PoQEuRvUUXPZWuKjCabj3",
  "key35": "5ZcDsLzFXBV5LZK5w821FkhtB271V9azEdkQ7466ZdnERJg7PurLmyfYqLgswasRdQ4xQ3Y8bzpJ87FeVP2ytoP",
  "key36": "4m3gBfqyGSkCDNZPJ9uGXULrx27jZJF91Ama7VxZtTY698kwySZ5CXZy81fyiEF5MK6PCjaVZKQJxWM6vB5X1Y95",
  "key37": "4pUHE2MPGuP3dx9oQs69HwpHUmrA5D6yoLio3QxDcAshQduaEnmM65Xp7VscdvqPJMjD6uYByM26FqUGBrNgFZD3"
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
