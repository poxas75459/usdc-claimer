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
    "5iCohVTMXzGyw2ghJSzrvme17QNTF9JTMEadXXBHkLaen4vcpewAcaYMa7K2qB6TtECCFmA1y9HodvG89NmfhVaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65g8ToYN16qpoiUpEkHdZVc3KBFDmRnxVV3wDe4eK2GAA4YNAG5qFJwi3q7ht3FNEyMJKzuLk8u2NjoCPiSLkSNQ",
  "key1": "3v3PhgPHGcMCrAhEHigVfouRc7BEbhkUmTvmwjugzuQLLeNvAH7gAdc2k7WRB15PcA9VD1ZUaufL9a2Z3wBtUMLt",
  "key2": "gzNYWP7UL44tekNuRbZbMcE4cG9grBejFMHo42P7TAU1wmcga5gj6jnc2ifTcL7V5pNJYe1K4W3fyKCadfcfUgp",
  "key3": "2WGmiAKoyaVezyQjVS6E9tGJAtAhj9aC57M5YLTubF8X7kTW5piy2FXAbr2VSGBAhVbK7Z8jzLqy8NBXboFxcPRe",
  "key4": "2QP49bcpkVtsY8dofUPPijmMRt3orVJUVMMheQNpwZxzhDRAuDbW1eZBfZcnsaSotAJLpjX656949roG9XT583xt",
  "key5": "44kJbmKfqxus6TQTKFEjuzSqMbAmkDUrNxfTrjq1puvghWAksGzqKxF7vvQqHYDKAfwCBBfFRyCPQptzx1y2JU17",
  "key6": "262eLjR7z8jLzTpRXpxN1YvR1bBiEFwg2a4VdhuBCSq7Pr4cKubf7sbFvdP6vyDPb8fsRRUvWVrFjNRkZztFEHk8",
  "key7": "4Dx39d2cYGU51HNL9WvXywA1DmSb6hrJXRjVBSrkVWp2ayCD6jH7LgaxjMydpXYyXveu3dVdvRxqqkF4jhd8FjUY",
  "key8": "3zQUcPqGNfMw1unNM41erFup1ws1NHzGE8a4L9ByaFZNQnLsgzCioK4j1qALCsAA2bkGnEkFiHKEG9VNvovkS1qv",
  "key9": "G8qCNNS4mtPxy8ZF1TykbsE6hyujkXhSmL5nYx5RS77jU94hg6eDkHx769ozh75J4PBgBxtRzN2NyN3vHw5ZDBe",
  "key10": "5BwTwebRA1FTyCRRk5XARwUAn8aHvnwCtXs9TJbb3AkH36feJGfZNHMZ732wV7ecsfZamYZLys5LnZQ5B1CHA2H4",
  "key11": "3geZTmKR1jD5rP47kYeggUhzTK52YajHARHEWEN974o6QHY7Cx3fTbnSSqCwEHQvSwApZNNK2VF69P9zWmbwWjoi",
  "key12": "4ozH32NXdvhwoy66hxKRjnt6FhHxfTAvFwUhQmsAUB4shSgJvzDje8JE5zPHrA16xFVTtz4yU9Kx6vGwzkabbHdS",
  "key13": "4gLZf7JzoXYbokn938ecSiBePjmzBsofr5oaDaDxvQ4Pd4jkAyAPZDcThmjNjDM6bJsx5m54ip4tBsWCqxesVwPJ",
  "key14": "2FFwcvNZjTtDvWA4Ji9HUNF3asvshFeGacb4EfUSqGV6sKDb9DWwSLDZVqzdivPG2ETQwhSH7RNWLzChWY1kZik9",
  "key15": "4Q2m6CjqdiGQWhjf3UCKn14jqFzSUzihPuczi2hLSNSBueEdiMc7qtfvdmSKX3pwH1atYEacbazSHQxHKQQG814y",
  "key16": "4hrzykrRdJjNvmDYmpuWWmXfTNhCo9UhyNCm9jHtsM5pfZmBFNtCsVdZxL5UmXYgssgLm7QNUJDCz5cpzraWXSv6",
  "key17": "kB33gvsE5gQQLFGJurT2dQF3JoeDKNBFAGhAhkH6gcG2wnziYXqQ5qNFQhwZw16ZQrijZg6rvF49RQTwbMymoAU",
  "key18": "3NnVYFwkkJHqUeizHtiWaLd4u9p1M5VFiHJpom8raALZXR7REHyzi8tvBduhrdNj9Jv8t9z5gSMcwjBtjSFQ3AsK",
  "key19": "3rrKXiuyGMovpM9KHaU76Sykd6giGX1W2QQxPna47oyp5GkwkzQ62YSdt4bHXriTWj29h5qqQdmCUv7ngjQLn7t1",
  "key20": "nvBw4k9uh6ZSUpoaVaxzEKQf6Kj4SzWi1f13XfayXkkEEzg1EEbmDAyXQd7Tj8cycbVD5VtuLMoEZbzdJjZDFeN",
  "key21": "2FLbf67YM33Ng1efW7PKqbsJg5oVgmyiLrU293vuHLM2AmYtZXtkQk4aaXLbz8AwqmjEz99tFfm2QYW7FVaLv17b",
  "key22": "397j5QUJSpBrEXKVpHY65AopvnArXNm3pneXEibvZFo3qsBNQX8jdUFHUQ3nhJUAEndUBYaAWbEtnwhpz4ifuFND",
  "key23": "3U5K6KvDcqBBcwLemJsZXPdhAzQEeXSRkQVxkqdVhw1heqyQ2ueq9DDLtuTbHNrdyv86QY3gyBBpNcVvVHy6AmE9",
  "key24": "3VdAnLDQ6JihGrDcLrMWKLPqq2fbadCZzWZnfinHfG5LiScTT9WqUTYSwBKYNQcoTsaPUB4WEkVQrioEdoJt41mx",
  "key25": "43CwhnFzLmJhfwLzniCGMBEDZTwkTxChw43FBMYbBDeoLqq4wCcSHR1QBhBkEM4fasG8TsKaCnKmXDqyRKbYuJmL",
  "key26": "4imrb7fNPBE8aPbp1SrtkEaGL4Gzt64xWGy1pYamRsRk12b8dPZoqsyraY3LXy94bX8BRYgtubmwc2XYhT5YMUj3",
  "key27": "4gZ4DCM5GXB1oxo67M1XZJXo7CHMW6d3UaCfpAxJBhQ8nvVvkYnp2HaAXy2oRa1FjY9sMebV4mateJtU8XjSAbGw",
  "key28": "7SCXD8zWRYJbJk3r5k9MtyeqkPiXv8NJGonVY15BBtayJ8twFnyrcDtzCZG9YZpEgqJP2iy5u8Y3StqoArbL3ab",
  "key29": "2b58DdWUD9uLLopNabyzdVsXwDkKiXjB83H4G1yYtCMjipX22WqLwenUvTgHHPN9tFWaazrpiwWqufUbcFFz9eqz",
  "key30": "5noUman4ZnwmKDEShY6DNFhEk3SNmhwvkStFBM9JCCKtMnKq3gngwYMHB28CaWsQ69dFXdfqj6shzan8i9A3MgX2",
  "key31": "3WQwMxdAfJEuvfQtBkEGuWMnVo2wZmcmNbTMKJKVh813dqoP7WeJUPuyLUAzpdZXshdC98Mmt93c9R6DDEUcsdiM",
  "key32": "3nRPUaXQCPWK3CXsgBxLNVFcY8TS75tNTEtBjL8hbXwQw5FM3sfbpxM7JyQ5srJ2sHcvifVPwCxEx2ALd4x8TsnU",
  "key33": "4kNDZekEfrtNniLEBUAC9THUfgLV7NQERwdcc39NfwiE4tVLDym3QteBzX8wU9PxCGHP4jn3ek9XdmNCg623MfVR",
  "key34": "3mYX4HCJPZDVFny9iPVdvKXDSF8Ei68AxnC8aueueyHShC6zoRyqr7ZsmGVapq1FjXRPuZ25NTovuNvvhgqUAbkC",
  "key35": "5sGYryagfgniexsmxuM7vbuK6sb19nKH83E7G96WfDvNSRic4zgxkPTAr7cbu51tqropbiSDVJU5krGiGXFoxwm4",
  "key36": "2YDkApCkLvuFgttiYuL97hPQrJq6S8BR7PZen9ifNhmsstNDrev1bxfQoGuPDcXNsuEZrhAP1hkAwS2vn1SauwBU",
  "key37": "wSqDFeMLwmtpbt62TgSu4YK4CdMD1RXToKZd7NKZPp9Jm2ziCiWVrkKxYSHTpwJzSfVwZLoARUbNrukEjWH7ppw",
  "key38": "5cGGa2sDtB3iGp6AsPNG4a5Eqd17FHZGxUAN7N88uJZ4ebGLv6thVujb4eLYyNGNZmjG8xhZrYUrYzkhFivnogjj",
  "key39": "25rW3cQ6BHDyoCn3ztyNw1ANUNZxJTSJs4rika4SSYgmurNvSQ5sVuGjoLuzqFdueNkRAXf3kP1M9nfs98dV9pen",
  "key40": "47UpCNZ3Q9hGVa5R2ZuZJAircinX2g1KgU8mQN11kZjzPujJnB6gQvaEqSJYLY4LgjzG9JoBacHRB4eRc5jAu93f",
  "key41": "5FyX5AKuSKsa4mLqts4VPNsk18nK1f3rud4bNM2hD5oEvDKjF6uMbPyxRCCX1RiZCp2CtPUdmRvNftoFZPKwh7Kn",
  "key42": "uusrvtQL99Y648AymzoyFqqrKQo1PGP7BK1jxuFqWuw3hredWk6aXAbaTooqoZc9J4YbnqjXKQCBHxZXC6VCuqC",
  "key43": "MF8CsYuHqRjBTEQGL9Zjk7VWTHBcKPLoGy9v18QZgMGahG8GQ6QA742pNecDSjtb2pxmkN4HV2pYkxNm5G1iduj",
  "key44": "4VppJ7S7SXEmzQ3zQTUdSzCYrAoqdRxbdnYwejM9ytRFGyTCrR6CXAL8ArDPbUQz5ahxDvUWaovcHVNmVqmPxe2E",
  "key45": "2WiugT7TbMzHApLnUFLMnFzAEDj4hBBUSzCC22EsNngAnvcZatLTJEmJQtY16qzfJ4ebAPQ91LMeosS6Rf2makCA",
  "key46": "5rtdVdUsEc3YpvyWDfuBo6RE4Vdy2MwRtrdHWw6aynLcwpeL8nJJdP6x3J2rbDYMfsk2YtM4FwvpPdtDKK4o6G9M"
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
