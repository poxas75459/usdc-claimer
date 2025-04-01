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
    "4sB6vt3z6eyu4eh8AbkmVMSw47WiTGWwnnad1DeisjGZQtdw3VMcpQZhweJLmDwCKDKnjXw4XtmymwmTg4ExRFFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KH1aVQ6nS6MpPsEU4V5jMHsuMr88QjbLypn839VeMbgfkBzVuHaeuqv9wv69kawAMSv5d7Vaawusmy8txV8VSQ1",
  "key1": "K4jexeyRv1hLkndPUoHv7LYh9TbA3kTpcA9kAMHnjLKqZpXUAVWw3E4mRnzH4aihzLdkmUQheuUpwQQuMxrNTQ9",
  "key2": "L59bdLd1LHRXj1sgw5nRs8HmbbCVTmFXGy5T369DV1cKx1Wg3DVAPbGjGvVSBXv5z4Cqxd6TrVqVpBqcacVJiGY",
  "key3": "2hqGiVdwxTLPfVVmwxLVWzR8qhpAA95f3RnGdSdzw15EwCvGrgbUWj2oN7n4FECxLN9VeirTtdML6uQe6P2wnBni",
  "key4": "hyrqaB1ftT4efHiKs1AKdmspk8w3Mz4hxfW4asrjkESN1Rw17bn8WAwGEDPsn6vpUpcXT7VSzo5UcPxecttvbfW",
  "key5": "3fHc5LirCnKPCqEkJKWnU5w3zP9rA2z2FiiSt1fuGingx8dCPH6LdnSai1nW5mSd81dYBAwCZmK8hDDgUvgNXhTH",
  "key6": "3rzaGRtg8giV3ViAQBybp6Tjf2zxTVuPz3m64Qk5yBxa528ZiftkfoZnWp5QnMU3b3fexQZnkwupMkL6aK6ufdD4",
  "key7": "2MVW97SzjhqDj11dYjNTTo6GotMuR2iCZB2n4RiJAFdL2GACemqUAGzH9jUrwVfy4ywakaFrMneuUF1dSJrX3CaJ",
  "key8": "2ygaVwMa4BRZNTigA362vYqmMaQynERtSa6ZG4k8UsKRdWs5SKipoB3Mxk9YGaDfYPM5Zn4bs1rwKk7xqjEhciRQ",
  "key9": "43ocTFErZk25CstEGB3f4TB9jELz5wHLtWVPRrQdSg5vCBdeVAYDAtmrNGD4brvxR7aWeSUEnadcyYL9HpwQUTtT",
  "key10": "5L8s8g4mUpzNQ6msNz9cta2aJrrL4VqCeK4XVCLYwMMiDsvmm7Pr6dM4DEdzViNuDV7Bcz6RXjnFpwVpjn4GJqc2",
  "key11": "37hYwzcxhrTKcsvkoZuk1Tjm2URPYkcVtF8mqckk9urzVC7ainX4MpjJ6qoaQAH5karWaTZ86tkypfWgWHwBGG5v",
  "key12": "2EYntx9B2L2U1b29RspeQtYC7LqGqvZFx4abiyoaaonCaiqtNzf14yQAZ9NX7nSMQ7DRg1KWNePFAgnh3pg1g8bk",
  "key13": "FazRppnozMniW89V41PfCcHH9Rxu6C5pJ5q3hLmsVzmJSX2vqkdhkzXkFxPxaC7HtkJwzg1beP4C1c36ovqpM6M",
  "key14": "4kx5Hxzmnj94PXzQ2f9Pn8fdkw5Y4sacrAEbELtMQigg7f7M7tRG1opDQxfo8rao7rKB7gSsE5DmsMWfLUDN53eE",
  "key15": "xBscMbH9ai4ZrtMaCnKx8nFXzAHcdirYkzjd1spYrKmAVdJ4sNMU33rSCBQ8D84JietGfY9TusJZmgU8KpYimAj",
  "key16": "5GxV2RC8H4mQGxySQGzbq3BTQUG9m3Anvi2aRXFJJ3ha8kcHiiqx2prPtpZabH7jeN4SmXegc82bUREUXDzpabpf",
  "key17": "vwJ9HXHTjn9b1avxZUQPSHK7VTm1ZLTErXTafLZj1tfNkibQZyq1u9PFDNfJPxjCXUr736esc325XiExftsiJ1J",
  "key18": "2YQQiTmNrAwGVUgH9s2epe2jFPsa75vA9ViYtptxb9JMn96Kn9Zy4CQB4cC5B4MuBeGgH4CZCE3pVe1PcqkHnPEe",
  "key19": "DnvpJDWBrsZACaZg4LtN3dHs24M5K6jn99DZbi27YYQLPAqqxvN9BBQ8emYZhe4EkcNXdTJXKRvmHwPRj83nctX",
  "key20": "T3AMWBDyLCZ2n58mPTDtFFsjeq4Aa3ggh8iNFHwfWBMoKf1DFKi8q2pCqTfuR5Xn41aK7RiEcebHoeQgir2n4JD",
  "key21": "3epnaiHxv1LidoowD5WfWXPYk3VH33EVv2YxPVtqDVpJwxa3rQ3k3g41ZdDAgvpB6Pv2fSsrGaSdxmev3FkBAsDd",
  "key22": "2Nus5UMUcLZZxnArj5JL1tZVrPaBd4jt27xpNnuESHASQVPHWhbX9CHZ5ByDvm4mhsU7f8phtKkgCxtpkZfycpsC",
  "key23": "2o2tXLdQWnx8MqqqhbD4nYhzD4gTrNoo73XwMGfwedof3h8yNdJzUndYgEjPXBQpTcJNUMCTE3jkJCfb1bKp2FXk",
  "key24": "4JEbmMR5rszYhNybRT7k38NrXp1EoehfUUjaT37VPq2ydJGghTpCAbWB3TkNhSm1VHfpCMKhDtCyzp3PxfrMq33f",
  "key25": "28RKjw638G1yFFkgPqVYxTf6cCWLDCgXKVo1SoGSRar8vkh4jByG58yV1hNWzsdbBxBrRnhFNRjRaHSarDm1YyMX",
  "key26": "5uMADc1pCffVyYRHgqGsiUUH5JAD3cDLNoomt3vSeFpFfA4FqSZB7EhrPnoTPYkbxAjEswcmZyxU8Zk1aQDHYBn3",
  "key27": "4B4dCR8MbjR84tA4dr8G1pU5SyYfhzZ7Gb8sZ2vggMrBm2AWomhWcGDQ6Y8pjbGM9rKteUrJDPNW9Vv7PAseVBz6",
  "key28": "2ncATFkB1YwCt4EmC44MtMLUYmxsu2uy5qNvfvwYCUejeNWSMVQ65Qw7pqUEBLEJX3VgtSSz3LTd2G5efT5rRMJf"
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
