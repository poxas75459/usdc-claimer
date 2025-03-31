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
    "4NZQQUGkiKy2rdL2ek28VFuUueb1AZ5zMW9sR4DuDdL1TLnP9wvL5hxCGANwnR4aXnxqpDFdwfs4xnZpVKuw7S6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HnUK1s2c1bL9yzGfTquevEmwrjLRdKZQuZZvvNTqdSCkFv3NGV2guRm3dVC3gp2d566QgCdcgLNMGAoqrpWQiPV",
  "key1": "4H75wtWNqZ1ytjwoGafdta6eXG1LSrnN7USHF2MT5Q2en2fxXRBVkfRLwUJL4FCZWHYDMYzz2xMpy9y6Dxctmtds",
  "key2": "2pyYWMX7VL5HBpog48RDoxcXHjE6XWz2xHN4d5PY9Z5YmCYwrp2RExA7dV3G8qxVQnb6b6kKKmijG98nbFsBh3fn",
  "key3": "4KWZ4usv5LidFBp3nmNW462QMU27yr4LAwC8jM48sXCBKLymyqqcoyb6kKEYPCytPikvkLhmFDu1RYdgU3aR4C8w",
  "key4": "5w2vzBgMErhXudm358ubcBtTzCJaifFeDKZ3a5qVdgA2CqtUSRGTKkVSzhQ4LN5HUGPkM5vsFKdc9H8PyTzfwje1",
  "key5": "4ifGsSeecp5fUpAiXEzGAgRNPGt4vesbpXSzUjjg2FD6epvgFPeUdRDowe44CMdN7ssGh2nkFro6jznQXVg753rN",
  "key6": "FXtf7NB7TrGMHEd5YF47VVP2xxoyjjh53L8SmW7EoVC2DZv636Gq2AhRC7hwGUkZK4v1WJuA8gwHxYzenVADGw4",
  "key7": "38Ck2pDAVfCK8PbiEwPj896YRAfnexSFaUjaaG7RLDwvhSTZm2q1CFUqeDta9iPTxT7Q69MFLhQURjTHJAWzjSCG",
  "key8": "3BeKBehGCTc3gPayxKPkFFG4YJk7g9jmMqnEgmaGvEmambN8w8ZGYWEueEsJmjqQ96ywZBuyb2vYr1adbsKX25Fc",
  "key9": "64F6fbZC5NbfLw1NYjVviY53CHsTtkCviMtoZZzKWQ2WpZ1AToCfSGXQr421PPZnWwzt2Zz11b7mDTy1zWi9XKQe",
  "key10": "2za2oqpQEBsJrSLUr6a3aCY68LmBBKdV8ZMBUEdSZNDBsNQuceG7fLMPumK8JNuU6br73o3ucTbLJy4hywrPvCha",
  "key11": "5yh8e4LjrUTJ4ugiCSLihHdwk5TVPHJAjRtznoZEiBej4BdPvJ69s12WSEXNu9GV7w3NzgWnZVpfpegAPVYjiLPP",
  "key12": "5qFeN7BuGoEbbSj6u79dTnYFFCjpF9jqRV4xZ2LG1e2XeDfCgBEZw1yofJMxDcxshGT29Jh3Sm4dDpKbxmUa54US",
  "key13": "5G2YqUCu6UnKscoeqGx58ArN4s1FRV3Zpqn7zRQ4EJ2kwLTYoGGtoVPrAwzYyJN2tjU7t7NGRLSgvozNHxyS7gXA",
  "key14": "3XfkdhViNKSDiU1uwDzA7KtD48sy2GkCqyoyLHsZesxwAC7inDgsUznNKxZS4PLCvZDzqMkjQNCqYWWw7gynCCwK",
  "key15": "4TVW95Swvfej57w5kHoX8FRpDPRA7HypmQEwsgqCMPg4sqsxnTvTUmhoAi5bVGwP3MkrD913xmRt9JuVjEpwCaeh",
  "key16": "5H1xgq7TzYPqyAgSuZBrnrGxKDdcCWr1s98w5UgGvHcSmmt4jJVekQKh9SfNcrG9yH2zvvYb2xWysUQti4GFj4vq",
  "key17": "rCr9oXXwBoTXRsL7JxfKNUUWsJJx1a3r17stELaWBu6MhS9vsTADJrutBiY72sjq9V9sokaqXZpTmu8ahwiFzvC",
  "key18": "BxbGoWD4zKZrPmQdadDwKq5PrsGiSuXZguYAiC3VeFLejbrmZiZsrwbHHdsPsCgwLZwYahU2gHGTnj3VtfahV9D",
  "key19": "yusZ4p6Z4brqQbhSwuAUKttcnhhCkPxxU8RPmeaSKP6dokRKR4Uhkx41A13Khzy3UhoqfzFVjx9x6v5DwSAQToN",
  "key20": "5XkNGwg9KAUF3teC4W5BZVRTXpaMFwfGRDPHzBgtaXssJBe2RnYXLrCqLswL1s6mxvtq7cRp68MxcXBmF9y1qgpN",
  "key21": "2jChdTPDHYUXG1Q1ZPs8mrN8Nq2C1VHLro5tUeehnSdJy5k2qPY1ezSKJ814keZRSuaHx4C3nxPZqnSxAZwwRujN",
  "key22": "4mi1ZuCC9CU4x4Vp9DmivEy243ipebRKNgw6Mzj66JocZMCfhSncNkYU4Thake8MqwwSKDLyjWsmuoiPVrN8BMwM",
  "key23": "4WCL1HCJDwPb1tYzPWscXzmr9K8X6EnVSf7ErPADkKCtboAFzceihKmJuAUQVLhcGGgNF1gZc3Gyp9QRX7r7JD77",
  "key24": "3V49Mru8YxJHjZRcoTm7YpNeRrxZGdxuk4j6p3vam2wtVzYwYpVRZSqgy1rACj1xfkcBNSJnbs5wJkFNyoPEuaaz",
  "key25": "35hV8vi1qFLda1HsKCaPXEBxGEEHfLFxe3XejZcjDrLiDtvf1NwQfG6EMLnxZPEcHeHj9NCDYdwBKPLmnsmEnWHW",
  "key26": "63SBVYWYaxb943DdsL8byEFbuTjRB55tHtyujwP1SfqDg2uCXtsJcLeoQx8mpDhnhHHLWAJEyjvaB1PRudc4HYqX",
  "key27": "34AJCLJsLKG2QUASFb22Pijf8YXoVqqFqEhpFLt9wxtf5nvMD5fMMnJ64KoSDyryn7oTRXoHcv5KdacWC8RXbeo5",
  "key28": "xCGzha6UP4rnbnNXPcYHns3fkSCSgh1pe7nHUAQN1vbbHBFwtZiZC2aUrzXX9vDne222YETTZE96Y9ZvYPoTjL9",
  "key29": "2ma6nmufpmpP1rSS6KMu6UtTZJ9DwqdmvyTnyDXHjnz6RdwhazNkzGCCQzSALXynZc2a8n3Jbum6uEQtnaE2nJXD",
  "key30": "4Mqvqn2o6kMfib3Qw8gKeTPp3TsZ1ovJHrcX6ACqsj2JK6ApLBTnbmvgBn92zb7n9Fqd7p8gG1L3qnQZkUMSqzE7",
  "key31": "2prx4FfAx1kdgsymiZtwpXvHb9b3d95U61fXB15xBRcFvQ8aVLn8WFH3nGRSBzMFAQsMWTZha5zmCbrK4bpJ5Dcq",
  "key32": "4yG6HProHsnfwPeVUVCoqBEkgEJTS7BAYxnP3wvLmCNquYHMGVtZRpJmyFk1QdRxnXeTwpnGtQcr6jswdyiDxB9x"
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
