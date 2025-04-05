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
    "3VrXmBFaWn212XaxqWdwQsRqAVnBZavUfWhXrrZXNEzWgXGFWC4vaWvwnFKJTt5TGJsrBLLTuUfd47UFhB4bvVRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fnkGjUUdNQNadvaZqAQYXnq5J8ASPkuzfc3LmnjF75Y6H6Zf1pLBxYiGGHFNgpUFQSDmWXTVLmKbgFyLtG5Z2KW",
  "key1": "3JdgBwsysRCNfkSWWiiJWvXrEun6ZVBPXLLwUseaFnUuS23jBH66SYa3CqHf7KaEJaDVMmx3XNzvpPGXPMbzAXd9",
  "key2": "2ZDUcWDqTAqEmVEFqWt8eVHzrBCYMJphXNMTNpLz3XjR2FTSpdQJczRHrh29YfqdKB8eSMbyniCeA7vggtZgmTt1",
  "key3": "368pbbshPA7nknMHLDFsNzp29QMTkVk76ZQH5ox3rBQxG9ri9y3NMVzpWXpBJq2f5iXMHCNpf2Kg4EQmwVxVvEWi",
  "key4": "3ZJzGVsC9yo2reQYULxxMKq4aKDu9Z6qm127upeTpnbHKiuikQH8q9YcdzByjggM1oTfGesew3azxR4mhm4yNW7G",
  "key5": "4woc5hQfL2WMCQMjLstWjntCfWhw51BLShT6YjFNuMoPNKxLprfiYestByUYXzmGXVHHzHtMmNN37mSLhP6AiSzt",
  "key6": "2JSv2oKBTRTZaut76G8f2T7SrS8MiHZJZTVzGfG6A7FSoutxF46ECge74GW2JdPK8XTB86PNjs4J7RkL7SzvbuBF",
  "key7": "5dVxw38UogQDvxQnPwRt9hN7XrCx4DKVpqHzhx7dYxuekWDbvBKmuhu3yVf2WCsiNwResDsunjab4LioaGQnUAa7",
  "key8": "zTAX14FnxSCdzDhNgnpepXSLurHwRECDwYZdhrvAGZABnNCZX8VwUxyXqnRG4Y2hxYmgUksUY4YvHWVVEBxNrwi",
  "key9": "446TFvZ71cQfbJh6agsboniprB6f3vknbEVQrsNzz78LW3cfgodbgkgxirYG8r1J4pDz5F42bhcgnpA6atJmVmqW",
  "key10": "5jn5GTtqZvggD5qSCBvGP7ABpNtgE6834jDjpsy1AqFUnsyjsg6Zyz12prn4w6Mki69xFV9RSraN5HXfoMwyxCrz",
  "key11": "5K6GNmMWbeuY6fThFuGhkMMNP2dZDGN28RvE76v4q3WQERDXoWLacz9B8jmB4svYUVRiFfdGQSjrP74tSj3xYpn9",
  "key12": "vZgk2VcdPdh8jCraywLBjE3BcVAraQKJRg2m35gEYSx1zk4U6Q3aykYRj42pf9L6euppnc7DbBCWp3AKgZfLx5T",
  "key13": "5yGL3HcpYTUcTekD2qhy89qjj8QTQ15UtuWBM6Hbfj2RnT1dWaC3z9iZ8QqMiuuC3aRjHmBehQPXoYBmXwSPinDx",
  "key14": "2shPdnqr44zpLPzAB9yxpHoXKMdS4FGHfR1bDoL3BHriscR9gRgB2X1e8ZVS9a5v6Pd2pfqGhcQyegPraznzFsEu",
  "key15": "5hA481k7SBeMnkC6hZZZpvYyujdMLRELUZnH2FGTkXkdjq4eLhUkT9KkaB7RJEAx65wjWzvKygXnfgXNpjBKCk6f",
  "key16": "5WkXRd5zhZ7GhUH4eLAykHGvqHmQLSRrrnJSaJPuaJgFTB5xVDe3YWxXVtjnJTdoBFMazdHpUpr9GQZqMPzZMJ6t",
  "key17": "2QBnDBwGWB8Fs5CrF5ptXw8jg1Tph9aqVAXGFYufudmU2wAfTCYWkUpWkZAxsYHkzNjnHxmKHC4gZ3jJyvasU3kJ",
  "key18": "uZqAKUMZaMna815sLCfPGB41J5h8QG98CjiDjGWTmAaVcySCJ5esmjjRsJDxdypNrYG71eYut4d6tbt3e78vDv7",
  "key19": "5tKZYYno2Rjv7M5KVBn4hNNJ1ta648WpyRu4PZm8t2hGCbajvntc1E27wqVQsRyMsd6PbVMZgFkRQWCz6QJpsoZ9",
  "key20": "5sWC9Qy2ZYSpiprpW8qmd7Qn34JQbcjf9hczJCPBgewecH8KZQCFSCEQajgiJULcMXP8t6iUQqdXUtK4VbE2PX7H",
  "key21": "5ZrtwPX2VWoMRJKkLN66DwqubFMMDbWdTpRLAtTr4AumdXgLCH2x2q64aNy1RiCHdZTTW8wsBBMyGV32M3kX4SoE",
  "key22": "4x66ebZevqY1HUtXJ96WYyMiPY9Qunyjp3n9HaL1NgkJytEFqg6aR5i7fd22X22vUFEuBCEM3DnznGjMG3GxxXVB",
  "key23": "3vcUqBDd52aTJ1SLaiHhtN6PMyMdbXzzqrgfSV2W9mtwpV6KRqdoFabVymajQqKPidJp9qnm9wdddESJ8cjgQh26",
  "key24": "3N8CK5BbeDoPTi88ghgVP55qH5iURvnyQ4ekNgPjK75etfxezCAPB1rBWxnSdbCYuxLPMai61eCpknCLdgZbbpGy",
  "key25": "41pVXuTLW5RvDH9uAogsrrDHDmJ9BuFFoU7z811Jv87kbseE8jHSFjV5AZqw76XTv95UPtQb9MBLkuCjoi84uqEg",
  "key26": "324JDv6aeR5hMfHDqTzUKDDDVJ58UdE6GFkz3XhPUUo8LUCWnBxRzxsDKuYYLYkB2BH9MaXtdxCeay2pqsbZBuW5",
  "key27": "267UgHrRPGMf4dKBWcat3x3gz5v1DYxhwTTWLe251XLeuJ87jjSaFes67K44yBxVcxG2ZwhtLKBpSt4Q9cCGNwno",
  "key28": "49tKZ34iBApAqmLrWKkYUEKGW9hUBohW6XbhD7T4m8L7W6BaDxvt6U2s5bL6jaGpyR5UQaBToUNkwD9EPuENnubj",
  "key29": "2mCeH2y7a9szX5guQVQRdjHHF35nB7WGQinUdDUhkDqNEqXc7rJWzsCgzqpeRX8rFUbStb9Ap2qv1YPiifguLQdK",
  "key30": "2oJPNLKuBb1PhmdL5qFV7ZwzYPVYZ1DJgoexZbC2c3M7qKdshjLzQ6kz1cQPW2pvXRxU9Gd247wA1o7qsfFrQLPM"
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
