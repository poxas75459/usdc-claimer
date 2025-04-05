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
    "RocK95AtbFn4EiJEzjSCVjXvvS8XbvfQaMDtDQV9YpEPhmVznRDtAXGzNBuirFLAUHGSvgoMrF96qgo6th5bj3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jeWU3CAwn6CgMaxXRWTRYKDRaSPrD9ECLMuQZeYg4wZStN6TFDCfvSM2gah9wyD8vmc4dR3y3u4JGMc8AWq3kbh",
  "key1": "2XLLdzgArAsB1EkbBroyQcZA9wJHyHS3trG8vjz449tnKn2dGcvQRLr6Hyqwy9KVR9YxeXKja4FZYTnEbcToFjgM",
  "key2": "5tPUfWTmfrdYwtt6kgEDNyr4LB6vbTyh1vYVTixyBci8dpMCBcLSfpEauqQ9RC8AgjCXieo5UbyUsmmULAs6vNQR",
  "key3": "rmMzMuimUYxd1JU7DzJ1eYViP1agUoZjD6GZwR2GcVugc4UrvtMGSEJpKuAcs1B8dc6e2kKeddKqbBtw5WisGBE",
  "key4": "3kLsbyaPW4BEWU9XxTM73CR7SLB2T1obkk6d1AZDtUurhmrJBUKHQv6UqMvXvaPdiWEGv6Tc8mNihQ2nWWAmHDJq",
  "key5": "2GvkTJ86YohgRNj4uba1v7FVJ9fdrqiz2c6ymF8giX2Sz5goRp9jof4fGxNJcg7VQYBi8K7PN6xQXqeH7pJ47hfk",
  "key6": "DCMqEMSxMpR19mqMfBLH6f5GDjwPvaLyoFrwPh84kGydHSuzd1mxjvLHbLwUwK5LD3KRii9q3W1vniKCdJ9hjTG",
  "key7": "5nnMpdX4k6ohrSddDxMc8Q6qjWe2dNhCrMH9G4kT8wfgFTe3f5Gv3B5HRmkQ2PFMQ3qAnS4NqBPaX46TsRJWhvRE",
  "key8": "3T9ucKtCMt7un7qcC97Q13zwLVcRk9RGy1HegUzjgRo43xF6Yo9gTqntU1smDQJz7QRWkQzbSTVvW6BhqudBLNeX",
  "key9": "FgANREWTPLfB4SnNDGgjsmW1aAHdAkA3yWBrmefmbsgbFWxSUY89fD2o9QGP83zVacMNi2LkYA8YgSvWGiDpdQH",
  "key10": "5WQXVtZLNBCAWH4WKf6o1as5DK79y3qFtyk16szK2sZYvsBgEWTBzpdatL9YFVaLgiWATi1mhBE4gRrvG81Qq8V7",
  "key11": "4nrGpJZHJeJGKztXQLLu8s49hmzFQ9Sg1RdxsMRs4YcoJ2LHGTnbKZPApa25ehDQCbbzoezLn9DANLNdrzTM7ftz",
  "key12": "47yzLbhePbDGooXHYWSP7WCQijUmUrZz13V6SwNurTgzmpcyxS8ZcB595CTR1mzfvuZcQL1GmD4zXPEGswC9pToF",
  "key13": "TpnP7wSrDV8iJqDnYtSC8PtEvQVtSmKm5XT2erjbLx6usUkhY2bde7orUWHQHWKh2VXmFD3NVrpb8CzKe9CjAbr",
  "key14": "3JTtzmr6TKCJgcq2Rk1YYYEXx9P4hCbCTjyM4ESemX48R6GjjgaWHcyJgnaC4G8gnGhb8BTRsZtFBcdkK5yFRNo1",
  "key15": "5Sm2CA1kZvWmPQbcJeEDcMCAfY2JgdB7M12PVHkEvQuv68Fi1hnzU9fKbajumnUekHy83VuzvvJSaMyRV5ePxFu",
  "key16": "43dD9UBpEMcaTsyCoxyZ3n6pxYaPC5f3u2KvdXCk2ZjoJF4aCpwaMRVJtxLUp1hHNUgpxYhJR1VgEuK8qVKgGLNw",
  "key17": "21yf1P5JgbVprqyGo5C6Vr8UDUtKCkjdivnx5CZU25XFV3EaSDtqpVFUZSW5Hi5GN2CH7VZ73Xit6Buw6nyuqu7e",
  "key18": "5XvgTsXyDPHVJbommDDfksNVGcZmVjXJiZHtLsKJ5aFk7iNznYwtZyDM1FA9NAKA7qrnXisaRnV78j1VtSgsprHn",
  "key19": "5zbVHuTdgwzTXTRNn3fovfAS79vjKYx4AcXhjXdATPcNxvGCNaUs5xibA65Jjz5en24jkh3vuG45zqn4hHNSeE8H",
  "key20": "QUpbcSxnDS4NGXWFcpjpCkPkLw1FXCskf2D5Z95H44afJAw333kj9GcbfjGdtGyt331Tu6MiNrmUZ6TCXAofYhD",
  "key21": "2SVmrH3VwccxPaPFg2esBWmrM4aWpsSP3oSUWHVEHVpNsdD82rQqX5nNJLp6RB36zTnTB2Kq4NTW2PANaH3FNB8q",
  "key22": "2rRwHafPkFpqP2BdwfpRpZxpGCZtzXZWbRSr4oWqSBkKRzK5ArDLtcvZazbZeaTJrqUF1esFHCoe9XFAcPfQR4HB",
  "key23": "5tZgzngv62zYPeLn41KU8mjm4fgYbDncGMzBW5f4ChveY8ow1bTxokon7P8NF4Anz4KhC96Rd9EWFMZUFaptSUV4",
  "key24": "2VXvoxC4CoDtvrt3Ya6KGfXDo7aBut1ck5hDGEJFLAFFrY2NmnTt6MgFXfFFX33xJwqLjz5UXY6WtGYstGLwaLvZ",
  "key25": "4qppmFkWrU6um85bS4QC3epRCPeWRw2MHuoN8B6ExiXsHUdKNcUfsxzZZgpsUXesibY2qWFCUfbxWEJWyrruW5P3",
  "key26": "ZGAT8626PjeAgBzj7n1BBwRvgcs4trAB1daXse78MFpw9QybCA41b56oezN94Rk88LBxXLadwpb53d1oWiGoNaW",
  "key27": "5hWaigYk18LKtgqh6Rbp4J8isfnvxiHJEJkT4PU9n4DakuWUgDY8q42cX8VnGNgzG2YymD2yHgkqM6vNvRgrWGAR",
  "key28": "2ugkCFVxsbK4ZwMN1NcwWunVtQkDMBN2W8XVJUQRez3DaLgbu4V941podBhYdskV9FmvjQqLRr3pTLqNKL8cW8a1",
  "key29": "5mswvnDtxrLv2zRa1xxATkrewPoJVyVTBGSgS4coSy5TxFqYmRhKBxZJgtxEUZxVMfLXYX9n4GKKSB5uDQygBp77"
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
