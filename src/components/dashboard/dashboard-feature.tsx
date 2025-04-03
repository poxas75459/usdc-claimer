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
    "gH46FeB35YjW9pP8CTX2Evmsvd6ChVfeeHsFcu8tDXFu37PDPXD7au4XGtfQrudB8uLZEPi2WS5ZqSJrjWCfahR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A4ChzssXjcz5rUJQ5jfnhmaPNn8gXtiXJm5x1WDHpU8KcaUAf3UU9x81MsudEC5134oqABBQAvA7mqnuAz8Swoo",
  "key1": "5VW2tzr9ZagdMzBT6NTEMFzFfCdvtcBV8xXbuavkkprTC9nTFVCLNCRJnXkqcUUH5Z39yFhdC6fsh2P2ga1qSNUe",
  "key2": "43LPoWGLDULaJEymdwbCkUh3RownhSWvoC2SaHHF59aPZ7RKG9zQmzs13MnzAnoP5HFwfYzkmegnJrnq2Q7UB2rP",
  "key3": "2Yf2smaEfyKHLguDkasch9hPb7oGvhAJXHBHXEVEqapoKe3fd749PB1spR4nMuszYVvmj17gaAniWMdcWd5qnnFu",
  "key4": "3dyB4VmkXwbtrNf6w7KhqUqdWuhxqc5QLFDZ42vcWnDQNrqksGuL5bcZMNxKhPwn8JF4Baas17dpFiLypnq92zTt",
  "key5": "3KfCRDbSzaVvFFZJnWsizZNrMgyZHdEHof2w1GHXvyeTjykNigKsGZJYo1U1gAGxwMz8thyyJB99VfCyVo89tnrr",
  "key6": "6J9bD5VAPYz5ttPcL9V62cNS9NRtNDCHboKSYcsRADMJzt7KGdXrto5E82uViXPE7u7ymeVQAaUubqPkuWQ86D4",
  "key7": "2yCsNdUR2owsPejZmBG1vNtGf4wwx1RSC8aRZ5GRykK9oc8sULsL5nMbStvufsv3MoAzNFYq7tYUNa8fmFqGiviR",
  "key8": "382vPLVkuQkHX3Xb3bEdVYGQkEiBJ5e1ph1h7X8JuJiFqufF6AQmUGXrxhPjzgFdcYXxjygTrLR8FWnGtcUyrJnM",
  "key9": "2PeGWjrY9nfxfKqmprqQjQM49DH9Jp4Jv5ESdjG2NUH4mVEYuwWL51DR272CBNC4mALvvZfPpnHe5NCHA1ofucxf",
  "key10": "2rE9LMvW2Z2g8y4ZgUPG7bxG5bc2FWNpVoLxyGibfKypNTufdr8bvNuRuy9kV911uCeCgA7DjGLLGxTxC5UBs84m",
  "key11": "bBM3svuHYQxtTX9rsHpfPbfJnxGQo6Miq5ssgceacnWsfSkqhug1HM41tP83YKSwARVxChF88M6grJ3BDau28ok",
  "key12": "4DjTG38RFHpFwge99eZL67XWBchAVQNFV3cNAuyEXA34ekgrUH5krSkgqeYm17L3QfeTNG6hJ1iZqpEUfHuCBiY",
  "key13": "3rgk98KdWQvYrVtpbe8pfyBdAdJCXJG1gHNfNnh54FrsNAjpUWgktRMcMkNWxyRsKgTbYAXPetdBVFQEM8pzZaXW",
  "key14": "351AVUDutL25xjCu8LTYPWnADSeuZ9gSSE6L9CVwkhsHvZrnBj2cfPJLAccwuyngGXwDptxvgWtT9qRscnqwhu8L",
  "key15": "49SKzJ4bX6iSh2skqNn9FPBDeXD33r1Zz5Ce83AJEykwZmQgdGjowziv1G2oD4c6MBf3c6MARKxBznRaoEA8NAGu",
  "key16": "4dt9BsB5mUN6LQu8og2Tna2oP8oj1xd8CQSzmPgADMjZT4rkX8nNAeVsrczRweC7cx8PzW34RyQGJjApgZqPEU2D",
  "key17": "3aRMJPJwx3tNMuvGophdfC94fw8gB53p12HRkQJ9qjYC1abgieL6G3XN5sKBw89J6L6wTSCsPzCLZcNsufhu3iWo",
  "key18": "33zgN3N1qArAYfubdGThqBcsVgVKsQpSNnzcZfJjJX3fmjXs5DmH7wB2rVWeBvwsqcQxSsUkoSQJHT1tX86gj7ER",
  "key19": "3NZZNGTCC5XVTUdfBXqkjCCDQZNwbeKx7SDhHvzowwmgs8itABK51oCoWkboUwkyy9Ngm12xtX6EqE8PAgPfUfMg",
  "key20": "3SqnMz4h9cRboNk4t1QjuYVY99hFaJkkiehvGPaMVLVwSXLPh765swYXr4DHfDrRUs98sdrPVL516fqF2z3ZoXK1",
  "key21": "2onZYsznK1GEMTdHJV7WZrTtvHWSu4uLjqz3gdHUj2DWNeNBp32wHZBrSQXb9NkKe7Aq4VxmqQVXfK4dRWaku4Ko",
  "key22": "2WgbN6trrVUqfkQAFkvqzbQbJPKtwmtqasuc1TaJ52wvoY4rTyTvpaRip3buMdbWJpaTxbqd3j3UU48RKXZBvTiX",
  "key23": "4Porc7SdyocqNohF5nae4WvECT77CgxHeZ8FMjfkScsQK6G51Q4n4fADh3ix4bK8YvGG3aS9A67EEgAUaPpmSNEU",
  "key24": "XJUJDxVCGMrsKVxP7cmW4qAYamW6Yri5LUzfYM85ZzCCb2vf7H4Jd3FXUj58dpMufuspL7BSd2t8cnKb2nTGnJA",
  "key25": "2Tn672JBmG9KpLUha9cF8utK8jBJuVGohNNjhXBS2yTwyE7yNdEUTAWrCy8SWxPWuYxEEq33oXKQn8KtzKUUsKjB",
  "key26": "aGqijVqL5cbK9uALmdDa9ruAS3u3kALwTRmPFXLtAJxWD73USoU3NAD1KDShRDw3M3KzP9nddy6tWhCjr6knyCs",
  "key27": "5bJj2h7vtaAezgbhp2PiZ2ufpM2wGWiS5N1bCZ9rgWNYsP3EPjE9aLt8Hsudp464HANRtbs21ddBnTTyhTGnv1vB",
  "key28": "28p286AaX5YfEGLBk4FZBwdW8vcaNcrTaRbfubbHXjMoWPRsTRxZmnZYPKU1XKvekeg73zax3UvcdtMyjXrDKaAq",
  "key29": "3no3LvhRsuvdgFMpaVaJK1AnELjAZ7jAV3VGZ7r5yaZefSAocZNFNkxT8egHAB6fjU3AJzJVtB9vaAkkVFC8tkre",
  "key30": "3NFGYwSwtN8Avon1GJnqNkEoWgzjUjoesBUVA4QsYKF2tqAZWLS6yPFaGWqKasyks9z9A2npBG1BRuWDjqxCZqaW",
  "key31": "4LFzAL165TR1mDjhgFkAmqUMvAMvhoToQFHfEu58NhBmJPH2aVEASXHWVaa1KHFh5tHVbfRZDeZMGdBvBiDSqrPA",
  "key32": "4fz3g4J8ijS4BwTBNujNbUmo5UPgLFJmN5cJxg3hNGML5pRrpMQt4TRncMheJXtHyjv5vwZZWBjEXRx6J2sjofGi",
  "key33": "4G6q7FN5CftKQsmhRUf9GwDaV9RXyKtbcxE2118kZKMCSi18WSeabHrSMnWN8S3bQQsYM8mcmjWnQVbCzNi5Ya5j",
  "key34": "2NBvfr2KAtdvcqwcJS91Gn533uGfLLsqLcwGaDsXVvDX7pkyqEBa1hCgGB9PVtsdRuXBkkmqdXzbGr42vTShxWSG",
  "key35": "4vSHM9zd8p5LMqmB1kNeX7iNK78yeTBTPguP8Rk5fQ8gwk4dHin8uxnEdUBeCg8HRfMTP15x6MdhzbeSDPeVazVM",
  "key36": "qZeeio2Rme2FnxMWPHk8rhpLWGAMXn1XwUPYmmjX2fW7mEW6eL9JF5kHzXGgnbt2FMZJmEYNptup2LVD8uLb8pR",
  "key37": "nuJ71r1gyVAXxBt12M5jjRGY5Gz4j9E1DWgDscMzPHtHe5oD4bnvEHrQvqyAt5XjXwUdwG7p89gMTtvGsXN7RsE",
  "key38": "5Y7FwvybG8VufAj16JDJCaCqiKVZJVSK66K5h4TbyBmCtf7E4xVxS7T6RvL8ECQQFkLQC8s9fWGTJsiGYbmvVE53",
  "key39": "47nCwGe4PdhNiYdUPAmEffU87iFvMr4GggEgnbMcoCUzwVXmLDM6wpaHbHZUPvRFZVSzQgGFM1yRAGpXznLXjFuR",
  "key40": "21YrjV1yLUXPdsYXn2WVSAF6mSqEYTVQ9ht6TkeNWMfydVoL4TU8tmtFYpw2St7NG2LVoZia5AJtkp33pwMNpthw",
  "key41": "5K69GgH1CP2kXN3dsj5yWUMRoAJ5rfkw3R3brusLDSv574tFk1CrpaDJx2XEfK96PaVTFfPernQPUqGPFQAxfrdV",
  "key42": "5BDzngiXkH7YUK3yZmyFHnKKhSqknZvpqSbkZgA6L5icY7BKd7Kt2LCA3c774uXyfPXhaFMhdqWATjLy3JDSjs9a",
  "key43": "3baMJmH2yPzMhW1Pz8B7iUSujMPnyV9GM4eP8tKAXzVPQSV6YNFeU97ZEKGSDJNmGziRJ93akwgJkrLCMsejsUCb"
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
