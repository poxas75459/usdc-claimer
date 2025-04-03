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
    "2Uq7gPPQUErU9Mdn2ir9aHiKRb8nxMXuSndN3qJey8PKPwo4Zzp8DW9fMJTe7fiXLJHVPm8K79YEUkDPmKpcfPnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aViDjE32xhw34MckSLi4iVpgQpPCjaomvEQAATcSDDxzBCvNeHyVQHdZdJAActtk3nggFJUffjcwJCQXitJRkhr",
  "key1": "48k5g3vcGjBqsno6KV6HCpKrGfga28zRYesiWbBqSqmPujjv65R9uMNJCuQJPPUrzTiWo2ypKQ9WTNdfZAYW4efT",
  "key2": "2vGGyrMmKZB5e4YWhQqHX4v4vyudVEV5mWtFdHAjudqv6K8SbYusQcFffBc36ebgU8nvtJpn4iLtbh1Z8jZ78qiN",
  "key3": "4j43kZ7yTYhTj3KK7cP6NFHX7AM9xCUU9AZg4Ncz3WXqxy1NfqJA8WKLhp29554rSN9x7sxGX6Ybi7Ho2n3M1GFX",
  "key4": "3UrZfqf8XazgBNp3cAcpksfkNaQWYSYRVz5pb24Lr6t7RfWz4DcsJVuHsTVc2t9U64ZQrpQzyS1Mm5UwCWiVjtF7",
  "key5": "4ZaaU6CenUBRdc2mYb2d5PzamXhcYkfaWViW19sYAqpiarEFeTcSbxLM8X9zBWwRLvgU9BRF3HqzkvqHxxkKwsFB",
  "key6": "2LJwcEdwr7try8cGLgaQ848sQhhBvg3q1haZZk4eYVZqomCDMGhydpkH9RuCzYfJV6Uc7tJMvsXFwj81yXpnnZXu",
  "key7": "5htUJaKXVixd27YvLqkjqSACNNPTAWHyaEfEz8yNBRuqwMAxuCcvrF7Powmyus5ZyKKriRc7ZTr74NrRuBsugHpB",
  "key8": "4SdZjsCrTHhFFzGhjyAyKsjW4x6EdDS8GMVddQFyujLT5cKk3oEFYYdwJdEdbxuh4yUvCeZ4gxEHJ5YgNCbUrLDE",
  "key9": "3ymqrD8v178VBhRKbgXZb8eWMEpgWtvdfZYzsPB4RPEJHG11xWR8qGmkGQ4s61vLv9Lhu8kt14hxGZEHWv9HBoZE",
  "key10": "59iDvS1ht4rBUwEd9nB2qTWioZtWMLigR1FGH17SmgnYAT5uAMaVFvUYUf2XY6TcsukmZ1evaNdoEHtj5mxKSddu",
  "key11": "2TjZ1zVrjmG7MEL3HTKT2ocQtczyp2ZwM3WRsisU2JcxwVsZ7XPtao6grcvHGEYYYWkuFd1TJckswB3sP22F2qZg",
  "key12": "3oypJEfjgXxUyz9mEsz1KdEjpvY2nRiKffgH8p8MeQgJMktP6ddQnPDb6AfCwk5JEAa8Tj6AKwfqWc3fuQwnjDRL",
  "key13": "53NFxpmJPgkc7fbzsbWYWjWy4VB4Y4xEHwGxChRagghYT1jnc9iCnbfuu8gauHHcychWs4WH9L9FsKcZoYd3LimY",
  "key14": "42ttPxfTrgojxBo4iFem9kBymwMXgnoGhQjAdq5oyDcgVwPs9Cehha78x8eJmYeWHjYptnjGBWLQ6q3bSpG8XijM",
  "key15": "361pYWoBfUt9PkH5D3YVRSbAChDi56ktPEhBQWyosCbP46YJLczoFhQgY36MEGehFGLW3SNRsBcKJ9D5i68HGKaP",
  "key16": "mJZnuxjpLbWZp9R2SoykGHYZXWuGQf7Nn5E9Y8VaqtkyjG7aHcarmenU1EhMnYPsY7GX7aqAsCft21k8vYtg65c",
  "key17": "66An3JThD7sqHnhtyRWCvvtaZbVeo5csBQnamCsVVLU6YQNMhXUCYZcW7DqxqQtZT4P1w2EHsoJiLogEPXZwhw2G",
  "key18": "2jEzYGzMHRVd4ZPAijz78v67TcoaiLrrdAs6REdVswuJUUkP7tEp1NLwzr4i9NAFr4cReuJXvGFpgnXpewQSobzf",
  "key19": "4XoUNeWZ8sQDaVzGgNosh2qtsqKgvezMPX5pgvRG25dvQcx71RxUA7rAhApDWnDgy5rpkLuUqi6BtrLUAMZoTWEd",
  "key20": "3hCWSzvTSxxP5z3q1vGtX64xFuq2pmpqqupTzwnhDcxrYDsYXe3g26ZYXaFC62C8v2Dpor4kVUhwMJ1GZ3wumHLy",
  "key21": "3CVWfsej4PsKJ57gHF3iiSJR9pbEkeXZ1Qp3kPvk6YkKCkenX5c2GaZC5dJd2KaUWv2KBqk7FL5ox9SMsfzFyHzK",
  "key22": "ARSbxm79QFqZHMeuw3fsXsBuP1VHnoG2kLBSriAZHhJWw23N9KVpS4iKn6aGcEbqpUNRt2jUyJrvkrkyDb2saDE",
  "key23": "MAatuTVznpAreS3YpGMQDiFtE7mj6bSnEdQngyV83nC4w4yYKQkaask5PdodMzVBzbonw6VZXECQtZJEADpoKPF",
  "key24": "3YCsoQNmMrz1vDPa7K1zQefN7vvMxcf1XoEfhkPMhUNmA12c2h66Qe1wfbJJpYxvmK7ooMDbFrNQvjEhwWXGGCie",
  "key25": "5tqQprpYaBBYVi8VFMvyY18FjY2Nnv2xJCXmkRknyqmd772VgQnr9wLRVyc6E1FxkEPAN9XrU6FhM5pfMR4AR7jr",
  "key26": "4Qorx2xHgwJVYh5uUaTxM8rkQEfW8smhJXizABHjtb1Cn5J1xbZFsANy6DU99Lcf3sdX1DxbEHXbYVaeemAgsn1g",
  "key27": "KBRhGSWqnA3MpJ3ckN5PMELd82UiFvpsmWbmXup9TMNsiEmXqGSZKwHLcEafK44c4aEXhQTjFjycsaXRAs2zXM3",
  "key28": "2NV2tauic1dXBeUxLi7U4ZnB6tZeQuusrDYNRxNWPRbnNYrtqduZzah9TVVwVuiFE9wPRAThPp2AmJJfCcvFfAmn"
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
