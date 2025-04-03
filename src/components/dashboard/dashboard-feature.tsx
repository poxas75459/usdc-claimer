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
    "42aPPHKC4xfemjuub2HoV9U9n7LLvdJSs77WRCkzZ9CuzHfab2MKCsaQ5KRZR7odxyVURhwJUMMtyhMamP1prZzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MYqvEWyjJw3MkKbFHb84rQv4afmSR98TbWnYieTkfA9niExMkbU6a9prm7tbo3az9CTNdBVfxYF9DdQTU7kFxzJ",
  "key1": "5wscKGiAX6Wf7aEVvYJe4oV6ZQsDara1DsofCT8LTvKL6TvbyQVAMnUJKSSCqZ1MoQ3SoxY7VfZ42qWqLuR6YwHk",
  "key2": "nafxbNib4RP3DwddEPAYrG5uBfJTQaSqcXB1fRTy7xddeYqYnRFUMJjumrKEGsdMrhJ6gbgjSvfzhx3d8LBqSVz",
  "key3": "5VvsSPAJrRceBNT2Kpt5tttE1Kcw79wnx7jB6fB62QdheZqcNBf6mCf18hhRLo5E4N6sCj2ZTTxgDfYvxLDSbRMo",
  "key4": "4CEDCWqiPQxRAAu7ZSD86ybYcFSjTwVJiBXcpTPC5CbmFdmtdB6o86g3Rz4puyejH21ZzUU1h8koSRuCc3SDmsPx",
  "key5": "3ueKBViARsCdFz6A418fB6oQhBA6iFmckQRudeX7wtvVLrNeKFNFwnztoLKWjA333G6hMem1yzEgfLB1RWpwwjRD",
  "key6": "2qYdD653pWBX2beXqMWwjLEJ9shtHiddD5qgYwPEosaCVrMBvNq176575u8A2vHt3qd1jqPbmPCGZhgcbi6eZQjp",
  "key7": "bFvbE5sPi4gzUfXZJZkC2unP7wQmrii9yTdxBcz5h32CUMDE1tE8f9KLM6rDiBNoafv5qHBTUTDn8sKwBwaN7DN",
  "key8": "57N2Ntd4XDdcbW72qSDKbb2Nxb7Gv5hQHowWbfjkvURt4LLEPT9LkkmPRAp8MdupNKVpHQuGHXQXEHaDUz1kREVW",
  "key9": "3XpGR6GWdy1akduedMV6R3cjCrR4oSXcZa9YEQTK4kN7AjCDatfur8zp26gpvRNmCzx5K7XexkBmsYMHWDjPErLx",
  "key10": "3daPWquQx5S7S2BBUCF1zE27tt3FEqvNYqwucpBARksM78Auvu5eKdnhXbo9anSaXf1h2NbZDYPQ1wfYEdnoJ2mw",
  "key11": "RTKfqEnVSMvY1Pe2Rr1ZSsXVNKdWJFjEhsahSc5RAphf4fTN4xodpnDfrWoaY2XfqMJFwUhZoEic6Q4azKGJGZD",
  "key12": "3y54h4hRitDGnJSaE4Mks56sgpWunwGrLNDnifeJsYHS3snXA2r3dUAFfUZDCYuTEs8KxRw2mRxsrpSAgGDo9pfp",
  "key13": "4AqWrLikzkeyVJPN2cAG9vRVqb51ebEEnbudnL1BG7BMfgWdxCu86YTF49c83FtHCFEgRP8iJNoN5KaxHQCJ85E8",
  "key14": "e5jvKYPA2u3FukHEXnGVryVPji4GESj6tKTmS4DwBj2RyjN4TBZ3tqFsay33GiaEQTqdPzHQrwxtvMbCF4CEaL3",
  "key15": "3NZcfQFqV8kFXJe4dicE2SbK5Lqes7d54i5DwaKaqoFr2qmmjuGW22NjZB4EJrF8PVgKSJngvGcpnsEuWZ9JJF97",
  "key16": "2aJ1G3igoLBH4DcUbr1YE3C6h6Uj2T6FibUwJP6zBhTsjieMzMSvU52YiEqLNNwmuMgiHrXyyDrts6UKhnSpwn2b",
  "key17": "2kcJgLHYnjE8jaZWqTXWP2tDNvTkeaZxVfGq754eSiccWWPza2wnqZXaQzNJgwwmxFmhCKBkdwsqAXcsX42oEmLW",
  "key18": "2CB436Voya65YePxFYKt4kGkM9k1tuyfADpuwCRVh9iPbanGeiAeWznJZztcRguVqKu44eokEP5ViWnv3z2Z6ANR",
  "key19": "5bGbb8nD6GrkbDVemYx4NZUv9oxF89d1hi9aGvn9eEouDqaoaS3d1vHhSKtTPvZnxJDyc8bkptuJkMUMpbpU3zga",
  "key20": "5LwNWfQzdwbpoST2zpXZsgPzg1hWbh3oQ5DcqS5h61V3x4xyaCoViaEaExLnVi6ipXeuYvuMSLbidMbiPUh4Zqd3",
  "key21": "5YwPyviJD167kmm4gwZGdVYZRPEBtr5h7rMBSB15cgbLRXaktzrJBJFvdzxfpMHtHbDqVwusSpYDm2cCGhFScgTU",
  "key22": "5J6DJRSKW1C9jp95vXy4bTsYcib3w2nzQYj8DNwNWqAkhqQTzCvTduePgqny9udDvC4twQPuHLpMLWX21zAwg8h2",
  "key23": "aHHQPyEHtsYevsE1FYUccDqop5xWH2oyWvojJr14z48rpraoeFUopwWhCEXcQn86ZfpziJwBfWAoFgVABEm1Lvc",
  "key24": "4cuqDqCrwewGVVEpQh2Vy5yy5vUsGHXMqpgcGjxT8Exbbz17Uoaygn5rZ82S62kraYEGJ5NLPX9oHiHvyZ6WdAN3",
  "key25": "3L2X1T4qWFjyDGyTsJsTKg5vtR2yMFHeebmiptGYec8ed6UR2VRyxrL3tVfcHATiMx8MzUvK6WpX6CQwn985jWr3",
  "key26": "661q9FN8phjuBp6aHn6DAx6bKoTuywnwFqX7yJBFxYsNq2tfco3vesPU7dNPgwZ4DnRDpaw9nqNDk83Psbn8PVci",
  "key27": "YhfooJm6C4f2iixPb5CuWZqcHhqi41tHWDG4QXFLku3p6X9GMXhKcrH1JWGYu8u2uVchgRYUyyvjiCnTAFyi66i",
  "key28": "aqwmhfYxaYNYSjuMw3Qb5vAcNiDaLW3JRi319e17Qax2jpLsaTwtZHnQGvsgv8MeDYCroPxqUf6dpfCBXpDG374",
  "key29": "566SnwqWQiAjFajA5p4ExQvFjCd3xts8uS1X7UyrL6nKyNbSuwSy4fFoC9MJkdzYYF2XBNR9cpP158taLNHdWLoK",
  "key30": "5aeSzqJHHA3MZp1w9Tk59JptqTrmaUkZR3yobD5JCmHaEVkFL9xyq7h7KQX2eWdvQADcEno98hfooeJ7BuXK5BvY",
  "key31": "2tfbStvKQ5aAH2jHeFp2T1vZqdMrQ552hbm4uxZsqcewQttSYA6ViuiEkXMQgGy82sGKT6cbkQqFL29nF28gHcKq",
  "key32": "2DfsL9pRpuFSMzAAYbKCbahXAJkexMGh22YMyHWm2ffPaR3mWffCV8kEAQ6vLUzDYrsBzGob4B7XoFhoEBbLxvqT"
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
