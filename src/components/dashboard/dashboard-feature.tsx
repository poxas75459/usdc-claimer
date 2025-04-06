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
    "3GiRYEDXQ9GbH2MY2qhJrdcUzpgPD21EBNKE6mceRXN6CHPrCGAKCsDQkuXbM5EFv3JCevDsfhpHgZsJMkntbNsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JLuXgeHkGUPtJCpWt6MKqPo7PvkfduPQmXs28XkmKyWCvTBHHFxyk5ahWWNHbQkKdH1HdKHA8TdicaL6qH32V6M",
  "key1": "3UU6nwEh4dhfaZSYZDrybEH9QQQ8UyoxdncyvaT3vUek7YcDdmyTGyDpxuHWjDYyT98kZP3uYpXrtpRq7PVMdEe9",
  "key2": "2TLQ2NUjySAfVq2fmeHQbgLcLMmRGADgjdejkTDtynDp2i7bHzHhnNXSdmk5FpQwVrpzqahpeGPkqvd3PGYARKC4",
  "key3": "idAh1Eqjdgrr5xmfvjSc4omqaLFcecMtWFudVPcBZbnUvjvvFx7oMJ78iEfHz3BzS39rCLeitMUn4wPaKbYcnvL",
  "key4": "3aGa3dHuYb2cYXVMPR95Y5hYR7rBRygyPKrw4wvATPVwqFjiViY3GHa3y27hpSDoga3DFCw98VaxgdcEy245iDM2",
  "key5": "63Gz3TAJPSUW2bXHkC9AS93jWG9RYZ2xggrHkswheFgqSNjiJGUBt5259iUey25P5NrwoAW6PoqZr64bS961Q1xb",
  "key6": "3cS4KfATppqZszf6SXPt8eovMmBPgacY948nqKPuoT8oraRQpSZvZRpJ8cga6odBtdMcyLdo1kWTb12DZ5FNkWdM",
  "key7": "2Eo89s88TX6AMg6V5YK9aFJtWnnfMFJ1KMrSfmXAciujAKBdo2M5KWSu1vtEaeCC7yxbazUR9xDxTyLKSw6CL2Yd",
  "key8": "2bg2xgA31RgxxyD2UKMG7kHXba2jUDEbcQGnoRbv2FZWRt3uvmyryWAvn8mNhgZ4MdMLEHU7f9dQyM1tBqN7BpLb",
  "key9": "5GANL8mEmUaS7dhKo6h48A9BDUKKkdyJYAQvYqRS6551CjV1e4W7XSVF4FrBucEeHCmaVAjpjsTcZK6EPY33LtJC",
  "key10": "3SBACvHZseXu9gJBWMmFRajqhbofx5uSKDNVRipxEhCxUi3TXhUKbBNX1kgFpLJMSYs1K8JXpAGuTdNLDH3MWsG5",
  "key11": "C4b5qsKczUHgL6rAD3WvsbTNMPU6GNj3AFseLD5YGALENQYMFQyVw7vGAyqHzPbS2QEHWFC4PJazYRux5e7jm4C",
  "key12": "sTYdf8RyW5iQDLboDWdogaY51jiUgrHMpvfzK21Z7qmYxquU7e48GgEtBKUMszLjuKrBmgGZpQH8sPkeaocLpoJ",
  "key13": "5LjeZcJYRJBTrQFiMbBqYYRD9rwnRcssJqhZaVs3BspqdTsFZ7Y7zzUARYkW25AiXVkZcTiYSkVdaVDBCNS3jM9q",
  "key14": "2AKsncXgLjKXcWsQkaUNMHoUu3yPVs9STHebghtXB6rZw649gbXN1H7bcJGHLCcbs38V7yyTcyPYTaY9VooGL3qV",
  "key15": "5NimhDWUhfC3xhVxeXS5kYArF9veRJc8stJHDTGvx8bS7dVAbHPJx83LEU6RnCeacseNu1BnVm6bXbRUygCAg3hB",
  "key16": "4u82SbtvSwWFrLUH4Pw4fr4HoubFJetXHVondQcmy36687c8yDwbAxryMwYyKzUvvWBet768WYazZo1KSYyoxHeA",
  "key17": "3ov5qYUUD6Qt5SvjdHM5g6NrYhghRj6xNogtubz2Sb7cvS58WcNhCmwFfedVdTSH3GrtzGYEENLrcz5sBJgDmJmD",
  "key18": "4UXp3c68FnAqqee9yXSZJnwo8CRefQbtuwScpQhQXjnG4N9YLo5ZT52wB6oer1H3LBeLkAARpH5uoq6Mi4WtdR3F",
  "key19": "5QJPaHhLkkGDF1L8fpD4c8DztCEccfhD97aC1EMEEaqA2TZwpndD5QZFqFfdnMZCBsiLzaCgxbTJuo6imKH2N7em",
  "key20": "4oi6q69dGXLJMz38tgCvg9vdVHGw7zwDK4FkvPQmVFk4d8XJcYqZYsHMdoGuMhwXPqmyLHhujw77LWfTtx6W7JNP",
  "key21": "63239GWJa3pwoPHqZhdqG6chhpzrAEuPN493FSWPzKxLzsw6Baw4gebM2TF2tGcp66CTfLWRxmMbk1i8cjXsweT9",
  "key22": "2V39623wjVdbb52GVWUwSKEF7ecpJzZJXm6DbiHuT7KDAyMPwTxdFnv8G3sBfGQjczxJQADndNWCnuxkJrBrmAc5",
  "key23": "4egDREZHYPBWkxAtKEBGCEMpwLeLTGV7XbsDUTzdccoKfTLknG3dYRetmjkBTNspQPLQzmNEDvf3QMcsuv1TPw8r",
  "key24": "3vzW6m64PNoc8qoPHvCeTbCPknuLri3Gp3zzyH1oRb3RuoSLetvr8x5uqX9pPacBL8ZzEoSAx43SFtPFAeGNBYrg",
  "key25": "4mWdQCRYUfj13q1hzQSi3wpSqTeag6xMfwyGDwyQy9fo61DdKDwHZc1PVvikbDsk9MA5sMj1gw2wGG7L9R2BxAaa",
  "key26": "36VeDeQC86WU7V41UuZdHNpwZg6yfnH5QteykGAzJW6gdxW2RGg9cNScnepgcZGgdxcFPzHRFVAUS1adRBiJ2RZo",
  "key27": "dVDEFe8TDmrp91CumCDawP3EQpooqeaxkYSkCQRy5ptXQ4itVJ7XvdoDkwmdxqXRLT4r4xBNTnvv6VppiiWv1ak",
  "key28": "4oekAJW4R13PYsDVaNXLTmC5n5ELfa7xEe6Ewp5Zz5rQQqicfgPG2BNsNMaAaCo8F7fWYuxjDpzzkm5MF46Wj5oQ"
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
