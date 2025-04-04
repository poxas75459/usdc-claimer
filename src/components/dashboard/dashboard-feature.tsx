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
    "QJLLXbhWUJouV9GdppBpPYyAxbvtJcJDqkrRhm77ss9gR5EhxcYgqFF721mPoa7nsHYBfCXYsRBSXUX8cPuPjuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MnVyqwgadT5k4cU7FwxHfuUaqGNgLRnT4TZ9KNQ1m6dThquqyvm5ftSDUpVQucMTmQQU9RKwC46emW1f2YaZQLa",
  "key1": "4RxLXQHZyUPidNfUTd7daAh4op4Q94QSUV9mHuWxgUBXZY6PvhXB2aKyMZoogkcdp6F2sg5dsJzAv4tXGW4hwHK1",
  "key2": "3RPCpcfdwaDkcDrHK3NX26TM1TnjdRniT2y326gPhDf5HWDNGQrMrrz6HjehtzvrRsN5Ux6PeZrp6xmkcjf4kUvE",
  "key3": "5g38CbiPjigPkfHY1m7vHSovGYJWQoDabeZkJU4FxudZECKYXhmag5pA7rKHjzcG3Zjwi9r8LiTxBbJFxKkgKCpg",
  "key4": "3vkcT35J8A2pWoN8MHCkdcmMTgcEk69WCDd3HD9TMyYC6aPdMU6N919DZxswEQqXFM8dhWhyaBpp9GoH6zUjjXS6",
  "key5": "255TFCLavh2i8SEb3BBGvePRa3osLfUwFV3TTix6Ko2qnAD2EqjkdesfYqJixG2raefWvNEu9JkHeZV9Z1k42WxX",
  "key6": "2dyJgGEuegwwTc698RuqVLo78Z94t4erkuSvmJC6AGBQPSV9GRZn5HaDYnedPQjTZVPDSiQdtEfy3hrqBv2TrtV1",
  "key7": "2BiUgTqxLgkW1uTCquZNJaDL5Cw4YL2CHrUK787ugF1LHP39EkGzfxEttXwVeJe4NH4sN8wwaeSAZxb633zXDz1J",
  "key8": "2iWMhA2qdz7iBh8a79rydzzZUUuj4CwE17zn3xvvbizfgqqCdoaDUXDvEDmmgFEvQpMZMraavr7asskBiGMhumoX",
  "key9": "4g6Smax8nXKumiVHWLG2igLEH57MpuSgHSw9nfZB3WGEEbUbPxnydg7rqZfvYT8xhoKzCxbVV3mh9rwqwsQpoxqN",
  "key10": "49bYdKSVmdoxJiQsf3wQS33D6285QeMpUhHBgacx9mZHRqAwaqkcaQCmnGbyTeac2VV58HeZLUSpdFEtm1vCzsTW",
  "key11": "3AV4NwArtGsn2J1YqfEGwoGgiLBJF7wxt8mV2DVv48zLdvvKB6bqLNppR2Wm37dGB85b5yTq2mWirCavQTsbaqB5",
  "key12": "3D2zHJmUVfCvzNrQ2ysNdCPRtNsC99qYfWamjTipftPxCTZkT2JtdjWcd7J2mBfjW5guMEdGAyoCWDZ5WGiTYbYS",
  "key13": "2Rjx4MTtFAj3bED9i6koH5yHsM19fowzNExyZenk3HeJhmqQDV94gTFeCp317aLihVp51NzKH19R14zFaS27oHKE",
  "key14": "iMqApNXAQkiRWuQGeNGG6PYimP1XR87oofK2tUWePWhNbrkeZSVtkvao5QLviYML2LgwdFYUnCjGcvk6hZvzyxe",
  "key15": "2k3oGKHvtDh8ervumxNP3LvwGCo1b6hkLW3YyjZFtkuPnQL46MmWw3Armxb8aBupfFQGrtWBXGcoi7pY5mRcNvF8",
  "key16": "J9ruHMtmeNFogcsRGJ9vjQYZvDpyjxoF15SMZktBauFutM8h4HUCYGw8wHjpk3n4sBksJ9tQmWEoLrDceLZ2pho",
  "key17": "EDv4c3b9GAN9vodZiBJjNmQFNcTcdwgrXAbkmuPLYinvEatfQRvbew7SsTvVQGDjtHHURbFGNniGqzwu3QEXSc1",
  "key18": "47BGYqS8b2DkenGBVvij877qkuiGNXZ2WDChr91NfobF6rysbTfbGW9TgdoR4XxXCKuYfjheszB3HiZFTS51gEdp",
  "key19": "48aShm2LDbDWAyAcEutW1ioEnEBAp9sXRLjNtgsnuCEcBbRfYTr93YJaN99KYJ2KTNBxHzYjK4gqQCq7ocZwn7kU",
  "key20": "3m993tUj27f2fcXWfwcbWx2pmQLArmsYUU9SEpZGUsdNCx5tuQ6YXRfr4kAyFwUxQNKhQQ4VNktmLkCUfXMRBmLY",
  "key21": "58im9Qe2cu8hVNfePww6n68bLoRoW3TxpcBzXy7h5q7yW3r6HtWz1muUuWJnx9TvPP8aZgNSYdMsHNdxFzqSu8bH",
  "key22": "vEdxaE5VpahH6ib2gnRn5MhKXpBcmtD8K8dMvGv7fq3u9zQXzK2N7S3caosRVAezUzUes8vsyAzF7Q9jenPcCuJ",
  "key23": "NkbGdNuNP1iC2cxF3kVrRbUvPSSXErxYtegRiWesF3EEingBr1SD34cWmfFpM3S5iaegkxDAgJW5T2Kar2fdYDF",
  "key24": "B6eSNZaGCdNJCb7oiEjKgUMHnVntwCdVVh97i7sc9uBrRMMsgxP57uxKcjA9NMeMXQpwokncbjGvakcsTKBzqHX",
  "key25": "2QLRPVT7Hx4Pac9YQ5FAequR5XrM8PJkEUg9ny241y2Q3JVjwyMKPr4yRBpGiaFePuhNtS9dG1wGM4FLY6rz9cmp",
  "key26": "a6dkaddSGx4EoT8n4AsCN4jr5DBxbEptA2ET5m8HojhbGZeswCwFUTirfGTF178rxsR1DdVhxBuHJp755SjJcPu",
  "key27": "58Zo9Sd5nu5p2xentgMnyZS4GBF18x8TEs6V4RBs6CrrvGiaJommyg5oa3FexPHVqoetSNRTwSzVvw5kxuUSoUt9",
  "key28": "atMUZzhZoGeLbgCHJE24M8xQDZHmEbmrjscc4NSDSa5MRrhb8AUfgH29uL6L7nkkVkRHZURMKgb1Pu4gEayoTkk",
  "key29": "28b5rd7ojUNgeYiGHEWked78Tz8291K3JoguxqtD3fiuAPbVjZW82SBup1hp1tnXMdmfUXM9XwDfKzqakpGDjyj6",
  "key30": "4wVZfaNj1AJ29nf24csPe137CEJf1kit24zaoCyLy3gBD9BEwrBJRYcEXT1cRpnqRvU6Y2osrBfRivqWddYPumDP",
  "key31": "4Nb5xQo4QRJSe4hmQJqSmK8SwQ4gLueDkrmnmti88uragWcZ57Ddv5HkiVoef2DsuDbqs4rxCurevRekJRFwDLY2",
  "key32": "667CozseefR7VuhBmRR2KPMqpFfbmRcu6pomDCME1YGsxFcn55Etxj6WyWcXWi3CiTw7tXvhxLXFmL3L1q3njXvi",
  "key33": "211i2jwGrYQGsQfd13FmJpgoLJPPLaCtqDDaUwy9az87ioXpZ5YVU7sd1Gq2MkumgUwLoy8kRdoPR3Y1YJuip4Ve",
  "key34": "BRXC2VwaqJiznq9zsUWDrCPNFEEex4K62HAUiseggU1mLBeiJvgWvenbH7Kw6gQzjuPviEavH7kKj6ru99yfUDj",
  "key35": "JdTSHsS2uQQhLs6odE89NMn2omge8Lj6D8TRKThsR9ehAjkaF48d52DwBQ4ZSZtuv3X65qbPCKSZxJgvDbFXivC",
  "key36": "Zo1vuXhbcKE6HPgURfSY6dFbCUP7RBiLY1MUFWd9BGfvzURosKCsXmuXMSrQd66MfCoa3n9utVFZoLCezB3UUHc",
  "key37": "2DiVvBaUyYNZXttqM3MqmQwproteBQCS9DTitA81NjFCkthov7yyHR5ifv3FL7zg9jW2MXBRxBPuoxf1sBTZe9mw",
  "key38": "3VkCb3Zqrw7Ct4HwrgQRhFf6MMLhs3RcDJtjHKAtKbvsjDuyr7vUdzAziUndZJpfH1bzfFjE8kuT7XHYS8opG9Hx",
  "key39": "43UdRxLqEh93qVmN2HVM5eEs3xEznYgqudxagNjUh2jqkFBjuhWQNMsy66SYCWDHx8M8YhY3LJ3jN6jHmeCCkn9Q"
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
