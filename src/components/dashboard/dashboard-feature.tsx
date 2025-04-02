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
    "52jE42gNZY6ntKt3FUK7eP2pyyVWnSP45Pnv5BG3XVybySg9pFjFdqJqP6M8nfbhhi6HM77kpVEZch2LTdeTdihZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZhgL7wTyEHwsuTdw7PBKJaabLt99WnWVbS9N5wtxVszmerp7oeCN5XwN8HkSqFpNS7QRF1QhZ4XCn64vjbfyFpZ",
  "key1": "21f15ULsXvBPNQDAnsVheegV6pfEsGyBYg2eG7BX8xX1jCuckn5P5TUKZDLBHjdWSCYmqDVhfWhwNAwGuXiRXmmq",
  "key2": "4e3kvzBbsowyyLJe3nZf7WSBFetVW2xZ5R64Z9zmME4Wq4aqNNEf2TdpShcuPUBjHaX5XFDj4UWuuqxUUgZZ8MaL",
  "key3": "4exk9KEw1L6GtBQTh82SQhndYADd9QDLWMUYwp7S5vQYJBYyeuJmrRkBMCnTaxG5EuhuHjTjh1KMA52Wk6DtzHMv",
  "key4": "3KoQTbh2TwFJ46hLbZtsrdy8hoDF316Rwv7iwL9UZLpuLk628XYthrioCsJH5Gq3YSBamk4kn3K5bSME4U2XiTt5",
  "key5": "oiAifdxAPffkpXAfK2dUvMjZDxzHFRmzHx2cz1En3wENH61udDhynT2mdM8obUxnQwnWcQUGAbuPxhoa6XFZWg1",
  "key6": "Pu7njYBdbCp4a1r2q7NrtTJMk1uH7Ktw37veqPABMqtnyMzAtDY6yusa5yVmy8yEBARLJK4Rf6Eb2jaSfVztDKK",
  "key7": "4MaG8X9BRcV3HqWqZvZyZt5watLpHBu4CmRVvbRfhayUvPF43M1vXN1B8RppfMHyjNWEEtyJ3PcPwNur9CxC5kFM",
  "key8": "2NEunb8W2FPZyVrV6TYJPzk4TKnQaZvsGPAmfVqVMgTYtoanbgos5tHQXtMNdnhCC1r9CsQx41H9uYRKizaDFTCu",
  "key9": "TwHro3ydrGUTF4NfzAHUSZ1YrgXKaapzWmjrdaM7oYxdXNSrTSd7i1DTM6aiNkXc9FgXE4V5qCaVaN8CLp2cGUK",
  "key10": "4HWZArMegjUqqKcpfeYicXQza1PQR6kAua7gmZVCYdLVnxGYvGxefWmdVbz2SpMmtXNSYkXxqdoeKuesdYYQHCF9",
  "key11": "5SnUJy2i6qFDRkWHMQ7wSQJmULzwGmuc4sSb3kvVSTQFtsjhuGCEtpRv93LAB9A1K6QUJJGrdVbmw39YynwnA7vt",
  "key12": "5RyeGih4aMnQg6jLLNeenWF42ooiVS7xgcvSP8SzKY5dxytVMbiCNdatr1GvJtTsuPxCEQzdBwHwc2CwYcZoq2rM",
  "key13": "5ngGJt2Tyf1J3edYxJwoaPUe1hNamf1Qh8nxcGCvjL122daEddRZ6UnDDk5d7f9ZWJUozrnYRcEFLK18PHigbrRb",
  "key14": "2TvAXespBBj18cxdLEG9DS6EwPv2mfZWmYecNt9UH461NJ9MtXZrJWykAqDL7U81Yt6y7LeNLMUqSvoSkAq9ao5F",
  "key15": "4CMdQBpbARVgWQ2SvTM4ox1zywSMEeK31fpW8h5s2yq8fJmXSiAiHKJ9xUyB8H6Ug9gVGG4VbRXzNLFcPPu7LQAi",
  "key16": "5avBdU6ecrhZbNzECJAmu1JYRHf4CnRbyfJ9s8RKXS6dHkgEpjAQyipqFgUemAQ59Uo4Z8VNyQqPFGVFw7aXmmjn",
  "key17": "iFCYYT5tpdrqvGpPkwHL1K7UhYqMQLzpkp3wyaZXoR1qKa2TH2DBiUdy9ASy9VsLMfEwsnccKtrd1hTAZfGgpDA",
  "key18": "4395krK83sodGiX6TwQnUES8rpVbfFyHZLAjdDzban1CewQ6QEmruHveMWdp3SUBtooZ1VboGQdH4HwdJMTbVMZ2",
  "key19": "KNEmKGv4W9rp9NHR5dGNhMDZqhxxaFRhkAiCnDe46Rbc79NE9Pfn1UuZG34RAFpp8XKySrv8ERTNP4tZS6Vnuji",
  "key20": "4uSZmNBY3Va3QHsSiS4eQof71aHK7o1BTWAKuLEVKd1nXYksMSLVshgq92bqfHS33oQszpYZvUe3ZzHKrH1JCG5i",
  "key21": "2jvHzJGEbe5LW7tD54jngkSs4ZyM2MpvieqqqocX6xUfs8eTJ9FoR3z9gdVHF7vwqkwUc2QoiBnSPUfVA2tJCAEt",
  "key22": "5NuwdfHpj2md4xuaun2kQLWLDjsnN49RUT3x7RTfoSmgq1wgaLFTR9Y2wKtFVvUQvJd1AhE1JpRYG1NUrPCqtYrj",
  "key23": "3AERc91grH9KvY4VBMvCcxoefKqNkLvHXbCUnfw1fqvLZW4K8fQf8ibQb1R9npn6KrJuJX7UZCQjL7G22rZkYAwG",
  "key24": "5Zf98bhisBky3GDeAGot3EuQZGB6VyBNovYxkBBHaRk48h29sgu1oAN1ChGTofE3kmuKeW1A6MCNijwdbY29gbGi",
  "key25": "4N6KCJuCvtSvjyTxYzqi4uwQHtqsSJ9EP87WHHpzt7VqxEtZPM3nr8iuGfDUL11zGnffFbG7qFho9xkMDMfFiqw3",
  "key26": "2XhT4n8YViHhTkvGWN83wGCJ7NqDxBnDGTSr7LiWEb7hBVHN5ygtDUEFaWL9yHk5BJu2iJSHJSkfinpeN84Ptcxy",
  "key27": "445Y1D695bj6jhMpNQxJSqHk4SfqzDftLiiLfmsoZh8FeJsSDQTuJzj8WvK1NyX2HFUC9cDNCyA1rWo4tk7axmdZ",
  "key28": "hom2Gfgj5fyxqLinQ2YUK1UFjnbVdUsK2KFgxXKqmvya6LsUGUkgU3PrstQVw6DcYuvWmP8KcqwQobvCsERWyTc",
  "key29": "Y4EimhfyoxZqJRP4Q4L4bPzrbn3BDkDXmfzwDc1eq7tvHVyC6ASGXffCxjLJnvCBTPM94jEXkrowtZJTCH7Xzf1",
  "key30": "3wppd94KRz5W6eGhEhe7C8RcxfpCjS4BgJM7hJJwQCkHGoqeTVtG8dsk5wA74gxnkDscgf1QWmni7vcNyEaDAbtY",
  "key31": "3eGznEchmw7qup1nykRPyhtgqjo5C8GfRDT2dqBEczzfz18ZutndKQ3Zox44p7sDLr9ygkJ5vK55Jbd6MZ8Hmgz5",
  "key32": "5vLz2gy34CVJaznWkjc3bmVTmftm2qmF9t5WQrHtyjYLUBfe9vcY5g13RAVzS1FbKzrNTih32u7ijw2PE52K3G7N",
  "key33": "5XpnJjTcREneFJqY4Voz6Tx2KbAuRcV7Yjucr8NiGJDee2h4ypmQNDfZCtqPfNrWq2A28PDbw7WtBDBNxommX3d6",
  "key34": "Yo2JFSrER46iWKjeE7B82nnYCEDUSJ94M4S1nsqHdRnCaoEoy5DrbFHnRijcAZzqPTAif8HoWf5nQ3QjeBFwohP",
  "key35": "4QFkk6XRiMNCoXoL5wiZvSGYbgdpki1iZHzjo6QdDGhxADhXYMcXGMiLCMt4urCzNpudGp93zm5obXJd8owFNRSp",
  "key36": "4tATU1Mt3mTRBrDDk9UWEkueJ1qf6EhSp8VehvATjgLuGZ3dvSKpmfMwFKcEYwfvskRaNhLmEyr9aTWXm2FpWWDs",
  "key37": "24jvT4KMUCii8RXVDWKbpdevTecgir1idsfYKEH3vXtvk4dWUc2PSKMS5fgNZfmwnPb2DyPdRKEW9EcB8fisfDfz",
  "key38": "2o4Xf43odLMFBjuQguntwWQeZMUSkWN7ZTRYct2aJ9tEUTkfxJnYGtM89C6XkRfZCMFsWGAQjxr6JnfJVQ1vvpaw",
  "key39": "23LyrqbX2Wu3xr2hpoNCZqAT4rgMr6TtE1okP8cYzPRzFYnDfuyHWgXasmc4tzrgzhhuQsdyTF4wHCx3Cmxmus4X",
  "key40": "VvAFA1hezwS4nu8yN64kwT8oA2sabyfbbnWmBr6LvFL9gGrGLWFUXN8nTddWSabutFu7odiFfE4WYrL8au21THX",
  "key41": "41vqHzVjCXCvmAwBy93akaQsAGBnbs9bMu2Xg58gyukkBRZhgWE2UeMNWPDA7M755mMqDvPY12wvHQP93KVt5kzx",
  "key42": "5m6jQkY8q3MnrS77G1LBa9wceiigiQtUcmSV7vZte3urZjgGHg5DNpRf3XMobCh2B8ZLd8Dn7RzWJAcYVHMUCSKN",
  "key43": "4MC9YTLYMq9Z13aMmQYF1VWurgcUsMqKFCihjaH7FNCxYYdEB3SUk8BBPCRCBaRwsQi6Y3EhM9swyAaVJPDsF3Me",
  "key44": "2ZasvGkatDmwFFK8NzDhxP1YiTiQ5uybmhrbHWoa21n6cZnmo6s58BLK7rdr1B4QSUXXGwKXTVMXnTUpLkZGdt8T",
  "key45": "5uHbhDMKuX29M5SGwFjtPaYgJGYmBSv16MY1gnNyY8YUxDy62fK3WZFANqiuZDNJmBLEFx3rvJrWpnB5fKQWb36X"
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
