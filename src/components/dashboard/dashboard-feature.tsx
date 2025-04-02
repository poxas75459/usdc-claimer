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
    "27qz2PXx7tXpLNqmURGQEy83pfL3FoGTN6AkYZ4cWKatiYinjRCezSSKHQLqE2BboF1zNe3KE6Tnj8h3E8h5pG4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gywEQCoFvp253pUetmSwFZBVcpgR9wt6zLeCEY6iTuU66kLXCnhkcjax6XR2tfgUHhaBnqTzk4G8eaCXCzf7pc2",
  "key1": "36NCDBwdXkLzLn7rG8mdDwFyN2bTbdkkcnXCxbzjPRM9G6fasN2q8vESkppzFpqX5maUwsmwcV7wCsdQFekj36R9",
  "key2": "3zbByWrWryu2avFpakD9RqjzV1u7KeeopuhH9b9jK2b4UTt1SbLHNDL5eQa5CDMFhQPMP2yx9fKzdrzG2fdNipkJ",
  "key3": "UVb9t6HcEfFSsGn4dCpa64K7PUgfre5h2qhXzBWiBuFNDXwJwE43DehmrKsMdFkgGMDgSQ9T6LVgKsgbxmBtMGf",
  "key4": "2k9vJ43q31Z4R8vxbaTxfyHJvFbUcQeyJCsc7TZxNUF1wiBibQniYq2xbcvwWLtWRN5tMzQr7jbv4wPiSDCSFQQe",
  "key5": "4g3cr9y9WiYMzHvyVeYzm4mmH7rmitM4WiH94JHEFg1LhspuSbFaCKcgWa75dqCei3f7Ca1j5ewAFTpjYm3Txn8d",
  "key6": "4FkZa4bdGBBcryLJAE8R8Yy9rM4ckEwZtyMQfTGtdM4wrpdCyxzouq4bZz4pAygC1dHDh7mbo1AsyqVHTEMfms4N",
  "key7": "2Ljxis2wHBDuzqfnzbJj8Up27BRRPnAjH84PWbZCxqn8NUWXAxQzB9taGgvHGkLT8rCFmZiV55GCvMVCho1FXAJw",
  "key8": "34QeGwai3qSTY8itkeEboKF7A9B8NoV3Xnud7Rrw7E1gmTUxCo7chkCg5Hedkymh8SJ2p3vPnaS5eheUxcBCJ2Kz",
  "key9": "hoHYn61CwM9QhfcGj4CqLL5dpPwj6JDLZSXKA36AsoAmHEVE79hxB1VeHQ5XSNXDVLXLtXEotkqw3W9hT5ofB9t",
  "key10": "387JPPPzz4M4e38a16XbsAof5u8GogyNTvihZKpjfvHTm8YhY1wiVbFoHiSoMYagcNpKLzvXS3TAxaDtKtw54M6C",
  "key11": "4tyDE3sLfLfqxuWGapDfztXQsoeEGeezk4wi6SpsSaTPhMh7k14fnZGDxhEeDj4Hqi7hW3Nq35XzvpBzitWNpfp6",
  "key12": "2j3P863HxRHsLmKPK4jqqD2AAmY74b7c5wPvJgBeCgpGPu8FrMCzrqp7YArtrVhYDCL6GWhFEXM6AWfz64uTfVbj",
  "key13": "LF2zsmDwLM1uCRR68458hYikM7gEYRptu6cBHdFBfyqBToeC13DcDTrhxrMPHZJ4fbjSo988RpXnt67STcWLbi9",
  "key14": "4TJqfkrf2daVFm7rCi33fV3qW2Pf3CNhutoqm1Yiz2FGYvfV38xjzU7H7U2QpucaWdc6BGbmfsQSkVtEmnNu11pu",
  "key15": "5wNmR8PB5pBnGzrhTUuoNpqaNdGD3kwKpuZFhfDHy9ZBpU4hbAsS9NUFnDeq2eMShqh5p36aqyZCgz6snoB18mM5",
  "key16": "h9b3jgu7vPY5aks5Hsiik7PLdqFv6Ccduspw6nwT8oAbUNLEWwZcTdtZHHVsnsVHM5fyVnh3QYYA75L1bPQ9WhE",
  "key17": "4b66dZFAo9swoU5r2rHobYZx6W8eB89kW7gkUtjGsEzFyabpRVeEMFWNVqFmaEiiFwpCMURSbm16yG1whJ8jKZQ",
  "key18": "3DvWViBJbktyDLjbXTaa6phyweu18kkG39RWizVaiM5pzVMRZJkAqbdrtkduyoL8PMJRoQZdAReXah7vTg7ZqLBK",
  "key19": "5pPj7TdZHkkBTvczsi84PeFDojqiZRNYFAbUzasQwq5y61pzGVzpjqQ5x6nFq3RAt98E2hCR1DaXSDN3iUo2g5KX",
  "key20": "64bRCy2RDTNXCycwtvAPMfNVcH5McEuqHYL6e9Pyj2CTESRfdEf3q7TVG7Ey7J3Kp76MxPbdZLgoqfqBU8V3Shug",
  "key21": "5HAPqUByNKcvsXWUoyrVbsKBbBvGbhtu5j1zwUeSdrLsjm3UaXhxe6YzCYLqkEwkKKx2RTz1khKt426LscJns7Fr",
  "key22": "PJqYTyTpDfJRknKMitVApT56qyn2x43Mza1SfmBrUwUwWjpMNfY8SzMu8sDeZ5zjCLdyWujYHYeDDQ6JXj7d5MN",
  "key23": "3K9AmPTGNL6tpo11AUwwEAEGhMZvocqLqe9zXWYyqLRCyWN3qGnP6y3teTDq9Ggeuyedx56aG9EJrXBMJZP5mjMd",
  "key24": "2AGJWyb7hVyGMETq9EQZg1AswxCsxCkFHGXXqpjFRV68HbCDWBbjT88YCqdjUphfk8KeogETSpHQ9f8TpkL9o31a",
  "key25": "HsjQHe9mYyi3YTEPZrBMnUBesB76QKLS9NuL2jn5mUNaNZvArmzhpuo5tijn8ducbgi9rGFamr6f2F4JoGr4wi6",
  "key26": "4KvGcNdAs7Bht7Q1g6tMZevhYsBaDnaxhnWYECvYBYfmTVNrQ6XuYyUKsJN6zRfNg3eN7UG2HDqiBuRJfrhQ5NWL",
  "key27": "3eP9f1CJcsmTtnjBKHidBwCKyG3AH14HRJ3UmS3FRNxVEjfveYZJnEYkNPGEZypdRcsvjiVBGr2PEQwp5u5PawmU",
  "key28": "4QBrsLXZDwxbC892d553tQHE8AobUS6FkBnWNKkV9PCefXBtZLXMoxHwPYtLhFNMaLDBkYgSMQ5QjTxVJecikCxv"
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
