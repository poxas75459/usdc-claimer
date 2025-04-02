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
    "559NpN8zP9mgWJ5cgccQ3rmc4T6qnWnsMFYnYFqX9xzUzpNbacWUdGJwwNRyQww7vxRidioBQHGWdYoi3wc9Urat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oqjW7Nh14DuFZLt7PtA4UoCUCRC2pTiYRHBU5iEk1xMVBu4sGekp2fdsPSTf9s9xCyGFbRe6fAJt4EGRqPqKf6z",
  "key1": "4gYTNDdfiSJREALXXzhsoBhHoEQYzhCWFKpJVDEZNpX2fiDmKpTwYN1JNEH98piEPedryorq54887pzFConCM4QR",
  "key2": "65Y531cFfdB2CE4mmf9mn6zHxW5iGeuXKa5YnFX78tNGzGfHwHXvgPouL76tCMQyLG2qCjvjVvLkgikyotxXbj1V",
  "key3": "4amC9DpCkRtoCixh5fghb9E6GfBkqU5JLuQBpptv5nMpkUhCx2FNiFTotRE5ixrEKt7wUtXVukXENDJ8wgWDvP2M",
  "key4": "2mZKyYcMxC9ndYmbxyPgZET4N3XbEDrAfAhhfwPQAPYgk2a8ye5Ue3xSEhFJxR41DPv2kyFcugGPYz6s5WDv2D7K",
  "key5": "1268n9Z62QC9MAFywEZrCmxAwvWrG6XteCagAWLhQhu8Zr6RdanLo2uz3psfY3PqiyALAcwV9g6tHZkESScnTAnM",
  "key6": "4eWdEZYDh4UwdPVVcgt7vkQW1SADJu3fnPhY86hUejHo5zcChuqvmEedQxi76vzSQNtRKQrkbPfenNtTivYjDGBT",
  "key7": "4n9J4cHWXhZgvY4teVaHJ4UwMvuSYsBFwBMEi8KjQcbDHmrrQd3CgmaKJGBJxB1bWLvoAKXPehxBF1u8VRrmYYEz",
  "key8": "TZkwkJ1derRbjhvFXJtPjP3X95pcmf1EATRV9q1zWh51eQTb18Si8gXWpR1Fi1Ac5n2K1iSkNiRMRDkSoH48MPZ",
  "key9": "47ibSSpwv66edkjDQocMGke12BnsDb6AW7oTBEW8XnEVVvUjeh2qJ153ZK8nvTsAungGjShbRfoSwgkyi7eJACW2",
  "key10": "2EVzajB3msfcmyicyrxiAVeM5CAikuJvRtW8CFCMnAkmLdLfb2tBBK61xj9cwyrF41iGs5hmXPXVRe9MHLSbyX25",
  "key11": "46eSxvo3JtX6hNHTC9yFJUMBhJqyTviLQ6dtEFRkDj8AK7qLdVd2NXoiGckcLzPcLonsSmaST2JKNjRWGcy2W6PN",
  "key12": "3E9Pc6NUGeKGhBWKE31r1DPTnGt9bra2X1Vr9BGF43eYbCE5scKHJgyLNTUQR5qMyHkRj1zhL4B6Yr7pTnfear58",
  "key13": "2yhvwb3vP1X8fuXBkK84JXeR8REjRDyYaX5L4itejcyKRCBkm3GiV14rGSseKrm3XeU8z8N4Y7oYgf9YnkfYEDcH",
  "key14": "4o93UbnE5grAVYNZgHJndyMtXX2hsmx5BLWLzfkAPCMbzsXacpK2Utpv1cjnFgFJMA6p91zDWUKCVeVHj3CssDmd",
  "key15": "TbD2s3ZUQiMR2fWvm3iBafksDiXJ1HPsEJtS2Hyuzorcz1PnULRvmKdpYz2UXMkNUPsmoDPfKuwQMVonq3F4Xdj",
  "key16": "LgHeBj3DbjZABimW2eFJ61DNDSExRBSzCtPDKxeC4teZNMDJbePgU6GAEaCfjX6d5kVzejfCNXrCyqgcvPs58NN",
  "key17": "sDRhQgciwunH4wXpHfJYGvTxk134ZY1Uq2NVgfVY2kKonfYN5HVs4KRH45m2vtks9Q7feL1fYZEg6Ek3Ajoxqn5",
  "key18": "jgscZszrFKgfcPeyhH9yfkCKyqyWAGkZ8RZYqececReNZN99ad5wKNjRKexygMLgnWKm89C8eW6VD4Sa38Ke1a8",
  "key19": "jAugZmF3BXevEtE4hiWRXktJu1WZvS8jtjydSQZ6Lk9sJBpFqQioXitXzaq77rHet1nZsemdiZhdn5CkH4qBwym",
  "key20": "431Ngmbzc5H9uDFAgoAMxFejNFF9GD64q9opeGLuMXkdaLeq75yYkk2AkN5qp7iLmWJBJoWpbyNoqSdrSvffkk9a",
  "key21": "574wJsaYpAPiEHqa4rhLLiG3GVQBPXHQNApUArSrtCfJQHG3WbsvsDHKwK9LXh9NUQncztgKcsEaQxpuAAPqmwiq",
  "key22": "48GwLghsnQv8GTVhtBZKW8DfHoU7UZkj6LQVHCHY5xvxbhBYjiPH2RuveKWoVeKePwYYA1GC2dUuQvDbEvauKY6z",
  "key23": "3uN6ebntqPGUxqgPBVfDzVMgN3kaiXkrWHMhJrdKGifZB6BEzLzAH7AbskcTxa6WYpex56uLfFJAYti9WMgkxJyc",
  "key24": "4eYeuqBjRMP1eBU2bMxncTahbLnyz2rEsYkQVpN99J9aNWU1gWXRAFKHrLPEeDe49P6kaTkaM9CZWfoUYsCA1svP",
  "key25": "4uV5JEbD7PmYncQt8NTzMZpP6SApPWvZi1Tt49s8EpS3DVUSuagLUUjMhDQbe4t2c3i2DdF75bzDh8isQL9Y5CMh",
  "key26": "3sduxoznixHV4j3WB1JqYEgXnYoVnkgcEJB2D4AVTUfUKdTzp2s6i6XFLEwmA1cSMhpYumXJZBeZNPEoS1ikAcAk",
  "key27": "24SASkk7iEECka5FNBotTEvewH4hQm4tNFbPnxu4fNF2ZM7gRnU1soDr21eQBqA5g7BF7azFAEFnh1GWL384vsGQ",
  "key28": "617ksuuFiefvULDyBzq3pQEBNvTC1qZCJ72YPcPS7eJDH1561NuHBtaLLSiZDxrZZbkLnU14DAzKbiqPXj7S25Qr",
  "key29": "4mR1Hof95zZLgTA45EYhtjvuYgo2L3q8sQUEQdC8fGAd3XiknbXzrKF9XBw52NpxWFgB1kVxGZikeedKUNgGhBmW"
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
