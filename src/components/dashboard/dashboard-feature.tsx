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
    "2EDvnpEDnjyHFHH6Y3Xk9E2NbrFVYUyVCcq3FxXnf8WMKnGdWjEsbqtkKrkmsrDNHxLxDUvhpvy7UT5t3BN1Y1yK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DkfcJSJ3q1zfKCEHmECwqL3oHEcqeJ4MHfeCYsXBFtT7r4MyjDFoGDCvkGxaS8LjU2DH1bQsVbrTHxQS3rN2EAg",
  "key1": "Cn7Z2wtMmQzL9LBDemgRk7z9wCovH2z7uiwWAoT9fAX3w6CWapiBxEcQ4tdB63WXXuvGi6KwPya8CkBZGUvsTyC",
  "key2": "5usMcqshhRZxgZkqJqJibQqQyV52Aj7iSirq4PrTvjU8U58XTb13KyXLPHmqf8gTYK5swe6ZgeBNbpYhN48ris29",
  "key3": "3p1ohsDCv5Ue2Y9oy6XhugEbTDPFrCy4xZggktjbBHTW7QhJP8xbvj6YZZMeUZd4zqFAhPxwWzbv9a5oQNeWCeXg",
  "key4": "28xnk557mDA8zbLyMJUtnGXYQUD8BDPh5q2gGTXjRddEo91cooutmPzA7RwCzkC1LD76tewMz583mdTiC8w41p1o",
  "key5": "5QviaEBUW59CHDc6cm2VZN84iBCm1eMCHdohNeJB4HHYYTzWn1Pw8zRNB8up5a9kii5QUBkFK5xfdVMA1YJnm7h9",
  "key6": "3Ly2oNBJbgNuuQf47qXxWx3KuaDr8C4iP5sSx1zqcc1FSZ6h3FzhUpSbb5sqJtDbmewYxVt3an1qphgp55X59CdN",
  "key7": "2SvDumWmP34QWo8yHX1JyLHU15RjvyneekG9iRReCknjMVzbgJra8TuZe2KDK1WhcV2YpYrSXAM2CNntuoWQFh6r",
  "key8": "3UvjimWjcGDEV86AuxMbQyaes8U6kmfzEMVgtkzDzvY5QKEcHmFCDPABoA2VvrWc4H8vwmnmpQkZxC4EsNVXgi4f",
  "key9": "7XPfsyLibNfXYp6F7wapKztuiGnPTu3syJCamZW49enzCQfcQ4VWhRxALgk5EfiVnrAnpqDJej3PXQ4FsBTTqa5",
  "key10": "4LRYPz71akY9hzamtmFmm98JWW9nsjQrarDCSnnMXJcjf8cv3YNiW34g6Y6tCnbHS1vkrx7rg58LADwTcpZvHxwj",
  "key11": "53JBfxr52GRCekKKE69RfUsFqHiu9XobfFLc4P3MzHhncpWT5XJyUgWExxkVhENwV7Uax6PWSAVuh9fvPF4aG9q3",
  "key12": "33FwuKmXGAzaB8uaWCdUdLNEupPYh4LWrhpVQTW9D38UirCTAeJJe5E62hvU6JMmsKXkpbVNWRYcPJMJNjEgn1wF",
  "key13": "4GmqPMAGrGCJeHwp2dRRy97nveoR3V2c51pSmkGDP3ffKgC1RaqVqzUZmuVj6Mjzv4P4Rs3xpshJQnzRATJLN6HN",
  "key14": "awnoVhGAPz9RCAhQnAEtWHWtYZe7CyXLBhamybiZcQwwTuEyqNph3FisBxstq3GCxJwhcBHWFudJhPx9J9X91vf",
  "key15": "1CVFgPACPA3D5xgVjarLqiDcPfXfRNABmE8Vgb9CT4stg8yw97YARj29nJgcLxNLTX55JUSgJFbq9D3q5q4c2nd",
  "key16": "xyysxJZqD7TcTwJwXKh3fWR2MLeVTM5KvR8sD5mfAVqnW5EC21CuFuzHx1VVQKWkUe31rWr9fdqNgTHvqGiGFfj",
  "key17": "38VUGaqruFVh1nT5cjUL76oDgGoRCyCxjDaLvL3RJpT658VfSRuvaRxd9z4ai2Bdt5CWmFQEtJTM5jevxkpgPmtr",
  "key18": "2nXc2oQ4xMyUgPYJY5pYZZ65nRBirXhB8YtvffgSFoBvwtiR3Vw1yfmD7hi1HrVFqwZzjrYYKUu6pLsrufw4m7o4",
  "key19": "5KpUe7bKV5qUTpiosqD8gH9zoRJ91uvHfozE9gBbCF2fQMCunDyd42m9FiEbAKnGRh3rYEYGRcn2pu5HQNyAd9oj",
  "key20": "2WJ52AJTun5XAYG9qf9ePD7PZJq87eNT4621RHfRVxZpe9ndJMTCVvTYNAtTLETmK3bCJzX9jw89JPQya6eemvyD",
  "key21": "54WTeKHGjkWxteLubC36TzF8UkRu4Xbf2SKbrRrSanC2Aq3FDZbR8nk25z8WoEWjHeNmzvi4E2e7VwDqkDnMc8oh",
  "key22": "19jQHPW1qSifjr7NbMx3EKBTdjBRgwg3tno5YRVWNs2tTRtC1g4QqUrH9GgMSofAnksX7Ygry9GKA6eeDwELBR1",
  "key23": "5UmiF53S95gPeqQkiJyRFoBpaerfYnRHQCVsVqjCWsNXwSEq1RyR5vRynGahTP5T3dZqS4BjERiiVCmy5cYdWmn5",
  "key24": "31H6kDsZFQJm2RzJXGq3W28Fi8UCJHGdfYMsW3HENFN2UzMxxaeY59gf7rDk3MaHyvnCB3h2tJyGdJXGrWmgk9LY",
  "key25": "2GyXuNoHpuBWmaHqUwqubD7H8c3Hk3TBAg16JgULNwZEj7TM1cZn2BNAV2YLRaZCCidaH62KBa2urCzi7xuJToS4",
  "key26": "4JSr7dmEkQCPkVNDHAxdLDnvjzeNfELuhAvKvpBfWSiFJ9nmMnTmWbJzLkfUXi75AFSvsGXeqWYC9sR8XuxQSYUG",
  "key27": "L2iCTxsrWsQAUhVbwtP9jUcPZGRTheruy4wnhjvoKQv55rM87FV6768G4Vx6h26EBFrRGwx1RMJXbUJViWJp3Pm",
  "key28": "5ggWuptWV6ZynhaRa87QAky3Q6NYQfmq23XvNGtGgNxVcbLBXyCvYkBVfxoemfXRb8JaVChNu353XCnw7qZf2ttk",
  "key29": "4u9JdCgegQukFww81geKeDCfTcSA1iCKDvz3iTG6HsaGCX2W1PYZjPmwidHhcDtmT7GwJVt4YVjgoB5YemJqGFeM"
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
