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
    "2xi561fCDtseoX4SVkrsjF7kH8CXpZ3pAjPmXNzhsEp3fCdoS3ufazjqJ9iRJxYpQRawmERpGngg9nfDekK9fUMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZWSXi5zThnj759H9CBYf8kBs6d11MriaGdtUkfTG88FX1wH94TvHiNky5CMDjhTgsHxf3HT5fGBFgMoCkL29Nxi",
  "key1": "5LqdERbWDhEDPVjSbafFU1ujNA89pbeLfzX5DJ9sxmcqtjmZQdCHcjn9okkmZPCHMD298SJ9YqoHWE7Q1fPp5Gu9",
  "key2": "5k4B8TsNXPEjZGCdDnSPrUWScpP5Wx2ndrBn5roWrQmQdGGevYR4n2N2uUyQ4Up2pB88ByFz3h9K8tX2pV8pgRTQ",
  "key3": "2gq1FEH2TKYZBu7azq8Bf1vkGX28yCc1E5H1Hv9qHAyRwCMQpS8jUbRZiapTeYW9TmJVRFs1G6hbi64JxKpVbTUc",
  "key4": "83i59hHUVSaTsrGCL69MoG8bSvUwP7hM3NQn24Dqou4phe1CCE8ivdXwRvcPfVgMCzZbcixcNpDjHk7EbgQ9NHo",
  "key5": "5xhcL4o2i4pQFdKVMGHwAnNsqyaCxmaMfarjjv5kVieApTmd6fKJ44MYzzXu8FdGefVdrmufEiTUfq2qQH32Cw4F",
  "key6": "2SVc94b6Wwiqf1NtZJUQhT5TyZjRbgEayKrdAqkUUqYiSW9bisTzaiRrDNzLRLR8rizGyyWDuDfPnTSrnnMk129n",
  "key7": "27YCiB2ZE9pFjSx71XkF9FcRNufwMXKAN9vAngSy52nJHWze5VDZ6zkVTWewn7sAWVwzTiF1ieHjiYUydK7N3iSW",
  "key8": "32sqNyRtDvsfX5iBxgu6SjUmuWeeJ7nZsMV9h66untPkZa1pi7EykUo2yPZoGpf7Hzv8xBTr7oe8bvBJsNUos1LG",
  "key9": "3zh4dH4gUgfh5hZhCY93ZhC7mLSq6nvSSgbzmPMBfK5oQR8eRV6ZhA57qnykh2UJMfaqF35rBZyjEFhqHgWwLGDm",
  "key10": "2EBhfzXwJUJVxt3W2vTBM3EVGzfohgwvHmtibmpHtD44xjWdH2x2jD3fEZ8r2kNrz2T18ichVikjvJ4gDKcNw5Kp",
  "key11": "38vFbToQTp2bdKcKXtwvESdvde39MYYqKFgSgY3DY5LuqFLpp1LZ4ZsJ9aiXT8SBigw95AZW3WcVRjF6yi2gcyE7",
  "key12": "xRBRCWTzeA4fYbcojn3Qx5joJu1XRYVteN5mMm1KJ7L3kcGJXndo3W3NiMopkLQ2AsWWfjKh43sXLZJh6xRSwdS",
  "key13": "3oni6cuaf7gYCvWpRSHH6RA2PG2CLER7JTYTa52Q966zDdM2bz2rAeesZBidCazvGtqASwani64CWpV5JKgS5CeC",
  "key14": "2tdojidSGoHmRc6nJysjSKusMV5wrBXED1C8C7PkWBaR1XrGVVBMhpMj8QEEjYWmEERGRAZwjtgKzV7e784hJyrA",
  "key15": "3HnZcqUK9HyJEDEBMQc8wVNt9YtL4uDU4be9pfHkePHczU3E7UTmtAtUdyM4NoDFsFkQHxD9FZqYQi74ko5H44YE",
  "key16": "JuDbeJHGeyRMABzih7BfYECvpLuoghtNPHCEuqD5weUo6ksknvXm8eTSABMiJ5tTTFEd3HieR7VVqtrm7xPKXUH",
  "key17": "3aEgCr8dYGQmjeDCvDn6Mqyn2RGV8Tad9V351KiUgUdGQyHkmDDG2eCrkAJTaMu5SG617wfnMbb9TmjaYfpMg3hG",
  "key18": "N1LwjjFBaXJ5Jt4QfBYuuABS3buZZncyP8vw7EVKqRACMAXMWpyX4mHeQpco6X1v9ZYAXuhhJ7th7ZYhioRKiNc",
  "key19": "47t17vBkqnUHgCyZnn5A68MdQiaHepqkShD3HKioG8gngSgyuEBeRLuicCpGKSKDQPvhF2M8khDXqcUBm6tQCJaV",
  "key20": "57JRVGvqdbbAzjagvjH53dDk6ar4GUwPzq8azfXrbcxvmv8Yw6ednHJfviYDK4XfEfk67pcrCRmuy5TZGKSB3AE5",
  "key21": "2bDjgdzNFQ6XqPLBaMFynsmYYNdEA4g7Gw3cFqTcmQpc2yJ5XA7R4mVS8oiN484iXhC6P6qTMN7i194UVtFiT44W",
  "key22": "2aS9XhdtGvke99wD6Hv3cSCq1PHNEcmMDgn7iyp1vvSeecP4oDM3knrDcJvtg3oyi6B5r3aHf2CgFMbzmtp5rzx3",
  "key23": "4RNjY5FrL1CrYr2hh2rSvVhjazpZywZ2yGvxtrwRY8kYja3QaEDddeoUeDdjYjRWmDF1swBRbDeeu6AiYyPbESE1",
  "key24": "3tDyhHi4k3atYzhC83hZDBbH52ShDPc1Jknk3nhaSYZ6QpvK7mEYd9iCtY97RSaiSaTJ1WjLZm7UNzf7cj6qkzEh",
  "key25": "4RtM774DUZxXTsQM8tBJ3rtih3FdacNBH9nJtNgRqkxM6UnDitwyhZ3Ay9uEkz9N8TS4ezLQzmeBFf1HLh2d7Dhi",
  "key26": "2eZiZDcvuXBVYjbCBrrxPK1Xz2SnaCDzFHnxGeRBAV1vTTHDegRn5Qw5B8F3mMcW8e6b1WGyugaLsQspUXDNqpMU",
  "key27": "3dEemSGUS4XmAgDbWkNqc8gQ2MHT1Y8zyxC4Jpt4uXLWstRsegUuoSkkWN5tfjWA6bQD8B9knCi8nZkWPysd8Gow",
  "key28": "B8Gjo3fbaABDWwW5hUZBncrrh7iosmc2VqJRGbrGfSq21iaMWnQpPFRCtTeB3uQEhP4AV7Atq7D19dPCDegVySG",
  "key29": "2BLv86hFLW3kPazbzpkUnpo1p66z3L7no6eCGQ1928HH3krzq7hEqgYGsWFJtmXa8BeQBn8D6FfzmP4S4h2urD5B",
  "key30": "ie63pPAma3njiF1hR4nvhKg7qckr7WWYxMQ3Q3HtjeN4MNt74Fnf4u8v4zPC3HUz5AgKutXNJmJVCXFpNVMVWzf",
  "key31": "28nNWscpNmPhsG513GXHpwYp5XkpyM8joWeDqPzZAFVYXkpe9uVptaUYa6DExqtg1VrtM4RWY8ngrTnMXE4xr6j5",
  "key32": "3jHnNQbzvnLK1NYCQ4oMV9VgPoFcAu4Q55LffcSDvUdX1UU6KrXgvMT4JjLr8H4UajykxaY6CM7pAssGdxNoqVu3",
  "key33": "5cMUB2B7FYB6DPsLaRiEUPszHjvtczz9hix4tyfMrT9N433u5UQ7YZLHWybESdEd1aG5ixx4jH7CiVX3msPNFgXU",
  "key34": "5R7Aj6mSSYgZrg7NrbV4EAci4PagEYV4cR3cefR7HPfGXthkPweqmzPDnUCLqZ73TSYccQRdDkGs3Lc32WfjPSYF"
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
