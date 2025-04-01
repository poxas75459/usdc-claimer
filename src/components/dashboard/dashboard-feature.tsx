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
    "44KPx1rXT5cZCyG4p5eDnkvqLoR7nLJTnAGuT4M2G4FbAs5TT5VNfvtP5m7smgfFRzUUzWDA1bm94bNg4WyvqMLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RW4rvTsW4Kc1p5FdUKZjNaDPKCYxZLufQRsr2oHwC9SFreNomD2KUWthMh6pWWHuD1wh5spwkwxKhVfYcvEz8NL",
  "key1": "3TDxxaWc1cSiw2BBXirGgHpzbZyTrg1eTDRX2bmVAaVc3dUTnc2zrFQcho8J4VCxyzPigFLMy3C2APb1wR1TCB2m",
  "key2": "3aTSwfXDJLFacDHvGq6cpLWYVfqJUqfVeVZrsi9As1N7Y6Txz6VuejpSDU2TQN1hrFVZXrpXvf1pr572VTrbNhhc",
  "key3": "3iwcB1VwAqRuHs5kw69HBw9Z7jWe2qY4J5eeVHLSZEVeSdw2vbyr789QKfktVNtY8S6XncaJSP9YYKL3MrUk91pD",
  "key4": "42uJWe68FT1y7FDhSwb8tDerrzocDgscMzuT1yTSTA7Tb36TtG5hUsF6uTD3rVnrLLJCS6r2av3enh8g12ePpHZ6",
  "key5": "3nDna2DTk4ow2ySQBJEYxsKyiJoTWeuL7WyhHgMsPGe4Yu7Dii67ihE3SwCbrBETDyXnWTGDyduKarVJLCtmfZB5",
  "key6": "3uxti4PGb2YvA4oPhHSqpfbZ3X3ZAxYgs2Jqydtu8DuCk8Q1a7UxP8uEWLiaV7pHBBsQEtJ5zcK8gEpR7n8GREtq",
  "key7": "5jEM6rDubVC45V4aMTatQfMMX7komqYvLbSZWgABJe41GiGbaARLZYbLjSKuLyMGbirTNq85AkYKgL4wiNfwNbBV",
  "key8": "2AreA22vh3TFnxYWZpotc44kr9pV5gPs78bxvh7TghgHDM1TK9YBnEV8mCyJqiZQQGyZWLi3kVBCnuumrFF9ytSa",
  "key9": "o8uhejVMrXcjkZDkSZygbC5EDNhZPdjdG59ND2By2yewnxCC3aGbCWgjTbGZtJ6YL6nN5P9KxznqJcXaxTDyhxK",
  "key10": "fbRSLAPaG6Jga14D54U3U5H4iA9xyJK5467ChnFx4kenCvpGvwe92YBbkomkgYFGJwJ9bj3NnmuhNKZCC6nbadW",
  "key11": "zwdsnmFJHgM1weTipWnMFWXGGm2u2SwE7z6QE9HzmTd3wofjW6EvWPNRNTpsanWgYHp8fPKz9W3hZotXUZ3Mfg3",
  "key12": "47v1Y2Z3vVXjnmeThG1U5taCtojViYx16br7chZATzwrngbxPGTJu43CufKTCJSFBs1ETUcAEihm9hdE4HYiNwYX",
  "key13": "zhyN6BtG1AzvHNiBZnQteX6RmqY1ZCjDsqCCA2UjSpJAYQ56cv1C3Ry55PVtMQwoVte4euomC1Gnf7epFCt3zGR",
  "key14": "QmxcQcSVpPsXN3XW5CnfA6yfkPtKG8XQyWE9viWb32JSAXwqdW83swi39o9sukdJkZpWThG7FR16hS9j7TAZH4H",
  "key15": "3q6QGhGBG3EwmprJcEffc7JoXsmtUVduvf77LV2wxWQHLCr1P4VMx8gCM8etUEDNKzTt3BTFN5XL7nMon9DPXqCz",
  "key16": "5D1dMdLzmuCNU5tEsPru5KemBds2tfAcB7Rwjxu2wBKhVidDoinoqT8CY9huZADLT4Srkw6osXmsrgFTsZ74SmqE",
  "key17": "4VoNPXamVWJ5d8mCNzddd9ep5RZ9SefVv3XUcqBGqQLxzKwyjTWCM55hVQwUTqWfmT4VyfCg6EVYAs4dNcoLT9Jd",
  "key18": "2jHV1YRjq3CwWm2DG8tuqPw6p1yJc4nvwZBAzpEKeQfH8227aTBBfiVKP2MA5PDC7PMBzqUKpR31saZ9wAVteVUG",
  "key19": "4gX5vbiGkF2Na6kdKf4s7acqdREUgRFceHxR3tLKsYGXeDQTzyqpEbXKPhL2G4HKhxmKWodMHzM4AEUkEsyx1ecv",
  "key20": "64qMKWeYnKXNbGazsdKSRnz3HN7Nrc7oYPLoffR7D3JavLPAxCsMuSeYESMx2Zu7ZGGcxXjNkvKEz4tnvta2v6Pn",
  "key21": "XAjfZGNUSvERsbFsVtdFVNkojH1t4S1xjc7zBzxp6DBQmN97oHncWSGoYxYFA7FZGoR4PipU7pr6Lsh66CM6pkk",
  "key22": "2q72VdBabrgzfA5qBYAqegmbnzqasGoDg994KNXiNthxeTVSLpSPjoE5kkdwChYNHgMvTibVafKNnQyJcgaLAE9o",
  "key23": "nRekabuumvsS1szqfFrzr9WVASNjWXa5jJ219ukh5ewAJbL1cWto9byjqfiPvssqUXz7kZm5sRCT8zJE71Lavdc",
  "key24": "54UTm4HtgnGz2HHwN3zT4AvVVkrxbbgN1njbNVLoj7onmS6E2YetmKhuJhMcv5HDj1xe9UyUbrT4Lf8o4XN7sKNL",
  "key25": "5M7sEh7HSyqi3U4DwaCa4aoqZcGfje4q7rwN4QLsfg7gHtaXYZzExsBZDaFLmBT8W8bwR7wgkiumQB1haJUTwXzy",
  "key26": "3ff1rriNcj3NNHyy1ePwtKkdLxkGubPnvMrUSFcp3GVEjxjXgoRKHofXqmVKe3ZD9hcxfntnMX6kLLbSfgkVgAK1",
  "key27": "VTv43qoZMheCPTqrinxYakB5ZrBEDmnCCm112R9bgXy4eGiapbdg3Ts1KFFa8RjsNAjrDjSuBKz3fQ9Yq26ETUJ",
  "key28": "67qCsHTC7iXhDwmBrskyh2wJJp6AkGiv2iQqbDZRh9XPF9zvnKFfvJu7z9x9Tg2BTbff1KWHNZFbpdmkFPkUM45S",
  "key29": "2GQpXb14tXcUzUV4Gnd1xFt4FaBGh9D51Huyk2L8EWZWoRaA11syfSqAphrz12TJei81gLmzyYmdydne2PKaGBRU",
  "key30": "4ihQVAQn5MVsHRRgePLHXsEYehZN3J21bFhxa4dnWCsGWUCWLfS2xSRm1sdCWA12NBBxGCDjnUZqBApWX9E3A1hG"
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
