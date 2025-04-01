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
    "sRjNr4e3b2MACdUM6CRneX8hs7dSrvZ67oWVDLGwSBb7p1ecD2V5bBW7s62MaQE6mXA33TkjxXije5CN2iVGfVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EmTRG9VJhUhLwRZeTG2CV5tN416Tx1JQGmz18sTy7CiYboj2LHGJ895VYS9kcpMXL13BGvbaVsGvVP6ZXra8uJR",
  "key1": "3preSLCqFEDUALK2CJKw5vqjeEoN5YTYu6scfsysgcKCM7HJG6CD4gxsUApzpKV57bmcWV5eop3se9i6AVRcgAmB",
  "key2": "2xafE1dpK6TfXzxVUxiVwfwhRneNjb9vhaCv7oLcHL2BAGx8oUCDemj4P2ERECJFGCkh4Q4UkzJvqz9G2MJcbLBC",
  "key3": "2mrwQc9rQTGTcnQGqj8hGiGTgLZ3q4aLLhkgeM4vkaLhkC4h9sr9mvYt9cKgyd6XqafW2c16jAqHNDam4o3nGtwE",
  "key4": "5H4a5ryW9r6RAKbyXQzQNNUbt8hX3kmtGCgzn4Ce7xRx6jwus98aTe14Z8mzqhPYYe1E7wYfqzDa2VsXVHyhGBuJ",
  "key5": "3ZF5tbWcswTaSSMuG3Ga36toJi2UJ5tto9skrojorvVYFVX86QMS3nxoSH7EmcEtG2BPJhHgwkves2P73hguqiGx",
  "key6": "2Czece93fmiA1Hg1WMusypPEJwmbPnDjgaBcyC4dMWgzb4b3aJxsmfNNrNmAhxRA2jZbTDgBzHVCZEuu7RpbSfjF",
  "key7": "5499FgazfmJQJJpE4GmjeP4VJr3DuHM6GZWFsMAVHjCmx1GKEtg5MyzDJojJedQsNQ6HS2fGdYvH6oHPbArznyGv",
  "key8": "2aH7QNwoua3nFumvz55nASuJKonRakTWsv9uWVdUVp9Ya757rgfAUU2sQo7Y9JNddKNNhFi2gE1MqxapqDjxMT8F",
  "key9": "34QP5dGNnsuo4w55PTYcmcJU1vDFpoAhdbNfZz2SyEUQkK9yjPVxzdeVMVj3pLNVkk7S1eAxD6eRsj8uD7F3MKY6",
  "key10": "643iiakEb2efpTbmHUYmLUpG14KpHAkPcUExhJQqZ8edjuX84YpEU16muN8padAaJYZJY9sZfkZT5j2W3PCcWrrc",
  "key11": "2voH5xPPgT2MYDNbQTM3rhBrNpAeZpKi5d28RURWbc7goYMtKXqw1evgw1WbyUL5Z4NKJWc6jmzHhMxLjDj3Rjxp",
  "key12": "4C5ExaKuDvZ4YSogvVzzqeQvH1Tu8EzQ1NBdxkQyDf84TzeATQTXAEbgzmiupboHXBXJieuHaZihYkoQx6Ah3Wxx",
  "key13": "87JechwcmhWP2iPe5HfnxMD9moDXmMU1JLm3DWRpaaRKDoZyzpj6AbEcktDxTCXTJ6KgagSUAvtit3EnY2Vo1e5",
  "key14": "536bSTTxkkTJinSPc2TTB2aAUFzqkh5Dy8kigeTogQNzBUA9PXztSd6myyPnnQZD3fVmwmEWc5TjuUpHCuzzVYTa",
  "key15": "yxAGvr4Dcoi2x1tEyme6k7xdXYeqTZJHd5uY34TdbcUsD6s7gE7BFG2d4NQB2LdUdYNfmAFPHN3sHEVs7JHvEKk",
  "key16": "4umHjZmfpASqAjvxsm4rs8D3kbbs4Lx9XjpfqqXxzSXUTJ4Txe2P9N5xU8xiFAEgqQJgAuvjaDDgpSj9rqbmJMZB",
  "key17": "32BuHfgi6RvBeT37eKUMuwaMzwMhzPVqNjoeWyJSAXpXWLUNF3PuJ6jmnEH2gV4rAdgrBknbEpiJHjr2DUx9kGMb",
  "key18": "58ua2JCTN3Mo9FqtyjNQ7zS69TN2PGYKmAxh2Jv9GLP5EyLBbsbJX7wjsnrWqx59fPJBM3QoJ2Hsfx7Cbvsv5WQb",
  "key19": "43ZD3gFXSBfGayVwDyPuiJgpEYVMR13dYmudaJqqfsn3aLLWHjefhtYat3fTeKnjyDFHxjLpsiETEbKBaztupmA9",
  "key20": "3C5JcxppUZnkQj4VY2NK5hh7M8pXyf1cfeXKSVXJwQZkkD3rpK25mXtXqPR9oqz6chsvpDp25p2fbw8XNWdNRzHP",
  "key21": "62HcRtjRQZDG6EcG2fZycUJxGSCqguWdjgnvFbof6KF39y3qpaNNe2mka8pqauG3W5TUXD4bXwWBLEBi5RSR5tdA",
  "key22": "GP1HGbopPta5xDfJtM8yVT269u3QDysjNU1JD2U1zmHtFb8FjLC1DwoLUzmkEQfFWLzHVV6KqAT4qLzNg9oqpY8",
  "key23": "4iUjdGQVbL7vg9r7bP7LhRuAt8Vg1sFz7iKkSz26GN6MH8T7LhCJkarwK9LvgkfoqMiUpjvViSMSA2tTtm37MyyL",
  "key24": "2FTtnHwWXCDS7dbNmqoja1aMXfMMw9LHY6UyVKKDzwmzhBfJe1yrGMtrC2UM7KkAreNrz3BAAWHfxERYYRFBBX1t",
  "key25": "VQUmFdTUwKx7L2Eqh7SQ6jrHjyeWzkBPHHt3Bti2w4cpNoZDcn5XW2wHfAx1n4UeRVySA5eh8sU3zahUgnf1X6d",
  "key26": "2UDqM6kV9suGinmhTxmsoNqp1KSDsJ73bWZvnNHYo9Rcvsm19T2AaVp8t4DjahnpxMVPdPAjvt5vecKcWa3SXfCa",
  "key27": "4iKwDZBqWsv699PVSf8iQTivm6h5qGvnQGqUpup1aksynPHQz5p9tsNfdaezg87trZMedR3ZXGL5YNERokD7zpj3",
  "key28": "ETj8YMZ5h2nmZWLypkDximVvXDNWcCkats2nkcKPibSk85FGa7wahdjjfH2Qb7wEwEkDckxsCxezyFr1v7B8UCs",
  "key29": "2xnbyn7ZoiEeHiQAsynQEHp9HcrMh2sVom6tmVvw5TG53qhCVg6tcBdYSjYskuuaH74SnfL3k5RBRoousNP8NWRt",
  "key30": "2Cwq6v5SLZQVs3RzhbdFGNutNFVksxjH2kCNrvZNDv6cG3sdsFFTaNdot2AaPmAaPnCKcTdkK3kpSxnMZShf2fnV",
  "key31": "VUwFUoEJ4pYqNeqC9rqUeh4SzQQBZ9DkZ4AKMbkBLeYFBHp3Fzo4TkdyPp5WXEkJwJ5ch3FfNGtbU549WWRidr4",
  "key32": "VdtcbU5L85sucJ4n7Fd1zz2kJW26WyQnGxNeojqafzqkQY1a6Nas85RsfwduRwRTcLxJjhyiaY3VPNE9nQE2jAK",
  "key33": "YPfr7ikGFMiJzLirD8qnY2eDpCyF4ctkTS5uN5mZWJWb26Me9E5dmszmwYgnCoZd4dTicZnJD9HjV4mQPscpewY",
  "key34": "5hGax3LC5AXBkVp2GEe9GQRPuhVJoqkiG9byZnao9L3Qni7F3KNyF3sUtQxnrpLukz8YHZpnbJi8JztFMRgkamjF",
  "key35": "3aahRnHzTT6yXQzJiTyMgWMbGmsjMht3cxUyeayDGC5SDWtgroS8wr8TpPsKw4q97g3ryWgQKCHJDPa4d5UBsVGF",
  "key36": "59gtXS6YyuPPcBqtSe4rycQZ5gcV4JZVsJLMQ8U5YrQSzeKDJeni8hkhDTsgDB6D2PikjSmiVaSRr92tkkcByQ8X",
  "key37": "24niqreDn68fnS8Gdx2CPmmm5a9KJhV5FnC8sLp8eV4o6XaDGws3MxeD53aGSHvAEq2K93jGHDe9hQMQDfGVWe5S",
  "key38": "4JVfNa7pbkBEZaZVvejcCbhCzpACxLHNq3LDsG9WPHT4NdKKFAKDUHoJzm8kmM3qF2ajVF7WeiPT8vLuW7ouc9Vq",
  "key39": "39Fi2LRs6kza9gVfgjqrj8ohv8D5GMKi3gFCF4rbj8BTVYch2XPKDpkBu8e5X3UWHi4xh7L6Q4a45iGciP2ZkkiK",
  "key40": "4Fo1Y7UEapzfrBiNmNA54LqpgJi53zPATnPNWSYe557ZV3CdP3fLYN64tvec6uLWEUiHptXBBidbTTwtCccRrsrc",
  "key41": "3L1tva93SyhNkEhKgABosdgPYbaLcD9QbZiCg9yUk6BYfsqKuXVBMBvon3Mde5hrg2pa3Kiqs95KB9hPSV4kPNor",
  "key42": "2GHzL6Hxeog1DDkLZohRRVx46kt2rHPrfzaZxZiNpLQxGiZxN2HHZLAyvrnKT1A2UPMRQuRS5YCXzPzW13mhGnco"
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
