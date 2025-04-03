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
    "2DGbMt3pituarTejcE4wszrvw97JJF8XndDkiYTyB1EJtJUxGEaCYwk6Qom5qeFWdH6FLrA6hLSsaPj4RitbWLRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59XFT8JHw8ktCpHfqjenTDGz7o4bvkZNPZSPRjAv5LAWiZmCpf6XSP3RyqCWyb3MF8ocw1XK1rRb2gNp2J2mdXzt",
  "key1": "4uJePGs2pvAsZpy6KsiJZFAAqMpzaFgEAvtPNqm3FDVBBBqbVZ6WCdVL3ahrSm9YsPqGKa45mVbCVuDY3ZQxcq3V",
  "key2": "ioigLhbvPymLaB1Se871Jj3tVH7Rm7UXGuwTZSLjVMaMMm2P491oqhWj4u7wNM8HP2Wh3yJtuksHB34CxunAP1T",
  "key3": "4Q2uFuu5SF2Pz4PYzUMaVaa62cKyVUnqmYgHtQmuAaivxzUQLvaXVz3QmLo1yD5bR8ioPt3CRMcvKwusBSHo3omB",
  "key4": "ca9uKdygcTyjG4SJgTFshqQU1T1qVzHgmZK5nFZdsEkjHi9crJuCCe8mj2ix2Tys9PveHd4xju5bH4QtJGg94eV",
  "key5": "63v5PnYq9bcPUBkfnGmrS6CxTsYoa8wEMEKKMhyrp9zi8TtWLHcsGm9cD3c896xdTp2TUwiUCPkcMW946j5vCJDr",
  "key6": "66LxoBVQcWSTabuhyJZEorn9EsXtyTToTW3n6vLQX2DUGdX2kHMws1ExcsyCv9SVFiS9q3wtugfpaPQxrN37HWh1",
  "key7": "N3q7WZDfHDPuKyHCshemJ1LZUsgdLu6aHVRazfEPjB3oMx2aw87DS2wZDmYGSCxVm7W6AuTdruNLtczVzthvfa1",
  "key8": "5cymws97mv2zPCjmKgtMZ5CWrnxL9NPP4u2r76vRkjL9zhHb69HMBtXV4CJiwzmtiE2S9wjeDbTj72LEKMiMFeqU",
  "key9": "VHy7saqH72fuhz4wxzQvrwVdtPwLo1TEApZ6p5nfwoKUVi9WXR1TakPffiGfWogKxmGpTAmJAQaLxnvVUCihs2Q",
  "key10": "2723bLdNHkfMkz1ixyTy1GG8xq9kQdHDchj8G75eoMLDKqnKYhQjdcyymGBqtAW5sCFP46gb6h1WHyLQYRmfpbS4",
  "key11": "5zfj2WtHr7rvVKKd1Cxw6LGa56oQYpmY5N4Ydtc7BK7qcR3r7AJ8FwM8Y9GMRPSNtAiCgBRBXdUeFSdnC3ymWSXn",
  "key12": "msEFCYrdfTEqkodo5eo7rAGovbU4nchPnVJk78z8hxneiptaMcuoKoLqBne8U5CxGdFWfhs2LK3t2rmAe2T15sv",
  "key13": "sFnsSYCUTbtuMydZnFTxWNK9bass6PLQZBZ8rskfacfwk8BvjtjNfRir6LLKi9r7fNnK6bVxZ4H4ti4NnUh1PT9",
  "key14": "4ofJDghcWj7pdW4Kh3saZpsXnpKnv5F2YYATjF1gaq4iarbHyXjki2rd22F1Lm58CcRgAErnDfNmCERTXuYactLV",
  "key15": "37XoSvkoDW3LW7TQFX2DR6536qYzh1idwzTuKN8RCSkCuEZ3BFDM9SaenELipdJeJ7UamL9cU2Yh5tpJ6FQBjr5i",
  "key16": "2zPoKzkRWt7sVmBJhmygGB19hA1psKSEq4EDwJ3q3LzBvp5wQczHydqwanxDog5yMwRfAUvAKMCwVfHcDqWDcNcR",
  "key17": "5PGBY6s3z4e2i2pxWpimdUTqY2stnQiPtNRm23uyTpj9kzMpxNCHt7Am6o9q8firfG7tnSgqAmJghkgv5yxbemLr",
  "key18": "2oanTjHncaJ9MHq6hALnScYrdwHvi9xt4map5i3kofbbvvD9JRiMx3PhWYbrKwbMoXuDLwW5RAnMtoDnGDnm8hV8",
  "key19": "3LxsnZoXxxTMBs2bBxgAUYuxHP32aLUepWpbBfscdtYcyvCNZy8mqfVmFskQwwkiPurgWCAXhbFXHtEUixgCHMze",
  "key20": "3xQwKTF58rHsJdG479wo4qY9qRg2NyvfeBiaiQ87nDtt6CMZ4jr4KpTQzLcjgYboGuEnUr6SHHMefoMCNRvjjjVm",
  "key21": "6D9MWESDsJstk5mCxWkeTuqHU5LTEDP8GbFA7yRVdL2pQjj7DNdNyihSD5nWNz2P7ExPbrtfYh46epZvYW84Bn8",
  "key22": "4RqQhT3Rj2woAqzyTdfDeQoHBpQeLNN8WQdd1mNeqnm9uFNBzG2idbBwfHKe5RHZmqmatHvRpg8ZUAbHWnd3VBCY",
  "key23": "34KXAtQZ6GvkWtMWVynr3WuP84HE42YKiJ3RbmCooAE2cCFBrigbAp9caeW5ndNcyeQEENdo542BBqDMBoxMW9XK",
  "key24": "GcCdmP8TeSMqX9TSh3M1PbZVSAPZQmrxoMWPGVScVBu3SFMcmUhALmckNuAwa8yFRGTaGgPy2hgokYmcXFkwLoa",
  "key25": "PJGFdG25Ea4dNvStRqLGoVmqnjcqrskZdY7u644TMBaUw7EcoMEVHhudmSccqo5DXZDDgxnornSH1f1ARR5aC2c",
  "key26": "4GLfbdni9pDyAMGzhK5aHPExHYcq5Cwe5K6NfyjbhXhVeXhz7CdoH1rRvFRF87XnsNFXpC1zWGcerHp49yDwWA43",
  "key27": "4tHmNhAyggfXDD5Ur8sekoBavnEXgChADdePtChiyt8epiUzoSfJqNTzBCSxRcwkaXPwX6FwGBTKxsNiHQeUGHb4",
  "key28": "4Ko4hh3JN9GFntNzkkmnKFLibLFjgFcj9LwoVeP5xcXP55d84zQYDe3rRFF11e1eAKkhxHREd9WCB9So8maHAw1K",
  "key29": "2UDYEuWqwzgnG93YoREp7FJ2ATwCozn7ePTkW9KuKXCQQxcXKyZZa5JrLi9T8sQHyHZFfshBRiqaQRytSPaXUYuS",
  "key30": "jhJGSgRgrXbSBACCqsdyf3ieJBsQsvENTMF2gE7nYgJZg6nuLcpht9DPeBHrZdRGz4NyS2JRBVd89WxkVfFXBEf",
  "key31": "5L7e4FLENdN1M3wpokk6sxaJBhEyT5DDHqwcPEagkwWpq8jaPinBQ9YXALxbpN3UsFDycuznpZspEgr5SYt7bXLR"
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
