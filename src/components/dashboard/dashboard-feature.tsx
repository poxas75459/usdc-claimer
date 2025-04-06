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
    "5QL8HByq4W1wTm8SoAkXQYZvKiyHQ7Trte4yUn3fdFdzbZnWE54NTrJ9MVn7YaDoDBXQQE48w9bKvQvDnbhcC3TR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r8FvrE1QKzQ9he96GP3dMKkzRYucr9jpmjd8W24jhycMYtGZ3ckeWSbLmHpdRe1wMyB2hW84eysEF1BezJyQ1PZ",
  "key1": "3iZ38Qc33FY9BVVRBmLFFAtnV3pPK2TpoyFp9o73MSRDiR8pr4coK7cC7AAVP5C925zqujjRUuvVLeSAZAtL6W1F",
  "key2": "3qAZNtGJLrpP7T8zgFWgCowhMJTc5gKnZ3CzD3SNBuuVLhoSGfaoFDGPCDhWv12UBDZX576SvNxRVR3ffJaw4YN2",
  "key3": "2TsvSWW3x6qoPoS8GRQXPJ5KAL56T7ydFECkUH5pc4jnctXJUd6f6hynM9dyzwNRKG1u8eNE8yBnyWqSwDwLMzxR",
  "key4": "3LGNP3EA733TvDXtgHk1AN5hB6hv8CLv8koR4GkVJZQVmH4SJVLYmWoeq2YkHj9XWbwM1YCEK9B136ZppFuY9DLK",
  "key5": "DPoQv6cUfTHFfbYz7b4wcYigYZgpP56RdwMvk6pJgNjxQQHjve9NwB2Gem3L34BPbQ4Tkk1BE98u88y8AAh69Bg",
  "key6": "5kwvF74ZYRFtkKkRK51pT2Z5VZmk8yPXRo1jV1oK5WaTRQxXM6LXkuzCuJ4os3A7tdprgdNsrFaNz9ARuTrVzmha",
  "key7": "26CcGd8UdADjosqJTPMKA2zRH5dLD4DYTb8UHYaC1ZBVc8rFFJJgXP8Ui9PzSt2DVbdy8EKPHQdtukPgfuaTRjRG",
  "key8": "2NgMzUuwWf9uooyC4xyeJbdwrpi4XZgR24eiMwTsKqC8SSxvy3iXodMVXoHzunWnzi3DCjiqcFgxYmjkw4sNqVpS",
  "key9": "gvNPVCNdJDJET58bvEm8cYrcGq11aVnWu213waszYaFns7CJJMBw3f3JrWpB2y9Q7edBx9xNEQmDDB2izAWTSGr",
  "key10": "5qTf3Mye2zwtFk1j8jjfoRyhaTDTC2RXn88PBDFwfKMWzfakyn6pQu2gkALm2xrhqv3vNYxi4CZaXr5KHwga2x1Z",
  "key11": "jaZ5jaykt6mEHfhHTbWBUjkyXP1eskbTcFPAXp8PBueTQxxuFqTg7am7oTmzSziQDBxRUQQzSvcvP1iRi2viHzb",
  "key12": "4eV5uUvqujwAbHL7YqtyAGm475tYq1UWuQ5vPS4ySSekhJHfqRqewHgkYLBy8B1uBW61EH13Gbm8fpxd2drkVMof",
  "key13": "55MdvfWX26GwrTzUBb1eGSNQyVX3iFb3jXKBxbaXudYYgdTJzUzoYNS3hb1dzcChyD7ed5A4tf1SpRCkziTq19GQ",
  "key14": "4GtXRa68XB8SbjQzREGSbWTy4Kw1ZVGXg1NV24EHzP5j9CbotgpaRvkLg5Fmhhbfxv7F85FtTZJHScGk8fP78qqe",
  "key15": "zLy8xAa16Gmos5qKbbXnsjBiDibnUQ7ehuRaZMLhpfdYfvjNGg1exVQWdZmC4ggX7FSfmEFtuaHMzhYzv17JGRC",
  "key16": "5ZGpvFA9CvkECVGuJqefoW7RcvqFpxJPctHKZHF5Uz57KhUJz8beCSzUSiaFf7gGwWnMaW7LDXK4UuQAXSihJsUH",
  "key17": "2F5pJHitorhGfVYEawqG3byFV698ZES1yonDLXrXR7BGd6FpPdR32c7iqhAFzLRuEZXzF74shC68C1Lck2aMnPdV",
  "key18": "4ZBbRCdx1TxTHqQd6AQSpRQLXuPjX91TbGpRgtsMkXZzccXnUE3fgZcZvkfxazXCFN6DjHV6bnqMYjd5CTRkVjnM",
  "key19": "52oLGo7JVc6f1z3x3Khd3MjovrvoyQptDbE8NUNitJgraRPJUKJrQ7fBdW8fmdjzAxL5uWSn3uQsRoEkMULdBxVh",
  "key20": "3gNaNzZtVXYmaFqGgpq8r6L8iVBFfYhneNxQxtsqWJQVHLDZgQ7SMDoTgFgtu5Djxk2gS361SvEGz14dDVeFjcCN",
  "key21": "q8fkT3mxbqkqB2ccHmEr9eegn4rD37LSywd171foUbxTWsckdFf6cCaAWPAM7U3xL5jKNzrBzr8SUvPxej4jWxG",
  "key22": "645XXbqvCyt69DBAFQvyR6vyb1raFCR4oMeNptSXdBnapho5Sad3t6JZMpVVei4L92r7HBwkNnG5z1fw9erTEwYo",
  "key23": "R6Rkh7rThL4f2tiD5Pd46FRCPvaVYoHRpG6UgCwJNopkpsqWe2TMgyVNpQkWgAep14nd1GAT34EQDMZEoUNahzw",
  "key24": "4FU3GJxwgCFrNScfLfrzut6Tx2U5LFnQ32j2V2P8CKrhD4MWFgGhtKUnrf8MqP7ev7aXwBVHAhgnEiKN3NJY7U1W",
  "key25": "BEnkFTreMxRk3RovpFD71GySCuM57g1HSGT25XqKnMN2SFAoF7Hfv6p2dbaHK13EJMiREbRxbyfaR4jqzYdPXGv",
  "key26": "4q23UMeSDA2fkdS8CM4E4q3aogGY9CKxYRvTcRwMUzBDoudUKjtm6ZNp2ZVERFWdGczQBvvMnj9dvpqJbwNxj5wd",
  "key27": "49B4FZ94umaqYmWt8htc55z2drBebCJJDQYAvBvDTcwt7rPJZabNgERheHoXW9grqf89nT9QdirAPvqadmkv6NtU",
  "key28": "4WJnc68qDDMPwSwiKMKDEjMJLYWh5g5UgGFnCnzx3y3p1SPvSRq4Uzma2fYqeoqq4Km7fTJg6k3S7vXp4RLZhHGX",
  "key29": "4oLoSkgtnHJA75U5r4Fwt1cLHfeBnLh2JQm77SMcxkKTGBrPyimdC2aUfxbTMj1NJDWn4E1JJ9UAnctFJVCEY5A",
  "key30": "4CHdmFDp5BGi8zXMXWADvhuppKENopjfy2KkyiX8oFTBwHjTvEoGnN6GecTt8rM3iBQ6JyX7HoQ4Kraw2QXmqSFk",
  "key31": "3DbsSQKGLaRu1v3XKVwxQQQPWq31dYmFXRV4jgcaKTnHwKNibNtm76TunbLMcPmm84LGNdP8ga6eunrbpg6eGvbS",
  "key32": "61dFsbnE7R2awu9Yz5ew16o7stpbJKuHNHs74fo6YDhbM73fW5CKhipCB38jgEngYLmGR4emYkVWUkW7JAFGuYTo",
  "key33": "gG3QbLRiRAzs6xWN7jXDxdY7ckK6YbQgUNwoQcnwVaJgHFCNgn6j6HGYqxfxJB8kED9vmDd3Yh3HTQuvm5Qoodr",
  "key34": "DNjQ6NuZnzd17NcaVyhp1QuzYkHKebWK57ydERHutsBysPZGqxde8zRkFy3hEketoNoH34RRnqyWw3XpwuyBBKr",
  "key35": "4FQK8bxXTnNwq6AFKrnmUfjPVCHGeF4ZnYD48ATxsU32BCvSF49DRWir7TCZb79Mg2NT9ZRukM1mjeEVSu74TzZQ",
  "key36": "3iQzZNHWSAh9A2oj7m1Vr2bXPrcNVci2ATGwXqQ53aAAzqQSNK77R7JK1FUn6Z8R86GDJzHHhm7gN527eKkknzJR",
  "key37": "2Ux3HRuzyV4N7c1mcfBn4KKwWJK6TreDo3SUKqvoggkvry1pYgaQSAQ9njCez9eaEZUfqReXXhDmiVkKbCDFea63",
  "key38": "448VpAhMAQQunGtcCLpvhzHp68UZJPGB2CgGWFDDDXmDQURAiLATdDeKggdTHynmDBwnokVwjpXVSTdyecporu14",
  "key39": "21SFWby6yQC3t7nEAwBWUMJNEEJ4JJzVLUsMDHk35R9BcTe9dNrbyjMyk8CFK3wZWTJK1TAQNmF6pPiEWm7LtGjH",
  "key40": "4p5Yd3cFfZMJsBJvgev5GJkd4xN76Q45hL5NSXPccpGdjjmzrRuu2RjRyJ2bF5sqZDFppBy4MNVX6pCDM98VHYur",
  "key41": "566tjDGP9cPTJ8kTNvF6d2smmpZRdsMAaJBRt4YCWronMaytfxRAFV6TXTK6rdbK1GUZq4Eeu9gkuStiBNAjRPjS",
  "key42": "3rGQkdTfTv1LgnGiXbF8WJgncZJR28kqvurzYmPke829XSc1XVAyfx8Piazu1KKVbXrD53G3uco1xBmCgcf83qyg",
  "key43": "2z5VYTmDtYBw31S3q2MmtAYGk6cU1AHhwyiM2GPzDYr33jXP3wbjV5d3fxByyRJEGafCtHKs9b6ZU3fSRkUyzPhZ",
  "key44": "3MFacKDGnFe66JnQAZ7UA8ts9DroaVF7fhn3QHu8QSfiatMFiHT9Mmwk6XD4yKxCmMDupYBPGQ5t5caBxfeSpCK9"
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
