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
    "Ui7NAraygYvjRL4eWsd2ZFG1Mv4GaBKrSyoxCJdGVWyA5dxRBUfXciRdqBj6xqv57maZvqo7Fesk1HsD2CJ5HBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43kJ51itiiseqn6R2eqhJy3PvhMmVxzUGDMdtmRXDFVRz26q566Nw9DtVRhy3xuCtUeymeFbbZiL3nWHp4sUri6r",
  "key1": "86j8uRuA35KuaXekyvfEN1FyUfBgetbfRPuoVQJcY6mcjhkHiCYu1mpYcg2QDmbUHKmj7P3Lu6GTA79m3jX3hw2",
  "key2": "cwGUZDiMChTyYWRs2FnKhq4ro2Lk2BSb7MoQPDsgyBPBNhzFGN98ZU2m1DnDWMLwm8VtNPtfpjjjKGjsah5ydXs",
  "key3": "38oKBSuaVVjk6yR5AFaASeHjC6Thu7eVpfxzqiwvM3QBD8gweN6QzSeevq9HnXKFC6dc4PqeTW8PqBLHBXZq5r8E",
  "key4": "3T8xRMBtWVqrwj5MyrJnu6SFd63UhgjJJW7SrPQNjofG16XUPXAy8U6weFS5DQAfBEHGNM4PZeWuAKfcHonAkjdt",
  "key5": "3ZEMGKeBSyh6dEM5eeuPWsQHV9kpn29zMpv5Te4EZqqUedwvvPGXWEZccT2pMeAhpW9i9Hvgn2Y5N5c4rsqNtwUB",
  "key6": "5Lad1keGLBhT1kpJHSQd3hk32wbHmRBEH2NQmVpnft6dLSHeMBW26d5QntHYWa1MTAeSTPWod7S4wefcuMuPJtRR",
  "key7": "3bmCov3RUkaSFLTc3zYnKQSn6dY5JpK1cv7zweVNMtTyB66dLdWv1GubC6Qq2gVksqwEvaiQ2xyHvUF5Jaqybs8v",
  "key8": "M4ucUCjJ69rjJwnTD4ey1c4PrEhu4Pg4J7Kvprxo7FWhHazf1Ae9GxyPzy9dM9KCsVew5gQQa2gnN5kxz6xSKtx",
  "key9": "4Q48hUMSG6huXhYiFNnBt48J9ZkxjWjY6F9s8ycPtz76vTQUhsn658Q5fvLrT4axe6iukHmHPWBYA5Xs5rnf9Adw",
  "key10": "49znshhKmGdqdnwpWWH5SmQ2Er2enitNeiNhwRq7EYp7e3V5zbLwjTYGUXGh63cpqnVL3wo5CAUpdWq4rWkJu8bM",
  "key11": "5zuqFDAfTf3YWTYpqh8PcBcccZRZn1Yj8zyQ35Qyr49QtWXWHHifpMrw4wZjtR8GNdn9MnJ8sVBTzJt1U3V956e7",
  "key12": "4TxEi4eseiXLkHSs8ggjkk22T5NL3E4dUCkP1vjYhAW8ueA52nejdqjutQBzVoXtF5yoXjuYNfPoRFd5bX9Wqv54",
  "key13": "VKX62PJ1yhjKpBu7Dr949nLSbbVnCCWbpZXsqTbefjWcBTPooSuCamXd3SRdW7BP8AUvhtbxGaeaBdrDDLHyFqo",
  "key14": "3JQS6DUZwE1itwfjn8arN2LDaAcwbvPGvmV6zMTnquXb6XFa5iuC6cMBsb7nXbY3m3Mt7zWjdVtfiRkZkK4qafDs",
  "key15": "37vULBvVMyAQ6FhZfXDVC7QxmQQvsSTRp549L52wzLeYE24iZXwg4jcBHYERn8chaMHTBav8xx4UjcMGAKvsD26R",
  "key16": "5zSnCNVDwpVKwnqAW338LYkTtbT9mRYM4AycT3HRMz4kBdr7qUNzSFZypEPa2YNgTZ6JoBqUYJu9Kyygzat2dUCJ",
  "key17": "2HSJRqniDXVY9peoHsPXFAfwE22w5wd2jyKaL4xLhQo9Euj5omhreQ1YhSKdKLByB5eosGPkGnQGVyQHcCQzfK3c",
  "key18": "4P6S3wnP61jXRBE8LNsSyrBJaU2dnvC7GNDativSNDh1T4HfTsajmxGsBzX3sYqkoPHMqUGSh6mSAJKCL9QcGKVJ",
  "key19": "3eUv9iu2R2PVaonjyv3NL3xeMCFpzPAKtHuB5VfWU8kdujeuFwTWiQ2p7cJzdodExMpSfnn48N1F2dmFgNF4B9t9",
  "key20": "43pTzeFzR3fNhevG4xvZwyE8j12YY8NpYvwfDYEJz3ySGtUdpXJtEmCHPmgN4wFyTmrje4RPrUaQyFBphGn9BXX2",
  "key21": "GfQ3e4PcXMa5VTLCLeQ3iNKivKwowT71qjFuLeBd4W8DQBRiWbNo8k41Dqe7YMfinNbRFShQ6ZkzGqNsQznbQAh",
  "key22": "2VEij8RAuh3du8HAbGHkgqoerPB2Bp2Vxu3fwAHWgipXAjw5M1mw7VQhivg4MYcXYaqzm1wGCbxWrBT6V2UexEHN",
  "key23": "i92vAyRV3EkqhJYtAHuBwTRH43C8vfPSQzhkCaAAVnhNFUHH3V79vojsx77SbpGrF8kVZrNKRvgLbk6hBwmCknJ",
  "key24": "2kMtzcQLzwfztAxvPMkSamNkqivWDTCoLidDaWoTvXnpsyKovCfhn9EuJWG9Yq6pXQRhe2fxi4RKzziFLnjoMUu9",
  "key25": "5PtS8Fc7Dtr1oJFaySbDPSWPaEwgTgNGHVUxCinoUup2UXrgnMDd7y2A2FQiaoVAXLoqFjSkLqmmMm2TMzSALzyT",
  "key26": "2cSCYESM4ncA4W1kCwZmoh24cru7xcHe6GdXSaAc5wknUQoqBRfBuhvnJcfMeKZaQGMmGWD8fVgqo1cY3ZxC4NR2",
  "key27": "P83s4FEdftEHHg7m2c2SWjmMxmKTZkhhJSLjyenLDKvMuY25YhsWX4ihbBq4NeWDAeXDJcRYbufFuAoGLEjVNri",
  "key28": "rwLqbdZb6ExHBafXwd5zN92o9CoV1Y4Q9D3FUF6NhEbFWTPN5HdQ4qcutK8ezffYv9guNVC2FtiicAfvR8MTsXM",
  "key29": "5g81UTmkQz1q17QPpGW9sbubm6vCL3NY7SBMrt585BFrPB82mtbk9zpKybTq3YvLDPp1KmxTVMhwsbMf5ANuzp6b",
  "key30": "4AzU7Zy6uT1WZFaVDPpUyoh9pAKJ36dHr88pfzjMpxXLqDraeNjhAMhHfqQVTriYpQaG8mwHzHZZFLZJDd6nvbDk",
  "key31": "3NJffyt6ztBtWAefn2242e1sF1J1TtwsS94EGgejoc2Hcy6zz8A5nnADpDPm5hrpMW2BufCD2T12aKM5e4wP6bMw",
  "key32": "2Xsf7MgzZwENP37ZfJMbc6DgH6jAubCZhs95QbPgCVYhVyVoqaFHEHGJu474E4MdoWHAuCp7ayygKkastVRkTAzi",
  "key33": "3bCGNi2GF58DFqkty5eDK4UTSVXU1SXoR17CJ3GhM4J5vtmRj1852s4xFGT8RedozGjdwBTrDZa29638aZxBvnjE",
  "key34": "2fnhj3MNfTtYTFtaL393cyax48YMpnqMUQhhQZhvSMqaA2cZh19CJRkuNH71xPgM46a3m3jx9hgHgjW5Kb3zCeNx",
  "key35": "3Ly9q7xHzyq4qkC4Wmp3re2BBotH1uMEvjPoJFv3jq1h2mjFSdEmApemaZJfjkuSmk2MDBv8Tju23cawS4zWpw9u",
  "key36": "4bKAS2mYbdh8iihsHUQBDqLjFgtTbf8aBomqge7cufhswks1YUZd13CFvA9vSCSyi9FjmTp8HaSxDrMJKri2a6oP",
  "key37": "33HVsbbactZMY3734nQihnyuCCCHdm7sXbnBoDwrJ5sJnVZQ8ZSUpKsXVu8JZ7nuCRt4DyD2wEA9P6yZB93ohgn5",
  "key38": "5hwKRXsmFKnHMaoJWzBfjxRw47P2cd2ZDKkE2TN9RvvBnNigTEDmJRJMMhgve8CpugafNcAL1gkvvxoye3pBcEob",
  "key39": "3LABkoF9HK4MpSbHi5NPxMtphc6miAdaBGK13f4udfpndMARSpjWsiqczezqRz1ft98VuwgyMi2gCB33g9REguLd"
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
