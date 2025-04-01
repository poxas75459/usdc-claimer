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
    "3f49ipigZKsSPyDBP9n7Df43686rReQ9EVFBeLgoBcQKtaGWKwDEqfSXWifAjrSquwbeHss1h7iwbbjekQEsmCPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HYRNzyCx8x15CUuYuZescEPFPLaRJDYEeKkt9C2Rgix8e7NzxF6PniPAkre3qx3maVyG43j6Eb7CrAfyv5Eer2d",
  "key1": "2Ava2gYUMWeeABH6nwRox3oxVpQErQD2QxuraUVQ7DCZms3DbQYx5qJG31GcdxDk1szAoJ4UPfe1aZ4ZzGxiMUrS",
  "key2": "2psQnbzJe73Y8mfmyjxrELRCpUwXLBWsJN78yHmXGkqiHxriGtjomhGpRoKVsqkuXBkAKh4TuavBVHZBhus97czM",
  "key3": "4g4Udk8hmfwEsQ31eRN4boZtKat5Pc5k71PR2zy1UPyNCPtBx6yMU4xW8pMynwaqA3FJwJAU2sMxeGkErUo2rwqB",
  "key4": "4s3hHLLYHYMhK5evVDBeWJ1Nf6gKDG2BqgKvuzanUBkU8ZvvKAAVu4LK3zSe7FPsxQMVBH2yF6i9pamGjvz3afB9",
  "key5": "4ap67hi6eqbYYqp2yV5d3T2KBt233G7fd3Tp6oNXwjpBJjqXfrJwCypdz8n32KAGzfrC6MofX6mVwou5xPgzAnF9",
  "key6": "4sEYgnZrCtwqzCAt6GEvH6mX2gHqxgSk7SYFbubtr3Ek4KtNuaRUzNEzQaL73XazXoxtS8588QhmR9C1KZNgmmVK",
  "key7": "3GuQ6vgSvR625TPJPAHcSym52Q99xJ6GuKYimY5Pa3hgrRrvHpsqK8uAJNqXnNPFV23kRiEyN6Jv8imxFeoUuCHw",
  "key8": "5oEgAjj3GtpKotNFtTkP6eNEf4vWX9CQMXgWBQHiayhRtaqff88QpHBQxDV6vDAtqbcnvdMWgCUipDTWF1C8DhYz",
  "key9": "3AA3FzubAmCfYWzGR26ToRd2XVieuWeQe8amdPiQJkaX4u4Nd1gEnPp77cLCauj1urwsuSbsnCKDsfmRUpkRmfJB",
  "key10": "bEquTXCRQRrZFAa2U5yE1B8hECkGn8B3qwTmxExgABQ75E2PszJUmk2XJ9aGAGqTt8NGp5ksjapUPxncbksSgtB",
  "key11": "5t3CV7rJV6WkgPd79kEQC68Byq2SfLZLNFbJZtFuxgsKqfWJptrVQn5YivU6wYgYS89VicYtqtEhTKYm9AdUAKts",
  "key12": "3jgYyj6cr1ampdt769riZh7AS5Bt5WNXgHUc8VLykwjy2jQQrML3QdfuQE75zDARo93LzNf4eRtwaLEycmRDycH3",
  "key13": "5om4TRbV4y5PgomRX8DxTaYSxruhrfbuQFmZkSUbK3R6YEALxRJTPSH5FZWdV4meCaEbqfg55Uyc69uKgPVcCeVQ",
  "key14": "2mFc43oqVBrToSJVjv41JmvESUHLmmhpsNaWPd5WcdhPAaC3H3un7xnfas2B1zfr8f2qyK2Udg9ZzVG4cCVVbi7g",
  "key15": "5MiHqaUX2TWwEpnQtghVgatRF7T6AauB9oRpQLP3aTqnZyJBxAodEfutdsFwy6zC6RxPnXWot2WpBjR96Rweh7VN",
  "key16": "nD1gf4hvWKHDkZjMYrJ6i7NafuYBaPcBPPvtPfGczMGm9dKGLHVDonwjbF2hcJyX8eu5uJbKsYm5FtPemTB4cB4",
  "key17": "63zeGReq542ZMNaovRobgWkyYFhWna8iwyaUpUhX6ubety8agaCvSUiTctwsj4wz63zkWsXiGRjMBhE1s2KJop9Y",
  "key18": "4xRYLufeN2arcyANRzGNgUuZXSunitjS4Wt6XQH4x8YRJyajormixYmoENxogM2bCahAkNTrVFn9X33zRatJGHvf",
  "key19": "3qPGp3BVp3Z9PYUo7Qvfer31KydRtp1xcPt8E9h7B2HwwondJtDjYuP8pbYurVfFKVbk5Hj28w7PYEkuALEnBnMv",
  "key20": "33KxmhCf8jLwxv3zksxqzRnpYyEjH7mr5koE7LcGmoFVmTydAuVRNdMWkNWBMUjN7oZRwa9fTfuzXv66oPeXAN3n",
  "key21": "2L2zdaLTiw3cau1UYLuwiPFvb5RjMNED73jSZstjVkZ79eDpJM3fJFqkA1sGZDhs4vY1ivPX4D4HH1AeA2MKejn5",
  "key22": "P6DCUWAv2hWvMaUNfJSkAzJ2VEwhtgUTfQpywKJ3qhmAos6jVnHBUe1DHGVqyr2smr7AGqY9se7WzqHEVMi7MGz",
  "key23": "4HVrx51eazaWxkVUXW7wcKvhvSkavXzDWvR6VxvucmGdkkJoa7Q2CnKkd5Tcnvdq8CTiawHPmCaQVpyMGPWfdng1",
  "key24": "4e3Km1GHXeFARsaKGwgHix75Vn8TDU45M3R42mhWq78Tk1odMcFCax7SiPVMSyNDGTKLUreACrev7X5dpzyWR8Vo",
  "key25": "36xgfhmXC9zXCxP9uuwocwjTwksGrLfpnBBK4irn5daeyMgduQD385aF8LVcCC9SZKWsU3XPJX35wsM56yq35kvV",
  "key26": "XYNrjoJ35YnKMgD6u7DfJtpKWH6o2eRgL3Jr4qVjJk8RfzuDftYgt8MMKc2gMUWmWPTTW2bCQH2UYqha3MuqXBF",
  "key27": "396thEdK41CrmH4d7MVuXvWECyVgS4s23Tt9a25bBoctG1rML6ewpzdoWGGYV6WNvrRCV9uu6Eqzs57tjgUf3eSZ"
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
