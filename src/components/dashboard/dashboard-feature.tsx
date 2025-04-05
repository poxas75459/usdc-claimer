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
    "2LKRAYbRpj4ihUnbaAYsfpPDra7vDQUYMSpPxD6MCHRpdtBBzS66dEpRLvr4KUPuq8WfjueUo34SgYMvdftruazQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KVDzad7nrsm1MUrZFDFVz5eUM6WcncvyVH4zmBXdLSRZTxiVS5uoqwyJjZBjJ1wBf2r6EaBJbohFuQDwDMkeD5W",
  "key1": "5aNneEPR43UzZ8vbzCXLk26RmNtGDuTNhxhhWv1L4xbJQjWWrAtyzFVAUGDeuMpf2wKTJccZaVykP24e1uaYaZpq",
  "key2": "2CCbhxtcjJvca36nA1eDXuFLU7zY18fy3nUjPgfKT9hNT95yC4WMGagwB1ib3CENnJJFG97dcdoa9M3yNK34csXx",
  "key3": "5f9JretxN2LVpppmGNXUV4XkajQ9My4WqGgHuMNNyJDEiWfCq2DVL17aBYKTDHRgyHSHq8i4GFbqJu6jU8qAhBQi",
  "key4": "5QgAbqjagfjFEne1pJtXhnqFcqgDtvrYocsDcGSUqNY4sPKepGsyC27MswncEDGAMuFNWKxaCq7Wt62FUC9V6NVw",
  "key5": "5UpEvfLy6GNLJmzTSg6p25qwmQKhzGfZBo9VuxGrdjJ99qt2pJ4EBtJqzPMtUXJgNUrZRfaRYsARczXmpBegwzCQ",
  "key6": "2YfHB1ASZNrx4XrdPNQSpGPsTCgSf7ohgvnHRpgakaTpdii52fFGKNzeJNQqyyUNzCdnem32dUebBBJVosx9nhLb",
  "key7": "4TPmf5MMRBA8e1ptfztAAx5tbWQL4HucTbiTcewtszcZdKxj1iGAg9LdrXefBLGnNSsMferwh88fkMtT8Xyskqhm",
  "key8": "5EqnkhhAJUtkrVhpQNcYF6zYkGN4MJMJgLqg7ZnFxPHUFb98Bz1F9xCN5ERw68GABJT4rDPGZYEtToiXbKLknq2J",
  "key9": "4BetTH1Sg81yG2FXG73mvN4aP7az7ewCmMh2M9E3kjkwpcbTye9D4wftPAxj8DTh934gjSinvgvGDjBVxjwM5LaS",
  "key10": "35xZhyV2V4k3uiAcy1GBswyXCT7PVwx6wSZUkRh4UkVzu2C4U5ZroeT2tZHH89s4hvzhNuMdTVBumunCFgpuL9cX",
  "key11": "67Dk7LXkddEBmSipSUUeLfjdi3QR8RMiAJzY2tXXAxZUm9h7Uk6ZkxsumskY1tgStuZEoosNUMZi75oM47tfTbf3",
  "key12": "4bwkpA4qL7pZdVbNpCT4gNefrvSCNP5FxPJwDCjoH2WpD1kLkh8HRFXjwCyTf48yNvu5cGU43AAQ6jmaiaRPSkKg",
  "key13": "4ttpEumw8uLxD2zpSKpJzhrTQwjEB2UTtndCAJr7Xjj2koSsL2oEECta8Ctst7EKdjvQeZtbJzEQGxdVLXnccBtp",
  "key14": "5wNVXdp9NMRBGVrSZYHBTCBoX43oBWPMo22xtTXbZy5nirtzhjAsddMfeUGJPuw4CR5yR1pNFuReFnZRYNCFZFAM",
  "key15": "FD9SkJe12vzELZtFx8kit1G1otuntmDnPnU4MBKtMWG4hqnBwb7VVYTFFuCweMwPPXZhqmc4EHE8y7zfz565E1S",
  "key16": "4eskGGMPeNoAdLdpwqFHkKy2hgVrJ5e1a5Z6XnNTFD1orHSn1EScXTb5WHncTiB4wCRugWTRkLA2nDtKKGSaxs4A",
  "key17": "2kfi51ZG7e9XTC1jSX6B8hDZHwXqD3Jh6LL3BHpwKGm7CzQuXTPUsVoCinihGFXuorfsFZQcf3L2ypA8koXbkbug",
  "key18": "uHeANvw7Mbb9qvCEEopQjascWLvkiRCkp7QSdkExX7Uj63RsqwZSzDRXFqY54chxx93tncWRjajFQVVrw2EhCWX",
  "key19": "29KAJA91a3GkR28DHUdCzs6pn13v8LsSyvNj21aZkwyMZGs8agXUhvfS1kRYbm5NnHSCVUK266ktAaqqrRkbLyt2",
  "key20": "258zMSkAhnh9eC5ktYTHMp2HjL6iEaQEjdTTWsxJeYMpK9qkub8K4eHKXngzhMPLPKmwS8tKzPforYsxRkzNvjLt",
  "key21": "258FuebUrLaDRc6nKdvXz39GYvfFmz9jkgjkMUE12gi5X1VWTowpUbH5Lro2gsz51JBsdSnmuR8soLiA8UCHs9fD",
  "key22": "4ZvSmTZUxMtDcRVuuDsUWuvDnvQcJ1F6MT9n8fZ55gMZkptuNRmYqznKmL2gfp2GB1mkiFkBZngAisFiCsYhetxA",
  "key23": "J8q2LzQzCyVB152HqukfLXVh5NA6ayqNo9JBLvERZerYR32rcqy3XrogCSvxjpVKruotba8LXnnaLPbkZ6HV3oa",
  "key24": "3SCk6gT3xkeYi1RZ2xxrTkUxYwBtn5FLWExwUbbCmdeC6EMJ3z7kVNhZSNLGWokt9Qz8YhRQDcDfy9SxkAoUKHAA",
  "key25": "VrwoX4UXFpg781Sn5WgevFE4xz5j5yjjzexH1JCf5a8f9pXidvtDqc3zNLK6Rrw59uSmnWWeWTKUfVi6LNmx94Z",
  "key26": "5h57gVRA8tAqFrPs1Qj6jMiPLrmAbkwPuCqKTbHDvyn22ZamZ4Zkdj3eNnygZVQdnLbik6WEspZCRdYVhijrwwZD",
  "key27": "YqSV34dcRGMozHk81muG8kPEP21xzqG2FpYK7Nsu1Z7akUNPcscp6CcAVtqANZPaNw7obHYyZG7tSR5TSW5kKQp",
  "key28": "46Pz5p7Vw3ZWcYPau7Xfd2wKCbC9LsnzSSuKezZviWgTS55shHrQ9PRpXS5V2urTKSaC6rHve4Pb7harprZ4pkJj",
  "key29": "4qNxq5NurvBe1cyC14a5Gze2naFNURgRtc7do1EJncV9v1qKZ56WRvWB9HCuxbWhY63AvPTwgRuzwKqEaoPNM1mQ",
  "key30": "5Hga7rnLCcXaYjL8z8gBiaVGvPEEFDG4rJQ6JnLXqCbtWwRHLCTdSJeQoaMas1yjBb6DzrxCanuAaZ7E9UrqNX75",
  "key31": "5sfq6q273FmPVJSHVnzicJ96t7XF3K5tdAQLqpUM9wyyTmcLQ6aR9CwAthSN4rhVAc1kHjEUsWe7e9ZU6b9RrkSQ",
  "key32": "pkqrv2Bm7DXWakXcvr6E55GwQnGT4xKYgyDD7n15ySiEHGP3tqL1yuHDJ16tHoS1H4nCMpZdwA5eVBQ4oDP63bW"
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
