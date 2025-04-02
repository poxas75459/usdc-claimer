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
    "5NvJUna4yZQ3QfCwc8o9ePWQueVdjey2bv2iod5SEgCrndwJ7E6mEHjUtvP1UuLu7kH3wcHBUPJfyj1g7ce3Qhrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X976bKJhs1fVd3ZWZCX2HXK2WF6tiox1undEn9JLDD4sCvb8SvYDuueJ75z7maqXkJzGbZGJQsdft289SM7dfsb",
  "key1": "3aFNMXVWuiuQpLQcVD86Mg781agE646mooQxEu2nHHo4BDU5E3HbFABsETq1BJUP3mCpG5NEZkffqdKtZ3PFcxti",
  "key2": "4DwgGDhGDFWVG3mjLBfc4uPfpWSaPUKL6n2CprcXx3ZY5xV1kSHzhL3uEBMn9zPGMADBDHGadmx9qq8MWi8vkuSC",
  "key3": "123FnE1hNVYHPQRC234akVPmKfttQZVYSGDRXi2yvr6VjZWadhmjUHsm93Y8tCpjAp1irW9fs7zdFUP12qvm9P39",
  "key4": "5enMj6oC2XHtBFZ2gaL4KphxmHpotX4SZ5gqio6w9EYVo7upnSGPXipUM6fa1BiNw3L2NYUT5UVEombAdN38fVn6",
  "key5": "62dDnLyfxyNzwD5UtHa73GqeuFXnRuEhFFoKY3S57tQeVoEgUZdi4xYaSqyAg21LKG5BPshJeyp2rwn5pRchwpAR",
  "key6": "2vS651t5JxQQgRoLqBiqXXJFFKhYn5PDNfVnyJ2mt8zNZ1xNePr5USh7hDvZZaXBPg8yBWLDRDb9SwJWq99iW7zq",
  "key7": "2F8VsJ1gW7UT5jJNMWxDvhRdbR2zbx5eduKxNiywcC7wZ9PEGaE7PPWemBy2qrovyNqkNvvcGSmkg76MXwQci5LS",
  "key8": "3XLSfNsLRd2cRHRLyLpgzUfpBMUdDDfSytw6WNRxbYk6Hk9KJCtfGhtWKbe8us3mpuhum7UgicfDmkSRwvQ3i7Kq",
  "key9": "5ceiKby8WbFxFSARUf5buw1JJLeb4sFwq7UKPyBVj7nz5P13Y5nkQH23kfLBSmLxa9DvZWyLzcMtbGMUvisD3Wpp",
  "key10": "34vLL9WJTFyLgUaT8W6PLjLXL42RtMjhqHDq1vViktnkrBjpFgTTjNzQnd6RvxHCvcFr2mGUHQCtxsvUbVfrdH77",
  "key11": "VYGoZN4TVdQqTVa9EYmTXJKXukgxFPCXtxQkceUZids7JvpoiMJQa4pSqDvxWRE9VJc6z39ZzN8JTJNmnBTaFHw",
  "key12": "visVYPxZytYUva6U1Fq5fUpfA7EyNiMyq6spfdd9mZM2H1iDdUYLfqA5ZCeRo6qXStR5FHj3vHkCbsFSmhk1Rzb",
  "key13": "5xsg1BoyGAbJfPg8NV17RvZT5VYUa33KqNF8ivxWDtyrNALtxkLvmTHyfuUpFC5cgi24d4JM85vH5673esRwSWiQ",
  "key14": "XehuY9qQkrpR4TsKBzyyzg69EuL3zPyebAmGy4xe4j1MWkTXBC6yQtaeDJVAyP1ZTKNmRdQrffy4ssxFe4cacnu",
  "key15": "3CCHCCeWvUHvHGqaTetnjs7YR7geqpTym6FodHZgXNT2vNvga3tBUhNvHPKEcFFbzBwByE7wEWcKmfWQBvidLSfy",
  "key16": "4tRN2TF4XJiN14dMM1CSUZh89KecGy58Rce5drgKc2zkNXabBuXuvdG9ZwVgFUhQe8MeHCUu6HnkcnESb7MKUnNG",
  "key17": "5eqxaMjHyN94H5Ak8nwC8RiJyedVLQK591hckZLUBmuYDtV9YDSyKmzepzacNeEM6iaBv37MhNv2MkFxwyLjxPRF",
  "key18": "5gpHsBkozLJt3PnhJBRDujFexvNbDYRLVZzyNEgJA2xAWh1xgihDkyioCWmnMiNafQNAwFvYXzPY6jen1pagcZSS",
  "key19": "2qphRDda2YPJos7q2T2RAu93CK8suKr3jUzYYEpkyYuZDdiMjdL5Bm5hUxpRFFMs5mqCssPT2R3BgwLq5zoeTFGy",
  "key20": "2x6zReyUn7hN4biVezJW8FpTUJjHLgvHTWCPkHPQqaotgVhCsVGDdyKYuGfM2FE9mfZGU65DRXaWw2Az7PFj6f1d",
  "key21": "73LQFMoMrRCdnLLAUMdt8pLK9QjxBeshTRZo2Lz8H7gnEtiun2hMiLs9roBUZv57xMoRKiJwKHVyjGXVxxktkdf",
  "key22": "22vLTzf5GtAUFtGK1XiFx5jEw2Vvs1SESyVQXFvdRXvrEdrgHZcXux1EQkVDdqo9QTAFk2moz7pggu8btEeG5WSN",
  "key23": "2MaEMAZPqf9K5aspDaUiHQp4e5UZXrLn67NgkicM5fR3bTrrSbUiHhuaiuNmbM6QPECU8FPHQ8KRJeYdTEMYMS2F",
  "key24": "3XNPGGoLgkeCw3Q6XZuoZpXhRz5j9wgU3FfgVaH4soeoC2xHnUpu7L9pav9TL5bRAMTVhtUjseXXDdqp3wzDPvCV",
  "key25": "3FrVSzydMv4416x3X91SeCyCcJHcCC7CJ7YS7y8xqvh2kftdzdt2uVJL6oaJfAxVz6JgiUUa5ReD9rVFmdRwK1fz",
  "key26": "2WM3vz5uQm1hJS7tcY7ysE57iAHKJswANDDqqnvhCspm5fMNHUbjLGPqmsaPe1Yh2kyznC816EUyrmQMsrMc3KT",
  "key27": "2x3R5E6PFXQcC5vJ2Fz36YkyjS99RUfMHKiyigg2aXkQzbcRuFKix6kY787rMea4S5ucmBMECQAtRL41EEMa9iVF",
  "key28": "41AJqqttAo6NaMoanVYERpkjT5W57WmuzZiAt7kKQUQmLd7wgfL4iutL2ubKmTwJVTzi22EeDiXbiXkhAjk14n8t",
  "key29": "6CZnbMAuG8Ha9nfGST69cgz7tCUM2D8xmXvhHKDxsc8psKnMNzTnVzzgs4c5euBWFTtKsMzSXUb8JHoSQN15Da3",
  "key30": "Ujb88QQGszwfGsE3CUqvZPKV2aZ6q5nZ7bRcsyfboQmtauYSUoeZDcWyH1xiQaefdrZFHZ3VpjtMhgU9hQ4uqzq",
  "key31": "oh76aCqV3CGKFTEHsxXNqsXHipm8W4W33LfNoLmqjTxPMck7vhhHptgxrR7WGQkjBbpZNbzy3vHBbpypU34nGxF",
  "key32": "5yPCFGmz3rGeAd4yAwMP4MJvXVjzG15Kp12jvS421qZeSoMsiRjrNBwosqJzKwLF98moVqAhJ2Yc5dFzcBtKrFin",
  "key33": "3XzwHgwQG6g4XuujGiTH3XBQMbdq7C8H31L4kWpTwG4PbWRZTdfU2W1vKwYZZU4W8mirERcWDDSVeApEbuEoNtQV",
  "key34": "4JTMcWHvpJN8bmPaHF31dKnNaRkAotLhz9jTYAhipxTjiYBSp82Gv7cU7QmYtNAn6E4QaAWZCuqjzWh5aMbDvWrH",
  "key35": "52VjCMhKTidx17Guzn4Z5MSmYzdWjZpEHrxqeqZB78K9ux7aacgibBYfXtYcFNM5WSGCJ6Pd8vELKEESt7cWUHe8",
  "key36": "8TZCuQ84ymY6ujAznraFaVU8WaV2Z28todfqxZw9KE4AamYeWPRgkhswLvMMDeQxaR3jD9xvvs41BmKB47hfvat",
  "key37": "3T6WVXLzuYs1BeqimHbBwJqpnLwK26Rv5iGKRJoNqULFhFVUXLqqmHh1F9yHSvwzMf6BvYQnNfuxXs7QYkvFwMzb",
  "key38": "2zQ2oKSu6N9wjqdZaMWZ6krZLA5LQ8Wo6N9JyHbqFSSUThPrg2jkvJdBTZdmQVDmFWZ3aWoP3HUTdEXj5jz3NuaS",
  "key39": "66SJdEXJggXpRp7cf8gJXHpmRRsPuon4FTt7VR985jw54EJegD393YuDprf74VE1AHFGXTa1vRJXGqz4WiZtjnz3",
  "key40": "heAmo8wRG8ZmdYAQZbLNLpV2zcj4GoLDDbx8Bw1eD7wJgjttbYtRc2mrkcYAKpBh1TBgyiezTJhHrL5UMpcpSfh",
  "key41": "3tZE95QRKXAXuNho4Yia2n5rnS45Hq3eW4LbtaH39m982WVTMipHjM6BkGg8CZM26CXsHPVNSUQYWk4mMqboeCSr"
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
