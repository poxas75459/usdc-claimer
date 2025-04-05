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
    "2SqDEMcMybuyAvmdHDU4grL6Gvm4oHtdGtxqDWh3Lp91pYwf6iyJpunQw8D7mfSjVvhw37sxcheGWXmXXxSmP52e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26qFWsevaLxwvM21hQ57inriavkjahytuUFgPdtfEcJiiHJR4XUR5etzE595GiTeQKYEW9SRBZzMMCAphJgpjgdh",
  "key1": "34Fd4ZhcUn7mdcwM8PHLFb2Z9tZtSAw3FEgXXoQzJhKCCKswPHkhmfg155kGoJnAvvPiKKfBkZLhPJuqVdV64WJu",
  "key2": "5Bbqzq1kLpXcjmmEon6ydnvUZtNnqm5kJvLtzhGxrtR7hhjuZmMrfD8bvM1vARgjXFMNCKswHgLzpJoEUEf7Pdmh",
  "key3": "5RrPbyqZsdW4qUXK5LLRdkp7voezfLird2ZoHkZfKPoRFYBZ6J2wPdwbpV9c4uN51VQoLx8hK2atSreMuCQms2vc",
  "key4": "3a5WTrAo13UxadnPjnAHzA8aBi6cKNvMHJKMzEHUqTvHKDqrto71rv2UgCTGWTHL1AeWJ34hnc1Xhy8HMvCAG82Z",
  "key5": "4jwuLDuRYHth3SRi63viHHaAEVwnPfarqCU1Vb3Qry5VBZWYWZuvaQmK2VB6Cz29CXeP4JDAuawoA9CWELJDgoiw",
  "key6": "3asgdCCdcZijNc9Z75ZWegHbePDhdcgRybUgPuXiLoR7gqn5UQXPhQgSoXsMzNCjsBejQYdn9stjfCeEub9QXpaB",
  "key7": "8bN6WyEKH13n12Cn4WWuXDNBX6T4xhGzNnH4fkT12cVMsYykGFPaSfk2qyzk2wmaRtd7xfs8acaiQ4mjJihkk6X",
  "key8": "61u2DHxiGmhcJMGpgb3QkRDNAFHU6aBpkWAs4pBKWBikXdm6onskkwX7Yn6KMkWQKc5aWKDjAzEupBNb2GD13Pjd",
  "key9": "4VYurbtr44ngmKMu9jXvYGF8kiLaPZYp9La4dxSCR3ggb2KwntLDczkKFXc5Q4ue2N5tm6ckqfnirojTP8mKakSZ",
  "key10": "3HBKuHaXBUf1SQgZBsT3MmmC3R21ZhDrZepn3QusN6FHnHsr2SAMbqFUVF9kcTMJiRv2kR1kzspSd1zV49iY2bvv",
  "key11": "3mvChndhtJZnuf1ziwBNdNHhZ5NHtBeUw3hu4M98ciCWPRVRJyUttV3JhrEevUEy4yEeKFZ81VtMR7M9iURvwvBm",
  "key12": "5r9SSSUY5VwyPRh3Wi7anULLiKrx4dJiedox217ySFKYQFFVkXYStS8ZHQ1yK6JaczsRf2d6368rvNwJtVCoH5c",
  "key13": "qLQ6C5z3gnpG9b9Cn8MqXyx4wR46Jc2qLAcmb4zpAxa5hnsvQwVvChPYWiLvLkhkaDqjqoThiLAsQJeMbAg48Do",
  "key14": "4TKs8YXAFdcNumfNfWLqKEuzKXMQFy7nGa8FM7wbfqFb4Cqg3GqKEKLe3yceXRrGaC4GHVzobKYFiBkdHfa7bnRf",
  "key15": "B6kUrxjyK9choz6W7NGdmqZjdFx9sSTAspuWFjUPNCT98YNr3mexzJsPgWKRGKjb1ceABgwbVNgdG4sAwvmC4Dj",
  "key16": "2ZJNC9vxDkyhzbf8ps8oNhZLzLLW7PfGoGrNuF9ek3QKa8V3ajVLB6rUu5VFBLbx2GLDvydCM89oZ6tcJ4SQHVkb",
  "key17": "5m889g1AmJrgaRyoeqUQza32cfLsmek56BQoHDo11hBLYW63nWqGa1kdaUzvwJt47wW7FPNrXSnwGssQGpfYLZAn",
  "key18": "4NC1Uxz5g6eMuVD4dByN2mtJqhbwtpXSamYNFVXCoMHkWgsnMgqECZ2P6qmh1jkpm498QLiGc93zeVmJbLHpXna5",
  "key19": "3Y5bD9JuzHSY3124io3iWfav8os8MbYHwRvJiAseiGfVuL8JfCS9trqyniR1Z74FXMFpfmy19QG4rFFCSghczk1F",
  "key20": "2bq13X4Qii34rHKdEGHoGV3dGeX4K8Mi22L2sdV36bBEupPMc5vvj1VoyBaBJ6a6XjqamAxeTenN61CC1fxevFvK",
  "key21": "2ExVjiwV7gLa5N5D5Vj5ZZgQi2TZZ4J9KtzdQFZPJRJuLcnsrq98psHTWZtDcncE1ByWWVbKy74RuX7TEaGWmsQ3",
  "key22": "RA36cKB6kNQfs7KKBqezbRF5C4PQfX24E1SbaKGPdUeVBWTER1mqVNkPiZKqgUim3qoFqKM2XNo4xg2uA4PmcB4",
  "key23": "5TuYM5HvCB3oVjPHHWjTFya1JSpH3Ckxbkm4mAFALZjdCtRFvrE2ZhxmtXoCZyhkQAnTaZLG8uCvNbBZhf377SGX",
  "key24": "2E6mqkh69wEFbY8rMGPrjoQtbXJpmxTib5q6mttFqv2iXf43rhDekj6RNYUCWrv4b4s6R1Tm5BboMF5uL9Pzr3Ac",
  "key25": "5eNadUDtShha2KeBS87mzeLf6xCaSkUVHF3ojmTP9a3gKNng425YpQVWoe8dyofgbxJt6VZrj7KDdrJ1kD3S5rMG",
  "key26": "2iJZ1ST1y4eVpC2tzxsQTRKbFDT9LgBcrJbZLZjZf7PRhrxZvLLt86BXA7w7qGC9enpXqDYHRoWNDtis436VVc6V",
  "key27": "v3e5jL68atSKWQTBr8tErcFSqMCh3akQkWRkRPCmx3u58XgKbbiF6WkjQam4b9gWoAkgVfdwJVZhpZxqBpYuMgC",
  "key28": "4fthH8zW5gurzyR7NjbUUkGYze4DMdP5n2bQcyoG7sxK65GaviCN1Y8okUd999dF123Hg7mDPRXTuyexAyLqPX2k",
  "key29": "5zaXDXHfDFQaucP8FY618ipw9fy51Hx234Ptqymoq4SbgBWoP4syQQJRxB8f7hAqHBmnL1yqwcTbGUuL2VJUwQeq",
  "key30": "2ScS3SAeDtRKhF6jRLo4BaCWLb1jj54xuAfvbx2KAcWR19di2LpiHY5kEnXf6CRskX8z43M52VKXnKFtrfy7ZgLq"
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
