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
    "3yVsiZdhKkAvdy5jmpsQd7rxXKrBpzQPZXTxVjyM8ZDEXbLEZKUg7JPaMhmoVTRBz2ZfUXtjLtaamWZ3ete4t8tW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vR5K9zo7aHxZeQ72GztBxhnLkhDaVscP2qGMDUiVbernZqodXKqPhF6cwbXzu7Pw584BaPXUTZuAiqPG2sD38LW",
  "key1": "2KviBmqMntpYGjT8o5vmCxq3ibF7P1EdxZQMgvufxz3pxbxgi8p1qUqB2Y7rkB8TzUqkQ5pCTXr99MHiDbRPZy86",
  "key2": "2E1f8aUNzVjMzUTbZPyMUHqwvADPVo16xNAnKyTbyqKsDEhjZAQBaQaj2NNujHxLimGqN15oxFduDpCnsghL52mH",
  "key3": "3y5idgZ3SeJfBTYxkXDW5imPQ2ufXoe7PhLApuqnM9cusYctnRJ9DQ6yWhJRBQ8wwgGUTWwNXRkn7CYKNLYHR4qz",
  "key4": "124cKpzrUQXXS88aiKCV6FyyCiuq7swMArNrjPzwsRJTDHiweEq5aB3BWkrhDPw6x2rd9UnHa1VCP4Yjn8ozJUaw",
  "key5": "3f1D1ZHfoYaKHHMAP1oVhBk78boVNhu8esDePBBbXmTFxbRVAPCRk38v7QJcK58xxxyea8gDihvGmJW9mj4MYBS9",
  "key6": "Ew29MX7oFWFtF3TkUGvaYdNpsTPnfro4FDVNgmUDiLg2e1hBNbxbAPYsgMU6UjXLrZQguuUCANiQwx2xquTFHTA",
  "key7": "BNd28v1Y6ESwectTzSJ6UZXeM3BJRjxCZkMj8A9XmePLVefymWKHn8pkjNgBJMSuJwwNwSH7Q6GmXiwh9d1arUj",
  "key8": "2VCurYRsNbHMR11zRb8NUMEynDgr7xAdHxWwwrssgNoQ2ku8e7Vj6n2ZeESZPYYP9EFbrdixDz8LAxdY2x1536sm",
  "key9": "2xiGn4cHVYfGNUo19CepxvyPoJiuFannQNPcScvaVpx5kPLnbdFpGkGvmzyGo39iCHhmdXHrq64zbpN9CSMc9Ybh",
  "key10": "2ovwQrHZ7ck7ypkgrSWaeAwdtQ5ZXTmCRFbgdNC6RSuYJVh1VUZjV9ysRJd2P18eMwXFGr2weASz6BxzWLCWpFif",
  "key11": "47mevAoyk89Lg4LrDtKWrWvnwef6dKZ5ZCyMQUjNhfe3eZFsu89kYDtEEtZTC9WRAEaKmuC81BUL1DqC89KRfd61",
  "key12": "346TEH26t3SZ61svxm2eXH2D1hMh2TeH8xeNfK6UZVRiZT8pfxaKCuuADerWi4XKBd7nrKZMUW8vAmJvD39rCVwm",
  "key13": "4jhQenEvuuHRNs2VPM9qrReKgzVSS1PaDBhcfagpyWMjvQ3REJqUUGmusQdVELheGSLgKw47uCLMaeJGET34ivDA",
  "key14": "64BF7RKDc96DPtmkUt7HpaRop72yu26WQwecwDR13wQBH2K7T73PSzBF8gKC71wxnG5HwYgrPQ6m3sHNZxwiUCYz",
  "key15": "9NPD9ajMMAk2twftVoikJHeXuaj2PpPZQpEwzLiBoL1X1KrftkVZYkxHTgrcmy58mj6W32QEmaocafBjCs4hjUv",
  "key16": "5J8NSdeZvmCSELJynaxeLd7QViQx99WtwquTW9LJ5ZBxJogbET5HnqVTHBouaJze39cmHJeD2dcDStqA3QaCiS4N",
  "key17": "3vy5txAC3umVLNA8LRkF8Wg2NhgnjU7UnhX72nhxB2B1xJA24wg38MaKr1aFF56Ze4PwX9gqgFMKru34Wp41wo2f",
  "key18": "wfQBiF46xVi1yi6DBihEAsrTMeL31BxXRFrS312DHJ9oEP9DAY617Wg8teks63LmNu6bNR1Ar4m4vqHYxzKGxN8",
  "key19": "37sojuL7akJkGrCfpcAeGEB7QADYhpT9vkT3ph43goZGb1jfFdGi6ZoS7SuxSHLboZA9RDY95mvxhmT9cr9QAnWp",
  "key20": "bLg28CeSQVNJyqAwEXMPGMUcF9xkcFuYre2zaCGAf9TMudUU3anJQvJdxHnz5Vb6PYYiZMQH4D34yJr8Yr3Ex9N",
  "key21": "55AKqT5L1spzrPo45aDc3CepkGYZ8qxNL4FcLCAox5Evb6preYuA1pJh6mDHHmvoGXzbS6UZQgcs6TdeLuvgA9cB",
  "key22": "5RAFWrWVbv3ye5ckQn7DFyPfijdFMmnAc7EgjB9b3hFEMvJS6ZUW85hgEdbpVmUARQAShzhW3KrwDPtzWizro17o",
  "key23": "eAmrxwAkXvoMRLgoeAeXHBbt5d2ua9XWCz3HGTt16y5uCr6QtLabXSptnvyJRDf79roiasc6k1NUhUT8z3eCz4y",
  "key24": "ELJrP3SL25PvwYpJ2QCRnxqBw8aJVKmKpoonyJDS6P2P9g68gRYZjeVD6nQJURSHcPWZwbJfjfQFBprB1LcVRHH",
  "key25": "21Bk27pCA9CMsTj7Z1oANBSQvgHgEzKjChQy3FEVQFUEBjnecZGArnPBMfLw978zm14qbJoYwuMKA1ra2R3EyiKz",
  "key26": "3BhnWGgMZ3WmsPkA93RuLRMwVgiD1p5sRgstam71NnvV79Ti5ovzupAdfghDDvWE1vogq4Fjx7ZFzWXvEfiXRxV3",
  "key27": "2RcrSksqvUVvGA7Zy7stZN5xZ5WMtDDi3WLupVuo4KQg7zbDTnh4KnF4DvJsXt4TZoQuDt2t3P3pfBzUSTJvNaBC",
  "key28": "55BQRBLm5nEbktCt1A9edbdoGmo8kPBr8LiiEogDTPG76UjzfXxzFXBttNNNNRYGRieo7tCPSAiZnn5hz7uhkjrk",
  "key29": "5BM4i2CqNeRb2iGggj8gM3jozyeaidXREHYWss83nchhKAsQJtYgPbgEpzAApixfMEH7KMnEv81KAZan2XgCc5nm",
  "key30": "45r312ZgLhL2Nr93NYKKLZfjvP6PQF7BbgZfLjXVD5XchwjyYMchysan4cAqTWJwQupjjMwo5C6YiocVDyvBieQn",
  "key31": "38XB9oPRm1DBDmvSqi2FFurJVB6cqSWXLue52jAUaD5Lx3szi5mFPwJ9tgMC3HzNPLE2dAh5NzpuBPW6EgmDQH9E",
  "key32": "2UKD6eCvTY75LD9SMtZv4sjpk4BkwPTbPyDRXdnwEoVAbAoxAHAHhMHp1N7ay7GG4yAqmfg92h24gn6YPsk1AFbN",
  "key33": "611kgu19dya7j6mzxNjQ43EVNpf4F3nDtDC5SDEQE7JEq1sAKQQD9UrGbAsgYsKUQ3UsrcpsQ2Eins5JF86pXiKW",
  "key34": "4eNTQqBUgAcJPBA1WuwnHpUjf9FTCM45dYg5p6m8NufxJjFNXn7G7rsz66wHp6GvtG6Ndrna6MaEmFjr6pjcSmVK",
  "key35": "4AWsify5NYkmamQusUtwAh9Ua3Nd466eRmRR3n9RG5TVA4TWHMFFVv6154QDVkVrxDp8ku7K6xDm1Du5nPzPX597",
  "key36": "5NX91E8c359wD48iNzKnTe8Vo5JP4G4ug6zeRgNXNgPGG6giYyKbp7zGprEPApniuAE5TcXaNzPwdTFAxz2MpEeL",
  "key37": "cWQLYHktA46t61G1Nbtz33WxYiJbDwzGzqKMy4ciavsKFvgoAHYiBu1PJxV3Msc1yjfmS7yc885QMiuADSbeSWx",
  "key38": "oBasnnKjnFXMXiCvxjRwjDYRFfUvXewHoR51YC52LvyfoEc939gH7qTnqhUsoPqg5HaUgAyVV2SkwLp5W3NkRHT",
  "key39": "3FvQ7g4WFU62CaSi1nasH9fDqzZ6qD3gzusJRP18hru1BDGSPmN9UpwUeJcwkycR61Em9ZAiiVpFjTwwKfckFzRH",
  "key40": "4EDTL1g1KCTC8KGQCAzRFv7LY36Z4HxTATz9GeyQnEAcPZTHX6qzdW8nT8G8fdJ1juE3MbCrRqRLQk9Yxiccr6Jv",
  "key41": "yRUBFs9zgH8bACCQAxDsobh26KCK8WJkrkqJYhb6T3xCeXVCZrD8NMtsjiELaWAMMzyxXiZGtbF4vFLJWGgJbVU",
  "key42": "2KCkxtWXSY3ps5mRTGzBDRNA5WfZzs17oDgfkP2RuEmtRdsUfNSvaipCAVJTmSf5rvXp1vEQfR9VcZBUnhEu7vuU",
  "key43": "3rRE9XJoLLDESHURKvVTH4Uo1qRft3cZkWzNo7wwnhrPZfW5R598phrEgdz9wrYdfWLCicXPUZGQufkEFGzCdW7H",
  "key44": "52VcmpoJeHzZk4UaR2UEgXjQwiojCDcwABtmXMNTqbRnqRHPooxtCfp5iK5ZLyXBHQ31nBDJimzVTStv7CGM37fg",
  "key45": "TgqQsz7oL2zmwJUbdUC3ficwNcvmNguRE7AacTnjWG1yQNekmdRVq9BjuLEhEoYq7CJoJwvJsYFMnvXiCXT3QR1",
  "key46": "5ZtqmMJLMf19rJdzLvfSunwCedaPzSq1PC7Eek8inRoiByxf5gA5N3BwVcZCrcfLVP4rFcyPwPrpbD6ywaAukGTK",
  "key47": "4bPojRFaTGfjiy6wbZqCmXJbzZCeDTFz45KUfeE72nwsv3b42G2XKnpRTNSeMDLAFkYRXhT5j6SRqTVWSFNX9q3n",
  "key48": "3tub8J81GhUCPdFhy6B5tpVrywmzQxeNFcQVYEzkeT8JaPcWakeRxcJJ7n3EMEk1oekz9NN64JDQ1K1JzGgjj1dP",
  "key49": "4caHpC5vuzoTt9tPcMJPqRvySwcQBiEYmEthrwG8UU7DyoyvbNGFbmB5KJc1VpNjhwMVVkJDebyfo6EU8v9Hxwqd"
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
