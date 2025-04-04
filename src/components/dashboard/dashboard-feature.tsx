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
    "3fycfiEa8HfU7uSwNKQeCGyBhMQZ85Gktc4VxBD3vYtf5qX3hogqftdWYu3zY6CfD8WPJSSe9gykotNk7WdmG1Ep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pm9KieFoprwZTBBrwoG1Jq2LnwUfdM21w3ve2CkkCdnPMiRYS7KCbyTUmChiGM4cD1yex9khPPV4g1G1LqXgGXM",
  "key1": "3VhQfV8uqLMYXaunPsJA6Sy43yWMiAdPN18Uska8yL9BmvXNsijBR4KM59YS7R1Kf3srEt4St8vq5cUtk5x9QFXF",
  "key2": "4tk25kDAiGpaAeAFGrmPZT9n6e3Cr7pJCU2WfJ6ow3jZKaeEFoCStvcxahBnpphCKUh4D3T8UrimLwvG22LkZezb",
  "key3": "54XznT5jb9h2E4JZjhgd1bjdvPfFxq4KQPXSHbvpGRyHVxn52RRgme86TBrc335LTs7vLJtsjYWfndPafrBehyoX",
  "key4": "537Pt5zNPYUaL3wVEahxepJ1YLDxWDu1ibpQCkVMWRpSLyNuUjC92JLBwPMcEgZZ83AZHPCFqMDP74V69MywfYHz",
  "key5": "3YzTFK5PsDkdqhvFsZHcoDfkpSrFsbJ1kCnzT7KZ4ZeLf2ZkBEUskYmxtkH65TioyNx2aUs9snohWQ2KhS2R15Jm",
  "key6": "tFhETNkw1c57iXSJTCAdA5PpiiR99vSZA1o4zmwaNrFhkEdMn5jwBviynDPeHKqhBJBv9FEb2pYhPbnmUNrd13z",
  "key7": "4tSJHyk3GBewhaHw7jfX8Rkkhn4aWrMLMUnbNLEVLLDi4SMckNWupUunK4BZxhZDc44HjjmSTvRaggxLHzvtPynW",
  "key8": "2Bra2RrUjjfKxTaMNGn6D2cmnVft7hckXqdxYsd61RMdvZkUeVGa4Fi1rPzHLJQ96UjmcGARGBXmvdmsF52xKbtR",
  "key9": "kYgzafWHwhqZE4c5XMgetRj4axXBfHt1vxEZL7hP2nXD9c6oGZP3iZix9ddffdqLQLZhTZUGPsWCT9PDC2UY7Su",
  "key10": "3JZmuDs3SFejioeLexStYq3T9JJdRJ4VovGdDLRBvzh7cKYPHCr94sEND4Yp733noSBaVBxZryunYUqFNd6E231S",
  "key11": "4uLT19CfRy5bpJuf3Y6XmQ5aEuBBXHwwoSMGZb8JDgL2F1Y84Y6wqiUfRTMbBt3k57ngpEx3ZLTxPHsFBYnDw2Qc",
  "key12": "4Ydx7q2DyzVGZA16PtGphvpZbAeDCQ5dU3QzQiXsC452yV71NTmhYTAxKkKkdGfKiXQds5mpWB3Nn2hrqMe7BEeE",
  "key13": "MxmVv3uwqrhm1t7Nj3bfzpYXyTLXXtEosFC2ReSBT9amnT9ntMtCd15DFJ9VsNg5HbLpNhb6nkWx8qm42kznCsB",
  "key14": "P898q5V9JdGxZnHp73A4EgQvnVBpivSa5qwgxYe9agMuTQgaF4xekedMqwTSvyYznLsB4D9NJFk5RYA4fmHZMrf",
  "key15": "2hXVz8CTqyGSUrwJv5EKH2decnTTacx2NAfdW6SoV7BLLXBte75y6WuZXmNiwoxQNQ2cthfpPBWriBnUe8SjZ5kW",
  "key16": "62BK1CfySpEKPmEYRkMH7xv87fGfD8EPm5nRCYex94wCqXycpZHGoHZUizStFn7NouYCAREGUiwzurrPC8N6Zq8f",
  "key17": "2aaVVBQAzeXFrvPyKhm3ggcSRgaBcC9UAHzAiYx76E66aaa7TcEjtyUtjrRghb7kn5sTsAFAbD4ki9UdBdaEgEW3",
  "key18": "3WY2WywfPHymMecyjWxPsSEAK6oeAxD5t81h3Sw9kDoivDQ2moaZPhRAg1GDCUgEeo1egY7tcCy4xJgiLHKUkJTa",
  "key19": "5uV7KpiKSnGEaHkYoftvZzgKyWsTHvfyzaMkPUEHviJLEP58Uu9sJf92cnpeunFBnaDgAVaYy1bxASwwZ47jcd7N",
  "key20": "2hedSM8tPaUYe68ieP2LuxtiGFkBAiDF8xHAyQ932g45TwQiiwfE2JiQgwfbRHd8DCn3ZGHQpfpdFjmqGT9vnfCM",
  "key21": "4V5rhhaoKLjZiquztrGC4XzvusXzCJNBXJWDikQWfMD4xqBsokLew7viR5HumwbFqrCdCW9N6b4Cgz7j72XZjThf",
  "key22": "3Tm5VLymQu5DjoJ7nactmtSbmtFHvhFJJn3nx9Lb3pB5NeV9nLRsnoJqAqXNLZacKq9UnSeDdf3N96XfwMj3eAbP",
  "key23": "5edQYcPS5nWYGoFjdGP41wYxfLFsZGkSi4HNZPtM86PKjENPF2z2BtempEDcGb5vLrFuHwSaXVazkMocXgck9Zb2",
  "key24": "2PDoavtk8B2gwHBiTNtg9EsDrstubbgpFwdUcHJuxfWTw16xbjSSUr6h9RAmBbHNss8bUMvTmZLjaaMvyT28pePe",
  "key25": "3BVDf1rKqu7mv7Lw8LL5VhMW3jQatiACPSDZPBMyqY4sRNiMF4ne9Dj3S9oXTiLhSv42pRELfkiNcFP93jCTkiqc",
  "key26": "3N5NNYowRfcTK94k6odtUbhNGauvgniE8BaxjX6cW8XwGfaLo928GxwSQ5W3MMW5fQpopvnwg3k6vfjXoBv6JnK3",
  "key27": "3dxz1YajJL7hGicLZjcC84xiaK1gYKviNGStKLYt48WmMRyNy591xVRabRuZBUMFcbyVfz4Wf6HhvP6iiGtqqpzN",
  "key28": "5BovdAQmC6NaXyzshnKU78aPtrbjbdWoZdfq2eHHD71ZrH2q9vBPWy9Jt8j5eLsDVMkueGuNY7L2wVJBKovaYZtz",
  "key29": "4K9udY9yEKxWU1xfHJsb6CW4jRoLfHbFbnA9UGjk1kjCUVyqcvLshRYU79uLrrHXFi7NHNi2Cvxb8BAtdCbN8JKP",
  "key30": "4qvFmkGckG6NPEyZPktUWCSKjPkGQS7gSM8wqnd6DrhrgfFT39v8wZ3SY2HNDiJ4SghoePzVUPX7gDuD9jM1XH1G",
  "key31": "YEjzSQB53Nh23VKZwvf7gwu8Z8aCQGK4NLXN4b4pcM5uD77MyGQBmqiZigxhH7w4e8jLW7iSKsHgNDwrcEoZiZq",
  "key32": "gX743PZW3YxDqzvwr2UrRU246HhsaftJz18Abikav3oxLTSMVPf9fngKzGpYvsawLbdxXmtt6jhTkjkZEqdHyhj",
  "key33": "8uGZQSh99HcWu4sXdEVMG4F64gQeJkj5vDSs58jFRUpv4PiQNpvVXsGNzFxXAKR6FwVgPDZVW66tTLXhxGBCSR6",
  "key34": "4WPoU3gVLRYRsyeyGFPPcFGWpc62G8oACFcBEb8LzCJXAr66Zy41zdVtbauEY2oXJoazYZnYkPSz5n2mozhDt5z9",
  "key35": "5Di4DhRsFL21hPZDwpopKnPydcAXSP5zqCepGPBc8dyXEijsyk8QPoP6o1PYD81XcMaoWVoALAuRQP8qTykeZzpY",
  "key36": "51s3QSP9bhtySmv5GYxNVfJCyGHL9qUjdedAECV84wuxJ4LftvAZdpb2Cp1RgdqSk2QCSnffPR5UCooKTXDY3tSq",
  "key37": "uHp7Dkig2C5d4VRwKkWntGyWatkHiFEiF1kaGcUPTnafTuvJUR3nUB3vr6oWQg1PGiGZAKkaJGaKtzR1eCpaBC6",
  "key38": "2hfjqXC685gbVQ9swtB9p8NeF9UKMqVLAqtw6CZAJq4ENb349BbEXWtTrhsThmd2n56yGZY9fm9zA6WcDmjuoztG",
  "key39": "DMArE2LjdSaNpdsQVJkA1mFiXzPPYAv2VgbRszxNHADqCeczFZciHojcDU396S94TEsRmfrU8sT6zxa4kZWLq7e",
  "key40": "3Sg6ddgH7diVhcVAgfPjDzx7eKsMotRXNRE2UbJ6aPAymRRMqAXL26h7ArizCoiaPDycDh7t9s7auyXBQc6ipRga",
  "key41": "3x713n5wWxCy5tdVPNjDGjcwhmU7hrZa8WpomtU1fFHEK6vLZDRCEvxzVBcc2N1nCfXirKuneUUMLMRzhfwSwV82",
  "key42": "5TETWpxkzBgFw7QKiGYEhPNTt3CduNkNHdDCUZTnBgvXviNuk35uNrw2LE9KULcYCzPcm8c7J97pgSYcTMZh4Boc",
  "key43": "2WXfrFLKHSxDsEZpUYyZmM4pouJX9BP2waSBzKMv9SHuWtw2HkP9nvwM7ozEV81QAcminiDi3q3km6zgdcYxTsTY"
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
