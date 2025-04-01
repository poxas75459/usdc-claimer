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
    "46P4PrxbNARGZcHTPBgNzXu9kXgCoSPftN2a9omdzp6J4nSpKaHaZSz2FYJK68GC4V3qv7GMKBbDNYf7cDp47sdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mprV3VNAsLN15QeYmqL3UPFJhHHteNARJNoDyEiJQvJu4sXnSiahFanFjmwGvot8EPM1bChhvb97iEMo5K1e8mL",
  "key1": "3WzTwpabDH1NTayo2xv8AJnVGbLQfvDzspV136MtV3r3Tz7zKEFHWZRCXZJMbZPyWeLW2GEqKSxk3vkgqmXF78qa",
  "key2": "UjmWgkdAkVQDw3YKCfCSdTi3kDHUqaVMyMHXEUjLPmbGtwpKugfPqHxgMnmbf6QK4SemouwbZGS1W3VaSR5Awd1",
  "key3": "5sZc8hs6hECs2NTaDkB1XeekABQ95DefEQtnpzBi8EoXNNktAUKwLiARhZLXdTojDHJ53HAYBA1Yq3j3wyXg83pj",
  "key4": "4jNjC57PEpSs6WaEs1chuqyrhgnthH8PjeM6vVs3GPC4ohXjoA61iC3VYpSTrTqG7VqbPkxYYPBTsmEnBXo3Wbem",
  "key5": "5aopJ8fZ15ULhzorPLQWkzJ7fJUZn9LJUERSPtrcjQYsRK5EQWEfM8HMyoCSXeVHhyCRTakEA55zLsQBpAx71Hof",
  "key6": "5pSmm686dSsJS36SZLpQ5B4gNN6eDccfojmTD4EBzVivTf4KHYBueHbxmUPKRjsQ5bEaotYuqLg2BfSaYEmt2goa",
  "key7": "21n1Pd7wJpDiz2m7ykqKz51GH5BUHdxyMUhZhgrXka5Gft8sJBx1eSs6APi8d4DCAZimZCbavNGADkab3EyziBPN",
  "key8": "5VrYRJHUPf4tSFchvibHDsYTYsXJ9FZppq567dfAotnsUm9gprF6G3VKmeQmt5o4mDR1p2UvAoXGQk8qTbaVkbco",
  "key9": "51C1zqUcKWAPqibEsigPQGwR6A842HG2aUBxbBDdBEdc53FjxD2hUNjhJW7tWp1Br7FntjffwaotrKPHCtRpHGns",
  "key10": "2pJwkstKxfV2g6BhaDKaXPbm9RoAKAyYy4XjAw9tfUC9eTw6QiNuPBL359F9G6isjT3VcG3Y3Qc5te4eYjjgRRKe",
  "key11": "2PdVBmzUKHsvZHjzWsSSa7NLPoW36Ve7Unty7f3CXTuhxmxNm2PuJYmR8W1JqP9QK6fmwSFkXSmUCLj5juUFaowt",
  "key12": "2wH8mwEb2P72Y5tEmpHti4AMnu7qecZ9rQoHQciVpP5BysAbaCnWK6UdjWqHQnBZFUam6v4ypb2bKuANKewefAuX",
  "key13": "3BFeWcV4KdjeBobwobDJUetFjpGebsQzftLHxLqibND7JZic5U5sp8GAefgQKExam4Rd39Bf635Dec6MNR5HZEA6",
  "key14": "4tuYFQZ5vMzGKwS3AUUWYiwCUkKtJyCaVMFqCM9zdR2dn1UhgJpNCCwZsFCSAXWn9DqEZwTYDnYimWmig7thwVgD",
  "key15": "55hM4RZ3eP9imjRiiB7uy1j7qaeqoiMLobDwRJHjrkM4vfRv8f5hCJcJzJXKa6pGR4G25RavsL3dyKKVrm7Awvn1",
  "key16": "33q4R8RGusc7mb3pZeQsyutkPNTuopS8pyiKRFBnR2u3KE399kpTG68rFNPPX2KkcurzCXo488WqBRuwzRZwEArV",
  "key17": "5PdvawyxMBoBUCdJygQEMtTDZFcric8BMmtFdqFCpzZcdxmXQc8mgBY2GqT1w2LvssAiZZWW1jBMZ2zYvMoP4FVV",
  "key18": "4hc2mFVsZPHq5wzdQvFEFAabcCS4kDQHgwH8GoyMEQZonhVCmRTHSkA1W1wDg4TYao5TTP7Hk68Jk9DR2xmRFnpw",
  "key19": "2GD94YpNj98MSUZiF6W7Lci2dntHyyUd4wNfRaqXh8RzN4fnrD6uwcf8yyEcrLEYQq3qRkoD3FvYAQo1JpwLJqhT",
  "key20": "41DMJpx3gAHdsTLFUTDgwgoYFDM89nw42VSW5QaThFty2QvYsXWHFYa7THxsf91tbfsjbhqXLfjEZydWcZa8wjVT",
  "key21": "3iTVVr1C5YDdPia18uD97AWY1UGbRCbdqKyQhMDiuzTNSPhbUUeRH2E5nwXHeQp9gbCKPwDJs5UkXVnX3wSZrn3r",
  "key22": "4G3DVz333GtXeyBY53QhV5enXEda6X7FetM9jPKbFAFwVaoFiS3eZsWbPvNDuEAPwu42P9494w2pfKNrHiqqyT3g",
  "key23": "2oJpisEoC2pbYpup7Saa4Wt8bw7cJjXSHor59CB2RrN7vJaVRkZ14mBLX84oRRtEZ9T1t86KYXfykjRbarTMBuBU",
  "key24": "65SLhi95qiG8akWBbW4AaqcpA1e4xtxpuEMLxKcgzg2qFiDoUiTVDojfJBsPj2DjNCVfe1A471r8LiZnnP2TnQEg",
  "key25": "2JaSg5GqbctX9wWEnxFr5c3gMms1S3ZYV8y5b38n7Lbw33SWvpeoW93hUBdqC4tK7bdL8iZQYBQus6B8HNwAqNJ1",
  "key26": "McZ5xFyCX7JXqArWkv1GVw3SaFxt5BopJUENzNtj8KXfnPhPU7Jjd725QK3ekccx81bsM7cRkAJ87bfo2xVEVcV",
  "key27": "vRLn872hyDDwffBcakC3cVrwdSunnuEqeEfxDdQNYAmP9pE7bEgHVHQ3kqubGrdBcNnMZ36J4U41iGAS8Za51jU",
  "key28": "3C1cotikGUSndcnwzyfv9gmvPvQSrTkirtjYRoA7Dkob7v3BU2dFcF4dXHT6snMtZxo3smMvKJbxAmvJ1HmHkdat",
  "key29": "5bT1N9DPseyRdwrc3886ctETBCcoDyvd77jGQDfzrebhnEDhmskueHrc8HkfUBxqHFsCinZfybwoXJRDQsnnoTCX",
  "key30": "2NuFybVaNrMwiR2fR8Qm48CxntizBZoZkhnzT2NpcTa64tJHHyE6UAzcBMFD49xUXUKvkts6j8uhDcS8ky6XbpGe",
  "key31": "3yu4CQk9nx7P2qFQZzM2L8dPmKcUyC1hsFZLMtdwtYG6WJgZZyVY8wYq7CaxhqYfSDYGom8xZHtwzGwiyQ9nyzjc"
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
