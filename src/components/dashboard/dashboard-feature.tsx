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
    "5etCAsjBJAzrtNxg4vkU6oMmQ8zDZn57KsFDF2KFq5V81HJNTZUbhrzJrjoeRKpoBjTLghR2K7EZ1B4XYBN8Ty7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mRn7x2B4psHH6kgUCi5gRfUNZHfypeHzngfHCif46ArrojPaR9uDhJDUsoiDk4HsgDrJBLC2MuCXHuEDZ5WR65P",
  "key1": "47SVHB9px9t4hnpCthhrayeFLaFmkBbKsy7mdURaJwnvXLVXAmEuWY5HNCuLBKafhMPohwVuk594zwpPnBCHea3W",
  "key2": "5XMBVRuqFHED1XEzxANGB2aJ2K7r3RxxwxMuqUyGapi41PnZQNSikq7zqaxTjDMmnDZtAa5DbDH3YVSyfHLqVGRA",
  "key3": "5KWHsTHfhskSSQBR9ZKu9dGSXS6i72aCiEWDT4A2TzXeTuB4GhEj88FPVR3PwvkycbN9imt7CYBpGD4JMEcLE9jw",
  "key4": "2Ue8jMy91dMfVo55tRfeHZWHXzyE6aPMBxZ3RjZ8JZN39x9KjFUTBYM1B7u28QNgkCoWpADBTK7NGXpJotS7v2PV",
  "key5": "31cbQmuAy9r18qagT3hKyW8LHhcb4Wn2BgWkQhP9syitk7F9pHRtmyhtqAv9NiPDCUhbT1eT25Mr5pfZXgGqzEnr",
  "key6": "4Bi8ULa77qPyFyKKd1pNb2jD9Lx3o7pmma8hfFmHtfKremgWeA44oXT1VLSvQK6rKri54jubYKiun9ez3H4qCGqL",
  "key7": "2jMRkv5LpgdgktTmvjaKPN7sMubU6x8hKkgzcu7uUSKHA9J6sqjPtHTTpCYipAmLsCJXnq6aGZfR37kuCTW2M51i",
  "key8": "3KWDMUmnh7s8DMZbH5FH2P6dWHoP7fKRStv3Y4r9tJECKXjFXJCKca5CxmDNaC39fDs96hxvKsF21kJQPE5tJqJj",
  "key9": "5eqkQvNRfSE9Dnbx8HSFyfxNsPVZ1m3nL3ZGqovuihg1jWMjWWABYp76ctGcPSDVN9xRSN4RXVGV8oTmW4Kq5XH9",
  "key10": "CJbPwzxfYJc7vAEC7TixBMRbdqgqeZh7Lu24ZkqsmW6wfNwHzLA6bCtZxY3PEZTrxkunuzi4xmN6Dz5F83PEG8c",
  "key11": "N9taHKywFsohjwjxZLxTmHxiQMuYLp1mt1nsJzeBKMbLG26XJh5sTz6tK1hreE6qYjSyPFStLB3RfDLUv7HXP79",
  "key12": "4S4pGYuY1q6fJXx4nLe8oNEe1tUBQ4RBZzuG9yUtSEsYxiV6KobH8DYZf6mFHnmJ7epsi9p3NwguBGfk2mZb47Qy",
  "key13": "56AEaU5inqKKKy7r1Ufc6mx1ADPMWHPoCvvPoqeyses5ArTgS7BgHC8fKRcucNBwSCAPjPf9Lbz7GrcEh6GTnxeC",
  "key14": "pb6bHDLnVyeUJ9mFozhoyhx7gTAd4aN8Q1NfMtrkRHRSYVAqHfPrsrdRdRsEFt7ugs9JFguGheRa152ZSQyUuQy",
  "key15": "Aee2z6cBbSQhVFxwb6sdpgEG3PJLiabFSiZgpZUnqbJFj5dmhjPk2axE4PgrQfgXYHHx9fpb62Ax5VoxZryg8Kc",
  "key16": "3SvvtkgszWHPKedBTYY86GsmWHXk64qVm2bFjmmT2cW67cvk6p4WfY8mM5YCpmZfc6EsfLYT1DWEkyVEvbmFCL4b",
  "key17": "3HBuxoF1xC2cL8CJop3JZxXdJNwVm5PZkcs3JUVXskjSRrS1njBjpHuhWkyuPikQkmfKggvGkk3sq46WaFdEo2HA",
  "key18": "4qaS5Mk2CvVXiWKuYWoJ8S4qKJMR3PTYDMSpeKywJiKvk1Uubhb8o4Rw4WGnB94yvvDAnp6yg1P5Pahw9r1Uve33",
  "key19": "4iNGoSSVXn4KJ3Fbp9wtHkh5dHpYY38ST9bKU2nSBW8hEXAbox4i26MKgdLbJnVKa3J7EzzLNxqipt3DEGpt1Gpw",
  "key20": "9ivcYewzg98QKWSUmuKvHy1xqx42bsjyQUBpBio6V5te3dAqSNDgYSH3vK4GppiAmKuUAYhJJFwaTHiAA7K9mhx",
  "key21": "4QMeNrGpV26tDjgv1A2yUQz7yBiXogfpQc5mQ6gQaZeEyZ6XCVvR4KGvteGUmNyVm5xywxRBbQAgxiq6VKucsviG",
  "key22": "4NhbTSjJi9GPzWas1zDcBWxUVZ6QnGiY5YQea121eMMxGk7kwY8nxyYxQw16x7v6NZMY1pNksfEp4k2QP5xU8nCU",
  "key23": "9EPqQez46pVBkPyCuDNGVXg4nSHPtAPGB1A3HmLaSR68hSVyPutmnXj6PxnmwkYFKiAjEMyMjqjnL3FFBur2LfE",
  "key24": "2YuQXNBYWCwjKYHrfXQ6tJXaj3bCtk3yA25hhKL8T2NaPaLcHpMJ2rNbnLKHaaHFAXeBUUeepyy3gM3cvPRUXUFg",
  "key25": "4nwVr9q5iYQsjKqFCofWjogsBVLaLaR8NEnxzycTCqFAH3bmZtsr1mKsx2xQnQvKeEBAfeFy21gJr5okPeZJuapK",
  "key26": "45Dn5dahRxYkjM2akAezAGySL3GDrpMP8D9D3zkxa1zY7zzupFrDxGvBRPohrmNJgGXum4mbVLnjSZSTo4m1xCym",
  "key27": "4iiAMJeWx5CwGo3b2x74PoA9ecHzptudGxNgBaskNEjNyXGa4JP7PG7DNpJg4oMMc7EqZ3JhcZJtUsQTntpLmoX",
  "key28": "3nhmeCssSZGoLrjc48rjtTWMtmDceU39dqvkPUm79U27xfx5EZDtLeSgyU1Q7ovBsW7PyCXUrCrwTTUpArGzfBDp",
  "key29": "2zRoA1gnw1qaik3qRF7KgFh1oVgNaGZqcPhBiv4rqm4c2gZG3XGoNnqjKFiFZ5PsziT7negVkZdVzFyLNW4n6vyD",
  "key30": "j4aNMgWx8BEqVTVsiwKdL3nYToZhjBYhnA5nuaMBKiHdPQuuGaKGzR5fYENbhrAZFuarBV3qXzSUcm8RvrvmaQD",
  "key31": "4QU9Jm4TpnS3yehmK9DZbFfsqmaj8YUSGaqPRLEQ5GVqk8ig4jzyGi2JpVYnP1Nvh3bwRYDyBHTTsbEt21rqeGVz",
  "key32": "hGadujAVs1FcsLdR8Q2uodT3uj6HxiWMf4CycvdMtgMhcArTG7Ph6t1D3suishkU6Qa7G1a52N8gzFH4sayk8x2",
  "key33": "2Wt9PqbQ5WbkrSEMc46RBeP5KYGfDTCJL1hLRhieq5eaL1tZGV8suYFdJQEjCjhEQyAVQ2skDPFDVR5A5TxDg2wv",
  "key34": "3MKxYpGfSLLoRgc45Rr5UcNxjLKtyR2913hWu21To5Eqx222E5JAEPU5UmLQFh3qrdnPN4wWQ4z6f9iA1axiR4an",
  "key35": "4V6xkkEkvy7NEFz6YmrtcWPNbKAnsj74b1oTLTwijesgRANWPVvQLv3ja3QD2hteuWL5Pnjz9FXRCnBBCEXTGRzs",
  "key36": "3mq7c1hKmoBfrjdvwNCbCZpkQmKjbDMBdLoiqxF33YqVMSKHr2Qhh3kuPG89oubjfF7zcFogXxn5pDqZnczMMPgH",
  "key37": "3cTEBeiJcADKRwYbFGbnq11rfXh9Yu4g2amAP9GsmEm7i8TFbJKFY9vQw45VrmW2Vxk6Rf2mwG7LxZcA23ohsDbx",
  "key38": "4fZz9wLF812tVtQdPgKjpqa5yXZVxPCrr8JqpbPYDbdU41h61P8yggwMXToCbDH1y7LV25j1VHQPbHbxZmB3u6Jf",
  "key39": "27fVyeXknDa2aStDuAR2JubFsGKTnadUV1A9o9Jy9vVkk7HzdFkdiX4fHtRbJbx7xSm1iEBL5z5jpVaVwhrjF8e4",
  "key40": "pA7r7qKaXQCddsHtbiLdhRrxdocH2xbra1zceoVpYYLy9GJzc2S3CTZFRfqZxd3qFmF5rYJubxMs3r5ptX8i7na",
  "key41": "2bDMpuq6bMibr1b3g7sLHquJ1wJR9cpuLS6G2DnuLvrcfhjhZa2VNnJism1aPu74qRYp71hMBrtFVYhKu2iaRx8m",
  "key42": "4tHYYmNuiybCCGkScrzZhfSC8JrH8b7PsjC6NYDFZgwwsvguqL1yJUUuQaW9i8uGNfnxUgiAuNKnXQH7r4skuzJs",
  "key43": "3GJSXUECUG1GZLppenwUjURESMprUJahB71aPo9Z1sFJNqsuAKzLpnx7fdhqYTxFxWtNa9Skg5WZeY15Tjz5zYKN"
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
