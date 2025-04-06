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
    "5CgJuP2MEP4ZYHLpsYhGznLGF8movkhUc5dQbaba1DZi7HttwTn2ms8ngbs68oinWH2ny9zwHYVGJpss7eaU4DxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hZsKUUY2q1n8nyLNrRYgc1XV3GCCwBVZf2M1w2YKsH5RbgvEMfLQjC34GxVbgs5qx2osfvcoPKinwZUdk1JEErY",
  "key1": "4uhuydkjrTjryeVTuqYe5yXuFaxXSfUnEavzUMsvhLBPN4GnLZgwUeN6uV1shoHMjtW3JpjewLRuRcqW4kSFpbXp",
  "key2": "614hMU5Ds7ugwwvzEESTuYSpukm6e8VJwZBo1LVCxiJgTvRSFWd1SMNBxVryh2JyVtP3bWXQvpYwKTbNxsAnSbRz",
  "key3": "3kiLjpvBJ2DsRPmQhy2afXEz7NmT2ST9r99RShNCCQ2U9XusHKNZAac25qKsgBv4J4ZRXwsDkUJ492XiBLXm64BN",
  "key4": "5DjsazEmaBXwZMesvLUthJcsWUNL8JyB1GC8hXdH3EH8BoeMctkuxU413svCnxtyCQ39YckbZWUb3RF2Zsks6iuo",
  "key5": "3cCPpkGD6eUmyX6dzYxAZrSdhRh8XvTEPbUcu8uTzmekKQxsRmrajxEBYtttEtTbHM3NsoZ4sXDBkRhqpav1KrE7",
  "key6": "nk5BVZ2idsSwrRkHnuWB19iNVDSeE8KRQ8zbqDgKxKJHUzZmL4H2S2k66HGkmVngzhESFzZRvoyYqPBpoPiib9g",
  "key7": "5BesQMXQVuorsvTisRayg6ydjuGdTqaSZskpRsZ2t94taG5xpcAZe1ABeaDainPQJ5XwhzrqM3wDe3MXV9qgH7LW",
  "key8": "4RuFYhpVmQFGJLKggJhjh5iyjM1jUMLmGPwsEif3QFWJ1BphuWtiksVVrhBfb1RmExduXFYyAuGd17Zs5Qot3FRy",
  "key9": "5TimoCora1qjerJx1Gzj4utkpbTeu62KjaBJRsqiyFQWGH2jLEEexE7nGyDmAvgzWX1HdMVsw3urFSGeesJDFPGf",
  "key10": "2XULRxschqSxZC1Jt7McaAHhY57jhJu2Y47qX2geNHkGG6XG1EGVeh75UZJ1MnMV3Eu7ktkav2nxs4KA4wkvX6DS",
  "key11": "2WATe7CpmmJRsJYUUcVMsWiTMHe2jzWLfRZKVJPsztKXDnv5T8nLH5gySQsREhxZ9QyPTHvwxoimeoG8PfJwkizw",
  "key12": "Jr6SvrAYCCKGZZkuzpDXtrYsp6xL6E9gnXtWybn1TfAbcG8fPNJ4opoUePQkFpuNcHcqwQLYoJXZjEDMLvvhnTU",
  "key13": "G7BzFoLAZqntQQKwQ8iUAoTyKVywaqDeYoHRqfWF2MeYNzrsB2hcNKZdVxpXuRmPafZHHy9A4BmmPKZmHiwTXkf",
  "key14": "5GhaceQxqkMYUP3qY5xvXqSemU4MAcB5WZzXsNVsS6jAfoQh13Sx97dS8xAJV4DMyL7Wfj1z7zX7gXSMQwSN4sSM",
  "key15": "2Gb3KvPp5ct6CHxWTbt5E4aDDRnJk1CuMoDxZQcMGyGsdsDFWuLV5zr7kUB8n7ZeYSFwNNmnGtnhj55RLJcHFADm",
  "key16": "2SZgqDrfq3eGeRFecKM6JAVYF4eLGGZztb4zeZMdTLuGzoidqSdxTyjCjfWZEtKxjCz5VWhD1fNvBFQi1akY1Cgi",
  "key17": "xL9p2ge8N6kW1rLpoA8Gy3VgVRztADJKppnj8HeQnzXRTbvTF3KNUkxSg8gh5CAx7VrZ9FWqSZqTp3mDtLpsUtd",
  "key18": "5DktUX14CKK1kCFSd7eskmUwry4VTGTcXNHfcxbiuDMKJ8kh8kpdXk72dSwm5KxBsabs9HgtvHbXeTQAzwzLpAA7",
  "key19": "62EMpsYvQSJC9zHM4U49h6ZZ6DwKUVTsBvyxKaiWp9zEu566dDKMLrJYLfMiCPMyzoJkkniAsT2z2pFx3wfZTN3W",
  "key20": "24bhjgSM5Lgj9M2M3VZjmM6jqKhjAMgnWAE2LxCVuGL9YXwzfoFERxrBJYJdQwydAVc6R5RCMvAfyHPeLCX467a6",
  "key21": "5hAmJuT1HQ8ZHmKsbJGiETHXjGpxdzxLZkQviQfcdPeCMopYCUN4HcoNTJhMXQ8fAfbRM3aBLhq83gfXTyuwsHXJ",
  "key22": "5GPHpvzkCqKMAAVbmpn6Q2oLDTUxXdShuJY4d3rP9VkDES4istrVMeahy5EZVsmMckFGymsdZUo2CQSshvqJHWeS",
  "key23": "5MGXkuvYzoefsB2Nz3a7JGtUQEaWqbyr9xYeBUmGfq9c7JBrFhNWoJn8TfJmLreXJ1DjDoezs43NRDyeQKMGHV1",
  "key24": "5z8BZ6GxMKU52zeAFoNaeCPRGjiATbqrDSNLP7qDX6uwFPotDouUxRBRK1C2vxuDkcoBgqv6fYuoezpmRYDGyTi6",
  "key25": "3sgsupLbVhzERyqmRw44pZcykHjVwfr5XsNwtAmSQfk3XB78zC8n9SATb8dJV4o2CCVZoa1WEggck1joCetBwwQN",
  "key26": "5N2J1WnFKWSBLEQse212gRKt7iHax3Q23WvW9E9k5PMp1aPp8WMpq6qKup1aGpiuxcjBmf7zxwL1dWZ6HZVU5sK3",
  "key27": "54yowdtXzoC1bMnF4qniSS3giKEdQXpeq4rHmfmZZDoZFFU1LqCxZXxAEdSd23ufjU25DQEMbGc3uxjQAxqHCyJW",
  "key28": "4kAK8dPVwrY4NtbPwccdjXURQUVAm9HQssxzw817YYgbQLdsjrfobGe9MMb2pEcxX9ss7qCDz8bZ4atpRB2yMiAC",
  "key29": "2XJkP1k7dKcmbnN8wubA5eP6pPmjvhWa7QBaiPhyNma1PQbYgwfreGXXG68yAumSFsjKMTeFYW16Cd4tXciHp3vT",
  "key30": "abvu427URKWWDT4xAhgqsQJo6Y6yCRE7dQfTVpvxufrHK6Mi4dq8QemULUfUNxbGcAZmmVSau2PAQy2389qA4i6"
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
