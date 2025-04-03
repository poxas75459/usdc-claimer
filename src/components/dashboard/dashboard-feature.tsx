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
    "H7RwoUhwbVDdhnjBE19iCAuZzejA6D2GGE2rt93CYkPZEsmammNXUzTyshnzZ9WPPXV39ojeZMKwaHEnHQpiXmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gqRr9i6Y5EibhZMaG2RogT4xVQNjp8aGbLc6CFGaNJqd7hsY39HGJyoEJXhMnXLmccPbzVuBtYXTd4Gx2k3UYNz",
  "key1": "5LngM3we9bDnfnyd1HM8qeWBFQa9unpYjbZ3X9Sq3KHa8R3mGMrwUzVxFMqRWBQ1Exxi7bBmNhervTiRXoxK6Cdd",
  "key2": "2rrcSP1DVGH9M6BJ1pZ4N9QYdQ9PKvX2edi3p7WTeKB2r5SX4Py13fyMWgqueexV8bE6jssNEoTdVLxboGFEiBDh",
  "key3": "3m1d5okTHeHjZcGjVWVRA2Lp2oR2zT9JRdTVAZT1mwk8V5njxyWaibrywRxkDSUgBb1DazQyMpEvHqTAMoDBHehh",
  "key4": "2uWi4qXH2Nfeyx95htakaPXaEQuz5sctrUSepB1f6SJaAttpgQy6ayhVh5xBUztJPvced72ok7cZXLWpw3onfUpK",
  "key5": "2g3ArXA1c2Eg63h2ALZrqwr5nFXpdPyu5NWtQmFcwaXaKR8NuzPtxauCghF1w3tQUsQFYvzU4ayRnf5QySNznsXf",
  "key6": "3dXW9Ssr7NnxxyEX5552N9uwfA6wNZTtpPSbvyTw38TvuQH9RxLJZEv5Kvtaj9u95kMgeXA8tdKtfEZP3KAJajif",
  "key7": "4JEr3xkgkFGnaATq58CkrY5QPUbahpviM8ve3DRKj52AoatWhRUt9WkpZojDs5kKvLMfeXsguQdTeaZNSr7UETnc",
  "key8": "27Cfj8aS5SDSvfbm9kXdqZtQkqSrS3cCuTHHwG5M6peXs4bPWZnawHw97Xu8q2bE5XpuYGKUrzsv7Y8xfwsRaWgM",
  "key9": "2NiQYBMX4qxdEbpSGUc7CukRt4exCAAPYep9o5hpaBDPUurFncZfLB9RKYF2jTuYZ38NuUGHAkSpt5wwzU9JXaH9",
  "key10": "5kHdtSeYbLUxfEWeat3UcLqptBWJRnacCR7A6zx2KdX9hQfVyzqAgVbgD3GGAj81ZY5diUC14A1bPPpkMTMy6Q54",
  "key11": "4sCCFUmS3gZhk1Z8durWrs2yCM17YHqKLAZ1Xws6VcptF19ap3EZSZWsQE5zYA7XtHbSHrizkQUUmzXAab1poZt",
  "key12": "4sCnQRCmRankHaBLkB63tY7cxuyUQk26ZnodvskS2pi1enk9UGmj1CBtKaXcducxUBH6EtLb1rhUFiAio77VPsL7",
  "key13": "4HkvcnVZfX4bg6EAiy88kzVLft52K8acduXXX8tVKPiNBq4EJpFk1XUvnTM289Ge3X9Zz7dP1SeEdKRfbzqq8x6L",
  "key14": "2YkWaTasdQu1oyBeKKuAvhHC2Rh1Mozd35U8yaA8ut8vPhtYtz1i46vspX4gp1NRfsQQRUtcRrNnoxyMeUMkZmws",
  "key15": "4oevcESjuM6nkrMSUHtbjmjqNEFBfjxyPqWdgeUj2sWa3Ht2dMgrzDC3gkW2o2jswpdMMFSoM55fc91CAHZTi72G",
  "key16": "5AzHjPWFayGoRQNg6hJGEBKhd9scTZPRwCr85EmAJASm7RtLQTUkC1Ewq1Dzyoc557eQvtR5LErrPtDXSfs5FNKp",
  "key17": "27hZaAqnkwVkuKZLTXJXgkXsuerP7SMvw3AKmKC5qHQz6V6TDAaTq8rHdWjHDqSBGs3fkg4i8idmGB2GkkruC1xW",
  "key18": "qMn8fbbzdh3am4ViFQYmF96k33Ltx6v1K6pUpYDqtzvZqGUSngiTwDjVQDuWTovhMxvfEnHakroirjzVGvn1qte",
  "key19": "21aBKtJmWK8Uu8ivXdnP69F29HwhTVTE5p2sbjzpFQbd4QEFgYYADQSXnFGH3fVNMieMhQ2wm56RR4MRASaYBDr7",
  "key20": "WwXAEFSmtBvrvcVPfNyGzyaip6BuRpiB3azqoe33e3saokjdTVkG6XphXNsZzM8aikyM4KYWGRu6Snq7HfZwwFh",
  "key21": "4GybjsAADjLbwziAzXhhPggkXn12Jw1vLaT6PQRPY7kHWFmTg9XQoKhiATWXkYYuN8QMfn59Vo5T7a2UEABHK4WQ",
  "key22": "4X5gAU7Dm8Fn4Wvby3wFbhUSy6hLdokHGCYa1MCSrGXtsVeG8wStqvoxX9wwwBxc7CJAccsasPyYgkeie9hLy86W",
  "key23": "2AXtaTdv55AUxzh2QA6WvrA1d5bZumdzySXKYysqYkwFXdr67ZnJLzDmL7hDw8uh4FEWpbXPgiC3S7UshGvziy7Q",
  "key24": "3s7YRh44xwAaSkpxKjmewNbpVxuHnqxDJekrNs7FY7ABjCBQ9Qpbbtvpd9oh9EZP6NHzVGYHpXutPqNfVxFKPo7c",
  "key25": "3vGft4LMRNHZ7YRT52J9uKmvgANrhWVVdVfo6BEVNKfXUoV4BrhkoMhgdBmgwcmULKaiHvLVQZsV9P8yMBdGQrqD",
  "key26": "5K4R6Kvz6iWLyRuYy328uWWmNp3jwcZkUqjDikgoFEGGgHTpnJsTxN7cwpUwTuypdJjYeUoTAdBMngWE1ZhNzbcn",
  "key27": "3jj23gdwrSLUacDQkQq1iRweufsEBhiGeAwovhAfGXPteoqE9m2k8jZCfUbH7ixwutytNqFMu3JEVJJUueXHcNUi",
  "key28": "3X5JLCFajc2Sm6M4LSxcMfghFkb4qsZaLQDtMCdxC3YYDJBf4gHK97XPWgeFnJ1sEEnkQPE1LhJtboDoqtzSPXc8",
  "key29": "3taHTBfYiKucbJCRhV8G9eNke9k5pPbF1uXHyBKEtsNWBR4feaT8Cx6BKjQiuW8wLXEkPq2zJpnmj6J5dsKXuGS2",
  "key30": "4W79ASf8iKFcwNHRkHxyUX1Rj2myYX23r8oVLwuByDMBn379UHECt3EpiGdZqmU5YE8xHumhWu4jQVu7w3f9rEn6"
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
