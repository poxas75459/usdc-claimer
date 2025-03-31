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
    "2EM7ZwnniC2YUNSkUUf4zPJuRPywJBc7Mgq9jPcKNPjstfZvUzCrHCmibPTSyLB47tmHpnXYJMQZeXpNDDVk6GeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WQj6jYFr9BtLwxiiZXidVdqkCJTDSfUzdSPS6eiLVnSHUPeuo1YQQS1sFHNKm6TQhdbHUqPyhJKdEjBKM53Z835",
  "key1": "J7X9kViMDHWd1DiJRXTkWG1Y3oqJo6FoZtJH7iWdwSEYPKXMmsBx5qHPmxkHS6xzE5jfzUbeCdAKaUAeMfhRpjj",
  "key2": "66uwboCH1QaWizwBMosatw24D97GxWDbDHAwFjzXr4xhpX4hxRpsoPcfG8Jky3pCxBSNPRVjGivTcdqcABSvFVEB",
  "key3": "3dLV5j44i2jRmqAVJJVvwAHoMt2mg9ov4NRwbJPohpeXd79vs4CdRBKu5KVhmYsmKkGBWifFzjDSwP3ni3CmQaMz",
  "key4": "44amuuJCQzEXLgQDBF6hafNjBqCRh5Ug3NPY7YvCZ9xZx3JM6y23SCF7wzRor7gmEUUKKGkFaVShfXimnVNgJCiv",
  "key5": "uxmNdMCoXUBe9oGhyK8jubjgnCtcrgjS85rrQeTAdbWBQnskXcfGyNgCQn2UtoHbr2TNVBsxqRCRu8YQANcmqrM",
  "key6": "44GFEGdsTMjATbtXxK9D767HWseRJ3PD1yEHdkQUcBY2V7rEoyHG8Tj7vBPQP3CXLqdubBcWKaaGURvtCigEFfUP",
  "key7": "35uetuQed67rrHtZXtZcNct4noCp3BPv5cmgtDitqgzy68fpcvt7BpJSwaBQk1zMFkbreZTdRo2nkcpSnHcdRbk1",
  "key8": "3vrgoeBqLgRUV4zfZmaJ4VRJt2voVuEVnJGW9KMNDGb64Yp6yjYNgV6LdQJ4U2r1SYkvgwE2Rd8bWxYEKUFr3upu",
  "key9": "5YmH8JNoGhN2XL5R2B8epARjj9oKS5yb82r7MxmXJT1oSdtv8mwCee9izx212P4pCXzSxL5FPiucYkw8BiALqXQ9",
  "key10": "363WJNXxQf6zAw8Dp4dbLGdgSwr91iy77ynRS4JzbSBZ8ZC4eX6LnnTuXB1YyzLpCyoNHGQTowgHSx6qRTJ7BFau",
  "key11": "geYGAwLkVNHvEuTFs9rCBi1BSQmnxfMGqzPkTYRwJfMBJzPHDtkuRWPZVnELD62BpVJ4sS6WRShwCWxRhUwyUWh",
  "key12": "623Wfzprc7j4gjtqx7YEyETzMi4VB1XRLduC3HC8MQh4cUFCDYiuk48AxebsXKYoQJDU1fZPWciX83sWPSunRpqC",
  "key13": "fyGMbZqCz9nanAbSbwXWjAkuErSY5XoojPBZt8VZyWAcj1x3Jq9Yw8eyS4EoC7EsXeKZQowQsUzKDXdBN5nK8n4",
  "key14": "3mhZSmtF4K24QX1MSyDkFEVLQZceDSVbFCP2xgjERaZ4HsYt3iMn18tUdqEHKbjxGhzDxP2o6HFo1Ss1JmCNQqfv",
  "key15": "4U4jyVwmbwm2AULMEdodTz8DccnhT6smmyANeg3AvvPXYqzxJnz79YQbNHSLifQW7t9aNu1YchgbrvtfUoStxZMs",
  "key16": "2ATHntTsVFdnThtgHEDRV9M26L7pgNzHFm9f2Vfo9pmAWd4uSyx7tNh8XyhR1sfSJVYAbhGPWkpuG3wYP8Ab3jPy",
  "key17": "3Qg5bf9sKVAh9ezjPXucnANSmoxFJRcR7vqF9TSDm82a7euWQnFv3qY6KcMB4xcHA8gikQ8gWpHdAAa9RrKJHt6z",
  "key18": "2igCB4JKWVjaZEoHXJXx9KqNEtyFmDbyK6fqsX2TJGgqykC6iTFGoDxzcJjAUkH8Dso9rk5BJUoKokAwhNa7kHMg",
  "key19": "5rD6WoKysPuDerpCaFCaVX3tb46z7iW2HmDFUoeEDKT9nWyiQhfCP4zpi5kf3Me3Rou8ppddhH1NqW2AevZ3ZRT7",
  "key20": "5BrF3QND99DxUuv7ZfpG1XLXVKPAGKLVjL7fCGDu1JJiKKQKtdVrbyaB8SqMmLaxxd6y2dwqv4qCHqJa1iTLu4SZ",
  "key21": "2UqwaJNc5UFabhnfrnHcKHGrPx364kh6g8NcawQio2Tig5JhYXijRUGqbi4uCwRyqTwV4nbsAjA2AUH9VLhJfjM5",
  "key22": "sKQzTJypAxJZrnnpTgRrz2pXB2QBEFporxkb4ThZdmr2KFRQUGV4hn6LtLxzarXnF5WTavrsD4HgTi1LXhvLige",
  "key23": "BEmSvamZe9JrEWGF6Sw9awxivt4Mo82NcfFbGtchA5fvwaKpFutWb8o61zqGNjTGLdbUpiQCcnUaAZEMKYmHe1N",
  "key24": "5EKoTzaNWjb3syPPuRL7VMCPTLSyyZ89np6eKZwqpBDNjuWcqrThLqNvEYeqA3mUR5gZ3AMdwcidGMS4QqGtseJ6",
  "key25": "3WZRYHMwpJQpdHoQwoLke8LiLh7MoGL9mEsDTSrCpiyg3J5k5w6KbftWXQHaR8X8TczrXxNcHg4qPyf4UgTekmpv",
  "key26": "21wtdsQmgXRUQVB7jL2x5x6CxCVR4mXo3MaKXfR6nvg2Vqf5zUPmvSDy3mYjsXGdxvDNcLH7uBbCZ5qiMdCkiQuM",
  "key27": "Z7GcvgfsoNWqRmX77CY7w8ogbDSYdM56jXCYpw7DwNSmrnrUTSzzjNDuvVagPj49Lr4wmnZRG55PPC1ZjyTCznn",
  "key28": "LPdHoUpq8GYRjwYWbaLzkvEjDtCghCZMK3p1xVE4mzxSWysnqdzZHAnxXTDL3x9JJtYqtDHZe7L8zL2uuveodKK",
  "key29": "FGtFsrD5iKjMBcm2SgRhKXhVPUS1QS7MhzmspguZESQhdQZTc9wvuEH65fhDTu6FNfmcSWXwGsMh4WnUqWT8J4G",
  "key30": "2z1iGzDT7Rkrm2x5Lb5etRMcuGMAzt6SZycUMs8uET1by9EagCnQoH3VCggSZs1kumZZG5ko8nAfAtFvKmuMFADP",
  "key31": "5JhW7NGwuvq4Emrob2zgzfnQK1FtgT1WBR7mTaxtik7AdKqifCxv6ugZDSbZNarpqjVCH2TzyUqRpvhPyHTXtXgo",
  "key32": "DX1dfqVPykzB5x7Vzovfag6ENhoL6DTgPKH1xVLsrNrpQvmKkZKim2kGutF57kUvT29k5LuAFg9M7SJAZAWYeNU",
  "key33": "5L8KWKPBBPZPcyBesJ3kpyJDxs6km25v4LrPEUa9s2QpPkcVYJLvN5b6GF4F8TjZYjbxSc1CPqrW6aAWEgXK1Ecf",
  "key34": "2g3zgzwgt9RxcULp681khNwLPhFd334dpw7XHgDYzJfFA1wZALKPiM1zHSvfLfPJacJExQJeiZRt23Lmy6cMFHUw",
  "key35": "56Mua1eWuSWzLVfAtcqqHMBKsLi3NuW2Tc7NCPeqZSFu3ansXqYEu3CGSw6WrsMuhU6Gpoxc6YFviMUSFAAtZDwy"
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
