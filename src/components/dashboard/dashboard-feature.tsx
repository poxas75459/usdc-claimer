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
    "2KXpi7UCbTgFvrSGrMXSPocz4uVTR3tX8NYe7bXx4iH8v6twKuV1hjizNEqyXUMBiKmHSrpCoQZQpcJjFszGJNFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28KE4bXCWtAmhbtB2t9yashpZmWjf4xeCiCiwuunxhpEYEHQ9nfQm3W8YhD2nqTo5XCdEKKP1scrrxurTUMEhAph",
  "key1": "4muGq87EmwCDJgWzzpboSz2YpotuvGkhHcPPbRTv2j1xAGDDVMnY5FMb4onFRj4oRk6q1Ag81jre58EsoPV38vMD",
  "key2": "4VdkC7RFcP6e9x8yXPiXTA71iZ3NJYu3Xn9LSjkCTNkMGNNUZxgkXTcHDH3Fb9JVWkrCynPs1Zd4mRMDGAEsGRYt",
  "key3": "42KW9uEjYDviyHwEUvnuXbXyo436zMmWtd1uutuGd8cEY6wwSBJNDKksEdLSkmrjtN3Gz3LyFZLW4hEAR85Rejk1",
  "key4": "3jaq1mXTrQMuWo3Pnd1bxxxsM2an8EC3sguqEesU6iBmSqFVLoECZVxE73m7mWz8eWqzeaGJF7HSPhb5MqSXjgoL",
  "key5": "47LtXics63DMHqD6fnaYjdSiqdmJNrvFBmsBjAi2zJaSE6vfaav5nVDqUqe8yG275ZiULzG1D626BZHEou6wix6i",
  "key6": "4QpDrHjkrRZkcFEXgEcA8f4CxrENybAnesiTyNt1zFTSBSeN8uk735GDLMaSos3M7TRgRT5zjbAWqYMYNqKpEmDM",
  "key7": "4WQHLk7cSs3E59Gp1LrkKcrjDmkySNSko52XFdmFSeMyGAfbT9FA77rhUwdqB3NwNTgZ2pM7ma7Rr2NcTf7y7rJR",
  "key8": "3HSo4oA78QdvsJ1WeUPycVdvsBZfuWR7NYE8jDZWbcRqHDbAf44H9NdA5ZWYtiuUpsJFnfQUXWC3RyWkSs1DyTML",
  "key9": "2iSycJsgqxaC3aDwmFXmDmdEHheviURXYa3C2WQD1Ypa4efDNWVw3GgqG2Y88G6dQUr3KBywfdETNDiFmVkcNeRv",
  "key10": "3bP3uR6tCWn2xSjxm8dWHp8CxMNkAQagXFiJnVyrgiNx5CDftKkoXfjDY2phEyeFDdALdcfXDhGRXEWjqLDvBncK",
  "key11": "QwSs5kn1J7hH9mmpSuJAsFJqmnsdqFKWNpfBxraiWdfvqWWvjhocSEwcRdB1AjUWKooeEAsDZEQk7czcGiJkH8K",
  "key12": "5nqMwkCZUfDTvpqYT1EobWZEUPSa5Q6Uj2YTf7wL8qBgpLyYcBKdPuMPw3apF9zimLFdLbV3JVd9q47hbymM5Tzw",
  "key13": "591Sgo3Tt9EuaJT3ULTAMPHMzYMXRaC7tMzQvxTT9HvjHaNwAKq5FMH5o9iChtcvTWF59TMPDHpbkoQG3fZHih9n",
  "key14": "2cYN4RkkYAb2EzYw2UgLA1G1zXTWutYKqjHwAwCQ6AYqVc8yPkxiD4ESWZj2kvPUNhxw6rj28oNrZ2wGdTqq4Z3j",
  "key15": "2JaMkrFBA4amq5FUwK1nv8YCQzLsErTX7tr8sKTwhie9mTD3HqzbvXF2dHZz8ZdDS3viTsL8KbhW3QDB1A6MrwMF",
  "key16": "5TzuLGRpYhVCAUe9pVoTRRJBXorThL6dwcsirs33jnK6ubjHtWCSiECBVysrwEezxY1Ta57E6PsySMe1thrsyEcw",
  "key17": "4x1u4DYbT3VKq7KXPcumD1hyE8XqgkUEBQ9BK3p26Y7Ruhet1oAxZa9X2wHuFEPQBeFeCHvmfLAwKRmatDZJn1yW",
  "key18": "3mnssENizA3RqCB7oumG1iCr8JvUCEgqquJGVkKjnBc7FpNH3mnJ6oQfHzWLx5gmmRSWKjRcmdpWWz5nVrDLyDhS",
  "key19": "4dRvep6DE3pgo582qAFqVMGGDVKzQ81zXx1g2SdRDPiJmLhMxYETuv69DzGWa7EMttqCdtH7k2mjTL17cAF79xgq",
  "key20": "4SFm6FmDpdVjk2HjAubd41n3SWFYRMfJWs5rdVe1yV4koYJNtEABQjGJQhPgXf6VddvbjXCcQMUSKbpcUnBq6kmi",
  "key21": "3jqzy4CNQLoSUczbKn43saBZ8WietYFy4EWGKsQGxZcK4dhbzhU5QNxNrPwYTh3c8tNkgesBSKY929P9oVEywgPK",
  "key22": "4EBTGwkAHqG5va711sF9u4Mr6vgKHe6bB7NtAv3aPaCLNrS5BBP8dMp7bwfyYumxzvjJmVFizFpyqQVrjmWZwUxh",
  "key23": "ufBhQqMgaUos9HsdhfLrkk2nvXNQeMKVE46EvyQg4AigsoZ6qtMCe1e6V1SBQhEvxAws6XiLtuPBzJuGXxEPfM1",
  "key24": "2goFkajrEhR7zHVZmSrffZdgaWMPqmE19g3FbsyfrTUDa9oZXacrVpnwCqBsxW2jDqngoJsurGycQLYyUW7RhStq"
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
