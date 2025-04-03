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
    "6STx6rtvAh9Fva9ruDAmg7acB1on3WhT3TptFSGX6dEjmxuzkWUtnbWx6whJ724QZxJLnT877nRpdmvhL2e5j9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nk1UYqipJHxmigk4hPfBy9dDKbnt7sJ36FcyHHLrcZuwKjQPBkoLjir4H9p6hZg5C3iL3GbNEGeFX8hW2vMKJf5",
  "key1": "4eFKfkicGfTN4P589pMhbQvDJUQ597J5fS4Hc2V7QsauwuqoHHoZe2giZfwcwtv15R4Z8YnTnPa69xYpth7mTJvd",
  "key2": "gZH79vuFVLGGL4qcbtwM8QuS9F2Feb862FGywQXEdZmjw8eS1PVP6erqx5TA44ZyQCD3MafEMmTqN5sxnqD9iG5",
  "key3": "4HAvmXZ3eVFjzoHfndW5LQZGALCz8c7gHAgk8YmvkkjnteP9anbCqMym29JLvFAgeq4xfMQEqcwzMK2vjpeZTB92",
  "key4": "3AJ5UJhNFPVk5gCmPUdn6bqt4gCCiYaB4pRTGePxLr9Nx1q11mSxBK7btKsxgwhJrxSUPLPoowpgrGLjADnjsDfr",
  "key5": "2EecA8H5nwkwP1vLmtBFMUn4Nnub6chDv3r4wcyQuqT6c8w8u5MXSr7Yytm36hr7qsQ3Dknaoy6RjDZZdtJDAFsG",
  "key6": "3z4MWmwa7CyhiPyq3Yz4zPZanHbzkiMcG5E73JzKCxPmhVK2oDJfEQVD76qz35MLTdb2R7RvMfZjjP5HLXrJVNgz",
  "key7": "4gMaN8niFhr3DzaeNHbMvxw63Q3GJWeuaE2XR2RrpRYoyiqGBNJ5opvaLBTWnwJDMGAowogHUWfAKa2vMnB2SNh7",
  "key8": "5bLNCVs1K1ADhQcuhtp1sDrSQi9wgF71PkziB3EKHm9qUtRFHYtiHC7j3hZ1QEs2gUUcwEwvH4e9Eus5uR8Hq7Mg",
  "key9": "5gtPo2Wcv84jydCLt2b14EpUt5d7Ryrw8NDTUpct9htdBMfmMtk5SLYTcsKvLuYs94667x1wHMJfZjSkhc1sPmUt",
  "key10": "khrwwKSfH8RqF4hyLu5qahJ7TqwxaaDSDinreYVofNDLgxrtBgtuWBovziWt2RZitPNzWkStwzWXvjEqhcioiWc",
  "key11": "2M8nnU5kHeUFN1KQx5j4CUoaPexXxSngjBsnUjHXSsXW2kZHoZfxCDYqWZhgHyTV8xVX1cUWUD5qADVPeDNgBhu8",
  "key12": "2bKsR6r2T6Z3VpqzJ23MuJ6a8TH3hzcvHVDJQ4gW7aVkULPctay6xSQht4PNrdEdVfNjD68NYRprnqoq4z3SxPSW",
  "key13": "5tLfRSdXy3ULw7oxLSbmZrbuJ8CVzfB4Zk9dzmm57AW3xG4ockvw6c6rCEpep2eTYQb2V7EhwunDatu8rEXux3mn",
  "key14": "65EquHzUA5LW3BtPsSSTmP7r8RHTGBAo3gVLK1nTbMXydwbNZCd42uTgRyVpg59nVy41gKcb6inZzVMpWbJZfnK8",
  "key15": "2a4vUTsunooHbQpqmn8KVKY8wiQzWPd83hh8dyFj1L43KekSVhpyJ753E9rLgrEhz7zyDEr2UdxBn3wefdkkrVjG",
  "key16": "4bMLV9eneJr2UqXfYdCnL1qfJwHZSppVHoB9Uf4hNKu6ffG3i9oCthgeSR5j3mArBVvBYDm3zCdd8u5Zj4m91kWc",
  "key17": "5TAwAam5CzsyEMko1rgcDJNUs2uyZVMf9nrzzpHuNETfMUzJF9T38KAaugJTxC6xjRN7KkZ8HUigwutb7PN9Q294",
  "key18": "4KrcSPWLh6K9Z4KJN9bKDC4qDhhhdY6BATd2uZy8tGmEHWWesc4vswUadE6EhGY1xhsypL2GCojJxviN2nxA8XTs",
  "key19": "3W7PX2rEM1j8WcvsDd5KL5tMfGyHw27NyBRVQ7wDoCPaUZnyGEQgknjpCxxfCMM2N993d3p6gzzq8GU7qw3KHpgp",
  "key20": "x76BqTcPnd3CfSAZdFcJXbztPtVRFamUkRLDDQaz8An7ecivHgsNWP7NobSNsvtwTREy52hKjVJrF3v5bQCxknm",
  "key21": "2burm6kXYUUYggfYWtXmzJkoV5UmMmduVFWjhjD4pDcfVeJeEE1mkzDHFKoGhsmXsXE6tfzNBgUy4HSaSCLUpt9a",
  "key22": "tXrQWZjJTCHeLrX4QC8FZtiiECo9jeeEc4Vaw1cji3WipRUxEE5X878Q3jUjH6ZACcKv67iHh2DrhhAdBnc874B",
  "key23": "53jL65KHY9cxwHdLu3mMsanUhmWhzc9SbdRU4eEBgpuHE3ZyLVDhbRhRpBrrpaz75TNm8hF45fEqCUF6vJXJTN7K",
  "key24": "3syMu1HCzMDtLjsoTY5UuFdxFJ2NjwDV7KrUVyrW1hXvbAZmqqg6cH35qx8VcKLARFfyLMX8AFQ9yQKm4FLtsSWv",
  "key25": "DRLRkTRxMNwkB1wq79d1JopPAuXUtDk8qrw1tDVrukD5XsCfHVtuGh7qvEenrW6qLCoCAM3H5d7A3YmKofvzKcc",
  "key26": "3wZKGbjF5KEh3BbJPFjx2A75KivEMLRr5mgUsmv7SSs4oZv4PVjz31nkrxyhiMpcCNFG3NiRdhiBB8ZiJ58VTXRM"
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
