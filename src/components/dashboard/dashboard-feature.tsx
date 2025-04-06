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
    "4bDF1vvKgjyzGzqxXbwADd1nRWpFL6P6nkVRgeC1vBJ8qr9BdTwUMf5NHFjzbUUsgzZTYLx9122PAtBXUB2fdkP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dB8QTkE7MEKM4RHznCwozQGoLpnj2ziFtwP4jv8maTEyUZddtVEdf3Ykw6s6DUG68KTT8HcFDfFafiGF4jgJRHH",
  "key1": "5neMZDDHd1jUXVhhDJAC4N29t4sCzAn2q9e7BZHDdgGEUqKNMU5E6LLrtMEC7ikXBZmaRfuHMjMyicEach3N4Vdy",
  "key2": "2tJXTzma9XBam8gCVifUkTFwGTkFWBDTQtwM7bjzJj2m2Lvq8UhL68pFn9eXFejLDXFC4kWzPmKiRSyNSvjitrU5",
  "key3": "4ZYamDVg1eSHixejN5yMo2Bua8vj895KTHDWmTxbaDJntYDcie4wfzpQZ5JdTxygzXsvfcZf4Uaqw5Kb2zweiSjf",
  "key4": "4w4F2HGAoMcqzy6emGHNZ3xyGWC1jULSG3qwqNpUYh5AFWfyvaQtQpXWgmkqUDVPro4qtid5RzDQmN138ghkJ7aM",
  "key5": "4A6gdYxJj1ANuNapYXPfZkjM6fH5TgTprRj61pGxs12iPYdW2cRiNW4VNittDpVd1B31jsRePLU7jbWhtAZopXFU",
  "key6": "2bLPHRQoFo2HuKFGU8w7sg1d3AzhdGLsFAFjZmgCF8E8fc2HWBUCLy5sMXLrqdnyPTykg5MHGQDthvVohUEMFibg",
  "key7": "2smGjdhtfAWXdNc6Sn6Ld282Z7zUDiud9GmwLTGCVv5nxQHL6UTHJkcscN9jM4j4F8AAafVxB2onaSXvrEYyZeS9",
  "key8": "23FaijnpLVpDXjcVRKwAP54NBjYhFZum2LhGuy9dZ8QGbJFd8avb5bGZbR9HNTsv1kgRMinu1oNJVBWYxyy5PZaC",
  "key9": "3eNMHrFTcyZ8RLaFoT5CYk2AjD3o6QG3CpHRVdAnVZZRW39zo6C45ubjvMrzM8HjCtcxTyTt92P9M4R3CavbK1zj",
  "key10": "3twhpRh7fJpzotaqcvXW12XuqWxh8STJdiNkhv2NJjRTf82bZ5RGsSw81PhyVFAgWgExEDGb6jcBfk5BU1Gyhnpo",
  "key11": "5KjH3z1mcdRUieU2ZaTCLhQ9xBgWbkqEXdto6U2U3HatcjNBzAp6FAS1Sy8EyaScDdRRDpDMo1627DcEj9shqwW9",
  "key12": "3Gjh74Vc1fgMEQBsb9NgR9vASDFeNBU3foKZ2mmWLRaej5c6uhHpYEFqsz8kPePWLvffVDrZbxgbaL1pbhvQbcHu",
  "key13": "5zXeQ3EZazjeWBEboffHTbyjCXDDU5XUFLpB97H4ZLaTA4FxB9C4PUQBXw25xvxdKtEz9VJEa19sdfuScJCMP2iz",
  "key14": "5ZLkzgvVQf8dt9Vkwf9jWiWMTqREsb2rugtXXfGpEfkKiUtGajHGP9k7d1HduoEx23ne9CHoS25qrwfDJZJBVNYn",
  "key15": "3Qg8Lq9wprAhsmASr7FoTG1AxQa1UKbmYv8CRohJjrvTwx8senF172VBQTnmsW9MXYkRJbEJZ9rTUrDT26rxatwi",
  "key16": "z159HJktFdGfNDQM9b5xZpB8CxBjVSLzMBCsL7hMordYw9yLDa1Ubd8dSnMQwyNCmc7khkYm22Ub5SL88Y9TaFK",
  "key17": "3xojfFZYRKLEFyveEfRRcjQFvPDZxmWoU6KNQSzH9iFz8DCezpnRetStp512VGaJGXRMufde4LizFvqR3EyFv8ag",
  "key18": "5KXHCnNW8AYDa8MFChPaPz6hecSHttJE1wpJbiWRymtsmgDiegdFtKkWdQetmoeuZ992VrVbQeUiYC6cWii9YUDm",
  "key19": "5spUkyaASdtzP4kBVoaSpCXBTBYtK8zL6pXZRKasa4BDJnq9d1h6RmK5AibRgeh4cCEbWvr6ce4aSjRWsCAF1dLW",
  "key20": "5E3suJfSbpnXY9N3wfrCoUwts7zA9iBw67XeGJtuyTVHzAT21etydGDFmDabx61Fw3rLhmEhgo5Xj6QafDShr5D7",
  "key21": "38YzMuPVncH61kZ61Ng8anLXZtek7mUZRcKjNDUp5dUnABUbRd8cgKJ85C9yDfmh1gjKzFKK8qkfzMpbRmJoeLvF",
  "key22": "216edSCwKmoNp4mpFwAfDPA7u6yzcvB89aN4q6zLuS3ex3gSA7ypiPneUkPkBQKtjDcMGVgQeH7BA4jU4ATg5yA9",
  "key23": "22i2oXukAuLi3PxMxmvPeDUDBTib4sdVApsfP4u1mT5Np3CesvKdttKuXHynePwxbipeZJ2ZrmSYUhqtNqUfroLd",
  "key24": "3ur1GK6NPJfYxTexhhbrA1ypP77diXUpLd9HhYSutG6MnKmy4KrSZyytSwCv8mtPnbEKwxY45LbfrYMV5Q2oxBb7",
  "key25": "4L6Ax5tNLu3yVtQf8GFsLvecr4euxWVQtYNMKbYdYbSVWoD63dW9Yfs25hQynKeAzZHiWxmb2QUN2su6XZVKwsMv",
  "key26": "3GYh1WRmodZaixdKXHEFVowyQTYdk36Xz4FwacSsKyxbFyYfDr5tEsHDzwgNefficJ6QasaMuen9mQzjX9JzYpKP",
  "key27": "4FA2jbHakc9N7D2PuupZq64GpSkWyzJTqSv2UCYfrZvH8eBi4BA8YsAPAcDXpWeSpahy7MgY9QgsCyA5EUH4eHiR",
  "key28": "4abQRBWxXwkxMK68gVxoiJ7yNexdMN3MWjWdmKXpjSWUSLrwqkdiT2gN7bzapNDKMtjtWZ7zKQ5nw4JfvjVZNub7",
  "key29": "2BviRNPLV9QJLuJQywiK47Tcuswui12j3K224asgyY9vJXF1t2zCM9wD2mqMoLTyBf68HJq7wxZHacUCfJVcBsaA",
  "key30": "2jYvHr5PJZbBRuNZMP2Spa3mRze96XD1SyARHpcPc4aaCnxPNXXQVmDvGNRDb5Zzcj4C3665N6k8VEfDf6UceK94",
  "key31": "5iQG8nUA2zzdTwS9gqaAYQCJ67r1PAKHbr8g8hQMQ4rTVkbn8Nr6Q3GiJDuPQNeAQHL1Xxt7s8U4oQf4LQRQzvoX",
  "key32": "xU4MFy5pV77Vo65qkVUhmQBcmWCohnyMRmm4fquse2r2mse45ADW61ABcXbjy3TpG7DwUfKm468LJfqLZt6ebWy",
  "key33": "erUXKp4r6TKQ1hG1pnWSp29r29JMXSvgRpmSDkHp31jk7rmH1oFEezYQWpVQTVeUXTi1W7cMLvyToTPCc8CGZ2W",
  "key34": "2dNPLHmqZq6KyUEPqHZZrxcTc2wWSJkneYRM8TpXFkcLeWihTB9cwm9fynGJAAauWxyvwirr1RvY1kQbSjDMMsXA",
  "key35": "2bdFnJF7LW8NckUVP2wxusTPTMTXmDxt2UfRWgEuvT7scGsXaju7SyKdByQN4aBB6ksMLSNP6rRLzojBjwS1DKoZ",
  "key36": "2hSbcmVAi3gwA6VevnY1pRh2ZQdnCqajTMzU3zQHDH1198ETJXWe9ciXciXvPEfvEaqBxX24zwQsT8nkxzifEBEh",
  "key37": "3vvCcM6FYoxRXQXwf8HmLyA57y8W7DJKGmU6cZHNRCdqmULqUPJT8sbetQSfj57fi54tkPxsrBgtTJeEJ6RfPrnF",
  "key38": "2s4JmJVr4Jxa1jihfZFMhcPPFsrhuhKC5zgE13uKKadNMoJmKNeUDZfT66F8coxQvBCnntpVXwDKVMzJD9Gx7sCs",
  "key39": "BNFUirFJCxKn86bYQ8zZF8R2eT7ZpdStiyoAWBuvGsyLcF47dyFokFZZE5RuLZxFp6VdD4six5BG2yaNL1QXsLJ",
  "key40": "3ts1EW9K6xBBdC6rGhx4mj7JY98hJmDambWorMQPgVDnbSpquJ1woa2Rrv5tMQ48zMpCEYd3ZfCxsZafUahaV8uP",
  "key41": "5H96SNRSPiDyGq4zP6GHEdpk1kA41TaoYwXcHH3XAyCzzB3kgvBuY37hvzEzfmXEKptGrBxC24CRRUJTyLBbsDTG",
  "key42": "5jL7KzyX1YNWZqKEw3kHxPDwLEVahp55EG34L5JkYxPdiZ9NccsuDFacHwnLVgn3Y7hQeksQpYy47voeQhCqCGPA",
  "key43": "5ovfr2RHLLrXmz5JJFt3HWWkwqV63bmgab7DXJK9MeUH9i6aaupzkqw5pcSeqmY8pp27sd6cMMjzSLk99i8TG21Q",
  "key44": "3Zr35Ep83Wj3kotoZsZZo4a6TkzdfdZQM298QLr2HrTtju1eQ7SoFEYzhboJEqCMY8Kp6d9bqo1NgWtuqX4ap2LC",
  "key45": "5F3BeD57pNJw56yQqTUapk9CwDDnPjcKParSH7bdEu3nApeQ1kebtGD6ddzhkwfg8cZZ55XCA2WLE2fPqhg5yGUn",
  "key46": "4svUJ4JvMwWXq75V2N6c8E7ySGdLbwUm2dqE26jHQpCK2zguZUo4LQ3pAoc5AxkGFGjnCzBNPC2keJegACzithzi",
  "key47": "q9Zs2NvEowtCcge1S4QcPfwoWSPJKZ6yupgtZhyUkWNakATtHvTgJWoAPh6oM9vg8Uq2BrPWtRrNk8SazSVNLzR",
  "key48": "5XYbtZDCn4VovWosGfKX4gNcdtYgoy5dzxG5jMJaJEvWfxZesWkp17Eu7ZjsVKQ87HyaSZ1v9qJ8SgXRmnSSezxS"
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
