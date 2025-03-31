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
    "eWBs2rfkR6UmFrsMZb93zwriBaCc21bioGo1Mafb9RzVjtcpG7diRwBA6MXSFrAiPqXpmU4vopAmBH4J7CEZRKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44RjuY5iwwzRHChpXUQYARF981TLzJsN1hTkioQzmQ3R6yma5yRsDEDmDkjs9KagEHdvC3gHFiyEdzDtGutHAkmm",
  "key1": "66nSx6m3Xu3RYXUswgrHakqzpCLGnvPmFuYDswMX7BTxzk6ohrXcRfxEAhVh5rRpbmkYRHHJh3wUAseTBpYFFHHX",
  "key2": "3cUP3LSQMhXweju7hXxMUnJ69mwocZWitQg2CpNYcREFr2bAKijHb8xxR7W6YGQ82bT6d6R75hegaeBUTBuBCoUf",
  "key3": "3tW1nj8j8167j1iTMwBr6qw9gfL9p1hNVSuvZfrHUMKUdnHFvJ5nj9Z4yucDEGQi5kDkqBLBgKbEvCZCStegDYwg",
  "key4": "5qW35jonEZZ4oeFendLj7WbPju9PP6ALD4R88jbVxFHP6VbGWwTuDHMsZxJcZBhvx4qLwfhSxBmYKfwwMg2W1qgT",
  "key5": "2MsvV9L9pJ2shsy2eDSE1D2gLKYqGwjRpnCZDiikvNENGafQPHkKm9UTBHHpZ3AQRHh9kHbDRgx9mS7zBJrWX4Nc",
  "key6": "3dyUJCjHAURRMMkvim3uH59kVGDxog5FKEsiFhb3o42HLjxkjoa1BnGJyGWvmfZJ14UHpXeFQyByFZQE4FGMdn1q",
  "key7": "5kthqLBex6otzxRuYdCNBK34we8zruBQk5T7pnrfurnn4a1dSRXvwjteYNwTxEED56zQusuJbQFw1QtcmssaBVhR",
  "key8": "46f4opThZgRPpVTU96n5nA6MFHNF6t4MKcSgoKUNAGwvbcxF2nnitgDw9ng4bXNzJvNZTsw6J4KEauu5EbzWnuVU",
  "key9": "47yDMrdFTcSEmicUhQgKegtGFrBNHU15FktdBCy3HTgnoQQRoR9Ej4oKEGfHM1hxU2gnJBxV1cHqj5ud6a7XUfB3",
  "key10": "4yPLvmEUMxtt1UySXTFJcUtqkm9V1933uAN8Sq1aUtL9FQ5K8bTUdjwUdMmrkBQF49KNiQuiyrBj1escNgJT5LSE",
  "key11": "5ukLsetVWJX8GFUCL4vcWToD2JCfzqxwaRa7jTBxN8HAGJ5TGMnRsfvGVTspVrrxAgiZdpQ38Zfw87djRYDvnfn8",
  "key12": "DJ7an4SqLB93GLJJwZ8bio9AeAFKD6wyLTWhRgj8qM6PDsZh2ZfXd39i42wWKDEzVvTmSvQd8GhsDg3UzhHrxyN",
  "key13": "4zJpSvq3oveN7nw71YqhNbPLHQtRBkNYRFHaZHuL4C5MHyUBEyXqfAF5NofzubghSrHvqsfNzahmHCMUBvcWuZgM",
  "key14": "5WAvPABNRf6PRSqwNTTL1Ud2aHTHczF7HpfWzH7QYpJwq4WLZDyMEsBfrPHN4HCfg5mycfF4QKbRXeasgFiDX1X1",
  "key15": "3jnE98UKefJZGSQPSXFGyHt2rbkZgDSzqgG1RvW5w2pzB1iYN7vpzQ6wMojWigJwHQN7B442mTuRvttwU721TYHg",
  "key16": "wAbuUeg1KgoHnyJt11TJXWpC8NC2k4KtNJDYxsbintm5aYomssHqnYdmm2cTh4y4dKm4BATUnEuHHstYg9yhRmL",
  "key17": "66rn2yVGXSYMHXJwJB5zrshHMTq22AWT8z8grQZibTE8Pk6jm86Uuq2VMUqhV7kActniTDEab31Do4Me9MsQTRex",
  "key18": "4XPtgbarY3dP2VvWivzdPLjZSaUtFcW6YuFJo1thnBQJjKiTBRueKP9qpYsqF515Mf1tnT3ESBca9DfUWQpYjms9",
  "key19": "48TxZSKXUjjpjuhoMxLMszbD2Y7anmTSwe2g76TYg3UknDumGxWzmYM6c6ZY11F7tb48ijgJDzUMq7kAF8vLo5UK",
  "key20": "3iwzm11Csd4ubv2aJ3x4cSc7UnjgvVjq3F4Nt4EXu2PF4ZYQVDqGqgP4wxxV7QMEPw2B9FpdcAj6xb52TVUdQp9N",
  "key21": "3tgLFjHq75mebK28KDpaHU1f56BcNduw83sroF11phQq3MywKwDLEyMnaBLBsGun9CGATQWvgxAjRMn9jSEMUg2G",
  "key22": "2Ad9pFiVJZMME6ZgbkHU3kYMPua8Y6SDyj9ogumVh4YDZ6DZGEfMZLHzKZyp1RCj9edKhFnMSKHzLtrUc4qgYa2u",
  "key23": "3S9y3HowHFd5bU7nUamZEi4f5HpCP5fNVpYwbNj6gCDdeGCnvrCNE8D7fFMb3X8dzSXuDDp1DW75vzYN3Uh9w2Zz",
  "key24": "2YKt491Psp4MWUbimSWsS16WqfH8rKJzQ9XV4zWjMub4tRcyEWrC8K2nSm9DyBuJFmr9yYVAgcusoCmUC4awZJnG",
  "key25": "AfxTZzhZKUcay284pMxcnPz93LAEfkQ4wLi8yVmtdfJr91b6KAXqNqmstkfVxqWCrvyC83zMmPrJUEsfQTo3sSa",
  "key26": "4mYeavT3bV5s2Ki9nrz7EcL99aDGjXW6PbkUQFA8zw87KrtA1UNb4GMAU2QF93ounnnjMA1pFYozDPJ5GXjKrPc5",
  "key27": "2iJWYih4f2HzSNJaBYTDKxKnjnt2eEHf6r18C28T2f6KRe6BVeeDgShG2pDAN7Fj8pju8WEGQdps1kbmsmm9cLuV",
  "key28": "5CwdbWMcJ6q59bbSSvNZytFSuqk5aQnUhkmQgpLUKh1VtjMSvs1LevvfQ7TSkfa87dDpn7RwbJyAfHnniEG6TpAR",
  "key29": "5kG4kEucyroNGmNdobK51bgVP4dmyAtiuvusPTCxQrZP2WvgCWTziVntHXhETiQncXuHMgqSZ2gf8GuKpgGRnAPh",
  "key30": "2qKSFynzxUapBaNFMkx4BVi24FWuJGhHS5rUccSKxUSi27y8La6TuN9JnhaFkvyrmVkbNrjwd7f4tZBDrTMRtgYY",
  "key31": "44QDHjrHCXoKe63wdwsmcpWQpgjBtFyDnkzUcNCUwscGdf7EEw6yZFeHFcqm4m2yxftGmGqSpgiy6YHfmKvLKgrx",
  "key32": "47BtKPwAR6Ge89L1imEFZJVevMcddGVfndHie9r9GA1ws2bufbSHJRiFfxzCPXkZfgSmrtVDvqNAuxB3mDyzwpcf",
  "key33": "437h4TzkPihyuFH7qHTxSEwiMa6824rorqjjV1nJXB6tWYTLSCstV2wefHewWpaVYfLSCF1zsj4TmNEmSRCgBQKm",
  "key34": "UJXRiuDtAziH9ba3icp8Xi8Ze3UoAkV3fkYgkqW3TCbWjvHLjYYGMKXi3SRGL9hM4VctCXNqkctphTBJfQyf3oA",
  "key35": "3EtMETxu2kBm8emLE8Z3Wg4v8PcmPTRSSwzqwfowpPLZMPFiNiGJWw79kssy247nrsfn6gdw1Tw2ZLJU9yawwWry",
  "key36": "5KvBzZk35MfGLyhBNqbsEEu9CHZqRDKKEkSzgKxtYWyLuxakoU7CmDBVexPKocJgUdQvAGrHJExaY9hwfyutG1mG",
  "key37": "4DWaM1NqezUPHNHjJvhN41m3akMMJC3o5ThzwEhxBV1Wo1VbZZoa3Stj1gMPRmWfSW9SWYnKiYdfQpof1wvFr1DZ",
  "key38": "5J94aD8T1JmhBtbtRS8nS37ygnVYFeHF5UXkkk9x4zs3h6bwqGm3daE2XKA5op5fUkvpMRZxURXa796aK87fua4Q",
  "key39": "21jt8wQ2z9Q7DHyYX4oL6VWtSo3n6pSdffCm5hpGjqH5e7jCpFmf1NLFnKno8oo9oEGtnmnJBA95QaMquAyTPgoo",
  "key40": "4Nc9JpkpCZUZQZSjg4WtWgsMbJcrAWp2Lv6X4SA6TXDPem1MtNuzJuqLjPrZGDbuhBNwsb8hmiqW4w4cHLZ3NLVj",
  "key41": "B6LVZcTe8BwrXqNnSF2PevGLVQodgTmfCbcU1k7ni8xo8V5j4tBuDu2PcpEy8szffJppP91aDKp2WeSZR7dcTLV",
  "key42": "37kRPp8TtkVLxgMborvUN4vpwweaFsv6FGM2TMZ1ymnLxu2qeA7QkunwFiEFAiEWWvqjnaSX7gjLWFSqAVkb1WbM",
  "key43": "3xha5NvgPFGEk1EmJkDiN9LbBuoVwJapr8jivzLZaDJXuShrCScfkTA36nq61JCjLexet7ZeeCuoAbiF5jYromeT",
  "key44": "47WYN89GsQtrcaMvJNHLML4BVEzndw5WaDK37k3zKs7hr7UXNE3MXvcFYQZD9CVwEf4htURimGyxS7MpdHRbrU9g",
  "key45": "83eNpk1it6wxEveh2ah5u7zATCEd4MbahkLNdHVWoxLMkXs5faXcxk5zGaivcHWsEN4Z8yWWsNkhSikfudFe2aP",
  "key46": "3gyoFp69dej5WnFViBXfo31Y958F4cjqsA3K9PPyo51ng8VjjnUdWXoC95bYh9yT6FUzh5nqjuKJY6PybVjKB74w",
  "key47": "64gDH5Vj25mBJELTCfr1XCg1KkhXgZfhWaF9k1Gnr3HtagsoJt26fbNucNbwuBBX1fJc4PeuMb4CEA4b5k6L4nYc"
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
