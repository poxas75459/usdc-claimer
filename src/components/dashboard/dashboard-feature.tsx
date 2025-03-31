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
    "5dTbxHixKznF34CXmriw6jYJ4DZd4DykoNHD81eKQR7kAXhQ4F8GFyJz1hpH41YmEXQbE95nyyvfJ98PuPUw4X29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g3M1vk2Cn5rkSbJ58Aua7j8AY7YvYoKAVZbRp9vrhBh2YWpD3CJxYBzDQgugR1aDDZCaJPQL1LkXLtZwxNiTUCo",
  "key1": "gaYsExweoDPh8femJaZfr3eC6eRGDno6b5RMZ1kBvSsP1GsrER2VSE6m4zUXGyf7fTWb68SXphRZH4popzeaNVj",
  "key2": "HhqTzVndpR3mQxJo9bcpCSAsdyfojuSXTbyEpv78DDLhsdz67PEG5Hynde5CWMTtyHxqGXAvuABsAvxsJwKaZmo",
  "key3": "52j7Ewv9H5JT2yWAjF4wRBBHwBh95i9XgnHpcbC8pXBq4b92v5f2WL5EfP41C8zyTcyYDBR2nEP5vANgQEYt88mk",
  "key4": "3v5m9XUpktLSMh7TcuK664GJbwgotYXfRpAAsnuQDCdFbdRCdDU3Q1o7PTcKgQ2EBTjkf9zB5RQHXXdGsyqZxsqa",
  "key5": "4BKTKHMgxfc8abQKsQDAUkEFFW3RK2EqMKuCQ8e6AH5ExrZvmPYcQTo6y3VSdQZJ4YP7SLcmJB9nzLTyGMdYCNZt",
  "key6": "4c8N74cLEV3PmQxEtPaW51hA5udkEHwsPhw9G9RxYc8m9pAYfsiJvUksBDhFkL7z4JDaFhE1T3Sy9Cqqo115uHgA",
  "key7": "5hA4CqXUWEiqSx1WoRU9gw9cKwyctu97hJWXtfPGK4EMgoB5mYHVpwbQ2nY7tiRA5iooNdc8WaAemCxHbo2ju4vS",
  "key8": "3K58cW8tmPd7X7SYC4jNMFhheMceRhEauWJff1WTKPjXZParMfNGyicnznqwhhXCJKQ4XNWZyWGL2FmFQQVSMSdW",
  "key9": "4t2rmqyUrPTPyjiPVACRBzFaC7GvR4MPfK8NKuRKLHa2nZsTempEmZJGKCsR7awd8nctVssuxwH7Va5k7fKSbGF1",
  "key10": "Lmdg1xKoEU8ruTCsDNbZZ1zUYeNKUH5BcVDkpmbUDSXbLmBnCazoNYGuY2K4RP8ECLBiFfCxYZJv4mCoboxQRkW",
  "key11": "2ZgXPSdt32ciayU4nLRQTgmwnnqZMovsxWHcNZcDosKCoQ6hmDNjkTeCW9jvDiNMgnm2LCGoDeCr27rd4SQcXjhZ",
  "key12": "3e8igncT4HS2B8DFHdbry7BeaJLhDtBkhuqztBcm6iNo7JZMyweypP6RsfH8y3ef83epZqQdjncqfo8yPWGFbYcX",
  "key13": "eqeYngKq749bYrV9dEjzJg66xRBMxfDzCBH7EFY7eXMxJNU8F5inouqEVPynxzBrRvzNvafZy9QjjyDZei6Ytwy",
  "key14": "5cFvtpbCfJuPApJNokwGEMmfiegbFKZ3m39xCdRfmAMruvt4gigHjpEjERQLV1d9PQXGkbNmVWZchbPwXyMvMKNW",
  "key15": "iayNJC7uqs2SuYoaBm7pL4sW3bSpVBhXWi6tqhTbEV57v2pNftyosFbKXAiYNh5DbnxZph28cN8gzfotBNuFYTa",
  "key16": "4iR44T57Ec5Sn7DMiTZzSawN2yEPWXfdsp1nVp2jR9oFi96zH3JNBzXLoVfKjLbjqUA32KQ45QCqEKRV8AfQfJj6",
  "key17": "2GsjvqDNzopRWJ3wzBFN8BWDPVrmazUj93vammWYzPCZawPcf7fWjiZGT67qdWmJyi152dgHCv4BHy1cnzt6Egn",
  "key18": "4TWAem3RmLnDVKJoU2j5fHCnZZKXMsokzUzQDZzr6TBr4CihJStauou8nybxQeNyAzkZq9VnsmJJN9ef8M3hT3p",
  "key19": "yuAK73rV7VCaqK6aNa33V1GLDLkgFXJJpdmhjELicHoqGkZisLCza8mmX1c2qR1SgUhgyHRggTzLPkSZXrecN8d",
  "key20": "3VdbznptefpU4YYxMjdz66Z937mrS8ncCT2vL7AU6s2mPzEpfbn9kpjh7Fcd5qUcGkRnnigRyezNwhoPML5nyUYr",
  "key21": "596Ty16VaTeCRLPzrKS67Si5fvC56nWqxRifQUDoCCtDYRYwJgzC39v6VsTcZBzJC9cKibHk2cSc1g5ZbudjUzQf",
  "key22": "HEoLh5gYYU2tCqgSpaf4zLyiZ84Z9hCxYv86jNjzFDiuvFAHkwyaqYYU5KQLw4Exxkb3mMwKWz1aViJ8JYm8iTr",
  "key23": "51P1u1QfuwdNDZimwFcbQ96uUCcLW65RAMoR73qKXFzjGXxCYBtQSSi3aqH7GU7VQG6LrTv7B6ksuBpCCCn1nwpS",
  "key24": "3udUMTnsgnZ6YMukH5ehbsw1NC4RjQLfTp8kN2XLH1jtvzHZHc47UBqFe2RAQvpE6w4NThARys5uPkrVmyhbPEHs",
  "key25": "Nh4fdKDgqNCGueaabycAnhbQTYyfnhEknBMgHACcigCdFJXGzJchazWsdD62X73zMaiXJthVRfMqpsBJCYU95hu",
  "key26": "5Wm9GBfCRZSAKsGndaxwKzDrtixZjrYiYhPcSoGsYbpY18GmcKisp6QarsRBeVq4viWT4Ung3pD9QtADFXxaM6Pw",
  "key27": "3mmTqGbncQ19U1aq7f6S9gSTjLtfic1jthn54gLJ4pXxjeZVVN15Bj6cEYY4kxUjX8qFgsFKfRHHQib7rn3W8aGi",
  "key28": "34Zt9MjZ1x8CBtbmcvKz9b4oUhfiqFbQU6GtUGDgvMkkGaRYxqQmFFFbDxsrB6grCc4ADFHYx7qceZvGSEtrjm62",
  "key29": "XPjmTAnVEofrgxc42JppJKA6o8LomVrvtEYLh3LM9UJoMcHEckqz1ABVkZ1ZHizQozMeW6yBrDhQsrnZfDhHKYQ",
  "key30": "4jDZ3KwuaU8YwzXt8KD3NeXw9YEGoDU4o9ZP52ZfNyM9mbPiXX94CwvwnKWKASSznvesyYwc1hMYUTE5HMFs9Zjp",
  "key31": "3CKhjzv9rgZabXpTvgDyMYoFWuTabCGzNLjitdripDDCst5tacmzzxhVKSyB9DsLBSkxQQCGJqfSpRrmLeCf422j",
  "key32": "2N2LtxprMeKKcQuNAvdcmBkAz5EepDLUykjcrBY6NrLgKtwXQGZFKhqEoY8pp4HTAEcv8ZJ8bBimCj5jfVFM4Ktx",
  "key33": "5tVDAqpqdqrdqRMXfG8jqSwCDFVfvHEHWaK9tnosQJSskfCEvZy9gHsGD8pAs5xaQEGwksgU8Vc6wZMd9YhCgFuD",
  "key34": "5CXtwxVfHpybWGNyTc1YVcV2bUPJnWtgAXtQYvCAKNusBQsgZodKEZaFCWvx51Qccck1pPRn39kej7DQLVhJWfTN",
  "key35": "2rWjjsS7wBiV6G89N4dntj5tFCrtEVDUwTtx2r7ey1YN4sJwyJGt8jm4CJ89jMmUx7k3jaUuB7LpwDP1hoWVY3Nk",
  "key36": "5nd131cVqdxEAKuVhcqEsecfw2PY57jhcPrKUDTwcqH5qdiqK6ob5FiP7wiTU28tghvcv3fpdkZzMyF275GjYx1W"
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
