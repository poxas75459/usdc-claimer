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
    "2RwsKmkjooSD8sYQxz2hsrmMA6bTPjFQZG6i89845BoZJsioXVrjCPFHRtk25HM1BHmk4YLTy1K9XSFS8BT1aJpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zn4jrXojvwf17UA76P1q12tdErTsWLqaN4AHPhxjUH2nxAbw1dXGBHMU7E7wZTkujJvLRYGpjjgQNAAY3gMK9su",
  "key1": "4CRXWYTN2sZrjj5j2dCPFnLcdjTFVXjZtMAs4F7JQ9TncfHgYf39y1yjiRDZptDPgwYZWjPfd9yk2Yxd5ZKHPtRc",
  "key2": "pTHVC27oR9MmVvNyWDSMv991U5DZB2spGnz9YA29hVHLfz1Yt33D7jLpBuT8rQ2skjX2BzYGtaejVmABF3Ec7o3",
  "key3": "5HBb5J5R1VGr2EUwduE3RRnC3JwstY4S5twio8sVBr2equqwaTEfCHEazQMYe4LR71HBZeGb7b8j1ZaFYicw24v7",
  "key4": "62phFjRnJuefCfvUZeHVxpo4C9FxsSrGCr2nt6z75hhjjcM2m6QZhztmNY5mT4y7NpPu33hrKEvugVXZMBKobqjH",
  "key5": "av1uurXv8L3qurdAbPxoi3PMKebQJsnzoeaEDYfDbzKzMod5RnFEpxaEvQzpNSkYw4hrDNmchSgSiDSx2TygR96",
  "key6": "3sDtKmSqYAU4SPiFV9D2dPVn7ELxDFXMJqQ8bHUCKrd6wzq1D9KG6ffy9JfsaUubo4YmChLPocY1WBmUiCbfwoVr",
  "key7": "5AMMXNsoxcJy2CousShjbdcwJiKFE3PRdms6W5BXnQDPSFy1s6BXqCk6qSUgQ5JvFpcTcqANzAZf43WfWPXuKzNw",
  "key8": "3cafjuh5GBnH6QGsLzzFYhXZfvgjW9xsYoGaFQ1BozyK8sVHHTbtCTA3eC3zCPHDFYBGhfSZvbMQ72UwFPdHfwsm",
  "key9": "ekK43KeDgrF9uweHrKkWuXcuv9kVne8khVMgxcnNtfEbigmnoxZ3jQVNpGteX3isu77AsgztZ9mt55fdf2fJrhf",
  "key10": "s5GTryVBgg4MGvHd8R4hZqbXWzgwNwTEVMhWZQVwoGYaDkBvBx7fbp1rWYzJQkQ7ChV8HdCkmo7g43HrJorb2u3",
  "key11": "5qxtLj3uBDABNt5cSBzGwYxPsr61iwcNkSrzomTYmyyXBwdRPUS6FAac2xZTUV7SSoQJ9TQJS4nfs4yzncFJkhRJ",
  "key12": "wNNSNoiq4QmSgmYtSMKV5KDADgXSuL5LAvRmKQwJQh8qwbZCxaDAKM44txa3dVTg7tAFnRy7CCqW1wrypKDJBTC",
  "key13": "63rtFabx4WqhksuHgZbehQw6yjs88vzRmvx9VCQHUv81AZaQqtjnWD8y1oqJdSqBHHRpeZxZVVFGBXJPADFVkw5D",
  "key14": "8ytD9JPU2k8Z3Rn8BEYsFgkpatHebcso5oezvi4gzADupwMo39nLiHUUHiL9UYMaDYMYedjwtTUDxo5roDM5ZZT",
  "key15": "4HmyhzGm9byZKiUhEM73H93VPCa6x38YKFsxnHsiznV8twd42z1QoxwTXbDr4eTr1vXzMafmF9i8vEdgPWRy2idR",
  "key16": "45RudUmdfGcKYCQexbDPn7kfj1SoKNeCnpv5EuNtAe434V73rfTBQ47guNEtEGf8B1rWQF28Bk8p46eedXaegZ9c",
  "key17": "5LNNNCBhKpzoPUwDderB3taaHaifNt5MMRuS3S6MkmGyYqVTHo9NZ1aVTYMXf4jnLkZFQ5ytUq8q55pE6YtfVnjs",
  "key18": "2XbQwkQNA36a5GjUqchuf6U4srTGa6fnTcq42EqxRWN9o3eE9FG5DFD6fS2m1ANzW5HXeLc4zgHj7Upbkcj1xMkr",
  "key19": "2QFy6CrawgZe2UTYj98Lt1ahJvMyr2AZUy8dxx76bweG1ZsRT9wTnzkW2asPJJzu1BxyQ7eCf6aTaq1vcAvDBwoL",
  "key20": "b79eEaWkcmEjcCCjaypQ7HvEKjdVVuBa3Bms8JtEVhfuckzFVmRuAjmpoSj56JArBjY6xhbYvwZPnJPXCF88VYG",
  "key21": "3BtCCnBmnXf5YLsb8XuNRBtQQknasgMoQxSxZ1SwMMyQi27xCYGGzHwD9pEzaTD9cxx1zKs7oa8GYQfXa3jzcaM2",
  "key22": "2gqZRjajaSXjg6DgyAeszmYX4TR7GUPKtiE2ed62Utoc8mqrDoDM3xg21xa1GWBuDvVNCt9svhjKjsqWDZTrGAAL",
  "key23": "4zFcV6P4oPnxn2NSGDEGrBRQxNHGe4EH3qiFKHVNXTXePZs3JswwSLjf8yFSfrPkxcD6ogbmEwrXMEbenaaUaYLt",
  "key24": "4qbxqYUgenFF7qgkeYeT9kK4TuGNikdnpHcJLa8JJ3ka9VkspYJ9LGByXY1UcQtX515cV2featSgAConNgJ3M3em"
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
