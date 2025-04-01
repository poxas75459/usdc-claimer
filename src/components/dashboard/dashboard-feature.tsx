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
    "4YhvXe6FhBvyJjtJ2eQjpZKPo5ejn9W3CxnZ7WBctiBU4G67pjWMXXXgy6qNbmmYkoPm9fmFWgQMZePC88Y8QX5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fjioLbsZmQR7yZ58N5xUqNYRg3YwyTWffxzNsqQfUjD7TC1qkZmocS9R55o7VWLPUmNfFgeF5exPpJan5YbcU3e",
  "key1": "47vS2uTUYCrTGTb2pELnrbuZganbvr4D4kzFwhesYredrg9YEggweQNqAn2eEjUgTPE12C8yJKqxxN6PiQ9DhQoa",
  "key2": "5R24bm9PEbZB9DJHZMW1XSpumXP4oWZmhjvuqRB63hh1TSWk637etg2tHSjgWZcSbwJbuMga2HbjBCPZCqiXGzKm",
  "key3": "4Wvi3TZprRxgy599hx8pFF6Wsn2iY91h3GwQCM4M3PSwEXmeq6nnDDeKxgDaYn2g7sBFV3RwCaonKS7NgA1gphH6",
  "key4": "5rrqfxjXzKEzVZqK5YjWLN29YJQogkMSfEdRJTP7Tw9NnufACu4NPzD3wXsecLvCewQQDYXSLeXVFWReVp2yYXQg",
  "key5": "2goxd2wwpW9PDJAXQCr7HaGS31qkYaUfqzKScSXY4c4ouUAZwfuSD14BEXhyXUj1Poa4AYGp6dEDSWYWhpdt83Dq",
  "key6": "2tz1HSRe6USBwfMrkxHgQNy7PYUh57U3AeYcbV8aAvfSzSN5hDjrmK9UDem2CkZSVj5avaboqbd8ivJdbRSzVwrG",
  "key7": "3WiAvW5f6Vk4Do2iFAi5628DJAu9QqdXvd24eDBe4PKeBV2pBL4S7tJz5H4GTTBokR3VoBWnDHZ78ajvkZS9kapR",
  "key8": "261iqneVmYc1ZG2pysT7ShE4z75RQNVua3yLQ8fS8f9gwp4s4PFFAyduCcxnGtBSoKc8imLr4jhq5cVpmwUrz6fS",
  "key9": "4CL7dKm5K3CT4iRo8sokS46ERpiYsYqWjmX71KhGvrNQ9g9K7gtix9yoyPhzBrfD9fwWcyuRGJqKpHk6TEGQCtHF",
  "key10": "2t3EBPiNqHZEW6JSqqhe6bExpeCUFJdayw2a91Vm4PwhKh6cLadLgNVM93XVfMcSmUAAACAYRNXDeTwCmG9tkYvv",
  "key11": "5twH8ZhkY2nxRSZCELxukXHutHjVXyR8cA2VMWXTVHhdka1LvUcdvzK6LYKPBKBNFPK5ZX58L62hikV73J3Tnog3",
  "key12": "67WhwF3jUBFqbH76rrt7Mw8hSpZfYbtjQZxGEpVx2HvcJjk3aD4UzHyUuM1JExbHQ1wFFTB6tJN7rCiqPzKWD3xr",
  "key13": "2FZ8U4V1gE7RKiQyNwaqMw4B9ffnPtUFhzjdVpNDjQ3zzqRFgZLoQzFJUZPBmovfrTi1iXEvFyApxMtnP2sgna4j",
  "key14": "346jXZQubPsMvGaqk3HxEGYYVmHW2MGdanoQGXxj4ZsN9xxKDwdkxa8vhZDLCWpWBSFydWqBQ8MTUNPJ4NuzLy8r",
  "key15": "DRxvgnQ4J9XejMfwongr1tuGCRPdHjsc7fiyJwUwAS9TMCqFEPwKtBhTNU1RsJPD34FU54QyBtkSjKkJ6tvKfSB",
  "key16": "5mvNA5fyPZLPHe8FHXixt87wWZ8pvKs1XouapP4JyGUkXAZMYLGDbQb8NdgaKf8Umt7VYvButDxALqwQAmBrdyXz",
  "key17": "2w7UQVJebMRSsxn6YEGHGjN6ChY2QK45NHMS5RAZQ63LEdNmXrirRzEMFtESc274ocQPDYXqyBEeP3n75kiMSPhF",
  "key18": "4aJjuCsmUeq2aBF5RHCp2YeAYxVqG2VBNYqHKk6TgsahrXbf4bLYkY3VqsHyKhzCtA6npYeMGKWpAZzUTTh4Zh7E",
  "key19": "Tzk4MJ5wsrg77xuGRw1Eu31n1E8ttWfxQFABALJCznGEkWSdGCFeUE1ZiroGHLgbNVYJrXSEKAir4U5oVXjwWnj",
  "key20": "4Tv5jiUj79Hr8NRmjHU4F32b8CGqbM8dgpV88gUHo4KKs8XoNgAovTpQezMGnKirR9USs4E1mfxxTKBYwADUj7F1",
  "key21": "4wTWwY5LgJtG4QLuF3vn7bRhHqQZwvgSTRLm1vc6tdarYJmBsja4BJRr34HhdZUoqmdYnW2SGi6QnioAJnhMBSJ3",
  "key22": "3htQ8G4GpQMxe5D7H8HdDeyNy1Poquj1iChqJjS53CRGNvuRz8KoRqB3pCPC2AwhMnZuQax5F2PyAZZiKWZd2CrZ",
  "key23": "2sL7fMecMTWycAN3FTJQKiLT6D8LJE2WGUGHBb428Nsb6XyF3Kwm4adv8BwoEtFnM65tTV6A5aouraVX9vFenpM5",
  "key24": "5kzKTkRcu7ygZ2TGDx8yji6KDuTWNXhHx9cFyMXdQ6A4yoXmMsALxML6hDELLJeJAkvSUoBQJvbE1Aq41ihHHEHA",
  "key25": "57ZwSgVR8fzdVHpCNmfs3QNsUY4NckrDRFisfQ56972fADjukEuYnc2PfAvwU5oGUUqp886RJsgm5FKWZjFgTu2u",
  "key26": "5aovjoCgZ7jdNgaQ6yh5XtbjR8e8wgcKoEmxFDvB7QsaFyL7mHuuy3eL2tt7aF9GXZLRwVMgWSiQ3PZsLd3tALXw",
  "key27": "3gTbs7GT2tHmZZhd4ojPMeWRZ8aWurbjKysHnfY2u2tPzYCK5VCYGaXNYFSxgK7Mhdun1qPxCZ5RR1H4TMGfoHrR",
  "key28": "4Byt1Xqv2DmwiAEpMvdWQ8C8X9N8UgjC96VfDtE4pexuQCNnoQHJhap3zA6n1EWogTVn36g7ZR28kEWdCezVaG6a",
  "key29": "2q85aMvbcdTqCeiVRaYMXbtM7UGy336kGSNZojnKtYRmM2P76mrqZRHKN1WgkP1CsPn3iGmmVms16iqfrxqvQkDS",
  "key30": "5BebhxgqHoFhxNiamBoN1Mvo9XrjsUNoyMMG7YRFjX9Cd7nKc6iiYkfJW6ACxJCwVJizJ4DhV1itLpRZK9v4XBZ4",
  "key31": "61sJT47iWjSVh29g1o3xcAdTn8Tdv7nHyMQug5h86JNnUXn9oGAPP3D6JF9xemr8qVGK9LkAs3b9XrEZVi6oJMVg",
  "key32": "42kEABtNdJ6CT7jzyhRYyVUcdyjyrJ2KZapFJYG6LWagzXJTW1yabVH3dj9tcJ2YqX2NweV6SjWMoZj9bZ5YNvL1"
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
