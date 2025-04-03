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
    "596vrc3EFMV21tyvvVVCDTLMKDe8W2fNnQo6gpTkjbe8Rkq1nNnVy5tRmqpvTJp6UXPNsN5eeCmzPw53KrefumFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XQKrw6yo8bXBcwtfpoAJwVaApqoXVkZnHkHwBZKvUZuTQeMiFCoLvzYoCZeQniCZnKNqkt9T28SsmKjKYE8fQXk",
  "key1": "3Sh8QToqPJtywmMbkfDLaVbXoPg3J1wCM9upqjeF9L5mR1i3tCm4LSLpNrpSFmWEVHHaUeQLH88hmyGcvQLHvrWM",
  "key2": "2o3aHzfXCXf2pFAgHewF1k2MkQLxS8qMag7HnnedN9GnxyYEVaDx5tCyvWy3TrFTRHWfVbdBwvhv2AMmo7goZNWM",
  "key3": "2k1paGwaGcLceEr4LaotX4ZHBpJHW6f8CqjafGx1ybPowZxr2t7bzCT3TTaN7oLY2iywH8VGXa5DmpfSy2o7RDJG",
  "key4": "3ZBMgh4o5tPYrrJWFTnUEsE2kUSdGQeP721TNeV6xbHtMe6vu1LTQmn99rrGJPQQUQG3bUMryXkgmWsp1cpsuDJq",
  "key5": "6657C4N7spLskQTqXtPGoQuyJzSwK4FCjFbZcNxBKj6ECeqPDur8fbWPU9uT5dYpeRZpTeGKvBPvD4LZy9LQDGhm",
  "key6": "3xEFkUXpRYfyhiyRpATqbwPyQDvLyx7ivRNK1W7dfu9FNvT8UtsUFRbbm3H3iGYyUvt5Gb6Sr7W8TJNakfH2Qugi",
  "key7": "654n1ghnYnvCGkV44jEvYaKBHhWziFL5NMwFpNLWtcKyNYnYChV9cntmv7XrxyqYfMTA7xQtGEiTkEVxeLXVD8ux",
  "key8": "nemB4DA45ePgXq9NrUPmt6EjRnTmow1v4tBt2T51JJztuVYBhvwjDcVXR2rVRx1D31eTHHWbnuiykxSvTQTR7bb",
  "key9": "3PGEjkJrQA9ptAHRuBeTkmAefgHTuzkrzh9SMVa4emcE2579FxfECxqfGj3TZUiYPAerhxQrwBMHmA38gv4MaL5F",
  "key10": "5VfEgQ1ZjCJm83ueHcQ4PuWB2HCma8UV6gs3M4DX6WCCNDiWFjhLKbc5xACGcwjRrvPhHhkVaDmUda3g5S4evzip",
  "key11": "47z6KaZNaXd1ogW46B75LZxcUSiLCq2Y7inorYoVg6efn7YyeCGuwypYkxpdJb3rJMbcNXNNsZoXWX92Nn1oGHmx",
  "key12": "29wLkJJqF5iMgge86PrfGwsGqgHpUGs8YNRM8pXasbTuQ77gEHxwCxmuRqJ4s6DrzHaarrdRg8WurBcJEzxLMgBY",
  "key13": "2EuFjMcdgDSP4WySo7BtvN6iPBiUVQZmhNLGvLsW575xR3TszXirRKBggA5KU5RKZHaA4n9wj5vFLSxNA2RJhMKi",
  "key14": "6gN2c6wrGXPkCPKQjH58wgELiU8UdrWfA3K89ZCnxKG5GpbexTe5VH74aCZxt6yDHXHC1wbhwawa67NMhCwAvgE",
  "key15": "23NoqSoNVfX46yVmMaoCnoH2eEUi1ZssvcPYgCUsbVpQQoDtDAwJdMr3edx5F8WXH6mfwSBjBWkRnjZoQYyikboR",
  "key16": "3atrDUWKRjBfx889pT3VsxMRxmNc5bRfyKzYjhRHapUfhr8NLATecshw7D3UvjQFpoq57SvWXy5fpPTViRcEA7S3",
  "key17": "oRGgznpQwGzCu9mZdPm3TYc615vrGitEWKyGAQorEHopvhLjmoN2rTEnxrfNwwaoDc8dVXdxq4tKZoQTCJmL6mp",
  "key18": "44a8ntdfW483ev9Lq17rVUCsWKKSKLev1TzsJ1YnfZdAvS962G8uSgLrBzoxLktb2a1PkT9ctsEUwTyNgpYZ6LVA",
  "key19": "4Kg6Me3DdFTjjgCi1r38eqDExj4HQtGuUcdkksVD5iErZUPb5AKZyh4EGwE759PCha3MqATTPKZRAXrWc7R5ks1Q",
  "key20": "3uQNSBhXAo2weZPUdcNsCAKDA4UBihVaWKhUzR57CHAskGN9bibAdEBce3kukVCeCPraKRipebgvxXg3Aa9HQJAT",
  "key21": "MaXtdFLCS2b9sqPmPhd5Q9Vy99awiq3Td8UgPADDNGdaCYtB4xwgqGfCj12YF6tiYNz5RpeYzBEmSFLQvN28dvi",
  "key22": "5FpHJtSAYLPwdVKB2yRTgJGUXn6AnjcNfzEcPjVUtYxzUNpRM3BdhKZN3CXWGFKv7BLVQSeHLyejvmZRc8qETi4n",
  "key23": "2GeLqUZZ2e2tdF8R5Sc584U7ZZ2EfaCfBAbvdwrHqJiMcBsoTmhWrLKf8NNUU2Jgm9NJL3GWvKmiqHN9kiwCXxfG",
  "key24": "4r32wkcv1T3qifyaRyDwk7kc1vTQ2Fztt1crpz1h43SG7vyf9sFZeqEgB5iunGxnpeD2fKXjX19F1pzyJZZEgndd",
  "key25": "5rr89inmW1D97pisS7J92jHrzzTPVNCfsKTQFJLbmReHGFMBoALhN1kLGKurMyF1moRHVoSFvgnoQXzq13zcDFja",
  "key26": "PRHtEgGJuQna9tumzAdMKfnrFGizm7yC8qnzvDxdYCH79s5Rf1PFtsEhzsqSsuZhpuo28HnWQU3VKRgxmZBhxRs",
  "key27": "2HXy81ov6v5YGU5YcEm4QEorpAVQPESxeqrsZL7xiYVJdjoAfeBx3NP4DzXLd9aHXhd96ipNfYWbjykzuHsL6oYF",
  "key28": "5MVX4HjU7oyqMAjNmRXoomqJqJfBNeYgApiBrD4HFvj4vgFH4979NQpevYy5aseqVJmxt39RxnhEHDFPvCMwFcoG",
  "key29": "2n1YK7AN5tEqZP1vJFfTKSBGuY7EsZtEYFqHyQkf2VM1SqJKH63QYFaVpUMmtCjew9QmnLGJffDWMcnpMPkrXUVG",
  "key30": "3qiaxxviNRgKvtGvnEuXYnVXcGMzT8YeWxpFfogoi6Xa8W89JktFqVjWLhbKQ8GJevFjGgp1ZKZ1SBzURQqU35JN",
  "key31": "54yt81apbGz5UW1BHwq5wgV7SZhBv4M3NCKhypHAjyJuDApruQSXLtD48KKZVkeeoxmt56yU2MB5Ar6xBdKaVo6T"
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
