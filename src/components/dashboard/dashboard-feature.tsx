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
    "4TQAsMvwediJTnEqdMEohkoWa6xVEfQmgrbF6jRZkEwM5sFQL3A9s6tH3tS8P53h8kd2MTTsQTkv4qF7ZQ3ZhZ5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "effWWCKJKyDLi24fvNiDKi9VKhbwLwbVMb6Gn9ucqd8htQZoV2d5PYiHFdMzFQqFQ4PshcxpcN8636H262Vb6jV",
  "key1": "4hqHetDkfZXNtCAeADY23eJQUfbHjFPrNuSVSnaokQvcdJQCnRzDzeZgAz2VNCZ9cGzMJVMUUWX9UnVthucvEXgw",
  "key2": "5HY7Z1RjyZXV2rNBNBWLd3ECwwtPJeE3aEdf6XRRJG3Z3dhLYJPWK2696rsdKsgxLNHZ11HBuAiCH3NJkBydWGiA",
  "key3": "5qf9Nz5Q3APcvTv2N5yb69ajoGfQ8Jp4mLG12zF7cywqA4f5qPxtfwK2UVqZFHJwsnsFEvL4Rncpffw3JQuqzoBe",
  "key4": "2JUBumx8GwgzUm6C7BZFHccfJxiTBo8GPwquPYGypd7btxtS8bETaBgLcGDP4oyXnhrcB9Pcc1q2B58Np1riNRdm",
  "key5": "3PgDxUR6ELm9mKsyNXrowdoy9kVs8XNUzA8RG4kP44SeSBGfNfgtSpzMujRfijKdpbWvkeG1TYbmbRJwuqBwauzP",
  "key6": "61khB8hfnL4qM7vkRF7fRmNQcAjUxNL1U1AokaL4sJTPCBrbZuieXk22aQHL48aCZ4kusemaCzAH3bouahYqSQwg",
  "key7": "2XsCYwBcXoZstG4qxHpNLNmH69T91kiPYRcUh36azYj8SGkjL9Wc78SJGuprTpSiUB7Tuk8bJULPfz5JrvagPj4",
  "key8": "4XmU96u1c5PX9qAJK9omk4Kminp5KccWi38p3c3QVwpQZivzgectjLndAAKayezQKCneRprsQGyQngWiamFBLxEV",
  "key9": "5ZZ5UZE6cLCqbggdcv5YJweyHz3KuENqs3ws8uT6i1VERSQgsG4SmuH39Vwepr5P9zJvYQL5W5rRFsbBo8kNiz3t",
  "key10": "29Ubn5d3tQL6cZ1fHCeFFimcSy15uX4969hVzdv9ySsYHFCwCFXvfrj6rCrWjuybPezRNqraJ4T2hCFUuDBcPcmd",
  "key11": "5UrzrNFmBGYn66sWdUVjhrcjwrfgc7VRnAw1h9iMXzaLjBfryL5QeNMm3N4mB6HaoZUfZkKquKtL1CAV5Jcqp9Mj",
  "key12": "2Zy4Rq8yaWfzkCx7NHvXXLFBJKtATPVkJ9CjJkXDevDBgtHDuk6s3Lt4gHnXGjnjyfAWDHjgVe2D2B61GXmrL8Q1",
  "key13": "4JAgd9SjCweAkEtbVoCihGhXkD9RZSDFn32fuvRXknX9eqJWwojhBgAA5VmAMn41Td6iyz2i6UQ5z1A8BahWQY9D",
  "key14": "4RmaAGNYBwokgjXX6c53cE44EwNGZS1ay4BSsMjYZvTug1oYF1J5AiqCETuGEAsj5FaLmuEpSS2qNG6bnUKTdNNg",
  "key15": "bkRoBWZt4HXSj8opCJByDdet9PY91pxjwznpcuBJZdo2aYEstkNnNKAZsG5nWYC58rwgkxvJpeVvGXkhs9uikQJ",
  "key16": "2HDEQB3yk3RTtSqVTR9FUq7pyXyiMGGV194vqf9tVFPtaJ1CkZ3fdG6Qg8iC8FUv3NKQa6CLwiSY7GuizsbzeMce",
  "key17": "2Mc43DKhUA2FAfFMWboyHg1MT6DX7gzgFkEx2M314ygMxckV92kYN3SAm6Es9wwsLRm1foS7cWRnZwsPzaAJYby7",
  "key18": "5ew7GyTQheXRP2Qmn5viVm5uky7wkexksJpztJvqusZDzHbcNadovC1zT1Wi3dRmHFHTgqRg7oAD3MrrQ642q28F",
  "key19": "VTT1LmjvStRpFt62ncW6JHEtQivD1xxci2QKjVLkg5X3LamiWbT7rxNT6JzGvCCbzwYpFt6PDRoxvKJ5Xodidfz",
  "key20": "858Rn6Fz52rLGTrS97kGfGjuhL6f7qwjmgoN94c6a6qHdubsuEWRL8Ad1kZPw4ZWXUWKoMdPq7Ak7kvrxWh3y4Z",
  "key21": "5zYdn82FW4T5miLQPYB9aZN1CZQ1eHUXAEcpukR1qZbnLEdETsXDB5bHNEJ4hYsx2q65WvPr7nq6hbjH8CgwH6ro",
  "key22": "3LTe45FeReYiq75CEzdyez3cakowF7fpnU2HDEmEdBQmHxdLjQH6v6Q9zVhB6HtXafAq6AmMGv6ZLGNtReuL1xTJ",
  "key23": "3eocfqJv62W3hYAc2vt79zDvQcD59A4LccYYLqPkYYvfqyyHAqL16L8vX1dtXsoaopekPDR7HNwhGzABBTAJtpBL",
  "key24": "2E3o3xJF41zgu1Wku9VrHzNRPrK5GK7nxiARJMnv411mPohjUSVDkKgbUJE6iV3pHsW9V7dLTmQ3ZjEqH4PuvJNF",
  "key25": "2hyaWz7rn2vsxqBaXLBmNbWUDq2ZzNNGEPCA9o1arGCfrLJxwjarn1yV5hKeqozRfanNCfugK17BY7jASYb7FFc5",
  "key26": "pPEG3PEVEkn9MQcVtVqaKSDEvU3ZX9HvRKa26c8XwQfw8G9nWrJcxRddQoGLQAtmmPdAVb6PkAHKDptYPm5AZ2c",
  "key27": "4N22pk5nsBiDfPVpEKPcSiiy73Ep862M6FySymbzP8HgUcofmNAagBRBLnMGCk2QuqqjTcChozpjwspR6oTcLo3A",
  "key28": "2dcd29KYWFVgW3D3C1q3VnXqKLtCffduSNY6rU7rmYrcn9n74HFdSVGjg3a5ztaLpAgPvJP9QyCikrbsHHubMNmN",
  "key29": "4W8spU6jgL7VDPktDuzBAw4YqF1qEBLGWt6akwqQ56DGuVVyipzJ4DQaam8ZnvCyVsDNnzfnbWAW4vvMRxedLYND",
  "key30": "4tr4RximUhkBj38Z728AUGSQtQJwyZSjU796wUUWpD5nxLXgktFJbGAx9JqWznFHr25hyaRLULsXLCUvbveZXYrC",
  "key31": "pXDZbWg1ZLLDge99F1dVkdD2zbpJpCEaV649PXx8BrVYKLfVjERQvc1vTzrTAZ32JsqEUfCZz7dKpjFqAfJe1wa",
  "key32": "4nibJA4UQkgcvuXwhphCPJRLhtWNr8U6uaNp5VfCNR19nmF4hVNtoer1RRbJcC1dubfYEeyMRLL6kLQBRyJt9rmX",
  "key33": "3wbZnPdMj2CcRcGDoZcYxAT54CoNRdUZjFgQwgUv4TBvqfbZt5NsBwM3AoCxjKS5cvvEjSkYEogpB7ogPPfMBipv",
  "key34": "42NJk3k1SJKSSt3BQacEMZMGrcv4jwtLFozcQg7NQZzqQX9tiwhRzidugU2R3EdmRkXSnrwKJJ9hfQo7T28uyRHc",
  "key35": "3EjuypcskoWG998Ag2DK7gzLzoKT1EXsZie8aMB3DrB5QimPNHJwkYZMNLi4bvmZ1SihUNGNH4bZFYXkGNS2o5Hb",
  "key36": "7UHJ5uRYKYfMX4kHvcmiNcj9VtQpQpUmEo3QfE9agMbvKVHmju3yB9ar8yggWc7Bn8QgtmoNKuZ5uZcv4mYyXGF"
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
