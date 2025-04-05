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
    "32pZKEtVdqzXk53o7UHb1xUTri4enNknMPQgCfx7Y7QoR1KCZ9JrC4pdxRU4kwZA6aEWpS9NP3WNmzzVgr5ExpyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mtKyDQdx2s5z7KFVhqUnHQaaTNXZmEid7ycQWcHbYosVRFcA93y8jqwFtx87Bt8THFKKdmAiQdT2BKA6qx8cP9Q",
  "key1": "gcC3Xk9MLtPr87C7R1mx5zjm1aEn5fiGoXYivUGGFoZ7GpSwsw14Xdztq244RwbhbeoFJx2vvuTmno38A8VLAvo",
  "key2": "218dszcDAoZB9SgCQ1v7Yzdib5EUqNU6azytAyLAxBeDQhDv5aig7qcFYCDFV7cZ2bizMWxRU7msUnjtF1fiiJuS",
  "key3": "3qwGkbeu1EdDd6MvqmGqcCdbt96JmhFVDuZRTzro13tThZTpTLXoMAA298u9JDHWMLJEk4x6wy6RuoKpKd48xyZW",
  "key4": "3jDCNXxDM1HrfWBX1BXEnQ5kS1HsVyLfkRABeFyKuAoXodPFsy1c2YGNGkZ95rvdFuibDy245VphQYy1J7mxZVhR",
  "key5": "5mmJFBAhSZbrgRqoe9Fbduxbd4VYUD6NoisRoCRtU1ED6DVUKss5FN6vwetmGu7dHyyi2t2uuwZxeHKBjoq6Cu9Y",
  "key6": "4AzL2pB1GGLi48tUV2J9KxwYuXsc6k7HsPxoXozjQV1sTjejyn5gwRShKg1e8Qjp4n7sB2XS8nzsAjtHtRHkbELj",
  "key7": "3tkD4BE2cZMJKMZ2ziPjZhDgidWQJEJMqkDiCRAmKNVhJsLHSqCjPh84fnzAh88M4KdU4d741tn4xoKCKuLUV1n",
  "key8": "3hsKkSQPcW9WdUfKctzwnMAL9kB1kpGCtBFK75nJDQM88H2gkfCoVu1itLoBehWPeNTQ4uvPMNWwZdQ8hVNraSAa",
  "key9": "4n8wdi6PsFnWGy73dQV7htwXbtizfU79B2SU3tZzmj34eenHosBjFCXt9AKXG3AiEpsx1eBvx2U7QQkASA7iLbxB",
  "key10": "3LBG48e6DgjRTAWXQ1o2sqS6ajQVCqEdEvwTCNv6uQNGtEZFt4yEajwXEVkXageXPDPmPLDzyRsNNzgJCb3AvnUG",
  "key11": "2Bc7RZq1kxDMX2VidfB22d14WwPpypeczyrvsDY6LuTRrWYAHCTwjN3k76bNSR53s5Aq8NgHBhWwiqKaY2GMXEuz",
  "key12": "2bQnm5t8R5MrwAecXjdzdmzzBiPsw5VRqgfa3ugS37Te9GtWRDtCT4uLRLtiX7ihG24atEqEAeYxRzw8eBmuGfHg",
  "key13": "4RGds8mhodoue5LWNfhBCg7Y5mW9EyLid6b3mcagWR9ArMaXMWxcQQonWU8miy2CdCKaaeWVCji1b5u3XM4sQPmv",
  "key14": "YvRRgnJMMzwQxKw3tddz1DX4LajJdz5rB8WT2CJyoet5J1EMGoo5A2bbSSTnETnWNx6v5Vmpo8ARZM16p3zFEH3",
  "key15": "64dzpe13wQKp77aGYvUu8ZWAtPVDYZCxGrsYAiDgd96zqNYNt9mK7QN1ZZECxJ6YS2jPqfaHvjhDZgntrjX5nJfV",
  "key16": "3P2vNC3ethaMUfGTU3B7i3hD5NrrR3G5LhPW1jBY744aaXRJrfTqwxCqwrZLh4qDUyL6cEKx3ByzwPy3t8Trurze",
  "key17": "3GKTWXimjcHRdGLFrYzUgdsriWNUMU8KbFz6U7onEshDrWCfdxUCk7DGeY6QwcC7xzwkQXCHTGTEP7HmGuvFkRXk",
  "key18": "4wDEbzrEiE5FjgXi9NLXBN3eirqKrrbXgQeCUQxF2QDy4b5aUgHey6DcCt9wVH4Eimk1iLsWpAPppraXjyghVqsd",
  "key19": "5skWcTS7mvhpLmngFwtmtmXFFi4BZuDUJ9UXd9czuxPox6USLLEJrgZ9PtGd8FDaKLX3xBEXmMqJtCwFkcnXRE8S",
  "key20": "65uUioTNi2ExQv1yBLntFgXTxZVw8uU4T2pZyWnTGLreJGJWrLSCTuXeaeNJGEyTqQeLHc9JjDNzvkZzoTRmjQPR",
  "key21": "331wrkwEs74TiR18VP6eKxmG3pLL7NnUveua7NeuRoVnGH9sAJNnGw5yhLrpE4FQnkpZ2sTAyTGiNXE23vh2FXJe",
  "key22": "e1PayyGV75jMXPVJR1SrmMsrmVpmWfJi1CJU4zb1ZQNYkh9ea3RXU2AbNxNDTRNGtdfw7KY6Qh6nxkG8Ph9wUbK",
  "key23": "2DQEkmj5gWgnVi8jkCCbsXBVMFJbJyE6evPosmhWgMRYownWySRZyPNvpz4iebQuDw9duG5pYAgfiLfScWkVvF7d",
  "key24": "3Yx8EQXnpXoFdLLjdrbr3UWZE7mM4hXnmNnVVv3ha35guEwgNZzeCFoJt1z3aY5ew18qPAkCcNcmwXrqnaHJ8oTG",
  "key25": "4AXaJqmAJKhUryTfLxfJFJpsB7CV1X86kC2b7g4PcixjDMTN1EF6kzHCs3kkyJNeGBBwqMR2H6C8g4s2DXifsNU8",
  "key26": "GVLgsfg512ocWYY6kuThJGMes8zg1M2XChpQjX6Q4wpseyp4Crk2pkPPkmnnhEWExF6YMoZvpfoo52A7n71fZ3v",
  "key27": "LfQXnzpnhHST7Vwk46qdoCe5NBXmnpFvMK9wrYN65WhfZ3RSPqcCAZURKF9qLdMEVQ9bjywzhr3HA2GdHdK3K1Z",
  "key28": "3WyeMpAL1Pyg27mP4x7RteyzkC4aChtmmNrbKoRonYifXeps2JCjXMRpMTb2F5cwPsrDxGYKYuLic4UVE8Z9G9aE",
  "key29": "2w1v1xiGYHG27L7drpSmHFJxiYMYaDF1F2hHi8WGFRJKBiKTqgoi2cHBCJa69KSWrmHR7t28HEAiyfZBBXDgb7qF",
  "key30": "4m8SeAUoQvyA7qpNtqpq6483VCwqJt72Qs6X8BrpX7ugTskT1ShyJisENVF4SS8DcQmkZVw5drGHYkqQ5DV8B6dN",
  "key31": "3euxGLqbReeW3k4ZtMAers6vNu2MmaacB63MqqfW2p5abrHPWe774escxvuYFFA3DVomeMEgv9QMaThQtjeTh16o",
  "key32": "452QJGjqNEbrxZZXmPe7DqLeD5wqeW2rhYyv6KfGW4JKoevMPTD9wi5jmPTcmHm6nXaXAFUqUQV4UaNEzi3vfqhs",
  "key33": "3jBPGdX5svjbtGH3Qqhhgrju2SNpbi9RaAqZWQiLPCkyYhDHNYQ41JqwjapcEwssaJnH3w72nsYUM1KMyCwMPghZ",
  "key34": "2635G9cEzgm57hBatfm72ir24pxNTDCBC2u6ZaFXseUK81cBjGcTMTndaz8haMNJhcxZajtTA7G1dLBtMnZfexfs",
  "key35": "3zBrzdj4zoQqXuiugp9i3wU6ieR7hQVEBCo1ckAcp8tDRjtbuUmuGZ2Dwf5HaS3Su3c9FCVpCU5L8XN4bvrkJn8L",
  "key36": "qd99wQY3b3ZYkEudbPBEk6TsTvbdeZqBxZ6RrJhKkcoPM6PcQMk3WzkQhySvDs6ecn7h79StLt9RbLq6UXtG3Ti",
  "key37": "2tFRE39CMmVVCuKV1MuZ255uTESLBG6WMaymzwcNPWQg2cDrpQgbzJqRsuJVAQwk91gWDqTxZqDB687aGgEou7XD",
  "key38": "4UMxwfKs13YcanmJ8UFcGwHmUPqG2v9GrdM8P6D4tJRKSnw7RRJ1EgGko8WZ9qNFw7UcBCpPrRTyhx7GbnWVY4kR",
  "key39": "cd49AAsimLxXBxyoUHY2xLbFh9AaYG1SPYtmnKBVBsi2z5Ayf8VsFSV8sido2ksTo81bbU79KL3NyWrpz4CuBig",
  "key40": "63mWT7VEX2FAs6XUAFKSNchqG1tVJDj5jQcoGR5kkMvsmQX75eWv8zabXQkt1rq3d1Yz3jTv7c2jJgEZKU3rPu8T",
  "key41": "4LLBdzFxnsmw75iD1Rb7JzAkUMrbg8QnPM7U4118rTLLTUjK8c8dmz7GDimXj5twSxvti78qhSdCBT7UabtQ7Xmr",
  "key42": "2tuvbYHeBU4YEWovZqyyM3NX5hT91JZp4HC3QekGQzrDdrzY1WWQbDXpsZFr2mWbMQmvTJw19kau3GjKCSCCw8Re",
  "key43": "2dmjMnp6Dxx3LhPCpPHauFk3TBdPHAgP6wXPAFoSLpxL5Ty9g5VnVXgCoHc53CMDkMk1CHjCwQcDUaDrvwnMcrWw",
  "key44": "2JjszvaFx5yTkAURtB7AZQzNxgAtthK3pRYXnN8yWVPwEXebA5YxDdTUrD43MXXNGji1gFfuhs5nam49w8eWFCHH",
  "key45": "3qXM2Ydt65G6XmHw1E6JnNqD1LbKHpwF3gVVCmN2g51CxBTiieo7e56NotXscVyR819Uqmpi7QL1GxNT1kBSkW5z",
  "key46": "3zuecrkXjzymybivnaKj9qARLLzQZuB5RYcjDRhbbp7Anoh3gjFM3ddjvFHo2mfUZ1gQYgcRZHDyt6jRUFjR7vjC",
  "key47": "4drxjo6NWSAVwPyKm3dj4N5DngvXjwD5AaSCv88iTAecA73P9ZJVTaUBirTzc5duHeWeHJMctwAo3bLuVzoFRz2n"
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
