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
    "3fbFjq1mHZn8dhAq4pJ4RSNJiZoRbkMz19tGWofkFZMw1Cf2e4T7oAZ5W7Thgy3Vitq3PhEaAAi4Rq1vJkupqNXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yGhLS1irFqxohFWr8GSYxZ6fbpgoYqHw8RaEjqGD7UefxpSK3txL461tFsRkrMDQDe3nVYDJ5p45JJgToF4hmPC",
  "key1": "4SdhPxcbaEmHZt2wjQcv4TBnjjAecbZcQKBWAAsWHZwCjr9qKT4GWVFDEx5d2yVttyzMFzpzYDcvqT8tb8hhPRLR",
  "key2": "3gx2uiNApT94sci1eLh3vNFUx31Z7kpiiBmjgfZLCL2ZPeo68BeYNXKxJp1raFSjgFisSrD4J1q3Qa2ZawCkz3Zj",
  "key3": "3VhXes9S7mreYJASQozJCpVVeRs7RpkwiiWTyd4141DwcCY3bSjTGC3UWFiRWgV6frgFqDcLvGZVJA942BqhidUM",
  "key4": "s3XEDd9Zq9Krirr8f8ZJusop4Zqx6Mf9zgmKYhQqGVhSV3p74QwqbF3FJbAXewNUd5LeitKhX1TsTdnH52GcF9J",
  "key5": "4CugTvz6Xdn3WF56DZBXABLeo51JZMkKAuMtU2sbpsJa1hXNSxZ9QVtEarnijtWRG2aBFaUt7WcTFncSBTHY15Ls",
  "key6": "5Bfsu5YcXiuGaPeKMjmw1XUMAt3iV95yC2SgWFRGoo8NRbFdk7PEYi9c5AD6eNe8N2cFwiw4UJ5zU8pnPraBxDxN",
  "key7": "3hvVGwiiwT7YrtsxHCWDiwuKSF3di5Hk3dBkKcVmBCGBx5H1nsVs1fmtBbomYiEmM8R2EaK9JVjAETx7dJwCBt8b",
  "key8": "PpPWD3hTu3RHW9gcujAXMjXWpzMKsZQe5tb5Q6PcEqC41NvSfDfRxd7MfYHyMvKq2iyvD8DPScoQjhLJgSW5AWj",
  "key9": "5LkBVS5HU7BaXz6PXdjj5Lm1nzWADmRMAkPAj8XzQNE1PJd5jMYydp6X7S2McfV2bJozHEke7h3kuqCj8yqCSv2q",
  "key10": "4U6h4mEoGJX1ZNhLq3MnBqdYr2u6b3DpAHJqZgNbQvqboj8Su7S5fe7Fy1fm8oDJG5R9ejjGRCRAPkxKaYYU5Q3y",
  "key11": "5E7xhb2kLk3xVDmUtWAsUQVXZ2GKeAcJ59Y9Nbti4sMUAkBjTiUDLrq3zRyyEbYU6MqrcW8kYwpUN7o6ReZHg1vb",
  "key12": "4SngWJcf2SPvNBUT3z2kmv1pCDRisibumtMGRSFdyoaENawqQkjYF46rXZWN2x5qtA6LVTUmZbyQ7qABxMcgZCNo",
  "key13": "5aciyYVgzZBkMQY2vNQkvN5cfnapH99eikz5mrP9x4r4E7pRWEzt1ZptmKZ2AGrAWnNSxN8WJRWoF5TDxZNR4aLp",
  "key14": "5zXDvbJgtdUKF2cX8NYvgy9ynwUcTfgwGH9mUgccMW1inxnhuUhezKoFx9XaqUPgGMVr6ssWjgJw9FNrQunAfupg",
  "key15": "Q61Zdetrg4pGtcEHPu33ccFgvHsU6geU27mbbuvro8fRJP3jqPzjFJzXgHc3wi6hBqg8GLbbqPoWMPV8s6fyW6F",
  "key16": "3CYCSnDvoPBd8xvRa2XWturpM6pWAhXUXJCcrXcsnsMbWhs3J888Q2auQgPD7MYuJ9rSMbg8cSqAM8DK6AmXm7Ba",
  "key17": "6UrDZPwWhMUqg2vj5KCc6Xr2NSFq2LazAU2ft1QRxo1wANY3sRYUZRqWamzK8Kz5M3tupg2miuKTCGghXqJMsxn",
  "key18": "3XGpvaBpmpm1hNjjBtKCZqTqVPye2JxLooLmacNXVgMd6VhikEK9aghJ3HXgXs2kZGpjLnYA6t63MKTrQ6DnnmgN",
  "key19": "FRgNbJJVoMCL2vsQZqM26dCjgq1AXresbaahTDk2v8ZmjcRTDLAhViDvEHfdofGr5LDGBJbewnfcmi7sCcJeKkt",
  "key20": "5CyxpCpLfgRydbaE1RxtJBhztZpY7Bj5vwkb3ZGNMq11i3bwARLxqz8n22zhVsPfaYyU7MGytkJdJTn4zRKgug4n",
  "key21": "fgftEV1oxWpei3nCKYQ9xUKb6Q9DkBmDdPA56TJSzA8MvSPFTMd29t2neZQRDCmyJF1Qz1JVeeDygWMM3UQHn9R",
  "key22": "3N3rfx6gkFawXdARku6UewxPj5TWdsb2iA1yXofLmrjgDUXaA2hh1bvPpZC7A2woCAfnji42P4rsr58kzFwjPVPy",
  "key23": "5SmiFWCAbWE3qo8PKpk1YZVDqcDYkA56ZhrU9zwJBesuDM8JtyHUbEM8FWDLAU32UyVSm9oVbNYETJ2LQBToFGxD",
  "key24": "SCv7tsgcrb8oWZhZjb5WJ54ub4CpTP2KFihD6iSrP6UoKProrCoaTcE5P5E16tQnyAxGJnSKgVuWTc1hc4iFUh3",
  "key25": "4WJUFmoYjmXnMkj8bfCurDDPTes9ywfdMZzjbcmuEyZ2CcFhGCaLsJUGgohThcxUbFoYsQbtbvoqyMTJijM7uNnF",
  "key26": "4DzGquhErYBf1cMXBKbL7XK57NJroEKVCyyvTBbtkWEW7pfbhHRg5Wm6Lm3b4NMR56i71dkJhBpB23Kcyc6PQLvD",
  "key27": "4dVRjHwJZiaqeRFkMXFPab1Rzos2w3fATCQ2N2eZEnUjBcMCWu6wjSb8Rxqokqe6SfPjSaaV6ZYAoAu5FiEez57n",
  "key28": "5EjetKwDaotrJdzMPxnb7K9TCEAxL4dZDPat2QJHhC8uZeRuiU8hdDQnZfx4AjcpCG8i1PqJi4EG4STwwAPPprSm",
  "key29": "3s6k15FZwC7CrfEDcEt2J5RisQapuM5CxJontvAsY61AwoxehG8rLML4e2i5sXG3v7KTQemgDP7EVVLYNqmnfmoi",
  "key30": "2sYXwncp7jxNDNE1f5gcUvxtzhSEq5mHSxQDj8bf8EZzBuTqxt1RaYY21zVneKSPDSfnSHd6HAfAGTMcF1z23Qi3",
  "key31": "2LP6vSpAB5VcvBb3Cfy51BW3aQsur8zFFT8GocnsPABhrMMGmYWbfcMD8psAzwdju2vAuUUdAZRDvuRGtdr3ZeNY",
  "key32": "3vK7G7wJqKCn9oi66CJsdWJAfcUxswpW6PH7sfM1s42D96kGfpPn8xUaixdfpFzJUUiez8nDh3UrbguPBvxNj1uw",
  "key33": "2TohAWZSSaR16t99u31qAQohg8W6a4JxywJAUuTkc5GESsws5P6kJb1vGEcRt6YHUAkDzFjkz8WXZ3BaoK9XRjML",
  "key34": "58ivkP4MBuUm223qqg7RgSzs2M3xQJq7pxA5LVeWxFwpmadvBnTWaCbJo2MNkww3WYjfT5JyJodUBXdmZYpb8KQK",
  "key35": "5oshAWdxrHhvr86nZGQvKY32YtQUR1u7BmoF4KMbod9QHxFsZmaXufbQxHEN8o251d66Gp15LywtmhCrnvThEzbY"
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
