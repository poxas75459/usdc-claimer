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
    "4e97676Z9zQjTfvaRHJBR9NFsDD87uEhZYQqhBgJ57iQhDhu7YMN3jDGJdaFuB9q3yHVA1NgE1hpNpPi7tsmCT5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hFL56fCQ1xgqmjuUdn3Sr5qaeyxfTBqftYDAT7oUY9QK13Smcc7gC9UrAZajApf1Vr7kSoJ6Sd4XJEMAqzqsFd9",
  "key1": "4VBRbDN2ePgPHXk5ubQqeZzKFxKhn4UqkA8TdcmfX7hwDPV9pMtvng6GRWcTScwGydn6sgkgi3SUWoSav8twEExr",
  "key2": "4oDr7vxWWSJW2MWqaP3Prsr8mm21BmTb4HztW5rJirvmyikN9J3F9b8gbZ7rUxazvBJ2HhuBCLT2vsdTFUc1GqSE",
  "key3": "4rS57UV2ZuUCXrcKyG7s2o2usa74P4gsLzbMvrX7eXNgJMTdUabtcEdRu4KrP7kHGLfYUvjVW3VQADRoU4xeMtWW",
  "key4": "3yeD8thwJS3w5YfX2ah1n7cmpYxbi4zhn98dN39jxJWMmnRCpHYfq2kFrxkkaCAYb51QAv9maQtjPrcpxnfXw6Rn",
  "key5": "csksUo5e1inBhijt45YFtccQN3uezSnqsMsR6Qg29yd5ysKZX25Lx9u38wVB6XASztQdKNyi8zDfGkE2bcPrVwK",
  "key6": "3RWMjFXDvzZ2B3XEXirKf1eRALrfPwdpsFJkVJydbeRp91r855B7Ddy3pnQr5k6rhTAKjaKNp6LXrPb9z2EHuJ7R",
  "key7": "3eTW5gXuTcrVX5Q539WdS6mdqtDx2MQUqwjh1cXqjZ5aR5okrqJ8kP9AkRDG6uFkbKYHrW2BQqsjPXZjRtqwf966",
  "key8": "sorH6DtthGoPptEquDhDXScPNRMevZBM7i4Ms4s3Rzm9DNNQLtGCnjezjUGdKwo9zhnPGgiZdmy3QHWM1MzesDS",
  "key9": "41urcoYiswTvM4y3K4HWXpPtyzG8F4TiQtQGWq7Hu3xpboVn86SmKishjbTv26AR8d91HXhKbx9X4pZnimZGkhm8",
  "key10": "4UUg43NHZKuLoQKWvtYt6z8nZDgo5kq8j5ZtaVbmkBRBAtz26v7DrjjqYpddQdAg3cPcNh2W64jtbJDz6oBK6PMU",
  "key11": "38zKZUGKBb85oQK9SP4qqZtkcCFHYxWgusUbBc4NHkXXDXXdtEBs33VtzDPpcn78tX4fpS5QKHpgyFMN98vQu9YG",
  "key12": "Jx8iNecAeo6r39Ph2sscLdr9ozCX8QDMRChM2eq2Fp2NpTLBRBVBsVhFZn8fGNTstFa78HcaJxiM6cvN4VtvYaV",
  "key13": "2WqH28HdV47FDQvfxFi18WKT3wPajdfC3kM6bEfdiWZSPMxtyUEKsdRiE5vmef3SguonJT4XCRuKAcdaroW5haB6",
  "key14": "3yQtGCV7F5eQs1srkAdutsxUqgF9RYB2QAzYTZzwCixPPzcsXaY1HZvggCmcoY9FKgnvTWW7ic5PEyRZ9AhrNa5G",
  "key15": "4dffDen8SGPVTpx4kh4J73Yd686SVB3XmtzTYdKdHRcFv1gbrUAp1TsR7fHcFX5duZY8oE39KATHggWrkodA5iS8",
  "key16": "H5Coy9ocBES3dZxAhW3jUAwGsbJYQ9JdHHtHkNgMzGDjWx9EtcbfmEbkcrC2krsM45WDChVssA4io1caCpwVm7X",
  "key17": "2R8XCq7Z6xN8vSCD1sKszoLZDM1vXqSUXWbAeHhnHe2RxPsuyGCXawEtiUNcYuMEtUDVARc5AgxDfWsabJUfBetH",
  "key18": "39UXrPecEbfNsopGopj5zjmF4zwHKS9KRgesbbPMVsuHQuCJAK9U8zYkAdeHNcawf32bF4y7mvHiv2xC7Eq1AFDn",
  "key19": "2tErVXGy96bShFrWXYTLBkNttjXiuWYSm1Vbtok2pq9YdvXyERSqLQ9ureHL8wLMSVSKZNJ2TPsmjoe8aLDGTgn5",
  "key20": "5r2tpoR2sRJuPeYPpawJWRoPG1FMDsLqffagFoZt3BhKdu9Z8ji8PKSRw1nFr7Wsba5kQrEoQ17nRAShSUG7mqwV",
  "key21": "4TFV5d2ebnEDBYX3eEyKJHzctdEXACj1MWbsMEvg2yifFwBxUixpqk6GRKVgAQuKs2Z1sZS6g3Uj3oLjfV6taJsb",
  "key22": "2b1Hq6itixVVNPxne7enydRH25f5N8pSBsFfZUf2GLHdK2EfrYoqMFA3n7f8d81KVRyFr1RZH4ujV8DTT1c37hKy",
  "key23": "oDTUgu119A2iQXhZ8HUXKShBW5hudBvg1PGuqH584fkbCxHhF5gxa9pfKcoNY2PRecoQ16zYxaiABQz4EV3NnYX",
  "key24": "3TgHVTAqeX9xcJnSdZTkAPCf8MKQQyYNp8HpXhxZyGVbU7HQnyiJNLhxigPTtjBMUixtnXjXU8Tz1nJuxLqH79wd",
  "key25": "4y44mNgEGvTj862xkPatEB2AqAXiG5ncdywgM2tPJ892jxbK6MTDNQBjTYARkFQzJ7UJYwYhhyAs9iR31AF8FHLc",
  "key26": "2WRpZcbUA4gfzi1GjePpjLMbY9jYiCnDi1CnjQnmGGgf3dXPThhxzV3p73jXLYZUSaqgjbAHr3QaqoA91643gQpG",
  "key27": "3rcM5djzHPmGHQyctukXroh5iiYhvUTc7KPfVQkxCRE3BWuzXsjAisoNpbd48MScuKq1xjCVypDF6XxPsFZAxqRE",
  "key28": "4P7NuSeUCrDJ6MKa2A65zrutKVxZK2fsCM3LKwfCSp5VUHKQT8q3RV7RsuNKvhsL2XagkwRQ26W2WKeJy1pZdE1V",
  "key29": "4n1J2T27GmgPsgJvc4wctfcRB31wJY2973D8Lk3irBJzSCfBTzs2ogrJSP3DvAEkVE6w7C7dKPgYzCiwejcLKK8u",
  "key30": "4WKZkuevL5zqp8yaoL9rCnzThmESqWfNmBnWESVH1eJWJDEmdRgRbJU45j6VKczbj7s2vBxtgGe2F146C112ANrE",
  "key31": "3ae3uJ6uqAhvddYAKu2qx1xkQYJi142n7abBSagfq1pwVRMVPbsdSrEwaD2mGUy3Js1p4S9mcrkAi8tE3aHjnGPv",
  "key32": "5AsNjRfnVg22t1GMTqa9joa35agmgpmXgqabXkDpDZB14HHRjWvEqJwTh76iVzyZLNG6fGRY94FwTM37taZEXQ17",
  "key33": "4Fbkn12c7HkTPmGeJsiGtcTPBdtsBf5ofVXkgxA9ecfvdBgpKxMUH8hB8oUuPTUyTLWU7ixJWABTuKN1s59wvCN5",
  "key34": "4HVVa4yFF8VPwmEYzEHQZq8rTDhU9bbPYLsqXLgPTL6ZmMv8Zr4UiJ7nLeegLiLhCs2MTFZFAP3N2C9iviqCK74H",
  "key35": "78P3UsRzPfXv6dY46KNkNEzKnXd4eP2Be9rqjMXRL4EWboDYbNBG7gZQxzZpeWP4YxdXFEsJt2hPQDSExWSECwF",
  "key36": "4PyNGico6CFvXjTvDGhe1TijGGYbpXcdNtaY96tNUKi6zZ24b3LE5yvJFXZYhnbHPhF2WWYMvgQ6hKXp5bUKgbf6",
  "key37": "cZBgm8eF4uw88KEWhZ8hjwNPas4GMmndMzXFjG4rVTF7ZJWrwHnwzWrc5XM5M16Fkc37iDTXntfa9we9o9Lkfgn",
  "key38": "4mcDio7sYTeLXx71PzZSt5XNw2pvd7Nk4qQXrhNeAqDeNuxN8acxkWBGbbK3bB5tmVb7eFs5866jKSDpAq37zhhF",
  "key39": "36Xt4K48JxmprTw7yVteAbKHF9tDWTosYxEuwGgVcArQGKutwYsT2e92EriA6h9YXe4i4mCFrsc9zScfWfFmSQK1",
  "key40": "2b2o8o4H6W7W7BESKD9TqJA7PeMkGg2GqNXKoNEFzuYXNfL1vk8Eqw8hPjzkMhT6ZUFX7LdUspGKdjT8En63c1kX",
  "key41": "CuDwUtLm7m4wTcgGRfXuEfWtXnjemHtZsERMUSNSas1mo4pJTJBqwLBbMbdkejC5HaqXX5Nuk3K8vzPADBhKcb7",
  "key42": "5sw3F72U6ACGMof6PcDhvZFFWQL4KE9V31YhZ5cTGxFvVug4mDZKwxoCyPCe97tyXW2CNCiD2JvjQNr2j23siwpr",
  "key43": "5iFTsoG9DQuF6HnKindsduiRTqqtd6zeGYfiyGhox7RrkK9j4fBeQcp1VPApbhhVi4gb1C8ypZf7VCcU8KkTuVqb",
  "key44": "4JmPAucggjXBknoKo2is6NtegCNrRN1i4e1XUpZNagVc129V13k5jJGckw8Y7bcoprrNiKZLsLU8cUww2FoU6FMk"
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
