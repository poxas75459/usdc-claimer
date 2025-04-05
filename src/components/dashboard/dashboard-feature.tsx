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
    "4hjm5cShZmWtgwFqCWGWkMe5u3gFoG6Lb4syxmY9tjXmWaM6vPvvzdoEmkdpEy8o38GwC5H9axqtLyR5juY5ftzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YJBdughRkfF9QYcetZNnpFmPsKyN1KT1S27567ZmWfA82PVarRriDEg38hcHgwcLScHhR8C7QFrtWnEtC1wgogG",
  "key1": "5mmKdftatj5DVoRy2L2VJRABx83JDPMxd8mxTrh1KdTTYDvHWHSVNfZmvuUDN5WuasBUQz7AbhZCTxrvZp94rAkZ",
  "key2": "5svs8fkgK4e8UgUfr7axCuKQpMtEzyKXWKJMATJqurvthBYddvy2ix3jnjnBLNiNuH5oMPZNzvTaXh4at3TLvTB8",
  "key3": "EfuRqYDDwBq14mAVvyFrCUc3cTXBnVQ8UsfoxEkAoSsnA6KsABomGyMRjN8TQMFEQkLEk6c77PuQFEdrcRWPYLb",
  "key4": "3gtansR4sLXXCVbPdDpHiVEJGsZzbXaHWvgRC5wRw9vYi4AGejNT7iDxAXbacybqKiKsJZYp8nTbWQKDx5vbMmws",
  "key5": "2eimcbg9mXPPFtDLTzCJP8UYxW14RwBnzKquZzQ6Ak3V2QqNbKpJXTLPHcqTE81Y2xDuv44M61R4pk2TDFhxCQyJ",
  "key6": "3qcjt63EcRVAdCMkvMSG5DbyGaNQ62Ev24NRUjCQw3gqk9odgpUEYs7ZZYVtVAeKHRLpafjj42JAtrXuUiRzLN3U",
  "key7": "2maQwRUTSfMmRZRi4RAXndDRbCadi9jhKzQNoLe4ZnSwrSCiW9tDnJKRbVbKryBVwpmQ6Rf5tKGNfMC95NAjurPN",
  "key8": "43YVjnjp9Adps1dgwk6NDDNR9AabnhpR19WYv5gaQWsSZrSi8z1uTkwu5TCZcHuftnxn6vYXEZXJYzbdC7PqKBjT",
  "key9": "6ALGDks1c3hPbJRYY4TyT8nQJ1pspasq26SGhvr2sKfxJuE1Jypc3xHhtCjTZhrWHJkYG1ScsaiZtWkefMuVKCq",
  "key10": "62oro2A9ZV8NyVmduCkov9asF3tqUsJTDQXQXCziSNQRpCUyyE3fgF8QM5THzuwU3xiyiMws14TeAm46raJes9j",
  "key11": "2YoUZRNsndavDre2DeN1QpQ6VKRaZ6zuysxnuU27c6LHv58Q3Fih6VJgwe6xaj7Zkkcdt9EhVfVMmJJN9od8wbWD",
  "key12": "4hXt6pfsgJdqyaj6DtzgbsDkqMDC4KFngJaxVVk69RhX9Hfh8tFjpmPVeemmsaYHaVnbnziDN2R3hQZJxenSnMn2",
  "key13": "3FeV8nLCZ7PVrLTcHVzCcnYnyXSMw46pjv397ueJqn6MaEQhCMhvs7F1EqPpwopTty2maqwtSB5M53M2nJfJkvis",
  "key14": "59hdQdJB7bzgxXEN7gMhg3ZPmPsb1x7Kpz3o7iQhhvemD98v9BvYuCy8aaLEFKMLY4pDJvnJE2gsnKhyV5FFaWem",
  "key15": "3DwvTcH3i3SiFZawBe5qsdWgKDNMMhBEQzf6rZjhXj33F3P88XA1r7beJE7GRPB4zrYfScurtkCe7zQLoKiLHhuN",
  "key16": "2ai6x8kyJU76xSmREuSiaGGASoadhYg6TyPk8wNsGe87tsy7tfCx1wcsBZRkrEuU8GLw7HhLciSf3o47tTjFZVzM",
  "key17": "467rFUvN1w5TBjcV67RExXosu8wb2CkqmtLNCrHTtoycvSnFhMj6NJc2qh8xJAktdc2WqsaXVizs3Y1Ld3L6mwQe",
  "key18": "qK1mavfzbTG8AkPiMV1kpv3NNUfiaN2kVDGrVNhAdrLEVsyQ7hMbthhn5v7JUQPoj5SVZTJd76BoPNPaCbuLHuS",
  "key19": "3hVyvjZeaoqBoyK1QD8H1ZRx4faHJVnPgwAdg771N78mMtNxzLeje3R8WhvPWnQRdkfHQpbT9yuFFj73TxAJdt7W",
  "key20": "2P4wKgWr86NbAw9Bkx81gEpt2Ac8TcDAnx37fA1zFEFXvui1uV6e8VCNC24pgaj1DuY7YuvrdSzMQzGL2hAghFpR",
  "key21": "4N4GUywmy5x5AnUoC67VT3s93gDFaZ8AiCBhoRUfvvrhmXR3oWUFbo9m93zxtRyg6bJ4cW8KTKivLdW1U6w54FXW",
  "key22": "273aWCcoDoNSDk9bNzbVJ4Jc8hUM6xVW34mkJaXVgTxJPbqgDMHdPnufcQxFAxyc1Nu3SbgdbVEVYXvXMwVyV96P",
  "key23": "Nj6g3rfjeCx7eC6mQ7KKYzBzRMWFqjD8fS9Cbo8vPnq1w6nsaWvYiA9Jr88JHKJehgdSfnTNAr1SMvsZSfUB4Qf",
  "key24": "37wRUqqN1txUCKebTUYzj81URkUDBkgqx9v2hTCXKUwHZN7wbU7B4JrM76nAo5kt7CuSYHMN97FZ2gCSUXMfcHFJ",
  "key25": "34Zd3DhQ3p26MStaNWDqJz6xQe2zDyvLJJvbqobghHuyDLMwuio4r66nFLdXKme8YyAVC87vQp9WV3u2UeEWEGew",
  "key26": "2g5DxsHZ2JLAwtA26QGPri1weZCmRENnnBUWKX1KCPReoqREH41pxUse2NYPBVckzsBTjcyqyoFdzQkUcERzWDhU",
  "key27": "38fGKytabhBhkqv7CKP4sijvL91McahLL3ev4PRTZMcDhMMKjxHEkBhxuhHNh7gJSkLuKimkgpBkpFceTzexsu4F",
  "key28": "3o8xrBgAj6ReHgfrfTzLtJMt2tb2oCTV8XY1xLbrxhuaHG9eLGHwZ2VdjzdRzNmPDZgsUVTYMMBHuaMZUqMbTM7F",
  "key29": "2r175RUQ7hhtFHQ8cvKGvHS28DZJvhadEkVeC94CpNwM8a97wWoAC1yLhSb5TTLorNS3LnMr2aTDDQqhjhRdveeG",
  "key30": "4T8GbY6wH5yBeS3CoHiC8MyUrk8uGPXrLbaWM46C8Npv5t8EwpeYYz37M7wadE47dLj8gN2Q2PnKNFqvNGXZkiWn",
  "key31": "EfG9DV9zehA57wn3v7sZzdRaJXbczLw5rwYG3gRPeC4QcwQoNumZqxGC3sEutkCe9ATWjTSzmRM4CARqEQn6CL3",
  "key32": "8oSgoBfBXM7tA2fMZX4FRdCSuRTuNQ6wYcbLqAgGdhFpn9NJPnFFs8gVMDgyTcboqytLKzFDniXnHqo3ZuVwzFU",
  "key33": "dmw8dZdQpzGVhaUQuLNwipBRbu58xscFQcSNetrKqXdbvQ7kVU5zfaAGer9n33HaCsdcTUfvEkyeMAAJvHc6ebM"
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
