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
    "bJa4nGC2DgX1CZyVfHQroqvx6Snapqa7zpDynpAEhT6rub5BU29sHdrAr8fv8WFaEZ2KbC7mZRLzpEpewakAbFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XPANEyxA4q4fT3RFaFBP5xwQyxTiub6gCbADrmgwd8N2BMcTBo7H4zNWL74wxKy3Y8y512XfWaAxDDwzgqMShez",
  "key1": "5cSXbC4DjzpRi3p2xtxinx1Uo5S5q3rW9xvUkcCpWncPB7D5PB32fNzD8ngD3U6sHqHokzUpHU2Mvfym7U5W8adu",
  "key2": "U5RDvfWrRLNV4Dxp8PU1cEhKVA2khWnYcWPCkxsZzh8Z8sNmwVs7hsbjZpHec6rqdhvaoiMyakvaepcXgoBrT1W",
  "key3": "2mHPnvsJyY1911RYMB1MdiZMVHnwezYkuCuLz7r8SDvWfZtKVxEH2QENJrAwkt6vNxebQ4EQRYX3D6ap2tGoEGsr",
  "key4": "67opqz8kC2p2afjmVUK1mmQq6pFpLXnc7Z8pEp3R8HyWkr2K6wAULodG9LKcFESDAivJtBkvQm4tjZ7J8EzaSHu4",
  "key5": "2XUMM2zGRgJygyLN3zzGs8HS7U6R7aNdfRpJRi9YDQWyfpGnr7oYUTFUFpcn33L13etW1QRuQUvDyArmufTGGzXg",
  "key6": "572WqMb4gMiqY1xDHUgJevb7Xc2dmakaLxokMfPAxJ8QjCD2pzWViGwRi16PCBUjddFLxPCfZFJuJf2SX9zLp9Kn",
  "key7": "4DACVMRFjpy8FLENHoBC1zjxQXVfqECnV9PQnLyczxXQ5xTYRV4rt25pws2ESLUjWmbPhoVZD2EpS9PLaHLVDZo2",
  "key8": "5yiue9Jq5KvQ8E6sySZ3CMTxd6LWXCJbB3aQvA7QiY4Sp7NJufvG82LYrDKrpwY6N4NiiHGv2ZbGYJyt7gsdwvyQ",
  "key9": "5pjrWN9szpY4Tgj7Y51ADdr7ApnYVxfqwaJSBUFCvWEeuf6M15p78VRuw8WdMykfyyFkAvGtXupAAaDcchYRFJ5W",
  "key10": "3x9GGB56hKg1aHoKe6UXhe5XMJctR6c8T7yh2y9CbE5cM13ihkoL6DRDCZZrycP2r1gR5PKMYPABL451qkYxeSef",
  "key11": "5goQd1YhWUYvbvCvRugV2CRG99kx5oUQiVPuAAjsdN7LJj9UiRhzHJFyXn6Mbe2SwM65m25FBEkKujUFkPqmB453",
  "key12": "2bAm25YXs7DX5wWj5HJ5iTE1Cd92WsG2XewbLerooXNupzVY7hwMu5hqoZU6mEEyintvPh3gks5wnYECsT8CR7ij",
  "key13": "2VHBfbPXsUPDzRXhaYJrzPdHCibACMn3Ci6o1i4hFe4y5eQx11nHiUmEUKZxsm1Ds2F3e45BsmTuNFTpq7AkS5JC",
  "key14": "4BLeWeQud72Hhpcq4fUpiKupscK9M1qFnxgycBeMS8o4EUgjANBshfctfYuVFhkZNNkEwEKN9dL8S4aE29YKXUiS",
  "key15": "212G2peY8q15sFNVg4FpwW4LEAgxq6FMbTLWdEgbe1znWV6tMZ2sy12RSngBr35fVYofyABcw1rf5dUgY6EvLPkU",
  "key16": "3rGKmPbz7ii4bVGZiwu7R995vgfRXkQBt5bta7a7z2cXaeiFMuJk4M3zBqtTEXkpnS1R8eyETUWa8HHjDocsZHz",
  "key17": "3fJXJMbt3t6Ly3dTuVjb1fq7iCoZS3kuZihgg4ZtVBhXD34Hh1DiQoMpWgSrvBvPw9fdb1Buq9x9psPZn9Rzf9bX",
  "key18": "jH1cxjiBZWh91yC6mxb9sj2JZMfbd7zHnTaBA8boaBqrEXDhXuMfiU1NucDA4uAEAjku6E9YLeWm5A5LvJm6RRS",
  "key19": "31hUsuY66vQvv438tKWeXTNNzGvyRWvRjjJ3hgnLXxSvUWoiX6qDZaoyF4t1UvY7Tz9wEb3KKHre8k3nQjf3XCzZ",
  "key20": "3SJo4uAcEDz9D6KndHxSUync3a224tH1uHmgh5K45xWRFzam3U9kwDZsTKKf4SZbCyGeQBZ7P4q4338N4TPxiT42",
  "key21": "3vG8jJkUUabHMafHi6zEAGvggVsAUyR3oFjXNeZjQxRXcqZ3iSBN1wEVXaCE6QaFtLsf1RppmVX7SG9TDkogQ7Hq",
  "key22": "1gfghUNVX9hfcuesYQZfsHFbjQrYE5jHWpdphhKsLTMbuNHcbozyve5E6KpkfKTkFg59VZpPbPjMvxsi9ffRTbg",
  "key23": "4bndYjiuLBaC9jMvbrTUVFsryQByijd9Dvfci8tKe1RuQW3bJ9ohb2PcJQATAhqNXjEUQpeqkDv91C6RnxvKqZGS",
  "key24": "52Pw6aujQep8Uchq2B7FcUVAz3QBfZLrXaZX81V6Ahqemdg6xQKujEU6hFaAZeuoY1WDFZDhbfQ3jMAEroBW5Nwu",
  "key25": "5qqG9DrakQrnB2SorStnWaZF4saKTYXep6SpkjTy5iw3uRCH6e1bhCAdRAeV8JoaqWCf38E8JPHQogZr4xzDSqyY",
  "key26": "3t9UH7g7xVKDT7RTkNDbsZPEFWQo4aWZ2HH8qKAbYMgKhehwqS8K5saVkCXnpYNs6kH3RRs44hmA9tiJoYLPsVjW",
  "key27": "4NxZxUJUBNEGjqHqVpkXZJyFKrVgsFopjBjVpN8xuWEB3o6aZnVciPUxydVCeEfpK7skGjDn4sUVkPFDbAWLtMC",
  "key28": "3iTXHUhEUSMLeokcDoM6EKXriwDKWFvy8AhX54b9rw47GwGBw4mhuBgk5Rm68t7EVny3p6MecibGYLhv3jVW6jRL",
  "key29": "3Ljn7mRjDanmpPPPi7hHXtSPcSWUoiiG7VQVhJrpkrhgyXUNU1pr5dxSpfmALC8pHK2Cj2vjbKoiVmiqq2tvom9N",
  "key30": "2bpZjQs5rpUHnLbBeuYNb9QHHZDJFpR2qnLC6ZSbjDZrYBPkJsGsVsV3XgAfrcJvLancoe1Uv93JGoBbY6kVNKBw",
  "key31": "2NRH9CZs7aiWSpQtxZ8ousmejdETUmGr33V4uP2KeCvRw7oYc4rijoWFDKAuxdMefkMsnxfxbziJvbr5wC3zWiLS",
  "key32": "29HkGPp5mETrbuuR7waNWrFhm2kShGaypRbMfdGpazzM1YfX8CsvgNJBweeVCTiLj1pSdLW6Z9SHCmTXoVUsmuWx",
  "key33": "62fErBhbZgFGqkm14RxGELHQ5kyVK5PaybX1gtaKCrAJjcNQETaYBni5sQn88BXmwFMtS8xk5LvGnCrdoQuLtnRg",
  "key34": "5se8bKf8oaPKBHmgtNsv5yAKtRXUyntGaGTTuD5DzetjPVYbjBbiP6S8CwyPe2MPjtW6ggqPfufnWPYtZksgKsXK",
  "key35": "2CGoH1BMvXtKyxWSCFUXbMv19ASPTGyKymLkW2fhpBU9njVF8h8rvFmvSNjZ9ch9DNDuc2zk9noZqNN8rdtdwAKX",
  "key36": "4zZASfWQwPurcVrt9xsxCyjJik29XMbi6LVSNSt6L4fjEoc9T3y9Cryuq9eUgT4rL3fbD4DWAkjNsmjAg8ob7srP",
  "key37": "5o43Pu8K3yLFWDJFdZnUevEGHuhCs7y4juvo9Tr4Tekaz8R9n72h8oS5FoQjqdrmBMLMA1kTpqvZuvJzYgm62cY",
  "key38": "63QQSrWmWgNyczfVaVrxPiUAErUfjHg15BqW26dxVpcASamZUw3GApcovekw7vAiBFafwtHGYu52DEY4qWR6V7zr"
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
