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
    "2CvR8kpBhr6afNYCuXD6zdW8gnsC7K1D3Qs3N8wCKSeuXAYmm8z5umnt243ixT4426DbATgDaEVx4xxZTJQyWiJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ZsDpTMLzgWxkPUhZfyvkmRAgjREGkpy7XfQNJQnxYZXkJ5u6pBhiTCVMNeZnUMAmFX4Y6xdDKh1YiV29h1m2xe",
  "key1": "4ZCuJGCs7YmrBrxbkVisy5gkksExHQ4uLmzjHZQB6cBJmnsfeCa1bf8pax8wpRKnP1kTt9PhiiCtKvLKnmnXggYL",
  "key2": "5WntrwJriUtmzkk6CEcBBU5J4Pg9wej3XQ7tjgw2oQT7jCJW8K7XzD6DLhS8aHwmZ1QcnsCmFRBGCPt36PVXdioj",
  "key3": "28TkEXPYrgPD8oWJhECJdcEWZMajdauNbyLxPiTpd2VCrb2i5MjCaEKK2r7nvprq1nKPYS1cHL4AgnS4eqm9vPTo",
  "key4": "6mSjhLN9twEnx1K2BzjSvpZuAGkQqcYy3AjW7jXXLSk6P8uxSxSADVEkxY8pZr7R4cdFnFD92eSNw1E788kiPQs",
  "key5": "3qeY329uKDZVCUba31Gb5ri7KfoaTd1xWoXZfo9vCq6GcGiWmLUB1hj4iYVxWK1NHHvhPvQdQC6kjS8xZNyVQjh3",
  "key6": "3DkDQCSGjsLYCX3YQiRvrRqsRwcAzMGotjxcxySrhy3tKTAwSuJ3AXfGG29pqU5yEwrUq1ueJquowP3TJb6fnQXL",
  "key7": "5uGgjxiZZVhDsudTzp3MqWJKRk2sEjtGBwLUSCjfN3aGJ97Z4EmMP4rufzZ5VcbbaGnbuH9Kih2m5H1BZ39Y4VTF",
  "key8": "2GPihzrsGfcaUMcYKVK3NRWGF91VMgW4TSMcCwR3gbS3ZYv5ceRhVzi3GNzVwwapVjBxqVDWdwz7dx6k8WFcm5Qq",
  "key9": "5Udi8TXSQeX2exiwJnWtwgKtfEPHN2b9zUznw22aATdpMRCgqinbAb84A4N1RjuGtuS6BTf5GXckP5bjzanbXsoK",
  "key10": "4bFWnguEyTezFdZpqGkauc3gFh15LiY6SG55zm4o3gQE3K8rqPUVsYBBXW4kqZg8jtr6dxPJXvvngw2QL2J9gWBZ",
  "key11": "4k2fke3jxSUEskh3AbQ4vRTLUyjCqLeBnBwK8ZLNkpceoqQb7zDQjXQ2ZXuF6qowbQgcSJuAwfAEGnG6ESTuqbYb",
  "key12": "3ZiGsfDLVb2MASP3o1idq43swtf2TbyE2fdUtURNQZuLNsL4xbJqszKmi3Hc2ikVzvUXnV5Q4B2k4CHt1AJGQCAs",
  "key13": "48nuecRZZK2Dyme8TXHQeQqcawzx4wct3QMEQoqtFDWPvKiU6YEGc1GvZLKNVmi2E6UsmAZbiGbajmnmxw4XUQW9",
  "key14": "3DDPx81k6E2WyYM5TRBW8RQEMhqtV1rCiDu1UVSm1vMcdfeaUXJG3JqvhFrFiZDim2X9TnTBpR2XZbVxTgoHrKKV",
  "key15": "4Es2onZSm9yBgJLA54APBuYxKfyS7fWyJkvP6QVfjA1xFHRFP2soERWom6CGXVYshpDZtKWgjFtdwtRAmRnJ3kwq",
  "key16": "mkGUGT7pYM74ak9MUqcb6vDpf59Jrt5jHNo8S795j941QhqySsvnucdvvtWJ6jHD36K7ABvQCHpocks79abs3hw",
  "key17": "21iEoZoXChjVXABZbxre89C38toZT9jKB8S2SbgPEDAxDRBYToN6ySmhX414c96TAWwbKtVu5d7ARp8QW8q8r665",
  "key18": "2DdmiXtia8YXDg9e97AXzUCQwR21ZCWUUtvG27cvFq6hUamgQoyBnUsXffugZRRRysQVyShyEarznAdZPUitgPtT",
  "key19": "Fz8evuYD4my2F2TgEb2fPUgMiCFqcEcLAtAc3QbxPUfm451gpHXuCGCymUfC1qhB28NDfboS6etgwCkXbPpGcJA",
  "key20": "2qgpTyTBLjeKwff2c3SVXVHQYPVn15YNiHxaiMPByqNg4iVrhq1F6RsGeo87UbLi7T6ZPcVDvQ8Z8PrukKzygUGP",
  "key21": "4A4GaEZ7bemx7f8SZkVrBy93Av3TpWPekeMUuGx1cDtUyiZxAAXmNYXSBYtVTq7FQJ9u8fFXocmLh9V2HMjpYoSY",
  "key22": "2wHvoTJSVLpAZ1rpu7qf9kDM3jMsuAmn6thgAhj7J5WG1ehiLUpo4nPN27tT8nLdAiVnppL75mLscwgGKaiAeADa",
  "key23": "o74kQTC5apohAg1vYDFzan1msrkwQ9SoqvCh54w8ZSDdhpAK8UTZ2H7DhSUZVjEgpn2Fzf6PwoPxtHVLMesCkQi",
  "key24": "3UZoeNJBQVcxTD1bPE4sE67LkhtdCHHKnsHu8f2LsruCPmixqRJAPxCFHGc37pQ1NYF63C4QFnvZJnTbjH9Aaicy",
  "key25": "3CStf4kFybCAnbjh5BBHLpc5GfTLTPhswMNU7Mt89FH8aEKZBJQeVpQUZmKCp1efFStWgyynnXd5vJwewPKgtv9M",
  "key26": "3D1ttnZjrETrGRhuVuT1LvccXLU58sK4dSUf19Gbn1E48mELpVJ5vYMz9dLvBzKFNajzkpP8nmvYLEBx1TMT8sPs",
  "key27": "5zBKqjgbkXfofPV9DzLq1NnH1Px887qt5mTUu8dw5Sm2k7NmNY3gwBqNvNWpP3bRg7HvG7ZpUtwmsCfwUGUHyge1",
  "key28": "hemwKWX9iZmFgF84E3LkZsJbGFEpSbYFFhcVTgjXrAvTomny669NeyyuZBNr2muPkgBVk3fSunWM6FFXFgnPE1K",
  "key29": "cKTvPjX5hyTCCRRc28tpk1qmvZCnHEcpx7aHvbEejcDCconDCXaWnJr9AF5sRUTwG4Ahb3Yyvcso23BUoWUWXu5",
  "key30": "2LkVDnWraVPNjG7NpcytjUjedexbbekSQtan6k8qFaLxY9h5PNG1H9i5qtdxhLcU8dtH3JKtCjqS6z3CimA1hkt8",
  "key31": "4Yx4Mi1mpFE7AkXiV76MvoEzpN1q3L4spDidoaky1q4dq5FZAd5HCQY1wPhLZL1SUyt3gHNS74YbFyTNo8YqXyjo",
  "key32": "2PYF6TDuicrrYcorgNYxW1DSxLCg1TppSifpD2pvsVJtt3vBSbiZnJLgYzrigRUs3Kt39JXmCC9g4uRhLTzkvTwe",
  "key33": "2NuwpjtexxiosfQhbJ82pubtSs2D7H5yU5G41n3FdzqcyufVoiNu3zHwH68PuEPCmywqgA3Xv672MG9YHxs6dq1v",
  "key34": "pd3CUJFUd3YGstbbyCuaj39pMhGS4QyBkvvnCX7Ebf3zZbU5uzzNBjNdWjCAciFmHAKyPGVkBBeLUJr1Xwwti2M",
  "key35": "23ZnbdEsVn7GddrD7Rb1fVX7Kv1PVsDVTu4fu3FsEBgVYE2PSA5e2Kk6DqFHnWMSJzWF2i5NmGdphsd2JFkmb8P7"
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
