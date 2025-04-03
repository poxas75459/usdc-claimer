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
    "3ZLQ24d429x1JyZPYUGFxQXfebMxKUWA4PhMfwkFrRR7jzz6nejzNXJ9qogQ92Sge7MZdC1knkrDWh2bn1Ve7Qm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36kEgzQbFxG8RhYSF42EYSmbQ6Y2asuFSV2CyjgdF1KZwttFRBd8DUTGy2MvGHRzFmvhMgUfSXFXNVcKN4jpumC2",
  "key1": "2cMXRmrhkaStBVUcmoTTJGnBc3RyCwPV1vaUb1xacL5tBropHxuG5dCVNVxwTyBbhWAvNNfB8EHVxM2RDUDbWDhB",
  "key2": "3PzmuFc3i8KcX8XgccJJqyP1E681fRBh2pJo4tbJtpN9V62nu98z8r18Ep43PXXaPwmSWhTixFvQMm4hwKm3rjic",
  "key3": "5aLFdS4movh52F4YKaQPLgVgN8KF56dsmnh37vvnPKrnF8KTqkB8ykmCfL7isXfxT1bNL1J2Rmg4XyCpw3NgEk9f",
  "key4": "5j2cTTPZUegHX7JrQGJWiTD5C5QrGNV3CeBE41pGnmw3kGoA8wYjWnbAoD2ikMTMje6jun33mkR11tcaCSpAMHEx",
  "key5": "4Zfw4TKbAocHrZTuLVtNQ4PCZbWmKwdWqoFgUjyRUboLJhz9fXD3MeLVsnFPdhGPGvXFwQ7VJDQstNmyoNh249VJ",
  "key6": "3r9jSkWj1Q45G52Er4M5fFkxE9KuNe3qgZUtYjtTJ8nHbWHxfHJE4X23yTbx8Bx19e85gJiF68352NTAw6LKfWPH",
  "key7": "4zjv3zhPmuyStCSPGw2tLyjVkYwNrQcYtZw8rUQFfXfTbYv1hDuYL8SUAbGFA18ZRpR6ra6ciuUSSJaaeABSXL2D",
  "key8": "5tuixJGY6a1g9UX4AZKMhPWWv3TgPcijugHBmRogjMneaWtCywncnjvgjWTNRfEVeo2L8RqZV6opq8RWLBAoMBTG",
  "key9": "5pLbeHazteVnP6ibR3tFN9gucNHqGBGojueC9A4VXQz4KBe5WSTutVJs9kJ4vKVXr7ELGgC2svtxxM7e4xpbVREs",
  "key10": "5gF4p8dezpDKwnEUvTm6Yy9HNESDrYPRjccyDHPBgWMHpMH43euR3QLJfvi7iR2n2VcArdzpT5nwXPP4gdefSrMs",
  "key11": "4b2FzYGJqsSUpEVDXqBywT2XyPWkKsRo92oXduB9dvesczS8psuBEyo9bFPZDvYD79bvnWNEHbPqFwQPLnnrgZKn",
  "key12": "5zHbrpo9qcwQZ7WLfQyTa6Nns5KiwQGCkDxFSDyo8XkoyhvN1aRwLeQNchGL5k7D5kuDigxz8mPt1CBT1vtFMeAm",
  "key13": "4M6awasdC7TkfvG4jNgfcKZjUPmD4bxbUjPceQT3u8HnWy6nS73wKXBu1wf8vTDQCcidzHqRWuPK58bTXtRGc5Rs",
  "key14": "33YYqyDgRf4LHuEHUjX4XfchLHezcG2xcrFtN4dqvHYMo1uuSVqpQvzAamQcys6GpfvLdpnot7rtU7m1MeNCPKzD",
  "key15": "4J9guN8iav9gWL5d5VHqMBYCktyA7qUNhFcpWV865a3UGqvTvEMgou1yyRbMnWsoL7i8WjpBXMNkZu1wTfSDouko",
  "key16": "SZiGjpMa4Yucv2LrWLavCuxTymf2h8hwcW8ruzLwd71aNfn3Gc1PfGgxgd6KhZnBdJQz62AngyudAM42UPcWPB4",
  "key17": "xFmTMAKvoN4mSTdZqsoA7BjZYQd1CdUMB5h581L7sixBVX4kvt87TR7Dsfdj5jbhpvxMg5C78VTLr84aoLtnqK6",
  "key18": "3dVvaFoGaAaGiz96DuBb4YFH8GUkpR8TGaXdRYRm3pjwUjBzv8VeDMzSgho96t7aRharsPTV98wzJGiNTuVe7EXX",
  "key19": "3vt7XgFjWoFtZ5pqwVqd89GazzyXomAqSFTGuKNyTbPa2b6EE7a3ZrpNnKxkEmShVmeXMr7FhSZjrPCitLrrvgqj",
  "key20": "5GxvVvfTsKu7nTPjP1PY4S4FadsbEbVVD4QemuUttSVa6t9R8rdgL3U3osYjSB2zDzGRnm5q9iJUoKWz4UdypBcs",
  "key21": "2otiSuDgyYV1dxRuuQPuStsdVRrahDodUZWDfLvDLdUsiB5ipEyZCVPd3Ls6HdA7Un96EigM8mhooq7BL26gfF22",
  "key22": "48R4W99CQWyP2pWTCUPvuQDeF3R2JQpEmw8ANudjT4Zzkg54rCXiC2XLdji1oXwqfuiXp2RDhd1yRFdNiX8fhv7q",
  "key23": "5DLxKVKpNNf6KGHN2KpH6QqY1fqpePwLe6NvLvNEHBZ4tSYEi2wu47XQvwf4MKJm2JugeoPGKzVgAnZBZgEmHDg9",
  "key24": "2ErvsotZ2qMss8rPmestBUacAAeoXz3mg6cJk6xLCQdNJF5TfNuxvqZKge6Th8kynKehKW7sPpHaT4Az896tbMXw",
  "key25": "2MF9zPy8xhEHhghFtXnchJxDDPghcNUHfn5xQK7kQMNg5LRsNxSLZ1TU8QNcjeu4e8dF6mFPo3xg5xoPiqfNqcwC",
  "key26": "259mJBACzk9nyFyR1uyfp9Zkwi31hHEKQQC2hG6BpHUaFC2UH4QXV1DiKQ9Bbi3enYCpLfscJ9xSKruxsofFqcv8",
  "key27": "2Lado1cimuE5WWuAFgY9zuncR8HywF342RWNuQnNhCN8n3LRw4g3P5NrjotqLaZ8ZrTd8RrNqFmgTDFqwNAsJk4o",
  "key28": "36g7WCSojzgE4bwqecHvLrBa1va3LXRjPhqn9oaFSDePJXHa1Vmv2pw39LTCNNgrjSnxyWwvvtxA1aT6JcbnKBN9",
  "key29": "kq5nrUfiQJ7Wf9NTfaC1MfZa7uMUuSVTHudSG1HucChhdGsGemgNkBLGL8GSEiP7W2joQUAHR8Qh3o1RFR9wAET",
  "key30": "3ftEhJgfnG4kNzJ6FdPsyRRcJCovpQMjbKmqUivPXe81kgmN1ULDk9jiNPMJgZgGWYk65unbUd7nZUn3he1sTwhA",
  "key31": "2bs5NyeTrVtpNxtREFsDzcEmpB8ouz1kNVTCvcBcQXBq8wRWqGXsDdjGYoTvBC2hptXVp2z1xozhkSFmekkuw9AZ"
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
