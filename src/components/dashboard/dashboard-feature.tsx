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
    "XhiqeU3qcUseQRipJ6FWnDmh2AKD3JrtNpwfsJfMSA6CozpqvRHEhdagEKUHUDwpP9QxVj1kixm3HgBqamKrGLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sRXoUXSwf8dHv7j11fSq5ZzQWRtttAH7hzvy3jYKtRNfBzS99U8Gp4KyBEjMWVGaYoJFy6yK3fhcz7ANTumVuXA",
  "key1": "56uJPLjv2JuJVSWvjt3fnWAFGDdYF97pyqr94mUc11tF3xpZE4ZnZnD96jCaj9dF5VjUMB7C1K4xAgM15rnStUTB",
  "key2": "4JyMfaHcgu9x7V1oF8W4jw97cydGedXYqY7QxmBF77sFohWouaA6e7TjKpdGfoeoUPqsTKN1dMKWhcQHX19z1yUn",
  "key3": "CKPeza1bKv8Ps4JMDVWksKzjnXe6fS8nnaxEcTLJvUpRxtTkWgzxHQyVRbM7yiuJnP53AjGossbgDy7fRPgrv7U",
  "key4": "2JxmR64TjMmZaDGLB93KRsPkStAHuxWf8QHZo6tunqGu1zqjwfXckXzA9ujKc8mc6jAXBCV2sLZe12ZSAnK5FBeA",
  "key5": "33BA5imNgvoVEjK6TGLGUrXkdPjCBh2MmQgxbAwEMxBsHvnUZPE4mD2vbvuJMxmFh4ckAPkS3pNCjiDcWZCAKFQF",
  "key6": "4P4K2HQhQYMDkPDeeRuqDLfxAd7LrtbG385bbE938ZUESZSHxPmwbBiTmWoGGEvFRnk2xCxzbSp8MFZsgo9AFpH9",
  "key7": "3Z63ZrY6Tic3DxamW3Dc4oxAk4eW6z1adjizHS8LDDD1dTCLDBLCAJpXK1tBVCAefyC8Duog5MQ4jWbUNpwUp4Se",
  "key8": "5DVvQQnFnzmqxztcAhs9JYfn9EnfkViRafTHueXcVgqBiBNsZVRVadKNqAKitFA7qjuc16d7mWhaYSFg3K2q97ba",
  "key9": "25HLumBVNuwR5PtHwvTo2LfuGSYFuaE6xJhdzn9m6yeeV9S2nfxXxka7G8f4gMoFGg4h1Nm3XAmR5QW9LTCvkDcP",
  "key10": "2BAynX9muRA9DMG5k364cUHaCMEzAcs4JNK2oRFf9524NxuozXfK99T8xs1gGi35nyTMNpUz1AbqrjKJV5gjeZzN",
  "key11": "4yV6BXZFSbprExUSRgkofN6QqSobbNiXHgWVhteDyBAayQ3cX5wrLiNq3A2CcFdvNak2JYt57kqmUR59ywUwsn76",
  "key12": "4vzLdXT1FBfwneQKCrR8KAG7ArXLvCdya1zgdaa6fpcdKtFtDp6sUFWaEBPLTnXdbGzqJ1QTPDr12yKFAB3Sg8H4",
  "key13": "3S987JbTKYSpd7Fp3xq55J1wyzj63UfddnVDgA5M5wjQbW6FFgL6VnYjtZ2du3STxdxsuR5s6jjVAvNNTZipNZnU",
  "key14": "qNyrQGDdkr3G8phAsEMXvkWJX6r9udNpQLswzAzF1ncVkrioi2p34KEXGAM8yMMPFEoSMf3t8aRnH96ZVceTsy1",
  "key15": "2mmHaC8Q6cUFRsGBWdSM7WCitbVSKWLrgoPyRLSbR4YMU8Cgwn3mU9ciRkZBnzbjc3s3LCanLecgr61hfWjinRmm",
  "key16": "3mnPtT2nRaWCwc6Q12oi11dYiHmUBnC8BoY8eRV6aNbATfbtvdn9aRn5KPR3YgpgrtXqDv9ikU35huY3wkxTfzik",
  "key17": "5WsJeY8wQBBKnQ6zu9VVPBGZZ7GorURguFYQvBKuFVSmGTiFgcbCGaqfL2uhoDCDdmPgw55B78xY5q95pPwDf5qd",
  "key18": "3L65duWqcVqzrjqcfcKUtvsKZuaeHWDX8chnyeJ1jitUriD7TWgvMQ7rKghEioFgDvZDbVGGbUNHCHtLgS8x4uKe",
  "key19": "51bjHZSJr8TYJLK8TdeB9PfjbUfCcqN8R25MzrcA4n38rdmyG86eEEx6m5sFQHzjZoXa94LBdvDc3xSA2hmxJUyv",
  "key20": "4FcKMAFh7kehtGYBVub1sgfsNMfsysj52vLN2qeswEYV3e48rW7HPzyMXQDjcPXUAn7ohxF6f7foxh6xLnRZ74uf",
  "key21": "56gfrdHCpRqZp2rzaXEuTA5vF2ikHi27HJeTw8dEuBSwfwdHVWvNKXtnrBT3eNf6zfpw99SLKDFQWmKu8jTwzbwL",
  "key22": "PhtSy8DbRzUwrqTgsnkkpg3G5rXRsrPvQG6eNzYdfCoT76r3SmGKU2WBz6Z9tXXYzgNaKDMaA4Luw36jmn4G5kz",
  "key23": "5s3gXamwQBLUHpCnMj17ZjvHo7mj8ur4XRY1mwcbmHmg24NLHQwo1jqBp41PSqiQjU9BsnQYPwAzQ5nz64yyvPcE",
  "key24": "31XQe3WzRpwxHmySbMYcnFoaTQJNwVGWiLAhCUujUpCKpmKnE8fe5WtQ4w8LCXFZA4LxtScHjsVYmeR2FeM9ru2d",
  "key25": "Z3RAvCuQ8FZRNext2zh8t6Tn5JGQGPj7UTfMG5DghjGSk2Ft72M4FABakiWdjjJZ9Zx6wqekvkdYiHD763sjxxw",
  "key26": "2jAMFsb84PrQbyifqjaMMjM4aAexp12EPuPn2FvcPCG68J1Fsu7moFxpqi7c9jLvRSXv7GkRfgieW6Uy3shz3WsV",
  "key27": "3eXneh9QEYdN4LbvAPAdQmajfD4M6dYgUkLWAVDfZibeP5cA8RFo9e7oFbSksmFANetyWvzXC8uuwjaAtE2uCWcR",
  "key28": "2MVEWc1UvKMitXzacBzbZuRhEU7FNvQumTjPmPbk9HJADVrADt4XggHscmvLcDf1i3v6YMmH9giB295Q3jyjaVEN",
  "key29": "47QQWmJn9A6RXZJkUgVPHHJ6C1Z9bkPkKcufkBGYyCbcMWDTv4ePPcdscKPxv7ocuxtGngGWToW1EFvKTTp197Jw",
  "key30": "2ndp8gStQQYVykRb8HqCFUfmbhq4FRQzX5ugpQZZq3o37787yhMXcEhiU96wF4eYAyi1q5z3ZKPCD2uuCdbSj4RW",
  "key31": "mJ6MPbmvXE63kGyJTdDNULRMfk393Fsi45Gwr1xbPJvckfr19s8wiDoCe5EB79K22XnNczUB9b7vRG2TWwkFPa4",
  "key32": "1pfWc8X3LkUdaKni8Br75WEXS6xT6jcyNFDaiKzdvPAt1WZ8KVQ9Uchmrxf59YihbELzLjhncvrBnppe9MRWWCy",
  "key33": "jpuC8PRHuQXysRRBYr8PfbBaNB2quq6pxiGem3VXzYhqfPk83pphkvh4qw9KRpXXG64ekK6HPzYBXLuHWWPUABQ",
  "key34": "3q5zbfK1KQDExuZ5nukscUqjK8RHMjdxvf9BNaDrwjp4Qbk9v1cfcouraBnKM8BRMZfT4f6Vgm2gTX9bW5GLgVuN"
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
