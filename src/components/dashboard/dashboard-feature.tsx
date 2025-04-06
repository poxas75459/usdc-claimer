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
    "R8jwqYABMVXSst7eRy7b4CwULspLYTtGPeJqXrgmfEiAoHvejeyR5SW9Wpnomat7rMYJgjFt81MsBLmeWJ95QwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nMQLxKMoByvGpGLMryZR76iUUxeTtTcejPUbcRaWaP1sW7aN8DQRFTVqwXWsTQ1ori6owDZGyydTHqnEsCrWztM",
  "key1": "4Eije39DMoYoCpdAbGuaoZ7ZunpuMFXow1FMSY74z6nn6D4j8W1D7vkydz23kFRweuQ2fLz5qLxF5osnmsen9rLH",
  "key2": "5xUdCjzsv1JiPY3x9S1pXqtjvrPWqLyDR883ANsEfUBf2pmU4sdRTcUJAwRJmWK2y2oSyKZL2vDitUDBrX3FA6ox",
  "key3": "Sh17XJuveucZ2uy4GTLqphtcE8H8xY2Mva596jKoJnRU288xef1gRH4dyjThuNh8bUmhU1ZkSDJ1VbPJBbYviTk",
  "key4": "4tHn3CB8Vf2KbVCV5z35dJ1SRga3a5H3cwq9FjVKeit93WLckJVLs86o9ScnfifmRBFe5ED255B5W6dbQr51TE8e",
  "key5": "MGV3Cvx7iLhK8Bkw1wHLpumZ7E1v7hympmRNhj1tKTuxVquM7HFcQbMygWzKb2opSfVLF6arCP6LjeNC9wnZoYY",
  "key6": "39nFiv82BhLxbrUDesfd8nYjRvUwGc45p38P9Fof9Gadgagacwr6sh6UyE2YBBDb396vekSVtiJdVddYqaHgRu8x",
  "key7": "5EBD5MbRL7XzSPaRsBxEmeFq5VmDWgG2skccNhYyUGa69aioEdVaryhPyAaU9NzHQocTEekfjZbFkzmenNmdm2ty",
  "key8": "62U8yqA7gpkVSKRa4p2gNZ7UBuoNe69vGBa9Kh35EyfaxAQfMcZUjgTXANcUGgw2VMNKqfLk2k7Z9ju7h3rzF24f",
  "key9": "4fgZG2zmBR3wFL4Lm1DZFXUtim723QENKSbFbit2adh6XGZcNoaeAGNnKPgoF5w4TZeesAqSa7nFH51ciNC1Sti",
  "key10": "sXd3LWW79b1k4L3LvGAtGuquKBTyCVjUXiYHAdXwUoaEYNV5GyK7DicVMcZ1kYCAx5bsB5xw8cLAkQvb7AG8Pcv",
  "key11": "3yajCYr8md1M2iSpmiCnGJezXzQJqE8VxmE1YSwYKai6SZNZQ28gArMuSacorUQbgZbV1ry8DkpBeEuewmVSTPaR",
  "key12": "imobu5RyvVBpzYPggg8XNw3Kf6Sz2r3HhHiBinfgD48hPKucP8xKEBvqRjH5irJU6eMRGWieWcT1MbRjSCW3K11",
  "key13": "tUeciHzXz7h5bF4HQVtjbZm3mDZxtHn2a1GxFhR4MbNNEvoG5RZLRNYW2NWSKVmzu7NiEhrT5vbDMS36RcAMKcf",
  "key14": "vNTQ5tsTPnaHDN7qwZecmwDFUhunB17UWa81QvPpbc3DBA2hvdGEfmzBBjALVYhz9892hVhXFCTgpaUx2oRhEK4",
  "key15": "5UrU6TCxf2z6pRJvecD5SKH6TExZqq1WJPiDHPMXPHUQPyodS9KoaoLHR2eV3vdwL5iRuYx5gAZWk83GSnbhJroT",
  "key16": "2EVTnGUCCxJhAoqVModjRHf4jSBmehkJGzrwYEHVNRyLM7j88tkh4LdZ4GbNkNkTCgZimM27jziZCTih7S1WG6Mc",
  "key17": "4jdAJMfqtgWSpUzM2bHxS8d9XUSkDdZJyBmDL6TZnuX1a2cHjFkb5MhqXYcMakXaCiEF8adHJZZitR1M1UEUXXdC",
  "key18": "4GrJ4MfCJyJBK2JYNPbiEVcBWusqCbyCZitBga9zKGzwRrKLm5uDTUyV6J8bXwqjEDrxqKbkFiMB8GY3ahWnoY1F",
  "key19": "2va5ptFPdeQYk9uQfcrW6mg48hvhWFzBvfeqDx4yz8dQoXrqmwvTLGuYs8oHpoEQJco26VmU7j83xX43Y6vdcdWv",
  "key20": "26AjqPV2oJ34WpcqsMoFjPzMiFKX257hGEJG2wCLtFp3qjFNgCCENAUeiT4iDJvQw6m96fuy4eiZSbmbBFuP95Sp",
  "key21": "4in6HjRow1wBS3aVcsRBU8XmT8W1FysjNrHoXETngary3fhBjvUMQMDjhFUQPwU8KraZpD77DSSBMWPMo9rcRG58",
  "key22": "3TeS8GCMHktyV75jSLcnpzbnvaouniZnBMEaij9eKhRJ1S8a68nqQJD2EPiGmVgPDqq9Wh2M3ZcLjGcMis6M7eXf",
  "key23": "2hZ6LpHcKP7rwdXi64TwjGiUVDBeoQsY9foircfZEm7X59y5fUTwCL9A4sqFHR3kgwucC2EPTR41yR4UZWVSexhu",
  "key24": "ciJgUwhryXExP2Bz5vs2LDWQ19TDB1bunuFkpCYQRDPwyG8iu94fVpLSmPkwcdzUQ5N1o3V9cKT57uziCqvXgVX",
  "key25": "3rJg17BwafrcSc6zWmKso1G6g9rYW3k1EoHsu825BANNP7G3D6ztv4V2rNnG95znbhfMoCpiMqs9wjcdEVjdBScE",
  "key26": "LurZJXJSY4JbzNeasixD2VhAWxp4YmP3zzKLdPsD8YoDn2CVGN1Npy7W2CuibHnUYyZWmeYXfVEcCPLsyZNLoxR",
  "key27": "mBLxQVgdEpxXXnPn3o9eRJBTkSivqLZEuW2T264HzDfuKNTjs8rrWFMiEbBNHrgPB7ugNnCxycw8juETaiyd5jU",
  "key28": "5wThZcdvYAeupapQxAy3ux9nPUVzJ8TmHTCNCnBTwLN9u8dCQMuw4X1e5V3xauFEw69Z1Gpc4J5VRSwgSdJHnFfL",
  "key29": "5yh6BSFRfRca1ZYni2nTnxZoqrq9oXmYmKYTxta7QwfezD9FFLNDNYe9mSeUJ1wHXf1AgC9UNy3NuADSULJ3TSj9",
  "key30": "5cZ6PQcAVvX4L4b4WGshA1ZKWxBHJKizXwvcQiD952hCynLkbKLpBpS6uL8WEToQYxYu8RHaYewLrNUXGgJBpL1",
  "key31": "uNVu9ytDFJqQkdkyomj46yxUVw5BcRrxeB3o99puyS3wFuUaGz9ewDNLXerS9xNviBkkPncmfNMk1JnumvotWVV",
  "key32": "2QbxS7V4NgA4hrpWsv3ZLHQyJbNGSJLzjoVgnnZLoLZFNBj9CXGE3UAJk77vyiSbnQRVtRYEMJKVwhz7vdnmgVYr",
  "key33": "3m5Nh52tKUofV31y28SBgyDF5xLnJgnV6oBDYTHarveGCLXfuk57LNGr5umbByz1i9ARh1YzXWbzaEtzUYVgJCFk",
  "key34": "58poSRv6XPvHQ1HDdoS4DybN4go573k39KapJSSUv6xkvjKXT1mXHmxohqYazEg34WnA3kcksQV8zcuukbXqam5s"
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
