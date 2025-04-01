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
    "2gcaWfvBUXyXFWQyEsgyMxZRpAiEvpcC6YUL8S6KytQMQrRYSSQX6SCh3qfPSf5NtL9eb3koVbAqjhDCN8Deibs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DamqdcKvW9JXTdm4Xi9qWLbYtJ8LEsdFEKudkh5WDjzarLNctDM5f9HArH4bCxDNwoWzL9a3qC9UVXWszuq8Ju1",
  "key1": "2nvShzLF3Nm6nVfK3goMzEPJTuUKvtHXCdVbwEdfx2xCVqeBgWcb6kD3ruai88tX9KFdntKn92Jodv8StE5cX3oJ",
  "key2": "2bsn7vrGBiwcZD5b4sgNppN9PhCKyURtx96GnAbvykMTJByEFnRLmgW2zSLNQWXVkkXpQCmviLMLSz8hdXdARifD",
  "key3": "63oRqs6szXJ99LWq79FxwYzoZ8nqZztdy1XYsBkPimevCzkjh485aQoXE1poyaF5HxFDTGMWkjyZtLKrJG3xjary",
  "key4": "2S6LM5Buqqqz3xZLhrXX6U1D1r6mugWRUxw8de2ZnPwn54KForTUkSKPRRMNbDw7bptcZgdyPeNZY6S3mM3p1ZJL",
  "key5": "aJWEsWi8ZkYAbQDwry8zTjXDLUTZkYsVccQHB3N1Cjry3dxGRZBjjG9m9jampcQ77ZCaxgJSsC3JdqztxYrindV",
  "key6": "2keaTehZ8M7Mvt8D3XtT8eX66xJLegFhMMoZT8HfjM1WDeXRqjuL8pQykc6snd3ySrjBqU7arWke9w5ECsmod3t5",
  "key7": "LeQxhuQNFf1Le9GVV3svWdp9z3CRnL3qvzEZfGgBjdLBwKCZvWQNK5DSjvGveC6MkoxcRaNoSSHTHKGFSyut2VJ",
  "key8": "4NMzwsxkoWS9pFnLDh3RiYyEVNSA4jknG38wHdsX2CbgUCm5HN31LeYuq7nAcAFczjivNMBCUFj3CmgB7egeLwHy",
  "key9": "3qDEq1nDkjHy6Ln6pL9D12Dde6aDGwRaMqEQiDmdt1woDp1A15v5vMkXiekKTmCsFNMeUqbARkQynSgdbWSUg93Y",
  "key10": "3fC94hqqjZUbhPGEPJNpGuYVp7rkzVLiLD2Bno7wyVJxxknDM8hoWUdsa43zFWUt1RdJ2kaURz6FB53Gn6guqazH",
  "key11": "4v9hjEdpHAUahFV38g666UvZTiXESVp3tn4jkVDbMSnpiov1EJDEmE8cXzk1pvMMW3V5W8KrmjEYy5f5QyWKhHuT",
  "key12": "kuHhNb7ibwo7qST5RLUhRijK1ERcvRJ6okQgvUDeRnvrtRyyqMvx1j2MvxLMTM8QsmtkwuBwxcxt8DrNurA7v93",
  "key13": "5A7Ef3E3gwntigny6v12QhSVmyeUxiGz5Nag5wtgjGQZ2hWWjMskTySAyNaX4eAWrS2edzTqhGkzF2c8jxNqZ3kR",
  "key14": "35UdcDzH7Wg5ui5Vu6UB5xgVmAe6LPAjm9V39zMPhRVVauL83ukuRShmF9rgUwCXDhXb1fzxf6cekCuaCc2AzDnj",
  "key15": "3RrMe89QZxUnrjd6C64LmP6EFHdEm8XM5xq5vG6Da9xthUVVVz1DFnEHSqRkp6Gs1jo6fKT1gQ8SJN9skKEWLdzi",
  "key16": "VPv8pEum8evtV1vz8ywwCBukA4LwzmZWfPKKYfwDJJyG7qb8neEMx8qf62QKFYUEPBFGY1QjtKNy5ypS2sEcHxW",
  "key17": "4FJLfawTvPXxd5491z4iivsMf3PJ8BZkfT6yhBGpRkHEyWzFGUHMh74WynVdv7iLSbUfbvQv8TU6St9q5PDoMSuZ",
  "key18": "4fzWhDSnwuT7RWEoHGa2aXKVB5BGKXmCvA6hpF8LouUbK245rMMSym39ktfz5BLYt7G6aeBKK63pnAJFFDDXJEj9",
  "key19": "5dmAJgcWnqXxaNkaofVMhWSNTiamcWrUajC2K6fLqWnnMYU3bUZyMASy1qbLq6tHESBoixiF1BbXzNkitMNc4823",
  "key20": "66g2Lf2Bvr7exbbYHgcdPJHin8o72B5RjqmYZj4nm7ZeB8VP7FWKqXi985qgmkL2uHBoJp613SYsMmKqytmN3xTw",
  "key21": "yhCGGQjtBmqSLQGWX5CsRH9eQ7AWtC2naUyrpB3tqq6EaeDKYrYofMLByBRkUEvEsCuiCez3gurwTK5Ecf2i5ty",
  "key22": "j5Ap72LwJUfUR2eyRU25jAEM15rSHDvRAL5aHozKwSWCGu3QqMWZTrEoMB6Z4oR7W4y8bX9T3VXVxURxbiehhkG",
  "key23": "2nnC2ZhFA4dXtavgih6mU3CtFyUQjVJn8oNzdNpmwJ23XodfPsBbJjWfVQhFnMpkTVZv1pfob2XXKDBToHdjxYy6",
  "key24": "4PmvtsaGxy4qTenm3dmhYZaECz3yCtgch8kfhdXvUvyuy7wPLK3wcz115Jk1QosetFuaWiNvuk14GEWH7UwLPGGV",
  "key25": "3E9YE9mKWaZz1defLPpDCa8dvj2VPTpw7ZHULMnihz7N8FkWGcsa7QnMECFJevqwu3Y8Tt9n1vBy7serq94j7qik",
  "key26": "5sSWjKggiZnHyfW2buGvFisWc5xKXTkbw6wUR4xceShKXENY98MCFK6Z37dMpiErn8V6xdajb1KfecFUe9AJEbP",
  "key27": "4DX7sGRAC6AZw1ngMEUBPAtVPkBTkyffrcrjQynkMeLpAfbMEc6vm2YjsTMnQqwiSGMGRAy4BSu8tJTwLfx3Dq3t",
  "key28": "3A38iQZgLq78d4rwkwDEH2JSPi4yDnr9T9EiDAgJbGBLt85mgfXiWQ2LmzUUbiDJ61FgK5ijPy9z2MEVMtaud2eD",
  "key29": "4Aq4m5mVGprWjxgKZjWH1BfMisvyUkwSBt8LtCUNhRRHNc9UZP52XrXRLPhCA1SYmKCnGCheSoX3xvhFJA6RcxLQ",
  "key30": "4Q3NYCuH13oNCKLAjR1B1nZ8d2LPUkUHGTV6rJ3WdNaUzBxMYV45o4qhamvhwWe8fiw8KK1euUo4Rsh5BfzjXHrk",
  "key31": "5xH6qa8NjPEZPNe9h5wGNhTyPZ3apPWPJ6g6fZkJtrFohxpnVcFVR32tPhTirYdsfKerDHS9kFjJK3H86ZPGroVK",
  "key32": "2ApYEkhkyVJU6iJRY9Pvq4CdosDS27Kv314rKKEFPYaXsxYHEJ6fWnEBHdumRah4S1MEzXDnFBjGdoLJd3EtsGtx",
  "key33": "pdx4gmJVnn9bUSW6BLNsNJ5U7UJjwpvvPUYPvLjf1nDq8Hr5n9zQTozphrDuco6TxMNUppphZZ3xBbQ3KRixwNk",
  "key34": "2pe3y9WehpDB3zSV4wgtvWz4vjGfNgidyi5CaypQ41DgTjwWnZSrc4WCwy1qqLSonauTH1VB7PXiZFCyrLHGAXt3",
  "key35": "46Uhoj9U4boogG9ZRDZxA6pvBTDJRThzjyttuXYd2YGbZDobrKmqw3VkaYgdG9xXNE41C2rg8itwQpQeAj9mGKak",
  "key36": "22zEaQYiwoAUPjxGNSXb8NRnC9raTkCT1XnS46bsL3WKV2n1zUpkxaw94sNbAENonTdiehh9BR6zSeYAdHcwZ2b4",
  "key37": "2qHCG5UG7RyfZoZ5Pv2w9UdC4wZRFTh2xWGUgwV33gJ6EV53Z3FTA5FGAh2tyGYj1eytWB5pQRYp1QdcFa4XwcwE",
  "key38": "5Y7csaSwW8noVQ6e6ffVngpauD9VJ8RYcUzdUeYNQKzbeiz4hrxGmfhfDbhwowUXP7cpgNwY1wixdagjJGiyh2AV",
  "key39": "5YaEhDGe3f3yDBeRhxhVpbosdq1LeBuL72EVkvUeVoDZcxWChkQqhsGTSnJUn4XiFiQUTooRBFSJ8a8WkGEUDR5w",
  "key40": "3XoiWemCaAYeua46sgZgt7bg23nq5zfNAukc7L1CzbkyrgoRfghq6WxrYGDBsXCcazyD3HfUFhs6DAXbHjMwHbZr",
  "key41": "UMeTQcgkF57hJpUvWnSZAzPc6SHY9atYX7KgfnszDodxweZWuiqWqv4crRXgfzkziobhUqZXX1wxdGkVCgG8vpL",
  "key42": "2BryXUqPPKzHbpQmYSyX1vSZ82nGMqyuxdVR7tz2ngP7nWK3EgwukxmfuUKD8uz2WXLHapseGaTERAdfQmEXMC8L",
  "key43": "t4cjmoKVU1NXfHfBHHQAycmtYM9aNsMxy7MVURLvCNLAhFfKFm4JxnYb2MCR8PCasnKmpoK3WhRfotVWd6kj8qb",
  "key44": "3cxnstfY9adwxrfczY4Uqs61kDERZtpqkE44DUdiTqWPpn5t9DsWVAAbuvgDQdfVfr7Pibs2WboXRE91JpYoBPp6",
  "key45": "2NqGqxVrBCc2qvXiDbiFmNjuoeGv1naJjbphVtd1M3WXLJHCBs2utEXuvnXKxtH5wYQftbmE1bGSDqryXGDBGSzy",
  "key46": "4fSgCf96x4HirKZfWfsm8FrtpESoBGFANMDc1uLE9YVgy3SSomPL9P5MC7dhYdTgWMNyWfh9uNWrai8BoqrBQ86L",
  "key47": "36AgpV9t4o5PD1Bpzvo46KbmH8u4NDD7rPDF8JguymRdEzdN9Ff9uXBRuZHpS6qzPP5BEmFBePyH8bpiodcSzKCS",
  "key48": "4QYDxrUNWqiEvf2hZUDZMfkP8McCV3ipXeTqYPotuwHQMaSjZxwWj8GLoc8BDWkvNQvtxwgDuHcv5C1Fw7ZodpVx"
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
