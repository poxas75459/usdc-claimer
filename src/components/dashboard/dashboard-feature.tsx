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
    "LdfAA1C6v5Bc8ZtVCV8S15KMaNojsgnjidp7j43DHViHfcFnfyTeEKBQmHNHtUcAAMG7nx4TnwD14k7FX5ktGfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iZd4FiLZ4Ndfsi6FuiEFXChcJrNxJG6bskeH4CCvdptGFy8rkBX8v2tCey6SdMWE7xGM18HEqVvnWK49d1MvsB3",
  "key1": "VKgih6MENRJ9VWnYBLzRG5yUrjciCxGHMJVUrYwnpsFtUozYMFt9x5EZbxKrp6v1zdYvN2rDn1Jk6vKhNC8aRHJ",
  "key2": "4AfbahgbvYZNStcTYAW8U4h1ivVm2DR9SNabQ5bXFSQ1aDzQ9RwbKqTZ9xtxgaSCBatJDBEtrTJdq5CKSo6iLJdE",
  "key3": "HgRHDDZHxvi1wFW3SnAyK6QdFvqeGJpF4iD9rqQDUqW14JRcdohxJGJrN2xds2daGEcszDNrSDgiiVsonV8uba8",
  "key4": "5TJsRsXJzhajYwydzKMK7BpFcs93JNZH3CC5WwRz7eukXBDCBrQFjxRYBGce1SYxbx7ZZV4jNFzYTM8QJsbaiSxc",
  "key5": "2HygbokWiYKh4BM9umqfttazGDfMYRretP3o5SGUMsEbTWvNicF7VKptkDiYt3HApT3EJZYX3fHkNUg4TR2k7KwC",
  "key6": "xLJf2UdmvvvLDqw8CKC2DzbEmvYFgjZvyGfKaLkMQK3eUPqVckqKkgnUYviMEvpMCP734pH6Uf7fZkxLq4R5jDq",
  "key7": "2JfzihwpbJr1NmNymaQic4LNAxqm7fBV3kwDr4conXqwRcMMVv9BqQjBJEsaVDxsDmzCEHaDoKQd1et373AdU37v",
  "key8": "42kSc3f21QEWYjAAWU2kBPmNb1B9wCXarsk17aSAhvYMkvionohjQ3i6JZSZj2Y4NZaYehwnPynPpeXE7hfCisQ4",
  "key9": "2d3rcpa4AGB29UqgN8knYUq2NEoR2dTJuteghanLpgryam449K46hKgNs37WGz1pViKa8FuutLriFdgkMtdKsZD2",
  "key10": "5cYadtJV2qE7zZirnVLKXc4X4NuxmvF6PVGz64ZrtqVGCLN7qpkKK2fJQSLCPKnUG1cVzbWWFVmhx3dSg95ykK5S",
  "key11": "2pKYbCSH5J4zkP6WgiQ3jLeCcPG4zeVRMdBHBwGzpscnJPaDjtKGsrKFPi7qE1gaXVedGFnXkKS6SSCVhhu6pQgE",
  "key12": "289rBakwJU2Mt6FtzvHN7o2X7YjhcW4ZYVKa2cBtuqAbq8CxFXqkG9h1Do5dsnyVYqYXhVa2Wo6JJ4D9PBfLTW5s",
  "key13": "5Jsree748NpZV2g8FX3ZnMKn1H2XLPyu556pTjjwjeh8W6EZuNoCxCMPXRSvRAmp4tLTjKj9uJBFoSKa3R7mXmBx",
  "key14": "4oJeFYhxaWRCJDoU2LHkr6G4khDykoY41s8DFMfomRtAqeCvuvpj9yDHMPvq6hAexWwSAhSmZRm5pjmMdjadAeML",
  "key15": "3DJVXLNXQ7DFCszPhbRejSGmNg9GT8TmyjHEkKxgAHnzgBZjmGHtXHLXiQ3979VTXAKTrb6HrUCPvUD1JUDz968H",
  "key16": "3y1BhzNMLccTe4S8bT4CWSKeYkv5gRhFBeGwLoQ9LSFYQXfcmM1f1V2Y7PhhRV9ii1TZdv9gzNnCYZXGPcFguToD",
  "key17": "3j76wSmkr87j1GkMrrNYKVQ5ZMe3JEk7zwDspHwQDhLxM5CEoA2DKjNA9LkZyFs4GkeY9xyvMDSdkDegwB64hv6X",
  "key18": "2utQKYg7oGEQYn3qhqhtjr9J5akRbjYz1DbY51LEw3khQaX2xvxQ8mropbYS1TMWgBLhdxQTxeo6JE8TZuvin9UH",
  "key19": "24dzyjX1GPXQ7ertRnZDWZ83iLJhtg49us5WC5Ho56fM9sJUpCSjNvKWBaXsLNNCuATP4TCJTsd4R9v5HNPjnoRq",
  "key20": "nHoqwELjgttXmfWJ3ANMFZacnYxt394jiPiWK5i39LecHJfdawsjkDewqwzMPaB2Xj7G7h7WLNc25JCUrR8ZuQz",
  "key21": "4ywbkwARXZFenHtu1psrfYQUR2Nb72tvq1kjHUjJhB1Tf2mBfDMe6grPpSnh1R2QGvz5R2YKHZrw5j6bNQuXKmp3",
  "key22": "4QxJGti6xRNz2rkLiY2QZCVpuNFXizxgp9gTMA7iEuz22J6RbRhzxzVNdHMmh1kSebZYicA4Eo3HqozCPoKUqnBX",
  "key23": "FMyZtQjJ7hNoELDoh6n7ZwgjtkWy41nq3wJM2XyGxvJKrJT43HibLGYuJ36jkFDuLUVBASTUqUXgnuoMFEVQfgd",
  "key24": "2oKQnQ93GkGikonfr9CY9m6NFf4GenuezpTfVbJhCR4BC8nmhn9xYUHHZtnRhTuhriyYpcZrHVTHzs64m65HC1ty",
  "key25": "4fP8S9RS6XtneeBv54LcmAD687w84JcyYbsitko9RSyif1gjFEbNVYhr9tMVjiXTBX48JdvW3Sz9gRZedZKf1pNA",
  "key26": "2X4q1n4Y1nHqyP8ucGqprYZL5JfF4RUP41YK5M2zxSXP2BeRPmZXb6upT5o5ojee1gDUaAYe1VQdoiPaLHWMnghD",
  "key27": "37tEewJzXZPUhRDsZpN3c8NRDLXdpj2qFPEqs8UQMqxwd8Ek3a126scufHDf3yojZgXVV5Vxbu5mm9NMwoShoWcv",
  "key28": "4M4fV91WxMKcQFWDJKjGTiwaYwVDyBnvCAjaAUvi5gp6LAwGfmukX3ULc1zew5t4UNZ5qPo3PqGfgDdBCHP1uKcF",
  "key29": "5o4g9QbXy6ryfbbHrZSDFGVn97STSHVFfr2vjHHd5rC75GB5yMw5J37ZMYLuZpaJiet4YeutvRZeoGPHoWnff6Mp",
  "key30": "EdygvrTjFSTdzcFVk1Yd2ex1sAcY2oimgaeNbPMJD2JnuEMNCabRwixnC4LGzgg2JsxmjQTT77gKJDLLpHNqsUk",
  "key31": "UTsiUCTSUiW9TrSmoRkDUgE3q25rNqpWDzyDMwNdS16Y9UcZedc2geQmDCWN4qi8mjZSSSeD3QdPzDwjsF1mKHs",
  "key32": "WxvLptK2UsJWngfQK2VJNBcbrFYPV2fiTbruwz4g9VdTABECfywnEorRZ6jqsVSdVfx2bRE1ktfAgM2TWVDGTVA",
  "key33": "2Rw3GMQNRopwsN8h9dV5YRoxDU2agj4w1SVHmHparaoGU3xQMyzKG2hSB9teB21HgjhVN4Grkx2iRutFHVPVUrx8",
  "key34": "5kgtZ1CNNbUj92RWwKo463Rep4sXx6gyU1XUGq3bq3P9U2YKhx6mNGaqcKQr38uAEx3THWZPkWE1rDkDuWoAGESY",
  "key35": "k2gMUw4xPZf1knbrqBfpuAtYT7RmNhcihhvkJh4p2Wg99U36HJmHwNDTj6Xygug3VsN4EsmmuZPnjf6EjP4qcdf",
  "key36": "2cAyLd4gSVisexzwjCeEftZVJJSwNYRw2UMCUSCpcKyoHrmkiSC7NRf2Fr9z4TwyRUrqwzsEbyy7Dn5fgvM3jLnc"
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
