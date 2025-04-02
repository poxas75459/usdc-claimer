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
    "S2b2XQXeJD5nUahYjf4TpunDCkgsDxQMkms3csiKqQLGv7foCytMQqT1eYfmGHxrptzd8YswNaA5z4UDxFZDim1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fDWjFgXi8amFarJ5En5pCJUzPYthbXZE1qKjYHFeoPptZx742z6UEpQGXgczHB6Pw4Fk4dtN57HMibbuitwuYM3",
  "key1": "6pv3nr8PofHmQJKD8SWDiWtETwczu1BQKXY4Y1r2HW4MhoQc3pzUe6D6322gFHTpy57G3KhcbpVULgnRD8hdd7m",
  "key2": "525PKbbJvmixH5M45Hvq2XVgU1jZCegPB4KvJAqUYyzAo3kwguuSbPZ4caChWgonjdJTDtLbY5Nw1VCZbmmXzfG5",
  "key3": "3bbZLrktWoiiVLfRGodL9LFmTKrsd2vbL7VNLQb6496Ak6n95zkwkGu1J3js4QpG6LvHVxbFwd68vzFy4xX7rCso",
  "key4": "3a7knY53MQKU4PWVw6Bpin3N9HgXG3KJfo5u4xMd9BvHqCh9GtR9su5wYhfJJ5b7fvHXjt9BFyhcjTZuTvG8djkr",
  "key5": "4udmufuKEt5DR4cKJCdK9fUwhRGwNs5bVUDMuk7LoA4uRxoP5pUDcZSSp75ed9DE3FA6fFukx8HxWhQu1Dq9k1cU",
  "key6": "2Awez6YEaRc6fDuqdLHNEoRYARyToeFRNkvhwC9eaKPBYhqeWPoFBKfAnqr5kh4iE8ZAjkz3eDPhAWdAMyhbWZCp",
  "key7": "3jDGUTfXvhR7jTTWTnbBPcoeHdLAs7iL4ef2Z365y5JRoFwXibyE9nRxpnXgCHEoHjeReXT7NbJRNNDRLkpyntXq",
  "key8": "4bi4NhbtmAAy8YeynrxEs4vJx6STwSynAHkk5tpbUVAipEykGNdjhhYN6nZsnGmpR8AKPXEMZkvUbWD7EmHKwNXT",
  "key9": "5bhwjV1Ftm3oQdsgBxy6mREe8pzApPXMuNn6QRa7htXQ9cNDuf4tfadZo5BUwksnCnAWYYY4CDTnkVjxhwVKnonH",
  "key10": "5HGDEpcUafvkECXCMzAcDpjXGDpxYzY2Qu4hmQ5R5saHXYuEQCTHRN3AjTVKGusZy9Ebz7bV85AZQdofZq1LXePY",
  "key11": "3CQz3mc7e9PQKcv6vBVvqFWACifKiA86zmmfNeKQVmFEtNxq6qjPLNucmT9C68n9eB56hwysnmQT8Uie5i1yPEnB",
  "key12": "3W7SHpdFKXmYAwLBAhniuCoWnxGoo38ceX65wuwSeo9HxZyXbXYprfrseaPvz7DQmwZb66AyccSvxP4YoSNcvb2m",
  "key13": "21pX4YpAGZeyZ3asgZ7FPSD3a5Thn9zzfvQDd5xCjXkX3hvRxo7jFwGciyterxieCNoNnDJiFFk6aYEyuyU6uS4Y",
  "key14": "3xg5318kfaivLScvuUDPBSbY3SnsPP3pBob1t4awxSYAfmjLayNGviw1upLnGxirQXB5etQDPmArLsnQDhP88wcR",
  "key15": "27xggvJb9J47mv8FqZD2vNY5SFKAWgw7cQb2fA2tPXE1oew9N4tNae7g6o6eHR4oVyriUEBZA5T233mQh2ZmpPYc",
  "key16": "4MZpFya1EVdE9tJryy2V3cKsjWSBtHgCNzNdZXTLpBdmqKq1PhsBN7TuzbyF9ti1MrbTsDroi7sWyb7Adcc9kHdA",
  "key17": "3KkCGhLBCDUGwpoSpTB6WWMsKfb9YauBiNPue9NncTCgtddFxHLneAa4GyrCq1zMVxockeDPR4pKX8jTCAnYjXym",
  "key18": "4xN9TspyReZnKWuNGs52PEEFeShRa66UMwoj789z2fmeFpkknEngAj5Cn9HmwgV134htaFcTkS6oqq9ajesVe3Ay",
  "key19": "4BEWu2wnCy7oPHEHgJuV8PPkxLFpqRRedznFHjQFHLXLrt9ZNtVM1cPno93dqutqF3tKLJj1XWdsj64fNShSX6W4",
  "key20": "4VG1VsmXc6jdWj6EUqpjnnj4umRnL62gAWyCsm9iJDgxLHqejnavEzMZmUu4eGXeV6kKKeqGznW3QpTWwuroFaGh",
  "key21": "4JBe94hu3brLstJnPXjVConRqQ6SKQ82JF21EjgJfEq8wjdA2mypj74gvZLCgDx9UMQdwTyLt5oCBjkgNXzgUdcw",
  "key22": "2woe9PGGVBhPh5XT132QGYjMAQTjnJUTasMR7CLFsaNPLoso9dwiGGDCwwVpEVnQtMAbHEGgLccNS4WgsFXNPRmg",
  "key23": "2FSZac22JfDfcFVn6sQ6FY35UTHE2nSXDSsXT3N6qBotzXNCkVqgxj2e66UwaN7USvuTwZvEYv6YoNdjr861M8Cc",
  "key24": "qAR5CiTC3pKmm9L5wwMp1nenxkf6n6DiFU7so41CQnUyWRFutiFnnrj5PdcAn8ug1f4jBMY1UWGz8gkXjuqECCL",
  "key25": "4VWp3xue4sp5FvEC4UBSprP5Fex94bL51MoC2MvVrXYbkZEAfWs81kEHAVwZbh9wGMz6PWMnknYcHHB7Znv572QL",
  "key26": "5NN19McHnG26aVnWdREEWz1dNyDtuHiGaQrZCJR1Z2LYdEi3ZK1Ztb3Wea8By1R4Ee8SnWVEpd4Lve8rGjHCx2JC"
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
