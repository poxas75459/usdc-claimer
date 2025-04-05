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
    "4qLrU4iSLQmVXD21jrH3gVyC1EZBsk3yrCgvtgCBcJv2smSZhJTWBp31LYvccfiWiLLX8d4cf4drr47dpEN2iAtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QQ44QVvLnypT5YZixwhNsWfDHztwmEBmdDTj4XhGwRa4cEc4xVRs5bAKdXPfw7yUuueou7wxvJ3e4f82yWsyWQf",
  "key1": "4RqRM1GBRwjqJC2DZF22d4T6J4TjRVujY2ZkuZKpx8Dv2fNcfwxmcZUdBoHmZVkZZQVgPhoFCkctDgifjcoWqtb6",
  "key2": "3oNefMUNkXgskMgoQeHVkJMjuHQEcm8j2emjjisz7prMNUQoAqhPEvzYK3bs7u416oo4KJm2ux62JiUGgEefPYus",
  "key3": "xEgZTGhg66tRbpj99UBHLmNEt46B3S7LzXe4GU1cGBbJr4fL17HqBJLkuS9Q4yA1AV2iZd1UhzPPKYnSe9jd3Ee",
  "key4": "5YTLifsugLtRXep5pcg3FqHH7cq8daS3JMHPyYzD4mc9NTmdNBnh2jCSLbfqRyJuPmWCbVwWE5zUsaNaRQDtYxd6",
  "key5": "4Smh2HNbLLXG1KFBSQjiNNgaKGR42JgUT3ynuiZsQkZbkpSdTFtBAQXSHFp1APdsx3jqMpWubZMnnZvH8wR4gDci",
  "key6": "5m1CrVjFbevdSiZWQTaqr78zhTeyweut919rMmw75vUSPXpN34dp7oArGDGAP4SYwRrF6Kmi5bCbdrLNaN8J1qTh",
  "key7": "3tpcWiEUWfFuZ8jkCsD4D6sNUgk4vMBor1PetUdQrnfu7p42Y3hRuoUgNTgbXQrmxkNDHwSgbj1uMX5BSKV739vY",
  "key8": "46Q2Mwn8k32iDQLiJcRwVfsZcdDJb2LYHsN5ahPCczNiZEEm18Ha85A8yjad8PAVc7acgbGNBWbXmPiQCGj9TPJs",
  "key9": "jiFYjXK4WEhP9AY4FCG6LtcLE2rpqM6svNpKGHTZUDNxG6xif1JuoufcZZLYFPiu91CfrF7oznBDBJG8Mxb29zt",
  "key10": "5hAedupoxegZBTehYWS2PCzQQp5zgtuj7ngiatWf9Uyizc5sbn5XHGYjSQdCJWzwRmUktDgHBUBTPiB9LzK5YgBe",
  "key11": "4vaA9Q1irmB4USALS4LEiqDZWZmK5ZLoebCP6mGLvhuQ9DuNaKjaq6SwajUr2CwvampaCLmrJTKuJ9MMKUeNvvAK",
  "key12": "3bHpQm2ahqid7JKk96Ju4RhWhtiWZTSgFEpTWQogwBzhK2se7kFkQUAJ31Wc2WPgnS29RTTQzWVWNADaGikBydMj",
  "key13": "28h5YbGdXR5fDFaHTdDH8SA8VNwQT7A1nrLtWasZc7fCD2FxJspDab5ARWewhJXmSaLTxdpRyj7qokkX5KS3DgoV",
  "key14": "4pqSkuPmYiRDdqjsJhsz7o84wvZ594KiT2ix2pBknH1y5BH8pdSpdv5ST8JpQqpch7wxXFB6Kb4HxRBLikmkqyLZ",
  "key15": "5Jt7kBwkLDNUvALytChVnPn7QEb82wmDDsXFkvzNGyQNpUvMm1Hf3Hgbh6qYx3fS6oiHoqHd5UhBdSSVDW8TKnfM",
  "key16": "bjGgjsD29PZgP3zUQLrqGWAcBdCKBevbsEPxrGcUSNaTJQ15AjMbtaH1CWAn9wuGQVeaBsHPUY1AeZqKje5RibJ",
  "key17": "4fWWSsKiPLR4i6w8rZbgQRWCFmeuMBSbWSjafzF7vAm8QCc4swNu8YqTnA4JaPAkNiirVEb9mKNo19hRSxdVy7no",
  "key18": "5Y3eJw9qEdGacUgCBkLEMVbbRr36HA5b8a1Asrd3KtDN6X7ztdAPovzrqhicQ7kaMAVsiDHtFt8a8nXZMXhGHddh",
  "key19": "2gKUskfMSbJMf9BhKzzg1cXmb2HLfEoMCjxEdtQsuv8PN9Zc41RRqg1S8NQZuXBHmtViejWfwrhACgLZq3Pp2D8B",
  "key20": "36bgqmHNWz3yXWBpULxmkrnyLCavtqUNtbT7dt51Ldam8zWsUa4dokamL6v68yGTozv3s3wniubDT2dXzLe81sNE",
  "key21": "3bCjDJhaK9KtuQmw4Pf2Uppt79fkRUE7o5mqVS9z6ALTeYCEkBsMwWVHvCAK3vT5wjtQe9orfJcWeQXd8DJ3KvdH",
  "key22": "4J2kTwfKXxhn2VTVwvt4idLPFQjbZRwLTRAqDisb6ZH3uKjtiFAcjetdUui9uB2aFWq1uP43XM32YbEoYA2kcUtq",
  "key23": "54t8ZWNm1JbB7f6d3SuTBAi432JXKX7zoRbLdnbBiEGeexncL4GgSnkeoFsgGdSrf9eVR6wE7Qh8HyvZxLndpM3p",
  "key24": "5uYDAcVTDDxN86rsBQ3EEeLMuigSMaNxAza2MNwRttKmJUBcr7NU8dt7pzpgRm9KZkHLZMNJ6RJ69cjmaeT516ug",
  "key25": "4XHVjnS2s3ToGAEUoUUyYaw7ii57MrvLVS6h4razYitcuq9UnrCdtUjgxdonmsqFfaWR9DyNz62RJo37uDBvQ1Dz",
  "key26": "xMvw657De63L6BPR4rYtQvZDqzSaNzyBj7L124ADoms2PYVDJHo1BR8zRSrMmfxLq5ckQNjGaSbPE58UquLwqNe",
  "key27": "2TqkZxUH7AGaS57AHfui7UDhdEarADVsLyy6Napdkfxk5NgDuymdYmHAa2vTZFpWzZm8mpabVSxERByb32LDbZ8N",
  "key28": "5S8VLS3aWMA6cyq7w5ZRJW57PiVBZRAWptMfcoxSiLbHHKJMur7W8TnSR6MenJgss5oqc548cbipEHnjcFjHLQn5",
  "key29": "2dALUac4jTsKRtVMpCbr49SahTWuibxGXhMwwkk5UiZX9VNpmMvjNS7UYxJ5ig7t8KQZFkV9LkbQm9sW329cwtFo",
  "key30": "4guebRyGw3jAUCczWTcmE2GwyF5u57sgfrELAab4E1gpAeaMY3vyqH9awy48sAskb45AMCpPwMH7bxZKkWpU2JHs",
  "key31": "eKQuPT8vZXh55dfhbwYhJ3tJsGJFKbbSU9X3NJng8nRoJGFSu51jvVnW15LcLi3gEjSAN4ZWK1tNQKjXMEGLP4S",
  "key32": "2Kqum8R8HWpEzi2DmyhaHFnKQx7A9qzKKTUnc1SemDkCzbLhHcDEG4yTq7kkhGGixgZF3qPuv7nv9uqd9EvnKKp7",
  "key33": "4F5UgNxsNTCB22ZdwcQdUvYZMfHA7CE2FUK9XjQjCuFFwv2rDHmyUV7qmQtqBChHoHHuswm4fJqCvit3MLhgEo2z",
  "key34": "5vc8FgGVynDeiysPWK3gtPh28m8xQ6trcAXGrj9nrNWywiJoPN7MdGYQWzToUfh5f7zgEr1B8YE167fiVKjx4mi1",
  "key35": "32AHUVwxJAWzC8zgxeWYt3mzPkXHztNkxa77vv3QaWDFh2777gBpcxA3QFBZXfDsJ5FQHo9XHHKHTcRvMXxuqL5e",
  "key36": "4wzVYsnH3RqQ217pRQZyDC7f769j2Tm91YcmWd7KswTqRGY7kKN7rZNVosvuKFtmMp8BY3pBDufeja63c3GDjxC8",
  "key37": "4wHrihPqVS93oLV5746dZejUhkakxoBzZWrW1TNCeM88nPem2SS3Pf35N2ccssAnaLm3BU7kQfZWjUUieB2tZvzX",
  "key38": "3x3vtNUezz79vzy3p97Nt4sY7hoVibNj6wXumwdmckJT57LmNdEB8ho5XQCLmNPc8esZxY4qPEnaPU22e2NscxwW",
  "key39": "5bffiAKBDGWG8CqhxGkVFHHLJ8e3y1y58GjariJvNDbZAJpkXn7zov3EATbpKBZWgd13JiXvxcUjSPGz36w17evp"
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
