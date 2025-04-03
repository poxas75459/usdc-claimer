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
    "43NeKjKcQ3BaVFca8LBAXZtRenW3L8J8KV8hqGTRqnqKQsvRHZZuWeFcTpouhyigJYNHf6auzyZg6WcGhhxZkuHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CTY4kYpjqYP3X89Ukw7LZZQ3i5RsZM3kU58Lb3AoEVXCwkkxNgUzt7yEwE37LJ1fhReM4bsmxfmgV963hjsDq8D",
  "key1": "WAiczHUq2C2hAYvpUxzufymYW8yBtYoQFbMJyxeygnDGstezNWAmxc2mokLee35kRyooZDRBRDDYESbq4ZqiYaM",
  "key2": "KFwbo6rjF5qvJkwedpyRZDuUqqCWggR24omAuajTGVRND7wUo3AnJY6Zf2r53BKBnEB4JkJHSpMXvbjf9ZmZnQv",
  "key3": "4KMDYwh3zg937xVvfrQkrsJ9cw4aKBNzhtZRU6XYeazEphAMFMyMAiBWvHCix1G5XrMtXxiR9FTMcPFBSGddH7F9",
  "key4": "4UxwH1SG2z1PKxuQnGvSv2pvdxsVsgb3zJ4k9bFNif2e3zQLBCKV1yqT3tqVTwEojhcnHa5FPzawXSi4bbCqPFy8",
  "key5": "4h3DKsP3bjHWB9UmRyQBAtmdGrN8LACPqJpooUyEK5RmL8dabSYX24nueRLXzzmUShHuahAMSN3nKD7tDmyWzjNy",
  "key6": "mWuom8oqt8epwfyvpmjLfcT14SWykePyz3HBSoui1ErQnSeL4msneh6pk8xatpTN818C4yCTX4K4VYhnK2Xu1FW",
  "key7": "3H5p7CdPkD3ZshiSaMkNKxctrL9jwpfGR7AEWhwSkXZYgKgQADpMQiFPztMzTcbdqkXgbXCLFwpkoi1D3LymtpR8",
  "key8": "2gzdWqKwLM4kFUy7jw5iM5tdPvScjUSfbsgsfobLcSMtkkeNVgy1KmXnRrdHsXdXdtSsHJzP29KuEjV2o6ajwVdP",
  "key9": "2wvXzqTR6n9ATozmAQ18WwQazVqHg93eQESrnXQMDV1jyPzQSBDUSh4qF5trb3j27JwMhJbgKehcNxTVn3ywHMkj",
  "key10": "Nj4jdM2QVNscewyAoddGdisfaByaBiPB6bW9MpqZS5kVh5dD8CHwkR4CyBuwiMAwQz4QiYeW1HkqcrzfxuyLkiM",
  "key11": "5pS65HxdKMLHfgU3L9JFkryjDSKkwkxZmYu3iDHRkEtYkCeRS4donMs1Kntbhjc74YwZCtme82HAEg8TQU89npkg",
  "key12": "s4Wtwtm6AE5x4HdmiGxRTUTbSz2Rgv61iU17RnzgMNgheeGrceAt3GSfmaZQpnyKDVCK533LqkNiWXfgpkZfRRy",
  "key13": "V512ju4P6PsgUXRAbyitkEbDryGnT5bRwe28xLpLaZEzjLidC67YjbVGntc6Tmihz1VXA3227bsSdSGFNKFHTV7",
  "key14": "4ZMxN5PkjnRM6zF44AxivqAb9S5q9hUCTByAGM9aHRuYX5tsuxM3Ms2qFSXgDEJh2QToSmtJkagfPetpqvUP7jGL",
  "key15": "2EDgdm9Wk4Dj9dhneVF5D3vUsrF5JNGg3LJAh1AdrQiYk4PgxvQPM9cQqUpAsgojVb5Cb8pnzfhLeXZwjPVk9Zim",
  "key16": "5Ao8SgeFbYzxHBw3P7xPW2p8yuYqKCUrZgRnQqKpG2WE4wHdWdcWG4JDS6ccBpjk9GwyMS9sZfTug5YRirX4E5pt",
  "key17": "4hLWSw2gwn6XxgcYUCYwBURGrKsE5sEVH3HWDb67WyrRpLDNuVX1CNgKHjPnqbGVhfn4fucx4itHB98u1Fqoz7Mk",
  "key18": "5fxpXJtbQGzhxAxsaw3ka1sNEQTDQSNUf1kZcgws3efbtyE8yePc7khagvTa2uf3apfcNFcTV3aTiZ3TikHeD44z",
  "key19": "4QwwGcjMmTYoajUEUKE9EYCSMuTnASkLXXj5SfvNLRPkgxwfRjbaZ6h5uVFRftuQmZCarjoFakXjcGADyS5ZSu2X",
  "key20": "582RzNKQ8ab9TNhQ7mBWCReW8umrQAmbg6pyBawXh7MC5k47ZS646SNef8mufg1JNkiLAeL8MpD45BWnvvstGEUW",
  "key21": "4wRBS6LG3K7CEY3yXwmoYd3wjsfxPv7BirFgmrfyCDoRLHLYjcLwsQwHGwdXmipQqD41UABdeyKAXVFMx3LQDorW",
  "key22": "3o7HMDPrdwXqVAmrWh7BbVuJHwE2yhRXgbUkXFKFBXRBB7Qyy9FT79Y7XkWJEr3rtPVaYV1S1GQXBmQw3QWpjbDe",
  "key23": "4SiAD5Yr1YggDSPmUy835mR6roBJSgxxuRakWTZYemCyULM7oEFWJ5Gof9hbokpCt2gNx47HbWAos12t9jg6wjhN",
  "key24": "4HsTTBTreywShThvcfQZxVLoi87KrpCzh9Pu3icR9ENJmKbkJvHCatCt3Eqe61KnfF1JTemBwbRk3G8xfPEchigp",
  "key25": "4TGxHyq5oypVWCD4R6fjZmD45UHiHrUNUqozguyKx4rEPb4Cdev3MNBAY2b4HTPE8gRdVM7HQV5zfGayNqgNDSRA",
  "key26": "p6NsFGWDJLn1Q1tQJZU6awENoVxhZ53RgwktFsRpJfwxxy8gY7A6RNZrqiuhyCexSAPvYpbVZRvkCv2vMbrW4bi",
  "key27": "5HrTQ2w1xHTD4s36AHqx29rwwKtvfc8Fw9sVpbJ9p7bjrRxqyqgffmn2jgeSPivPqLeBHvt8sCFzqTGmrshYrQtj",
  "key28": "2ZGyshAvqoYmD32twtRdrMBLV9gpKBSdDV91BcMhYzDjiWwdZ5JwPDEaMgdXwFiTi9SPGKvxRyXtcsHY6jLMYCcJ",
  "key29": "5SN1qLrfnHS3VxQcjfEkm5u9pkAm2bfGQauGvgimzRuPRiW7kTySKSWy7bJD2fnRVeb1n6jS5jG6Ge8Gr2snnBsG",
  "key30": "36SVAL34V9VHJEvT9vqYJRjdBFHXDMR1TFoAifTVFkV8j1ainENsnfgN3fdxaQmVWo1CbzZi1o7mjuu6d97qcsTf",
  "key31": "5oXMtQfFCMDzRqWsBwrKXUE45onNGcJVjv4fC6xWUV5HDtaiD4rZzqdph1Qpk2mspsDqavjwr2D7Y8AE44z9F4GJ",
  "key32": "5tZC2H9fCeXsspxgfqQ5Vz8ZiDtpdm1g115NMPzPNznW7JdcCEFMyQfDzd4CD49MmaEVQURbU2qqfz1LoLL2zQbZ",
  "key33": "5JjV3custpULxiCmBDtE5DNC67nx4knxsjDY6SZ6DMV3ubVnHTLEC7uvJicgi2BaBFc7u2D7JeWSEbakkFtYWNar",
  "key34": "4wXJyVHfqtyYW4N69pxDR56qkbKnTaatuEwajhZunsExUJF8aQANyC92yYBzYnHvWP8ZXm72neuJ1zym4oXnmhS7",
  "key35": "2NksQbUzPqXiJsWcyfxRwdTeDeL9sxMAyQ6UWHga1EFcR1KNi83huJ5QSSDy1AgbESuxrPMrFAkNaxmEtZjfqmzP",
  "key36": "4Vd8U3vuFAQ28c4ZSQ2EgopNJYDMCzLJm8xP2GaKF1w2ZeHxifEH2ASQAm8VWjiFrYoPLAsipWtWjy12kpDtVjLN",
  "key37": "2YvMTXiN6gXRxKnpWWEcgaTjGnZvWx3w75nH3XcjL9VNUuqbUrrUNfQkJBYm8HRNj5HUJBz7xpTaxerrgMHaNivc",
  "key38": "2RSKYbWUHYqSpELYkJ1xS1dcmdLCyLYTRitYnR1svpAqJrPjcmg8bZ7X4XAo31BEDAB7DCGuDFzM1di9NgfhWCsX",
  "key39": "4CoTxCe6E8w9rcNqHn5wkosqDc3cz7LdHX3arzKBfa2eLu7aAhgJjFUTfsdLzAEZPCHHb3PSdJwEUHGRKWEgQtuP",
  "key40": "64P3pi7hFFVdsBNiXs31k4oUJqXSrQQa5zTHwjW1TgNPkqhBhQdx8RMktkFMaphYCxYMBELYJquX8bXzmoxuYMZi",
  "key41": "4YLbAkjXKsFWsWYKYVekRrUMSvQJmMUSt72DahwFRjr4F1XAi8F4cBV5cebtBiYAb7hVkkd1JsZ2FfSPwr6pg1LF",
  "key42": "5uPqSdWFjSwuGALYd1EFpoMfPo9JJv8B8HKUavjwknD7weAJFX49e2FXGHbY6dpWXnau1Nippdv5xehL4BQQZHQb",
  "key43": "41VpLpbZ42yzMd63UqSFXiUSWL9PCaxQtdm77iZ5KNV7emz6mJSopxouBY2F8VX7wjS1FUXGJYBxxKX1ibxtUKVs",
  "key44": "3178AmXDjhJJdTckq5FYBsDPR5DCVgsn78xaicbrLidvdLtHuuD8MDs8mBjoPJpfpPcjEVtTHB9srj9SdTFQ8VNQ",
  "key45": "5F2eSVM7hKHTr79UNfB2k1ZRbP5E6rcRtdJnmGP8oL1gu9vaCBAQ5Ja8yFD5KSSDPCHdCBTDDkTb7meSCurVcCFY"
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
