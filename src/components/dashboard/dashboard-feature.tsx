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
    "4bxhbjoXhFkBa1g884P9WrrseNqjWBVs5fB4BmDSioNKahGk5Hqo2pssiPayb5sxxQAMwxWVBL5AHpp7BtbFgVTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "435oQU54EsQAZTuh84AopijPGE4tJBYJcpjvcymy8Fr5PTvLYumpRtLU8LsKsciUg4brPsht6gx5BXtEhkLwNst1",
  "key1": "3SRFvevbyEPwxaktSbTMHm3tWAnMMUFztTkcWWcyAz6xwcm7wmxNNjLSTk8peKm859rCVBiMm2EwcPSkk2t9wMR1",
  "key2": "2tqLBs6fLtpW3HDGTixungN8AGAj749p7aHpKoRb5rJaV8MkJbSnh4YTM6ZRSCzVbmEi6iqxLTGfCZTGHQYqdwkU",
  "key3": "4pXixnJGHPPuzCjFoDTYmtVXjdtBVpHrzyxVszSvTsCiQve9HSc2LeqNKrnR85ZZZV9tA2sS6wYkUDHpu7We6uSc",
  "key4": "oCA5mzAP567ka4djArPZACAGVjZD8R9oLJ4x2tMAco7BrNJmcPVk8dWPr8F4nwT6NxadqmgP8Bj6hHQ73LocBwc",
  "key5": "sggqqiivXQnrBNeujowoHEWFJvKwf8D3a7abEnasLFvkSfqYJP7Bgxvj9oybRiqdUoW7S8BNAh8yprHjoG9UiDA",
  "key6": "2Nan8V2LGkyBVrMWAu4rC8Hfa1fCrroKVie4V4qw6YJRdUmAVWj28Nf13i7288cXC1txv3wPduqbBRTibiCpXv6r",
  "key7": "4ngm55QLHb6bZqEXHHZYaecFEdyjxGBKReHCQ81byqYLTY3W1L8JfpHXXLB2ks87DCaNj7nnGULBV1JeHhqA3ZgC",
  "key8": "4FV4q5u6f6v4jLZoDUvqWMnq7dd434VFWdB79zxEXgfdyoNvpy91KQ2V5tAcZxnwAivJ4N1KrjXBgB3wwze7d7tm",
  "key9": "4Vak6Mj76qpAkhZgYi2EKr66kfi5DyUj3NeG5bo1VCmVomcPg9gyUHQD2xceU6uh7AG1x1fR7VGHtcUeFaa5zLxP",
  "key10": "E3StLJfRN6VRG8tNnddQMd5Py3m45cG4HPbUcAAMLkVdDAQUqsTGdBWd5mpcWeX7JAV71os2UEUEPYm1uFLex3f",
  "key11": "2dx9QQcaHLewiB9sL8W83nqD6WsvhsbrTXvfyey24csqT6eYZzs1i2UGwbASY3CAgpogKa348QAxd3dT68LLd5W1",
  "key12": "2ZuKQuB2Mb6BffN1TDJymWC2x1ZxbbujbXGacQWRfoCqCafmXxJP3vZCE5stZCBWv9E43oKhWQqSPcKq6XDRyMuW",
  "key13": "5kXNsRzorDX2eK89Ls2e51417RwRtYXFygJcfuv8X5GMZ84vPjjZsV4MWREoJ3v1dEKTCSkZ9iU6qspEPrDmrxKL",
  "key14": "3fbSWgoUYQiB4EfNxdDT4SYvTvfW3wrujSjrtLQ5aCdDKPiqpu8kB62Rig5MRo69VMRyjxwcps2rjrvPt9F3zyRf",
  "key15": "3EHf65zxmHHxNdMMV4nVKibhGKgvNsdm4LMUJwEbfEHoBgmEs9T93Wx4t43zqQWjqeoUNz449LdSdRiX7p4aakoF",
  "key16": "3hyDPM8PuNtRRz19QvPr3For4etzxmHT52Luf3nRmfT4pdAvn94hf3e3erq6BFWFKH6H3y9NUGuYMdDmLT6pzNfD",
  "key17": "2CCRBrQxxV1PLt1dwzKnuATTTDzbnj9Fe3he9hQRfgGkE5N1iegzGrgKE6x7dsKNPmF5nZxBTc8X3tK7cxtpjEWK",
  "key18": "5RPiFqFpAATxqGxpGf6apVEbefrgbNfP9a5K46pq38mRW94f2dKv3Y8MsxKAiCwXc6HWJQrT7cnxMWNnaHcR3uYd",
  "key19": "3Uu2pqkbLbcrR6Eurj7HyFeJh5LSwvyduC2yRpfZDsP2yeyxmpRrvDtCk1HFdTnexnRyjaiS9tsdRKSzxB1QoPob",
  "key20": "31gVde9RucP95pcmpngS9nmFLZFUk5DivG8SLqCHHhhQoS5uubgUhhBUkaekovWWipsqwKoqtEtiRT7Nvd9UquYb",
  "key21": "3hLQNxnmiKiGQ51cS1LzaQ5ykVMKfxq5KAgVXirNGp35QyYsVjbfppQRjzLkgGxVRTKc6qS6oqu8xwSQxexMcRAF",
  "key22": "4TDAiNNTeCSEJSH2UcJEC3nZEopp4JUHFRkLfGDqLWYVZ4Pu5LuJFUrBgoHFrgMoyb8jMveAjFnjjdQzuiqkSrd7",
  "key23": "42bJfhD2kJaHuTjtL1AGFMrDk4Horb1euNVUU6hZM21vXY5iUE69LpNY16qkiXzJvkuWzMpYW9MAH4EdgvtUZqTx",
  "key24": "Go6xf6jzuVeKHNaJnYwEgdvG4M4nf1TANftgLMueJkyLJ7YJEbojaRBQoCkWgGUX7vLDWK5hVKezFb5eaKpVKJ5",
  "key25": "2fZqiP5UKrufQY86bRMwHx3rQrvQQhMojFXzqvzteTdAgCKtY4hqA4AAFLfTFe5gPLcTSpT1Sh3RaD8ximAdyGou",
  "key26": "2kF2YEEzBSfjKy8jGXAxNGEHHK11NoRDVabTjQuJB93Y1zFfELt75TxWao9n5hkczgPc2PYNoitcSMeXUPB4cW9r",
  "key27": "4v7cmPwNNdgfe81ooXyPbfK4KTq5W4USK7u7jC8V7wx2DfiktMNupBqSxRap9DTvg4TVAvNiWS9mUd99Pb4eL2GX",
  "key28": "5rHSXxdYYH7nxsPmqG43tdjdBfej1gLaU32LLxWpnRTwPGsjJLfBgZdvg92h1Gqz8ysW1guuqVPghbwLf4F2bmHY",
  "key29": "5kWbZchv63k1wtyDP3uWEZH4W9xckbMVeaNwXmHcZ5F5bc5uuu9AVvMAEJxZNPMYfrqR1JL3m9bmh6oRWcWJwtqp",
  "key30": "4qFtzteXtnG1hG9WsG6pu74mijDvgsGxWvzHzJLD8m4GmzRc7ZaBYyHTgwQwv74omHFbmTwzS7jWFhthy86D95bm",
  "key31": "ZKTah36G1XJ7KYkHbpoWF8ENcBpFxv3UTLubofiAeVThDwWVAKPrd1sibfVmu25LhCAnA5d9c77vuSfUrjrvdyy",
  "key32": "2N2iVi998B9Sx2kHYR6SeA37ogmmwSeqcK2qhp4Qd3UU63rNg2zGuZLYYRYVZuFdd3DjgM5TivK7NrS9wU3StxxD",
  "key33": "2hiAKyoHjxiUD3mjJT5EAMgtKYoxVdSTkQCb1UyxYUA56PkKxLHEPLMhz2auLvmoSPWf7TwkMCFxhsejGXwZyMvx",
  "key34": "TRdZ911iG6NTdwpMNPptLWfFnDm4sgkfZMWprkwsyyB5iN6vneN1wgb2x5c4ro629dMuAc7xVM8tgdKbLkCtJM2",
  "key35": "5ZAQ2mhUc9jy9mF2ir1JtubL9ncvzgFHtpoSk64SGUh77vEkqD8QUK88Tbh4YkbdfntARryZ6Z1zNTBgME6vAE21",
  "key36": "5xin1MCbzEm7xsQj1CGcJX3XfdsKzBXdsgo4apCP91UtE5LGRUTPYGEFPEkPoS9mN3VJr3we1D1K5s7z1X6ULEQZ",
  "key37": "5pL5ekNfZs6LovKfVQgKxDmZMeqBCFyhmcKbuRRstkfpojRWYmqYh3PM8Pnv3Z9vrKEfygzfJtE3atdYpo659YcN",
  "key38": "qK1tvunkAL5ayugRCMwmcKKUYHJRUo84NknUd2eiCyHfPgpmRX3JP9kmHcHxw3jBd7WgMDQNYxq2VQpXVQ31Eja",
  "key39": "3NRUFEMPe7Ctke19CA5e45CiPEnCH6tCkFzHFFPyfnXeNn46yoPuuCBJ2aQhUvATNyGGPmHpaSsCE3URPHUwvfNU",
  "key40": "3JXtBufoQVbu9Gm41TWHa32qXpfrsuxLEYfaequPxAJ3o5FQh7YdfMF3BByBpoEXLozAJ9s2pTwkzYUmBLcjbLeE",
  "key41": "51tMkpXmyZVfjjDoSKDSPhz8NLsBkKsHzR3QcaHdwJGbBQp52AMQT8F1ip7d7AZ3La6JgZgJ3G7Rcty2h39uw9jh",
  "key42": "263zpk9CJjiqsh6n1j9sDP7DNFmtFk4xziY9VUcV5FKrSDHkBBrWCmHqKWu2BiNU3H6hhWkGRdQNaRPjXrzc6yZM",
  "key43": "5xBQ5XHS8KRKynJmgGcLhWcfnykYucBhecXShzYA9LEviWynCrHGmDWLEYAp4AKZUz8v69Hr4EYavpCDNuZ7PzbZ",
  "key44": "wywGhQtpH5mBqq9Jv3D2TPTCXAxmFt9H3izjXZq1etuVxfjrduQyjbDcVgvr5gHqehpvRkQEkuSCAEkxG1ynVYS",
  "key45": "4sCrKGd3UZxqGyGPtPtBwx7xPL9iBbCLTbERWS9xQy4QHJHCtSKuWExG2jAjMSpgEi6kQQPquzR9QoCbskWmMdMs"
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
