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
    "4tExhnNhCYLdSjMmpmg2pGKWDQV21qp2eys5PxHSeB5YSZyLajEyLyf1F39CnwaoMbNtmkwD9UivkZGa5gz4YzMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EsbQ6LdiDvhUM9GAoUnBFt3Y2MMZFM6sHxYEYTbsVXemq8qMWBfFxAsQEYHzPzycUq3WgFBUkSRJz5ZjjznJ2ki",
  "key1": "mDNuYbmBnjDANSJhRH1wpzffYCFXZHqKjB1fkcVheurteLNssyYUmDC5sMDvF8KacigVGAnWr7ALG2CcLVoa9Y5",
  "key2": "4PBRj8jEHTLGpSD1ZsWR1SqLJUGoL3sKwsv5ycH5qv9kKtZ1LzAVxBLUbr4CfyD85djnE7vTYZpp7Yf47tGEhtCd",
  "key3": "4dfMXf2LP7GHRK4ko3xAyWhfvtMi7fcHskXckVSjcKZpQ6Bve9PNMTNMSzMpm7HgDonJXh3NUZPzhQKn15mbgmG7",
  "key4": "aGdsqfXT7822idmD9ZC5mznqdfZY5KfHYeWz4skZxqeMKpEaghApvPkWNchkxMT1ucUgC4R4rDacXNQgHZ8MPXt",
  "key5": "4NwJ7AtdriVHNKUN6tBigUBcyrogZr2kM83wFjT3ph8KgB2ahiet1UMPcYACFqvwr8MJG9hkD5HwAxL4YCPNQ3Y1",
  "key6": "4y2kcUwjEa1Xb6bXT9Kbr4p2du7Zsy9W6E3UzkJjmJWSc24eZ9tGA9HsmmZxtwNdsiE5ceJHE7EhRC4g3aGwQ3eK",
  "key7": "5nJsPW7juu92yGo38swVDq21ZuvtQjBoRf7egCjN4sspG2UmxML23DaJFVNBDDv1PGvtKhqYVfaPQRCUNwiBXLBJ",
  "key8": "2CASNyPM5hy3nwuUZsEnKF5BVgpkKMmsQU81dabPRzveV3pGJQUAXkP7nJrx35qipxAWPR6NgRXmTzCXYcwpj1ZK",
  "key9": "4C5e9zg9c1LEZLegdRSUejCfWnPVfpd1azgyvnW2owvkeX5hBSokjsQsQebq2KVescrk7sG2uGpoLa1EsSvfTNNb",
  "key10": "3WKE7Nrfqc76ULPha8112q9AcVnffpHBi9cpixahrAvHwuMPb2FzgDJrq6PEyAcrm4VL5H5pbiq9JSCNcCJiZAhG",
  "key11": "4LrMDifTwZo3U1fwwgvMca1kDueAdzSJeypJxntPb9dCwyPLDTQX6bD56WBzQuN5x21Mc2fPpjBWc6xW8Hkevqck",
  "key12": "4xvg7BGDAb2H11ZRevtng8FgZJbUyRF3TF3Qj3QY5q5tAEXK3DLiCGGBmAzYWSDH5djtYkakwr5DtCsTBk84mBgS",
  "key13": "3xpGsQoHJ2rxUPsKTDbmJAMtRAg9sw9hdgbDdApW8brS5Ct2igpG6NA3eeQ5BgMFzeDC7x8joHuEpmxjSa3UdTbo",
  "key14": "29ZKGkczADJhG6AkFTPx5QVJpr16DUqw97YhR2A1oLwTrwHmbZ4cRBRZDTB4a44Z1gs6EbeLubCi4FtG2wZeaC4M",
  "key15": "4Ah9K5EdeeQyQf7MX6V5XSfUfcUBcTJ33VS5iE9onr5LepsHsaQVyU2zM8PBVrGSJgtG1Le22P3HFzsPYnQS8J9A",
  "key16": "5iCiJttoG74j3MUrbndddHx63SQK4yV3PXgFpFTcTR5s5kwfE1hb2cMjWNbeBDeXshjYA3qz49NAbkM8A9HRkZG6",
  "key17": "5oXhTTPufvpU4aVgG7SrtjdrLScxPkJ5sq7ESz7E76CatBhB8AGay7CyB1CMeGbgkHpQfLX4VE7GPQ3M1sJcFvbt",
  "key18": "5QSYV4s7pdg7dm517QaGKeoa6jvhx5KrWPGfgX9NraF4aKbRs9XPeoivU4VifoUU3xGMT7bQNFp8UUi4KnWQNZYc",
  "key19": "5tRjtb3rp3FFVe6jLvkQb6TpEMNTKpUnpZUA5seAY22BrFRjBcMNzxh3oM43qrSnr42ecTyySDHtE65PLCFPAD4h",
  "key20": "2mSCrB66pqw1tK6iLc2fTu9fENAfjitjr1NVaBYyXeQqLu9DM7oFZ1CjWbQwvqZnpcYZrJQWTsLngZqtY1Sw7ACv",
  "key21": "61w1D9tWeX5PvQgHkhuT1EcGDjFxAZpF33jDNEcFXRx5J6EY6X5CY44C5tevvPveQHDWqeV96ikXsCwP7pM7W8RD",
  "key22": "3aBMCGJ8YktJ3QGFbkSE9cgTmzDg3AfJmDUQTq4F2UzuhTGsDgP3RwKNcwr7KYQshDRpsRqakiAKvX7Sq7N5S14V",
  "key23": "5gqRXaNydXggWnR723Cmi2Eb1Q5MoEcs3FyKKBqZQ89cneHcTENrS3y3a6oHkKENpyv3bdFXdNe2X1f3cuWrJTbg",
  "key24": "2hopiPnqKYYbScem51ebQUFE1mPWbJ8cuXvybzYmyoXB9XdALZP43u3JXtMoiMg1Pyb1296um7C1SJ9G9L5JT6yd",
  "key25": "4UpzNGXpVZEJib3o7ymD84DniXP9nwsy1V3uHEWeWrad2tFpiKi9jmwXMsaZ3pQHFEBD2qMfERLhi3YYonmmuc4u",
  "key26": "e3fqPsRj3esAjN3eH6XKj7Wj1xRc6xYs2RGxq9KJRB5vDXwDr2GBFknEQhS1916pANbCaoM5LKXckSbpJycw2Cs",
  "key27": "5J4LoJmjjrrVo3rbSHXpsNgLmE22MoJCfWXYvdKWbAYGHus9e45WauioXtyM661NDgmyxbc14RgnXmiTqWt2B7ke",
  "key28": "iHYAuMxQVwKLZHoeGQJGTmd4hdnyGuvSSMkR7Tu4Da1tTqXLVXttpeo2FHtyzyGefF8xsRnKAZjefH8vYt9NX7m",
  "key29": "2nK6PU29Z75uR2jmCq97zTBZogMv3smT6nCxzk39so53bNuZUVKJ5hAWVSXpQfficQxVnDfcSdiVmsuf8M9PvfcG",
  "key30": "4QuijGeoDXU2rRqeLZnhQemMDMoty3byNUz4VmorrbCqSEtLbPC9xwKm6McBq725GyDtphGFwRDpP3wM13UuNdoM",
  "key31": "61oHDRFCVrj7L84s2Ra3w2Y2QPLrgUj4hjfR2YDQDgFYrVbfHAcSEhYuFVcWgEBy1yCjcJT8QZpAsgSkQaM4bDuB"
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
