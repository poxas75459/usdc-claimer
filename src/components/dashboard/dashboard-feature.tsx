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
    "yFebfjgHMGLA9McHsd59RSAp8zTS4hRB9t8VkGKfxWwTEyyfZbTqaKpZ9jFyLB1ysyW87bE26c28KVFcbdaYoGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HDcBukt2RjJvfNisaMWgSQp1cCownAywwh9P5UjfzCXJDXUgtzXmC5XMM6yxwYgW8RqUuVeMRBVwqEwPkeG9dPY",
  "key1": "HXAFAR2C9CYGRpPuJcYHMn5zH7bGQTZJ22jTmmsdWaGGamMrwYQJMfcKQhySr6hhRXdqGWgMH8CuAxV4drMTWCe",
  "key2": "2nMv4oYQjJ5kqkaG6JvXhEoW6AZ3goxTg5srux4DmoWYAiiJ22AdZ277XyrSXgEHx4KTCt1wtwY7s8GauKzXvWg9",
  "key3": "3Eqiw7NNtWWRmeZaEh3w5GshiXNC2DX4X99dcnwufd6pFEquGPwCvht4Smu4qSdiUxDCJdaZkNtoAinNaRyGxQjU",
  "key4": "3648NLq7rNiTRiAu6ha3D8boECrhaBgULxW2TfMfRMdxv1D5xKFhCcKMo3o1ssyXtXiF9JHeBUg6gyw3x8bcZxKo",
  "key5": "29SyRUrbAy3QrKdK6HTnjBQE1SD3TPTj2dLtTinTWRp1MqHVc4aMYaK2vzcZVKS2ekGzbqHe7JP28bzQU1kUy5Fp",
  "key6": "bnLaBMvmVMn5DPFauQHpUMbMffYghNxbYzx9CeNEnBzvtpQzYiERvGNVfF4ifxcCDkzXA7cewpnHg9SkuwCGiY3",
  "key7": "61C5puNtug4ta4N4krVAYRV9kDpPvegihxaQg3X3h9MNwrZWazg6BT1fGKsjenqBvfsZcyiQwTmrRAezBCssu9TV",
  "key8": "9r5kMHGY5D88YDpBnFp1SrGhHQraDtbmXdeQtNNGavBAGmWMdu7hZwHJ1L6hgBFwVYozKLjuhDfxfce3q9EYtLY",
  "key9": "5bk16Wqc1ADyDJHUhFYgXrZGnh4R8MvZK7TpUJQszKvD3DPYtTbLyGDFDqX941sT3MLFQM9HwtJzriCfDTeK4mSK",
  "key10": "7jQZFJHNhzprCk3vCKVMcLnN4byUvDEVRDSP4gsBNQfjtyN1uFoNan4EwmTRKLte5g9GLNchab9EesUe7PeqeG2",
  "key11": "4jfa7ZMcPBGMPEVNxkJhNizjxTgeLZGspAHAdGco71VFPm543cGUBawgUxoBghMzJH5H2yAUXqDP5Wmu5Z4KHfsk",
  "key12": "AY8U1x5NMsq21LG3qhzntVjZcVnUyT5xZSKJiAD4qMd4pwJKdxTVx6BvJJBdpYFtikrV17iRMLJbHQ7nXnMiJV2",
  "key13": "2n2RZ1uPkGNv8HpTojLuNbxYzVPf5E1eL2AURjEsuQEbK852kBohd7fuZMcU8gEZVZ3K58mSWWjQX1nc6AquAWhg",
  "key14": "5z45ZxuYvAhdrEJnG4iM2zMKjwVijucFfqCfau6aXANqZv3CZiZJvv9apg6retF1VoXvDoiGP9FXUDpJb1EMvT8Z",
  "key15": "3wEdZhZ9LUE2u4zjznxrufb8jZQdTgqZWkzkfjBUQxZpwdjqmeqEtdws5MQAPkMuUdwP8md7Sdmy9WfNaJE9M1vP",
  "key16": "4wiKDtw2x8abtA8SjN72ztsQiqcgR8w1tdfRv1A7MMK3TvyFH8J1vUVL2E74kbdwFe1Us8D413fKQRLsPYufLds1",
  "key17": "5tn5AuZxdnnH7rZDWb2MPx5UYceqzwNxWdzfmJFaYLkYhwuok4cta5ZdXAUfmsDFBjWC8B52GoWGttsMyqG6p997",
  "key18": "56ZsdNCZ4sGT54HiU4nZiYUjdJ25drfbaabUDdrsxF5Akp5GrmpjRzaj6C2i8FZVrSfsp7V6mzoKN5sUexYFxbxx",
  "key19": "5TGe5L6XnXUMffo86rA9MKNDNznMebRNcNkzbeoexA3Lno5WesX42qpVTXKCCh7wejnnkRJ7VKTuJ7GpPGCGaChy",
  "key20": "3NVDJf1LVXCaoeqUC1n6NhPsQKzNgjXr4vpGon7F2qDpwv5RuSytatKeUss3D2ypmkTqcwkNk1k6dSNHUYuvMGej",
  "key21": "2VhxqDMdUMFmwffeRrWrF69cLGA4kYEFkdT1aSYVd8oXHWCBfR9JGBMgQpEgjQY8k4ESQnyVyxKR71K3uiDAnt31",
  "key22": "5985TC12ALYXEpbm1rzooi4eq1hXavr2oQtZEKiD3JWY1FT5u3tmkjP1jXYRgPv3SuFmoFCXppiWwz4MqTiWBNa2",
  "key23": "tb3MSR1fNNcfHEHsNWHYHACetPCYZEyZikWLfN9WfKDvFXhsrEmVXfUiUF1YxKftgVfH2sACSaqrtGHgDVHYtFb",
  "key24": "3BLfcDqMQDrjotzHys6WtaGjDGNDZkPWoShQhXAWWFSz4KUGaVHWjQ2fFFuetz8wjHHbdodF9BHKigi6LxnWT2Uf",
  "key25": "5cVuLP4oX1yFXmH3MQmh5AGTAzpfv24KfAcMTqhxWwbvjUJ1EYknhD36YWyfwtvhc2qy9SQx74SjbZNX2M8dccwY",
  "key26": "4zKBt9FeyqLUL5bbJSsRkupjdqmYb5Y3Eg5h1H51UyLTz65TAUK5YHXNKAmjNHBwQX6Yu4qybFS1s7s9V66Dhizi",
  "key27": "5FVtiXMobpLz2QhTFpgUkq5beZKopuA25GBRvL1cDQLp34N2Ph1aiZFn8ciMh5itpsozjCxXVgWyXQ6N5wjKnCXz",
  "key28": "2bgVFFwNdPBGvzKTn3xFTNov6Jv1EqUb7RD4z5zRKrv7qNHV4oyHewgy87BZ8Gku67vpm4FHxkmoTUjRyP5JVWEv",
  "key29": "j218Dyutmtib33ns94BgZSReJfrtsfMewTuxHpJsUeVN3fvdGRQAxMsTJNg4bWyuM4biUj1PqWwPAUUAMsnLP4R",
  "key30": "2awiUm5szAmPetqrQBbciwWbdHofE65MP383wV4SXgo3UxsqkgfTSGSjhUavZtkqEViLRC3sFKBXYBg6EzFgzdqo",
  "key31": "4gLJjp9f77FNMqMEbnVe13EYpVAxMirhEyiqM2Q71M8s7KqbAjMWriAV3uG3fVrbB5AZKvkZxbGB6kGuuvoKzYdd",
  "key32": "662qi2awLo5zGXZLWrT686HvNryU2dNRBkNn4pCpzRA1saKMsYCpFVnmAvkgSADedXrpDcxmuMdJsP8nyo3Ggpoz",
  "key33": "4MgzC5BXEzZAf3G7etDcFB4HefYDurGPYPWEWeZE4qk2sNdrgvcMaiccgXopevacxktrZZTjvhaP6Gx4VWK9GHjM",
  "key34": "q2YHXu9QVtkmPaopNNcJZo68vVjJvusBBJK7Xb54ZziBfd8Gw2qf6sHoUtU9f26wmNbcQToWpc1piPzfericSfm"
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
