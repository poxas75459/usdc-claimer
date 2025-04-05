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
    "1223CF6ifqcfsayzaTAZoiLEkRMfJNueQwVQATJbBKZLq8uLejXjasFJuAHA8886HVKRtxdkxo6BwBYEkFVYgebi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m9SstAxJHs2iDQHV1c4A4A5UGBf9rdFqoDB2USK8sG7n5hqKfw8FPuYYigEirupo9CfCoKoxoCyzE8zaNqN251z",
  "key1": "3zRdqcNHXTPiC7PNvvNwsqRjbcB3mFE4oVmDp7JfjU7nyRzukQGYg68VRg3gJkiA2xNKfY2vW914HgRzRv3yfgxv",
  "key2": "mM1a99q2pUsFutLUEWNDheyKkWDnSJS5f2rfPnLqS1UvFzFF8Ho4n29DyQkgd1y9F98cUx8zw7hw7WZy9im2tdC",
  "key3": "2MDYP4gv1NHHN3VyDGSXayCRMNMrVy9MRbGhKbn5cB3F5BBUMHLTHhXEnqh43SWx57CzE3D5nwLY4HMj9g3GYuRe",
  "key4": "5FewMMPVZg3T994R1fywcpDjny1Y1NDbTXC1THkQmeTEQpDZwz2DWPSLHxu6S7HX8HkT1WBjcLMsLmKvx2Mo2z1L",
  "key5": "47kEGnr3zWTXuPFbTeUkRXwAAREduaoBj5MDyUbRB6Z2QCcEgWT2vPLcuUtjWoyNdiByFaFGGPNq1FgRxuSgHLKt",
  "key6": "wFLAWStNMkyVQyBk8KxL2YUSJgqnmBuNcMisKDJF5T6CypN6NqMikUK1foUt2ZojiuEhFLhVHSXxtaQB36SCc8c",
  "key7": "5sqWhjxofE9B8jsf8oFmDxHMMMeZDcCPTLgPsB7KhBMJtKBZNYxZZSyM8ou4wteTnwEqkBt1Zn3ZZTjN4DeYGv9e",
  "key8": "guRdhNnwpfXxN8uGnd4gMuqtifSGvZGjywSrckcPdwoGB4cCtWpH8XKbtD35rQergnpvsrqyYAdzw2CCMQMH2Eu",
  "key9": "2f1Banipryxpgskg7dZgkmUp79jnStkLhc8SBzXtKNCGSdtUjCQfAbPyc7eaYfPSQzaoigV5fqbAayff6g3wTocT",
  "key10": "AGnHoot8GLwjtcwZguWb3bLTeZ6BR2NsEfN9BmhfJUUYAyeTfg2uxSCyuLFxPLYSNpt3PNger8p2cu9wq49UhPs",
  "key11": "3pWnX8fL1sa5xT7iiZdcHThiwFsF2YtyxP5KPwJ9w7WkMN8nuirUXsiE8DhpyPqJ7uwa5JDCKpStSySesP7Let5D",
  "key12": "xWfdLHoktdnhCYngz2bSy1SVmBhXJbPdWUnPCCXPmcL1gyVQpqY4jSmn4e8uMHeiKjpmzLjFe31A3BbmqLXqohm",
  "key13": "4pF3zPhHeHkvswhdbKqzXMP1M4qes3cRYzQPCMfdvvsgNCkHpeCzu7x6SiaK5kKRiTJZcwpsi9WX3voy8iZpTX3U",
  "key14": "3LbEdvSVcxcLLp3u5QZ6ukF9K8zFtHvjMv7tjSh7PYjTmEyTVRTw77yjStw8QCVzvrmvSSbhPYnFxTBSBeszqU2b",
  "key15": "wxpsH3cRSsfbQ1oFTy74izAkCTcidps6wP7u9B11YfeaskaNUTtVDoJewgzXmiYxKna2LayhSgkhRYJZiP6ytrv",
  "key16": "5W62VSgodKa6nxJtcWw8tPWRugSfbwTbbzHSeYye4TDnYdb5L4nkETdEavJYd1Z3W2tdyYuPEhsC1smWmLxdBB61",
  "key17": "4Lnro94rbQn5rr4xb16DWRrEQSYipyB93PZ1B2pSy6yKeaoh7mWmeq8szZr6TDxM7EscA8XU1LH9YE3kzmh5A6tg",
  "key18": "2vDCQrKh981GkGrFzgqUkmXNdpLnVpEQV8AZo3MG1hSnKzTxHLKX2vcRe9W6V7wMovBi7Le8AHYtyXXpaScU8dkb",
  "key19": "3zRgVeupm1vNAeFNKeLueBxFkNuAXsZkxRpEDbSftT68vewNGf6oAwsBnNPFGpZHTrf4hVnFNTGMnDwJw6ALdZC9",
  "key20": "2tN9pp4H9tVkebpmFCzUtbm5kVbon1JfLzCG7FrM6MswMAG2idFyRzCu17fKiM5RM5Cs79CsdPmU7AjccRWUi4Wq",
  "key21": "3ZpUEFdq5LfAWRyHbc9eaiTzd7axRagXCnMYQJNFXw5KcmaSCC1voRwFX6fEmsm4EpUzskA7avF557oph3VjgmmN",
  "key22": "4P5YXKSoLuz9p6wGe6e4ZTC6PrTN6ioCA9CcDoWwV67eMtCUBweHqQB5HyoFfmYpyxK5hKsrJAXHB2AykK5mpeBU",
  "key23": "3HtkZTnC4dXFCfhW4NjCRkEZXHvH5f3tJJe3KpXA17UmCsNXYf12va6UaP2MtgZak7t4VBeV5YPwpCrSdrcTyecT",
  "key24": "4efiVtir1ep78kRE5nWHbZbnpLVfNJUmYgx1K9o7wC1KTARR3HEbYpktgbmfoUyW8RGnRLDTUBtPMDijzvmVk3dA"
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
