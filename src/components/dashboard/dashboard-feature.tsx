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
    "5xBhDiM5zhXPiYwoftijzybBscDwWGrSPCWG9kDrfZHC2ftfTeVzCgx9hWiHDSpz1V4rPX2RDrHXVV7qaEA1UTyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j6XAxyK5rjAMoPmHuQxAcfqiMESjYhEiumrHWcWiNUNnQDUUsVR26SBt355Ur7D5sqxDDwpBN2Aaxh6MpJ3FCmr",
  "key1": "2nRn1pgHUM3FjeQECvPBonoLbpyxduTdmfpHn363tsuXBmxFTA6yqh1KEtgndhQfgfjB8b6uMJrGCXwX3haXTvvf",
  "key2": "2RQbnp6if8sM59RaWoKm3w81RFxDs9DmMuVde79Qcwg6adth8ZHJ5b75R87msP45ZX4Pmac6oMLXyFD5AREUcHKf",
  "key3": "4UorbXGnEAtYxZtT62bRpkhfRYWYxc1eSVbbXLLFfYm6m4amrUYYuhe3wkHCTFX7ELRhy7aSKpGGrBqdBVqCnycn",
  "key4": "38femGMYHk3cuHR2ZPJG5EvCcJD1WiY1v9A6FevAKVAYjqdAQHic5ZaCfvtEE7kDQTyYvAvvbxF96aARmj4bbuFd",
  "key5": "2Ju69kTyegUfjWNQUW81iaXLzRucWJmeMiwHx6FqFeQhwjxGejgWRfEbtjDQ4J5KaNPWSV38WiB41BGZykP6D5dC",
  "key6": "5FWsdEcjo3BQ8MXLgZVP5QGSCntticL9Loe1qf63wroyJhmkHJjB7xTr4BbXCZXtyWizJj1Uh2JdmRxRej6RBr1q",
  "key7": "uSXtLReeMNTgy911QxJ3TLhoQM1BVuURBdbtmZndbVFWNs8npUd9HB3iKh7MZ25hVu7UAozkNArNfXfs68RKqod",
  "key8": "2XR4P8h3yNv8He1ftGxUe45aJU5B1pitVRtbjp3daKPJXYoHFXgcyc3f13WsUHK2SFGk13GTNwmXC9e2PLcUFmWx",
  "key9": "3TGDAwSiGmgaY1yzmowpkvhxc7reaw1bRzgGhrJA9NBfFxcx2CNXxmyJ3TKYSMzAPUo1rH23YYChKNk4B9eUZkdD",
  "key10": "2stfcAvfAiwdC3YKxSxowtFrNo23qWcheowTLQSJ2VKVpkzovAe7WHDoCs7ARvC2KAbx8aLjPENdu6JwefvQqrEj",
  "key11": "GPaEM1k7JApiEVMVXain3cQUfUQYywDC2wK9nwWcqFS8XGJc3X2Bx6Uxj8JQ32triEzHatMUrJETn1q2e7CmHop",
  "key12": "3Rc2y4NgBfzcUcmnFbvn61hgsYmgL7mfhSfMWyYaULGmWfg8MgCe4G8dqL4ZGwtgELJHsySL1P9mrUQFFWSqgSeq",
  "key13": "3S7Qq63tdCAnS6Mu2RxJN9fAtCNUR8jKoMofDbqGAZmCKkiSEz1agtVJMCGRaihd7mj7gFh1T5kPBfSwpqQzPPDP",
  "key14": "3cbJkHB3uSvdCWA8KLKkGcgdcj6epLinnkomhPqe9nE9tVZPhguqwNrYJcoMa1ajmqdd5koupKiuPdBS8KjtWd6f",
  "key15": "3MSUkrLZCeY2RBDF3FGigrb874akLL223U9feH5Ybyqk27M5c3VVqkc3dEr8rimDoHpkVoYQn4HQhuCrZhJu9TSp",
  "key16": "64KnjPQecmT2B41pZTBRDzKwJjLKMZzF3oJwDR6P92b4QpzR3vqfjJ8mGamuzazbmxb4ki4FLdMTnGxbVudP1tej",
  "key17": "eqTTocphhVeq7iJCZnk6Ah9Ym5dDepjaAgpBjL5j9Wj8ZoDdS1qayJwpVoWH3Drc7hHDEdvrLemVN7me3JTckQE",
  "key18": "42jgemZ2vHwZqiYj8Joi16EF1LzRs7aGyB7imrhKo6eoZg8SecjhhkHf8QPGr58yWzhQEUJkj5KwRdNvQgB1DDRW",
  "key19": "hVWmq25S3n4KG26pCtBFeRaLCFqRkNLUqBgaZeLRR3E15wGnHUbVYiW3AUxh2w1f8v7FbmYrzvZLQiSx5qVX6Uo",
  "key20": "2WeqwjBN3ugqEn8P4DPxknidPkv2ESMCQsWDjnfJYakoegYD43pHc782XYq9N49jrBybtkQ9kV6JfpepL6TiFs2j",
  "key21": "dVfctoe9bwBt6vPXm9GgHgKBr73fP2QK4gNisv1XBfCJMVpngYw4YvpCqFxLxVSR5kGUFc1hn6fXuCrYvN2RDcu",
  "key22": "Ahmokh8e1JB9WyhA9J5nU4YMrodtFxc9vXtE3VkYtY3T1YQ4QBaweju1zNxjNNMmaZH6J3559Sx75SMT7S9Gc6F",
  "key23": "3sttzXjwtFLfSX5LiUccqDQS2Lmxk79p5AaWbiPZJuuC5BdS5kUtgaVPbm6f1ZMatnSPB3SKN9U7PkjaStQT6YsN",
  "key24": "4aShhHzEP8u5cUQWjUHFUrfQz2jGGdEg9e43xVQuqVHL7MJ62gXyAMwT23SC8ZtCLQxd1ZBsNcJV8vqHYokR5NVs",
  "key25": "3mxfUBeuiUzQZziHuxa5SppDNgj8VHrrSZHN24ZP76MYmJF3MLj2kcq1V7Y7iDU8SdTd4QVshNSjnmJ2S4PH39bq",
  "key26": "pVRE546Lz8zzGF6GYZgND4VaZnYuKbzaDXmscCEBSFt1CTwhL5Cgw4BRkeYQF3kiiSfqKVjCV58WQM4kqfJAwJU",
  "key27": "4xhhaocimCLUuqUWzTN4DA96oYZedYzQyCXZNso4dVBMPFWGmY9JHTrJu66FUMJPDHvkcE6mNLmA7acwLe9to6bv",
  "key28": "4bD7GSNFca5CV5VB7DFBRb1gQWAqjnm62eUXeVsMMwpBMNMhRs9NT895xMd2HRHxNwMvUnt7vG23FQDvhXFUffhB",
  "key29": "3BUd48sGp2H5jgofQPu1Le5WhJvLDh2UpeYtTnUEuziT9XhAFFdRiWLFfWJLzWo3K6mJi89GD4aJg2haAHMazEEr",
  "key30": "3TXrkvRfisdGRAZmfXJ1Q1822zm1xtZVCeTonqvDqMRy9Fn66gbgjF895HHSY5m379R3peMt1EK7Sro9EcjH2Rr8",
  "key31": "3TeyFS2Tn565MysMuBeoKEo1QmSCEbK3HxGC77GAfa7zBiZ1hD5vRLXhvpgSctmU9uUfSq7WHGAaVfKgaZ9FQEUi",
  "key32": "3B3Zqo7NevqfxdEseDHCC5QCrhgfKGXRe6CAXapMHfhzLhGjhU1KTr7wAmG4cF6T4RvHzQneDDqH7NvEVNBBFYtj",
  "key33": "3V7c1kPECdYGA7zaY4Sx7tUrT7bUekaYXYsztdpomVM2Ed6sgrsai9bHrAAHXLp2ZsZemEr7yC1oLZJ59VPPqq1W",
  "key34": "58VhWzctP49svRBPndY6CSGZHQ7KCQGSpVEX9bvwABjTgtFLqihLNxBUt3oD82ivffzp68L9jhGoFWTK1Ht8fdzK",
  "key35": "3NZhNhjrRfVDzdZGvtbpdxCeX7eNtx7DywdKXniZqTFPGjaqoqTnhQMAySoa3fVKwVcK79FMhfNtHaZCCdVeDtdg",
  "key36": "5dw3ku2dZ98u98VEayKkB5iumUdHAwDqwn6eDGKg4PgonwFZpgpvCReDwChPVTYiAtcQjYMfn6SQq5kAUSdoTUNm"
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
