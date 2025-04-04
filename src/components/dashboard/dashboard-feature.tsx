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
    "2FnDbfEqRdDjqWkQjzJJJX7hk91eZZTNUsMi1gvP7X3tYiHWS4PooPnyaB3fcuuHbmA1oXXfjyeWgyV9MdDdvjwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29dFmZsxVXyxw1vbcUxnFbJPhJPfgxMUZkMrF29Zqk4AJGFDaPGn8qYEmwgmduBsCfL4JBToa4suVjVU6x6KAEQx",
  "key1": "2ipKkTnhj6EuEZAptyCz6K9F5By8AjkphqyNgJbqzz6nUHCTmCSxDugzLEwEu2AFfwQiqYdd7gvpjDZzivuuPDBX",
  "key2": "5R6wPqe6MX9gvefkt4kzCfQcE5HHsoRpptq8257UjdTLbz486fvBYKeQ7kKuM4qKMgeRzwNA4VyRFxtHJDLHVW5z",
  "key3": "2TBBi679TTKQh9bhLsY9K8HHckfa6G4C9Muqze1P4AyphEjQV6n8aJcLjYPFyJxiHFetjNHEoXW6xb8xRbwpvgk8",
  "key4": "3Bac4HGkEA6775GDraC9Bv5tM9JVYfuTS34okwUE5sWEkNs7ccyTeqsJeKsXxgg4hL5tRjZ2Ny89veAweu1kho9b",
  "key5": "4AUJSrQxxsyXPCw6bxQyQp15YkYRNER37Q3AtGnD8oUZCLodkQGhaCVaEf9Doa7dxUoSVfaKCnJJK152y2msgMZz",
  "key6": "2qBXoAe8UNv5LSDLnMfwzkrFTRJvxzA1UjTaxiRQn5U2GqsKSNXzCtPSuc1ZYgTVrUW3AexuibrgKqqWeDbvAozs",
  "key7": "4XPqEVPyxYofV2H4dhiZgJsncj47PZJmHR9beruCxRne3rZwWMG71ZgancCvgLyCw9PGevG1xfUeX3RmRLQSHJAy",
  "key8": "KZYw1j8JMRzUajVDt2eZdY3m7Mxg294HSs6ufCiSVGc5neoEt21e19PyY6FPggyY8qk9PaxZAjYLMJ7X8adnHWJ",
  "key9": "mgr5M9PkD859cbf6iguYzRGYzBw6xr1ysGzP4TmBKU2tRCpiAqLRNpN1kG8F1sGctTufPuRzTQkZFGeBNzTgREA",
  "key10": "2bXxxZVdezU4sbbFZ17XNFV62ziWERLjcMYH32LHZcw22gGxsKfUn63MC8oMkp8YB9uihJoG7qLTWVNXZEdBicri",
  "key11": "3AM7W9AsoG35ALhTQYQgDQRVr55JUhxorQPfdYNWA2KBYLusFYabNEGLvnbr3zZSsdKhrBBVG486oywyg9faPRAS",
  "key12": "215WS9o9aTtzK1wcJhsVDWCujss7hihSjahLPYpERsooH7jxtLEmjGMs5C51ZFac5gTtrBvcVejXRRLVNW4XZHi8",
  "key13": "2oipsLNxfNBzWPFq3u6T6rrv36BZgNAEdVZeDbNhKJXCaDVuJfxF8BumaTLjFYYto6AJuW34kE5QE9X47pQgxquJ",
  "key14": "4qknuxha8T5rsRUS9cgMWwyxmd4FeBo9z7H3yPRV3qSLFnXZjMgo61fM4NV5rM9nCkEcmZUk2W3cbzmL6L1A7i6a",
  "key15": "5sZNzbS5pu99h1LZDFWJGPdQjMB2qTnDDAHMZbsjaK87rrJmis9y3c3cAbLUxWUAKux88JFZLb4V1azcv9mRoRLi",
  "key16": "595LDGxwm4EsRWvyzixnKoNbsBuYjtwCMUMf21SFEmR31DGj5y7R1DTdQHRFjGxBqVi64eTT412v5qj9MzYJAwdj",
  "key17": "2TKmNPuCXgamXS6sRKNNcuSR3AG2XK1Sb9UxzuEje5zwJ4CKLsq7vFEEZahUUuLRLby4NfTAooPy92WoL9w8PMtY",
  "key18": "5uuUkS8s7TKB94D3dDHzETSrkWDWUqEEAJt9wnLV2kwpuPbgB5WDsnK5M2fHZRdG7tintGcaXTDH2a7skoL3smta",
  "key19": "4ypW11ebGsbVQxYLGVT6BaoPby9PCrFst3cqpmBcMQjLUB3MRxUBfdwStV4HtUyuNMTXgyEHQd9UtXqpt26ix1ax",
  "key20": "33bJLFaYtztp1K4fdXN8iwywbyDLuCYqF3nPFDmqN7cqoPE1beKMb4zHe7H9cytSGbtbad3SV4ehBz9Z6ATbJ3Ny",
  "key21": "s4f7kDv2WpHU5NghTg5NWHLvj9if8zeBqykWvWHkSnVXsnHLnDBsKTCUCTz7h9mabMz1GNeGoVCcQEWPCXyWWD2",
  "key22": "ga26JwuUdU6nmYugQDNcVC86mz9WnWPLk6SoXmoY9XJuQMFLZrBpoZSaUFmQuzu6zQa99mdmKH1TWtJ9msaAprN",
  "key23": "4uPMwj73Rx7XXcNtHHHU9Huw2XaG8o7GFV5z3MRsqZvSiivPWXYEGH18W7ZaD5NbDuxtaJcAB29LXJYmCgbz1Xns",
  "key24": "2MDh5oahfzzfB5Vzpzc22aN1obfGF3QzMBekbk4oQSY3CPTBRtTrYHL5Ct2LSs3vb93onr3Lf1FScLFBHR1obKhT",
  "key25": "54vrAUYEQYeaMfQ15Vf8NQ56mntCX3J2zb4CX175nvhcnSbWkPjHp82JYSYhs1SgwrvAFYBuLuZS3bpJrGqtoy8S",
  "key26": "9t9QVWUSrgTEeHjw1yDvi6vxPa5wPgojAsoq54pyVVU7PG8MfriFfFQi3m7gsJNKisCFSngAhwNATqVaa53828U",
  "key27": "2xEWpSx5voaiiq9Q3C4JesUa1wMFpAQYYEnggQG7NkneVNmAy67DeFyEN5YMR94HXDGnUKNYntzWRVpup6jBP54R",
  "key28": "WfQqsF8wMKvxvTpbmttkNqRrv9FqrwTe1siHNuWgn6PRMxSYBTjyZwTqcKrXGAJi147eJJg4oHHZ8VdxaxWBi2M",
  "key29": "3CGFdCBsG6s5e66ZszFvgus2WFRNeUBMWhj1rkzCdUuo4YvXSLNV7fVuHRztSntJ31WEEc3NbwCiCDDj1NVjdS2u",
  "key30": "2Lh84FsB9GueMSscLE5mRFffe4fYViVJRRrySe2ESJxfkCshH2iG9cc5fwsnVWeg8SuCtGpu2uoXBmZ6R5J6H8SY",
  "key31": "2vi7ZiTDaZiazTyBAraDYTBpLfQHLoedbtvgTQC4tTCM1XDYT1E5teSUVCp3b4bQABa9nUJEkuYdJ6Mavp2Qy4D8",
  "key32": "jFhwe5cfwh3DJ6LjdHbvnroGRHGP17pvNE6P4KqgAwwABHR6KycA7n6Amp4WUcJ92EwRYztKLeq9UVvzodxBvHN",
  "key33": "3UVXZojCC8X5meLNu6DBx4kRjqfdNNEjpwfm4mjGwrvuWQav4aXZcXiAwksuUMMXScnTEQh2x9jKk8Ce4eFAdcVA"
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
