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
    "MmB1SwAaPsZiq68jMLHkxarzJwJE4Eg9apAaqWWjDXSLJBdrSxw1Q5HvWf8k2SqWY1mG3YySqtNv3PrHxQC5aqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p1G9bHFwfTxi2Mv4zMTxvQX4cdDvGZS1N4dmykmnZZYqkpchRuq9LsatCCXEijygxPhp45cpHeCLr5Xi2SSis1a",
  "key1": "t6r6ma7TL5XcKrjABJtEnWrNcstsHrB7Rcan3sQtJpLYms2FUgjj1ZPSpENaj1NhuvnrXgJWYJmdDR8j9anxU2y",
  "key2": "2PaEyZ4y7iyYjyC8CsVEUKjxJcCu7gQ9dV7RZRQxwA7CfZZMZYbKwParhp6a5cac7ZLXMXEmo19kxUJWG43YtaVQ",
  "key3": "5bNFJCFwCUBo7DmAE8p4skb4oVNBohU7bwncKkk6drpULDiiqsYYNRMKTnEmGpSe4Jwn9WtNoGBsQ2M3h43CcSX5",
  "key4": "67b78dQ6dSdGSnmBQXM8GDsYaioPNnfXPCqbVs3LaG2wDc3CD7UApC4UutxoXAsGjFT9q8xecgsdtfuQXyjpribG",
  "key5": "4CbBtcEiKrDMzMpNu3SH9BjqjzTumkuNs4N13HQoq4cczTFsnuoYhBqo1Z7zuUrcCapCg1Kc1Rf5rF5a3Tk8tKLr",
  "key6": "5jgFou9Qfg34uSQNemJa9gH6nvshsL1P646gmsmis1qtdKB8K4Ndd37oVBDqkuaaGu5hGQJ4juCQ61Bewiupfs2F",
  "key7": "46cDRjsnBfRPGCadpt7TRR23V3Feiduf6chGhKUnuKvi9tNtFSvxe5hFxSbPZg2nRZYQ6t82kk5dnRfrtGZwZqpn",
  "key8": "2J1C1iLjAeWwxv3oKCdqCpjrGPWDELa4RV26GhBEo3BGr6BnxbZFCy2xGPGf3vandrWMPF1KSEiey4e1vHjq7Kwf",
  "key9": "55LjCFaWDoiUCt9XGqTABYzYmJSf9hfuwbNv4gZ2WWTwrGQo8MSbZxMHugHquzzMtxcqqdnEoHAFRBgoQkpZyJqh",
  "key10": "3ofx3ipwm94sWEXtmiW3Gqifdv6JvSH4jBwgBYmBiLYQBzcEKNb95NZw5D2Y7yXm8MrtmuAyHDfuuSZw4sh9v93R",
  "key11": "5JxVSniPWHsfF5y7qhoYbRQ3sdShKNPTH6oXoYXGWRfiEgqjNkkYZaoaycxqVUpVD6Et9L4zBF3sNDZfCQv8frJX",
  "key12": "FoC5L5fb5vFfHBcyM7PkxFpXmXf5Lmp3xEJ6kRhh1ESiMVwXZhgkLyWcrFFDJSPqdbsEVVefcBpFYH2f68skmWF",
  "key13": "2NY4cFJpXvopiN1fnpoVZL7ib6a21E9FVxnkDS4YR4wpPTqbenHfPkvBtrKGswtZH2LJWExDb4Cpyf8JkLqtSbZc",
  "key14": "2aSH9sHuBXX629jLTCG75MZsTYFMETsxZdyK6vyh4gjSNpBuyD3TrvwiBfzuzFSi6SJpknibvW2GCv4mrKf9XPgL",
  "key15": "2y3cAFT6PkzdinWGaspfUBZQnn8irt1JgBp2VfY6Zjv8GpDBP1jxGBjoK6ZuBBsM4f3S6mt6LE9p9Z7d6F7RDgwC",
  "key16": "zHWXJYX8QvkFAuwnTZuhSjWxAbjSUDccGezgVEf8TuxJ9tFeU4Aey55XfRXCmqRfiMn8MDQmmpwXjCupY8Ujdt3",
  "key17": "3KY6k8Kd1zNFkY64b3DbS23vCD81ondbysJXYmsfirchgBq21PPf8EgAq6yZga6gwsU5aAE7bUQzzFgEA1fgN7jK",
  "key18": "5fzxa73jEG2ukTdrxay8Yfkmv3kQTXnaNZjvU8LfC18LwpdXtuc7P2eW5wD4zNhx6PHNjfdgHiFvQ5biG48h6Eqp",
  "key19": "3nJWvo85NDwt4SGnecSUdPhFXszi7WTRvg3MjyRGvXkAt3tWBzd8WkM376ceQiD2VqgoG1GB6kHUeqMAekcaYFpK",
  "key20": "fjSaDd1htbtxNXkTBqEYQMfyrjVDiEcii2QqqYhHwzZAq8mo3AurYMaBvgP9jn9wvd9aZfGzZna2PWXPc2Mu4Gp",
  "key21": "4pkYKLRB1wo4NRDRXdB3egHxVr3RS1LxABQyZh7LvXQVBup33gRPwcexuHYvtpqJ4YLjmZXAugupWhASp7Ni6KWj",
  "key22": "4ENPPVpEGLdy8FjAqDXGgtBErgNECUtRGGWnW5qhCacUGVsNXbCoFarz4jq52KviL4wdceZMrxEBdfDCNr2cgAUE",
  "key23": "5hv4XSjzLZcVpXALzTi6pJJJGYr6bdwF3EwyDrSPh5bsp75vczHPrfzEwgCmetcv1KKy9SpEdk9dz7FF3w8augnh",
  "key24": "q4aSNi9xBFxqDQUvTpxw1bu9QDRaz6s7KhM8kX4kdjj2Hh23t2aLBwmJSG585bhMUAp35CAr9DFDg5i8EheF8Qj",
  "key25": "hNvh6F1yWFFEGEMqYKNgwuKpu4GviBxHj2jdCobrRjN5r2bDug1Emmiaxrbe7tN7Cw3yKnUgXmivU2cY4uxo6SG",
  "key26": "3nL2SY2qZUsthASPMt1KJXU4j7uj77L6sjH4BkUnjRNb7WZUE7X4yZPvbhMw8EnnL8LTxvo4Vpsx7mEAnq4Y1vp3",
  "key27": "5f8MYSM7xwpYbnjfwQVzNvH2mKXmuatGf9rfSuKRr2d8u89eZzRpojfaGrh8ffU9H5S6Cg4ArmH3L3sazXMjSAVr",
  "key28": "5RZHEd58v9PQfWLed3454SLcaAtqjvrNfsmzagM17TSNGEh2Ys7E1hoZHAxcgdGLdDQ5ZmH8eY7yk9nEiqowRi4F",
  "key29": "3ZkFSjmfUYrD6XLXCHDu6R2U5iFhN3PBhffCa37JGjKXWB5Rw5VMMUVVBHEjP1QHwbXuagguHHSeVizdRpZXfSt",
  "key30": "57PRSuqfX1wQL9xD4YRLzFrUxVDHtQzzTzFQLytFTqTzAkX7EsNvDGeqdzzXEAsJ7F8ZWkbPJJr7ARyW8nuZjXNm",
  "key31": "EA1ujRC2cG5T2VFmRNfjzeyvVHaKhSr14UXGzAajasyoJhYYNT86nFHMhSBPnBXt9g4nJ53XaMrMEhCtSzPPfyP",
  "key32": "rkRczXyfo5tHj8cod4vnf5hnjT33rTDktVGUa2KsZahTXrp59cDTBtV4F2AizX91Sn5fyzCkLVQF5kguaue6yUH",
  "key33": "45o1buDGgV4gHJte5f1VqDASFKYpaxrsH8cG7iJtmXREiooqCGehBJZ5Qgvw8jqgQZ31aAkNFRAcsA9SZ6RnKf2T",
  "key34": "3V7NWbdYyVA8Q43oB6KdsUT6S2w5DYLWTSt8X3tDX8veXkptjtH9X4tV5iAW6fhodibUjrVQLXCAe3JYowcUwNoJ",
  "key35": "2cVbTxyqYiitASjt9rwZHtugWUQboB83bvnv2tJdE9yEunenjMczuA5qVcEcvDoo2HHkmYseS6EwZhiNF7nqaDyT",
  "key36": "57kUkJm9FWaeRTmT3grUYaH526jXKBvxMnhJz8CebbX25MDaMKmJXr3vAM8jpfRhDSoEGzGWrCHqXMnx29T82CW5",
  "key37": "5uBayYvpZ8oVgWwkjSktXmMB2eoWKUdHKTTUZw9aGLETMr5mSY7uCoPjpH1zQ9F4BxBh1cci8kpRuVCxH7MC5roE",
  "key38": "zF8tVFjc95EjEfqVamYJYruC1zr6sAwB2y3CE7KZRNJ1dcRAuGCBYWkh7GhX39jTbKKTiG3W3d4LR6WLP2mYtD2",
  "key39": "9a7tNk3KkLXjQuHF1u4At3FPSQ2Ytdjsifx4y2446RN7C2yzdcGzz25TjYJdksspfawVG31FMi4JC9WWo1N41hd",
  "key40": "5wv5pguY8Dsh8rDwZy3bXu844oLSuLRvfbe9ekSXbU6su6DzrkVg7fwvLT9GNoGWkFX2StQuN7tpujqzeE8EUYZM",
  "key41": "5i8EPaSU98Jhn7sczM9WvW5H7EUAMQxZdmdJK5oHoK32Nv6fMoKny2kgHP8hLYcYjBcp1HrfKQ5Q4a1Nuv5SU8gP",
  "key42": "4wUyCM8CC6q7D47NtHQo7D3GxbJK1QhSUaMommVCMqJm3xZGQFdW8gLXt3k9EN2rDDXoJphJXn2M1Gr5B2WMoTyW",
  "key43": "29iW27Fes5adn6RQ1SjmLkqCTVFrWGVVBE3UFpc2HcCSWZzQY3GjoazaE8sMrHGKrjJZxE89pKa6uXChptNrRtDe",
  "key44": "QPkJ9xTUBsXnBfPRc1TCuAt8TiA7ewQAMYpppso8JvGPK3K7SeSiedZEFnyc98EzQB4ymfjP6n2iW4dBWENLR27",
  "key45": "5uEETJhTBeXUHWDPj47tvrVD5o4dqg6tY7q5MA8cHdEKQPCMMvwE61jxT9aZ2GhkndiQf45zbeGFHKYMkzAwLqt3",
  "key46": "3B57FigyhhPWMmjSMaMV5hyrUduDn8cTHdftG5piem2qAkjdJkjRJcBDdhKTPihe9xuPQ2EXgdWjiEggAsMbZTvs",
  "key47": "4zss1FeBjgvzSvhtuu3xVGfroQzDPQnHReU7ctjdnuSgXRrA4BVqeA4EUdARuoSt5eouSWdgJSk6ZBU3zEeWhMJh",
  "key48": "MADqnnsoLyj3uWnPhV5tdquvstJNhPFn8ewQm1SypRvb59MPhZEqRc6YgoYe4qk4CXxFKWAtZwXRrAKgmswV63E",
  "key49": "3k8P6g7zeAvVaGmRgafs5WkTQntqMQSr8cFi6q2Pf6EzzFCiDG86YYzPH7Bj8kR7yGSVScnaruSVkmLDzYGc24LC"
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
