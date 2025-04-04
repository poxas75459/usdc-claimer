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
    "3H9rgiCnPYJaQL2eCLgiaDwRzVUwAmiYN4QGprkdbbqqw6Hjcg9MfGnn1NAMzNMVgJRg5GUK2yfCsYiu22DtvGvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VoP7NBfJBNJk3ygEKLWHzazGEvfHJESdrRAakwEpHeNfvrmBfGRfJ6zSzUTb4neT3gQszS53kpy43BKneTc1q3v",
  "key1": "cmghYncWj5KBJwxLCsChmbL8SdmZVdnwfDPYamdehEF6FADKQVLPSVqE6ZcoF93fzukmb9tfAWXeiWBFvqAMN6Z",
  "key2": "Mh76GvuMGHdUN2qw6zhWAUoeFr3tP8UzNvDFaoWWZzAqQikLQGJsx6bBr5Ef7HmG2QxWU1cftgwtB6XDQ7SZurx",
  "key3": "25AakT1HggzN6CCEhz5ry8YVWqZGMaiwnraDSbGXU81PvdPqw4VkV3J5fUxkZUBiJaAfhRhjxghWNyyk4tQa1gbL",
  "key4": "nmynRD98AeZcoeGmBtoNsYX4nvnCPMUG6FUyeortEjEtVH1giEsQr2axHz2J4xfENyHpgHjS2tsrnqsGorBeLXB",
  "key5": "4H8SVP8SdPRD2A7k1A7u8E2KkjWJodg21p7aqU2wvybwag44RafQMYiN87oNQqQi9ZRyPb4X1RsS8FE5GVNtqQhg",
  "key6": "5xBSqUt3aLcVpQeTJCoGtaZkGpZKUyxr4WJHNdD7huNqzvPfbcVyEa3WTnKnkqURWc8pAHkn826zEgeFAkBWsbxV",
  "key7": "5cmkTnm6beJmfZskpEgfeBG17ZaCREG5jr42Zf1Fox56KYhK7PLpwp9jDnfkQD8gRJTysYFxcgp2su35sBTdWdBK",
  "key8": "44H1qiCJdeSG1sNKPwKTZbDuCxNSTbsySe8yC7AGDw1NWqGoukvWTJ78GhcK18yXyJ7UWDnhXT5UrquNM4suUvCS",
  "key9": "a8NFpjmCuQzjp69KmJjF2cH6qMzShmr4NwRsg7ytT3jXzaJ6Ht3T9N5wv1MP8mkf11yLUiNZn6hDUdRAPEXBhSE",
  "key10": "62sKzm7kUYdgsQsEDSBF4GSnxoeBGzQdjnn5MkQSawLVwWKPbTUHze2yY8voTFbSKpK29u2gwaHLWEAFcb6YnYqV",
  "key11": "36mr9dZwZVW5uoP27KuboVwy7sCnoJvxgXin97tkDB2yQTkKLyPSqExiAqPhCAQPX8mvhxuSJJkrC2Bu8VbXWMD9",
  "key12": "5G4m641FHSBGTHxUxk8W1nAWHQMKjkRg2f7dyVWFhrJEkx11L9hQF1An1iqrjeYgCN7V2a9FWZoywPxRkLK9RvDs",
  "key13": "5BTYitheKfZvLUBevQgRJLszqbBeMHhWLD34s5TUNV8bhPDMN6d9Ux5TqyuqqzEu6oxGVX9wB2DWxvQ55WLmNV2f",
  "key14": "4iY7gA3Shdow93FKor3TRmS5oawHBPUYmGiZ4boiJ9EGhdthNm9Jw3friSZyAGmZYxhNX2VHf4hvGoJeGdhY8FFX",
  "key15": "SPbbyK96bJaHmaPovKBnJGnyrfuF6LJLiRzuR6Eu27Uyigode31ugLE9N12Pr5WAdeJSTkKrGMkrvSEjhEdYtzp",
  "key16": "3X6BnXkYRK4DeUx15zgZoCMaAdphwbT3yBAci6qwFi1zt6PN2xEsVM8xS4PGSYrnN8PZwTdUe31i47JUVhXjpcbR",
  "key17": "3sDheDmgcvaqbCGgrhfGvdcrEBzqE2Jp4nGteLFR3KGqNHdUZdfTfzjmemtrrkb3ydHXoHQ54k5Z4xMdntBEcrL5",
  "key18": "3LqHM1RZTk4Sktc5LonPvGk1tyfsb24yXphT8hpVGe8yCN1wpnf4sSp99AfZvBmtrVCy4fLGgQc5weFz3cEvephb",
  "key19": "sGWB4SyQeBsfLoxYt4fniEid59mDipboVXu81uuqyiDVdP9ujbSroAQ6wxKEM1LFgttpDbnQ5nMCFZYKQQLt43r",
  "key20": "31EHqyrfqBazXvhGN1bmXgqHYgkENWT3NGFPfNP5NL4gPkMn42oT9kvSY9FMDS9QqiTryvX8mtYiWSv5X3TbsT8T",
  "key21": "3q7BiTVA6EuaweTwu97Bf7QoSFHRbCnrB55xpd3MYttzEipFCxVHQPZJLqgDrHBMvztz48weYvYJeR1ess7H3PVB",
  "key22": "2LcezVCHWMJXci85Ns9gSSNL6FAbL37DGs9yjxTfaNznKeFc2dMCq7Vab2boHj3SewAyw7P797DY3NVueDmYT9oy",
  "key23": "2CKPB6HPpk1cE3dTVLtHMjwP7CL2eGmxBBv8LV6B8M2KRddi42zTSdraVC8xFUCv81yZWUE6ABxKx5YN71dwd5dK",
  "key24": "2uz72TGYRBpSctNzRFMvbWcLEoCepVfnXzgnacwUQez43kkfuTWizVDJjkP96SDDa9CUot7WvN2T986WRi2ihDLw",
  "key25": "3fJVssFjtsG7mepgAhsi4dP35sUvKwwPRdTZpPgdwND8MSZbFA9UFAMRB9yzE4ge1NYHDUc4JxnzXsDohnF6BoFc",
  "key26": "4zASzuLPVhYiw6dG7RoNfCwWvp28btXZ2nmpR7Wdi85eN7XTQkDV5a5doj1e9dwhY21ak4QgArSW9uw1XYuktcd8",
  "key27": "pfvWx2d5iiVYSDHzJVMy1PoH4pr27pzubjtcE4Y42EK7KvUv2o1UxGsDXZoDXQZbuiZMeE8FsmeB9CMy8KZRAJd",
  "key28": "5wfkw9Xt3m4gTBncuM2PcMkMh3e8GB1JTydMufdB4t1jtUazZLf3FdnSHCCtbapPNVe55gKhsdh4SusJcyymqpqj",
  "key29": "2E6nHaTRG1vWu7cYSqzyHgeWPfa6iQsexqvicdt3ShY2sa8Fcuj2isBUCfEUnpDZz6tiu5a1oTHfngYVc7N2rGGP",
  "key30": "5TLtdRM86Vw5Hugnk1ty6EpqCS4AhnVFnvCg893pUJZ5p8xJJzLs5SPqCRhEj6xi2t6GYkT1vYaqkdqAS3SzS9P",
  "key31": "5BjBaUHekvFBxSfSGn8fP2QJjQFKtPB6egZvAEKy95McHezsMwmeeEQsDKxmtnyoh6AMRzmke9fDuHWhPN2tXeo9",
  "key32": "49QEK1uDJPd3bmeT6kXfufVEMJ4faXAQK6CJnoSKTW3sTuxaZS9S22eZjagFixMcfmWeSARDpYR2k7kRrx5tU5YB",
  "key33": "3QL2rHncHdr29YEwJUrS9WbpwwnyheGk1fjvBGkmZSgAvXbrDfeFjYUMTd8uevXdGzyjHBV7KeBhZyYVs2x3xWmE",
  "key34": "3J2TMHEx9uam436cntqwXtZ9GkUsXS96REW7Ydj4CE6R4S4iMSe88TvWETxTh27qCM7BwFvMGQexd6HJDqpZtgZm",
  "key35": "2CQxBPWLfUp3mqQSg5rh1APaYUvmKdNPS2nKyLa2CHAGMy28qa2XNF4znTkK7LuNV7HuQ1pPWwuvsjcTjqETtR3v",
  "key36": "wVWMAkEDZhpEeoejWE9QkAycpFB8mJf2GMCWRhUX5VeTzK3eTDBoUVK48HUi8bThLs5cf842ja4RPdMdBHyq6fg",
  "key37": "4VTkLW9JhJ8LC5ywcVMhBfcqbpwQB1LYBkGDE9SjBktdkPLDgpjR5SXUnWXEGW7NnaEqUUVofDD6HZSDoFVUjwLV",
  "key38": "3rHsABmqPQPiSpCyHxaqS1zW6nyCNoGq75hpSgTwGZV1ppgPAzgd4pridDLspkQQotyqdnvdPk9HjXiSBa3D3mBy",
  "key39": "3KYNSn5cRhgd2NfqQVkY9aVWdXSLF5qABKvegUrhPMGYGx2VJDDn8JJpg2JudpBBocbYtsvnQxUc3ZCJo3juRiVe",
  "key40": "23csJG5NKxfUUNBAxzoi1SCnKzC4bZy2J86pt6pmpvsUuRDNPAWNHR59BDZkk7AU7DBkEPVLzFmgD8n4JMiR7E4a",
  "key41": "49vgRq3DxhVKnaL1qB3pMfErNBM4FGmayFq1nkQbVVRv7m9HTFjVq4fEoXh8Gctye2Kn5PkVMEoXdA8CzqHNXJQJ",
  "key42": "3Bd1nuurxvQLerpMcmnuGu2vwoFYiz1p2GY5aRQgiUHNJvqypXnpvqyYu1tAuN4vNHxtBac6voeYeRXfjuSPYmSz",
  "key43": "247m58LFqURQSmJvWXcxQvJ2rsMgmRK19zyTH9w4RTaUMDkf5C5KgB1gGYp57ro8xSB4xLnDcLsdQ1Y5bAZWSMv5"
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
