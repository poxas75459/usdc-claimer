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
    "5bJR3zsRxmpGJiJNyS9oZ98tjas4TrKk2wPvZpexmvudrkJDdNQD8phYm8rFJq3mrbCC8Tnj3bSDQQ6cMpmU3RQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "253f7mW6oXbqjvP62NJqf1wwHZiACNrg64ehkVJdUsmgpsp3zn9NU5LNsmhCAU6H24pL4H1iKWgSDTbpPZ4UfUFL",
  "key1": "3g55BbER6RM2PQ2tLDzDfV5GsN8LZ4CrNV4BB6k5v6surLubsFC7R4heAz92rCHo7NXAKEf5kW53mP52CnvNr5YY",
  "key2": "Pj3EmuhJqyPDVUfNTvEgG1byamdBSbWTnyvjw6DzJuFfBanQN6sDoWU1BSzQrT7sKkYouqwVv9ecYbtbcuUJfXP",
  "key3": "Uk9pNFwK5NzE63iewZB6v3xSATX2muBi1h56fZ4ombx9htoPtd4bUNzUCfawgP2cyzodjc9aR2kTfh9ihLkPHiH",
  "key4": "5Xq8mYGxsuNMNeiA7ysWEHxCkNWQL8HwYP5EicR7iSXgZMCJTYUL8RxCozWhdRobwsYutq8p4DFqSCeDjoChWimk",
  "key5": "3Lxtysa7URRrKDswoU6bCehLEa5ogfb63NswRB8vAt5BAJnbh1gwjidj8bAdSHdFokm4SMa64pY6d2B7QHyuoN8R",
  "key6": "4pJZaXUMPZxmDr5Nbsk72XRxonxMn1K9UyZACcS2hS1hQCVcVUnKThvWzSZo7zJbVjgUGW6UJ7EZBC5vadzKbGtF",
  "key7": "2u4dtFZWLKj7g2HdYJQTs8ecEDEWrJ6uCuYSBzHRi54VxEreqeffVskMP4sBJRmWXPUAZp2bA2pfz6hKVwsx22kG",
  "key8": "5XjN5cZiT69zvXc1boLD3JX6eVg7uL846P4q2EaLKSb2kEZsqFr9xgSuFeBAN8YGZrXnTpaTQqrQDhkqgZnay23E",
  "key9": "4eV92HgdC6Qs4ZR3aaPfFwxp45Zs9Z6MCy8dSYyNJyX2PHaWkNu5y9VgbDBrGT5jJRokwrPFx5gTYH3i1yXeQ6Mn",
  "key10": "4GTsBjYcFKjKZ64Vomwj8LjppNfmRVoThoTvDhdhi3o1bXHNqyJoF614GPUWAkmNZTUWcqY4xKrgnhtJPWReAiAR",
  "key11": "3BZghu9chr2kzw8rs1JvDeeuN3UCeFAEXKdWoqzK2Njvp2Aj1hhJgbKk82x34VU8fq2Etx34u9QUceFuvDLZcDjh",
  "key12": "5nsH29xmJKszSRS3erQKxACBiSZqqjq3fj1AV32Po63RKR6BZKwATyfccz7GJLaxJXPxRZ8Cgtdkr5LtoNf8qZRh",
  "key13": "Phns36QvgHf4b22euHLdADqebhCJt1FtEx3L9BqSVnYbmwqzZUbmAxpjHZUiN1oow6ubo1nYfxNJvqSSxZkk59y",
  "key14": "3tndKd7risMnijvDuNf3G3xMNMpg37GsomP52heY3C26iGfB4Zf4q6usAzRwVfVqX95q7TRb5Q3TvNCp841WMX47",
  "key15": "2rJTNuStPqi5gd5krtUBXQH3Hk6tyLWxr1v35zuZhcq2ZwjbY2Uf7GkZy6dR3XGpoquZ8BDEw7wVVaVZphwrdByF",
  "key16": "4GFXiyS2JmiitSGiznipJBbX8YybRQvFbe7sp1DGHThJWpFLfExxG8AxUQu1R46rkcUcd7RSY2cQCCASLPiqqCtk",
  "key17": "36oaEWiouLS7aeRKyC8hBZrhVZgN1oxpztuFQH49r18FX8zHf9P941ye3gnMKUmNJw5UCJAnzCEqngBQmkpBDiu7",
  "key18": "2Fbvtkeu2R3ELjuedXzA74YQLPnaG9nebQHxU6JpYfLVU2aCtEDBwRcWjmjUn6BfxLHVPysiPeGVA82kBsQAF6hc",
  "key19": "517QMtUx7if8bvWPfmYmL9S3R13PPuiboDULVySKzNCj8n7kr5SoLZj8dmpJmymJekQRLfX1jJmM8Sr4m6pyLDnn",
  "key20": "5xouyRxnjvCKq3parSAqmE7dSPdxToysrg4NPfwRdNAwfy7j6N8wbgivpGmvRJx8qnHtBk1jyg8d37wydJsdVDbF",
  "key21": "2itXkhLkiu9k8qTqXeVxKMX8TDo9dQobKTj15fBzxjYZPK8F6aB3L24fzLYEiRxqomrA3VEZDRNG82LEn9HvxrCb",
  "key22": "5sQhJECtJKB8X7EHNJ9CXFrWuVLvgGkULSjPtLsD4CTqDaZwF5zS5pN9B3qizcLZJbLHKobGxroTRbD4ejMSXPgq",
  "key23": "tPN6Ve4SXRByfzkTK1MEd2FvDED2vcFChtiHk6VNitj8RxQedYAFhLt7B9GJZH1Z3pSHkPvQMX36Poptnxoq31S",
  "key24": "EXrtp3hkQ7wWfLHCiBnntsriLi3UyA4TZtU9SayPzkv4XTvgUbaCB8dqMR7NA1eV6UStdn7j1K9b7XM4GbdLp94",
  "key25": "2AHBvdNnx6GJ13R9PaM3giVnqZZj3nUvMsppFYGLEdF24WGqAcQuASs5U9wZr5ezyYfHuN5Zp9P63QaxD5aih5en",
  "key26": "2SxzyNAADRNMouUCA2BUBfEoS4W27k9gk7sbEUJLTqM1yoTghigrf2HLXuhQQhiVbbjBMakVLVcBMv69ycEtX3cQ",
  "key27": "2iTPquMo55FMnoWrLYSETsEUktZry76PDF2opFhZtSZERuimEtjqwUqr7FVh9mBgndxjp3Xyc3tLUuny7W5od1nd",
  "key28": "5JTrZikvmBhHmb9uZcEK6KCqAQhKsFP91apnxRBj9skfviv9WYRb7UDeSANvb3z3o1Toqiv3V4vybcgEoS3oUz5H",
  "key29": "4KsApxcc5VQLGNtxenuYRPxXrf7iQURmNxZBjBkCiVtxNiGoGABGuCXKrtaJemp23YQDiS3A1WWf6Un1jhhi5YUt",
  "key30": "3L33zLMTqU5ACQH9NPPjBVgrAswKY4HwKjw6tirofLv6yR2SrFhuZVt7xdjzxPFHQL2AJFHqmpeuw3KRzLfVkrX4",
  "key31": "PYxjW5y98m14H1nrFPWuWmcAocWr1t9FAXWJzvVYbT9uFueL1Vsw1PRaNNq3yAXwymgbLa5PEa9uuYYyrdoxh2i",
  "key32": "3h4kkrdnzionFrXb6TKKCLah9U2ksb3NVuo2kr1XLCn23TZqZCRxywRWqK8eLkVTuH4pb5kLTz2hntQuSKMHSCdk",
  "key33": "3RhcMaagYmtj77pkVgBN2cTExmhyvuAvRjXauoiNhWc5LdXC2B79decsNsdPQG77MLDRAjkW5gCtERvHgbeZZ9iZ",
  "key34": "4b1Hxhhj8ffofM5LZ3gzpsEG9LNbP8U8PHdjQBn3disaofbiPrjFGd3fcjZKrqDJ1vvpxbeNVmLd5vAt1HngnbMW",
  "key35": "3AJEH8FCUARwFkavXjijfqwse1LXptnyxfLAgzT1aKUMSnznSBZJMJgqvSPzmv9JnBWnt9KfkfC3jFbV3rCXrEvB",
  "key36": "2UhA8WjWC531umFq9iFntuyMiFmaHR6R2QuxJ84bGmdrCPz8ZCramZBrywLCzmdazBkDTyNGujh3ivhYugC8ancB",
  "key37": "5Z7t8vFhrJrgYccGzYCJuctoV3rEa9ed92yAQuG8st4LJ33gWiFic58Dh7UHwDtmTvMqCFyJ7nkzdym8W5yoBCrB"
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
