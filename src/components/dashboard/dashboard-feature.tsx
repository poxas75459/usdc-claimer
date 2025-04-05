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
    "2r8DN6Q3nyjc1rnTuRqNc32QuVfSpENqnfa1n4qu3aDjyxdfGCgBnPygfdVgG5XhV8rBfYAhGjPhAkUwCDTQUatE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24CRMeDEqaFQhK8m3daqM7UaGEHcw6txvKzaRVzxQcfpLt4maqzgduajKgXsdF3PwUSqzEsGF6mHTwokVY5Rv8qe",
  "key1": "3nfse8yWizuYYcaqAnVxM5F8ndmHfHmfksjRf3inqfJi7CTzD6wEKBLjNY6ay2rAmNo4XzZWfLm7NWFgQkFqPLp8",
  "key2": "2uPZAsB9Rov4G6tyUiPkafJzPujW56Q4JtnxJUimDhSU8rKAQwxQFC6j9qB8YLvs67W1MiXQxCjPkDBcTj9Vusbn",
  "key3": "3JePCjAnPAfYgppcUpWV13mBYzgr41N22PUc435khetdLzWoPVBe1WqeMuCTJRcKN2azkRafNfnrYgTX2AscHbsp",
  "key4": "2HRvVJz9Yk3bwpULEAr3MGFCh9AfZ2DqP2MUeeR6aDHhhAfVoKsV6wtL7K2U1fZ1Y5juZREd3wtLcpb4d6mBQk13",
  "key5": "2X5SYmWzZ6g9pyjq8EsfUcsBwDnGTFeq5UVUV4aiP5tc8mqWeDGnYrYtv2b1RFKqY3wZCo3rN2bCxczXrpJ2fcpR",
  "key6": "ZkPAzEuJhWex9AnHHC1D2dHxJ71SGpbSZk38MdiwGMPKmXRXV7BMge4piCDBFxBNwgMUhVCAQa22dBXYP1Kj8Rh",
  "key7": "hNT2DYUL99qA3w5Xrb5gXH6XSY3LXW1wmDE13VCZJAf7fZZu2qH9n5F7Q4T8ig5Xi7gApmK73FYxkYHxNHZttp3",
  "key8": "2NA5c9sVssqWMytiXbG3YNkH1sKekH1BCdowq1Cw9d6A5NAZpJtKz8kupq9pvgZUkWk1XyiTCshtcZ8HhqRLVoJj",
  "key9": "524T5DKXzqnmG9A5wKDjqXkhcwu28xA6K87NYvMPxNaZUMqZgGX4myM1GWzfC8cjaMEcBJT9h2gA9zyV68cpyBD9",
  "key10": "3DB4KpcSDXTwfuv2wRoztSAuYrDf9ea4caPcgCP4uWJaMYzF7trB6A5fcqsb9r4bgbdpZnErGxVAaaerpDatLR9V",
  "key11": "5Wv7fYGgYmCZbmmv9rG3CneVa6ZsPAanT8CMUSHDDm9Sqyj2KKTQQudixaTeyvTWi7b42fkwvG7ezuXVz3NA5rqd",
  "key12": "4b26DQw5BJMkj2ynzNTko7d8y79g9RMzq9T3jpiUQxmqWrkt9hAf76KApy5UnTbNkinvBqszh3ZDXbwFf3bavSb",
  "key13": "4dsysgHQ31M9AtU7z2sfRkfC2MVSKioXTWTBDdqB7guZgpSxCAceKMKMadArPSkkraWiPifaH3ow4mi62z1joGhq",
  "key14": "58b5aB37Zv6GctMYE8iHkf1VJPj9VD6i3TEQLKEGaw2XGL4zAoATfW1gxFroJMPMkBg6AyQQ7q81Rz5Ejf2taoVz",
  "key15": "4BeX6sETwkrxTHUDbnRKGebPrcZUgpQ4c1HcQG1FgoKSnN3WNWu7ZVmP4UMWT2iLvpsyhDEX4HGRyBzJ4jR9NK9q",
  "key16": "37BEgiitVdQqXoqoB3hh6KRd9zz2TiNtBeCuqTDo4kiuMPBrt64xx9okj73Q5YmzRrtpVUzvBcMa1CaJAk626PrE",
  "key17": "5VJc7h5xEJMdu67MyQMzu7FoFqugzUFbToDyv3bAKJgxtxUTQgeb3VdiTwP38N3Cy8cbb5nYKzFJ2uxUu88sYkAf",
  "key18": "5XwQ7HYesxTxwsZkT98YYSjs4Gh3VLZGD8PpC3hR4CtfmAqJAwZBEbaSZe8jJ2ZaK26QDeH5wjXNgq5zYpcsV9ta",
  "key19": "3meViTGhti6BVDFTeoknGWxjhmyZNvhraaNfxrBZRBqiNtwCUKE8UtRXqpx38xGj2rc4nithM7ShCemGFCB7zMGt",
  "key20": "3iBFh5ssrYRVm4PrN2bXJMkFqzNWs4sYZqCwzoJGG2Ui9bFL8LbaTSWBBvTHpsDhUMGdGWTAiFjxkVUkLuNKAzVE",
  "key21": "3AEiy7ioWeAz8dTd7asgboDTyM75iLesY3Ego9Zi72b32vrG6sUS8KrMCJDAqWVaQyJXcbqWbpVhUyunByZvnkg7",
  "key22": "3sZBAhNgzievLrQhwbXhJEGXzTmiqdQq15CiU7jusXGrrjyNiPFnBnPo8sLSW5qq8GsxnXNSap2Q5AZAHfSFWKkT",
  "key23": "3EzU26jyqJ3WFV3jeucbY1A8kdZqu6V64X1K3VKyLSgkqobu4Ke5BqKUonfGNncjkRi5Kqf5Cchkx4Dvxm5V4e8F",
  "key24": "wE21hfqrvQwXFePPfHYREDkPUVMG6CKc5HKjR4a3s7fbtx4WY4ZoCvMSkbz7mqTZJJE76jBSkZbZYqHWx6P5f2p",
  "key25": "Xn9Fnxdspog43D3jYDZ28SSJkZwoVB17FA1gndm3cwhsSZw8qT1hhFGvkngy4SJ8qf8S7AsC1nMJcVt45WfTz7b",
  "key26": "4K81uM7fUV2GS469uGda5xHWNfVAZQbWJ6yv5wnRipxQvfgNHrGUCWoUNo8eE94tKzGRaQeYCracUmmi1NgJBwZ8",
  "key27": "3GkYTHpYdi1sVhLVhN9HoHUVujip7QpmVUXer5NXLdEmznVZ8ja5Mei1AcNQnEYEWK5MfnrpQphdaqtf2pQrdUV8",
  "key28": "5BiWo1LPzimWXZ1MWAJSbmYec9C7rgtf6bwZdn4X7AcdLm71znqx7qXpWuGRAri8wrzy6S1xddLSBmdXdwLDxwo4",
  "key29": "3LvD7vE5fZFBwGCncEhV3GptbjwkL6D95qtC9f6s9NJA4QoYPjDb8W2FGwLjk3DJ1DVkiitWNzR2UnnLTvFpSPU3",
  "key30": "pZaUyF8WFGKcDTat5MG8nxNcsQgss4pHj5SFMVEqf2NzAuAxao4xbjtjCxtJQxutvuhYgdchHxhf6Lvy8BoFwoQ",
  "key31": "37bb6oJCoDupn5wHwahXbirhN3eTcT4DD2jQNwBhrjBnF3omaEoSy4PZhj7BBHCCaf6TT7a435uCRzfg4yLF8mnx",
  "key32": "3RWoBrwP3toPcQ3XFkoepr5dxLcw2rAbj6D4CNDEz3amysVjjACpsa6hWu9ANnMNjQru8vvVN7EYb3LhPG8reQB6",
  "key33": "2JH97G1omfRt5dDesTLzds6D1fTGCc6JsUAWA9LZv2LGC2QDwRVb9KnoP2neQMTe5SY14B9JBrJuesbBQ2LfBMGF",
  "key34": "2vZTnVm8ufCzCdE7jpaUfT5t1pHNctuKGWDANWnaMLskKR3QgSD6PPwDuijxytqxT8FMvZArEMHD87xdNR9eatpR",
  "key35": "4JYfyqG7RqxJdXfrFGPeRMqTAB3QNK2R2epfVMtfHpHGJbV2RvcpdgqvHBqFM3iE9uuQrsLueQMjwzCWmnhdXpVF",
  "key36": "2QgtvGLcEt3ydEnbtq5F5wTzrVvLDYzGASJFgGXWGjWyd7P1kBibzQBg3c6tofDnFVjvUouF9ia7Z8862ogx8HT9",
  "key37": "4Bagw3eex49kWSgwAUYqMRVhW5fyWN6ta2fsCLtUAf79LScEZY57odSvNUm7fCLCmxA2rp1TUi3U48n9D4apJayB",
  "key38": "4ArmkVgmSh7ztThAdaxwUxAtLTWcJmUQAWerq9oX9Yi8Uu2ePRQDfQWu7egU9tRLxf7PzEikQjqMsxb2mpcedou9",
  "key39": "3K7u9KkKiC4h9SJuNhN9CRvExvFgW3Kwo1WCXx9a3eUu4FsFQ5Aw9BtcantJsaJKnDQCvg9ugZ3miaJxsbhZAMPH",
  "key40": "3zDJXJQdqSDqZX1hVcSFMzN7ntUgYDaNvWtWcPpa4hsXzp9fPyuMcFeNXB4f2uDMBr8YjiLQ4p74Htz8zZQc3DPM",
  "key41": "9sCD6e82oLvAqGseALXaLfsRMTVHm1vZBiWBLyTZ6uQrhhD9bQBQCUYYDXqhMgSbCUfNPaLv7gqBSRFfonF5EeP"
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
