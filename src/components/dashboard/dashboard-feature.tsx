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
    "31i3yUTeVkZbanQuwmQ2EGFDdMXe27BrnTN2v9vsqhjyaRrdq3zuBZFAHpwJkqXzG2xaLmeoBopAx9TQn951wgRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KPKjAFh3UCSsYhhwxmyD8CVjc6V3TBm7A7UgdsEivogPEVVXVrf5W4KJBdtLooZZK9Wc2X8exSU4JyQ258E519U",
  "key1": "3eKZXEDNe9e4tTwzMb4vKmqvTVbtVMw2biQWz5EhdjjCP7xXwbyzUvCRn3odYzkpTkh2eUBWU8wuXa8prNf55spS",
  "key2": "3cDXzXiDpmcxWZktVV5u3QcQqaLXjcKQMZFFJYXynVxxAfjAjNzKWpqvvPHnfUSCyW3uTMGwCPeQ7qVfExhxLG3e",
  "key3": "3Ayy7JZvH7EzKMdWq8yNVvq37eU8ogC2FXGirx94C6RfP1zjymJE977CWpHWC3HBz9hQp8749k6DjEtm4dZHAiyA",
  "key4": "44UwQ42stY85AX6DURv2QJzUgfYg8ShztWnpCqPcNVbnhb8uoN3chfZ2eojRN2riDyk5jwRmyz1L7gtEs2VKTVpN",
  "key5": "5GXfNqRoZuSKRpTt47D8FQwbgFjA2rKjttJvSb5FrhoNYsZixsSV1ncw2yVtJFa4a23stCCqw6PoJTsdAGcNr9i4",
  "key6": "QGrqX7oVmVRYUwnwQGUk19H57Q1Ho3jVaKLfQE8maKbgAXLnj5P5Td7DsV46t5ds5jZgLcs8Zd4nsifX6bKphd7",
  "key7": "3L76BK6pf3GZBu9K1PYHSxN4evhLHmBVdda92ywjPSqDVi5AvqGDVUuFRWJ6DyvSVXB4c4K7xjKc8wZU1Z88dqtB",
  "key8": "5YNPYnBVs9Rez51wopZrQ1G8qPZegzSioJ6dp9ApZttFrf1n4PjRH8G4KbVY4b9nnT5hKNp4c2yxLDexA134h5un",
  "key9": "ueSK8xG8kaffwWDbRPC1eMcXeCb82bZ6MCk2YrPQUj7PV7fXttGjZS3VmFSFEZYGNvgXrx5i3SNkgUHBWmTrBvW",
  "key10": "4t3HSko3aWEq3zFexBgDfxBtpH3ARMuckAqtzZmJ8WCu5kbYNgRDwVLCisNFidUVugofdJi1CSgUqaA2naa9kd21",
  "key11": "kSXvLAz9vmrn1UR4QuS9fN5DaKf1SWo6aM9VdSt3a5BgjQavkAD6RYrfSA9fqKTkHWACbFLeHDvVqCuTcLazAAT",
  "key12": "LqsVvqBcCnsWZepQLmR9yyNCuQgCEEQDtADFGZyB8y3GEXbtvGdFMuatgRQAfV9vcGQnCSUsot8WxKr4KncZFtF",
  "key13": "2zz7mAFeaGGp3sseHaiFMcNyaEQw6KrLGCMMLUmXAuuqS377J6kQHypTvhfm1dwGTnN8FJm37fuUZhy4N9i4xh5J",
  "key14": "3yzEVH3SWYXZfvk86jmwL4pzeuyKjPdq2MsVJrhZUkjujHELcxgJa4DF9s4NLkE9VhEB1TAPrw9Y5fEbPgs7J8u2",
  "key15": "4ErTAAGpC26SVsn1YYFT98VaeFVxuAk4y3ksLx4bRGiVSvB5jpxPkGhMeQfrGinyiwmtw3SsMmYHGqqMeXGNAs1A",
  "key16": "4crowQZmzwrqGXu8rf85D1PQ1mnxrWmYoGNumLdDsqqpptKmDvfWZ95hY4ns9CahkWYxCcRPS7mWd79U1KaZcK3F",
  "key17": "5C3zJypanFXGCVc2sTYj1aqhjBu5LayZtgyxCttXqA4ki9FbS1i9Jtg7KWSBDaS7rcPt2yLeoAKJPrrdfJ9f578y",
  "key18": "Xyzfb2TVfuFog3mmbx6vP9fbvNbFecoM37dY569QBV6brEnqPi29fAj4rLSH7K2nU9i3snh8ZwGucroxV8eGp1L",
  "key19": "2eNJueSKhfeRgaxv47JeZZ9hJvugXxEUT83vyKfkwJq7mgpKtTrmAkNyJagiuiqcXTaybuacjpVZcGNk3Av4oUMc",
  "key20": "4YmtLf7L5SGpmPWM7yECoA3ByqEyBCmARTX99UZc4N8NprporirvUuesuY4A6Jhpjx6y8eMuLeU94oWYK9eMkWxy",
  "key21": "s8cSRKfJDa6H2bLy8pfqZuLHekPJ1vWTB9s6rdnbwssshtVpB8X4dBQauNBiyf3C3Xk9EokQQj533yBLuJJucEL",
  "key22": "yqGNtqW7WbHnYFpGpeVHCwMZESUxnW14j2cQEzkDSifpUdFYLrSpAzH5nc6eGap6EwU9QbboDzQU8Xj4REZpf9X",
  "key23": "3x4ZHVJfDmR39QH1JrupGSFgREhXnhGi46GsP4XaXnz8GnPbxGLJCjz8JGA73DxUzKzV71pyS9RB7QSvRkXFfTfu",
  "key24": "597Znrpsna56Gt51sbWGonHgUnPkD8VAa8aQXS975j6TjjQxbziUEC4CLU7aG9MshzmKFEtT2gVTr9ucvEX3FLVT",
  "key25": "5TysrVk5X3mJFzHikGhvTtpzYHYCkten69SkJcYzkDGrW2GPWSg4VYcXMB56yMq29Du3eR8ozBbwNLXbXF5DqWZY",
  "key26": "xF7bRBDn3a8LftvE85CatHN7CJ57fD6DXHtKkdThjRmpyv1stdSyKL7FGXBw86HeH6U2Ze1DXngVWvQDRg5jJqY",
  "key27": "4V6gjkZJwhsiiEBPSEidREBHZJiP9HUTSCjeRN4FZt8E1w2Fr1QWedxoRSFPRhi8HuV6zWhWEsgoVQxaXWontbLR",
  "key28": "2LYVHkxuj3pbHPcpdErpPUntSFaDcguFXP6mVknpXfYSreotNqzBAq9XRA5XeAcDtnkeshKm2mn2WzWNhjtqPbfn"
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
