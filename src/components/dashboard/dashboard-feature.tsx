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
    "P7KRMtnmVHBiHZSPwa5VyRuFFs3P5mTVrp4bNm843mkKH3WorqpfqdNY5ZYEz8XbBFXZ55p1BxJGw5bKfLpMNrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q8WuWs5XoEfW4VtuTAVxYcYv7AvV9vHLEbqGCDDSQ5SCsgZ1kgwodnymbbPMRdcLStGbntG3QizgvJeLbowAUpJ",
  "key1": "Cnixeqz4itszB3pyBocMkdjyPbkpLigcm1sBJ5jMBqGrJzBLuvSTm5e3S8kc22e46ySboPnjTLfRxGpPQm6iYBg",
  "key2": "3Rk75iFoB6NrWTwZjSw5KkYNtRGvSRL6cixrrbGNKbJDE9F9hwzS7TgCWYGyHVsoTQfdxhtekDEigLnWfLytVSHu",
  "key3": "42BscEhoqXNKVAnb14E4KcgvpWuK8Syb1g8WeCfTFR7EZNxLojzGyWYNMPW47qLTqmNEwYmJLL713wNGPNSGX8N",
  "key4": "4hTDEdtcPoLihupT6nNcP5yXatNgver8Bq1PmnvRFce3akTa9RoKdEGpk3AnKf5zJxJogxG2FJzaTmfKz69mBQyS",
  "key5": "3QSyjpEWgcFkvEq1G6SUdLU8UsYxSzQmEosRwmQrjDPYMkNSJpRvRVd7XHfgbHarTv9DtKvvRo2PjxPU6N4DvYs8",
  "key6": "SCeeaSSmZow5hjEC8WE8ZVS35wMNreSvXcmKPjXVx1SSHFrdYnR4b6BtwJE5v2fidZjyUk13EWmvMTW6PTXYm2f",
  "key7": "5a6JEzmpJ4LHEhkzAuZGQcjtEzYdNBwS8oM6yfa6nYkH6G6SRvhEhZoSUordz7owy4PR79munLhwebEuTQxi3Mke",
  "key8": "5g6D5CdaJ1hwk6W7zSygFC5M2qKYLvkFcfHe4LJvvLoq34x11dEUmKzhjGVBd3Beh6w2sm22xpcmocBtjyg7jMwX",
  "key9": "4Ssr572pfPXMV7vjaSW39pEeunN8byR3jwoD4hy4S6mtqUj26e5G8GGgBRWcsSUnp1qkQHsvahqDD4G1x5Tu6Htr",
  "key10": "6tEjG9jM5oFgSAVWZdwYErz9XYqDCfWwoHYtq5wofKAyoVYNsjr9ByTjDAEkNhMqjSvh4rM3Rt3symTVJ4Q3bS8",
  "key11": "3ikmieRjLZ5zSyvrRdMqMsGBYJxYnVDkwrVJz1jj283G72FBmioGSmonta4FsouGS79NqnFJcwXKnRg66XdYpYau",
  "key12": "4AKiCC4r5ZwGthvZQVE9q2f5nbpVsaqbxp4XxdAnf96P2h5a2JtPbDDoDrdiEwGUbvgXVtQ1UrxdB7HT3r8L8Bwn",
  "key13": "i4HHiEjxKhHueoLD4eee53WHYkcYgAZk7KoajyWFfHkovXAxbyTFjsv1bgoyEwDiVCp1EHPTft56MHr7jmKAc45",
  "key14": "29UDQv6uA3NU5R1UQYZeuAfDXN5hXYaC3bYLCrCQDW1ujBG55x7oKhusKE5vWMiViFbZQU6Tmjem2YvsQBSZf2mt",
  "key15": "qAvdN7eCWGwdh572QZNzB2A6zcK4qrfxFoLYRbYuKoFQDAPRJmRxv22ybDcQWnwgqEes9dQcWVXKavTjdesddjz",
  "key16": "45UuD2Qg32HDkjdDBR4nqFXYAoa5YmKnga3rYhgQM2epme9sSJHCQ6Woq8g1svG4aPxr57gBZT26bTDfA1dyBCPD",
  "key17": "aAyNm7eLLjPpMcwrGzAnatyF97B3YsTDjTr2j9mSUEuMK8GDt95SCWiV6a3YdDmKoduWFxH97TGZEiAgpAUdM9H",
  "key18": "DrBcamrx7BFoHtn5br4QXyorRTtP7Sgs1Sy28os2TxoJ62ZvArS5iGgpy8AZpr1WLwCTt35UqQDJ8ChjJB57miT",
  "key19": "4nCBdXYrHFHMU2xthpw4nhU4NqykBbkUV4CSXFeeuPeK1qvobj1RyPBkickFL5TaGGkvAiZm2iGrpVYvciPX4vhZ",
  "key20": "TqbRBEPXdpGkVi2RgDuTGHfqumVXCNDWQYNPK2pD7V181JQbqZZsyWxyU1dpCNZdBN6S5KHse7dj3nbNutz8jH4",
  "key21": "27bkioRxWy2JT5GJitHxiUKMdfNRgMskSWv1q5r4nk99Rk2Bb1c8nSBrZpZmPZsoeKhNuToWDLgndxnggw3mTWrj",
  "key22": "3YnDgLUNpXMGvyy2jk5GdFfugDXbmorw73kwodLXgdCSXg2RcuB4KBVvnLiptRUGYjZ6BsFhfh2XB5MsL2T48RUy",
  "key23": "5avenU5iGz9Rc8H3AN3AzwMXkeXq2k5uN8x5ZRu3QVD2CKKpBVzwRKKVpF4rAWdc43JnVamyx31oYF7LxXdg8mzZ",
  "key24": "5pvPWJVEEhkvVKjX1RjgCP45BqUVeKrobgMH5NByRMyicwKEY1wLWCgb5yCP6KrfZBpVRpojUTgz4mYiBnFBc4Qr",
  "key25": "H7CTA1xNXsttgSNJnMsEg3D7QomLCG4Wupt1wJsgLfaT3Rk5oBb6UEnX4JBZSGRLqXMrYKkq6VrKcRNaAsz1pY9"
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
