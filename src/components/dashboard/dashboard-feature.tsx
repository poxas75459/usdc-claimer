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
    "3YgoepCUazCCtJU3EekghyF772D2iVMT3y3KYTYRPG17xr7nq8KWf2QuDoxsEQbnoUHNogCs9WvmRK5RZdb1h99D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uv5u1yCbst9Z1kpDRYzftAj7NW6tJwcEVt1ytzWKsdu7Eo8zQCAQQJ3RSBVLbAGhxovPyLXx56JN2gxWQioYCc9",
  "key1": "iEYsvxJ5B4ospj8c3AeoDfgHD6zUzEaBWs92NvZ8j4qPswhh3aqpUto4qMi45tM5H5pc16F5BXNypTBbHBN5Uaz",
  "key2": "KtYMnZ2kwD4Lbxtw9YwDHMg3Ko7KGa8ZGgFvAD8bsjGPgk279FY9E5BCWwEvoRZ8Y8UMSZsnYdAeUHZ9b8F7rFh",
  "key3": "3FGhmtQVpzy7JLk7eYVa24MtEX5TZDcA1EJKkuuNXRpAwxTRuadxhpqbAGniD6uoN6peZ7JSnLTCxT8vtPLUPKda",
  "key4": "D8L1qquR13xKnsjyysh8qpCRj29We7WKBXYuP4atM6qQE2r9CV7iuaVo77uUhp2FtRXSjkUZSrriZyACmTqiaVT",
  "key5": "vyqGVUhNhJUHGt1FjNPmDyBo989kcNDs3vUXpHtdXn1W2P872TSRqSfn4WdYbD1P3gHADxMWEhZ6M4B4kCygUvF",
  "key6": "4XeQa1iegTgQqZBXLZErLngeKphbr6r2t7BUFvKPXrKHgtATTxVhHtQgA2MYBaiatuebjKq6mfi4d4qMfiu6o4y2",
  "key7": "EnjLNiCJFd8wpttD1qZYhWq3X9gFryu3xJ6xYj8cx2CtdKUqPSEBwBH48u9NuxpC3ggCzTK5QCArXdq6bgVhzze",
  "key8": "5G7AkeraxfkFAXDkBgbLouVKjGLW4L1PREqozw4VeHBGkmRtZ55kCXi83tKHkpRMWmpL4FxBop4KuyEBMnyDXACs",
  "key9": "3FyJoZ2MfFSUraB8zJZAs9XrNx7Ps5Ymy3EzA5WMZCmJw8NMkEMVsjesVH6G4FiPFRsDvnzcrMRP7JsfZH7iVxTg",
  "key10": "2VyCYfu7VM9b2a97Z2K7Lp1cEoVgQVUGc34oT8M6gorb8j2woJWae6fYsRjSWmJBvWbMbDZ4iHGByfP2vZpd91hv",
  "key11": "4kefVzkwm7FSc6JG6N8af7sqYQxMJBELvscpF2Q2SgQuyECKrFUk467ea3AkAdNxp16eNw4Jy7yhP5dr7f8tG5Di",
  "key12": "2orvggyT1DAPMdMnZzuw7bBhbrK4AcDTsTBsLN2CiqmjgrDAkE7wm3xz4wYSRCChfEDXBPJTGFgzYCCwRa16jUcJ",
  "key13": "4WT4mcrrTj22YFvcc8GU2GH4SWS1wkZq5uCjn6uZbyVukxwRMreR3TtTaDEYTbCN63jKYhw6mBbwAUm7ZZYFvJsk",
  "key14": "545J8k3jbUWXMY4P5WJ6uKtq2zXtumUWkhVc1j54GJx6mgwFsmGJuLgtd9iqDes55rawjFxmVKysryqxVJ2K3CHF",
  "key15": "5hc5Xa9adLcKXAEpbcJMMGL9H61sPSTq7jYrwkHpTs9CEsncusCceye5LFYiUqEztZ35MgKDPbwi3Hv5LLdbMh5w",
  "key16": "4cTmtftNM41ZxvENRmA16LKMYf2YAcXFN56kwmuVQCFjxCfMSsdE63t9Smwn8uh1fP8Hic2ffa5tPVFbLd2SM8pz",
  "key17": "5jgMddDJszDhnC3QDQHCo9sPasaoTAkKwcyQ3t6ezSdPRhstdZ8VdGHqnvEo113dkDWJTaUNuE4jRgGaA4UScEvW",
  "key18": "4tq4Pp6xu1V2kpMFa42deVtK7yfi4ofJzhg276Q5caMfMfvtijdiNt8He4SuBNrxN9pg6oSni29gaLbiLneYXEN3",
  "key19": "rcb55EaGWXXMvuWWLEzWQL73n7DKUgc4ThhnAMqLutovJvhmz8CKWhpNyY39fj9ahEvVpgeVv28k6wT7cyN57i8",
  "key20": "bRXaRC8KGNGjoAePSzZg79xpurym8dJ2AKofiwYSxg7MRELD1YbRfwBkwbaY6SMWrVY2jmfnNND8gWWt64bARQv",
  "key21": "3Bv4yp1zqpexuoKnx5QmcXjvWjdXUUtF8YM45XwCRFBSQAaWTdGWPc8PZSUyTyayky2XfQQvdAsyEni4iN2J2wUp",
  "key22": "jqRJTPZK3uNx7dbRDb2aCu3oEZR28RkzVRE2A7NzYfUTngdnBiStrr1AQ2x5Zpy1sW5Vt59gyRAHuGxrgbnZhfr",
  "key23": "3cj77TqQ5VxujCuGs9qZyxC4LCmx6fyy9YgxJ6NAQThXz3ndcd1hTG5jkkvq1sBcFAk72RZvz8Apd5qXYN2iSWRi",
  "key24": "5RsfcrWfFr7CCwVUh8qEjBKJJF2XWF271EdrkaUpMiyzSFq3dnaq8kRzfUo5932JKz3a2XiAXksYKHvvfhx6mq6Y",
  "key25": "5TWwwnNZjf3M7Hky6FWGiARWJjCPGjbTfJNeA8TrMpDAGy99R1WjhpsT5g3WW2e5vbFc7SmMxeG34YjZs36Rn2bu",
  "key26": "5fcSxEmUvG7K1MSUrHcdyAjh9sLYEtNbmsFqszxd7kMewMnH6tCYoXTaTQZJe8hhoqrpGmuhpA9x2BcB6cBG51d5",
  "key27": "tx8JPM4FpEYLQdSQjpWoWGvkHhFH3Hwq1jiH7wr3RUWDATUVGVZ4cH2eV1iyVjYP2pAFV5ZSovxi9zo1XToeeSY",
  "key28": "5b11VRUGH8a6MtzpKnqX18Pedc74gEDiu77ueH9rARSwxxTxN2ZrcwCkbJLhhLaXZjQh9ZQ4vNq4REwiC1953xSe",
  "key29": "2mukiB2DuZNqUsZS3jVuYWxPaDx9CyhVKxCFPWDjkPS78oV7UKv9Umd1uaLZVB7Ph5tfpnQ8kuYxJhYyb2qaEvze",
  "key30": "3WakAnfGVkHeRhX5NKFuN8SKwkNsdqbbTu1Upe75u2xZmzMfsNx5SsFzDtfDBBF4FgYtbsR99i368cBQvrcSnQpH",
  "key31": "5bDgQVDVNPkvwzzD4R16mFkB5AiPiuPjGas7vomFv92o797R5pMvbAnLT3bER7LVagj5NenHvTZ8dsBDmskhseEx",
  "key32": "2jJ3RLYbS29JpYAWVdHFvFujXwPdLK6uTmmLLFLoWDZ4BWJJLwf562YHQvdVSGhQWZ1QQL467uPGUWUoMCGLBCo4",
  "key33": "2qay23VtUNYa99LdjmEQ7KDjX2jDUp9yGRMCD4xz1sejQknLyxN6QBk2Ska56N7pCH1y63iiBsCj7jQvJhKC6Dav",
  "key34": "4dqY7NqBTFeJCiAZg5Vvs8XVJAoj53ctsN4Mf3VGY7ZX7tRPnsknPmwL9Nrqe6zH57fhPrUyP166hQ4jKcLgxg3D"
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
