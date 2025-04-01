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
    "39JAzrxGFBNcdUUjgE2LErV78BpMAd6pFRA2EwqmBVDasTdHtZUBpexDj5XLur7sj9m87DYmCmVAYV5Kt5bzikGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QFXCi8i6wmQDjM8hEpzeBZXdQ2DUEuNNvj3rrB5XntS3WjuEbRjiUfnhNdgxEUoAGkYTRvKK8VxJxk97vYBXPXR",
  "key1": "5u2D3T7hGq2SgoeDS1wXQuXgFRHJD9qLH1YdM1SDkHfUPKNTFmRUPZEHU6tfBGocEh5eyZkdSJ75CwBLdbrFd8cA",
  "key2": "3wrD3yYC8ZVrsAzQ7Kss9Htemnrath9FpGKJKpK1Dumd326yYwdzzfLzC9iZ5WHrokX43menTwDKVdgtiCTVkB91",
  "key3": "2aSn1HvdNpyWdpknraP9BBvRiAQvpJ4A52mzD7KP86e3jkuZhGLvjAP5t7rfu1FULCeGRJ4pKPdHdUixgV7TuJJb",
  "key4": "2qM1Qt5mmSKHG2heP8aAaebSVLyEZwjX8y5az5jgyeBEnhtbHJh2H455NGhPXtcc8sz7osUZJAng4jXLpJVxcnGp",
  "key5": "5or1YdcxNu6MoVYkNbgwrqYK9CAqPr2AkvMqpxFPr4WuZqJ6GNxkKsT55NbptkDLckdV1ay7i5vYFiB8BdrDKJYs",
  "key6": "4heFJMgzfVDuSRAeE5yUSEYqquXywyrk2LZLUQoxWKqpYx5tnYwPv6wk7JiSfk6a4YsY2djvpttLfY2ibBvf2gq2",
  "key7": "5WgoRt8nEmjBmtZnCXyztXk7QXVP5dxoyeU7oZmc6d8mpb9nVANyEfEzwnSD9nhKqCPqLzUrd6zEBksv7Y4jinw2",
  "key8": "2MCNdKCUDvC18YuRXMfJZVLBVrBwKctHDX85CHbao9YeR9vS9rBwbSkk4YUmBNc8GVmz4eApRGeaE3cLxzscKG8A",
  "key9": "2cjTCPGDZWBo3oaYskeU7dnSUeZHGB82ngRs6ibxWQDJHSEesw6GfAAamRy8a4GHCCGQ3GXGBKa8JNQdY3QLnp9N",
  "key10": "56UGMmmSj1CfEAbuwcvd3mdPfVwDWvohPR2XrqJRj8bFsZj3VDgbTcs12zL5Pu7rmskDtPaoWakGHHjsot4hmgek",
  "key11": "21NdQsy44YNrD93ZSCQhnULCVfMkVR6qx42FGE4mhfxJ7w4uJUpxRX3od53q45JayJGo9Lv9MzkEmBndeHSckyEs",
  "key12": "4qgYbFBv42Myc5EJrf9ztSH5tW81L8GT9kvAHPwpyMV9TdH4tYWmntHqRVTtCn2UVUGs5iMPMjRrhAoQuVaNcqgr",
  "key13": "4LCHfVpzCAinDiYkGDQJ1KiUyHYsxvApWVTD9xXWehgJRdsbSuANx7nWaiEyrLCQW8FGASvA4ze7EuGfKYDzUkXe",
  "key14": "5sEPEKtg93Q9bPpuR12MBr8SEYHmQhwXTkg1Kb2nzwK1AWH12WPoQwZhPdUs1Ja7xvrnqpmpbssx2JvyocMcEVC",
  "key15": "R7MSG5bKtMRPReRgo4WGdvSbV9zYU7TKsoSVUqWRCqGRuutErwENRVyGmG14gsSSuEPtM4u4krsisswdHKdDAAN",
  "key16": "2Fxy8evUkfzN2gjUN9E8bh6eLNUoQYB3uo9NsY1W5YGpAZmLsXSAXPKEohJzqPJFfcnxdkj7qjHrp2Bp5k9t67PZ",
  "key17": "2xrSQvPx3P1iJ4X4JRHgKKxqaSeT8BJ6SUFVmr1n1vRPqjD9uVi4pWEzsbPuKqhr2xUT3ieJCzuP8a4vEtfLMygP",
  "key18": "4igYMC3TPiXjbFqQfA2y944sCPCXyhbqgJYAMYP81CaHHgRdQN3XjA4XTqNRHhgkhvdXf6vAhteU6XWSesv8t5Se",
  "key19": "3X9DbKADakM5t6a9UQK3b381k3Dw5L3a53mh1VSZQwfgZrDctQfXwFAJm2d3YyrBfGdppADqpm7ehSCQpR3i9gjS",
  "key20": "32eCVJKUhCzZa7z5ZBBGmVxCPTUv3B8qMSZpE2mgwTEqUfP28SsKmTWfgJqbcXbaZwMJykNzw1JxjUp31GWeB2dN",
  "key21": "ndtax1QrkFe7x4ikSdDqNvNbvJMmcTgBNPbbn33PSsq9BjiGye772zYhqJc3PbNwV7zrzEYpvntnVnXrnDD5kC4",
  "key22": "3P9Cd5o1u135yp9MhEmWhjLE164ASdg8kRHwDjmwrcdpDUjUvZbyeNk7Pm9b6e4ej2H2SBqkUduSUGkNGpikBMMA",
  "key23": "34ub4R9bFbMH1VNm79XLLvuruNSPq2hGzN9gLBRF8jtwULhHGBr2SrRQXdmwjRUBcu4UveAwRNmbeJciGhuN5pMz",
  "key24": "hm8SdaQjZAYhoHqUBVFjHCTumsP9Y7vn8ToyzDbc8A1CEY6c6AiwGsxFTDqD5nEz3GCxkQbs5Yki2VaFNaLmCMX",
  "key25": "r8dDwi2fbECfKT1XvQsgV9LP4ZtUy9qD2t2fr5W4JUyzbpTsahygg9EL34u4QDCrbbWJipMDZtA1NPqrWT1fm4a",
  "key26": "5opzRs8JKLNogwrEnDV6kjDmfRZr8KP43eNh8gTepB1LRyHT21WedT8PDHPp6jA5t2bKuZsipGTJcwynwRGwPghJ",
  "key27": "4pq398FoptnGXTHiwCPP3acNgWHWCn7D8DFyqUNmHtUL9iSwGRBC1YG5KPKE1n5FryL3jAeWqnWqMYJeR4pfoHwx",
  "key28": "5BbUKq1PAMtc41L2CcVHP8yq8ffzJwJMcbaMVPwPPreGSirL1nc5uTxZw7GZNv7GScB7jdn8jAVvFQ1gLWSy8aTa",
  "key29": "L6tynQcSYbSBtXVSffMMeqXVatVC158dnEjYusMmGNfXESVH8zLr9SYVBxB3GGWx9AceoT4Yjudqzk91KPPsgnD",
  "key30": "gH3YT4Y1WkoBV7hBHryFoA5AboaXrRCbA4oHnawY77EVU4gTXf4ZEkP3cwwQh97DyDPVAmhKoJjQNrotoMeHAbT",
  "key31": "4y9t5xNLsFWMjBQTBH42tVzmrY5p95Fa9Mw43M8bD3phz3zdadWCiRUSrrhpznUxaWC7jK7S1B3Gj13RSDUXQGEV",
  "key32": "41HQM7KFX6FVmMghETFuxBLqV2nsAGoBHzWJEUSTq2WhMXSA285jxE3ce9FVng5wkiQ3bNf2k9nKPYNUL4LCPtcU",
  "key33": "3uKz95xjWyLiBL9GjEbovch3CuzRWD1Dhy1hEpxrRKCvrPskVHU5FELGAkEbRg5JnjuqneCDgpQkwXK86NHSVqgC",
  "key34": "DEf1RfPeNFtMiWjmn4e6UtjyNjYoMGXYBLtCL7pe4Sajpa2wr7KQ8DdA9Nj3AGnoCvrodmQHG2DMsYU1AFRVLiQ",
  "key35": "55NUtidKNp1E4vafPtHk8S1BUZUPUrpW2og3x64UkJHrT3n8YuugDB2mVRb1Ei5j3mZhemSwFN4fQzKM9xV2XCwB"
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
