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
    "5r1FLr7aUSDunWqEpaLSL71HwPFXJQq3RszTAGwVG3xs3RpNBM83EZRWoQFPiA5hCiJX8herAW1y4yPB3CLwLRsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ts6bWqmzXcbfiRmacMxXuob4fBKj6jKviw4mCmPL2G3n2UKAaAWcxHbCkHS9i6eBtnUPhfSVZac3ZDxxm7RkXoS",
  "key1": "UpsjKJn3kRxoLMxVvyYxqzvGxjNd6aBFVnmtEqXUUKf7AmfjUy1ny85LAV4LwWYZvsdp2F3o558fqrx9x1NRVTf",
  "key2": "2dEeYLGQWVPUyvj9XWy4UKnTK8HPWaSULMjYWdDnM4UwGdbz7KD4n38LMWFkkC5rQfFPKVQeaBocwa3gQvR6hNMm",
  "key3": "BHRc1hTrtPgJaG8CufquzjWBWosXQgBVm12hD6qS8oke3v9V7ybe99nz3p1Q4MB4Pab8pcs2r3zJ6RpcuxMyDMn",
  "key4": "4uqfEVLaBEpKtiqBPbNWfSsX8txqWGGJaE4RSafa6ZWJY78oqfc1mNMBS7ZZiNxAqZ6Ds3ARGKVAZypDnk1ct6v3",
  "key5": "3emGGgqYR66fbeuedkLNYYDvXSnZ7pBZExcHrgsSd3cufXKHH8yNMiT8AUFXKz3ekgmtT4Brv9688r69Z9vdKzoA",
  "key6": "2x9fKwgej6ndo18Bt9dKEw9DupUfmUbSDMr8nLGZrM9GE1AvT1abBQLJ37A5ZUb4qmg5nA1ATD49v9JZ27dUTM6X",
  "key7": "4GvaUXLWcUEuZjyabYDXkQnJ2CcjJTtgpeTSeyu2Limthxert91eF9Lqfm1MfXKy1br64MTfbu3SyknNVExXaEEb",
  "key8": "5LM6k34qGMdsuBo7e5Wgpqy2KNM5VvVDyWoeHzHiie1sZRz3XpKVwqqaorvLStbX2KvjyT9knFygMq9GoYVmpdAR",
  "key9": "5Zp5E7D4uRA4UUVDKwY34BXjEmr3NHjhKXDyukvtm3rrKxzrenU6cewERPxFtqSJ8KLHtwPycVvVfU6wRmbX6ZjY",
  "key10": "2MGNiEAZApgFrmfswMwnwEQHbxxPnE9cM6oyJYFe9jr48WmUUmCiVkN3xD2DrsGWZnE629pqEK2C6Qt1dhiUFECV",
  "key11": "5vKNzrwbHqxc314CmnMAraMiKVYvGV6ugmLQrPD8gNZRREqa6UCkAbxefykTShzdGdgmP7CouifU6A7F23hn4wTi",
  "key12": "2zUf4Ds4z2YoNKSe6kK9XHTbYEuCBFvba7YQz5HbXyx74orqedtqPeuJDKcWzf7Df8FGKyRcpG4QiVuD7E3Y9Qss",
  "key13": "XicajsqZ3sjWEYk4q4GYvUsA6L5uAAATtvxzoGjNsGPYiFM1RS9oZkFdcttRHGqVkKPN7o5z927gnd2CK6Qcr1P",
  "key14": "f8NBijnbXgTmugfDaXoS1BG8Wsk4WunZH4b1LbfHwLC7j1ngpEiEEgQozjCCeLFAhMT8czMHCAmYqxHMmojEKSK",
  "key15": "5jcGvpQTiFA8yTDJAwGQDZQQ7EehpgCx1BgiYWuy4MDpyKNwSqPPxiFz5uV94AKGTMixEBKQNGBxYtj8uwKaNJvU",
  "key16": "613xijaDX7XdLsuS3w3LxjL2cd3twbEiXjQ3ouMbvyUJUz239yd9At6FqjmnpoHAruwtuPVwW1et1zodCp2UcBpD",
  "key17": "37Aavd5aQvxzjLNrY6ztMUaQfkdWLvVKad4umEM4X18pPAg9QQPKqPkVryE7kh5JxMAQeg77mZkuq8ikL2TBMDQK",
  "key18": "3p2H2ijicjAcVTaUHFSDkhY8ppbNASZboA1EYSksNCEKU7p76H5UaBsGTHtmsNiNoZnXipckabEWKCMftve7fkgw",
  "key19": "3vuKHeaK5b2AnWiUtLpoJAK4uC5XTogcej3YDMaZX5VUVPp4LsSgXAPPtbBUEVW9SSHQGKUSdx4NJ2vBBQxjskU9",
  "key20": "4jtQqFEePEAhz5q5ALKXTtQ6VcWtRBbmU2fK4XRh8S7uX7uHaSq4zJjBG6i2ZFwEiU5hJiyEFD8qAqCJSQ4bsAuY",
  "key21": "4hAZPi7iEzk6CPJRbzsCMtha1BXpA7kdMcaKJf7RAJik4DKRsS4XDeKhutFEBpVRiXi4L8zsUg2f9KCooL6bt9M",
  "key22": "5khSrg2UQ828uCisD1m1hNTKeW2zW9UcSA1KH2UASG8zbWBayN6VxYHYHyZZQdjNXCqmZVUQGE5vxFCcg6W7wuhh",
  "key23": "23FKN69kUZ3rHGJJhrtt7AbhJCwtDVv3pTN48UETxjRQw1aGEvTn8WWxsXBm9AiUFG4THgBViXE4J5GJZbyZJmcx",
  "key24": "tTF3KmijyPKMLL431fnCKBBmzumsJfgz6YbFhNCqPC58W7zEJP5cGB2sYizUVrigvMpFJv5B7gDyfEpBvEw4rFQ",
  "key25": "XmT5wnxGjKoc47kbATZfu61uN7xTGpD6k2ihvXYi1x2quMk5LaU6V3Ej4TTg6oYcT1pyayR978zJ3pnDLpuZszL",
  "key26": "4Pr6zzbxeMigyFz1fDVg4gyyRkW8rPXP4wqrRM8VYZneNswizfWZbLX6aufQ3eAhLGVGxo8WUJKym3iaUM8gwfKn",
  "key27": "W7gSPzsf2xpPVGPVYLhubkDDamdBD4ZG17Jq3cGb4RTK27SUNggKLR18ApMs1DKabcpwb2fRqcwkhmi33Ap2ZEs",
  "key28": "4knzdv8CdmG6HVg9aj1D6RFLoFtzkqZKvxWQPCPyMN4u9TamcNvNp9FZbCVoEnFDpLfRmdYhbpWWEFaiJ1GbqcV2",
  "key29": "3i8dLcw4VH777RcM5W3bTJcQ2HCgC4MW77Z3BL24jeCiRsAkfyKLYgMfvt2WRardVLDGzz6bGnWuYYMfjEP8EWwu",
  "key30": "3f5qtA7Hw7KUmkxjBwP1JoGe8Zc558bQiRjX4zZ92yBRiyMNs9vzSA5HrXmRLd7iN6R3DH58zH72d985PjcCXvQf",
  "key31": "2zXfbNJsrCEWtqeqEhC5h5hBjkLGLybjYc9bn9CM16gGeWWusdwwM4TGZkYZFU6v6kAWuUpr6nXbTYrrDdrWnvhc",
  "key32": "3oZMcFya4PJD3ZnWDcBogtuW1koBaFy9a3kMe6giShTqKX5Dbuzh9ZnZFmZTvdW7utv3b2Dvz7HhXu8YKP8fhpkj",
  "key33": "UpwHE8bFxoXos5wPhUwxGhNJrMCa6YXsayaA8g63JtrLMDJ7Y1VSysiysbgcD5VXfJerupwYJttyynAL69Xyjtb",
  "key34": "4CFtxRVFjZ2FFmbYu32w68HqPZGnFuh5RKiaMuaHcbXdvnJMREqiRPWx9n4y27p8vF4W6W1boMW3fT59Cru58ZtQ"
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
