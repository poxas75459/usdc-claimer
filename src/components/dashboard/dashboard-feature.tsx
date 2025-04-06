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
    "TSjFCBtvxrfsXkri3trr7shEXQCUEFrwehwKkMUbzTUfyMAVgtb5v4fr38AVcWDTnndVdURpehbympPRswZ3x8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SbiZa9wJtcmeJpAgSMZwAWYDXXKvsE4znGeLSPbQgjBDyWwvbj9y423mMLRqjTcYnWvmWyQr1rCQ1TPEVEAv8G6",
  "key1": "4J5S2mTYprtHKxgYywHV1QsFa41onWvizqjY2pn8z61zRPwNTtCWgbxdeAmhJS9zwnKeWeresPgjvvukWdHkQsdo",
  "key2": "3iXTSoVLJ8fykSSZWq5PEYsgeij5v6R8T35uKSx7NZhkHLT3eLirEWSFbaJQibGZKqd1CGPnchtzaDqtr1ksmscE",
  "key3": "4CNpN3euNBFsCa61EBtoCVvQjuPnXbnUQ259HAimha7ndPBo9SGVwABXKk1xN3fEYoEbhr7LQE84FSfdijzV9aXq",
  "key4": "3jLVTJMufq2Ywq3Uv6a1K9LTmrM5qyK1d5t3j5GPKdwPGYEhhgBJ5HRWmJy1X4vXo8J9mvevPrdHnRPh7H7UpTvv",
  "key5": "4USYpokPN6QFfd7v9hsDqha5YMtUpCES3MoExprQTzSrtgQyPkRefprBj1VqVcqY93vLneeJAHG3BXgXyjBvZbXc",
  "key6": "5KboQFsUD57kzfWsJrrCfD297JETacf41ZeTZqexwen3R219WR9ytY1tDTCBxd9rDTF1iAyM9WEz8PFLedKDhQSt",
  "key7": "3b3fsFymGxT4s1XnPtdBY1NmoepL9cSocnrpoiopKw1ipQSZUhynmW9TbU5ZfpJnWaUwwwhhdjr4HnTJuM5UnKZ1",
  "key8": "48WPUJPZ5H7o3NrMh4pyPuVwomzhoxAmkGustZfSinnrZkHLzE5XVLyjQhfrmCHYWYDkRdiswsaxbxqKWM3oK2Ne",
  "key9": "pM1My3Wj4r2HDveYqsJRY6YkMWNJcMiGGz1J8cC64gGezjaXePWH12qavvcy5Rg4dfPNJ9eKNjpeoH1Nih7Kyqt",
  "key10": "2BBHq6BM6tBg9kvDY6QhKinVG3ddeeCAAfo9zSBEQESZBz4PPtC6gVxnfMtMaWRw8PxewB9HNZhB8WmPyXLq68SH",
  "key11": "UV3JDCnd2rUBJMsSm4fwn95niAFDpFucEpyBE6tVQxKPsT57VGHBPcYfSYVCKStDMSsdSNarXMCWQgbc1ztNg5k",
  "key12": "3ThjH26XKzvgxW6hXk3Vrzq9GJDACRnLwiSNiRNuapSLD7GM2yVxwiWx3UHGf3qyZ7ikoe5PAx7xNxbojNAMPmK9",
  "key13": "5F4MEZTTWMMom95MteT1W3GjcC1omBdkHBUaLTpmgcAKneMRyjyABSU56ctmNgXBRXCStFnnaQYhgnR2aT2M1xbz",
  "key14": "4h7fBSjxSaL5jTUS54LWWkzEQQeAJJmxvBMQaX7aKFJzRS7zMTpUb9WmwKMN38hEjxswNoVGsKE7uGUTJMu9sYSm",
  "key15": "28CYmsyKNePvRmvfq2LuPG7AhVBLL37bQsDTKKq2K8cdn23osRLQFupJebtUcssZy6FFEddVeUrFrprZtMBEy2Wc",
  "key16": "3cipCkSEynG4tVqLv2oFkR2VHrDi2rVmS4P2BGXhHbnETsbj8Gu9KdMGPPyd7vdQdduVbdXv2hVXS7qGDnSQD9b8",
  "key17": "4pETtpAukSh1WTK79rjbrgNbAp64h7krxboTLgT215fzjPzeUAQMVJwbAHRForGfRQieXogvk1KbqH2HpoiwPMoP",
  "key18": "3c9Yea3KsumX7HSZPUZAZVQf7B1PdoMoxFBocKRLz86mJxhPJjUMdCz37DkY7Y6oUjV2s1cnbfT843ng2wY3x3k2",
  "key19": "4MGzLoVAGbyWkduZT1UVE5qJ8XGCRTT63cLqteitMRfW8ErbT3scWUqbhkMcdojZvWb6d4BQFWhCDh162i3DPkfH",
  "key20": "51Qb9vjbUsSBS9ha4SQaxMUnQCD8pMhmu6h21uFEhU6z3e9NCKmJNAtxQ8SiBRpEwiHM6Y6rDbW79YwCVGvPeFgQ",
  "key21": "2aCnEHM1GoCepnmFEpG8VyTghEni74JJUxfyRXUndWFT4Mbx1PuXAXohpouTCZiWUv9PaUYvW7TWorT62xZ4vZ7q",
  "key22": "49v3QvJz7jnhyyZTTcJSsQnUps8xNKVxFc2ofng19qgWq3oFVpF3WXWFkzTdAcBDKADuhjF7qXCJSqckerC7y9ue",
  "key23": "2yupzbJNZcSiWX6zziTNA5X1FyFGRb7opQyg4tX7ASu7Pm2ejU127ZMZVc8byhqx9eHMNaHWg7HrNMJvLJrqFGKD",
  "key24": "5HoCuGJimJZGkMW1zVg11jbRCYoU48FZn74EoTMFBqaGn8oYnjL8vWStFUvvD8GqjXmeDGMop1vfbrvRjiKUvV2F",
  "key25": "2o3dRBSvYkan5UW3HkCWnf5RUC9Pw4mvdJczaF7Eq7XL42SX4Jc1VwmTdt6Lx7xrjxAxj1yBS3aYvjqZqzpWqcvF",
  "key26": "3ztpu643iKexmHrmBkkM62zTZ4411KgTyP6u7MNHoMYZjLR41B6EzNkxEuugfMZYUJKxz9u7TmyzdX9RXUJXzxqi",
  "key27": "3G2Yn7DoC7aTBuzz54b7zGRVRGFGVs4Zyk67xh9pcXgiQub6uzba4FJiu3BaMdmEbvJGWAybPxrbgwubLsKntvQf",
  "key28": "K4ZjXpLfwYx7fmFTLjgtjJacmZtGXG5Z3HYF873iGUEEKUjZiPPoSfrUviF6TvCi3AdXngkiUx5oLdV8SRJFyq4",
  "key29": "2h9yzYHHC7ZKn6dgSq733fJXhUZoyfzvxvj6cwuje3zu3a1iHcwCenPku7fTsxRvFJupBFf89buWtcBVV1njQwRM",
  "key30": "2QhwvXhd8YzdeyaVKA8XoKMxVnznyPGNUWC3pVBCQcbEg9EjAAxHUSvCsh6xeCiQ5t6kuR7m13qj5gwuUvb8LzMK",
  "key31": "2A4zHPaMQU5w2D6z6xEWsfacoNHLSopwSDcEE7ZDzQMVg1oeHW56t4PYMG6cVTuAneML6ZdfSp5EHR5twugxbUq1",
  "key32": "39Bq7a1V5CJLajdDWBfEdnEADAaGWjCCeaDtT8W9pxnpezTC7haHhBFLGJztFHCA9aWR5XDfR33NKnQ69ayxGJtf",
  "key33": "29XkzLJwjD2nGiq3GKv8pUp5szPmMcC7u8QxLGrCZ4vizjRmq1vRPk5gEQ6uXSTAZaXkFddUWkkhBwg7QQZ1EJDT",
  "key34": "3YXzshEZiFfZrrNnV291veEvJBjDfwooEaHWp31HBM49b3U7ZRELxzajWrEysLWFS1LxBEa6KLPvQYLKtAj7um88",
  "key35": "3hDZF34UEQs8MEPV8aV4DPSTDQU8gMDdQ4aXeJgMWvfTHx3KyCUJLWkZXWNrREX8H1frqM58n9UeJecZKFtPxJ5Q",
  "key36": "2KP786WwKXs2cJs7Ho4Kmt7gKmRPdJFnEPschDNGEHrvHhjgGo4XRP9PazpPu1ENFVFPVZqiveRfcsEugu8rXTDm",
  "key37": "2ofUrh7RNb2iBpgYhC88x9P7t8bdCG7oERMSn1q9mEjBiEjyRMMMiJmizE6HdFsc4ZQgr3U6FQmhgzna5KL3RZL6",
  "key38": "URXL3HxsWa1U4LATai9BYFwdGKAZJp6wVSkZ8u9isDCryrP5FCqethsC13Tr71rJAH1hRWmMeuvXF8Hh3zuy4Zh",
  "key39": "52dHozuLRSPEwGaQZeS59V1LkmSim62NHxk8FrCiW7nH4rL4MftcrYhmYLvYap2SaXyQJ7CxBoSKYaZ2Q2FUAXsh",
  "key40": "3rCC1vSg2LcPyewjjdLz7KGRJoz5q6Ftfcr47CnGyzqFsoYQnaKzyno6Q4cvzdHxxdw5iMeqLC5MTGUsGfFNXBbQ",
  "key41": "38pkgwNi1oEzexV8HPWaHQ27FHthPZFHzSbbDA6oCZNiZ7JD9XmDeJjiGRUcNUhyAbu78oxdb5yGv59NffCtSsta",
  "key42": "upRcyEhittm2Pz8PsnkMocwZxcAF5iVFQsT27DMfk3poKHAR4CUyYMEF27RNDmiuQjPcphmHPtv2qwdaWeV7PdF",
  "key43": "3cPT8WAzNHd6VRPbhmN1WQp78SmDvjFNTmu75rhKSVtU5bVmQYB3CmKW35XDUZCTsGc6KaZdSQ1LhZo9THhxAPtL",
  "key44": "2uBxK2UtG32p3SoT5pizZoxQt3JMbKt11Dv4jDj4gJmtJ86PcfhnE3LHai6rXGNpNE7HdMMkNGs6uNhAyyU2rhjB",
  "key45": "3nHnzVmTtyfXwomW7NSjrifCtuKD5doAGtJW1t7MPFPbjYW4Ax435szUmRPHNhGPhe5WByE6ZL93GkvowdpaczgC",
  "key46": "4DEzbrf6VHoNbXwSPKakqKL44dNvice9KNT8rDzCeTVz6QntpfPs7aqcudywgLxWpCLYvrdhsYnaQF8yhD2HpY27",
  "key47": "4WuQL1Hwo7ZMEQJ5GUB7Sw3WwSRbCcWkHpkTJfvqk5C62pxeUz7hUuz2vkUT686et5MMLapcR9E13us1yy8GTUCi",
  "key48": "3V35ErzXnD1ftaMMnjzmPseqtpGN4gud5p5fPduSTSXDAdGhToD8AQAajpQetDxdLsRRaaB245Yz9KmHX5wYpsKQ",
  "key49": "AaCS8r8dRqZtqAje9CoVgwgPcNCVNknqQKRwpgVraJ4XaQn5GBars12RwZDeELHgSCBjueGkbDffvVJahomQuxk"
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
