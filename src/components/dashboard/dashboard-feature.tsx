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
    "4mixFABr7grScPdJ8rCCVd9Xy3CVX4AuVqbfhPKChqGGcoFrJeV6yAkoH6F5LgMtHnmoYKkejaH7sAtfv3K9ngQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YNXvir42ccjvKV5fyN99r69KYueP9iC89Rsvn723R3WhvzNeXFn4veyrQvvwDYaKwFgm7HxUWQ7ypfWGpjXW3Th",
  "key1": "67g8y8cE9KUEyFbpAodogWvo2XCi1QK1KnozfmoKAevCaqoYeBiptWhL4jHMFtjCGFoTeCfzf5W3mW4MMWzVKUv9",
  "key2": "KLcjB8T1ZpHVEx9Q5QQcTFJjq1PAouJQZJPG35ERsb62XTcy27dyWzdoPxhYJam1h64Tf8jqdN3VtCkWCyNu2Lc",
  "key3": "4CGTKeyopjF9U12R784mhrgfH1ske93VheNx2bBKsjocoPanZknhSRXtkFKEfLexzUzLLZ3Q6PaA4ZgLxsHK5KfK",
  "key4": "36xjcruG9Gw9iXc5EFZAoURX2DbnV2TCQHxMNjGzCqLx3aVk9oBdokhAB9ojvn629E7TeLEXXZvcJY3qGG8mpNem",
  "key5": "5nFtfYoVNDwayb4PtMv6TVcD3FD34Vf8YE7vZBpiXFq4MozRFgaSmvx4CZXBvkXZLGFYqeodwEKT2sUuZxiQ5H2K",
  "key6": "2hTQeebLUQd6nLzthGTpqVTevjw1pcXjZeZCpCNTBmK6NxVQg19BjKB1zr48zS8ELWXRzasG8X47rbYfgJpZSFP8",
  "key7": "FT4FVDJWRFcSv2uQZLJpR5oPKKQbZids2RksdmV3pxd43bayu8eZgQHvyRUT4BuWiA12fX5MU5SUPNboocj73S3",
  "key8": "4a7udXwY5oembuNE5Wd3NVLnCpMWnYqqnpWW8HFufqjJxKvmv5T7E4mZZQ17ddLnkLbxMNyTePqM8qZzzepfeWy4",
  "key9": "4a5VpyrBmkCCaFm3Xmj463iLaztZCbQC2rFdLEGvs554H6yXz2exKjR6MsyNkY8hzUrPYViVPfobrG6o93YAYauG",
  "key10": "visKPh4tpvyBmu4cbH9Pe5fFBF8fL4iaSoxB964j13dmfhNT4HtSTR41majaw5vFhEt7hW88Fu4sSZsc5F3NV8k",
  "key11": "3pdiiooQg4wtVVuxDR9EenhVTrjHuy4xumhdXovpqeNP9RM95xCE8Tn4H7MeTiNtMnGh8en1CfqTMEUJKJ6dsqxV",
  "key12": "5LZU9DGhBBYMve5yLqaFMuPJrrJuTycW9L5in9innX15fjAwVpMoSLyTij6jkz7nfNpmM6dxrxpdLq61HstuWmDG",
  "key13": "2f9bhr3cgsH3VY9t52p4Fhzxt1qogndD896ngBthqGnWno1MKRMsjnJ2jj821S9vV2nA67WY1HDeYzMDQLJrBUDX",
  "key14": "2roFSZRZA44RzrrRfHFsuoFqM9YQngNJ3ma3CrhDCKkcCJ1ZxBMwx2bZZbu6KVyV4zoJjvAaKHbNQCQvaynpffMj",
  "key15": "3evjqqHP7SsVwC3gDGJNp37qHDdpBMW7MsN4PSMbgmJk5s9uyxBzdDemS3CD22S6iUQjLBApgaMpy2WThoH2DbFm",
  "key16": "o7gsMftsgLs7jnhbLGNHBZ6wyNBBGDohvvZJy9K1zkFp2RL7AZRCieHdS3Ap58E5x7oVrCJyzv9yE4fv68bBxKg",
  "key17": "2JgxKMQgNo93q4uvNDRcmMh7e2zFtxHBPmKMk5jmejCZmqeifVw4ahr9pFjQhGeX967n6BLx8fS6JJfQ7nAc1Z3K",
  "key18": "3jr8umxnpLRWNa17dnchJNwghmHCVX5yTPJy6tTFwBWQsWzxV4zXFMtsYpooChp2kxD3k98f3RK2C47iuny7cPHB",
  "key19": "44RonekYe5YDpGemJJ1wTcnhnzjF2zJrpsgxEQeHZVdkHw2KEwe3KHeU6wkctDhqrwRLLGY8hdetjQh1DzxSVG3A",
  "key20": "YDE1EEQZvQYHmZawnfguXYw6aoTwxrYhRUdw1b8xgJ2wGqtfzubF2aEnPULvZxhnHx7jiZGf8qTCLTF7DPpZL9Q",
  "key21": "3CKHnwASs55tD5FUBiU7p7UE5ornphAhZV61ny5jc6ozkDVsU2Vu8SrjwkUUXzuNqrPquiNpSjFCBqTAwu2nZWEn",
  "key22": "3C7WHm8ouRdEjF1z5rHBD6Rdpygq2bdmfxnYqW6bbpJYEzYo9XMNJmAM1i1qSarDQ8eQustFG2JdUYoMcDFdR9Gg",
  "key23": "5qKGxCF439iM7gdDXFQRZa2vm99ytfKWk7nNDH4XZ3bnVY5oE1AVnKMQUxSjgvMHR3PeCvDmpitbce4zXZZKGD5X",
  "key24": "62YeVnVsUGwweh9NmBU62gYM2d7rwXYQBoF8oYDbs3y9sUAnPRWnG8UpL2SykTLxiftTTRBEwQkeVjLwQZuGHtHE",
  "key25": "PV4etpBHGTsZkKj4ZogMPNdosoDKgUEn4qe2oK9XDpBRzLEAM3RVYWu3AMygx2LWJxGoFbDgM6Wg3kWPTXvFRCt",
  "key26": "3Pidqu3E4FsNMd5rpdC19w4433wo9XxJqngLJECxhtE9Tr26ovLBY188dxfWvo1SCH6vDRkxq5m3S6ffUqHJ5CZ3",
  "key27": "5qGUXdjTEUfuSjMuPTouVp1j8CM9Xy47XwkA9muMB5M5qVhQi9PmAqhEycN9qVdF84ArVrCxhPRagLUGdu312VGU",
  "key28": "2AJ3ZKXJaQZMczHTQhEVMpET8XHBhGN4cn5o78ygg1cGM8Q3XwrVUdLqa1CB7X4n5d9TbqHopmNsE8VXjq32WjLT",
  "key29": "33WG1ykgxGYjYjDamh3Dg1dv57Lc4jbqYhsuV7i86mS8Qj2EaQmHpC4NXTD5T2AWRVDbuy2pF5tHgx64rw9mmT6T",
  "key30": "2jo5cADXqmDLxPcVEadB3eCSMkRv3trDaMDLs6nenTL2nFYsNqJJJLmUiYTSjxp86qrTeD35ckyYUu2emdhQSpMd",
  "key31": "5c8NWUEddZcUC726xvBm5NzSkgfqjsJZEJAJ52GLUz4nEH9y3QssixVCQvBcM26f96c9MSrvkVgGx2B6DhuL8jB8",
  "key32": "3ECQWGicdgLLG2bA2i2Sdru8r748z1RHUBY1qekUDnKmanmHs7kqiHFSHz7zZZCchAoHhGU7DwsdUEY975FryHR3",
  "key33": "39vnCkupuvPJcwy3F37Sy1LjCtEMU8d4QxoHiHnnm1Y9csoAmMpq5hWGJRPJMhnBXYaRgnfVNbGBgyRy2gm48iFS",
  "key34": "3UnryFaVecg7t2x4JAnUC4V7nFWg8n9XKdWJRQoMp5XaGvNjPbfy3hED5r678UymetTWdfKAhSPV3m2P5i38GNb3"
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
