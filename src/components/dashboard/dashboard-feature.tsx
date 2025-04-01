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
    "sdybeEKMeTcNswK2RK1Jxa5C78tQ3RJq5dXwF5FCDgmc8Gnr5V7sh1E6LkFtGHch2jqrofB8LfHH5zKuF4HbdN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JtgiBT7Rm7yMnbZdthZ1jcT5VMHF3RoSWM59CphRztDZMoQEEuCk9jgTERDLm1TkMnAGAXJxYjiSkGbrHhac9wp",
  "key1": "2PQdpf3djTbF5MtZNpnz9jvkabfaQixYLXhf1unRXAkU5J5cMqHkpbTrU68m6edRw4ShgqPkfkFHqeUyDRTnDFjP",
  "key2": "3ykdevk7652sjnM4nzjS7npCDZuKRCPyngLFTm4s13RUw3GcdzXFMA9scWZA16DwkhbWEdSjBwi9kerkvwAGqLyB",
  "key3": "2E9kHDkdQREhAeFjqgoysMfKWdeEqcdkyYSgaqLsjwN651WKYaFMPWwdcSfnqjj7y8aZekvGRDnAREv9Ji7unB5n",
  "key4": "3hetwyY1CZCqQNDbgSrjg9178mJzRs4RSS1Ga7GE7i8ZmPpmDqHMUWaMaUEsssG9qa632wTaQVbyUVNyPvKekzCh",
  "key5": "5uQb2HFDWLLDKGZn2hWGDu4RvVPnaVRYi12AUCy9LGzFRidHGxsXwSffWYSdogNFuggcDTywom47sbs5gyWH3rLU",
  "key6": "2UsrV6vQoo1W3UNE7uskxnNDRKqvCVPxH1j7kLbMsb6w67cZvPaBBHuUno2a95DSC582p6Hb8rhvMxovizyWEQZB",
  "key7": "4Y3Ga6wojymjvtbQQPnKrnCG9HrrP5qZGTBXxqe6y1jXiD26eKYrnxCFYeh6T4RcJ6ZkSiER9Nat6j8MhHMaVXbc",
  "key8": "48reGdaeqJK1ovKq9sBpHMtr64EvVLfa9ETrab5iNFnbFaGGH6KKSmyUpWeQcmgCQ6e3khVEvBqw89NKWyKC7GQ2",
  "key9": "4r19r9dhi7iCKTdNxTd78uq6YFA91MTZQDSvXBRhFFYWp2s9bqFqQVZRLjgKhYS3ttmQ7CqC8wJfuSu2odxtMSpd",
  "key10": "5wq5JN8LXWKhSPJLS5347JcKuoGm9NYNv41Ct3ruTkLPvxJKRPUzVrSYnAM8qxrQ78PMBAFp8WpPHHJfxhGprX85",
  "key11": "3hQ9eDHo5cZ2r6WhDLcr6iipqVneexH678BwrJgjdk2Vhw2H8vugPnCfeTYKvHRdkgvuWWnKwFA4ZvRL2PQBp4vR",
  "key12": "3tWELhJSLhe336JsiXTJdxE6ZCG6VMXch4nEnDPs9pPdFhURKfzBGjmwAWK3fJzkWb5EfFGwBmvx3FykFQggj9r1",
  "key13": "4tbbFNrVFoxrXiFthHsDdt2szEgXyr82eWyk5PYuCpTL1zPVR74nhr7Ruu7LHCXGXrsJdmrXTKv2Q1DBVG2LBHu7",
  "key14": "faousDS2f92pfvBmMTPBgvf5UcCrNQEYMTgjivcf763bHhVwMF1z1Ma2XmDbB7MohM13VS32cassAkmofBTN8Zd",
  "key15": "2RZ9grUA48wkeDsAgN9J4fiuTqpc676Nuen6K4cURfQjCthwTGXgTnpAGYdSb9gNqysAtSJ9vnMfvRcFSuEL1Dhw",
  "key16": "5AhoJ6n3UJ8qDoqXySmURk5D3pPjvnvce4GEiCvh12TVExPABhAhkkTG7Xu38EiEgmwVFy4HeAuqpUeVFyQJR9V5",
  "key17": "3eVcMAas3bpfGZ8bNcxb9adhaL7vbUquv3uoDJyJ1cvugNp4kvdTkkgUhLEop1wZs6XB9StVdvWsAfjUEZSceeHP",
  "key18": "2rq3fhNbY4TYggj4xJNz91R9fxJa7pwRfyWecMCRs5uizLDSQy5joCkUwj4rwKLNDXTe4KuRNvtqbkqhbJ4ppvAJ",
  "key19": "5ZEStbBeNuNhj1CsWfW7sLsDdUnCB9vfB9h5zKZyabAE2AiUyjGsZNurMw4Y8cWEMFAVuSartEycvnGhHrGnUGJG",
  "key20": "1XCnnWs4bnncHCtNAeQX7fTeBeGwci2E6rJ5JqK7DvYMud7mHPjdFHQ4GBK7Dnh3cNVUJLEy1s6dY1we5pLa6TK",
  "key21": "26srNif3NgtCiqEDuU5qUZjEtzryikg6Z2JyjgRFGVfRmmTYV7UtmDtkddX77L3JN7cuTk2b8HqLbxUmnxYyLQMq",
  "key22": "44YyApikz8PQwyz9opFPUQAnMYoHDKgnHRv6MrksoHmV6ibsGJQkHeJKorwcjfUTto99JWqLZ5igEX7Xnv7y2Agy",
  "key23": "4mKx1mNbHrXsh3xqwZBR65ZZYiEmmUQuJKj3hYRauXF3ijRWo4J7irNVvfy9KdEN4FMhHkLzMJuB6J1HxDru3Bau",
  "key24": "4b5JaFjrq9aXTug7x5c2vne9PTTtGjo4d7gB7Cv4uaugJfVEmhmodydoi5oC7gARiTm7SkGExhKvhnftYnVfZ8G6",
  "key25": "4su3pFiLmkzGAgR35FJTwaCsVkGSy3hHxgHXACMwtSbTbekQ8ar7q9cEMyBuvjm7xmDLUvLCs6KKju7EAnogJzwz",
  "key26": "4L2XPCMtarFs18swh6mJ2gcge9FGzTk6EpPcHn5Z1TUR8powEysBVD2xUgoqkwq2RHHNjjVFt9KEsfpmtt4onvgJ",
  "key27": "RpgxJXUvgj6v3bT5aVsBqfATWzTu6gB5CQCzc5uPDwoECQR3jNoKWyaPpxAHsENUiW7ZtxxxkSwPQ9RjkDAA7Bb",
  "key28": "LxaiPCZsEsFN3H5SZwKJniYdHHFF5rrJuwuXi5ZgdEokETy25uVCukEir2X8NMyQUpzD1zXbKiDqLxM48j5HB9a",
  "key29": "6YqBLmAr5oWKH1brbG4p2qorZ6M92YanHpt2Ztoq9y9PvmPaodfvz19F1WaWTvHMjsMUzBeiqqYXcBYM7mhvpV3",
  "key30": "2dKGeaPbwq4nMadWSwKXoCNi5ZcHwFv6KXxfbnG9X4bZE4PHoXzZVta7Cr3gj29X6WuEvSfu76uW9DLzFMU2whkd",
  "key31": "5pmBoHWf7Q3Y6xxR4N7fpyA7jkvZHqVgoDuUDVtsdsFUMQhEqLwg1sGNaNaA1iYCXhvyv4fJTxLH8YwgLeBTvYr3",
  "key32": "Joj9nxJuEAt46oUpn3oEMPyk54X4JGhjfn1VXonskVmHaJEzuFbVsfngk68AyauJvfvjm3k4j2HBnoH5NCEWBXz",
  "key33": "5r76F7rLK5yWU1vivTfppXj4Y4pd1QuPdv8VzbdF27FDZkKkANDQGDJhCSKKjTL62brNg7Lp5gBzxkRF1UGpCxcz",
  "key34": "3ceHhNU9tmB2FgJsdJgFt1DKp7AmGzZedrZDPDyY3tEZ8SwR65GfNPLKQ92vghnzZtghVyChvAuegPhdCKuZLWij"
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
