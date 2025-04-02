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
    "3zfAQhYiPMSCZay6kgwWXSNm3mFhRZkp9Hffcou45Pro4q5iCjZEQV4mJit9MBp1SmmUT6U26bpfnArfjDa7iHzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w4kVW8CjqkwJbomhXep8pQwQMcV6CqAgdwcBghR9N4bHejFYB2LvR1LoFgW8b6fSkasRmeu64f7DJPjebtaQukU",
  "key1": "5NWcTbkF1bYLh1qJUEqKDg3WogX9bqh8MWMndCWjifCnsqsNNwgpT6niRWTQUvLN69stPU5bqH6XtJhn6sQD9zp3",
  "key2": "2Gqkk2bC43DfXu3Krp6Noxk3XKPaqx1Mzu8NBAJVATu8gqeDMpHwtYqiWvSHUXpFZFDnu4m6DMD4TAX9XDRaNTC5",
  "key3": "4PDvjFHSa5B6t92cDMD3ZrmFu7fNW6v9YNeHmhtsQGcJR9tUvui6fgPYsLH8vyVL11KePnYYZAxH1s4BrsLwiR6d",
  "key4": "7JSv2VZ69quoHePcZbrTjsF4TnHEUKvv2Qb6yp7BmoWM4Ba96pR2GYN1VBAwSwQtXmo5bjXMwbzvE1C3ByjCKss",
  "key5": "3ni2xCUmGV1cTiKNbrFZe5DcYFLT23QDdLV4E8oVWziid1aNMqbhj3ZSKqt9xt4ZXRBy87rVGYmsceMiedo6rPU2",
  "key6": "54kvqyKVv3iDeUGWHdE2kurWzsfk9nJAv4hQ2ti4EmW83FdJDcyLKK3YFUHnSgurj55S12888qrHP2GFWWH6a8ho",
  "key7": "2RVSFPEm4oJw7eMHKGKsMJEsTheYR1amZPWRW1t4dKVDFcog23RPPkQALwej77xsBB3o5fLjfUpSig93cHRzrQ3U",
  "key8": "2m6NG2m3wLGBmFViMPg3TbUqijH8zrLPKrjgqCgjsJ3AMjj8zbFGDzyAeT5pH593vNYy5Hxr6Av7UxXUD5RH2nd9",
  "key9": "2bMDM3UFv428qLk5zBs5qFt8mfwSvsVTpheuQaG2sk3WYqoDwdJDhPtQsbnyBRAB7KLubn4G7eR82KLcKjRiohBM",
  "key10": "4YH1GUXc57NTVxxXqER4UoKZJuJ1qNNAX8LZtJBZXQABh1GBgRLQXeHMhpjeTcnYcYwWL1dyUGdvn91BXvuxTiDR",
  "key11": "4M8d6q5eJtVmFgf6vJViwQmc2EKoRP9TsCCocGSJ1PbtjCCYNsHkgT3gZJkuwvQ7e5UJFcTFKHWfxztg8ky1sGYH",
  "key12": "33RHpki794cLV8Ni3vnzAQFgTCLuLLpTZcKRRg8L3Cnbczgw4ghxeYmxfQNdkzjfR7mPXgQGroWrjyCSn1eZhGEX",
  "key13": "3tLojZX98GppdSsh2N3n9sVL6DcQgQvQ7fRvnpzooQAAdDqini4N8XGPCpg2889o5bxbGeu3YDDpVXTrwSM8doSb",
  "key14": "2p85t7gSfUHgU4asHD4a9hNgVMxjNvCEdveqfkkZH9EXYkXUtMnjVTfF7UxgUwd1WCSJpRCai5a3s4o4wr66f4di",
  "key15": "5ULrBc5ra6XpWwCfxeWB4ipXfNoyccccUEqvezkjdg3xTiGBw26Ntyhnvc4uS3B5fLPWuensEqeXNfysvVmAGx4g",
  "key16": "2GXGKRCKnvAtk84h43Re12HcNsGaGXv9rzCvmKwS3ySv5sHgPK7kPcjLeqHgGmb6xcquysqfkz47PfutAWqUxByw",
  "key17": "3VsTsZHNSeXQKKeFfrov2fn5w81pPWTyJuaioHc7SJck7PhAFkKLV9xEqbvJB5DZDgCHbJq4eoS5aeD61C5qQbu8",
  "key18": "3KnbeQsQCCma3WWjentJ2Zx12wKydse3abMPqjZ4AURt6xDZsbE1Y7hnVQnZF85iJ6VU4xaKSZucWoA7F38mwRGu",
  "key19": "5FovURayVDnX5jmCazB6VRHLh99ZrBnV1aNTRGmT8NZbgb8CxeQze1ATRKNYZM6hDF5scMRCLG4D6KVX2mgZQjRX",
  "key20": "KAmGrLyQqUc4YAy3XoEfVdZNeKh2ru1gxpz5UsJkVTfZvissrgSKY1PxQG4xvEae2tuJdtvkpUKb2qwYstTsXDq",
  "key21": "kYZZcLAqLwTEbVExdo3x6KXnp7EsCpkwiSNtsGMy8qQEiYFGvD1yZELEMF2MVNsU3kt2MXHpb49xGe9R3WFFbBj",
  "key22": "3KgyrFzAz9WpDLTATVepGh7BvtUYGZ9XKeu87TthwTdVM4tMpi1XA51j6ScamGgBZhgwkNc1K3MW4AG18eSgEQwv",
  "key23": "5BXJWPaDPPP49NNVs8NThWCBPamsBsU6V47z3xEAotWaty2EsC3ybTf6k2tJRPyVqe43awgJc6Q6LQ8ybNR4fs88",
  "key24": "ysHy2Em961oQg7ckAoW1y1gw6URMU5PWTGhuw5svwh8Z3uSTfxdAT5S9Y92H5mz4eG112iwfdwy3w2tYssyrXjx",
  "key25": "2oP6Ls6M6h6rPMeUS47bNSKSG28GYTzruDPjeUsextrp6DxS1y1N8o89DU44uNCi9uRcMW94nqtMGac9ySEhrrox",
  "key26": "qukWbYxMoJnYrGBXvqu9RiBvK8Nk8nUT7CCPPCemcfsBae7WxUDD8KAks97JNuyUhgMNk5fthYPsNUe3zxyGSpt",
  "key27": "5HFtaKJXr8Xsif1EByzhB48tsRtErKyfjfHZB3hbRxqNsFoJY61MWnf7ZibxdWyUSXeu8pwWaKdbqMv5T1aRyvhC",
  "key28": "2KU6mU1AFSenAbx55EMHoV7LUaFsNGjFV2AmhW6Q1X8AZWLqbG5qh8kzMTTsFWbCZmo7wSxNmJ8YEQVRFL5HSZJL",
  "key29": "3UownTUmYiSye6DNzt4uc5RQrdNCi1au6F5QG8NGYbCzW1dEJE45Hu4htpBocguaYwuVUyiVYXZgRgg4hvDZBRj5",
  "key30": "2ULQjnMspFUR8iVcbb4Ad9B4e9SEWoaHiw2pi12nKxEzei36vQ9YPbpMLFmfabr8xkB4JzaR9tpoM7ARDPA6LCQj",
  "key31": "4TBx6mHVH2JxrDhqhaaasKKdV66sraF9zLYf88aamx55mDQWANQPnRwA61c8VMoTiTwxLm47yvFAwHfDCtNGb8wH",
  "key32": "62gmvPhz1ux7NEHoHP7Zrns24vJHZUoD9koKdCWW4qmVWrgTKKEjWEK7boeq5JvMxkQwPbdCi9UZ9qUUfhM73EGo",
  "key33": "5Ssdfh59DfVuVFh41roRhfeHyhToRyGGta1daUgYPceqBF35Xe5iKaCfzeM14ByNcnBT37efhG5cn3jH9Dd83TWx",
  "key34": "xATYQiFuh8aA2T8ssoBcL7fuRp1AtykKbLNTPWTi42UYFarA2uV2jEhwhTkfgXk4Zubh88CnGJG7Z4ESPvqsLfJ",
  "key35": "2BPsnQ9GbdPzbL4TYZbCZgJ2uTsHmdE3DoFyuY6qBFYbJyh8TSjjRHWWR8uFbGtymgnPH334QDrj1c2gCgmSij2N",
  "key36": "3efw5SY8HAdmyhcoZT1gJUHZhm3F2BLX7Q9GhbCnTE4Q97yTBmbvfX4UaCSyEDxwrMvJ5io2PPmZdekPZgDJSTJD",
  "key37": "4CH1zfy5b5XZS6pmixz2yHi4x1F6AwKwpHV8DLxCjmgraRXeGkbxvGXtmtc9T7wsDdSd2XRCqRUsTPB5aLPy7QjY",
  "key38": "VZmssbgGMj2GoSv1WH5Hy2Zz19JmzMQn2u3DQtfFCCffb9b2z9yi8B9qbVmBPKhJQ5BVRyGiu6TJNMfrgvPKwnp",
  "key39": "2yCeuq3mZHyreakUKUhqT234X3dKZbijA7bt19CSUw3hNdzr3NLvbvNt5awAnqVRHnHRwtjiyhzPmhU25BPAWo91"
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
