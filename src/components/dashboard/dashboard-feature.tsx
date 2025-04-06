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
    "2KDcXmNi6vfHQoAUi4scPQo8bMowtsFCijgS4mnWgt9mQmn5ZSMmdubE2KuPgG5YH8aJkrJRiXtzpgoTT9ArDUYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U3nrHBJBz9bq9WtzPkiMtuxYMrhb5TsEsBseNu4r1q98B6pWzYtffv9gK4t2uCcwfrtzb2d9JTRy7jyKAPvpKav",
  "key1": "59sZPTtHjugTsmeTgTVCeP7FE4DeZiD2mnzvX3UpNm6nZJVgBdzsPG5X57mn3QdxUAeuXTi6keLZwQjmzA26yr8a",
  "key2": "4D4wU92GVDxRN2FYSrHHaCyiCksuE2prBFeusyeohKNm3WJfaJtmy4Kqb8PCsnNa5hJ6UykiwVYZa8ekq6e8ZWoc",
  "key3": "77HVt6fL6epGAUCbFYnzNpwTtj6YiiM36tc1MrSt8QZBHwaGDgVY2nLUA3P1LaPrgyeV6rhyfJ43sUa2vo1zscv",
  "key4": "5krG6xnVDSdSTUZg84FaVk9DFCBDSRoJsvkX8AKS5P53wU9G7Q1xnaLUFRStXn5Z2VzfjvVfzkgz2UvTiXrAiner",
  "key5": "2ohNe9ji2iNAvJRErkpgC5gNj6ZRZoYbvCduzKMNbGqpBRz7vgfdCT7CCb5Af32LthEfsKDeVekHyFLAodiUma1q",
  "key6": "5yR458NxA9q3NwDZS8Dr8vTLjWbww7uUwHg4DLLFbzDrvPdqWiCqDefCyrNouktKhZd5CuLvjMAeRkSB1kDzxDpg",
  "key7": "3Cz2TFpePKqswTZyqayz3S7yNWCm6srrgUqEtbsg8X15wbUQRKo3tMB2ZNbRxSCeB2eq2RCqMJPXo9FMXBMuKVCc",
  "key8": "5i1CxSz96BuhPYhLvmua16TD63Yx8vEn4TcdAFVN7nnwkhXSwuEc9prypxpM5oovyCBkiPuphVNAQz7FxysvsP2N",
  "key9": "4WARR1JBn5L4ZufcSU9vYzbyezNbRB1inbav9XDmhMDKiV38mgLxvnJvjByATKQAs8KFSPcN5gxgsNHaJYmGLoJK",
  "key10": "urZKY5VK7P5YYnKXJGHf4kyXfNcYKo2eRMboMHbdgjYWxBf14nbKo7YWyo2wvnzzRPoR4119vChqAnKf3e2jFx8",
  "key11": "2PScXHZCLN44AEAT4SMQ7bfMakUJvjWsjTUTgoesoKFMrrmNUWNi5oJgzJgj36SxmfWsWzCZ3rrh2Xt5mB4RX3xz",
  "key12": "52uD6Xh7Exn6Mdtpy1hWuyRLMe4fPTH5PAPHSFv76krjZNB9FC9cYQwq6PDYQmD3gFfhgAfyGkJb8BGHpiV3yH8T",
  "key13": "4ZuTvvfTdoc55o9gRvvG9NHuc6E5geCJSUiCoc9S1QTq2dpmhBSUNHZQcDs4Wgy4PjdxViMwzU6rRNiZrwKk4Hky",
  "key14": "2byBofPGEwrkj7WMGgNq5kA2wfYcz4H77LR8Q8Ke8mGwE7ChgX9rpZWK8aTGD93uJzqyUfxGELEDfERyYaJ4ujJY",
  "key15": "3oshsin2vp5r6Dysc9WTN35wERbEdEuV4AAV77S7nHdWJRUzge7igVRgV9SCQmpP93htHmTQE4nn6bkhQPvCaYm6",
  "key16": "2XNqLzn3XJkuAEwSoEGnyuggUqs2c1VpgZ7EsL12YDnhKrR38ThKkVSMyxd4YEB8diPcP9ucYCpQYAAwCgnLNRbR",
  "key17": "4WxzhfQqV94ALvjKE6UZ4Zei2SQpLqfLUdFSkpFptadF2NQvM6yYinD1evZNzyATRo1owrRPoM9xDCJhW1qVRKp4",
  "key18": "4uCWJJ3aGYKgw7LknfwQy7ZxVFKFjaA9aar8UELSyDc5pYf1uwmrFfHGi6ec8mJkZ3m9vmX9puk3vAtVMtBxLS51",
  "key19": "4uJuegqNfcYBTYdWNe3KvijzTp2iEg7YQ43H5LqK4HcKs3z8TXqtyaUuG331NkSr1qa94Vam9FduCvy7JWaxZEg5",
  "key20": "3WQNuA3zw6yv9FRBu1hkpDm5dL41veKKkCp5qE5Cfh9eqYBbKGu1rhLhiedKL3Er2CCH6pffBeA22nAV3QkQNrux",
  "key21": "2ciLQnYN1KxKHDjBm4ij89jaUVHrnhpZ8tM57cCx5UHmcKTBxNSwQDM4CYaJRcNPzWH5eYbDXeFVkCPryM8TfmFX",
  "key22": "4SSgYTW4jxdGSZeMFkk5pNjoYuAQTX1kNzRmrMqgnCQFjZ6cbECwFYiJ8mHjuQicXceJJkgxqCwFcP9RWuDxTH1u",
  "key23": "2bW6ErJXz7KgHUfhpDmyZFCvtB9trZGnXCwaoU2vg9MoseaJKsWyjNWjX3ct66TyFC598CX2cW9jeHRqSdkKCodb",
  "key24": "3vNtDsa7d5VQf1ML9cnGiWmoDZTbaxzEf6rkP2VuenGQ7HAPRsjCc23qapvB5j8T8Sn3uxEvMToH78kkHJce1h6o",
  "key25": "2CGzPxf1QNVm3NcaVtuHtwhhLhGVyjKoXt66LLfG6H9jxooLic4uGZKycgff3s82KZHQAvcrvbNaDsawxBHFsG2A",
  "key26": "Z15MQQk99khzxTrf5uPPE19S1PqyytdmdjCmZsrLhDMTEMNsLGDAajAATSbNiDcJTRL1sDiZDCBXqNbefdBpjcN",
  "key27": "7FZ8nNrDdnF4FGhFErNGqLiER1aLvqLXFDkxrK6A3wUfPyzEu58QxUHb3s2GEcj9yjAoLJ65xvJZGW6xj3X7Tx2"
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
