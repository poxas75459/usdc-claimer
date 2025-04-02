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
    "2ESHfJCC3HNiB5EfJfyCsjVXWZBovigV4JfNyFPs8oyNLiKwye1hKMepfhQbiatFT5QEvSi82YNc8iq64uwHVyrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67cNXsmJn3gN1u1ySeTxUsmaocqV2mz2YwFaaMYDdW1C5LZwpVWRy9EG7La1JteAJpvRiup9cuYQ5Kr7nfv7UBxa",
  "key1": "2MVQamSDeyGmTPQ5REyS9xuiCxe1fqiVky89rtciFGYYGfAW7gv8zFdVL7pwedbeKK2hjpxioLpuXMphrmZmkcks",
  "key2": "38qEmzqSdjE9U5Ucwxx84q1Dbn3Lx6AHxoScXfHb7gDRYxXWsJUa8mFrtNB4N96rn6J5E3pwsdzwfrvmDSFCeSA6",
  "key3": "2MPq3ERPZ717GWcqNEZw8b4fqPmYVViSv9v8eaSSRWzyjipv4hX47pG2hhGkJiW9kRjuyS9pbXFkdnmMWWCqanad",
  "key4": "5C59E1M6BX4TyNJyv8714JFnimwRujToYc2q13eVFDE9G2tJYYZwmw3QsG6x4qiq6ricWKxCag3t4bUd1ficBDGr",
  "key5": "4TYpaCSuR5vJndW79RXDN38q6jpe48X6YsCeHY23cbYjVqLrprdZoVYTE8Sb3Z7nY7VfKu2Wx28YMywXijBmKUbT",
  "key6": "31h3wTUrFfE2FxFhGA1xNwthgWxp9pM5VKJvUHdgEEUPqTjdjdhVkrvuEu8Yh6GUL5ZBAGCSd6q8RHqUpDZirw9a",
  "key7": "2B42RfSSkShXyJiQjNgL8nQPPoBwzzU8tQZshQBCE4y4Vm6zsBoLumeybHkfTc8RKUvS763PJSkHMDuCVJiAdwf4",
  "key8": "5xgzkG1w6ZbhJSVd7gd7LcV32ACShyQGFtiEz1aAxYwzA3dve3jCkHXSDjG4Y161HY6M9PvueyYcz4U8mDmossUJ",
  "key9": "5FSbPZXwyYSGhn6rdxr6y6pKfQJYWyN4r84yXVtFQcHKFZ9g5mN8gN1HGnjCWu526p2cw6kUqwVzJCxBXhUEmyBw",
  "key10": "67SrHn2sjHY1jmQFxuvEdR5xAJNa9ziYBhyFPnRSqXa4DrSzp7dbzjthhVYWAqzMBBnMjrJPsJAFtKZdJzi4ST49",
  "key11": "WiigKhbi6FD4Ay7N2AoR8ohUw8pz7uWo1Hbi4yVfT9AmGm64UHTM29HQ1UUqEEewXWKjyMZv9YgSKQ3N6AjCf3s",
  "key12": "3D296jH7iS21t8qqgqAMmkgpUZxEo74Y2H49nDW2B7n5rNAeNZiVkKLYUDL5B2DTYKrvzSTpSnD2TfWnZww9ECdi",
  "key13": "5waWBfau5bHqmj6CEwep63ZfkuR7TU2xYDNGeXLPgMXhRNwnRv8TWi3B23s65zgm8tsUKovSXnVPN28iz2Cy8Mad",
  "key14": "ZUMTnYKL7gRS3ApcRckTeiAWadoUUXaUPmUfM56MXD9G1Q7HhypisyFgxhHPKnbTvKpGBUmG9shvaRgyfTwTCtT",
  "key15": "M3NrrycK5125BeAURMDW1WYDxN4NTEdm1TaPP9nCSywEvy14FHmbyR3MRrmxgN2iCjfkUZg1fcLX8oKFTGeZYxP",
  "key16": "3827ZUAWkCh96Uir1jAx5UWWCcjDDAvYM3qRCv8Epx2hsyMrhpmjMvo6fxpdZzgYnmnt7s3dcFCkYh6bUo8a5BnN",
  "key17": "4jJr2hvoaX7nEsWM4xVzbouScwFQZkHmrqBvbN8NY7CCGU5tFPvnogHt9yJ34dpARgRn8wLj3fcC7xxM84XdtEmz",
  "key18": "ZnzDeNcdmN466QKyVEnyBPBLYqaZ3vxn3EyTLSETx78scUaFrQEuWPyD9jjmSgiwUSJhGZv3foCU3zRWhsUMz6L",
  "key19": "3r48G5TDc9NYWqsFcxtDceVjP6fWZhib4AVhfRfTvDv79oJddbfw5GHSHnSzavrq32sZkZsRtpdgbbDPYLeNdy45",
  "key20": "ZaVdgHZm2GMgj5FJvYxrFKaJH5igjEAijvsBP8t9Q4grEwRETtj9njkqw3KE6YuC4Bxf7ctHDRg2fHfKHM2SZff",
  "key21": "46sc8NcuKNRwgxazitT5o5GUrUUUixqcPTUjS92AS8QZsN6S6Z4gQLhdncuNQvjbovWALK7YPFWM1QiKrDtThPwV",
  "key22": "5sn1izVWnWU76bqMhwVgadU2FUUTM9cNtbZ2ymQXCB6KfRtPb1iN7nxMxxinQ168HbUk9wGWWFXindcmRyjsZ9KC",
  "key23": "5sAYPWgS9L6L8QJheK57axDJtmvTqQ5ntFTQeCas9bmsJRKLymvzaN8oMVzy28aAMhaj4sPauRUKx3iTpgq9Us7b",
  "key24": "4hXcJqSXEstVgSGsGQ8d6odcGpc7sabayUcfNpsvStdLADKWM2uvGhJybuBZaGt2FRBKNMpY9BwpNt5XQ3PYPVou",
  "key25": "4KyXQxBhonGSvaK8KPxP3wVA7SqpfzrzCSWh4hpmn5QY4DqWhFMup5Cembq11d5Yi1vNFwp5kjj23VavuoYTLggp",
  "key26": "MUvR5WjBmpJMSTYU6X2HcqDiNjbayYVZKKCvMuzJz2XChyqM4GLpVKqVi2GB8psiBNAxjpp6WTZpMHpjdfRePwB",
  "key27": "2aR7eLMNaVfSbZ24JDQdgTyTAp4sqJSmBX4MTcGc9BSwPoJzC1psF6bv7ieKF169r7PZ3J1W8gjHybDxdnQFCaZS",
  "key28": "2RE5c6HuapM4c97AJB9SJVgUsWzA3iVXMBDg9J4vfgKHP7LeWYUy2hfTooxvShE4QiQwt8gBReZsf1jZM1mZcsRq",
  "key29": "5GpbX8U5ZczKci19YeUoc2xmh4WVLmVUSCioP4r4oEhf1KphqKGb9t1Cxh4uPvCHZSoUPxqbNbJvKfu16d24BRgV",
  "key30": "2sa88VBijV3QTrAZftKeGy8uiERNweU7PZSk9oXqtquTkP6MhJGjecJ3jWmF1noKE9TsrkhSjaTgQEcBMt1XXwSR",
  "key31": "4bDM32b8uHH45C8AvdT3eV7aw4TC11fFbWbXctDaxwNqoPPpFSGASPvAG25CVMfyGKsEs1iiXeatEByj3QdJTiEc",
  "key32": "2jSMo617tR1NeQQ1bv4vfRWb9QdycfMFxveyZmqZAmAf3zeJFUVGQ1wxDbzMdEHWyWoVhdRKxyY3EBMWkAqYQfn",
  "key33": "2aPFjxFmjqGqtsVxGZjcfhazaCP1KsuHhV2dXMPZeGs2Xoxhs9UeX6Js2zKdx2FQougZhFK3aGUPLDMhjNPpQLvT",
  "key34": "3SqEHHpesHp3TBLhZiqp5ApWdg5C8dbqrBirVpxTdTx29dtmMmy4aMn8QnFRTHvt4C1q7ZjAshicEc1bG42Yut1M",
  "key35": "3oZeLy1qA99DXW4qTerrVX1qkPgFRgoLtJUaH5r9rK5zy7Q5aNWmYytCj3vBcAFpNNVLYsDWYYragkGm5rcV8iWd",
  "key36": "EkF44NCvPQAjNkpy1p6AY3dZKpp4BQGddRToUMwyzH72jSCdytwtszY54a8qrX593Gz1mfvh6oaVKRQFFhL5iYN",
  "key37": "4Pqf5tTzvtko1ThNLmy54g41N7UeUtfsjyDMHH1jxxBGGJycUfry33V5eiQDucitwXGwGLWDbbgCNF4r9jq86wGu",
  "key38": "nPx6UyZmKsT57uPJncirv9jeYMEKJjRGV3UTp92sdw7UcTeS5PFN6R9NTiWL4YTE3kfbas2ruVE7i6eBEDzVPnQ",
  "key39": "2UVqDgHVFWVWorK3hHNfS7zg8q89oQqG7s6Y6K8nz2fYjL85vXysWBGGa6gwcimgsjnirjxjKKgWjen9ijR7ZbbD",
  "key40": "5Wi4hjVXV32MavB1oWHbL87W6y79FE1tZEGex3jevF9rwvsYYjBdzUUp8R1kctwMkypanG37LNB9dSAnfN4NtMzg",
  "key41": "3u6hJwx9ejPhwFXBNJqgV5ibJ3CtcdSkwqEVj4wtQsT9DHK5aH2VKCMgq5jiJWj1pfeCeEd3D1NgRNT41LjzFPZk",
  "key42": "5LYmfWqmVCE1ScawByVkVCT7K37uLU9DPugKVDxhbXpLQY3nKV7VyVmcZbt45hLVS1qQYtmHzP96LohCgKNhGuSZ",
  "key43": "3nwLtStLP6QWHH97fad4XY7dRF3KYHj9gzGU4gnL7UtGp9pAxrGFLT8Xdr1gspm4BgvuWC2oQYbg98ky63DeFyLq",
  "key44": "4Yvg6TX9qvRBvSzRz8JAVpr3K5d5gLNV2gR47sPihKAe8Hb8bQjimwLUJFv25U1Y93EUtXDndQR4BhvuTgEzwUK1",
  "key45": "4LamWjfRDm1VZRpdsB56L7weDQvRpnYuQPBN5o6LMHjXoFJTLtypdvFKjXVjSYEWATXNvANfYnnrWwTedzxAPyZZ",
  "key46": "ffZeoP7aUotFDsQWHFVQwhhKnyvifQ97TWUEdbYWbt2iLmJgitqWyLyCdt3CvPs7W5Xkf8qQPHTrEs92MmZ4TSV",
  "key47": "Bpe1P8ifdg1CRvA7WLC2CXcaF2vgsVevB1t4j5gGnrR5tENdfXCodSa83QqPEe5t5nL6FwKFTim32wzTeeGfvoJ",
  "key48": "47xnV1eguM2yKQfZAS3cprufCjHRp9g7bXV1XxZ8YjjPpXfJJxoakQ6Sx9saRSu8Aagk3eFUKFeFRQ5RHPZBWTxW"
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
