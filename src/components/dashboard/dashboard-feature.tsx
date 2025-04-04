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
    "4iCuWYXiMWaAsjjoZxwwbXhqHas6rzWdrDTkghozWxpkgkz47Ad6hGQv3TkWss3BH6LjVHQQztKqcR7oLHJYBomR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "475r2Y7xHQgdj1PZqqySvxpJiu64MARGfAa5vJHvEcseAKgKugLBzw158H6A4kqJQ6Gtji9ERD97T9RqNh2iNcma",
  "key1": "3h9jFDWZYtuuqW6scVedcrKYfMyxzbzMPJfgrqyGSmB5nh6qteTGXxmcGxPPAW3TKCTNpYRvBKZQ4ehFeDYRq2tz",
  "key2": "2WqcR11xEAPdCtuscH9SUKtcUSAw3BM6AQu8hwpru81ayHE1CCbYGnGGwS4qTwwiDUH86t4P6qCfo29F5uhCqHrq",
  "key3": "5nhr6GLfv4q3zj7QMxHsehDwZ4MguTFgb7XbA1bxz5FC3KxTRpZdD6Ht3ekUjgqV9yYZxgi737S24362S7BHkQ13",
  "key4": "5aJU2EorEA81mqF9FX56pM7VrrudxYTAn64C1i8VtttmmmsHzCJbWyb5geprcUvEis11TPqs2STFd9kwiUQ58auH",
  "key5": "Fy6KKAjJxy3x2KvLm92yLFMmqbSVpSgephVjjhCq4uDCqZwV6zMvHT9UWFFs9wfkjgBmeQaLyvhL4n3aEaeK8iQ",
  "key6": "5PXwSHioXBzkPW9GWz5ny8suHgafrProE79Qunjza3cLTNMocSmmb6oE7MffFkfR2kbmBHKmZLbi6MKg5i6TxGyF",
  "key7": "2YEFB9zizjq8Yv9CgKc6ddH5LsLSsdpqksFMgm3bsq86YgzxVE68sKRubT677c8txk7zwGmD9SfYiPnkv6JHAGDe",
  "key8": "622pNjaGGS98Lzcrx5kxg6ZsB3ZAdUzVz5ddX6nQNh4e4igxw7AJo2FjfTuQXBQzCq6MH5qyxSyvFvwz3f8B1G2R",
  "key9": "2ZgkHEjGXhiVThVvd3GzsdeF7EeqrYkQ8ADH5Mzc5NRyko6dPmoe9Lx7hJ8bWXoM48GstJ9HXSSx4PmmNDe56LEF",
  "key10": "FEHXcYMtmFfRpUx2iUJy6GYVgTcSu2wDVGNjk1a8LEac8PbMfH7saBqb1JP4cUJepM9RvWdXoETM6emUvbshFNX",
  "key11": "P2AQeGg2cQwodErfnFMx3DKdchQ4dAvtqWTCTXFVvhrsSxyxfQUxowSDMpSGpZdMV4uC2TNPWwtVS9mt5HQQE2h",
  "key12": "4JnhesSHMHaJwYbNUhDRWTnZfKwAx4A3sBhA2xDwW8TAnPXEPFgiMbCrm3SmguagfXrDMuFKwaaSGdGCf5irgsbG",
  "key13": "i1f8sCEnM1Tt7bHZKjkvNJYiPfs7oSkk9KHizjxhBredayVT6MUSKfMd7thfC5sjRqumvZzXrKXi6n1TbShfmY8",
  "key14": "3U8ZsZAuLRpxGTUBTNRt31Tst8dKFGkbdGeu7kzdZ6ihG7DxRMPaq8KryCAaTrwNaZUWvcBJ8LoKbd7WqrnYgAmW",
  "key15": "2H5Ui6oYzhZ4PaiWKfBMKV4fcnrYzvsy6aRwQMRG5zosAjsGdodj5zSkZZUR9dBR4XEN74w7naiqoxcvCSUCLfqY",
  "key16": "3MXnevr7Ea6UfxSRDHe9rQV6FFpuQCADunNaq2sH6DxBPyAJ7KZMbcAn8CPkkpDeeTEUxHnQvjfhP3YvQDrgCBSN",
  "key17": "19ZUHZfLa6wfUEhB9XC4MkGdfN7KEiTYk83otxNB5fsSpQccdJxeDyW7g19gDwk3koptZDRRetpmJjLdy5xVUvs",
  "key18": "2wJWJUNwUzhGzypmQM4rHX6NpmQ714DMijB8jEDj4yRfN8Euy8bkNXv8t9gRzXqAcg1APxkVF9ysGYaW8R4vYcrU",
  "key19": "5L2KruTQThqYSBokNkrupJjkkPrx9jQCM2AvJKmPZwzSCtKuR317diCecqTpY47B2GbgtL5Yey8sK3LzdT5yG1FN",
  "key20": "5Fr7kKhUttqS36sJmptzTFEZtbTUo1YKJgdtKxdbBJAAuEVUHTrjkG3roeZjj4QgKLUGj2YHvugK7LKbsHauMhUE",
  "key21": "5hfNpCEuskG8GxNW3L7djetuMeWZaJDQ8SWmbzSz11LCtnoEDHQX1kJKRxekkufeMcVyZ4eP5oqw5Wi3wE3Y47PC",
  "key22": "4vnmACgigUNVP88rQEo2PNNxLXB3XJ4Rw9WMHjPFNXro4nK4UGYEgPRreqwJQx1JbTdKq18J56ULrigLE21h4rxW",
  "key23": "583ZXckBv2HWp7VfDAUuYPgaq6fUrUGgULGnec8yBk1d6QWdE8gziGW7szmrgMrNzxJxZnkEvN1reaByERVgmedc",
  "key24": "35x4zbnAuBFe665vDFzLbBJpvpnf1BkTb6WDcgt7VjCJy5XHHwDvrQkS9DC3GepzWm8zvUvxJMrxmzs26yY63n1F",
  "key25": "Hk97xF2PqT7CoVTYtoNLWaCLwipczNptU4FybuGhQXjo1mB9g6GGEqUQ7Nz18NwGKzj9Gr9e9Dx2JyW7fpjZuK3",
  "key26": "5DfLNsxKgQcTjo8JyAhC1n2TQAp4AVq7CGt4P6UwYEWBPKoWVYxrmYZ17Cb6CsUhdvvxrzD1eyy3iqBtCLJdmAB6",
  "key27": "3ksBJ4mXNKedbiEPJgtC9zDr4J3wQZYjpiXS4b8QFo2gPrEN6k3Ay2ffs2a274KQ53QMLyBCFTERK8mJafGWwo1q",
  "key28": "46Wpeu99m38dP56mPs3PFQ48KxGMDR83C3eD1xsQhSyKjsfLhSBUA1buQz1PCpTZkR7WQifZr9R92tuPHGFZDgUS",
  "key29": "5bkyLw8fFPg2ttYMvz7kwwnGRqe3FEJia8DkwG567abvKLd21rcYLoCyUXbWv8Xc1LPwK46RPnUigGQktHYPAeef",
  "key30": "nvYZn6UBhwAcUxWty3U48udTAE31CicgnuAJKW4buTJgnSAVPVQxjUzF5vqZQaFQE3wMVbF7N4QmYLsdA3irWyK",
  "key31": "2Gqj5NzNPcmUCGMHN7ywPi89PFemNMrWGT5TsojSQz4nfGGKAS8ZiFePwbfNdapsqWmt27puPnmoU2iCN8mEkyTh"
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
