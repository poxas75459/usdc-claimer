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
    "4tHzSeKsziJVafLcjXUzooLWmsrCXKCz8HowmDxciTffULUTRWt9Bc9c5L7JUzDS7ikj9sakrc5mfynZejJ2K78z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LXb3cGX52tWfky6hXidpAYeJE8PvhJJxiNmoE1kBa6BpYpRKUCW6CgwKrmQWAM4HefYobwaBmtfZgYzjS2QbLCE",
  "key1": "B8aCxXhzXfj4oGoxJY7csRDZxdBmtCNXXZLvj5DrekkoVBDJg6v2Bhcyw63XMCmSfzxt8ZP4benecWhX2k65uVm",
  "key2": "wqyskjG6mzoJfE4hSaUGp6X34TihfsiHv2aES7fdAe3ihCeXswzfEf4SyZ3Qf1iES7eM5UjQ1JRnccv6fXLcXGG",
  "key3": "2wYJAU5cG48MFDoscXEZG22CwCiiiLwh66TyJnpd5ztjRWX36iojYdRB6HndEhA5J2dvyYX4BCsEMUcqgcpefXPL",
  "key4": "QGdPgER1SR2hPXezn2iFzJSCMuKczD1mmBEFh6N8R8TMT8AYswFgAFbeqwV4GWCnaYw4bTyk1wLam4Sm4mnMXTK",
  "key5": "3XGSo7H2tYAUjqreoVGwkT3hoKuDc66MaQLycL8N5mqTD6mVhez65Ph7zBQy82KZ4BU1QZHjhyGitdqcUPTEM3aT",
  "key6": "2GpZzJCgzt7YzdtSUEDy4pFonT6VGP7oW67DeWMvgPwwD4UUReXHWTasaRpchkHmmdJu2iuqeshfoc8yppDb9AaH",
  "key7": "go11poVwrWoZSoCECqey6Bz78imHjNRG1yUct6koPFyYdoVa65kP6GEf1H932chTYG1Ddzr2Bx4fkqihZ2mnUEo",
  "key8": "28Fo3h9aVAQHm6dK8Yikx79CPE8R4RkmMycfY2vUpebxj2MDCAQ98JCvHFYeGxqzS5wo7kukkuVMwLJuasUPuHYW",
  "key9": "2627wwUh8QS8cXKencrJDWqSpZSttd3RTVfzgtPcg3gy5LwW7gLUd5j4mkDkP9JJgFAJtwgynw5ne8FoDur9phgS",
  "key10": "4ikofVmdZu8GqCYzi5s63AsgkqQxUnHvZiKrciDfHwbe4e6TA2PrTkiYa42M32mvp2K2VoYGUw9v1RjGqzDhMQpb",
  "key11": "273tAk2JyYtNiB2MiWnaXCPWqwPzd6eSRX3qBBgxzDNmoprvUW9EAds3ivumjxm3sAN66bmFFs1ZbPZMMs3qR6aa",
  "key12": "FgwDEueRxM2gMyreLCdv4Rs2A8Jafz3Rk91qwaNJ9AoAMckJ12qm9DrdbRoyTyMLwBYa13u526k4KSpdc4fELW2",
  "key13": "2J2sYK1VDgiL4oieDwuAoFJjJy7qD6LWNyeRxoqd8QCRqgp2UDxEVFM3y1zfYar1M1CBBz8KHFaSVQqzFjthNQa6",
  "key14": "vdFj1HhLKxgpUvV6XKsJ65vzuhz9E8R1EAnfRWnc3aub3E8DiaRCqkq2tYcS13Yefd8AzA2RFttP3P8vMqyKXYn",
  "key15": "yLuLr8kQzkurcfktcMnkztRjAyMvtqyh1ivbMUrunaq9vNd94SfVzwEhE8v4jMC3duDZNw9ikrfX3hvPjJrdyFV",
  "key16": "5P9NpEMYN42BsLMueiDLAuMnMcZjPWdrFtzcUjsa5bSGNXmefBbzfpbBaofiF82cmHHhUReNmiF5wGg7ofjNAQdb",
  "key17": "2R8DZhCqZL5wed8AGCXmqG1d21jWNufF8BFJNu1qTJJmmhhqdzN2M9KBPJkZ9Jbp3qS5prELKuSagY6B8jkuzw3T",
  "key18": "5LhshQKdpgXazCcZsHM9yRhK8z8xm4DWqyjtS5C5kfJG6H7pYoYhJEhwRjedBiGtQYMxrHimjNvjhXRViMERRips",
  "key19": "4VCX6H7EgJFAGyFSPtsPLk8Uum2TUCUjW7onXCfMuN6Eh1VGmUvXufNxGymNdcS8WCcFHarjwzM48ng2DeXyi6Fu",
  "key20": "9wq2V32RDXdnWisQZZjTeMV7jD1ZoRcTpkSbRm8p3pWHqRrWYruYcSax8kXVMiMDoy5BgWENRzhHYXhrHJtcMpz",
  "key21": "5fXN2BWHKGxZMV7bPxk368ePRpA4M44fCv9A4VWyNk12XYWAYTGGDb1Q7xv696rA2Ha6DsDcTLrcyXsiXiP8WCDH",
  "key22": "46CubEiZtp88rvwKKmZ4T4UsZ5xgPheTrwYVccP2KDMBVJq3V3sTyQxp1HeBFYngLFDnE6SL3nLMrFDZP6VoPV7M",
  "key23": "4SdkAiemqzopNcKSxRmGVkVe2fWZXErQsXzHYV35q1ZUzCNb3dSBS6mRz9ACrm6mWqmjReeMfCDeu7ZSUuapPJtY",
  "key24": "5NQXjBthSqQjNfZUjERMrXGrsXuYDsza3FKzrqwPJDvQJsjh5XjoMMMpcmaePd4NKP7i4D7AbS4bFAAEn4ri9oAn",
  "key25": "4Kf9XvkGcQTzfTRecmAE64u7wbd17CpYLSMEovpgRVeTd4TeD9KFtbzqNNF3urck2iXL2neW9KWMQFjEkXKMxczA",
  "key26": "38TP1gyi3PkVUBzER6TqphTttsm8c4uzhrQMVcZCdQJPZtG8GaJpoEyZH2cPN61kcyy23mRTytAiSBcc4NxNifef",
  "key27": "4ZFY6xrvt5jMm2ZJ1SmLiz1QPtN8C7QmXA4Z26ggESM5vvkM7TRwECszsxTdAgL8KA4egtZrokq4GvKNpbpcpmym",
  "key28": "22JA1sL2uuLKtvddcKRHQzVP1dku89yUovi1Vfh5Td7xw4yExnFZTpKVHCpjECgrJ2CWYr2YYeriEKWaVpup2Awq",
  "key29": "3N7fjCfzBEZ7hbMRuuGPydP7ff6tvSCUHJRoDpmqy5sRyNKMqpfnBXLQhfoz74bs3GrwJ1WkYkavBny7bomj5V2G",
  "key30": "4BJdypsec2SzAQ3FXDVEVm4kTtVjJhFJQu2pHcQCdJKNLG9Zuvm8dzYCjzsqHjMaocxvxXc5dDmMhjNXnb8DTgDf",
  "key31": "513zoUHvuRQJ6611QydUWyQR23cKSKYCn7c6QhafP92sbw7nPA1ZnaqnGURxjeSN4gXGkaBtqtrpmHartXWTUTWF",
  "key32": "2DW5Kyhr4hLCrcjzM4ojnMs2xj1E7tdN4La7mpfJ3f1oFBmRSVaWWrqnoQJfsNL5Bd8NsmyACX3FFR7TxLQxtWzS",
  "key33": "41ZEy2LYfRp6csLKFwhkZXuyrcVxxNsJUic1AsBanB1pc5gaMjgUsT8bKQYM9kUFxca5bRskfLLD7hnpNNEnLWVB",
  "key34": "2SaW9XJ6xR51nvTq9LYENC4f9Lw5epjmfMt13YhwJZxsBhhrmDaD4RCzX49784126A7oZNtm4GHDYGk9zHcqCP4k",
  "key35": "5GkqRuf2kmiPoKD6GPHisEhqUCYypSAHBkeXu8qAS9RSTLjzzDsSm8hi1CQsQNPJGLg1W5phWFUQTzxNb9RCckqt",
  "key36": "6DUGziYmAwYVwmxqtj9bA8SGPatf7kHKiF3ZisZ2fgtqJ5YVbXCYPXM1iNkEomJexWaR9sDVR4wW6HRrENa5MSk",
  "key37": "37cw8zt2Biijf6HA3K3a3X25Q2bAp7PfbSg4gxGsb4Vkd9VCnD3Y5qRiKJVoYzedcMUrBjT3yihQp7czFpSwNcC3",
  "key38": "3zeoKoGDGxR7a6DPTLhpahqNMRUZFUABrz4u7d72pgKSrGoF85B9E6r6UaCkrQ6kc62G7JYQssSfDoGuZ5uQhKkU",
  "key39": "2XXbWfMCXE5NUGw2nb9mphqx2HLUhgHWGTj6XcSVzyj5kvmw7Rz1a2c84UCmFZRtndaDJ4csHUidPDgiGfLqnHuh",
  "key40": "CYdGfY4spxx4ARmF4p634BEkqrwkTrsUt1mLvUmcWwvd21BL7sZWd5eK19YmvFcB9AK5ZSkAmAHShNw3NHffZ9n",
  "key41": "49oGYL3T4MfJuYLNzhWFBa4rrtGqdo6PNq9ecX2pVgEmu86e8UixG1QWLhRyrSCSut7sRYa3M4rhQ2oqtt8m5H2S",
  "key42": "5p1KQSthxYzNs67gUmP5oHU3w3ZFdkge44Nweva1wEmjHSg6DosVH8wrc23FC5agZC1zumk61Rd4eDZtQBtPLTUs",
  "key43": "3UVnUwSxkwv88J3MBz3Yia8vMsHTJAyKFqJ946XHaWiRZ9eYXr3PPViVFVuVWUrDfzGVuHRr6qHWDgtAuppKnzNn",
  "key44": "54zFUL1HbQAyRXmeYjdDgxdqrspFXiiCtV2WUWsEBiJMQYnLunTMyiZpwbMXZ5djvL8nBJT3u1Z2HbW4UhJmF5uh",
  "key45": "5p3Go4ramUPnTy15KCQaVMd1XBUM5zuJRQczPaYSBwcQSZuRyMTsvBBXxq6RLwNLBWwLU2sFH7VWox9eQSt4JPyY",
  "key46": "4nPbGmdDh6Qx2tTzHMEDuMnsn2qsLnZMGfevS8HEkae8cP8HKEfLq8rp6q7gaELVZBDZQxWCCyNwproz9gbg86ab",
  "key47": "3SFshNqmZtSNSn8MXVid1Y7YMLuLe984wFZpyB9sxFhgTw5gokSrtZPbn1LZmyaWS4XWStExSawffYyk8EocoHeC"
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
