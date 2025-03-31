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
    "4sDTjMp6gtxBdejdyLeyskab9Bf8bMMfWQMXxC33DmbhHxeeGErpgjZbQRv1vNgGAU82ke1goda3tp4pQfHezXLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SjFeYvKCTEg24v2DKTcvaSb8mBtkeT4egv39jGjsobuVA4hEMRw3ob44JAfRuKWGsxUqxwxPFGCWd6GXBCXpzqz",
  "key1": "aD3gv7bt74B1JC4mMNmZeCxXTyKZtRdWoiBXWYQgU3PdxiVnSDTrKFtZh35gYrmGBdQfZoTzvRUGyshTKQSoNCW",
  "key2": "4727QnP773zaVUSE4qiTZtWk5SXwoY6VeYG3UEjgzDErWoXYxsCSXbZucbzt3XwNb99UYQVrKBLc5jaEa6A7fpmR",
  "key3": "5cJoTHDWnHJuuNEmZXuUmaB81dWshi3wtdbu75f4CdCLvdzEonKyaAfGnfWzMV3AqNqTwWJHpz2NC6sA69HR9yrd",
  "key4": "2i1gTxPR7GrJHFfNdYMTmRusvgKaqfR6gFk19Sgn4HLmUALwbBGiYFm7iN4H5oBjGAwr44K4ATaeuheMFbWuHdh9",
  "key5": "3fG8oyZ61w2Bag2cPBqyVeqySu9crn3X5HLS3eitX2P4uPkmGjrPUBRbz81XjeEpGzYgvaGsGD3ekKd83m5GNcR4",
  "key6": "5fr567w39RavQmePgohPfKeiBb2erYE61RRL1FPVK7KKdw54zXaXWYxZbYFNzBnDDeVv68JzmvLmd4ggVy9RuVbW",
  "key7": "3s6uji3LFtitno5JRLTKHrhs7aG1Jw3YWjnCbmX2zVEgSBonvuqAknSGWVFwc2Lt1Z45vHZyK59Xb3RMzMo1Tpde",
  "key8": "iULeD56DdYU4hutPDvP6BGCRMFmrFje89RA37DHkikKWzEuyraFyTV3zXB3WFqiusUYvQ78RqYEEGvLq5xs4Nn3",
  "key9": "3LmqdgppqNThAn2B249TVBEXA1f35NCsA5qsyBty7YNo8zydkjqYhmMRUwka1sepqdifHyVRek5DzAVDCj4UpZRu",
  "key10": "3padggvh7sq8yFD1VjRMBbyxYtugzoDVuxd8XYzZsoGRSDphqs4mMEBRFoKJeA6tudJ1hFS2yRmyiPkhh969xHTG",
  "key11": "5ctfTiBHRhVqUDpHgKpkKcYDeC6Kc53r62LMqA3Qrqv71tnAxEWRy4dRp84QUpraMxEFDheijJ79FSKDmj4ETyQY",
  "key12": "4sPpUSbFHYANcbXzxH8FtPPqEUDXmiYjT6arDGu6wBjtEDSEtSvvpCmFk2ocx7Rn9DxZ5u7aXU8CsopTemyrKS2d",
  "key13": "5pJSdFGnSmbALbtBtQJrJk4YHLSY6QJtpvBR58xn6bKFyePNJoFaXDSbhiPJLquPtyoE6b5FLECFKsQ7n6gRwjYD",
  "key14": "34v8dQPEErkMcfcmbqrQNLQpBNxgHQc3H5ziQn2AHnCwWGFTMrMPZvwTzgfdf7yex1NpcQpm33czSEfDp2ehoZVT",
  "key15": "5cM86XXJWe5XmgVBApNAxkXurozjKMBcHq7VA7Ts4yP1d14zshY2MJws3ah2VApuxpxVRYUy9QPTcbDUYzipz3SS",
  "key16": "5LvsY1AcMZM5XDKxGiEYj9Y3JiKhmR5m9cK6Acuim1KDkAWtGYSPEEnCqEGXpw5pTnyraq2oCNUqLHn7czb5BDdg",
  "key17": "53YTqxDM62ugbWcQxdTsJt2xvYBqq2bTemBvGedwG1PUQA7R5y31zKjchr3vXP2aSY7kV67eVo1oYog2XbJUTvsv",
  "key18": "5zJcJDsNZsZsXPuqmWd2tHqw1ybtoCdqir9Wbidc8oawDcoXBLxTfPfNsgq99mJFjBrPANU9e9pznPSgJ2XEboVB",
  "key19": "5uBJxGg8c9MWL9gfcrPFiMoKdo9Xxr1nUMgYKb73qF2WVtcinuQ9sy7CeAyGZLpPG85En5ATgMnDbidKoqxk29t4",
  "key20": "2zYD3LbJ6LMDWyXqTvr38tKYoBSLxa4hAzPjBvNhry1Pp7zUo7ZyDdTg2XSJYpMQMfVRsUssuttYGcYck8zjvdN3",
  "key21": "5KjMNQ7xSMe1788CqbsVCusg29AJctYgCyADErdieicPULCZcSPv9shRcUM9vkB7YAQ1rUqF754Vw7g4hoXYwtb9",
  "key22": "2QhQo3D3tDB7g49rzBf9JE5ixcMrfSqsPWeuSoGciWC9LG9Qad6JJ43Y3kmvCf25SXuwEtu4Gua33aynAK5yCtHt",
  "key23": "3qLDnSMaux9sxaEZ7Mjd8Px6b8PjmgaWhk23trPPoCmTRPd6Ls3SY88ntaRSvxZGGQFSsKyfnyS8rAtYZofMYtyq",
  "key24": "2yWD8QF2VtntRV5ErXvHxvGF18oHznLuGmxNEZxGZ9HE8eiKAsnzZUB8hxyqMiDfauWh5mXDeW3YS2F7Es4DdSDM",
  "key25": "2L1jZsktMAus7AWDk1AESC2VSj6YfuuHb415pZ7uBeA3hsroHABoWoqvFYvTLdA3zsSW5GSPAwH94XS9FwxwuFmc",
  "key26": "66rEyrCK3vsiHYLDJWjZUURDLLrz2N6DZvCNdxW53r5eRnqWBnNDUMgySqXS2RupNniJUQtRsfwczSCbbRyxwTta",
  "key27": "5C6FxwSCAwHepYKcNsVhQGdZ5VUMvQzMEngBpaA8kp9DxbAowcFbLfwE2i3wTxVbyLSaaa6LnNoP7HdiB93kA1Ap",
  "key28": "3wFA6Q9Gq5bBngHh3RDPCoKGPWL4StmX2GKPPRheFz4cN3JvaDFqn5krqQLWQ1ffLUAVQ9uAd1sjSxi9VibQkQW6",
  "key29": "3JZngV429GSMA6DoDfyC2fErFYpaw8asY3o2XWS5zxzqQFgCnK4MyXoLsfBnP9MAcLnXH4gPmiKEhqkvgiygJ7sS",
  "key30": "3QDXuir8wq3pf1Mn5ugVhuB4TPwan44jVsmQjfqnbPSqNp1cDJqMkH6ZeyCUAxYHj8aioHz9fZZqhAwTKzua6krM",
  "key31": "GmVCKfzUzWg6AEAsSNej2EYzygmaWTFNgsNXReoNBpQHqrqAR9buwCaM4v1qunnnqsXpXovSiB3bvkRqkhWtCnT",
  "key32": "cbj8iCTLTUR4zEE5QJLu2irBKWyQgDdAtBMDyxXnTPuqRtPKyJsxNBBv5wHyUxiduc6m2ANPJv9JowFiFfHNVME",
  "key33": "489skTV5DfGxKh1soHZDcSdQeX7NC1nD9sC8c72W4z3438Ef8vHqBNk9QHhTr6krJ4tDycppzTsLPDqRiupgD6fe",
  "key34": "2FBErFZT2Qigo6eZCaD1kCVQkXLSaCcEYJAWH5TbaEHTQiS1b4yBiYGSVVwWuzZZVeuxpyoW9Ru44ChFXA85fnXW",
  "key35": "5k8rWopXsEeCD4UkdRJ6pVN8DoEChWxtYC1eSQfTjr1RNxXLiaL6EJEuDYyf1KBQd6GxZwLp3BBdHsKfodymBwZ9",
  "key36": "3zDaCdttRanGwzaqF3TwDbyXUfepqm1GpKKccSDs56ffdx1vMdPZcNo4pmNTrEAASYw1dvmUxsxWYHdh5NqXoXUc",
  "key37": "hss7gMTzZxc9sGYJhTvri9BuczM6xK6zcPJqiFS3av6Fjg8wdqaiyQpJRDEpKRqZ85aKLH6j3xyUpN3kdc11L4b",
  "key38": "fyi4efMNWN5VUiwer6Ng8kwcYfxEzdNtmCupE4vwqMrQ6FZfbPYKTKV6tG9EjG6ETsFXNg8cTKCwGFPsAsm8sij",
  "key39": "5jxu43pR1R6GkQFyuLFU1jBemDcRZ95yJ5x8tXmGcr7gP2sgsxkjMrEP4DJtNFynkRDR2q71KCrHn7em6LkEgaLZ",
  "key40": "3g1avznVNMxbaPFRUjSoggyd2eUoZPgqvN2tBF3qau3BJEu64d3sGE5fJGdvZVMshhx7TENY24Jb39as4hn8nVkf",
  "key41": "wyMZjSthsY3GvPaMfbQkVwmeptzLy4WiVS4puZt6cFASb3q4DoxbK61AbKAZeNveQofmk3WB28mMGar82voS8eg",
  "key42": "2AUmmu7VYpG2BJuHfZ7H9P3x3Yb42D9NwW7hijZG8WG28vNP7zRFcExJvLFHwxB85KN9Rt684ZVry5TXJNf8rsb6",
  "key43": "4YQdFxqDLrvsc4UM6FcPMq37u8AegoLyqPxZfwJ1HSZHYhXEVZieMzUfctSRQXeyEeZxKkABk2zWGSxFm6AnRiXJ",
  "key44": "4c3TTGx2UHXZzJmkeJ5ssJyVeoGonuXPfXCTV4NnbEsmDjLbcCunusC2H3oJLzVgCRtUoid1Ue2WfeUJs11eqSZd",
  "key45": "5LUHbSTaeQRmPNXWwZ9N8m26kzpckrJnAf2HQcrK5idV6RsGvco7ESVYYqQNhnvYaN81SSvsUjWKA5pwZseGo2pD",
  "key46": "mX2j1r2pmk2DPLpkJ2KLymJ6KXUUMCXUud1BouA94m4mbuxbdZfvCi2yLttbNHyfvd9hUeXcjDw4zNzsfKnm4Gu",
  "key47": "2pDn7533yFB1Jy4YCV2nwxX7MwMtTHUnW2qcpDLjDsEwurKa1ggjwMkSDhEvod3M21cG7BWmM6ht9BfpQxYSeRgN",
  "key48": "2RRvBRkKLh6cqJT3dimNNKiPtGb2QgkmXHYegrgCn13z7BkQG4APDBqYohbWUhkbWUuKr51tKuAcsPrYfUWDMFLi",
  "key49": "2FRs7oEe8ZzPVvBUY6Eu2ibM4TRzBWXbkNKp1cCBEZEtZPZivkSuyrJDEKUCm6qSD4C4koBDbdgJGdXntsiCwdh9"
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
